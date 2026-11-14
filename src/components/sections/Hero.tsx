import { ApplicationSchedule } from "@/components/ApplicationSchedule";
import { LockKeyhole } from "lucide-react";
import headerLogo from "@/assets/Headerlogo.png";
import { applicationConfig, getApplicationStatus } from "@/config/applications";
import { mediaConfig } from "@/config/media";
import { projectConfig } from "@/config/project";
import { serverConfig, showLegacyServerList } from "@/config/server";

const seededValue = (index: number, salt: number) => {
  const value = Math.sin((index + 1) * 12.9898 + salt * 78.233) * 43758.5453;
  return value - Math.floor(value);
};

const particles = projectConfig.showAmbientParticles
  ? Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      left: `${seededValue(i, 1) * 100}%`,
      top: `${seededValue(i, 2) * 100}%`,
      width: `${seededValue(i, 3) * 6 + 2}px`,
      height: `${seededValue(i, 4) * 6 + 2}px`,
      animationDuration: `${seededValue(i, 5) * 15 + 10}s`,
      animationDelay: `${seededValue(i, 6) * 5}s`,
    }))
  : [];

export function Hero({ now }: { now: number }) {
  const applicationStatus = getApplicationStatus(now);
  const canApply = applicationStatus === "open" && Boolean(applicationConfig.googleFormUrl);
  const applyLabel = canApply
    ? "APPLY NOW"
    : applicationStatus === "closed"
      ? "APPLICATIONS CLOSED"
      : applicationStatus === "complete"
        ? "APPLICATIONS COMPLETE"
        : "APPLY SOON";

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      <div className="absolute inset-0 z-0 bg-hero-gradient">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        >
          <source src={mediaConfig.heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-hero-overlay" />
        {projectConfig.showAmbientParticles &&
          particles.map((p) => (
            <div
              key={p.id}
              className="particle"
              style={{
                left: p.left,
                top: p.top,
                width: p.width,
                height: p.height,
                animationDuration: p.animationDuration,
                animationDelay: p.animationDelay,
              }}
            />
          ))}
      </div>

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 py-20 text-center sm:py-24">
        <div className="mx-auto w-full max-w-[720px] mb-8">
          <img
            src={headerLogo}
            alt="Minecraft Project SMP 46 — Beyond Survival"
            width={1992}
            height={1254}
            fetchPriority="high"
            className="w-full h-auto object-contain drop-shadow-[0_0_30px_rgba(96,165,250,0.25)]"
          />
        </div>

        <div className="mx-auto mb-8 max-w-2xl">
          <p className="font-mc text-xl leading-normal text-foreground/90 sm:text-2xl">
            {projectConfig.message} Season 2 is archived. Its ideas and community vision are
            preserved below.
          </p>
        </div>

        <ApplicationSchedule now={now} />

        <div className="mt-6 flex w-full items-center justify-center">
          {canApply ? (
            <a
              href={applicationConfig.googleFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 min-w-[200px] items-center justify-center rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-7 py-3 text-xs font-bold uppercase tracking-widest text-slate-950 shadow-[0_0_25px_rgba(59,130,246,0.5)] motion-safe:transition-[transform,box-shadow] motion-safe:duration-200 motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-[0_0_35px_rgba(59,130,246,0.72)] sm:text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200"
            >
              {applyLabel}
            </a>
          ) : (
            <button
              type="button"
              disabled
              aria-label={applyLabel}
              className="inline-flex min-h-12 min-w-[200px] cursor-not-allowed items-center justify-center gap-2 rounded-xl border border-blue-300/45 bg-slate-950/20 px-7 py-3 text-xs font-bold uppercase tracking-widest text-blue-50 shadow-[inset_0_0_18px_rgba(37,99,235,0.2),0_0_18px_rgba(37,99,235,0.22)] backdrop-blur-sm sm:text-sm"
            >
              <LockKeyhole aria-hidden="true" className="size-4" />
              {applyLabel}
            </button>
          )}
        </div>

        <p className="mt-8 font-mc text-base text-muted-foreground sm:text-lg">
          Minecraft Bedrock Edition · {projectConfig.season} Archived
        </p>

        {showLegacyServerList && (
          <div className="mt-8 grid gap-3 max-w-2xl mx-auto text-left">
            {[serverConfig.primary, serverConfig.backup, serverConfig.previous].map((server) => (
              <div
                key={server.name}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 bg-secondary/50 px-5 py-3 pixel-border"
              >
                <div>
                  <p className="font-pixel text-xs text-accent">{server.name}</p>
                  <p className="font-mc text-lg text-muted-foreground">
                    {server.address}:{server.port}
                  </p>
                </div>
                <span className="font-pixel text-xs text-muted-foreground border border-border/60 px-3 py-2">
                  {server.status}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
