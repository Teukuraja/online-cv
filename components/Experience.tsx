"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGraduationCap, FaBriefcase, FaAward } from 'react-icons/fa';

const EXPERIENCES = [
  {
    role: 'Material Control & Heavy Equipment Spare Part Warehouse Management',
    company: 'PT Aldzama',
    project: 'Proyek PT Vale & PT Antam',
    period: 'Jan 2022 – Sekarang',
    badge: '4+ Tahun Pengalaman Operasional',
    active: true,
    points: [
      'Mengelola pencatatan keluar-masuk, ketersediaan stok, dan distribusi suku cadang (spare part) alat berat untuk mendukung kelancaran operasional di lapangan tambang.',
      'Menyusun laporan rutin stok gudang dan menghitung perkiraan kebutuhan pengadaan barang secara berkala guna mencegah insiden kekosongan stok (stockout).',
      'Berkoordinasi aktif dengan tim mekanik, logistik, dan departemen pembelian (purchasing) untuk memastikan ketepatan waktu kedatangan serta kesesuaian part number suku cadang.',
    ],
    skills: ['Material Control', 'Heavy Equipment Spare Parts', 'Warehouse Management', 'Stockout Prevention', 'Logistik Tambang'],
  },
  {
    role: 'Teknisi Elektrik Alat Berat',
    company: 'PT Aldzama',
    project: 'Proyek PT Antam',
    period: 'Jun 2021 – Sep 2021',
    badge: 'Teknis Lapangan',
    active: false,
    points: [
      'Menangani pemeriksaan rutin, perbaikan (troubleshooting), dan perawatan komponen kelistrikan serta panel pada unit alat berat.',
      'Menganalisis kerusakan perangkat keras (hardware/kelistrikan) di lapangan secara sistematis dan memastikan unit kembali beroperasi dengan aman sesuai standar K3.',
    ],
    skills: ['Troubleshooting Elektrik', 'Panel Kontrol', 'K3 Pertambangan', 'Heavy Equipment'],
  },
];

const CERT_HIGHLIGHTS = [
  {
    title: 'Data Science with Microsoft Fabric',
    year: '2026',
    issuer: 'Dicoding Elevate & Microsoft',
    link: 'https://www.dicoding.com/elevate/certificates/PRE59KR1AB',
    badge: 'Data Science',
    featured: true,
  },
  {
    title: 'Generative AI Application Development on Microsoft Azure',
    year: '2026',
    issuer: 'Dicoding Elevate & Microsoft',
    link: 'https://www.dicoding.com/elevate/certificates/OFL1V7Q4ZMQK',
    badge: 'Azure Generative AI',
    featured: true,
  },
  {
    title: 'Belajar Fundamental Deep Learning',
    year: '2025',
    issuer: 'Dicoding',
    link: 'https://www.dicoding.com/certificates/ERZR25J12PYV',
    badge: 'Deep Learning',
    featured: false,
  },
  {
    title: 'Belajar Machine Learning & AI Essentials',
    year: '2024',
    issuer: 'Dicoding',
    link: 'https://www.dicoding.com/certificates/07Z6W29R2ZQR',
    badge: 'Machine Learning',
    featured: false,
  },
  {
    title: 'Cloud Practitioner Essentials (AWS Cloud)',
    year: '2023',
    issuer: 'Dicoding & AWS',
    link: 'https://www.dicoding.com/certificates/JLX1W8NG2P72',
    badge: 'AWS Cloud',
    featured: false,
  },
];

export default function Experience() {
  return (
    <section
      id="pengalaman"
      className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-20 border-t border-slate-200/60 dark:border-white/10"
      aria-label="Pengalaman Kerja, Pendidikan dan Kredensial"
    >
      {/* Ambient Glow Background */}
      <div className="absolute top-32 left-0 w-72 h-72 bg-blue-500/5 dark:bg-cyan-500/8 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-20 right-0 w-64 h-64 bg-emerald-500/5 dark:bg-emerald-500/8 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

      {/* Header Bagian */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="space-y-3 mb-12 text-center sm:text-left"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 dark:bg-cyan-500/10 border border-blue-500/25 dark:border-cyan-500/30 text-blue-600 dark:text-cyan-400 font-bold text-xs uppercase tracking-wider shadow-sm">
          <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-cyan-400 animate-pulse" />
          <span>Jejak Karir &amp; Kredensial Resmi</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Pengalaman Kerja, Pendidikan &amp; Pencapaian
        </h2>
        <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm max-w-2xl leading-relaxed">
          Pengalaman operasional lapangan 4+ tahun dalam rantai pasok dan pergudangan suku cadang alat berat di lingkungan pertambangan, diperkuat fondasi akademis Sarjana Informatika dan sertifikasi global.
        </p>
      </motion.div>

      {/* Tata Letak Dual-Kolom Berdampingan */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        
        {/* ========================================================================= */}
        {/* KOLOM KIRI: Pengalaman Kerja                                               */}
        {/* ========================================================================= */}
        <div className="space-y-5">
          <div className="flex items-center gap-3 pb-3 border-b border-slate-200/60 dark:border-white/10">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500/20 to-indigo-500/20 dark:from-cyan-500/15 dark:to-blue-500/15 border border-blue-500/25 dark:border-cyan-500/25 text-blue-600 dark:text-cyan-400 flex items-center justify-center text-sm shadow-sm">
              <FaBriefcase />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                Pengalaman Kerja
              </h3>
              <span className="text-[11px] text-blue-600 dark:text-cyan-400 font-mono font-semibold">
                PT Aldzama (4+ Tahun Operasional)
              </span>
            </div>
          </div>

          <div className="relative pl-6 sm:pl-7 space-y-7 pt-2 pb-4 before:absolute before:inset-y-3 before:left-2.5 sm:before:left-3 before:w-px before:bg-gradient-to-b before:from-blue-600 before:via-indigo-500 before:to-cyan-500/40 dark:before:from-cyan-400 dark:before:via-emerald-400 dark:before:to-teal-400/30">
            {EXPERIENCES.map((job, index) => (
              <div key={job.role} className="relative group">
                
                {/* Timeline node */}
                <div className="absolute -left-[27px] sm:-left-[31px] top-1.5">
                  {job.active ? (
                    <span className="relative flex h-3.5 w-3.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-600 dark:bg-cyan-400 opacity-50" />
                      <span className="relative inline-flex h-3.5 w-3.5 rounded-full bg-blue-600 dark:bg-cyan-400 ring-4 ring-slate-100 dark:ring-slate-950" />
                    </span>
                  ) : (
                    <span className="flex h-3.5 w-3.5 rounded-full bg-slate-400 dark:bg-slate-600 ring-4 ring-slate-100 dark:ring-slate-950 group-hover:bg-indigo-500 dark:group-hover:bg-indigo-400 transition-colors" />
                  )}
                </div>

                {/* Kartu Detail Pekerjaan */}
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
                  className="relative overflow-hidden rounded-3xl bg-white/90 dark:bg-slate-900/90 border border-slate-200/90 dark:border-white/10 shadow-sm hover:shadow-xl hover:shadow-blue-500/8 dark:hover:shadow-cyan-500/10 hover:border-blue-400 dark:hover:border-cyan-400/50 backdrop-blur-md transition-all duration-300 space-y-3.5 p-5 sm:p-6 group/card"
                >
                  <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 opacity-90 group-hover/card:opacity-100 transition-opacity" />

                  <div className="space-y-1.5">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="px-2.5 py-0.5 rounded-full bg-blue-500/10 dark:bg-cyan-500/10 text-blue-700 dark:text-cyan-300 text-[10px] font-bold border border-blue-500/20 dark:border-cyan-500/25 uppercase">
                        {job.badge}
                      </span>
                      <span className="text-[11px] font-mono font-bold text-slate-500 dark:text-slate-400">
                        {job.period}
                      </span>
                    </div>

                    <h4 className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white group-hover/card:text-blue-600 dark:group-hover/card:text-cyan-400 transition-colors leading-snug">
                      {job.role}
                    </h4>

                    <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                      {job.company} • <span className="text-blue-600 dark:text-cyan-400">{job.project}</span>
                    </p>
                  </div>

                  <ul className="text-xs text-slate-600 dark:text-slate-300 space-y-2 leading-relaxed text-justify">
                    {job.points.map((pt, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-blue-600 dark:text-cyan-400 font-bold shrink-0">›</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100 dark:border-slate-800/80">
                    {job.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-0.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-[10px] font-semibold text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700/60"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>

              </div>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* KOLOM KANAN: Pendidikan, Publikasi & HAKI, serta Sertifikasi                */}
        {/* ========================================================================= */}
        <div className="space-y-6">
          
          {/* 1. Pendidikan */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 pb-3 border-b border-slate-200/60 dark:border-white/10">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/15 dark:from-emerald-500/15 dark:to-teal-500/10 border border-emerald-500/25 dark:border-emerald-500/25 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-sm shadow-sm">
                <FaGraduationCap />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                  Pendidikan
                </h3>
                <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-mono font-semibold">
                  Universitas Siber Asia (Lulus Agustus 2026)
                </span>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="relative overflow-hidden rounded-3xl bg-white/90 dark:bg-slate-900/90 border border-slate-200/90 dark:border-white/10 shadow-sm hover:shadow-xl hover:shadow-emerald-500/8 dark:hover:shadow-emerald-500/10 hover:border-emerald-400 dark:hover:border-emerald-500/40 backdrop-blur-md transition-all duration-300 p-5 sm:p-6 space-y-3 group"
            >
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 opacity-90 group-hover:opacity-100 transition-opacity" />

              <div className="flex flex-wrap items-start justify-between gap-2">
                <div className="space-y-0.5">
                  <span className="inline-block text-[10px] font-bold text-emerald-700 dark:text-emerald-300 uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                    Jenjang Strata 1 (S1)
                  </span>
                  <h4 className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors leading-tight">
                    Sarjana Informatika (S1)
                  </h4>
                  <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                    Universitas Siber Asia (UNSIA)
                  </p>
                </div>
                <span className="text-[11px] font-mono font-bold text-emerald-700 dark:text-emerald-300 bg-emerald-500/10 px-2.5 py-1 rounded-xl border border-emerald-500/20 shrink-0">
                  Lulus Agu 2026
                </span>
              </div>

              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed text-justify">
                Fokus studi pada Rekayasa Perangkat Lunak, Data Science &amp; Analisis Data Terapan, serta Pengembangan Web Modern. Skripsi berfokus pada analisis prediktif suku cadang alat berat menggunakan algoritma Simple Moving Average (SMA).
              </p>

              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100 dark:border-slate-800/80">
                {['Software Engineering', 'Data Science', 'Full-Stack Web', 'Machine Learning'].map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-0.5 rounded-lg bg-emerald-500/10 dark:bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 text-[10px] font-semibold border border-emerald-500/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* 2. Sertifikasi Unggulan */}
          <div className="space-y-3 pt-2">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200/60 dark:border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-500/15 dark:from-amber-500/15 dark:to-yellow-500/10 border border-amber-500/25 dark:border-amber-500/25 text-amber-600 dark:text-amber-400 flex items-center justify-center text-sm shadow-sm">
                  <FaAward />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                    Sertifikasi Profesional
                  </h3>
                  <span className="text-[11px] text-amber-600 dark:text-amber-400 font-mono font-semibold">
                    Microsoft, Dicoding &amp; AWS
                  </span>
                </div>
              </div>
              <span className="text-[11px] font-bold text-amber-600 dark:text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/20">
                5 Kredensial
              </span>
            </div>

            {/* Grid Kartu Sertifikat */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="grid grid-cols-1 gap-2 pt-1"
            >
              {CERT_HIGHLIGHTS.map((cert) => (
                <a
                  key={cert.title}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`relative overflow-hidden p-3.5 sm:p-4 rounded-2xl border transition-all duration-200 group flex items-center gap-3 ${
                    cert.featured
                      ? 'bg-blue-50/60 dark:bg-slate-900/90 border-blue-300 dark:border-cyan-500/30 hover:border-blue-400 dark:hover:border-cyan-400 shadow-xs hover:shadow-md'
                      : 'bg-white/90 dark:bg-slate-900/90 border-slate-200/80 dark:border-white/10 hover:border-blue-300 dark:hover:border-cyan-400/40 shadow-xs hover:shadow-md'
                  }`}
                >
                  <div className="shrink-0 w-9 h-9 rounded-xl bg-blue-500/10 dark:bg-cyan-500/10 border border-blue-500/20 dark:border-cyan-500/20 flex flex-col items-center justify-center">
                    <span className="text-[9px] font-mono font-bold text-blue-600 dark:text-cyan-400">
                      {cert.year}
                    </span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <span className="px-1.5 py-0.5 rounded bg-blue-500/10 dark:bg-cyan-500/10 text-blue-600 dark:text-cyan-400 text-[9px] font-bold uppercase tracking-wider">
                        {cert.badge}
                      </span>
                      {cert.featured && (
                        <span className="text-[9px] font-bold text-emerald-600 dark:text-emerald-400">
                          ★ Highlight
                        </span>
                      )}
                    </div>
                    <h4 className="text-[11px] sm:text-xs font-bold text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors leading-snug truncate">
                      {cert.title}
                    </h4>
                    <p className="text-[10px] text-slate-400 dark:text-slate-500 mt-0.5 truncate">{cert.issuer}</p>
                  </div>

                  <FaExternalLinkAlt className="text-[10px] text-slate-400 group-hover:text-blue-500 dark:group-hover:text-cyan-400 transition-colors shrink-0 group-hover:translate-x-0.5 transition-transform" />
                </a>
              ))}
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
