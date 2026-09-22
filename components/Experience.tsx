'use client';

import React from 'react';
import { FaExternalLinkAlt, FaGraduationCap, FaBriefcase, FaAward } from 'react-icons/fa';

const EXPERIENCES = [
  {
    role: 'Material Control',
    company: 'PT Aldzama',
    project: 'Proyek PT Vale',
    period: 'Jan 2022 – Mar 2026',
    active: true,
    points: [
      'Memonitor stok gudang dan menyusun laporan kebutuhan pengadaan suku cadang secara berkala.',
      'Berkoordinasi lintas tim logistik dan pengadaan untuk menjamin ketersediaan material operasional.',
      'Menganalisis pergerakan inventaris dan efisiensi stok menggunakan Microsoft Excel tingkat lanjut & sistem pencatatan.',
    ],
    skills: ['Material Control', 'Excel Analysis', 'Logistik Alat Berat', 'Supply Chain'],
  },
  {
    role: 'Teknisi Elektrik Alat Berat',
    company: 'PT Aldzama',
    project: 'Proyek PT Antam',
    period: 'Jun 2021 – Sep 2021',
    active: false,
    points: [
      'Menangani troubleshooting komponen elektrik alat berat dan instalasi panel listrik langsung di lapangan tambang.',
      'Bekerja sistematis, disiplin kepatuhan standar K3 tinggi, dan berorientasi pada pemecahan solusi teknis cepat.',
    ],
    skills: ['Troubleshooting Elektrik', 'Panel Kontrol', 'K3 Pertambangan', 'Heavy Equipment'],
  },
];

const CERT_HIGHLIGHTS = [
  {
    title: 'Membangun Aplikasi Gen AI dengan Microsoft Azure',
    year: '2025',
    issuer: 'Dicoding & Microsoft',
    link: 'https://www.dicoding.com/certificates/1RXYQQEKKZVM',
    badge: 'Gen AI & Azure',
  },
  {
    title: 'Cloud Practitioner Essentials (AWS Cloud)',
    year: '2023',
    issuer: 'Dicoding & AWS',
    link: 'https://www.dicoding.com/certificates/JLX1W8NG2P72',
    badge: 'AWS Cloud',
  },
  {
    title: 'Belajar Fundamental Deep Learning',
    year: '2025',
    issuer: 'Dicoding',
    link: 'https://www.dicoding.com/certificates/ERZR25J12PYV',
    badge: 'Deep Learning',
  },
  {
    title: 'Penerapan Data Science dengan Microsoft Fabric',
    year: '2025',
    issuer: 'Dicoding & Microsoft',
    link: 'https://www.dicoding.com/elevate/certificates/PRE59KR1AB',
    badge: 'Data Science',
  },
  {
    title: 'Belajar Machine Learning & AI Essentials',
    year: '2024',
    issuer: 'Dicoding',
    link: 'https://www.dicoding.com/certificates/07Z6W29R2ZQR',
    badge: 'Machine Learning',
  },
];

export default function Experience() {
  return (
    <section
      id="pengalaman"
      className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-20 border-t border-slate-200/60 dark:border-white/10"
      aria-label="Pengalaman Kerja, Pendidikan dan Sertifikasi"
    >
      {/* Header Bagian */}
      <div className="space-y-3 mb-12 text-center sm:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 dark:bg-cyan-500/10 border border-blue-500/20 dark:border-cyan-500/25 text-blue-600 dark:text-cyan-400 font-bold text-xs uppercase tracking-wider">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-cyan-400" />
          <span>Jejak Karir &amp; Kredensial</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Pengalaman, Pendidikan &amp; Sertifikasi
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm max-w-2xl">
          Pengalaman operasional lapangan di industri pertambangan/logistik berskala besar dipadukan dengan dasar akademis S1 Informatika yang kokoh.
        </p>
      </div>

      {/* Tata Letak Dual-Timeline Vertikal Berdampingan */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        
        {/* ========================================================================= */}
        {/* KOLOM KIRI: Pengalaman Kerja (Timeline Garis Vertikal Bergradasi)          */}
        {/* ========================================================================= */}
        <div className="space-y-6">
          <div className="flex items-center gap-2.5 pb-2 border-b border-slate-200/60 dark:border-white/10">
            <div className="w-8 h-8 rounded-lg bg-blue-500/10 dark:bg-cyan-500/10 text-blue-600 dark:text-cyan-400 flex items-center justify-center text-sm">
              <FaBriefcase />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
              Pengalaman Kerja
            </h3>
          </div>

          <div className="relative pl-6 sm:pl-7 space-y-8 before:absolute before:inset-y-3 before:left-2.5 sm:before:left-3 before:w-0.5 before:bg-gradient-to-b before:from-blue-600 before:via-indigo-500 before:to-cyan-500 dark:before:from-cyan-400 dark:before:via-emerald-400 dark:before:to-teal-400">
            {EXPERIENCES.map((job) => (
              <div key={job.role} className="relative group">
                
                {/* Node Titik Garis Waktu */}
                <div className="absolute -left-[27px] sm:-left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-blue-600 dark:bg-cyan-400 ring-4 ring-slate-100 dark:ring-slate-950 group-hover:scale-125 transition-transform" />

                {/* Kartu Detail Pekerjaan */}
                <div className="p-5 sm:p-6 rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-white/10 shadow-sm hover:shadow-xl hover:border-blue-400 dark:hover:border-cyan-400/50 backdrop-blur-md transition-all duration-300 space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-1.5">
                    <div>
                      <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                        {job.role}
                      </h4>
                      <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                        {job.company} • <span className="text-blue-600 dark:text-teal-300">{job.project}</span>
                      </p>
                    </div>
                    <span className="text-[11px] font-mono font-bold text-blue-600 dark:text-cyan-400 bg-blue-500/10 dark:bg-cyan-500/10 px-2.5 py-1 rounded-full border border-blue-500/20 dark:border-cyan-500/30">
                      {job.period}
                    </span>
                  </div>

                  <ul className="text-xs text-slate-600 dark:text-slate-300 space-y-1.5 list-disc list-inside leading-relaxed text-justify">
                    {job.points.map((pt, i) => (
                      <li key={i}>{pt}</li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100 dark:border-slate-800/80">
                    {job.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-[10px] font-semibold text-slate-600 dark:text-slate-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* KOLOM KANAN: Pendidikan (Atas) & Sertifikasi Unggulan (Bawah)              */}
        {/* ========================================================================= */}
        <div className="space-y-6">
          
          {/* 1. BAGIAN ATAS: Kartu Pendidikan Bersih */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5 pb-2 border-b border-slate-200/60 dark:border-white/10">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-sm">
                <FaGraduationCap />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                Pendidikan
              </h3>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-white/10 shadow-sm hover:shadow-xl hover:border-emerald-400 dark:hover:border-emerald-500/50 backdrop-blur-md transition-all duration-300 space-y-2.5 group">
              <div className="flex flex-wrap items-center justify-between gap-1.5">
                <div>
                  <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                    Jenjang S1 Terakreditasi
                  </span>
                  <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mt-1.5 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    S1 Informatika — Universitas Siber Asia
                  </h4>
                </div>
                <span className="text-[11px] font-mono font-bold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-md">
                  Agu 2023 – Apl 2026
                </span>
              </div>

              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed text-justify">
                Fokus studi pada Data Science &amp; Analisis Data Terapan, Rekayasa Perangkat Lunak, serta Pengembangan Web. Menyelesaikan Tugas Akhir/Skripsi di bidang Data Science dengan topik analisis prediktif suku cadang alat berat yang telah terpublikasi jurnal ilmiah &amp; HAKI.
              </p>

              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100 dark:border-slate-800/80">
                {['Data Science', 'Predictive Analytics', 'Software Engineering', 'Machine Learning'].map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-md bg-emerald-500/10 dark:bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 text-[10px] font-semibold border border-emerald-500/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* 2. BAGIAN BAWAH: Kartu Sertifikasi Unggulan (Grid Badge Interaktif) */}
          <div className="space-y-4 pt-2">
            <div className="flex items-center justify-between pb-2 border-b border-slate-200/60 dark:border-white/10">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 dark:bg-cyan-500/10 text-blue-600 dark:text-cyan-400 flex items-center justify-center text-sm">
                  <FaAward />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                  Sertifikasi Unggulan
                </h3>
              </div>
              <span className="text-xs font-semibold text-blue-600 dark:text-cyan-400">
                5 Kredensial Resmi
              </span>
            </div>

            {/* Grid Kartu/Badge Sertifikat */}
            <div className="grid grid-cols-1 gap-2.5">
              {CERT_HIGHLIGHTS.map((cert) => (
                <a
                  key={cert.title}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 sm:p-4 rounded-xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-white/10 shadow-xs hover:shadow-md hover:border-blue-400 dark:hover:border-cyan-400/50 hover:bg-slate-50/90 dark:hover:bg-slate-800/90 transition-all duration-200 group flex flex-col justify-between"
                >
                  <div className="flex justify-between items-start gap-2 mb-1.5">
                    <span className="px-2 py-0.5 rounded-md bg-blue-500/10 dark:bg-cyan-500/10 text-blue-600 dark:text-cyan-400 text-[10px] font-bold uppercase tracking-wider border border-blue-500/20 dark:border-cyan-500/20">
                      {cert.badge}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400 dark:text-slate-400">
                      {cert.year}
                    </span>
                  </div>

                  <h4 className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors leading-snug">
                    {cert.title}
                  </h4>

                  <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 pt-2 mt-2 border-t border-slate-100 dark:border-slate-800/80">
                    <span className="font-medium">{cert.issuer}</span>
                    <span className="text-blue-600 dark:text-cyan-400 font-semibold group-hover:translate-x-1 transition-transform flex items-center gap-1">
                      <span>Lihat Kredensial</span>
                      <FaExternalLinkAlt className="text-[9px]" />
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
