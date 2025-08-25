
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <img
                src="/images/logo.png"
                alt="Intralog"
                className="h-8 w-auto filter brightness-0 invert"
              />
            </Link>
            <p className="text-slate-300 mb-4">
              Automated Material Handling, Engineered for ROI. We design and integrate 
              the right mix of equipment for your warehouse operations.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-slate-300 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-300 hover:text-white">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-slate-300 hover:text-white">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/partners" className="text-slate-300 hover:text-white">
                  Partners
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/case-studies" className="text-slate-300 hover:text-white">
                  Project Showcase
                </Link>
              </li>
              <li>
                <Link href="/resources/blog" className="text-slate-300 hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/resources/videos" className="text-slate-300 hover:text-white">
                  Videos
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
          <p>&copy; {new Date().getFullYear()} Intralog. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
