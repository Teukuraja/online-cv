'use client';

import React from 'react';
import { motion } from 'framer-motion';

const MARQUEE_SKILLS = [
  { name: 'React.js', icon: '⚛️' },
  { name: 'Next.js', icon: '▲' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'Python', icon: '🐍' },
  { name: 'Tailwind CSS', icon: '🎨' },
  { name: 'Git & GitHub', icon: '🐙' },
  { name: 'AWS Cloud', icon: '☁️' },
  { name: 'Microsoft Azure AI', icon: '🤖' },
  { name: 'MySQL & PostgreSQL', icon: '🗄️' },
  { name: 'JavaScript (ES6+)', icon: '⚡' },
  { name: 'Express.js', icon: '🚀' },
  { name: 'Simple Moving Average (SMA)', icon: '📈' },
];

export default function TechStack() {
  return (
    <section
      id="keahlian"
      className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-20 border-t border-slate-200/60 dark:border-white/10"
      aria-label="Keahlian dan Alat Teruji"
    >
      {/* Header Bagian */}
      <div className="space-y-3 mb-10 text-center sm:text-left">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 dark:bg-cyan-500/10 border border-blue-500/25 dark:border-cyan-500/30 text-blue-600 dark:text-cyan-400 font-bold text-xs uppercase tracking-wider shadow-sm">
          <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-cyan-400 animate-pulse" />
          <span>Keahlian &amp; Alat Teruji</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Tech Stack &amp; Arsitektur Sistem
        </h2>
        <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm max-w-2xl">
          Kombinasi kemampuan pengembangan aplikasi web modern, analisis data, kecerdasan buatan, dan pemeliharaan teknis perangkat keras/lunak.
        </p>
      </div>

      {/* POSISI 1: Baris Keahlian Berputar (Infinite Marquee) */}
      <div className="relative w-full overflow-hidden py-4 mb-12 rounded-2xl bg-white/60 dark:bg-slate-900/50 border border-slate-200/80 dark:border-white/8 backdrop-blur-sm shadow-sm">
        {/* Mask gradient kiri & kanan agar running text fade halus */}
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-slate-100 dark:from-slate-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-slate-100 dark:from-slate-950 to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex items-center gap-3">
          {/* Double list for infinite loop */}
          {[...MARQUEE_SKILLS, ...MARQUEE_SKILLS].map((skill, index) => (
            <div
              key={`${skill.name}-${index}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/90 dark:bg-slate-900/90 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-slate-200 text-xs font-bold shadow-xs whitespace-nowrap hover:border-blue-400 dark:hover:border-cyan-400 hover:text-blue-600 dark:hover:text-cyan-400 hover:scale-105 transition-all cursor-default"
            >
              <span>{skill.icon}</span>
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* POSISI 2: Bento Grid 4 Kelompok Keahlian dengan Efek Glowing Hover */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* KELOMPOK 1: Pengembangan Web */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden p-6 sm:p-7 rounded-2xl bg-white/90 dark:bg-slate-900/90 border border-slate-200/80 dark:border-white/10 shadow-sm hover:shadow-xl hover:shadow-blue-500/10 dark:hover:shadow-cyan-500/15 hover:border-blue-300 dark:hover:border-cyan-400/50 backdrop-blur-md transition-all duration-300 group flex flex-col justify-between"
        >
          <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-400 dark:from-cyan-400 dark:via-sky-400 dark:to-teal-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/15 to-indigo-500/15 dark:from-cyan-500/15 dark:to-blue-500/15 border border-blue-500/20 dark:border-cyan-500/25 flex items-center justify-center text-xl group-hover:scale-110 transition-transform shadow-sm">
                💻
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                  Pengembangan Web
                </h3>
                <p className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                  Antarmuka interaktif, responsif, dan terhubung API
                </p>
              </div>
            </div>
            
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Membangun aplikasi web berperforma tinggi menggunakan ekosistem modern React.js dan Node.js dengan integrasi database yang efisien.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {['HTML/CSS', 'JavaScript (ES6+)', 'React.js (Vite)', 'Express.js', 'Node.js', 'Next.js', 'Tailwind CSS'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 text-xs font-semibold border border-slate-200 dark:border-slate-700/60 group-hover:border-blue-400/40 dark:group-hover:border-cyan-400/40 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* KELOMPOK 2: Pemrograman & Basis Data */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="relative overflow-hidden p-6 sm:p-7 rounded-2xl bg-white/90 dark:bg-slate-900/90 border border-slate-200/80 dark:border-white/10 shadow-sm hover:shadow-xl hover:shadow-indigo-500/10 dark:hover:shadow-emerald-500/15 hover:border-indigo-300 dark:hover:border-emerald-400/50 backdrop-blur-md transition-all duration-300 group flex flex-col justify-between"
        >
          <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-indigo-600 via-purple-500 to-emerald-400 dark:from-emerald-400 dark:via-teal-400 dark:to-cyan-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500/15 to-purple-500/15 dark:from-emerald-500/15 dark:to-teal-500/15 border border-indigo-500/20 dark:border-emerald-500/25 flex items-center justify-center text-xl group-hover:scale-110 transition-transform shadow-sm">
                🗄️
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-emerald-400 transition-colors">
                  Pemrograman &amp; Data
                </h3>
                <p className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                  Manipulasi data, pemodelan relasional &amp; scripting
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Mengolah kueri relasional terstruktur (SQL), perancangan skema database, serta otomatisasi analisis menggunakan logika pemrograman Python.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {['Python', 'Java', 'MySQL', 'PostgreSQL', 'MongoDB', 'Structured Query Language (SQL)'].map((item) => (
                <span
                  key={item}
                  className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 text-xs font-semibold border border-slate-200 dark:border-slate-700/60 group-hover:border-indigo-400/40 dark:group-hover:border-emerald-400/40 transition-colors"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* KELOMPOK 3: Alat Cloud & AI */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="relative overflow-hidden p-6 sm:p-7 rounded-2xl bg-white/90 dark:bg-slate-900/90 border border-slate-200/80 dark:border-white/10 shadow-sm hover:shadow-xl hover:shadow-cyan-500/10 dark:hover:shadow-teal-500/15 hover:border-cyan-300 dark:hover:border-teal-400/50 backdrop-blur-md transition-all duration-300 group flex flex-col justify-between"
        >
          <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-cyan-500 via-teal-400 to-emerald-400 dark:from-teal-400 dark:via-cyan-300 dark:to-emerald-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/15 to-teal-500/15 dark:from-teal-500/15 dark:to-cyan-500/15 border border-cyan-500/20 dark:border-teal-500/25 flex items-center justify-center text-xl group-hover:scale-110 transition-transform shadow-sm">
                🤖
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-teal-400 transition-colors">
                  Alat Cloud &amp; AI
                </h3>
                <p className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                  Implementasi komputasi awan &amp; kecerdasan buatan
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Memanfaatkan layanan Microsoft Azure AI, Microsoft Fabric, dan AWS Cloud untuk mengintegrasikan model Machine Learning dan Generative AI.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {['AWS Cloud', 'Machine Learning', 'Deep Learning', 'Gen AI (Azure)', 'Microsoft Fabric', 'Git & GitHub', 'Excel (Analisis Data)'].map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 text-xs font-semibold border border-slate-200 dark:border-slate-700/60 group-hover:border-cyan-400/40 dark:group-hover:border-teal-400/40 transition-colors"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* KELOMPOK 4: Perawatan Sistem (Keahlian Pendukung) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="relative overflow-hidden p-6 sm:p-7 rounded-2xl bg-white/90 dark:bg-slate-900/90 border border-slate-200/80 dark:border-white/10 shadow-sm hover:shadow-xl hover:shadow-amber-500/10 dark:hover:shadow-amber-500/15 hover:border-amber-300 dark:hover:border-amber-400/50 backdrop-blur-md transition-all duration-300 group flex flex-col justify-between"
        >
          <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-amber-500 via-orange-400 to-yellow-400 dark:from-amber-400 dark:via-orange-300 dark:to-yellow-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500/15 to-orange-500/15 dark:from-amber-500/15 dark:to-yellow-500/10 border border-amber-500/20 dark:border-amber-500/25 flex items-center justify-center text-xl group-hover:scale-110 transition-transform shadow-sm">
                🛠️
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                  Perawatan Sistem &amp; Operasional
                </h3>
                <p className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                  Dukungan teknis lapangan &amp; pemeliharaan perangkat
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Mampu menyelesaikan kendala sistem secara mandiri, penanganan instalasi OS Windows, troubleshooting perangkat keras/lunak, serta disiplin operasional lapangan.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {[
                'Troubleshooting Perangkat Lunak',
                'Instal Ulang OS Windows',
                'Optimization & Hardware Maintenance Ringan',
                'K3 & Standar Operasional',
              ].map((maint) => (
                <span
                  key={maint}
                  className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 text-xs font-semibold border border-slate-200 dark:border-slate-700/60 group-hover:border-amber-400/40 dark:group-hover:border-amber-400/40 transition-colors"
                >
                  {maint}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
