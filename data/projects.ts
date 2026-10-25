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
      'Publikasi riset ilmiah di Jurnal Informatika Polinema (JIP) serta perolehan Hak Kekayaan Intelektual (HAKI) resmi dari DJKI Kemenkumham RI terkait metode Simple Moving Average untuk efisiensi inventaris alat berat.',
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
    id: 'dashboard-inventori-alat-berat',
    badge: '🔬 SISTEM TUGAS AKHIR • RESEARCH PROJECT',
    badgeType: 'web',
    title: 'Heavy Equipment Spare Part Analytics & Inventory Dashboard',
    description:
      'Implementasi sistem dashboard web berbasis Node.js dan React.js untuk prediksi kebutuhan suku cadang alat berat. Mengoptimalkan manajemen stok dengan tingkat akurasi optimal (MAE & RMSE 0,75 pada periode N=4).',
    subtitleRight: 'Sistem Inventori',
    image: '/Gambar-layar-aplikasi.png',
    imageAlt: 'Preview Dashboard Analitik Spare Part Alat Berat',
    techStack: ['React.js', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Moving Average AI', 'Node.js'],
    footerSub: 'Tugas Akhir S1 Informatika • Universitas Siber Asia',
    primaryAction: {
      label: 'Repositori GitHub',
      url: 'https://github.com/Teukuraja/Dashboard_Analitik_MA',
      type: 'github',
    },
  },
];
