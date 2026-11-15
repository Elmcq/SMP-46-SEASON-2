import { communityLinks } from "@/config/server";
import type { ApplicationStatus } from "@/config/applications";
import { useApplicationStatus } from "@/components/sections/hooks";

const statusMessages: Record<ApplicationStatus, string> = {
  "not-open": "Applications open soon. Stay connected for updates.",
  open: "Applications are open. Apply now and join the community.",
  closed: "Applications are closed. Stay connected for updates.",
  complete: "Stay connected for updates.",
};

export function JoinCtaSection({ initialNow }: { initialNow: number }) {
  const applicationStatus = useApplicationStatus(initialNow);

  return (
    <section id="join" className="atmosphere-section py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-hero-gradient opacity-80" />
      <div className="relative max-w-3xl mx-auto text-center reveal-on-scroll opacity-0 translate-y-12 transition-[translate,opacity] duration-1000 ease-out">
        <h2 className="font-pixel text-2xl sm:text-5xl text-primary text-shadow-pixel mb-6">
          THE NEXT CHAPTER BEGINS
        </h2>
        <p className="font-mc text-2xl text-foreground/90 mb-10">
          {statusMessages[applicationStatus]}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={communityLinks.discord}
            target="_blank"
            rel="noopener noreferrer"
            className="font-pixel text-xs bg-accent text-accent-foreground px-8 py-5 pixel-border hover:translate-y-1 transition-transform inline-block enchant-glint"
          >
            JOIN DISCORD
          </a>
        </div>
      </div>
    </section>
  );
}
