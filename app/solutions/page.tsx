
"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Box, Building2, Cpu, Database, Hammer, LayoutGrid, Zap, Circuit, Cog } from "lucide-react";

const STEPS = [
  {
    id: 1,
    title: "Right-Size the Facility",
    icon: <Cpu className="h-6 w-6" aria-hidden="true" />,
    kicker: "Algorithmic Sizing",
    summary:
      "We start with an in‑house algorithm that narrows options to the right facility type and footprint, including configurable growth factors.",
    bullets: [
      "Inputs: order profiles, SKUs, service levels, growth %",
      "Outputs: facility type, target footprint, key constraints",
      "Sensitivity sliders to explore scenarios",
    ],
    image: "/images/rightsize.svg",
    color: "from-blue-500 to-cyan-400",
  },
  {
    id: 2,
    title: "Data Study & Throughput Modeling",
    icon: <Database className="h-6 w-6" aria-hidden="true" />,
    kicker: "Synthetic or Transactional Data",
    summary:
      "We run detailed studies (or generate synthetic data) to quantify storage and throughput requirements with high accuracy.",
    bullets: [
      "Peak vs. average flow, order waves, labor windows",
      "Storage profiles (pallet, case, each) & slotting",
      "Throughput envelopes to select manual/semi‑auto/auto",
    ],
    image: "/images/data-study.svg",
    color: "from-purple-500 to-pink-400",
  },
  {
    id: 3,
    title: "Concept Design & Simulation",
    icon: <LayoutGrid className="h-6 w-6" aria-hidden="true" />,
    kicker: "Proof Before You Build",
    summary:
      "Translate requirements into concepts and simulate to validate flow, accumulation, and buffers before committing.",
    bullets: [
      "Digital twins / scenario testing",
      "Bottleneck and dwell-time analysis",
      "Iterate to ROI‑optimal concept",
    ],
    image: "/images/simulation.svg",
    color: "from-emerald-500 to-teal-400",
  },
  {
    id: 4,
    title: "Floorplans & Travel Optimization",
    icon: <Building2 className="h-6 w-6" aria-hidden="true" />,
    kicker: "Layouts That Move Fast",
    summary:
      "We develop floorplans that minimize travel time and maximize throughput and real‑estate efficiency given chosen equipment.",
    bullets: [
      "Aisle strategy, dock & staging logic",
      "Pick modules, AS/RS, AMR paths, sortation",
      "Code‑compliant, expansion‑ready",
    ],
    image: "/images/floorplan.svg",
    color: "from-orange-500 to-amber-400",
  },
  {
    id: 5,
    title: "Value Engineering & Procurement",
    icon: <Box className="h-6 w-6" aria-hidden="true" />,
    kicker: "Best Value from Partners",
    summary:
      "We engage equipment partners to quote the vetted concept and align on lead time, price, and performance.",
    bullets: [
      "Competitive quotes, apples‑to‑apples",
      "Spec compliance and variant options",
      "Total cost of ownership focus",
    ],
    image: "/images/procurement.svg",
    color: "from-indigo-500 to-blue-400",
  },
  {
    id: 6,
    title: "Installation & Commissioning",
    icon: <Hammer className="h-6 w-6" aria-hidden="true" />,
    kicker: "Turnkey Delivery",
    summary:
      "We source and manage controls and mechanical install teams through go‑live, training, and handoff.",
    bullets: [
      "Controls + mechanical install",
      "FAT/SAT, ramp plans, training",
      "KPIs for post‑go‑live stabilization",
    ],
    image: "/images/installation.svg",
    color: "from-red-500 to-rose-400",
  },
];

const PARTNER_LOGOS = [
  { name: "Daifuku", src: "https://www.daifuku.com/assets/images/common/logo_main.svg" },
  { name: "Modula", src: "/images/modula.svg" },
];

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-2000"></div>
        </div>
        {/* Tech Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </div>

      <div className="relative z-10">
        {/* HERO */}
        <section className="relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
            <div className="mx-auto max-w-4xl text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="flex items-center justify-center gap-3 mb-6"
              >
                <Zap className="h-8 w-8 text-cyan-400" />
                <span className="text-cyan-400 font-semibold tracking-wide uppercase text-sm">Automation Excellence</span>
                <Circuit className="h-8 w-8 text-cyan-400" />
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-5xl lg:text-7xl font-bold tracking-tight bg-gradient-to-r from-white via-blue-100 to-cyan-300 bg-clip-text text-transparent mb-6"
              >
                Turnkey Warehouse
                <span className="block text-cyan-400">Optimization</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl lg:text-2xl text-slate-300 leading-relaxed max-w-3xl mx-auto"
              >
                From algorithmic sizing to go‑live deployment — we engineer the future of warehouse automation with precision, intelligence, and unmatched ROI.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="mt-10 flex flex-wrap gap-4 justify-center text-sm"
              >
                <div className="flex items-center gap-2 bg-slate-800/50 px-4 py-2 rounded-full border border-slate-700">
                  <Cog className="h-4 w-4 text-cyan-400" />
                  <span>AI-Powered Design</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-800/50 px-4 py-2 rounded-full border border-slate-700">
                  <Zap className="h-4 w-4 text-blue-400" />
                  <span>Real-Time Simulation</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-800/50 px-4 py-2 rounded-full border border-slate-700">
                  <Circuit className="h-4 w-4 text-purple-400" />
                  <span>Digital Twin Technology</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* PROCESS FLOW */}
        <section className="relative">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-4xl lg:text-5xl font-bold text-white mb-4"
              >
                Our Process, Engineered to Perfection
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-xl text-slate-400 max-w-2xl mx-auto"
              >
                Six precision-engineered stages delivering measurable automation excellence
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {STEPS.map((step, idx) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="group relative"
                >
                  <div className="relative bg-slate-900/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-800 hover:border-slate-600 transition-all duration-500 hover:transform hover:scale-105">
                    {/* Step Number */}
                    <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-sm font-bold text-white shadow-lg">
                      {step.id}
                    </div>

                    {/* Icon with gradient background */}
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${step.color} p-4 mb-6 group-hover:shadow-2xl transition-all duration-300`}>
                      <div className="text-white">
                        {step.icon}
                      </div>
                    </div>

                    <div className="text-xs uppercase tracking-wider text-cyan-400 font-semibold mb-2">
                      {String(step.id).padStart(2, "0")} · {step.kicker}
                    </div>

                    <h3 className="text-xl font-bold text-white mb-4 leading-tight">
                      {step.title}
                    </h3>

                    <p className="text-slate-300 mb-6 leading-relaxed">
                      {step.summary}
                    </p>

                    <ul className="space-y-2 mb-6">
                      {step.bullets.map((bullet, i) => (
                        <li key={i} className="text-sm text-slate-400 flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Image placeholder with tech styling */}
                    <div className="h-40 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-slate-700 mb-4 flex items-center justify-center">
                      <div className="text-slate-500 text-center">
                        <div className="w-12 h-12 mx-auto mb-2 opacity-50">
                          {step.icon}
                        </div>
                        <div className="text-xs">Interactive Demo Coming Soon</div>
                      </div>
                    </div>

                    <div className="flex items-center text-cyan-400 font-medium group-hover:text-cyan-300 transition-colors">
                      <span>Explore Technology</span>
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* PARTNERS */}
        <section className="relative">
          <div className="mx-auto max-w-7xl px-6 py-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Technology Partners</h2>
              <p className="text-slate-400">Industry-leading automation equipment partners</p>
            </div>
            
            <div className="flex justify-center gap-12">
              {PARTNER_LOGOS.map((logo) => (
                <motion.div
                  key={logo.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="group"
                >
                  <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 hover:border-slate-500 transition-all duration-300 hover:transform hover:scale-105">
                    <img
                      src={logo.src}
                      alt={`${logo.name} logo`}
                      className="h-12 w-auto mx-auto filter brightness-0 invert opacity-70 group-hover:opacity-100 transition-all duration-300"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-3xl p-12 text-center overflow-hidden">
              {/* Tech pattern overlay */}
              <div className="absolute inset-0 opacity-20">
                <Circuit className="absolute top-4 left-4 h-16 w-16" />
                <Cog className="absolute bottom-4 right-4 h-20 w-20 animate-spin" />
                <Zap className="absolute top-1/2 left-8 h-12 w-12" />
              </div>
              
              <div className="relative z-10">
                <h3 className="text-4xl font-bold text-white mb-4">
                  Ready to Engineer Your Future?
                </h3>
                <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                  Share your operational data and we'll generate comprehensive automation scenarios with precise ROI modeling across manual, semi-automated, and fully automated solutions.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center bg-white text-slate-900 font-bold px-8 py-4 rounded-full hover:bg-slate-100 transition-colors shadow-2xl"
                >
                  <span>Start Your Automation Study</span>
                  <ArrowRight className="ml-2 h-5 w-5" />
                </motion.button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
