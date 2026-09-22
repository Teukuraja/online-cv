'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Kunci scroll pada body selama loading aktif untuk mencegah scroll bocor
    document.body.style.overflow = 'hidden';

    // Durasi preloader yang pas (~1.8 detik) agar animasi logo TR tampil utuh & mulus
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = 'unset';
    }, 1800);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          key="preloader"
          initial={false}
          exit={{ opacity: 0, scale: 0.99 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 w-screen h-screen z-[999999] flex flex-col items-center justify-center bg-slate-50 dark:bg-gradient-to-b dark:from-slate-900 dark:via-slate-950 dark:to-black text-slate-900 dark:text-white select-none pointer-events-auto transition-colors duration-300"
          aria-live="polite"
          aria-label="Memuat Portofolio Teuku Raja"
        >
          {/* Ambient Background Glow Effect */}
          <div className="absolute w-96 h-96 rounded-full bg-cyan-400/20 dark:bg-cyan-500/15 blur-3xl animate-pulse pointer-events-none" />
          <div className="absolute w-72 h-72 rounded-full bg-blue-400/20 dark:bg-blue-600/15 blur-2xl pointer-events-none" />

          {/* Center Logo Box & Animation */}
          <div className="relative flex flex-col items-center gap-6 z-10">
            {/* TR Glowing Badge Container */}
            <div className="relative">
              {/* Outer pulsing ring glow */}
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-400 opacity-60 dark:opacity-50 blur-md animate-pulse" />
              
              {/* Logo Card dengan Tema Terang / Gelap Solid */}
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl shadow-cyan-500/10 dark:shadow-cyan-500/20 flex items-center justify-center">
                <span className="text-3xl sm:text-4xl font-black tracking-tight bg-gradient-to-tr from-cyan-600 via-blue-600 to-emerald-600 dark:from-cyan-400 dark:via-blue-500 dark:to-emerald-400 bg-clip-text text-transparent">
                  TR
                </span>
              </div>
            </div>

            {/* Nama & Deskripsi Ringkas */}
            <div className="text-center space-y-1.5">
              <h2 className="text-lg sm:text-2xl font-black tracking-wide bg-gradient-to-r from-slate-900 via-slate-800 to-blue-600 dark:from-white dark:via-slate-200 dark:to-cyan-400 bg-clip-text text-transparent uppercase">
                Teuku Raja
              </h2>
              <p className="text-[11px] sm:text-xs font-bold text-blue-600 dark:text-cyan-400 tracking-widest uppercase font-mono">
                Sarjana Informatika (S1) • Software Engineer
              </p>
            </div>

            {/* Sleek Minimalist Progress Bar */}
            <div className="w-40 h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden relative mt-1 border border-slate-300/60 dark:border-white/10">
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{
                  repeat: Infinity,
                  duration: 1.2,
                  ease: 'easeInOut',
                }}
                className="w-full h-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}