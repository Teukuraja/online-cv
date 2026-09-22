'use client';

import React from 'react';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';

export default function Hero() {
  return (
    <section
      id="tentang"
      className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-20"
      aria-label="Hero dan Tentang Saya"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        
        {/* SISI KIRI: Teks & Tombol Aksi */}
        <div className="space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start">
          
          {/* FOTO PROFIL MOBILE: Bulat Sempurna w-28 h-28 di Tengah (Hanya Muncul di Layar HP < sm) */}
          <div className="sm:hidden flex justify-center w-full mb-1">
            <div className="relative w-28 h-28 rounded-full p-1 bg-gradient-to-tr from-blue-600 via-cyan-400 to-emerald-400 shadow-xl shadow-cyan-500/25">
              <div className="relative w-full h-full rounded-full overflow-hidden bg-slate-900 ring-2 ring-white/20 dark:ring-white/10">
                <Image
                  src="/Profil-cv-online.jpg"
                  alt="Foto Profil Resmi Teuku Raja Muda Alfarizi"
                  fill
                  priority
                  sizes="112px"
                  className="object-cover object-top"
                />
              </div>
              {/* Indikator Online Bulat */}
              <span className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-emerald-500 ring-2 ring-white dark:ring-slate-900 shadow-sm" />
            </div>
          </div>

          {/* Badge Status: 🟢 Siap Bekerja */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-400 text-xs font-semibold backdrop-blur-sm shadow-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
            <span>🟢 Siap Bekerja • Open to Relocation</span>
          </div>

          {/* Judul Nama Lengkap */}
          <div className="space-y-2">
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight text-slate-900 dark:text-white">
              Teuku Raja Muda <br />
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 dark:from-cyan-400 dark:via-emerald-400 dark:to-teal-300 bg-clip-text text-transparent">
                Alfarizi
              </span>
            </h1>
            <p className="text-xs sm:text-sm font-bold text-blue-600 dark:text-cyan-400 tracking-wider uppercase">
              Lulusan S1 Informatika | Junior Web Developer &amp; Analisis Data
            </p>
          </div>

          {/* Narasi Ringkas */}
          <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed text-center lg:text-justify max-w-xl">
            Lulusan S1 Informatika dengan pengalaman operasional di industri alat berat &amp; logistik. Terampil membangun antarmuka web (React.js), analisis data, serta pemeliharaan sistem &amp; perangkat pendukung. Adaptif, disiplin, dan siap ditempatkan di mana saja.
          </p>

          {/* Barisan Ikon Medsos Interaktif */}
          <div className="flex items-center gap-3 pt-1">
            <a
              href="https://github.com/Teukuraja"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Teuku Raja"
              className="w-10 h-10 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-cyan-400 hover:border-blue-400 dark:hover:border-cyan-400/50 shadow-xs hover:shadow-md hover:scale-110 active:scale-95 transition-all flex items-center justify-center text-lg"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/t-raja-muda-alfarizi-181aab1b7/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Teuku Raja Muda Alfarizi"
              className="w-10 h-10 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-cyan-400 hover:border-blue-400 dark:hover:border-cyan-400/50 shadow-xs hover:shadow-md hover:scale-110 active:scale-95 transition-all flex items-center justify-center text-lg"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://www.instagram.com/t_r_a_.j_a"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Teuku Raja"
              className="w-10 h-10 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:text-pink-600 dark:hover:text-pink-400 hover:border-pink-400 dark:hover:border-pink-400/50 shadow-xs hover:shadow-md hover:scale-110 active:scale-95 transition-all flex items-center justify-center text-lg"
            >
              <FaInstagram />
            </a>

            <a
              href="https://web.facebook.com/teuku.rajapartll"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook Teuku Raja"
              className="w-10 h-10 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-400 dark:hover:border-blue-400/50 shadow-xs hover:shadow-md hover:scale-110 active:scale-95 transition-all flex items-center justify-center text-lg"
            >
              <FaFacebook />
            </a>
          </div>

          {/* Tombol Aksi Utama (Lihat Proyek & Hubungi Saya) */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 w-full sm:w-auto">
            
            {/* Lihat Proyek (Isi Gradasi) */}
            <a
              href="#proyek"
              className="px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-white dark:text-slate-950 bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 dark:from-cyan-400 dark:via-emerald-400 dark:to-teal-300 shadow-md shadow-blue-500/25 dark:shadow-cyan-500/25 hover:shadow-xl hover:shadow-blue-500/40 dark:hover:shadow-cyan-400/40 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2"
            >
              <span>Lihat Proyek &amp; HAKI</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>

            {/* Hubungi Saya (Tombol Outline Gradasi Glowing) */}
            <a
              href="#kontak"
              className="px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 bg-white/80 dark:bg-slate-900/80 border-2 border-blue-500/40 dark:border-cyan-400/40 hover:border-blue-600 dark:hover:border-cyan-400 hover:text-blue-600 dark:hover:text-cyan-400 shadow-xs hover:shadow-lg hover:shadow-blue-500/15 dark:hover:shadow-cyan-500/20 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2"
            >
              <span>Hubungi Saya</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </a>

          </div>

        </div>

        {/* SISI KANAN: Foto Profil Desktop (Disembunyikan di Layar HP < sm) */}
        <div className="hidden sm:flex relative justify-center items-center">
          
          {/* Ambient Glow Lingkaran Belakang */}
          <div className="absolute inset-0 max-w-xs mx-auto bg-gradient-to-tr from-blue-500/20 via-indigo-500/20 to-cyan-500/20 dark:from-cyan-500/25 dark:via-emerald-500/20 dark:to-teal-500/20 rounded-3xl blur-2xl transform -rotate-3" aria-hidden="true" />

          {/* Kartu Bingkai Foto Profil */}
          <div className="relative w-64 h-80 sm:w-72 sm:h-96 rounded-2xl p-2 bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-white/10 shadow-xl shadow-slate-300/40 dark:shadow-cyan-500/5 backdrop-blur-md transition-all duration-500 group hover:border-blue-400 dark:hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-blue-500/20 dark:hover:shadow-cyan-500/20">
            
            <div className="relative w-full h-full rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-950 flex items-end justify-center">
              <Image
                src="/Profil-cv-online.jpg"
                alt="Foto Profil Resmi Teuku Raja Muda Alfarizi"
                fill
                priority
                sizes="(max-width: 640px) 256px, 288px"
                className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
              />
              
              {/* Soft Gradient Overlay di dasar foto */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-70" aria-hidden="true" />

              {/* Tag Nama Melayang di Bawah Foto */}
              <div className="absolute bottom-3 inset-x-3 text-center py-2 px-3 rounded-xl bg-white/90 dark:bg-slate-950/90 border border-slate-200 dark:border-slate-800 backdrop-blur-md shadow-md">
                <p className="text-xs font-bold text-slate-900 dark:text-white tracking-wide">
                  Teuku Raja Muda Alfarizi
                </p>
                <p className="text-[10px] font-semibold text-blue-600 dark:text-cyan-400 font-mono">
                  S1 Informatika • Junior Web Developer
                </p>
              </div>
            </div>

          </div>

          {/* Floating Badges Interaktif */}
          <div className="hidden sm:flex absolute -top-4 -left-6 px-3.5 py-1.5 rounded-xl bg-white/95 dark:bg-slate-900/95 border border-slate-200 dark:border-slate-800 shadow-md shadow-slate-300/50 dark:shadow-black/50 backdrop-blur-md items-center gap-2 text-xs font-bold text-slate-800 dark:text-slate-200 animate-float">
            <span className="text-blue-600 dark:text-cyan-400" aria-hidden="true">⚡</span>
            <span>React.js &amp; Node.js</span>
          </div>

          <div className="hidden sm:flex absolute -bottom-4 -right-6 px-3.5 py-1.5 rounded-xl bg-white/95 dark:bg-slate-900/95 border border-slate-200 dark:border-slate-800 shadow-md shadow-slate-300/50 dark:shadow-black/50 backdrop-blur-md items-center gap-2 text-xs font-bold text-slate-800 dark:text-slate-200 animate-float [animation-delay:2s]">
            <span className="text-emerald-600 dark:text-emerald-400" aria-hidden="true">🤖</span>
            <span>Azure AI &amp; Python</span>
          </div>

        </div>

      </div>
    </section>
  );
}
