"use client";

import React from 'react';
import { motion } from 'framer-motion';

const MARQUEE_SKILLS = [
  { name: 'Material Control', icon: '📦' },
  { name: 'React.js', icon: '⚛️' },
  { name: 'Spare Part Inventory', icon: '🚜' },
  { name: 'Next.js', icon: '▲' },
  { name: 'Moving Average (SMA)', icon: '📈' },
  { name: 'TypeScript', icon: '🔷' },
  { name: 'PostgreSQL (Neon)', icon: '🗄️' },
  { name: 'Warehouse Digitization', icon: '🏭' },
  { name: 'Microsoft Fabric', icon: '📊' },
  { name: 'Azure Generative AI', icon: '🤖' },
  { name: 'Node.js & Express', icon: '🟢' },
  { name: 'Tailwind CSS', icon: '🎨' },
  { name: 'PC & Laptop Maintenance', icon: '🛠️' },
];

export default function TechStack() {
  return (
    <section
      id="keahlian"
      className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-20 border-t border-slate-200/60 dark:border-white/10"
      aria-label="Keahlian dan Tech Stack"
    >
      {/* Header Bagian */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="space-y-3 mb-10 text-center sm:text-left"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 dark:bg-cyan-500/10 border border-blue-500/25 dark:border-cyan-500/30 text-blue-600 dark:text-cyan-400 font-bold text-xs uppercase tracking-wider shadow-sm">
          <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-cyan-400 animate-pulse" />
          <span>Keahlian &amp; Arsitektur Sistem</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Tech Stack &amp; Kompetensi Inti
        </h2>
        <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm max-w-2xl leading-relaxed">
          Sinergi keahlian praktis operasional pergudangan alat berat dengan rekayasa perangkat lunak modern untuk menciptakan sistem yang presisi, tangguh, dan bernilai tinggi.
        </p>
      </motion.div>

      {/* Baris Keahlian Berputar (Infinite Marquee) */}
      <div className="relative w-full overflow-hidden py-3.5 mb-10 rounded-2xl bg-white/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-white/10 backdrop-blur-sm shadow-sm">
        {/* Mask gradient kiri & kanan agar running text fade halus */}
        <div className="absolute inset-y-0 left-0 w-16 sm:w-20 bg-gradient-to-r from-slate-100 dark:from-slate-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 sm:w-20 bg-gradient-to-l from-slate-100 dark:from-slate-950 to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex items-center gap-3">
          {[...MARQUEE_SKILLS, ...MARQUEE_SKILLS].map((skill, index) => (
            <div
              key={`${skill.name}-${index}`}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-slate-200 text-xs font-semibold shadow-xs whitespace-nowrap hover:border-blue-400 dark:hover:border-cyan-400 hover:text-blue-600 dark:hover:text-cyan-400 hover:scale-105 transition-all cursor-default"
            >
              <span>{skill.icon}</span>
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Dua Kategori Utama */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        
        {/* ========================================================================= */}
        {/* KATEGORI A: Operations & System Analysis                                  */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden p-6 sm:p-8 rounded-3xl bg-white/90 dark:bg-slate-900/90 border border-slate-200/90 dark:border-white/10 shadow-sm hover:shadow-xl hover:shadow-blue-500/10 dark:hover:shadow-cyan-500/10 hover:border-blue-400 dark:hover:border-cyan-400/50 backdrop-blur-md transition-all duration-300 flex flex-col justify-between group"
        >
          {/* Top accent line */}
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 opacity-90 group-hover:opacity-100 transition-opacity" />

          <div className="space-y-5">
            {/* Header Kategori */}
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 dark:bg-cyan-500/10 border border-blue-500/20 dark:border-cyan-500/25 text-blue-600 dark:text-cyan-400 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform shadow-sm">
                📦
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 dark:text-cyan-400 font-mono">
                  Kategori 01 • Operasional &amp; Analitik
                </span>
                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                  Operations &amp; System Analysis
                </h3>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed text-justify">
              Pengalaman operasional komprehensif dalam mengelola perputaran suku cadang alat berat, menjaga stabilitas ketersediaan komponen, dan merancang model prediksi kebutuhan pengadaan.
            </p>

            {/* Rincian Bidang Fokus */}
            <div className="space-y-2.5 pt-1">
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/70 dark:border-white/5 space-y-0.5">
                <h4 className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                  <span className="text-blue-600 dark:text-cyan-400">✓</span> Material Control &amp; Heavy Equipment Spare Part Inventory
                </h4>
                <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
                  Pencatatan keluar-masuk, audit fisik gudang, dan pengawasan ribuan part number suku cadang alat berat.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/70 dark:border-white/5 space-y-0.5">
                <h4 className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                  <span className="text-blue-600 dark:text-cyan-400">✓</span> Demand Forecasting (Simple Moving Average)
                </h4>
                <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
                  Peramalan kebutuhan material berkala menggunakan algoritma SMA untuk mencegah stockout dan menekan dead-stock.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/70 dark:border-white/5 space-y-0.5">
                <h4 className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                  <span className="text-blue-600 dark:text-cyan-400">✓</span> Warehouse Digitization &amp; Microsoft Fabric
                </h4>
                <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
                  Modernisasi tata kelola pergudangan berbasis data analitik dan pemanfaatan Microsoft Fabric untuk data science.
                </p>
              </div>
            </div>

            {/* Skill Tags */}
            <div className="pt-2">
              <span className="block text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2">
                Keahlian Terapan:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {[
                  'Material Control',
                  'Heavy Equipment Spare Part Inventory',
                  'Demand Forecasting (Simple Moving Average)',
                  'Warehouse Digitization',
                  'Microsoft Fabric (Data Science)',
                  'Stockout Prevention',
                  'Supply Chain Planning',
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded-lg bg-blue-500/10 dark:bg-cyan-500/10 text-blue-700 dark:text-cyan-300 text-xs font-semibold border border-blue-500/20 dark:border-cyan-500/25"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* ========================================================================= */}
        {/* KATEGORI B: Full-Stack Web & AI Engineering                               */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.12 }}
          className="relative overflow-hidden p-6 sm:p-8 rounded-3xl bg-white/90 dark:bg-slate-900/90 border border-slate-200/90 dark:border-white/10 shadow-sm hover:shadow-xl hover:shadow-cyan-500/10 dark:hover:shadow-emerald-500/10 hover:border-cyan-400 dark:hover:border-emerald-400/50 backdrop-blur-md transition-all duration-300 flex flex-col justify-between group"
        >
          {/* Top accent line */}
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-400 opacity-90 group-hover:opacity-100 transition-opacity" />

          <div className="space-y-5">
            {/* Header Kategori */}
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 dark:bg-emerald-500/10 border border-cyan-500/20 dark:border-emerald-500/25 text-cyan-600 dark:text-emerald-400 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform shadow-sm">
                💻
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-600 dark:text-emerald-400 font-mono">
                  Kategori 02 • Rekayasa Perangkat Lunak
                </span>
                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-emerald-400 transition-colors">
                  Full-Stack Web &amp; AI Engineering
                </h3>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed text-justify">
              Pembangunan platform aplikasi web modern yang cepat, modular, dan terukur dengan backend API tangguh serta integrasi kecerdasan buatan untuk otomatisasi proses bisnis.
            </p>

            {/* Rincian Bidang Fokus */}
            <div className="space-y-2.5 pt-1">
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/70 dark:border-white/5 space-y-0.5">
                <h4 className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                  <span className="text-cyan-600 dark:text-emerald-400">✓</span> Modern Frontend: React.js, Next.js &amp; Tailwind CSS
                </h4>
                <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
                  Arsitektur komponen modular berbasis TypeScript, transisi responsif, dan performa web optimal.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/70 dark:border-white/5 space-y-0.5">
                <h4 className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                  <span className="text-cyan-600 dark:text-emerald-400">✓</span> Backend &amp; Database: Node.js, Express &amp; PostgreSQL (Neon)
                </h4>
                <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
                  Pembuatan REST API terstruktur, skema relasional teroptimasi, dan koneksi serverless database.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/70 dark:border-white/5 space-y-0.5">
                <h4 className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                  <span className="text-cyan-600 dark:text-emerald-400">✓</span> Cloud &amp; AI: Azure Generative AI &amp; Python
                </h4>
                <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
                  Penerapan model Generative AI untuk deduplikasi data otomatis dan analisis data berbasis Python.
                </p>
              </div>
            </div>

            {/* Skill Tags */}
            <div className="pt-2">
              <span className="block text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2">
                Teknologi Utama:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {[
                  'React.js',
                  'Next.js',
                  'TypeScript',
                  'Tailwind CSS',
                  'Node.js',
                  'Express',
                  'PostgreSQL (Neon)',
                  'Azure Generative AI',
                  'Python',
                  'Git & GitHub',
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-lg bg-emerald-500/10 dark:bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 text-xs font-semibold border border-emerald-500/20 dark:border-emerald-500/25"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* ========================================================================= */}
        {/* KATEGORI 03: Dukungan Teknis & Perawatan Perangkat                        */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.16 }}
          className="md:col-span-2 relative overflow-hidden p-6 sm:p-8 rounded-3xl bg-white/90 dark:bg-slate-900/90 border border-slate-200/90 dark:border-white/10 shadow-sm hover:shadow-xl hover:shadow-blue-500/10 dark:hover:shadow-cyan-500/10 hover:border-blue-400 dark:hover:border-cyan-400/50 backdrop-blur-md transition-all duration-300 flex flex-col justify-between group"
        >
          {/* Top accent line */}
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-400 opacity-90 group-hover:opacity-100 transition-opacity" />

          <div className="space-y-5">
            {/* Header Kategori */}
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 dark:bg-cyan-500/10 border border-blue-500/20 dark:border-cyan-500/25 text-blue-600 dark:text-cyan-400 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform shadow-sm">
                🛠️
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 dark:text-cyan-400 font-mono">
                  KATEGORI 03 • DUKUNGAN TEKNIS &amp; PERAWATAN PERANGKAT
                </span>
                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                  IT Support &amp; Perawatan Perangkat (PC/Laptop)
                </h3>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed text-justify">
              Kemampuan praktis dalam menangani perawatan rutin perangkat komputer/laptop, perbaikan ringan, serta instalasi sistem operasi Windows untuk menunjang kelancaran aktivitas kerja harian.
            </p>

            {/* 3 Sub-item (Checklist Box) Disusun Sejajar 3 Kolom */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1">
              {/* Item 1 */}
              <div className="p-3.5 sm:p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/70 dark:border-white/5 space-y-1.5 flex flex-col justify-between">
                <div>
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                    <span className="text-blue-600 dark:text-cyan-400 shrink-0">✓</span> Perawatan &amp; Upgrade Perangkat Keras
                  </h4>
                  <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed mt-1 text-justify">
                    Pembersihan rutin sistem pendingin laptop (kipas &amp; penggantian thermal paste/pad) serta pemasangan/upgrade komponen standar seperti RAM, SSD, atau baterai.
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="p-3.5 sm:p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/70 dark:border-white/5 space-y-1.5 flex flex-col justify-between">
                <div>
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                    <span className="text-blue-600 dark:text-cyan-400 shrink-0">✓</span> Instalasi Ulang Windows &amp; Software
                  </h4>
                  <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed mt-1 text-justify">
                    Instalasi ulang sistem operasi Windows, pengaturan partisi penyimpanan, kelengkapan driver, serta pemasangan aplikasi standar kebutuhan kantor dan kerja.
                  </p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="p-3.5 sm:p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/70 dark:border-white/5 space-y-1.5 flex flex-col justify-between">
                <div>
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                    <span className="text-blue-600 dark:text-cyan-400 shrink-0">✓</span> Troubleshooting &amp; Perbaikan Dasar
                  </h4>
                  <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed mt-1 text-justify">
                    Pengecekan dan penanganan kendala umum pada laptop/PC seperti perangkat lambat (lemot), cepat panas (overheat), atau penggantian part dasar yang rusak.
                  </p>
                </div>
              </div>
            </div>

            {/* Skill Tags */}
            <div className="pt-2">
              <span className="block text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2">
                Dukungan Teknis:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {[
                  'Perawatan Laptop & PC',
                  'Pembersihan Kipas & Thermal Paste',
                  'Upgrade RAM & SSD',
                  'Instalasi Windows OS',
                  'Driver Setup',
                  'Troubleshooting Overheat & Slowdown',
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded-lg bg-blue-500/10 dark:bg-cyan-500/10 text-blue-700 dark:text-cyan-300 text-xs font-semibold border border-blue-500/20 dark:border-cyan-500/25"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
