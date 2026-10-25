'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { PROJECTS_DATA } from '@/data/projects';

export default function ProjectsGrid() {
  const [journalProject, webProject] = PROJECTS_DATA;

  return (
    <section
      id="proyek"
      className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-14 border-t border-slate-200/60 dark:border-white/10"
      aria-label="Publikasi Jurnal, HAKI dan Proyek Unggulan"
    >
      <div id="publikasi" className="-mt-16 pt-16" />

      {/* Header Bagian */}
      <div className="space-y-2 mb-6 sm:mb-8 text-center sm:text-left">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 dark:bg-cyan-500/10 border border-blue-500/25 dark:border-cyan-500/30 text-blue-600 dark:text-cyan-400 font-bold text-xs uppercase tracking-wider shadow-sm">
          <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-cyan-400 animate-pulse" />
          <span>Hasil Karya &amp; Riset Terapan</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Publikasi, HAKI &amp; Proyek
        </h2>
        <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm max-w-2xl">
          Dokumentasi karya ilmiah yang telah terbit di jurnal bereputasi, sertifikat Hak Cipta resmi dari Kemenkumham RI, dan aplikasi web responsif.
        </p>
      </div>

      {/* Grid 2 Kolom Presisi, Simetris dengan Animasi Anti-Gravity */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        
        {/* KARTU 1: PUBLIKASI JURNAL & HAKI (Dua Tombol Sejajar Ujung ke Ujung) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{
            y: -6,
            transition: { duration: 0.2, ease: 'easeOut' },
          }}
          className="relative overflow-hidden h-full flex flex-col justify-between rounded-2xl sm:rounded-3xl p-5 sm:p-6 bg-white/90 dark:bg-slate-900/90 border border-slate-200/80 dark:border-white/10 shadow-sm hover:border-cyan-400/50 dark:hover:border-cyan-400/60 hover:shadow-xl hover:shadow-cyan-500/8 backdrop-blur-md transition-colors duration-300 group"
        >
          <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-400 dark:from-cyan-400 dark:via-sky-400 dark:to-teal-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="space-y-3.5 flex-1 flex flex-col justify-between">
            {/* Header Tag */}
            <div className="flex flex-wrap items-center justify-between gap-2 min-h-[28px]">
              <span className="px-3 py-1 rounded-full bg-blue-500/10 dark:bg-cyan-500/15 border border-blue-500/20 dark:border-cyan-500/30 text-blue-600 dark:text-cyan-400 text-[11px] font-bold tracking-wide uppercase">
                {journalProject.badge}
              </span>
            </div>

            {/* Judul Karya */}
            <h3 className="text-base sm:text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors leading-snug">
              {journalProject.title}
            </h3>

            {/* Deskripsi */}
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed text-justify">
              {journalProject.description}
            </p>

            {/* Blok Sorotan Riset & HAKI */}
            {journalProject.highlights && (
              <div className="bg-slate-100/70 dark:bg-slate-800/40 p-3.5 rounded-xl border border-slate-200/60 dark:border-white/5 space-y-2.5 text-xs">
                <div className="flex items-center justify-between text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  <span>{journalProject.highlightsTitle || 'Sorotan Riset & HAKI:'}</span>
                  <span className="text-blue-600 dark:text-cyan-400 font-mono font-semibold">JIP Polinema</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-700 dark:text-slate-300 font-medium text-[11px]">
                  {journalProject.highlights.map((item) => (
                    <div key={item.label} className="flex items-center gap-2 p-1.5 rounded-lg bg-white/70 dark:bg-slate-900/60 border border-slate-200/50 dark:border-white/5">
                      <span className="text-base leading-none shrink-0">{item.icon}</span>
                      <span className="truncate">{item.label}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-2 border-t border-slate-200/60 dark:border-white/5 flex items-center justify-between text-[10px] text-slate-500 dark:text-slate-400">
                  <span>HAKI No. 001093794</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-semibold">DJKI Kemenkumham RI</span>
                </div>
              </div>
            )}

            {/* Badge Teknologi */}
            <div className="flex flex-wrap gap-2 pt-1">
              {journalProject.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold border border-slate-200 dark:border-slate-700/60"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Footer Kartu 1: Tombol Baca Jurnal & Berkas HAKI (Ujung ke Ujung / Justify-Between) */}
          <div className="pt-3.5 mt-3.5 border-t border-slate-200/80 dark:border-white/10 flex items-center justify-between gap-3">
            {/* Tombol Primary: Baca Jurnal */}
            <a
              href={journalProject.primaryAction.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl text-xs font-bold text-white dark:text-slate-950 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-cyan-400 dark:to-emerald-400 shadow-sm hover:shadow-md hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
            >
              <span>{journalProject.primaryAction.label}</span>
              <FaExternalLinkAlt className="text-[11px]" />
            </a>

            {/* Tombol Secondary: Berkas HAKI (Aksen Warna Teal/Emerald Terpisah) */}
            {journalProject.secondaryAction && (
              <a
                href={journalProject.secondaryAction.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl text-xs font-bold text-slate-800 dark:text-white bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-700 shadow-sm hover:shadow-md hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
              >
                <span>{journalProject.secondaryAction.label}</span>
                <FaExternalLinkAlt className="text-[11px] text-emerald-600 dark:text-emerald-400" />
              </a>
            )}
          </div>
        </motion.div>

        {/* KARTU 2: APLIKASI WEB RESPONSIF */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.12 }}
          whileHover={{
            y: -6,
            transition: { duration: 0.2, ease: 'easeOut' },
          }}
          className="relative overflow-hidden h-full flex flex-col justify-between rounded-2xl sm:rounded-3xl p-5 sm:p-6 bg-white/90 dark:bg-slate-900/90 border border-slate-200/80 dark:border-white/10 shadow-sm hover:border-emerald-400/50 dark:hover:border-emerald-400/60 hover:shadow-xl hover:shadow-emerald-500/8 backdrop-blur-md transition-colors duration-300 group"
        >
          <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-cyan-500 via-teal-400 to-emerald-400 dark:from-emerald-400 dark:via-teal-300 dark:to-cyan-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="space-y-3.5 flex-1 flex flex-col justify-between">
            {/* Header Tag */}
            <div className="flex flex-wrap items-center justify-between gap-2 min-h-[28px]">
              <span className="px-3 py-1 rounded-full bg-cyan-500/10 dark:bg-emerald-500/15 border border-cyan-500/20 dark:border-emerald-500/30 text-cyan-700 dark:text-emerald-400 text-[11px] font-bold tracking-wide uppercase">
                {webProject.badge}
              </span>
              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                {webProject.subtitleRight || 'Sistem Inventori'}
              </span>
            </div>

            {/* Judul Proyek */}
            <h3 className="text-base sm:text-xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-emerald-400 transition-colors leading-snug">
              {webProject.title}
            </h3>

            {/* Deskripsi */}
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed text-justify">
              {webProject.description}
            </p>

            {/* App Window Frame Preview Gambar */}
            {webProject.image && (
              <div className="rounded-xl border border-slate-200 dark:border-white/10 shadow-sm overflow-hidden my-2 relative group/img bg-slate-900">
                <div className="flex items-center px-3 py-1.5 bg-slate-800/80 border-b border-slate-700/30">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-1.5" />
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mr-1.5" />
                  <span className="w-2 h-2 bg-green-500 rounded-full" />
                </div>
                <Image
                  src={webProject.image}
                  alt={webProject.imageAlt || 'Preview Dashboard Analitik Spare Part Alat Berat'}
                  width={600}
                  height={320}
                  className="w-full h-28 sm:h-32 object-cover object-top group-hover/img:scale-105 transition-transform duration-500 ease-out"
                />
              </div>
            )}

            {/* Badge Teknologi */}
            <div className="flex flex-wrap gap-2 pt-1">
              {webProject.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold border border-slate-200 dark:border-slate-700/60"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Tombol Aksi */}
          <div className="pt-3.5 mt-3.5 border-t border-slate-200/80 dark:border-white/10 flex items-center justify-between gap-3">
            <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400 truncate max-w-[240px] sm:max-w-none">
              {webProject.footerSub || 'Tugas Akhir S1 Informatika • Universitas Siber Asia'}
            </span>
            <a
              href={webProject.primaryAction.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl text-xs font-bold text-white dark:text-slate-950 bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 dark:from-cyan-400 dark:via-emerald-400 dark:to-teal-300 shadow-sm hover:shadow-md hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer shrink-0 whitespace-nowrap"
            >
              <FaGithub className="text-sm" />
              <span>{webProject.primaryAction.label}</span>
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
