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
import { useApplicationClock, useRevealOnScroll } from "@/components/sections/hooks";

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Project SMP 46",
  alternateName: "SMP 46 Minecraft",
  url: "https://smpn46projectminecraft.biz.id/",
  description:
    "Project SMP 46 Season 2 — a discontinued legacy Minecraft community project that may return when the community is ready.",
  inLanguage: ["en", "id"],
};

const faqSchema = {
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
};

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const now = useApplicationClock();
  useRevealOnScroll();

  return (
    <main className="page-atmosphere min-h-screen overflow-x-hidden pb-20 text-foreground sm:pb-0">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <h1 className="sr-only">Project SMP 46 — Minecraft Bedrock Community Archive</h1>

      <Navbar />
      <Hero now={now} />
      <AboutSection />
      <ClansSection />
      <TeamSection />
      <RulesSection />
      <FaqSection />
      <JoinCtaSection now={now} />
      <MusicToggle />
      <Footer />
    </main>
  );
}
