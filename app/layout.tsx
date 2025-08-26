// app/layout.tsx
import "./globals.css";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Semantic color tokens for light/dark */}
        <style id="theme-vars">{`
          :root{
            /* page */
            --bg: 250 250 250;          /* zinc-50 */
            --fg: 24 24 27;             /* zinc-900 */
            --muted-fg: 82 82 91;       /* zinc-600 */
            --border: 228 228 231;      /* zinc-200 */

            /* surfaces */
            --surface: 244 244 245;     /* zinc-100 */
            --card: 255 255 255;        /* white */
          }
          .dark{
            --bg: 9 9 11;               /* zinc-950 */
            --fg: 244 244 245;          /* zinc-100 */
            --muted-fg: 161 161 170;    /* zinc-400 */
            --border: 63 63 70;         /* zinc-600 */

            --surface: 17 17 19;        /* near zinc-950/surface */
            --card: 24 24 27;           /* zinc-900/800 hybrid */
          }
        `}</style>

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
