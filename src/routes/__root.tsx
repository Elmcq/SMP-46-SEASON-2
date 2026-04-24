import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { Home, MessageCircle, AlertTriangle } from "lucide-react";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background relative overflow-hidden px-4">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-hero-gradient opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-2xl w-full relative z-10">
        <div className="bg-secondary/40 pixel-border p-8 md:p-16 text-center backdrop-blur-md shadow-2xl relative overflow-hidden alliance-card-glow">
          {/* Top Banner */}
          <div className="absolute top-0 inset-x-0 h-2 bg-destructive/80" />

          <div className="inline-flex items-center justify-center w-20 h-20 bg-destructive/10 rounded-xl pixel-border mb-8 animate-pulse">
            <AlertTriangle className="w-10 h-10 text-destructive" />
          </div>

          <h1 className="font-pixel text-6xl md:text-8xl text-primary text-shadow-pixel mb-6">
            404
          </h1>

          <h2 className="font-pixel text-xl md:text-2xl text-foreground mb-4">
            DIMENSION NOT FOUND
          </h2>

          <p className="font-mc text-xl md:text-2xl text-muted-foreground leading-relaxed mb-12 max-w-lg mx-auto">
            Looks like you wandered past the world border. The page you're looking for doesn't exist
            or the portal is closed.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              to="/"
              className="flex items-center gap-3 font-pixel text-[10px] sm:text-xs bg-primary text-primary-foreground px-6 sm:px-8 py-4 sm:py-5 pixel-border hover:-translate-y-1 transition-transform group enchant-glint w-full sm:w-auto justify-center"
            >
              <Home className="w-4 h-4 group-hover:scale-110 transition-transform" />
              BACK TO SPAWN
            </Link>

            <a
              href="https://discord.gg/VZZXY4pFUj"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 font-pixel text-[10px] sm:text-xs bg-secondary text-foreground px-6 sm:px-8 py-4 sm:py-5 pixel-border hover:-translate-y-1 transition-transform group w-full sm:w-auto justify-center hover:bg-secondary/80"
            >
              <MessageCircle className="w-4 h-4 group-hover:rotate-12 transition-transform text-[#5865F2]" />
              CONTACT STAFF
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Project SMP 46 — Season 2 | Minecraft Server" },
      {
        name: "description",
        content:
          "Join Project SMP 46 Season 2 — a community-driven Minecraft survival server with epic builds, factions, and zero pay-to-win.",
      },
      { name: "author", content: "Project SMP 46" },
      { property: "og:title", content: "Project SMP 46 — Season 2" },
      { property: "og:description", content: "Survive. Build. Conquer. Season 2 is live." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
