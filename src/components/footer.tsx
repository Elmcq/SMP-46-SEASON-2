import { Button } from "@/components/ui/button";
import { GithubIcon } from "@/components/github-icon";
import { communityLinks } from "@/config/server";
import logoImg from "@/assets/smp46-logo.png";
import type { ComponentProps } from "react";

const githubUrl = "https://github.com/Elmcq";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#clans", label: "Clans" },
  { href: "#rules", label: "Rules" },
  { href: "#faq", label: "FAQ" },
  { href: communityLinks.discord, label: "Discord", external: true },
];

function DiscordIcon(props: ComponentProps<"svg">) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M19.4 5.2a17.8 17.8 0 0 0-4.4-1.4l-.6 1.2a15.3 15.3 0 0 0-4.8 0L9 3.8a17.8 17.8 0 0 0-4.4 1.4C1.8 9.3 1 13.3 1.4 17.2a18 18 0 0 0 5.5 2.7l1.2-2a11.8 11.8 0 0 1-1.8-.9l.4-.3a13.5 13.5 0 0 0 11.4 0l.4.3a11.8 11.8 0 0 1-1.8.9l1.2 2a18 18 0 0 0 5.5-2.7c.5-4.5-.8-8.5-3.6-12ZM8.8 14.8c-1 0-1.8-.9-1.8-2s.8-2 1.8-2 1.8.9 1.8 2-.8 2-1.8 2Zm6.4 0c-1 0-1.8-.9-1.8-2s.8-2 1.8-2 1.8.9 1.8 2-.8 2-1.8 2Z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border/70 bg-background">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-6 py-7 sm:py-9">
          <div className="flex items-center justify-between gap-4">
            <a href="/" className="group inline-flex min-h-11 items-center gap-3">
              <img src={logoImg} alt="" className="size-10 object-contain" />
              <span className="font-pixel text-xs tracking-wide text-foreground transition-colors group-hover:text-primary sm:text-sm">
                SMPN 46 PROJECT MINECRAFT
              </span>
            </a>

            <div className="flex items-center gap-1">
              <Button
                asChild
                size="icon"
                variant="ghost"
                className="text-muted-foreground hover:text-foreground"
              >
                <a href={githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <GithubIcon className="size-5" />
                </a>
              </Button>
              <Button
                asChild
                size="icon"
                variant="ghost"
                className="text-muted-foreground hover:text-[#7289da]"
              >
                <a
                  href={communityLinks.discord}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Discord"
                >
                  <DiscordIcon className="size-5" />
                </a>
              </Button>
            </div>
          </div>

          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-x-5 gap-y-2 font-mc text-base text-muted-foreground sm:gap-x-7">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    className="inline-flex min-h-9 items-center transition-colors hover:text-primary"
                    href={link.href}
                    {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="flex flex-col gap-3 border-t border-border/60 py-5 pr-28 font-mc text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:pr-32 md:pr-36">
          <p>© 2026 SMPN 46 Project Minecraft. Student community project of SMPN 46 Surabaya.</p>
          <p>
            Student community project. Not an official Minecraft product. Not affiliated with Mojang
            or Microsoft.
          </p>
          <p className="inline-flex items-center gap-1.5">
            <span>Built by</span>
            <a
              className="inline-flex items-center gap-1.5 text-foreground/80 transition-colors hover:text-primary"
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon className="size-3.5" />
              Azzam - Elmcq Administrator
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
