"use client";

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
          className="fixed inset-0 w-screen h-screen z-[999999] flex flex-col items-center justify-center bg-slate-50 dark:bg-[#090D16] text-slate-900 dark:text-white select-none pointer-events-auto transition-colors duration-300"
          aria-live="polite"
          aria-label="Memuat Portofolio Teuku Raja"
        >
          {/* Ambient Background Glow Effect Halus (lembut di mode terang & gelap) */}
          <div className="absolute w-72 h-72 rounded-full bg-cyan-400/10 dark:bg-cyan-500/15 blur-3xl pointer-events-none" />
          <div className="absolute w-56 h-56 rounded-full bg-blue-500/5 dark:bg-blue-600/10 blur-2xl pointer-events-none" />

          {/* Center Logo Box & Animation */}
          <div className="relative flex flex-col items-center z-10">
            {/* a. Kotak logo "TR" */}
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white font-bold text-2xl flex items-center justify-center shadow-lg mb-5">
              TR
            </div>

            {/* b. Teks judul & c. Teks sub-judul */}
            <div className="text-center">
              <h2 className="text-xl font-bold tracking-wider text-slate-900 dark:text-white">
                TEUKU RAJA
              </h2>
              <p className="text-xs font-semibold tracking-[0.2em] text-slate-500 dark:text-slate-400 mt-2 font-sans">
                SARJANA INFORMATIKA (S1) • IT &amp; OPERATIONS SPECIALIST
              </p>
            </div>

            {/* d. Sleek Minimalist Progress Bar */}
            <div className="w-40 h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden relative mt-4 border border-slate-300/40 dark:border-white/10">
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