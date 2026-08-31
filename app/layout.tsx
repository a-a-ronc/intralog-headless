// app/layout.tsx
import './globals.css'
import type { Metadata } from 'next'
import Script from 'next/script'

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION, localBusinessJsonLd } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Warehouse Automation & Material Handling Integration`,
    // Pages set complete titles (they already include "| Intralog")
    template: "%s",
  },
  description: SITE_DESCRIPTION,
  alternates: {
    // Relative canonical resolves against each route's own path
    canonical: "./",
  },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    url: "./",
    locale: "en_US",
    images: [{ url: "/images/logo.png", alt: SITE_NAME }],
  },
  twitter: {
    card: "summary",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* No-flash theme init */}
        <Script id="theme-init" strategy="beforeInteractive">{`
          try {
            const key = 'theme';
            const stored = localStorage.getItem(key);
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            const theme = stored || (prefersDark ? 'dark' : 'light');
            document.documentElement.classList.toggle('dark', theme === 'dark');
          } catch {}
        `}</Script>
      </head>
      <body
        className="
          min-h-screen antialiased transition-colors
          bg-[rgb(var(--bg))] text-[rgb(var(--fg))]
          [color-scheme:light] dark:[color-scheme:dark]
          selection:bg-zinc-200 selection:text-zinc-900
          dark:selection:bg-zinc-700 dark:selection:text-zinc-50
        "
      >
        <JsonLd data={localBusinessJsonLd} />
        <Header />
        {children}
        <Footer />

        {/* Floating theme toggle */}
        <button
          id="theme-toggle"
          type="button"
          aria-label="Toggle dark mode"
          aria-pressed="false"
          className="
            fixed bottom-6 right-6 z-50
            inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm
            shadow-sm backdrop-blur
            bg-[rgb(var(--card))] border-[rgb(var(--border))] hover:opacity-90
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-400
            dark:focus:ring-zinc-600
          "
        >
          <span id="theme-icon" aria-hidden="true">🌙</span>
          <span id="theme-label" className="hidden sm:inline">Dark</span>
        </button>

        <Script id="theme-toggle-handler" strategy="afterInteractive">{`
          (function () {
            const key = 'theme';
            const btn = document.getElementById('theme-toggle');
            const icon = document.getElementById('theme-icon');
            const label = document.getElementById('theme-label');
            const isDark = () => document.documentElement.classList.contains('dark');
            const apply = (d) => {
              document.documentElement.classList.toggle('dark', d);
              try { localStorage.setItem(key, d ? 'dark' : 'light'); } catch {}
              btn?.setAttribute('aria-pressed', d ? 'true' : 'false');
              if (icon) icon.textContent = d ? '☀️' : '🌙';
              if (label) label.textContent = d ? 'Light' : 'Dark';
            };
            apply(isDark());
            btn?.addEventListener('click', () => apply(!isDark()));
            try {
              const media = window.matchMedia('(prefers-color-scheme: dark)');
              media.addEventListener?.('change', (e) => {
                const stored = localStorage.getItem(key);
                if (!stored) apply(e.matches);
              });
            } catch {}
          })();
        `}</Script>
      </body>
    </html>
  );
}
