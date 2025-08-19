import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Box, Building2, Cpu, Database, Hammer, LayoutGrid } from "lucide-react";

/**
 * INTRALOG SOLUTIONS PAGE – SINGLE FILE REACT COMPONENT
 * -----------------------------------------------------
 * A modern, breathable layout to present your end‑to‑end, process‑flow solutions.
 * - Clean typography, generous white space
 * - Step-by-step flow with subtle motion
 * - Content arrays so you can swap text/images without touching layout
 * - Mobile-first, responsive grid
 *
 * How to use images:
 * 1) Place assets in /public/images (e.g., /public/images/rightsize.svg)
 * 2) Set `image` fields below to "/images/<file>". SVG/PNG/JPG all ok.
 * 3) For monochrome partner logos, consider white/black SVG variants for dark/light themes.
 */

const STEPS = [
  {
    id: 1,
    title: "Right-Size the Facility",
    icon: <Cpu className="h-5 w-5" aria-hidden="true" />,
    kicker: "Algorithmic Sizing",
    summary:
      "We start with an in‑house algorithm that narrows options to the right facility type and footprint, including configurable growth factors.",
    bullets: [
      "Inputs: order profiles, SKUs, service levels, growth %",
      "Outputs: facility type, target footprint, key constraints",
      "Sensitivity sliders to explore scenarios",
    ],
    image: "/images/rightsize.svg",
  },
  {
    id: 2,
    title: "Data Study & Throughput Modeling",
    icon: <Database className="h-5 w-5" aria-hidden="true" />,
    kicker: "Synthetic or Transactional Data",
    summary:
      "We run detailed studies (or generate synthetic data) to quantify storage and throughput requirements with high accuracy.",
    bullets: [
      "Peak vs. average flow, order waves, labor windows",
      "Storage profiles (pallet, case, each) & slotting",
      "Throughput envelopes to select manual/semi‑auto/auto",
    ],
    image: "/images/data-study.svg",
  },
  {
    id: 3,
    title: "Concept Design & Simulation",
    icon: <LayoutGrid className="h-5 w-5" aria-hidden="true" />,
    kicker: "Proof Before You Build",
    summary:
      "Translate requirements into concepts and simulate to validate flow, accumulation, and buffers before committing.",
    bullets: [
      "Digital twins / scenario testing",
      "Bottleneck and dwell-time analysis",
      "Iterate to ROI‑optimal concept",
    ],
    image: "/images/simulation.svg",
  },
  {
    id: 4,
    title: "Floorplans & Travel Optimization",
    icon: <Building2 className="h-5 w-5" aria-hidden="true" />,
    kicker: "Layouts That Move Fast",
    summary:
      "We develop floorplans that minimize travel time and maximize throughput and real‑estate efficiency given chosen equipment.",
    bullets: [
      "Aisle strategy, dock & staging logic",
      "Pick modules, AS/RS, AMR paths, sortation",
      "Code‑compliant, expansion‑ready",
    ],
    image: "/images/floorplan.svg",
  },
  {
    id: 5,
    title: "Value Engineering & Procurement",
    icon: <Box className="h-5 w-5" aria-hidden="true" />,
    kicker: "Best Value from Partners",
    summary:
      "We engage equipment partners to quote the vetted concept and align on lead time, price, and performance.",
    bullets: [
      "Competitive quotes, apples‑to‑apples",
      "Spec compliance and variant options",
      "Total cost of ownership focus",
    ],
    image: "/images/procurement.svg",
  },
  {
    id: 6,
    title: "Installation & Commissioning",
    icon: <Hammer className="h-5 w-5" aria-hidden="true" />,
    kicker: "Turnkey Delivery",
    summary:
      "We source and manage controls and mechanical install teams through go‑live, training, and handoff.",
    bullets: [
      "Controls + mechanical install",
      "FAT/SAT, ramp plans, training",
      "KPIs for post‑go‑live stabilization",
    ],
    image: "/images/installation.svg",
  },
];

const PARTNER_LOGOS = [
  { name: "Daifuku", src: "/images/daifuku.svg" },
  { name: "Modula", src: "/images/modula.svg" },
  // Add more logos as needed
];

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-semibold tracking-tight sm:text-5xl"
            >
              Turnkey Warehouse Optimization — From Sizing to Go‑Live
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.12 }}
              className="mt-5 text-lg text-slate-600"
            >
              We guide you through a clear process—right‑sizing, data studies, simulation, layout, procurement, and installation—to deliver the highest ROI for your operation.
            </motion.p>
          </div>
        </div>
      </section>

      {/* PROCESS FLOW */}
      <section className="border-t border-slate-100 bg-slate-50/60">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:py-24">
          <div className="mb-10 flex items-baseline justify-between gap-4">
            <h2 className="text-2xl font-semibold">Our Process, Step by Step</h2>
            <p className="text-sm text-slate-600">Transparent stages with measurable outputs</p>
          </div>

          <ol className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {STEPS.map((step, idx) => (
              <motion.li
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.06 }}
                className="group relative rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200 hover:shadow-md"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-white">
                    {step.icon}
                  </div>
                  <div className="text-sm uppercase tracking-wide text-slate-500">{String(step.id).padStart(2, "0")} · {step.kicker}</div>
                </div>
                <h3 className="mt-3 text-lg font-semibold leading-tight">{step.title}</h3>
                <p className="mt-2 text-slate-600">{step.summary}</p>
                <ul className="mt-3 space-y-1 text-sm text-slate-600">
                  {step.bullets.map((b, i) => (
                    <li key={i} className="leading-relaxed">• {b}</li>
                  ))}
                </ul>
                <div className="mt-4 overflow-hidden rounded-xl border border-slate-100 bg-slate-50">
                  {step.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={step.image} alt="" className="h-40 w-full object-cover object-center" />
                  ) : (
                    <div className="h-40 w-full" />
                  )}
                </div>
                <div className="mt-4 inline-flex items-center text-sm font-medium text-slate-900">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:py-16">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-xl font-semibold">Equipment Partners</h2>
            <p className="text-sm text-slate-600">Best value, best fit</p>
          </div>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {PARTNER_LOGOS.map((logo) => (
              <div key={logo.name} className="flex items-center justify-center rounded-xl border border-slate-200 bg-white p-4">
                {/* Prefer monochrome SVGs for consistency; swap to color on hover if desired */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={logo.src}
                  alt={`${logo.name} logo`}
                  className="partner-logo h-8 w-auto opacity-80 transition-all duration-300 ease-out group-hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-slate-100 bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h3 className="text-2xl font-semibold">Ready to explore scenarios for your facility?</h3>
            <p className="mt-2 text-slate-300">
              Share a few data points and we’ll run right‑sizing + throughput models to show ROI across manual, semi‑auto, and automation options.
            </p>
            <div className="mt-6 inline-flex items-center rounded-full bg-white px-5 py-3 text-slate-900 shadow-sm">
              Start a data study <ArrowRight className="ml-2 h-4 w-4" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
