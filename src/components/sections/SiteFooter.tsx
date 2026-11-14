import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import logoImg from "@/assets/smp46-logo.png";
import { communityLinks } from "@/config/server";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function SiteFooter() {
  const footerRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const media = gsap.matchMedia();
      media.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from("[data-footer-reveal]", {
          y: 14,
          autoAlpha: 0,
          duration: 0.55,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
            once: true,
          },
        });
      });

      return () => media.revert();
    },
    { scope: footerRef },
  );

  return (
    <footer
      ref={footerRef}
      className="relative w-full overflow-hidden border-t border-primary/50 bg-background shadow-[0_-1px_18px_rgba(56,189,248,0.18)]"
    >
      <div className="flex w-full flex-col items-center gap-4 px-5 pb-[calc(env(safe-area-inset-bottom)+4.5rem)] pt-6 text-center md:gap-5 md:px-8 md:pb-10 md:pt-10">
        <div data-footer-reveal className="flex flex-col items-center gap-2">
          <img
            src={logoImg}
            alt="SMP 46 logo"
            className="w-6 h-6 object-contain drop-shadow-md opacity-70 hover:opacity-100 transition-opacity"
          />
          <span className="font-pixel text-xs text-foreground/90 uppercase tracking-widest">
            PROJECT SMP 46 • PREPARATION
          </span>
        </div>

        <div
          data-footer-reveal
          className="flex max-w-full flex-wrap items-center justify-center gap-x-6 gap-y-1"
        >
          <a
            href="#about"
            className="flex min-h-10 items-center font-mc text-lg text-foreground/90 hover:text-primary transition-colors"
          >
            About
          </a>
          <a
            href="#rules"
            className="flex min-h-10 items-center font-mc text-lg text-foreground/90 hover:text-primary transition-colors"
          >
            Rules
          </a>
          <a
            href={communityLinks.discord}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-10 items-center font-mc text-lg text-foreground/90 hover:text-[#5865F2] transition-colors"
          >
            Discord
          </a>
        </div>
        <p data-footer-reveal className="font-mc text-base text-foreground/90 text-center">
          Student community project of SMPN 46 Surabaya.
        </p>
      </div>
    </footer>
  );
}
