
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Support & Maintenance | Ongoing System Care",
  description: "Comprehensive support and maintenance services for your material handling systems.",
};

export default function SupportMaintenancePage() {
  return (
    <main className="bg-[rgb(var(--bg))]">
      <div className="container mx-auto max-w-4xl px-6 py-12">
        <header className="mb-10">
          <p className="text-sm uppercase tracking-wider text-[rgb(var(--muted-fg))]">Services</p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-[rgb(var(--fg))]">Support & Maintenance</h1>
          <p className="mt-3 text-[rgb(var(--muted-fg))]">
            Ongoing support and maintenance services to keep your material handling systems running at peak performance.
          </p>
        </header>

        <div className="rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] p-8 text-center">
          <h2 className="text-xl font-semibold text-[rgb(var(--fg))]">Content Coming Soon</h2>
          <p className="mt-2 text-[rgb(var(--muted-fg))]">
            We're developing comprehensive information about our support and maintenance services.
          </p>
          <div className="mt-6">
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-3 text-white font-medium hover:bg-blue-700"
            >
              Contact us for details
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
