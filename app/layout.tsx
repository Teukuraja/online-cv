import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
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
    shortcut: ["/favicon.svg"],
    apple: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
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
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-gradient-to-br from-slate-100 via-sky-50/60 to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 text-slate-900 dark:text-slate-100 selection:bg-blue-500/20 selection:text-blue-700 dark:selection:bg-cyan-500/30 dark:selection:text-cyan-200 transition-colors duration-300">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
