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
      className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-20 border-t border-slate-200/60 dark:border-white/10"
      aria-label="Publikasi Jurnal, HAKI dan Proyek Unggulan"
    >
      <div id="publikasi" className="-mt-16 pt-16" />

      {/* Header Bagian */}
      <div className="space-y-3 mb-10 text-center sm:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 dark:bg-cyan-500/10 border border-blue-500/20 dark:border-cyan-500/25 text-blue-600 dark:text-cyan-400 font-bold text-xs uppercase tracking-wider">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-cyan-400" />
          <span>Hasil Karya &amp; Riset Terapan</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Publikasi, HAKI &amp; Proyek
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm max-w-2xl">
          Dokumentasi karya ilmiah yang telah terbit di jurnal bereputasi, sertifikat Hak Cipta resmi dari Kemenkumham RI, dan aplikasi web responsif.
        </p>
      </div>

      {/* Grid 2 Kolom Presisi, Simetris dengan Animasi Anti-Gravity */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        
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
          className="h-full flex flex-col justify-between rounded-2xl p-6 sm:p-7 bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-white/10 shadow-sm hover:border-cyan-500/40 dark:hover:border-cyan-400/60 hover:shadow-lg backdrop-blur-md transition-colors duration-300 group"
        >
          <div className="space-y-5">
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
              <div className="bg-slate-100/70 dark:bg-slate-800/40 p-4 rounded-xl border border-slate-200/60 dark:border-white/5 space-y-2.5 text-xs">
                <div className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  {journalProject.highlightsTitle || 'Sorotan Riset & HAKI:'}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-700 dark:text-slate-300 font-medium text-[11px]">
                  {journalProject.highlights.map((item) => (
                    <span key={item.label} className="flex items-center gap-2">
                      <span className="text-base leading-none">{item.icon}</span>
                      <span>{item.label}</span>
                    </span>
                  ))}
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
          <div className="pt-6 mt-6 border-t border-slate-200/80 dark:border-white/10 flex items-center justify-between gap-3">
            {/* Tombol Primary: Baca Jurnal */}
            <a
              href={journalProject.primaryAction.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl text-xs font-bold text-white dark:text-slate-950 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-cyan-400 dark:to-emerald-400 shadow-sm hover:shadow-md hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
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
                className="px-4 py-2.5 rounded-xl text-xs font-bold text-slate-800 dark:text-white bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-700 shadow-sm hover:shadow-md hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
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
          className="h-full flex flex-col justify-between rounded-2xl p-6 sm:p-7 bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-white/10 shadow-sm hover:border-cyan-500/40 dark:hover:border-cyan-400/60 hover:shadow-lg backdrop-blur-md transition-colors duration-300 group"
        >
          <div className="space-y-5">
            {/* Header Tag */}
            <div className="flex flex-wrap items-center justify-between gap-2 min-h-[28px]">
              <span className="px-3 py-1 rounded-full bg-cyan-500/10 dark:bg-emerald-500/15 border border-cyan-500/20 dark:border-emerald-500/30 text-cyan-700 dark:text-emerald-400 text-[11px] font-bold tracking-wide uppercase">
                {webProject.badge}
              </span>
              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                {webProject.subtitleRight || 'Web Architecture'}
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
              <div className="rounded-xl border border-slate-200 dark:border-white/10 shadow-sm overflow-hidden my-3 relative group/img bg-slate-900">
                <div className="flex items-center px-3 py-1.5 bg-slate-800/80 border-b border-slate-700/30">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-1.5" />
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mr-1.5" />
                  <span className="w-2 h-2 bg-green-500 rounded-full" />
                </div>
                <Image
                  src={webProject.image}
                  alt={webProject.imageAlt || 'Preview Aplikasi Web Responsif'}
                  width={600}
                  height={320}
                  className="w-full h-44 object-cover object-top group-hover/img:scale-105 transition-transform duration-500 ease-out"
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
          <div className="pt-6 mt-6 border-t border-slate-200/80 dark:border-white/10 flex items-center justify-between gap-3">
            <span className="text-xs font-medium text-slate-500 dark:text-slate-400 truncate">
              {webProject.footerSub || 'Frontend & Backend Integration'}
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
