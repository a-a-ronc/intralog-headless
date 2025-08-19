"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="border-b border-slate-100">
      <nav className="page-wrap h-16 md:h-20 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3">
          <div className="logo-box relative flex items-center">
            {/* Update src to your real logo path in /public (svg preferred) */}
            <Image
              src="/logo.svg"
              alt="Intralog"
              width={180}
              height={40}
              priority
              className="h-full w-auto"
              sizes="(max-width: 768px) 140px, 180px"
            />
          </div>
        </Link>

        {/* Right side (nav links) */}
        <div className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/solutions" className="text-slate-700 hover:text-slate-900">Solutions</Link>
          <Link href="/partners" className="text-slate-700 hover:text-slate-900">Partners</Link>
          <Link href="/case-studies" className="text-slate-700 hover:text-slate-900">Case Studies</Link>
          <Link href="/contact" className="rounded-full bg-slate-900 px-4 py-2 text-white hover:opacity-90">
            Contact
          </Link>
        </div>

        {/* Mobile menu */}
        <button
          className="md:hidden inline-flex items-center rounded-md border border-slate-200 px-3 py-2 text-slate-700"
          onClick={() => setOpen(v => !v)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          Menu
        </button>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden border-t border-slate-100">
          <div className="page-wrap py-3 flex flex-col gap-2 text-sm">
            <Link href="/solutions" onClick={() => setOpen(false)}>Solutions</Link>
            <Link href="/partners" onClick={() => setOpen(false)}>Partners</Link>
            <Link href="/case-studies" onClick={() => setOpen(false)}>Case Studies</Link>
            <Link href="/contact" onClick={() => setOpen(false)} className="rounded-lg bg-slate-900 px-4 py-2 text-white w-max">
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
