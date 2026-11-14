import { Fragment } from "react";
import { applicationConfig, getApplicationStatus } from "@/config/applications";

function getRemainingTime(target: string, now: number) {
  const totalSeconds = Math.max(0, Math.floor((Date.parse(target) - now) / 1000));
  return {
    days: Math.floor(totalSeconds / 86_400),
    hours: Math.floor((totalSeconds % 86_400) / 3_600),
    minutes: Math.floor((totalSeconds % 3_600) / 60),
    seconds: totalSeconds % 60,
  };
}

export function ApplicationSchedule({ now }: { now: number }) {
  const status = getApplicationStatus(now);

  if (status === "complete") return null;

  const isOpen = status === "open";
  const target = isOpen ? applicationConfig.closesAt : applicationConfig.opensAt;
  const remaining = getRemainingTime(target, now);
  const label = "Jadwal dapat berubah";

  return (
    <div
      className="mx-auto w-full max-w-3xl text-center text-white [filter:drop-shadow(0_2px_8px_rgba(0,0,0,0.85))]"
      aria-live="polite"
    >
      {status !== "closed" && (
        <>
          <p className="mb-3 font-mc text-xl sm:text-2xl">{label}</p>
          <div
            className="mx-auto grid w-full max-w-[44rem] grid-cols-[minmax(3.4rem,1fr)_auto_minmax(3.4rem,1fr)_auto_minmax(3.4rem,1fr)_auto_minmax(3.4rem,1fr)] items-start gap-x-0 px-3 sm:gap-x-4 sm:px-0"
            aria-label={`${remaining.days} days, ${remaining.hours} hours, ${remaining.minutes} minutes, ${remaining.seconds} seconds`}
          >
            {Object.entries(remaining).map(([unit, value], index) => (
              <Fragment key={unit}>
                <div className="min-w-[3.4rem] text-center">
                  <p className="w-full whitespace-nowrap font-pixel text-[clamp(1.25rem,7vw,3.75rem)] tabular-nums leading-none">
                    {String(value).padStart(2, "0")}
                  </p>
                  <p className="mt-3 whitespace-nowrap text-center font-pixel text-xs uppercase tracking-normal text-white/90 sm:tracking-widest">
                    {unit}
                  </p>
                </div>
                {index < 3 && (
                  <span
                    aria-hidden="true"
                    className="font-pixel text-[clamp(0.625rem,4vw,3.75rem)] leading-none text-white/65"
                  >
                    :
                  </span>
                )}
              </Fragment>
            ))}
          </div>
        </>
      )}

      {status === "closed" && <p className="font-pixel text-xs sm:text-sm">Applications Closed</p>}
    </div>
  );
}
