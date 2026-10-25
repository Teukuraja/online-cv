export interface ProjectHighlight {
  icon: string;
  label: string;
}

export interface ProjectAction {
  label: string;
  url: string;
  type?: 'journal' | 'github' | 'haki';
}

export interface ProjectItem {
  id: string;
  badge: string;
  badgeType: 'journal' | 'web';
  title: string;
  description: string;
  subtitleRight?: string;
  highlightsTitle?: string;
  highlights?: ProjectHighlight[];
  image?: string;
  imageAlt?: string;
  techStack: string[];
  footerSub?: string;
  primaryAction: ProjectAction;
  secondaryAction?: ProjectAction;
}

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'riset-jurnal-haki',
    badge: '📜 Jurnal JIP & Hak Cipta Kemenkumham 2026',
    badgeType: 'journal',
    title: 'Analisis Pemakaian Spare Part Alat Berat Menggunakan Simple Moving Average',
    description:
      'Merancang & membangun sistem dashboard analitik berbasis web untuk memprediksi kebutuhan suku cadang alat berat menggunakan algoritma SMA. Mengurangi risiko over-stocking dan downtime operasional di industri tambang/logistik.',
    highlightsTitle: 'Sorotan Riset & HAKI:',
    highlights: [
      { icon: '📈', label: 'Prediksi Suku Cadang' },
      { icon: '⚖️', label: 'HAKI Kemenkumham RI' },
      { icon: '📊', label: 'Algoritma Moving Average' },
      { icon: '🏭', label: 'Efisiensi Operasional' },
    ],
    techStack: ['Python', 'Streamlit / React', 'Analisis Data', 'Algoritma SMA'],
    primaryAction: {
      label: 'Baca Jurnal',
      url: 'https://jurnal.polinema.ac.id/index.php/jip/article/view/9491',
      type: 'journal',
    },
    secondaryAction: {
      label: 'Berkas HAKI',
      url: 'https://drive.google.com/file/d/19AH9pIork3RfwpCri4k_mRPtxdul5Yt_/view',
      type: 'haki',
    },
  },
  {
    id: 'saas-sparepart-dashboard',
    badge: '⚡ Flagship SaaS Dashboard',
    badgeType: 'web',
    title: 'Multi-Tenant Heavy Equipment Spare Part Analytics & Inventory Dashboard',
    description:
      'Aplikasi dashboard analitik modern untuk inventaris dan prediksi kebutuhan suku cadang alat berat. Dilengkapi fitur Moving Average Demand Forecasting, QR Code Bin Scanning untuk audit fisik gudang cepat, serta AI-assisted Data Deduplication guna standardisasi katalog part number.',
    subtitleRight: 'SaaS & Enterprise Inventory',
    image: '/Gambar-layar-aplikasi.png',
    imageAlt: 'Preview Dashboard Analitik Spare Part Alat Berat',
    techStack: ['React.js', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Moving Average AI', 'Node.js'],
    footerSub: 'SaaS Inventory & Analytics',
    primaryAction: {
      label: 'Repositori GitHub',
      url: 'https://github.com/Teukuraja/Dashboard_Analitik_MA',
      type: 'github',
    },
  },
];
