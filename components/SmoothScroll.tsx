'use client';

import React, { createContext, useContext, useEffect, useRef, useCallback } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

interface ScrollToOptions {
  duration?: number;
  offset?: number;
  ease?: (t: number) => number;
}

interface LenisContextType {
  scrollTo: (target: string | HTMLElement | number, options?: ScrollToOptions) => void;
}

const LenisContext = createContext<LenisContextType>({
  scrollTo: () => {},
});

export const useLenis = () => useContext(LenisContext);

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Inisialisasi Lenis dengan konfigurasi inertia ultra-smooth
    const lenis = new Lenis({
      duration: 1.8,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
      infinite: false,
    });

    lenisRef.current = lenis;
    (window as unknown as { __lenisInstance?: Lenis }).__lenisInstance = lenis;

    let animationFrameId: number;

    function raf(time: number) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }

    animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
      lenisRef.current = null;
      (window as unknown as { __lenisInstance?: Lenis }).__lenisInstance = undefined;
    };
  }, []);

  const scrollTo = useCallback((
    target: string | HTMLElement | number,
    options?: ScrollToOptions
  ) => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(target, {
        duration: options?.duration ?? 1.8,
        easing: options?.ease ?? ((t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t))),
        offset: options?.offset ?? -80,
      });
    } else if (typeof window !== 'undefined') {
      const el = typeof target === 'string' ? document.querySelector(target) : target;
      if (el instanceof HTMLElement) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);


  return (
    <LenisContext.Provider value={{ scrollTo }}>
      {children}
    </LenisContext.Provider>
  );
}

