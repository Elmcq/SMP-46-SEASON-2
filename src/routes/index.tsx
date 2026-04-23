import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Copy, Check, AlertTriangle, LogIn, ShieldCheck, MessageCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import heroImg from "@/assets/hero-smp.jpg";
import logoImg from "@/assets/smp46-logo.png";
import tufImg from "@/assets/TUF.png";
import expImg from "@/assets/EXP35.png";
import districtImg from "@/assets/12TH.png";

export const Route = createFileRoute("/")({
  component: Index,
});

const SERVER_IP = "147.185.221.28";
const SERVER_PORT = "17662";

const clans = [
  {
    name: "TUF",
    fullName: "THE UNION FEDERATION",
    leader: "Erlengga",
    image: tufImg,
    whatsapp: "6287877060272",
  },
  {
    name: "EXPEDITION 35",
    fullName: "INTERNATIONAL SPACE STATION",
    leader: "Azzam",
    image: expImg,
    whatsapp: "6281335758501",
  },
  {
    name: "12TH DISTRICT",
    fullName: "12TH DISTRICT",
    leader: "Altan",
    image: districtImg,
    whatsapp: "6282313730860",
  },
];

function Index() {
  const [copied, setCopied] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // COUNTDOWN LOGIC
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2026-04-25T06:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== "undefined") {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  const copyIp = () => {
    navigator.clipboard.writeText(`${SERVER_IP}:${SERVER_PORT}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const rules = [
    {
      id: "rule-1",
      title: "RULE #1: Be Respectful",
      content:
        "No toxic behavior, harassment, insults, or hate speech. Respect all players and staff.",
    },
    {
      id: "rule-2",
      title: "RULE #2: No Griefing",
      content:
        "Do not destroy, steal, or modify other players' builds without permission. Pranks are only allowed if both sides agree.",
    },
    {
      id: "rule-3",
      title: "RULE #3: No Cheating",
      content:
        "No hacked clients, X-ray, dupes (except specific non-diamond items), exploits, or unfair mods.",
    },
    {
      id: "rule-4",
      title: "RULE #4: No Drama",
      content:
        "No starting arguments, fights, or unnecessary conflicts. Repeated drama may result in warnings.",
    },
    {
      id: "rule-5",
      title: "RULE #5: Have Fun!",
      content: "This is a community—play fair, help others, and enjoy the game!",
    },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* NAV */}
      <nav
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 backdrop-blur-md bg-background/70 border-b border-border ${isVisible ? "translate-y-0" : "-translate-y-full opacity-0"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-center sm:grid sm:grid-cols-[1fr_auto_1fr]">
          {/* Left Spacer (Desktop Only) */}
          <div className="hidden sm:block" />

          {/* Center Links (Perfectly Centered) */}
          <div className="flex items-center justify-center gap-6 sm:gap-8 w-full sm:w-auto">
            <a href="#about" className="font-mc text-[18px] sm:text-2xl hover:text-primary transition-colors drop-shadow-md">
              About
            </a>
            <a href="#clans" className="font-mc text-[18px] sm:text-2xl hover:text-primary transition-colors drop-shadow-md">
              Clans
            </a>
            <a href="#rules" className="font-mc text-[18px] sm:text-2xl hover:text-primary transition-colors drop-shadow-md">
              Rules
            </a>
            <a href="#join" className="font-mc text-[18px] sm:text-2xl hover:text-primary transition-colors drop-shadow-md">
              Join
            </a>
          </div>

          {/* Right Button (Desktop Only) */}
          <div className="hidden sm:flex justify-end">
            <button
              onClick={copyIp}
              className="font-pixel text-[10px] bg-primary text-primary-foreground px-4 py-2 pixel-border hover:translate-y-1 transition-transform"
            >
              COMING SOON
            </button>
          </div>
        </div>
      </nav>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImg}
            alt="Pixelated Minecraft sunset landscape"
            width={1920}
            height={1024}
            className="absolute inset-0 w-full h-full object-cover opacity-60 animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-hero-overlay" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center py-24">
          <div className="mx-auto w-28 sm:w-32 h-auto mb-10 rounded-2xl">
            <img
              src={logoImg}
              alt="SMP Negeri 46 Surabaya official logo"
              width={140}
              height={140}
              className="w-full h-auto drop-shadow-[0_0_30px_oklch(0.72_0.22_142/0.7)]"
            />
          </div>

          <div className="inline-block font-pixel text-[10px] text-accent bg-secondary/80 px-4 py-2 pixel-border mb-8">
            ★ SEASON 2 IS COMING ★
          </div>

          <h1 className="font-pixel text-xl sm:text-4xl md:text-6xl text-primary text-shadow-pixel leading-tight mb-4 tracking-tighter">
            PROJECT SMP 46
          </h1>
          <p className="font-mc text-xl sm:text-4xl text-accent mb-8 uppercase tracking-widest">
            Beyond Survival. Build Together.
          </p>

          <div className="max-w-2xl mx-auto mb-12">
            <p className="font-mc text-2xl text-foreground/90 leading-snug">
              Launching next week after exams.
              <br />
              Gear up and join the adventure.
            </p>
          </div>

          {/* COUNTDOWN TIMER */}
          <div className="flex justify-center gap-2 sm:gap-6 mb-16 px-4">
            {[
              { label: "DAYS", value: timeLeft.days },
              { label: "HOURS", value: timeLeft.hours },
              { label: "MINS", value: timeLeft.minutes },
              { label: "SECS", value: timeLeft.seconds },
            ].map((unit) => (
              <div
                key={unit.label}
                className="bg-secondary/40 backdrop-blur-md pixel-border p-3 sm:p-5 min-w-[70px] sm:min-w-[100px] group hover:scale-105 transition-transform"
              >
                <div className="font-pixel text-xl sm:text-3xl text-primary animate-pulse-glow mb-2">
                  {unit.value.toString().padStart(2, "0")}
                </div>
                <div className="font-pixel text-[6px] sm:text-[8px] text-muted-foreground uppercase tracking-widest">
                  {unit.label}
                </div>
              </div>
            ))}
          </div>

          {/* STATUS & COUNTDOWN AREA */}
          <div className="flex flex-col items-center gap-6">
            <div className="inline-flex items-center gap-3 font-pixel text-[10px] text-yellow-500 bg-yellow-500/10 px-6 py-2 pixel-border border-yellow-500/30 animate-pulse">
              <AlertTriangle className="w-4 h-4" /> NOT YET RELEASED
            </div>

            <p className="font-mc text-xl text-muted-foreground uppercase tracking-[0.3em] animate-pulse">
              IP WILL BE REVEALED AT LAUNCH
            </p>
          </div>

          <p className="font-mc text-xl text-muted-foreground mt-12">
            Minecraft Bedrock Edition • Version 26.13
          </p>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 px-6 border-y border-border bg-secondary/20">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-pixel text-[10px] text-accent mb-4">// NEW CHAPTER</p>
          <h2 className="font-pixel text-2xl sm:text-4xl text-primary mb-8">SEASON 2 UPGRADE</h2>
          <p className="font-mc text-2xl text-foreground/80 leading-relaxed mb-12">
            We’re preparing the ultimate Season 2 experience. The launch is scheduled for next week,
            right after exams. Get your gear ready — a new adventure begins.
          </p>
        </div>
      </section>

      {/* ALLIANCE SECTION */}
      <section id="clans" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="font-pixel text-[10px] text-accent mb-4 tracking-[0.2em]">
              // SERVER ALLIANCE
            </p>
            <h2 className="font-pixel text-2xl sm:text-4xl text-primary text-shadow-pixel">
              POWERFUL CLANS
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {clans.map((clan) => (
              <div
                key={clan.name}
                className="group relative rounded-2xl overflow-hidden alliance-card-glow bg-secondary/30"
              >
                {/* Clan Image with Overlay */}
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={clan.image}
                    alt={clan.fullName}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent opacity-80" />

                </div>

                {/* Clan Info */}
                <div className="p-8 relative">
                  <a
                    href={`https://wa.me/${clan.whatsapp}?text=Halo klan ${clan.name}, saya ingin bergabung ke server SMP 46.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute -top-12 right-8 w-16 h-16 bg-green-500 pixel-border rounded-xl flex flex-col items-center justify-center group/wa hover:rotate-12 transition-transform shadow-[0_0_20px_rgba(34,197,94,0.4)]"
                  >
                    <MessageCircle className="w-8 h-8 text-white" />
                    <span className="font-pixel text-[6px] text-white opacity-0 group-hover/wa:opacity-100 transition-opacity mt-1">
                      DM
                    </span>
                  </a>

                  <h3 className="font-pixel text-sm text-accent mb-2">
                    {clan.name}
                  </h3>
                  <p className="font-mc text-xl text-foreground/80 mb-6 uppercase tracking-wider">
                    {clan.fullName}
                  </p>

                  <div className="pt-6 border-t border-border/50 flex items-center justify-between bg-secondary/20 -mx-8 -mb-8 p-8 mt-6">
                    <div className="flex flex-col">
                      <span className="font-pixel text-[8px] text-accent/60 mb-2 uppercase">
                        Clan Leader
                      </span>
                      <span className="font-mc text-2xl text-primary drop-shadow-sm">
                        {clan.leader}
                      </span>
                    </div>
                    <div className="flex flex-col items-center gap-1 group/icon">
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30 group-hover/icon:bg-primary/30 transition-colors">
                        <ShieldCheck className="w-5 h-5 text-primary" />
                      </div>
                      <span className="font-pixel text-[6px] text-primary opacity-0 group-hover/icon:opacity-100 transition-opacity">
                        VERIFIED
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RULES */}
      <section id="rules" className="py-24 px-6 bg-secondary/10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-pixel text-[10px] text-accent mb-4">// MUST READ</p>
            <h2 className="font-pixel text-2xl sm:text-4xl text-primary">SERVER RULES</h2>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {rules.map((rule) => (
              <AccordionItem
                key={rule.id}
                value={rule.id}
                className="pixel-border bg-secondary/40 px-6 border-none"
              >
                <AccordionTrigger className="font-pixel text-[10px] hover:no-underline text-accent py-6">
                  {rule.title}
                </AccordionTrigger>
                <AccordionContent className="font-mc text-xl text-foreground/90 pb-6">
                  {rule.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-16 p-8 pixel-border bg-destructive/10 border-destructive/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <AlertTriangle size={80} />
            </div>
            <h3 className="font-pixel text-sm text-destructive mb-6 flex items-center gap-3">
              <AlertTriangle className="w-5 h-5" /> WARNING SYSTEM
            </h3>
            <div className="grid sm:grid-cols-2 gap-8 font-mc text-xl text-foreground/80">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-destructive">●</span>
                  <span>
                    <strong>Max Warnings:</strong> 5 times before severe punishment.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-destructive">●</span>
                  <span>
                    <strong>Inactivity:</strong> 2 weeks without notice = Warn/Ban.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-destructive">●</span>
                  <span>
                    <strong>Tasks:</strong> Failure to complete tasks results in Warnings.
                  </span>
                </li>
              </ul>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-destructive">●</span>
                  <span>
                    <strong>Consequences:</strong> Mute, Kick, or 1-Day Ban.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-destructive">●</span>
                  <span>
                    <strong>Ban Limit:</strong> Maximum ban duration is 1 Day per offense.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* JOIN CTA */}
      <section id="join" className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient opacity-80" />
        <div className="relative max-w-3xl mx-auto text-center">
          <h2 className="font-pixel text-2xl sm:text-5xl text-primary text-shadow-pixel mb-6">
            READY TO JOIN?
          </h2>
          <p className="font-mc text-2xl text-foreground/90 mb-10">
            A new adventure begins on Saturday, April 25 at 06:00 AM.
            <br />
            Join our community to stay updated!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://discord.gg/VZZXY4pFUj"
              target="_blank"
              rel="noopener noreferrer"
              className="font-pixel text-xs bg-accent text-accent-foreground px-8 py-5 pixel-border hover:translate-y-1 transition-transform inline-block"
            >
              JOIN DISCORD
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <img
              src={logoImg}
              alt="SMP 46 logo"
              width={24}
              height={24}
              className="w-6 h-6 object-contain"
            />
            <span className="font-pixel text-[10px] text-muted-foreground">
              PROYEK SMP 46 © 2026
            </span>
          </div>
          <p className="font-mc text-lg text-muted-foreground">
            Not affiliated with Mojang or Microsoft.
          </p>
        </div>
      </footer>
    </main>
  );
}
