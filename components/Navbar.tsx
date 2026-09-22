'use client';

import React from 'react';
import { useTheme } from '@/components/ThemeProvider';

const NAV_LINKS = [
  { href: '#proyek', label: 'Proyek', icon: '📂' },
  { href: '#pengalaman', label: 'Pengalaman', shortLabel: 'Karir', icon: '💼' },
  { href: '#keahlian', label: 'Keahlian', shortLabel: 'Keahlian', icon: '⚡' },
  { href: '#kontak', label: 'Kontak', shortLabel: 'Kontak', icon: '💬' },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      {/* ========================================================================= */}
      {/* 1. DESKTOP NAVBAR: Floating Dock Melayang di Atas (Hanya Layar md ke Atas) */}
      {/* ========================================================================= */}
      <header className="hidden md:flex sticky top-4 z-50 w-full max-w-4xl mx-auto px-4 py-2.5 rounded-full border border-slate-200/80 dark:border-white/10 bg-white/75 dark:bg-slate-900/75 backdrop-blur-md shadow-lg transition-all duration-300 items-center justify-between">
        {/* Kiri: Inisial Logo Profil */}
        <a
          href="#"
          className="flex items-center gap-2.5 group focus-visible:outline-2 focus-visible:outline-blue-500 dark:focus-visible:outline-cyan-400 rounded-full"
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-500 dark:from-cyan-400 dark:to-emerald-400 flex items-center justify-center text-white dark:text-slate-950 font-black text-xs shadow-md shadow-blue-500/20 dark:shadow-cyan-500/20 group-hover:scale-105 transition-transform">
            TR
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-extrabold tracking-tight bg-gradient-to-r from-slate-900 via-slate-800 to-blue-600 dark:from-white dark:via-slate-200 dark:to-cyan-400 bg-clip-text text-transparent">
              Teuku Raja
            </span>
            <span className="text-[9px] font-medium text-slate-500 dark:text-slate-400 -mt-1 tracking-wider">
              PORTFOLIO
            </span>
          </div>
        </a>

        {/* Tengah: Menu Navigasi Smooth Scroll */}
        <nav
          aria-label="Navigasi Utama Desktop"
          className="flex items-center gap-1"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-cyan-400 px-3.5 py-1.5 rounded-full hover:bg-slate-100/80 dark:hover:bg-slate-800/80 transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Kanan: Tombol Pengubah Tema + Tombol Unduh CV */}
        <div className="flex items-center gap-2">
          {/* Tombol Tema ☀️ / 🌙 */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Beralih ke mode terang' : 'Beralih ke mode gelap'}
            className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-cyan-400 flex items-center justify-center transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-xs focus-visible:outline-2 focus-visible:outline-blue-500 dark:focus-visible:outline-cyan-400 text-xs"
          >
            {theme === 'dark' ? (
              <span title="Mode Terang">☀️</span>
            ) : (
              <span title="Mode Gelap">🌙</span>
            )}
          </button>

          {/* Tombol Unduh CV */}
          <a
            href="/CV-Teuku-Raja-Muda-Alfarizi.pdf"
            download="CV-Teuku-Raja-Muda-Alfarizi.pdf"
            className="px-4 py-1.5 rounded-full text-xs font-bold text-white dark:text-slate-950 bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 dark:from-cyan-400 dark:via-emerald-400 dark:to-teal-300 shadow-sm shadow-blue-500/25 dark:shadow-cyan-500/25 hover:shadow-md hover:shadow-blue-500/35 dark:hover:shadow-cyan-400/35 hover:scale-105 active:scale-95 transition-all flex items-center gap-1.5"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            <span>Unduh CV</span>
          </a>
        </div>
      </header>

      {/* ========================================================================= */}
      {/* 2. MOBILE TOP BAR: Minimalis & Ringkas di Atas Layar HP (md:hidden)       */}
      {/* ========================================================================= */}
      <header className="md:hidden sticky top-2.5 z-40 w-[calc(100%-1.5rem)] mx-auto px-3.5 py-2 rounded-full border border-slate-200/80 dark:border-white/10 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-sm flex items-center justify-between transition-all">
        {/* Logo & Inisial */}
        <a href="#" className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-500 dark:from-cyan-400 dark:to-emerald-400 flex items-center justify-center text-white dark:text-slate-950 font-black text-[11px] shadow-sm">
            TR
          </div>
          <span className="text-xs font-bold tracking-tight bg-gradient-to-r from-slate-900 to-blue-600 dark:from-white dark:to-cyan-400 bg-clip-text text-transparent">
            Teuku Raja
          </span>
        </a>

        {/* Action Buttons: Tema & Unduh CV */}
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Beralih ke mode terang' : 'Beralih ke mode gelap'}
            className="w-7 h-7 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs flex items-center justify-center cursor-pointer transition-transform active:scale-95"
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
          <a
            href="/CV-Teuku-Raja-Muda-Alfarizi.pdf"
            download="CV-Teuku-Raja-Muda-Alfarizi.pdf"
            className="px-2.5 py-1 rounded-full text-[11px] font-bold text-white dark:text-slate-950 bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 dark:from-cyan-400 dark:via-emerald-400 dark:to-teal-300 shadow-xs flex items-center gap-1 active:scale-95 transition-transform"
          >
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            <span>CV</span>
          </a>
        </div>
      </header>

      {/* ========================================================================= */}
      {/* 3. MOBILE BOTTOM DOCK: Floating Bar Bergaya App di Bawah Layar HP         */}
      {/* ========================================================================= */}
      <nav
        aria-label="Navigasi Bawah Layar HP"
        className="md:hidden fixed bottom-4 inset-x-3 z-50 max-w-xs sm:max-w-sm mx-auto px-3 py-1.5 rounded-full border border-slate-200/90 dark:border-white/10 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl shadow-2xl shadow-slate-950/20 dark:shadow-cyan-500/10 flex items-center justify-around transition-all"
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="flex flex-col items-center gap-0.5 py-1 px-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-cyan-400 active:scale-95 transition-all text-center group"
          >
            <span className="text-base leading-none group-hover:scale-110 transition-transform">
              {link.icon}
            </span>
            <span className="text-[10px] font-semibold tracking-tight">
              {link.shortLabel || link.label}
            </span>
          </a>
        ))}
      </nav>
    </>
  );
}