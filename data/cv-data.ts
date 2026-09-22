export type CertCategory = 'all' | 'ai' | 'cloud' | 'data' | 'web';

export interface CertificateItem {
  title: string;
  year: string;
  category: 'ai' | 'cloud' | 'data' | 'web';
  issuer: string;
  link: string;
}

export interface SkillGroup {
  title: string;
  iconName: string;
  badgeColor: string;
  skills: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  project: string;
  period: string;
  active?: boolean;
  points: string[];
}

export interface EducationItem {
  degree: string;
  level: string;
  institution: string;
  period: string;
  description: string;
  highlight?: boolean;
}

export const PROFILE = {
  fullName: 'TEUKU RAJA MUDA ALFARIZI',
  shortName: 'T. Raja Muda Alfarizi',
  degree: 'S1 Informatics',
  role: 'Junior Full-Stack Developer & AI Specialist',
  birthPlaceDate: 'Banda Aceh, 17 Oktober 1999',
  location: 'Kabupaten Bogor, Jawa Barat',
  relocationStatus: 'Siap Ditempatkan di Mana Saja (Open to Relocation)',
  email: 'teuku1923@gmail.com',
  phone: '+6282350191117',
  whatsappUrl: 'https://wa.me/6282350191117',
  linkedinUrl: 'https://linkedin.com/in/teuku-raja-alfarizi',
  instagramUrl: 'https://instagram.com/t_r_a_j_a',
  facebookUrl: 'https://facebook.com/teku.raja.alfarizi',
  bio: 'Lulusan S1 Informatika dengan pengalaman operasional di industri alat berat dan logistik. Terampil dalam menganalisis alur sistem, merancang arsitektur aplikasi web (React.js, Node.js), serta memanfaatkan teknologi AI untuk efisiensi pengembangan perangkat lunak. Siap untuk terus berkembang di dunia IT, adaptif, dan dapat ditempatkan di mana saja (open to relocation).',
};

export const SKILL_GROUPS: SkillGroup[] = [
  {
    title: 'Web Development',
    iconName: 'code',
    badgeColor: 'teal',
    skills: ['HTML/CSS', 'JavaScript', 'React.js (Vite)', 'Express.js', 'Node.js', 'Next.js', 'Tailwind CSS'],
  },
  {
    title: 'Specialized Tech (AI & Cloud)',
    iconName: 'cpu',
    badgeColor: 'cyan',
    skills: ['Cloud Computing (AWS)', 'Machine Learning', 'Deep Learning', 'Generative AI (Microsoft Azure)', 'Microsoft Fabric'],
  },
  {
    title: 'Database Management',
    iconName: 'database',
    badgeColor: 'emerald',
    skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'SQL Querying', 'Database Architecture'],
  },
  {
    title: 'Languages & Tools',
    iconName: 'wrench',
    badgeColor: 'amber',
    skills: ['Python', 'Java', 'Git & GitHub', 'Microsoft Excel (Data Analysis)', 'Postman'],
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    role: 'Material Control',
    company: 'PT Aldzama',
    project: 'Proyek PT Vale',
    period: 'Jan 2022 – Maret 2026',
    active: true,
    points: [
      'Memonitor stok gudang dan menyusun laporan kebutuhan pengadaan barang secara real-time.',
      'Berkoordinasi dengan tim logistik dan pengadaan untuk memastikan ketersediaan barang.',
      'Terbiasa menggunakan Excel tingkat lanjut dan sistem pencatatan internal.',
    ],
  },
  {
    role: 'Teknisi Elektrik Alat Berat',
    company: 'PT Aldzama',
    project: 'Proyek PT Antam',
    period: 'Jun 2021 – Sep 2021',
    active: false,
    points: [
      'Menangani troubleshooting komponen alat berat dan panel listrik langsung di lapangan.',
      'Terbiasa bekerja sistematis, disiplin K3 tinggi, dan fokus pada solusi teknis adaptif.',
    ],
  },
];

export const EDUCATION: EducationItem[] = [
  {
    degree: 'INFORMATIKA (S1)',
    level: 'Perguruan Tinggi',
    institution: 'UNIVERSITAS SIBER ASIA',
    period: 'Agu 2023 - Apl 2026',
    description: 'Fokus pada Rekayasa Perangkat Lunak, Struktur Data, Web Development, dan Sistem Berbasis Kecerdasan Buatan (AI).',
    highlight: true,
  },
  {
    degree: 'TEKNIK ELEKTRO AUDIO VIDEO',
    level: 'Sekolah Menengah Kejuruan',
    institution: 'SMKN 2 BANDA ACEH',
    period: 'Mar 2016 - Jul 2019',
    description: 'Dasar kelistrikan industri, perakitan perangkat elektronik, dan analisis rangkaian kontrol listrik.',
  },
  {
    degree: 'PENDIDIKAN MENENGAH PERTAMA',
    level: 'Madrasah Tsanawiyah',
    institution: 'MTSN Keutapang 2',
    period: 'Mar 2013 - Agu 2016',
    description: 'Pendidikan dasar dan pembentukan kedisiplinan belajar serta logika matematika.',
  },
];

export const CERTIFICATES: CertificateItem[] = [
  {
    title: 'Belajar Penerapan Data Science dengan Microsoft Fabric dan Membangun Aplikasi Gen AI dengan Microsoft Azure',
    year: '2026',
    category: 'ai',
    issuer: 'Dicoding & Microsoft',
    link: 'https://www.dicoding.com/elevate/certificates/PRE59KR1AB',
  },
  {
    title: 'Hak Cipta (HAKI) — Analisis Pemakaian Spare Part Alat Berat Menggunakan Simple Moving Average',
    year: '2026',
    category: 'data',
    issuer: 'Kemenkumham RI',
    link: 'https://drive.google.com/file/d/19AH9pIork3RfwpCri4k_mRPtxdul5Yt_/view?usp=drivesdk',
  },
  {
    title: 'Sinergi Machine Learning dan Generative AI',
    year: '2026',
    category: 'ai',
    issuer: 'Dicoding',
    link: 'https://www.dicoding.com/elevate/certificates/OFL1V7Q4ZMQK',
  },
  {
    title: 'Belajar Fundamental Generative AI',
    year: '2026',
    category: 'ai',
    issuer: 'Dicoding',
    link: 'https://www.dicoding.com/certificates/1OP8R75MQZQK',
  },
  {
    title: 'Membangun Aplikasi Gen AI dengan Microsoft Azure',
    year: '2025',
    category: 'ai',
    issuer: 'Dicoding & Microsoft',
    link: 'https://www.dicoding.com/certificates/1RXYQQEKKZVM',
  },
  {
    title: 'Belajar Fundamental Deep Learning',
    year: '2025',
    category: 'ai',
    issuer: 'Dicoding',
    link: 'https://www.dicoding.com/certificates/ERZR25J12PYV',
  },
  {
    title: 'Financial Literacy 101',
    year: '2025',
    category: 'data',
    issuer: 'Dicoding',
    link: 'https://www.dicoding.com',
  },
  {
    title: 'Belajar Machine Learning untuk Pemula',
    year: '2024',
    category: 'ai',
    issuer: 'Dicoding',
    link: 'https://www.dicoding.com/certificates/07Z6W29R2ZQR',
  },
  {
    title: 'Belajar Dasar Kecerdasan Buatan (AI)',
    year: '2024',
    category: 'ai',
    issuer: 'Dicoding',
    link: 'https://www.dicoding.com/certificates/KEXL157RYXG2',
  },
  {
    title: 'Memulai Pemrograman dengan Python',
    year: '2024',
    category: 'data',
    issuer: 'Dicoding',
    link: 'https://www.dicoding.com/certificates/EYX4J0L9RZDL',
  },
  {
    title: 'Belajar Dasar Structured Query Language (SQL)',
    year: '2024',
    category: 'data',
    issuer: 'Dicoding',
    link: 'https://www.dicoding.com/certificates/NVP74DDDWPR0',
  },
  {
    title: 'Belajar Dasar Visualisasi Data',
    year: '2024',
    category: 'data',
    issuer: 'Dicoding',
    link: 'https://www.dicoding.com',
  },
  {
    title: 'Cloud Practitioner Essentials (Belajar Dasar AWS Cloud)',
    year: '2023',
    category: 'cloud',
    issuer: 'Dicoding & AWS',
    link: 'https://www.dicoding.com/certificates/JLX1W8NG2P72',
  },
  {
    title: 'Fundamental Database MySQL',
    year: '2023',
    category: 'data',
    issuer: 'Dicoding',
    link: 'https://www.dicoding.com',
  },
  {
    title: 'Belajar Dasar Pemrograman Web',
    year: '2023',
    category: 'web',
    issuer: 'Dicoding',
    link: 'https://www.dicoding.com/certificates/N9ZO50VORPG5',
  },
];

