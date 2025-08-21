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
        <Header />
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