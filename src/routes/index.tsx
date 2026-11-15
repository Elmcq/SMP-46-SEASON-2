import { createFileRoute } from "@tanstack/react-router";
import { faqs } from "@/config/content";
import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { AboutSection } from "@/components/sections/AboutSection";
import { ClansSection } from "@/components/sections/ClansSection";
import { TeamSection } from "@/components/sections/TeamSection";
import { RulesSection } from "@/components/sections/RulesSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { JoinCtaSection } from "@/components/sections/JoinCtaSection";
import { MusicToggle } from "@/components/sections/MusicToggle";
import { Footer } from "@/components/footer";
import { useRevealOnScroll } from "@/components/sections/hooks";

const websiteSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "PROJECT SMP 46 — Minecraft Community for SMPN 46 Surabaya Students",
  alternateName: "SMP 46 Minecraft",
  url: "https://smpn46projectminecraft.biz.id/",
  description:
    "A Minecraft community exclusively for SMPN 46 Surabaya students. Build together on Java & Bedrock. Currently in preparation, registration info coming soon.",
  inLanguage: ["en", "id"],
});

const faqSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
});

export const Route = createFileRoute("/")({
  // The server's timestamp is shipped with the page so the countdown hydrates
  // against the exact HTML the server rendered.
  loader: () => ({ now: Date.now() }),
  component: Index,
});

function Index() {
  const { now: initialNow } = Route.useLoaderData();
  useRevealOnScroll();

  return (
    <main className="page-atmosphere min-h-screen overflow-x-hidden pb-20 text-foreground sm:pb-0">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: websiteSchema }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqSchema }} />
      <h1 className="sr-only">
        PROJECT SMP 46 — Minecraft Community for SMPN 46 Surabaya Students
      </h1>

      <Navbar />
      <Hero initialNow={initialNow} />
      <AboutSection />
      <ClansSection />
      <TeamSection />
      <RulesSection />
      <FaqSection />
      <JoinCtaSection initialNow={initialNow} />
      <MusicToggle />
      <Footer />
    </main>
  );
}
