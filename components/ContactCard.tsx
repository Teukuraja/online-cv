'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaWhatsapp,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaCheck,
  FaRegCopy,
} from 'react-icons/fa';
import { useLenis } from '@/components/SmoothScroll';

export default function ContactCard() {
  const [copied, setCopied] = useState(false);
  const { scrollTo } = useLenis();

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('teuku1923@gmail.com');
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <section
      id="kontak"
      className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 pt-16 sm:pt-20 pb-12 border-t border-slate-200/60 dark:border-white/10"
      aria-label="Kontak dan Footer"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 dark:bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Card Panggilan Aksi (Terpusat) */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative rounded-3xl p-8 sm:p-14 bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-white/10 shadow-xl shadow-slate-200/50 dark:shadow-cyan-500/5 backdrop-blur-md text-center space-y-6 max-w-3xl mx-auto transition-all duration-300 hover:border-blue-400 dark:hover:border-cyan-400/50"
      >
        {/* Pill Badge: Relocation */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 dark:bg-cyan-500/10 border border-blue-500/20 dark:border-cyan-500/30 text-blue-700 dark:text-cyan-400 text-xs font-bold">
          <span>✈️ Siap Ditempatkan di Mana Saja (Open to Relocation)</span>
        </div>

        {/* Judul Utama Modern (Teks Gradasi) */}
        <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-snug">
          Mari Berkolaborasi &amp; <br />
          <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 dark:from-cyan-400 dark:via-emerald-400 dark:to-teal-300 bg-clip-text text-transparent">
            Membangun Proyek Bersama
          </span>
        </h2>

        {/* Sub-judul */}
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-xl mx-auto leading-relaxed">
          Siap untuk belajar hal baru, berkembang, dan berkontribusi di posisi Junior Web Developer, Data Analyst, atau peran IT lainnya. Berdedikasi tinggi untuk memberikan yang terbaik di setiap proyek.
        </p>

        {/* 2 Tombol Aksi Utama Berdampingan Simetris */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          {/* Tombol WhatsApp */}
          <a
            href="https://wa.me/6282350191117"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-white dark:text-slate-950 bg-emerald-600 hover:bg-emerald-500 dark:bg-emerald-400 dark:hover:bg-emerald-300 shadow-lg shadow-emerald-600/25 dark:shadow-emerald-400/25 hover:shadow-xl hover:shadow-emerald-600/40 dark:hover:shadow-emerald-400/40 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer"
          >
            <FaWhatsapp className="text-base" />
            <span>Kirim Pesan via WhatsApp</span>
          </a>

          {/* Tombol Email Direct */}
          <a
            href="mailto:teuku1923@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-white dark:text-slate-950 bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 dark:from-cyan-400 dark:via-emerald-400 dark:to-teal-300 shadow-lg shadow-blue-500/25 dark:shadow-cyan-500/25 hover:shadow-xl hover:shadow-blue-500/40 dark:hover:shadow-cyan-400/40 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer"
          >
            <FaEnvelope className="text-sm" />
            <span>Kirim Email Direct</span>
          </a>
        </div>

        {/* Email Copy-to-Clipboard Interactive Button with Toast Feedback */}
        <div className="flex flex-col items-center justify-center gap-2 pt-1">
          <button
            type="button"
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-slate-100/90 dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80 hover:border-blue-400 dark:hover:border-cyan-400 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-cyan-400 text-xs font-mono font-medium transition-all duration-200 group cursor-pointer shadow-xs hover:shadow-md hover:scale-[1.02] active:scale-95"
            title="Klik untuk menyalin alamat email"
          >
            <span>teuku1923@gmail.com</span>
            {copied ? (
              <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-bold font-sans text-[11px] bg-emerald-500/15 border border-emerald-500/30 px-2 py-0.5 rounded-md transition-all">
                <FaCheck className="text-[10px]" />
                <span>Tersalin!</span>
              </span>
            ) : (
              <span className="flex items-center gap-1 text-slate-400 group-hover:text-blue-500 dark:group-hover:text-cyan-400 font-sans text-[11px] transition-colors">
                <FaRegCopy className="text-[11px]" />
                <span>Salin</span>
              </span>
            )}
          </button>

          {/* Interactive Floating Toast */}
          <AnimatePresence>
            {copied && (
              <motion.div
                initial={{ opacity: 0, y: -6, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -6, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-600 text-white text-[11px] font-semibold shadow-md shadow-emerald-600/30"
              >
                <FaCheck className="text-[10px]" />
                <span>Email berhasil disalin ke clipboard!</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Barisan Ikon Medsos Interaktif */}
        <div className="flex items-center justify-center gap-3 pt-4 border-t border-slate-100 dark:border-white/5">
          <a
            href="https://github.com/Teukuraja"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Teuku Raja"
            className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-cyan-400 hover:bg-white dark:hover:bg-slate-700 shadow-xs hover:scale-110 active:scale-95 transition-all flex items-center justify-center text-lg"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/t-raja-muda-alfarizi-181aab1b7/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Teuku Raja Muda Alfarizi"
            className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-cyan-400 hover:bg-white dark:hover:bg-slate-700 shadow-xs hover:scale-110 active:scale-95 transition-all flex items-center justify-center text-lg"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://www.instagram.com/t_r_a_.j_a"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram Teuku Raja"
            className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-pink-600 dark:hover:text-pink-400 hover:bg-white dark:hover:bg-slate-700 shadow-xs hover:scale-110 active:scale-95 transition-all flex items-center justify-center text-lg"
          >
            <FaInstagram />
          </a>

          <a
            href="https://web.facebook.com/teuku.rajapartll"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook Teuku Raja"
            className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-white dark:hover:bg-slate-700 shadow-xs hover:scale-110 active:scale-95 transition-all flex items-center justify-center text-lg"
          >
            <FaFacebook />
          </a>
        </div>
      </motion.div>

      {/* Footer Paling Bawah: Garis pembatas tipis dengan teks hak cipta */}
      <footer className="mt-16 pt-8 border-t border-slate-200/80 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
        <div>
          &copy; 2026 Teuku Raja Muda Alfarizi. Seluruh hak cipta dilindungi.
        </div>
        <div className="flex items-center gap-4">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              scrollTo(0, { duration: 1.8 });
            }}
            className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors font-medium cursor-pointer"
          >
            Kembali ke Atas &uarr;
          </a>
        </div>
      </footer>
    </section>
  );
}
