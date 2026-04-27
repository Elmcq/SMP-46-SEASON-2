import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import {
  Copy,
  Check,
  AlertTriangle,
  LogIn,
  ShieldCheck,
  MessageCircle,
  Shield,
  Hammer,
  Camera,
  Megaphone,
} from "lucide-react";
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
import azzamImg from "@/assets/azzam.png";
import kianoImg from "@/assets/kiano.png";
import sharonImg from "@/assets/sharon.png";
import yogaImg from "@/assets/Yoga.png";

export const Route = createFileRoute("/")({
  component: Index,
});

const SERVER_IP = "100.117.104.39";
const SERVER_PORT = "19132";

const BACKUP_IP = "SMP46.aternos.me";
const BACKUP_PORT = "19088";

const clans = [
  {
    name: "TUF",
    fullName: "THE UNION FEDERATION",
    leader: "Erlengga",
    image: tufImg,
    discord: "https://discord.gg/hgF6TJkE",
    members: 15,
    status: "RECRUITING",
  },
  {
    name: "EXPEDITION 35",
    fullName: "INTERNATIONAL SPACE STATION",
    leader: "Azzam",
    image: expImg,
    whatsapp: "6281335758501",
    members: 12,
    status: "FULL",
  },
  {
    name: "12TH DISTRICT",
    fullName: "12TH DISTRICT",
    leader: "Altan",
    image: districtImg,
    whatsapp: "6282313730860",
    members: 8,
    status: "RECRUITING",
  },
];

const particles = Array.from({ length: 30 }).map((_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  top: `${Math.random() * 100}%`,
  width: `${Math.random() * 6 + 2}px`,
  height: `${Math.random() * 6 + 2}px`,
  animationDuration: `${Math.random() * 15 + 10}s`,
  animationDelay: `${Math.random() * 5}s`,
}));

const staffMembers = [
  {
    name: "Nona Sharon",
    role: "Koor Dokum",
    desc: "Mengurus dokumentasi, media, dan mengabadikan momen perjalanan Season 2.",
    icon: Camera,
    image: sharonImg,
    glow: "shadow-[0_0_15px_rgba(236,72,153,0.3)] hover:shadow-[0_0_30px_rgba(236,72,153,0.6)] border-pink-500/30",
    textGlow: "text-pink-400 drop-shadow-[0_0_8px_rgba(236,72,153,0.8)]",
    iconBg: "bg-pink-500/20 text-pink-400",
  },
  {
    name: "Kiano",
    role: "Koor Build",
    desc: "Kepala arsitek yang merancang dan membangun infrastruktur server SMP.",
    icon: Hammer,
    image: kianoImg,
    glow: "shadow-[0_0_15px_rgba(245,158,11,0.3)] hover:shadow-[0_0_30px_rgba(245,158,11,0.6)] border-amber-500/30",
    textGlow: "text-amber-400 drop-shadow-[0_0_8px_rgba(245,158,11,0.8)]",
    iconBg: "bg-amber-500/20 text-amber-400",
  },
  {
    name: "Azzam",
    role: "Server Guard & Scripter",
    desc: "Menjaga keamanan server Minecraft dan mengembangkan script backend bot.js.",
    icon: Shield,
    image: azzamImg,
    glow: "shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] border-blue-500/30",
    textGlow: "text-blue-400 drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]",
    iconBg: "bg-blue-500/20 text-blue-400",
  },
  {
    name: "Yoga",
    role: "Events & Pengumuman",
    desc: "Mengatur event mingguan seru, pengumuman server, dan aktivitas pemain.",
    icon: Megaphone,
    image: yogaImg,
    glow: "shadow-[0_0_15px_rgba(34,197,94,0.3)] hover:shadow-[0_0_30px_rgba(34,197,94,0.6)] border-green-500/30",
    textGlow: "text-green-400 drop-shadow-[0_0_8px_rgba(34,197,94,0.8)]",
    iconBg: "bg-green-500/20 text-green-400",
  },
];

function Index() {
  const [copiedText, setCopiedText] = useState("");
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
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-12");
          }
        });
      },
      { threshold: 0.1 },
    );

    document.querySelectorAll(".reveal-on-scroll").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

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

  const copyIp = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setTimeout(() => setCopiedText(""), 2000);
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

  const faqs = [
    {
      q: "Kapan server ini rilis?",
      a: "SMP 46 Season 2 dijadwalkan rilis setelah masa ujian selesai, tepatnya pada 25 April 2026 jam 06:00 AM.",
    },
    {
      q: "Apakah server ini bisa untuk Bedrock?",
      a: "Tentu! Server ini menggunakan GeyserMC, jadi pemain Java dan Bedrock (MCPE/HP) bisa bermain bersama tanpa masalah.",
    },
    {
      q: "Bagaimana sistem ekonominya?",
      a: "Kita menggunakan sistem ekonomi Diamond murni berbasis player. Tidak ada /shop dari admin! Semua transaksi dilakukan antar player.",
    },
    {
      q: "Apakah boleh membuat clan atau faction?",
      a: "Sangat disarankan! Kamu bisa merekrut member, mendeklarasikan aliansi, bahkan perang dengan clan lain (selama sesuai aturan).",
    },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* NAV */}
      <nav
        className={`fixed top-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-5xl z-50 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
          isVisible ? "translate-y-0 opacity-100" : "-translate-y-[150%] opacity-0"
        }`}
      >
        <div className="h-16 flex items-center justify-between px-6 sm:px-8 bg-background/80 backdrop-blur-xl border border-border/50 shadow-[0_8px_30px_rgb(0,0,0,0.4)] rounded-full alliance-card-glow">
          {/* Left Logo (Desktop & Mobile) */}
          <div className="hidden sm:flex items-center gap-3 w-1/3">
            <img src={logoImg} alt="Logo" className="w-8 h-8 object-contain drop-shadow-md" />
          </div>

          {/* Center Links (Perfectly Centered) */}
          <div className="flex items-center justify-center gap-6 sm:gap-8 w-full sm:w-1/3">
            <a
              href="#about"
              className="font-mc text-[18px] sm:text-2xl hover:text-primary transition-colors drop-shadow-md"
            >
              About
            </a>
            <a
              href="#clans"
              className="font-mc text-[18px] sm:text-2xl hover:text-primary transition-colors drop-shadow-md"
            >
              Clans
            </a>
            <a
              href="#rules"
              className="font-mc text-[18px] sm:text-2xl hover:text-primary transition-colors drop-shadow-md"
            >
              Rules
            </a>
            <a
              href="#join"
              className="font-mc text-[18px] sm:text-2xl hover:text-primary transition-colors drop-shadow-md"
            >
              Join
            </a>
          </div>

          {/* Right Button (Desktop Only) */}
          <div className="hidden sm:flex justify-end w-1/3">
            <button
              onClick={() => copyIp(`${SERVER_IP}:${SERVER_PORT}`)}
              className="font-pixel text-[10px] bg-primary text-primary-foreground px-4 py-2 pixel-border hover:-translate-y-1 transition-transform enchant-glint"
            >
              {timeLeft.days === 0 &&
              timeLeft.hours === 0 &&
              timeLeft.minutes === 0 &&
              timeLeft.seconds === 0
                ? "COPY IP"
                : "COMING SOON"}
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
          {particles.map((p) => (
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

          <div className="inline-block font-pixel text-[10px] text-accent bg-secondary/80 px-4 py-2 pixel-border mb-8 enchant-glint">
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
            {timeLeft.days === 0 &&
            timeLeft.hours === 0 &&
            timeLeft.minutes === 0 &&
            timeLeft.seconds === 0 ? (
              <>
                <div className="inline-flex items-center gap-3 font-pixel text-[10px] text-green-400 bg-green-500/10 px-6 py-2 pixel-border border-green-500/30 animate-pulse">
                  <Check className="w-4 h-4" /> SERVER IS LIVE
                </div>
                <div className="flex flex-col gap-4 w-full max-w-2xl mt-4">
                  {/* Main Server */}
                  <div className="font-mc text-xl sm:text-2xl text-primary bg-secondary/80 px-6 py-4 pixel-border flex flex-col items-center gap-2">
                    <span className="text-xs sm:text-base font-pixel text-accent mb-2 flex items-center gap-2">
                      SERVER NAME : SMP 46 PROJECT SEASON 2
                      <span className="bg-green-500/20 text-green-400 border border-green-500/30 px-3 py-1 rounded text-[10px] sm:text-xs uppercase tracking-wider">24/7</span>
                    </span>
                    <div className="flex items-center gap-4">
                      {SERVER_IP}:{SERVER_PORT}
                      <button
                        onClick={() => copyIp(`${SERVER_IP}:${SERVER_PORT}`)}
                        className="hover:text-foreground transition-colors"
                        title="Copy IP"
                      >
                        {copiedText === `${SERVER_IP}:${SERVER_PORT}` ? (
                          <Check className="w-5 h-5 text-green-400" />
                        ) : (
                          <Copy className="w-5 h-5" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Backup Server */}
                  <div className="font-mc text-lg sm:text-xl text-primary bg-secondary/80 px-6 py-4 pixel-border flex flex-col items-center gap-2">
                    <span className="text-xs sm:text-base font-pixel text-accent mb-2 flex items-center gap-2">
                      🌐 SERVER BACKUP (ATERNOS)
                      <span className="bg-red-500/20 text-red-400 border border-red-500/30 px-3 py-1 rounded text-[10px] sm:text-xs uppercase tracking-wider">OFFLINE</span>
                    </span>
                    <span className="text-[10px] sm:text-xs font-pixel text-muted-foreground mb-2">SMP 46 (Backup) SEASON 2</span>
                    <div className="flex items-center gap-4">
                      {BACKUP_IP}:{BACKUP_PORT}
                      <button
                        onClick={() => copyIp(`${BACKUP_IP}:${BACKUP_PORT}`)}
                        className="hover:text-foreground transition-colors"
                        title="Copy IP"
                      >
                        {copiedText === `${BACKUP_IP}:${BACKUP_PORT}` ? (
                          <Check className="w-5 h-5 text-green-400" />
                        ) : (
                          <Copy className="w-5 h-5" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Old Server */}
                  <div className="font-mc text-lg sm:text-xl text-muted-foreground bg-secondary/80 px-6 py-4 pixel-border flex flex-col items-center gap-2 opacity-70">
                    <span className="text-xs sm:text-base font-pixel text-accent mb-2 flex items-center gap-2">
                      🖥️ SERVER OLD (MAINTENANCE)
                      <span className="bg-red-500/20 text-red-400 border border-red-500/30 px-3 py-1 rounded text-[10px] sm:text-xs uppercase tracking-wider">OFFLINE</span>
                    </span>
                    <span className="text-[10px] sm:text-xs font-pixel text-muted-foreground mb-2">PROYEK SMP 46 SEASON 1</span>
                    <div className="flex items-center gap-4">
                      IP : MAINTENANCE | PORT : MAINTENANCE
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="inline-flex items-center gap-3 font-pixel text-[10px] text-yellow-500 bg-yellow-500/10 px-6 py-2 pixel-border border-yellow-500/30 animate-pulse">
                  <AlertTriangle className="w-4 h-4" /> NOT YET RELEASED
                </div>
                <p className="font-mc text-xl text-muted-foreground uppercase tracking-[0.3em] animate-pulse">
                  IP WILL BE REVEALED AT LAUNCH
                </p>
              </>
            )}
          </div>

          <p className="font-mc text-xl text-muted-foreground mt-12">
            Minecraft Bedrock Edition • Version 26.13
          </p>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="py-24 px-6 border-y border-border bg-secondary/20 overflow-hidden"
      >
        <div className="max-w-5xl mx-auto reveal-on-scroll opacity-0 translate-y-12 transition-all duration-1000 ease-out">
          <div className="text-center mb-16">
            <p className="font-pixel text-[10px] text-accent mb-4">// NEW CHAPTER</p>
            <h2 className="font-pixel text-2xl sm:text-4xl text-primary mb-6 text-shadow-pixel">
              SEASON 2 UPGRADE
            </h2>
            <p className="font-mc text-2xl text-foreground/80 leading-relaxed max-w-3xl mx-auto">
              We’re preparing the ultimate Season 2 experience. The launch is scheduled for next
              week, right after exams. Get your gear ready — a new adventure begins.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: ShieldCheck,
                title: "FACTIONS",
                desc: "Form clans, build empires, and wage wars or alliances.",
              },
              {
                icon: AlertTriangle,
                title: "HARDCORE",
                desc: "No pay-to-win. True vanilla survival experience.",
              },
              {
                icon: Check,
                title: "ECONOMY",
                desc: "Player-driven diamond economy and trading system.",
              },
              {
                icon: LogIn,
                title: "EVENTS",
                desc: "Weekly custom events, boss fights, and tournaments.",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="bg-background/50 border border-border/50 p-6 pixel-border hover:bg-secondary/40 transition-colors group"
              >
                <feature.icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-pixel text-sm text-foreground mb-3">{feature.title}</h3>
                <p className="font-mc text-lg text-muted-foreground leading-snug">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ALLIANCE SECTION */}
      <section id="clans" className="py-32 px-6">
        <div className="max-w-7xl mx-auto reveal-on-scroll opacity-0 translate-y-12 transition-all duration-1000 ease-out">
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
                    href={
                      clan.discord ||
                      `https://wa.me/${clan.whatsapp}?text=Halo klan ${clan.name}, saya ingin bergabung ke server SMP 46.`
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`absolute -top-12 right-8 w-16 h-16 ${clan.discord ? "bg-[#5865F2]" : "bg-green-500"} pixel-border rounded-xl flex flex-col items-center justify-center group/wa hover:rotate-12 transition-transform shadow-[0_0_20px_rgba(${clan.discord ? "88,101,242" : "34,197,94"},0.4)]`}
                  >
                    {clan.discord ? (
                      <svg
                        viewBox="0 0 24 24"
                        fill="white"
                        className="w-8 h-8"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037 19.736 19.736 0 0 0-4.885 1.515.069.069 0 0 0-.032.027C.533 9.048-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.419 0 1.334-.956 2.419-2.157 2.419zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.419 0 1.334-.946 2.419-2.157 2.419z" />
                      </svg>
                    ) : (
                      <MessageCircle className="w-8 h-8 text-white" />
                    )}
                    <span className="font-pixel text-[6px] text-white opacity-0 group-hover/wa:opacity-100 transition-opacity mt-1">
                      {clan.discord ? "JOIN" : "DM"}
                    </span>
                  </a>

                  <h3 className="font-pixel text-sm text-accent mb-2">{clan.name}</h3>
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

      {/* STAFF / TEAM SECTION */}
      <section id="team" className="py-24 px-6 border-t border-border bg-background">
        <div className="max-w-7xl mx-auto reveal-on-scroll opacity-0 translate-y-12 transition-all duration-1000 ease-out">
          <div className="text-center mb-16">
            <p className="font-pixel text-[10px] text-accent mb-4">// BEHIND THE SCENES</p>
            <h2 className="font-pixel text-2xl sm:text-4xl text-primary text-shadow-pixel mb-6">
              OUR TEAM
            </h2>
            <p className="font-mc text-xl text-foreground/80 max-w-2xl mx-auto">
              Kenali staff dan pengurus yang bekerja di balik layar untuk memastikan SMP 46 Season 2
              berjalan dengan lancar dan aman.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {staffMembers.map((staff, i) => (
              <div
                key={i}
                className={`relative overflow-hidden bg-secondary/30 p-8 pixel-border transition-all duration-300 group hover:-translate-y-2 flex flex-col items-center text-center ${staff.glow}`}
              >
                {/* Background Decoration */}
                <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-current to-transparent opacity-[0.08]" />

                {/* Avatar Profile */}
                <div className="relative mb-6 z-10 mt-2">
                  <img
                    src={staff.image}
                    alt={staff.name}
                    className="w-28 h-28 object-cover rounded-full pixel-border border-4 border-background/80 shadow-xl group-hover:scale-105 transition-transform duration-500"
                    style={{
                      objectPosition: staff.name === "Nona Sharon" ? "center 15%" : "center",
                    }}
                  />

                  {/* Role Icon Badge */}
                  <div
                    className={`absolute bottom-0 right-0 w-10 h-10 rounded-full flex items-center justify-center pixel-border ${staff.iconBg} backdrop-blur-md shadow-lg transform group-hover:rotate-12 transition-transform`}
                  >
                    <staff.icon className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* Text Content */}
                <h3 className="font-pixel text-base text-foreground mb-2 z-10">{staff.name}</h3>
                <p
                  className={`font-pixel text-[10px] mb-5 uppercase tracking-wider z-10 ${staff.textGlow}`}
                >
                  {staff.role}
                </p>

                <p className="font-mc text-xl text-muted-foreground leading-relaxed z-10">
                  {staff.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RULES */}
      <section id="rules" className="py-24 px-6 bg-secondary/10">
        <div className="max-w-4xl mx-auto reveal-on-scroll opacity-0 translate-y-12 transition-all duration-1000 ease-out">
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

      {/* FAQ SECTION (CHAT STYLE) */}
      <section id="faq" className="py-24 px-6 border-t border-border bg-background">
        <div className="max-w-3xl mx-auto reveal-on-scroll opacity-0 translate-y-12 transition-all duration-1000 ease-out">
          <div className="text-center mb-16">
            <p className="font-pixel text-[10px] text-accent mb-4">// Q & A</p>
            <h2 className="font-pixel text-2xl sm:text-4xl text-primary text-shadow-pixel mb-6">
              FREQUENTLY ASKED
            </h2>
          </div>

          <div className="flex flex-col gap-10">
            {faqs.map((faq, i) => (
              <div key={i} className="flex flex-col gap-4">
                {/* User Question Bubble (Right) */}
                <div className="flex justify-end items-end gap-3 w-[90%] sm:w-4/5 ml-auto">
                  <div className="bg-primary/10 border border-primary/30 p-4 sm:p-5 rounded-2xl rounded-br-none shadow-sm">
                    <p className="font-mc text-lg text-foreground/90 leading-snug">{faq.q}</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-secondary/80 border border-border flex items-center justify-center shrink-0 mb-1">
                    <span className="font-pixel text-[8px] text-muted-foreground">P</span>
                  </div>
                </div>

                {/* Admin Answer Bubble (Left) */}
                <div className="flex justify-start items-end gap-3 w-[90%] sm:w-4/5 mr-auto">
                  <div className="w-8 h-8 rounded-full bg-secondary/30 border border-primary/50 flex items-center justify-center shrink-0 mb-1 shadow-[0_0_10px_rgba(59,130,246,0.3)] alliance-card-glow">
                    <img src={logoImg} alt="Staff" className="w-4 h-4 object-contain" />
                  </div>
                  <div className="bg-secondary/40 border border-border/50 p-4 sm:p-5 rounded-2xl rounded-bl-none shadow-sm">
                    <p className="font-mc text-lg text-muted-foreground leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JOIN CTA */}
      <section id="join" className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient opacity-80" />
        <div className="relative max-w-3xl mx-auto text-center reveal-on-scroll opacity-0 translate-y-12 transition-all duration-1000 ease-out">
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
              className="font-pixel text-xs bg-accent text-accent-foreground px-8 py-5 pixel-border hover:translate-y-1 transition-transform inline-block enchant-glint"
            >
              JOIN DISCORD
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border/50 py-8 px-6 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient opacity-5 pointer-events-none" />
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
          {/* Logo & Copyright */}
          <div className="flex items-center gap-4">
            <img
              src={logoImg}
              alt="SMP 46 logo"
              className="w-6 h-6 object-contain drop-shadow-md opacity-70 hover:opacity-100 transition-opacity"
            />
            <span className="font-pixel text-[8px] text-muted-foreground uppercase tracking-widest">
              © 2026 Project SMP 46. All rights reserved.
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a
              href="#about"
              className="font-mc text-lg text-muted-foreground hover:text-primary transition-colors"
            >
              About
            </a>
            <a
              href="#rules"
              className="font-mc text-lg text-muted-foreground hover:text-primary transition-colors"
            >
              Rules
            </a>
            <a
              href="https://discord.gg/VZZXY4pFUj"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mc text-lg text-muted-foreground hover:text-[#5865F2] transition-colors"
            >
              Discord
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
