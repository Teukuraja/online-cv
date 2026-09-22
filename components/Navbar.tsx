'use client';

import React, { useState } from 'react';
import { useTheme } from '@/components/ThemeProvider';

const NAV_LINKS = [
  { href: '#proyek', label: 'Proyek' },
  { href: '#pengalaman', label: 'Pengalaman' },
  { href: '#keahlian', label: 'Keahlian' },
  { href: '#kontak', label: 'Kontak' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] sm:w-full max-w-4xl px-4 py-2.5 rounded-full border border-slate-200/80 dark:border-white/10 bg-white/75 dark:bg-slate-900/75 backdrop-blur-md shadow-lg transition-all duration-300 flex items-center justify-between">
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
          <span className="text-[9px] font-medium text-slate-500 dark:text-slate-400 -mt-1 tracking-wider hidden sm:block">
            PORTFOLIO
          </span>
        </div>
      </a>

      {/* Tengah: Menu Navigasi Smooth Scroll (Desktop) */}
      <nav
        aria-label="Navigasi Utama"
        className="hidden md:flex items-center gap-1"
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

      {/* Kanan: Tombol Pengubah Tema + Tombol Unduh CV + Menu Mobile */}
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
          className="px-3 sm:px-4 py-1.5 rounded-full text-xs font-bold text-white dark:text-slate-950 bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 dark:from-cyan-400 dark:via-emerald-400 dark:to-teal-300 shadow-sm shadow-blue-500/25 dark:shadow-cyan-500/25 hover:shadow-md hover:shadow-blue-500/35 dark:hover:shadow-cyan-400/35 hover:scale-105 active:scale-95 transition-all flex items-center gap-1.5"
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          <span className="hidden sm:inline">Unduh CV</span>
          <span className="sm:hidden">CV</span>
        </a>

        {/* Mobile menu toggle button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-1.5 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors focus-visible:outline-2 focus-visible:outline-blue-500"
          aria-label="Buka menu navigasi"
          aria-expanded={mobileMenuOpen}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Floating Mobile Drawer Dropdown */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 p-3 bg-white/95 dark:bg-slate-900/95 border border-slate-200/80 dark:border-white/10 rounded-2xl backdrop-blur-xl shadow-xl flex flex-col gap-1 md:hidden animate-in fade-in slide-in-from-top-2 duration-200">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-cyan-400 py-2 px-3 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}