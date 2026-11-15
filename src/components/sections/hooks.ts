import { useEffect, useRef, useState } from "react";
import { getApplicationStatus } from "@/config/applications";

const tickListeners = new Set<() => void>();
let tickTimer: number | undefined;

/** One shared 1s interval for every time-dependent component on the page. */
function subscribeToTick(listener: () => void) {
  tickListeners.add(listener);
  tickTimer ??= window.setInterval(() => tickListeners.forEach((notify) => notify()), 1000);

  return () => {
    tickListeners.delete(listener);
    if (tickListeners.size === 0) {
      window.clearInterval(tickTimer);
      tickTimer = undefined;
    }
  };
}

/**
 * Derives a value from the current time and re-renders only when that value
 * changes. `initialNow` must be the timestamp the server rendered with so the
 * first client render matches the server HTML.
 */
function useClockValue<T extends string | number>(initialNow: number, select: (now: number) => T) {
  const [value, setValue] = useState(() => select(initialNow));

  useEffect(() => {
    const update = () => setValue(select(Date.now()));
    update();
    return subscribeToTick(update);
  }, [select]);

  return value;
}

const selectTimestamp = (now: number) => now;
const selectApplicationStatus = (now: number) => getApplicationStatus(now);

/** Current time, updated once per second. Use only where a live countdown is shown. */
export function useApplicationClock(initialNow: number) {
  return useClockValue(initialNow, selectTimestamp);
}

/** Application status, updated only when it actually changes. */
export function useApplicationStatus(initialNow: number) {
  return useClockValue(initialNow, selectApplicationStatus);
}

/** Reveals every `.reveal-on-scroll` element the first time it enters the viewport. */
export function useRevealOnScroll() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("opacity-100", "translate-y-0");
          entry.target.classList.remove("opacity-0", "translate-y-12");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 },
    );

    document.querySelectorAll(".reveal-on-scroll").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}

/** Plays a media element only while it is on screen so it stops decoding once scrolled past. */
export function usePlayWhileVisible<T extends HTMLMediaElement>() {
  const mediaRef = useRef<T>(null);

  useEffect(() => {
    const media = mediaRef.current;
    if (!media) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        // Browsers may refuse autoplay (e.g. low-power mode); the media then stays paused.
        media.play().catch(() => {});
      } else {
        media.pause();
      }
    });
    observer.observe(media);

    return () => observer.disconnect();
  }, []);

  return mediaRef;
}
