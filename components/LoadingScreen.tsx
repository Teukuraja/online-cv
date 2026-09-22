'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Durasi loading screen dibuat ~2.5 detik (2500ms) agar animasi TR terlihat lebih jelas
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-slate-50 text-slate-900 select-none pointer-events-auto transition-colors duration-300"
          aria-live="polite"
          aria-label="Memuat Portofolio Teuku Raja"
        >
          {/* Ambient Background Glow Effect (Versi Terang & Soft) */}
          <div className="absolute w-96 h-96 rounded-full bg-cyan-300/40 blur-3xl animate-pulse pointer-events-none" />
          <div className="absolute w-72 h-72 rounded-full bg-blue-300/30 blur-2xl pointer-events-none" />

          {/* Center Logo Box & Animation */}
          <div className="relative flex flex-col items-center gap-6 z-10">
            {/* TR Glowing Badge Container */}
            <div className="relative">
              {/* Outer pulsing ring glow */}
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 opacity-60 blur-md animate-pulse" />
              
              {/* Logo Card (Tema Terang dengan Glassmorphism) */}
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-white/90 border border-slate-200/80 shadow-xl shadow-cyan-500/10 flex items-center justify-center backdrop-blur-md">
                <span className="text-3xl sm:text-4xl font-black tracking-tight bg-gradient-to-tr from-cyan-600 via-blue-600 to-emerald-600 bg-clip-text text-transparent">
                  TR
                </span>
              </div>
            </div>

            {/* Nama & Deskripsi Ringkas */}
            <div className="text-center space-y-1">
              <h2 className="text-base sm:text-lg font-extrabold tracking-wider bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 bg-clip-text text-transparent uppercase">
                Teuku Raja Muda Alfarizi
              </h2>
              <p className="text-[11px] sm:text-[12px] font-bold text-cyan-700 tracking-widest uppercase font-mono">
                S1 Informatika • Portfolio
              </p>
            </div>

            {/* Sleek Minimalist Progress Bar */}
            <div className="w-40 h-1.5 bg-slate-200/80 rounded-full overflow-hidden relative mt-1 border border-slate-300/50">
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