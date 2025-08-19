import './globals.css'
import Link from 'next/link'
import Header from "@/components/Header";

export const metadata = {
  title: 'Intralog | Automated Material Handling',
  description: 'Headless WordPress + Next.js starter for intralog.io'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="header">
          <div className="container inner">
            <div>
              <Link href="/">
                <img 
                  src="https://intralog.io/wp-content/uploads/2023/02/logo_rbg_primary_color.png" 
                  alt="Intralog" 
                  className="h-8 w-auto"
                />
              </Link>
            </div>
            <nav className="nav">
              <Link href="/solutions">Solutions</Link>
              <Link href="/partners">Partners</Link>
              <Link href="/case-studies">Case Studies</Link>
              <Link href="/about">About</Link>
              <Link href="/contact" className="btn">Let&apos;s Talk</Link>
            </nav>
          </div>
        </header>
        {children}
        <footer className="footer">
          <div className="container">
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap: '1rem'}}>
              <div><strong>Intralog</strong><div className="small">Automated Material Handling Integrator</div></div>
              <div className="small">© {new Date().getFullYear()} Intralog. All rights reserved.</div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
