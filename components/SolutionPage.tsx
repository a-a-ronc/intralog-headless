// components/SolutionPage.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

type Benefit = { title: string; body: string };
type Step = { step: number; title: string; body: string };
type GalleryImage = { title: string; src: string; alt?: string };
type OptionItem = { title: string; caption?: string; icon?: string };
type OptionsCategory = { name: string; items: OptionItem[] };

export default function SolutionPage({
  title,
  description,
  videos, // optional
  benefits,
  steps,
  gallery = [],
  useCases = [],
  options = [], // customization buckets
  brochureCta = {
    blurb:
      "Want the full Modula options guide? Drop your email and we'll send the latest brochure.",
    buttonText: "Request brochure",
    href: "/contact",
  },
  cta = {
    title: "Ready to size a system for your SKU profile?",
    body:
      "We'll help pick the right configuration (Lift or FlexiBox), trays, and accessories for your throughput and environment.",
    buttonText: "Talk with an engineer",
    href: "/contact",
  },
}: {
  title: string;
  description: string;
  videos?: { url: string; title: string }[];
  benefits: Benefit[];
  steps: Step[];
  gallery?: GalleryImage[];
  useCases?: string[];
  options?: OptionsCategory[];
  brochureCta?: { blurb: string; buttonText: string; href: string };
  cta?: { title: string; body: string; buttonText: string; href: string };
}) {
  return (
    <main>
      {/* HERO */}
      <section className="hero">
        <div className="container mx-auto text-center max-w-[880px]">
          <h1 className="font-semibold mb-3" style={{ fontSize: "clamp(2rem,4vw,3rem)" }}>
            {title}
          </h1>
          <p className="text-white/90 text-lg">{description}</p>
        </div>
      </section>

      {/* VIDEO */}
      {videos && videos.length > 0 && (
        <section className="section">
          <div className="container">
            <div className={`grid gap-6 max-w-[1200px] mx-auto ${videos.length > 1 ? "md:grid-cols-2" : ""}`}>
              {videos.map((vid) => (
                <div key={vid.url} className="relative overflow-hidden rounded-xl shadow-xl" style={{ paddingTop: "56.25%" }}>
                  <iframe
                    src={vid.url}
                    title={vid.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full border-0"
                  />
                </div>
              ))}
            </div>
            <p className="small text-slate-500 mt-3 text-center">Watch: {title} in action.</p>
          </div>
        </section>
      )}

      {/* BENEFITS */}
      <section className="section border-y border-slate-100 bg-slate-50">
        <div className="container">
          <h2 className="text-2xl font-semibold mb-4 underline underline-offset-4 decoration-2">
            Why {title}
          </h2>
          <div className="grid">
            {benefits.map((b) => (
              <div key={b.title} className="card flex flex-col gap-2">
                <h3 className="text-lg font-semibold">{b.title}</h3>
                <p className="text-slate-700">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section">
        <div className="container">
          <h2 className="text-2xl font-semibold mb-4 underline underline-offset-4 decoration-2">How it works</h2>
        {/* 4 columns on wide screens */}
          <div className="grid" style={{ gridTemplateColumns: "repeat(4, minmax(0, 1fr))" }}>
            {steps.map((s) => (
              <div key={s.step} className="card text-left">
                <div className="small text-slate-500 font-semibold">Step {s.step}</div>
                <h3 className="font-semibold">{s.title}</h3>
                <p className="text-slate-700">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OPTIONS & CUSTOMIZATION */}
      {options.length > 0 && (
        <section className="section border-t border-slate-100 bg-white">
          <div className="container">
            <h2 className="text-2xl font-semibold mb-2 underline underline-offset-4 decoration-2">
              Options & customization
            </h2>
            <p className="text-slate-600 mb-6">
              From visual picking aids and user authentication to tray accessories and robot interfaces,
              configure the system to match your workflow.
            </p>

            {/* categories as cards */}
            <div className="grid">
              {options.map((cat) => (
                <div key={cat.name} className="card">
                  <h3 className="text-lg font-semibold mb-2">{cat.name}</h3>
                  <ul className="grid gap-2 sm:grid-cols-2">
                    {cat.items.map((it) => (
                      <li key={it.title} className="flex items-start gap-3">
                        {it.icon && (
                          <Image
                            src={it.icon}
                            alt=""
                            width={28}
                            height={28}
                            className="rounded-sm"
                          />
                        )}
                        <div>
                          <div className="font-medium text-slate-800">{it.title}</div>
                          {it.caption && <div className="small text-slate-500">{it.caption}</div>}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* brochure / lead capture */}
            <div className="mt-6 rounded-2xl border border-slate-200 p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between bg-slate-50">
              <p className="text-slate-700 mb-3 sm:mb-0">{brochureCta.blurb}</p>
              <Link href={brochureCta.href} className="btn self-start sm:self-auto">
                {brochureCta.buttonText}
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* IMAGE GALLERY */}
      {gallery.length > 0 && (
        <section className="section pt-0">
          <div className="container">
            <div className="grid">
              {gallery.map((g) => (
                <div key={g.title} className="card text-center">
                  <h2 className="text-2xl font-semibold mb-4 underline underline-offset-4 decoration-2">
                    {g.title}
                  </h2>
                  <Image
                    src={g.src}
                    alt={g.alt || g.title}
                    width={1200}
                    height={800}
                    className="rounded-xl"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* USE CASES */}
      {useCases.length > 0 && (
        <section className="section border-t border-slate-100 bg-slate-50">
          <div className="container">
            <h2 className="text-2xl font-semibold mb-4 underline underline-offset-4 decoration-2">Great fit for</h2>
            <ul className="grid list-disc pl-5">
              {useCases.map((u) => (
                <li key={u} className="text-slate-700">{u}</li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="section">
        <div className="container text-center">
          <h3 className="text-2xl font-semibold mb-2">{cta.title}</h3>
          <p className="text-slate-500 mb-4">{cta.body}</p>
          <Link href={cta.href} className="btn">{cta.buttonText}</Link>
        </div>
      </section>
    </main>
  );
}