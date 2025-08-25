import './globals.css'
import Link from 'next/link'
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
        <Footer />
      </body>
    </html>
  )
}