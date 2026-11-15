import { Building2, Leaf, Shield, Trophy } from "lucide-react";
import { applicationConfig } from "@/config/applications";
import azzamImg from "@/assets/chibi-azzam.gif";
import yogaImg from "@/assets/chibi.yoga.gif";

type StaffMemberBase = {
  name: string;
  role: string;
  desc: string;
  textGlow: string;
};

export type StaffMember = StaffMemberBase &
  ({ placeholder: true; image?: never } | { placeholder?: false; image: string });

export const staffMembers: StaffMember[] = [
  {
    name: "Sharon",
    role: "Koor Dokum",
    desc: "Mengurus dokumentasi, media, dan mengabadikan momen perjalanan Season 2.",
    textGlow: "text-pink-400 drop-shadow-[0_0_8px_rgba(236,72,153,0.8)]",
    placeholder: true,
  },
  {
    name: "Kiano",
    role: "Koor Build",
    desc: "Kepala arsitek yang merancang dan membangun infrastruktur server SMP.",
    textGlow: "text-amber-400 drop-shadow-[0_0_8px_rgba(245,158,11,0.8)]",
    placeholder: true,
  },
  {
    name: "Azzam",
    role: "Server Guard & Scripter",
    desc: "Menjaga keamanan server Minecraft dan mengembangkan script backend bot.js.",
    image: azzamImg,
    textGlow: "text-blue-400 drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]",
  },
  {
    name: "Yoga",
    role: "Events & Pengumuman",
    desc: "Mengatur event mingguan seru, pengumuman server, dan aktivitas pemain.",
    image: yogaImg,
    textGlow: "text-green-400 drop-shadow-[0_0_8px_rgba(34,197,94,0.8)]",
  },
];

export const ruleNumbers = {
  maxLightWarnings: 5,
  warningExpiryDays: 7,
  appealDays: 7,
  inactivityWeeks: 2,
  lightBanMaxDays: 1,
} as const;

export const rules = [
  {
    id: "rule-1",
    title: "RULE #1: Be Respectful",
    intro: "Hormati semua pemain dan staf, baik di dalam game maupun di Discord dan WhatsApp.",
    points: [
      "Dilarang melakukan ujaran kebencian, pelecehan, perundungan, atau membagikan konten dewasa.",
      "Jangan membagikan data pribadi, seperti alamat, nomor telepon, atau foto, milik sendiri maupun orang lain.",
      "Hormati keputusan staf. Sampaikan keberatan lewat tiket Discord atau hubungi staf melalui WhatsApp, bukan chat publik.",
    ],
  },
  {
    id: "rule-2",
    title: "RULE #2: No Griefing",
    intro: "Jangan merusak, mencuri, atau mengganggu bangunan dan barang orang lain.",
    points: [
      "Jangan mencuri, merusak, atau mengubah build milik pemain lain.",
      "Hormati claim dan jangan membangun di area yang sudah diklaim pemain lain.",
      "Jangan membuat bangunan yang menyinggung atau farm dan machine yang menyebabkan server lag.",
      "Perang antar-clan hanya boleh berlangsung dalam event atau war resmi.",
    ],
  },
  {
    id: "rule-3",
    title: "RULE #3: No Cheating",
    intro: "Bermainlah dengan adil dan raih kemenangan tanpa kecurangan.",
    points: [
      "Dilarang memakai hacked client, X-ray, duplication glitch, atau memanfaatkan bug.",
      "Laporkan bug kepada staf melalui Discord atau WhatsApp dan jangan memanfaatkannya untuk keuntungan pribadi.",
      "Satu pemain, satu akun. Jangan gunakan akun alternatif untuk menghindari sanksi.",
      "Jangan memperjualbelikan akun atau item dengan uang asli. Server ini tanpa pay-to-win.",
    ],
  },
  {
    id: "rule-4",
    title: "RULE #4: No Drama",
    intro: "Jaga chat agar tetap nyaman dan hindari konflik yang tidak perlu.",
    points: [
      "Jangan spam, memancing keributan, atau menyindir pemain di chat publik.",
      "Jika ada masalah dengan pemain lain, kirim bukti berupa screenshot atau video lewat tiket Discord atau hubungi staf melalui WhatsApp.",
      `Ajukan banding atas keputusan staf lewat tiket Discord atau WhatsApp dalam ${ruleNumbers.appealDays} hari.`,
    ],
  },
  {
    id: "rule-5",
    title: "RULE #5: Have Fun",
    intro: "Server ini dibuat untuk bersenang-senang dan membangun komunitas.",
    points: [
      "Bantu pemain baru dan bekerja sama dengan pemain lain.",
      "Utamakan sekolah dan ujian. Kamu tidak wajib online setiap hari.",
      "Ikuti event, berkarya, dan nikmati permainan bersama!",
    ],
  },
];

export const playSchedule = {
  tracks: [
    {
      name: "Weekend Track",
      days: "Jumat – Minggu",
      description: "khusus member yang sibuk",
    },
    {
      name: "Daily Track",
      days: "Senin – Minggu",
      description: "untuk member yang ingin bermain setiap hari",
    },
  ],
  shared:
    "Kedua track sama-sama diterima. Kamu bisa berganti track kapan saja; server, aturan, dan pengumumannya sama untuk semua member.",
  busy: "Sibuk bukan pelanggaran. Cukup beri tahu staf melalui Discord atau WhatsApp.",
} as const;

export const warningGroups = [
  {
    label: "Pelanggaran Ringan",
    note: "Contoh: spam, bahasa kasar ringan, atau pelanggaran aturan chat.",
    points: [
      `Warning 1–${ruleNumbers.maxLightWarnings - 2}: peringatan melalui Discord, WhatsApp, atau in-game.`,
      `Warning ${ruleNumbers.maxLightWarnings - 1}: mute atau kick.`,
      `Warning ${ruleNumbers.maxLightWarnings}: ban sementara hingga ${ruleNumbers.lightBanMaxDays} hari.`,
      `Warning dihapus setelah ${ruleNumbers.warningExpiryDays} hari tanpa pelanggaran baru.`,
    ],
  },
  {
    label: "Pelanggaran Berat",
    note: "Contoh: hack client, doxxing, ancaman, konten dewasa, atau griefing besar-besaran.",
    points: [
      `Pelanggaran dapat langsung dikenai ban beberapa hari hingga permanen, tanpa menunggu ${ruleNumbers.maxLightWarnings} warning.`,
      "Kamu dapat mengajukan banding atas keputusan staf lewat tiket Discord atau WhatsApp.",
    ],
  },
  {
    label: "Tidak Aktif",
    points: [
      `Tidak online lebih dari ${ruleNumbers.inactivityWeeks} minggu tanpa kabar dapat berujung peringatan dan pelepasan claim atau slot.`,
      "Jika izin karena ujian, liburan, atau sakit, beri kabar lewat Discord atau WhatsApp sebelumnya.",
      "Tidak ada ban hanya karena kamu tidak aktif.",
    ],
  },
  {
    label: "Tugas",
    points: [
      "Setiap tugas dari staf memiliki tenggat yang jelas dan diumumkan sebelumnya.",
      "Tugas yang tidak dikerjakan tanpa penjelasan mendapat 1 warning. Jika ada kendala, hubungi staf melalui Discord atau WhatsApp sebelum tenggat.",
    ],
  },
];

const applicationOpeningMonth = new Intl.DateTimeFormat("id-ID", {
  month: "long",
  year: "numeric",
  timeZone: "Asia/Jakarta",
}).format(new Date(applicationConfig.opensAt));

export const faqs = [
  {
    q: "Harus main setiap hari?",
    a: "Tidak. Pilih Weekend Track atau Daily Track sesuai waktumu; kamu bisa berganti kapan saja.",
  },
  {
    q: "Kalau lagi sibuk gimana?",
    a: "Kabari admin melalui Discord atau WhatsApp. Sibuk bukan pelanggaran.",
  },
  {
    q: "Mengapa Season 2 dihentikan?",
    a: "Season 2 diarsipkan agar tim bisa fokus menyiapkan proyek baru dengan lebih matang.",
  },
  {
    q: "Apakah akan ada proyek baru?",
    a: `Ya! Pendaftaran dibuka ${applicationOpeningMonth}, dilanjutkan fase test server sebelum rilis penuh. Jadwal dapat berubah.`,
  },
  {
    q: "Siapa yang boleh mendaftar?",
    a: "Pendaftaran hanya untuk siswa SMPN 46 Surabaya.",
  },
  {
    q: "Apa yang akan dilakukan di proyek berikutnya?",
    a: "Member akan membangun SMPN 46 Surabaya di Minecraft dalam survival vanilla tanpa pay-to-win, dengan clan, event, dan turnamen. Detail lainnya menyusul.",
  },
  {
    q: "Platform apa yang dipakai?",
    a: "Server menggunakan Minecraft Java & Bedrock Edition.",
  },
  {
    q: "Apa itu fase uji coba?",
    a: "Pemain yang diterima mencoba server sebelum rilis penuh. Selama test server, masih ada perubahan dan perbaikan.",
  },
  {
    q: "Bagaimana cara mendaftar?",
    a: "Saat pendaftaran dibuka, gunakan tombol Apply Now di situs ini. Pendaftaran tidak dibuka lewat tautan lain.",
  },
  {
    q: "Kapan server resmi diluncurkan?",
    a: "Tanggalnya belum diumumkan. Pantau situs ini dan Discord untuk kabar resmi.",
  },
];

export const features = [
  {
    icon: Building2,
    title: "BUILD OUR SCHOOL",
    desc: "Builders and members work together to recreate SMPN 46 Surabaya in Minecraft.",
  },
  {
    icon: Leaf,
    title: "VANILLA SURVIVAL",
    desc: "No pay-to-win. A fair survival experience for every player.",
  },
  {
    icon: Shield,
    title: "CLANS",
    desc: "Form clans, build together, and stand with your alliance.",
  },
  {
    icon: Trophy,
    title: "EVENTS & TOURNAMENTS",
    desc: "Community events and tournaments run by our event team.",
  },
];
