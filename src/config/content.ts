import {
  AlertTriangle,
  Camera,
  Check,
  Hammer,
  LogIn,
  Megaphone,
  Shield,
  ShieldCheck,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import tufImg from "@/assets/TUF.png";
import expImg from "@/assets/EXP35.png";
import districtImg from "@/assets/12TH.png";
import azzamImg from "@/assets/azzam.png";
import kianoImg from "@/assets/kiano.png";
import sharonImg from "@/assets/sharon.png";
import yogaImg from "@/assets/Yoga.png";

export type Clan = {
  name: string;
  fullName: string;
  leader: string;
  image: string;
  contactUrl: string;
  contactType: "discord" | "whatsapp";
  members: number;
  status: string;
};

export const clans: Clan[] = [
  {
    name: "TUF",
    fullName: "THE UNION FEDERATION",
    leader: "Erlengga",
    image: tufImg,
    contactUrl: "https://discord.gg/hgF6TJkE",
    contactType: "discord",
    members: 15,
    status: "RECRUITING",
  },
  {
    name: "EXPEDITION 35",
    fullName: "INTERNATIONAL SPACE STATION",
    leader: "Azzam",
    image: expImg,
    contactUrl:
      "https://wa.me/6281335758501?text=Halo%20klan%20EXPEDITION%2035%2C%20saya%20ingin%20bergabung%20ke%20server%20SMP%2046.",
    contactType: "whatsapp",
    members: 12,
    status: "FULL",
  },
  {
    name: "12TH DISTRICT",
    fullName: "12TH DISTRICT",
    leader: "Altan",
    image: districtImg,
    contactUrl:
      "https://wa.me/6282313730860?text=Halo%20klan%2012TH%20DISTRICT%2C%20saya%20ingin%20bergabung%20ke%20server%20SMP%2046.",
    contactType: "whatsapp",
    members: 8,
    status: "RECRUITING",
  },
];

export type StaffMember = {
  name: string;
  role: string;
  desc: string;
  icon: LucideIcon;
  image: string;
  glow: string;
  textGlow: string;
  iconBg: string;
};

export const staffMembers: StaffMember[] = [
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

export const rules = [
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

export const faqs = [
  {
    q: "Mengapa Season 2 dihentikan?",
    a: "Season 2 dihentikan untuk sementara. Proyek ini menunggu waktu yang tepat dan kesiapan komunitas sebelum dilanjutkan.",
  },
  {
    q: "Apakah proyek ini akan kembali?",
    a: "Ada kemungkinan proyek ini kembali di masa depan ketika komunitas sudah siap. Tidak ada jadwal kembali yang ditetapkan saat ini.",
  },
  {
    q: "Apakah komunitas masih bisa bergabung?",
    a: "Komunitas tetap menjadi bagian penting dari proyek ini. Ikuti Discord untuk mendapatkan informasi jika rekrutmen dibuka kembali.",
  },
  {
    q: "Apakah konsep Season 2 masih dipertahankan?",
    a: "Konsep clan, survival, ekonomi pemain, dan event tetap menjadi bagian dari visi proyek jika Season 2 dilanjutkan.",
  },
];

export const features = [
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
  { icon: Check, title: "ECONOMY", desc: "Player-driven diamond economy and trading system." },
  { icon: LogIn, title: "EVENTS", desc: "Weekly custom events, boss fights, and tournaments." },
];
