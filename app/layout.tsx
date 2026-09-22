import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { SmoothScrollProvider } from "@/components/SmoothScroll";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Teuku Raja Muda Alfarizi | S1 Informatika & Web Developer",
  description:
    "Portofolio & Online CV Teuku Raja Muda Alfarizi — S1 Informatika Universitas Siber Asia. Terampil membangun aplikasi web (React.js, Node.js), analisis data, HAKI 2026, dan terbuka untuk penempatan kerja di mana saja.",
  keywords: [
    "Teuku Raja Muda Alfarizi",
    "S1 Informatika",
    "Web Developer",
    "React.js",
    "Node.js",
    "Analisis Data",
    "HAKI 2026",
    "Portfolio",
    "Online CV",
  ],
  authors: [{ name: "Teuku Raja Muda Alfarizi" }],
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased bg-slate-100 dark:bg-slate-950`}
    >
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'){document.documentElement.classList.add('dark');}else{document.documentElement.classList.remove('dark');}}catch(e){}})();`,
          }}
        />
      </head>
      <body className="min-h-screen bg-slate-100 dark:bg-slate-950 bg-gradient-to-br from-slate-100 via-sky-50/60 to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 text-slate-900 dark:text-slate-100 selection:bg-blue-500/20 selection:text-blue-700 dark:selection:bg-cyan-500/30 dark:selection:text-cyan-200 transition-colors duration-300">
        <ThemeProvider>
          <SmoothScrollProvider>
            {children}
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
