// app/solutions/by-technology/palletizing-and-de-palletizing/page.tsx
import SolutionPage from "@/components/SolutionPage";
import { demoSolutionImages } from "@/lib/demo";

export const metadata = { title: "Palletizing & Depalletizing | Intralog" };

/** Benefits */
const benefits = [
  { title: "Throughput & uptime", body: "Industrial robots and layer-formers keep steady CPM with rapid recipe changeovers." },
  { title: "Mixed-SKU ready", body: "Vision-driven patterning and smart EOAT handle SKU changes and mixed-case pallets." },
  { title: "Safer operations", body: "Remove manual lifting and de-layering; add guarding, scanners, and interlocks." },
  { title: "Perfectly square loads", body: "Centering, clamp/square EOAT, and layer compression improve cube and stability." },
  { title: "Tight integration", body: "WMS/WES/WCS + PLC/HMI for recipe control, SSCC labelers, and wrapper handoffs." },
  { title: "Space & labor savings", body: "Compact cells replace multiple manual stations with predictable staffing." },
];

/** Process overview (Palletizing + Depalletizing) */
const steps = [
  { step: 1, title: "Infeed & identify", body: "Singulate/orient; optional scan/weight/profile for quality and recipe selection." },
  { step: 2, title: "Pattern build", body: "Row/layer forming or robotic placement using recipe (ties, interlocks, caps)." },
  { step: 3, title: "Place & compress", body: "EOAT places product; optional layer compression and corner/cap sheet placement." },
  { step: 4, title: "Unitize & label", body: "Convey to wrapper/hooder; apply SSCC labels; verify and discharge to staging." },
  { step: 5, title: "Depalletize (reverse)", body: "Vision finds cases; robot de-layers or picks random/mixed to downstream flow." },
];

/** Catalog of what we offer */
const options = [
  {
    name: "Robots & Mechanisms",
    items: [
      { title: "4/5/6-Axis Industrial Robots (high-payload options)" },
      { title: "Gantry & Layer-Forming Palletizers" },
      { title: "Row-Forming / Sweep Palletizers" },
      { title: "Cobots (where rate & reach allow)" },
    ],
  },
  {
    name: "EOAT (End-of-Arm Tooling)",
    items: [
      { title: "Large-Area Vacuum (foam grid, venturi/blower)" },
      { title: "Clamp/Squaring & Hybrid Vacuum+Clamp" },
      { title: "Fork/Tine (under-hang) for trays/cartons" },
      { title: "Bag Grippers for sacks" },
      { title: "Auto Tool-Change for multi-SKU lines" },
    ],
  },
  {
    name: "Infeed, Conditioning & QC",
    items: [
      { title: "Singulators, Orienters, Metering/Brake Belts" },
      { title: "Checkweighers, Height/Profile Checks" },
      { title: "Pattern Build Tables, Row Pushers, Layer Sheets" },
    ],
  },
  {
    name: "Vision, ID & Depalletizing",
    items: [
      { title: "2D/3D Vision for SKU/pose (random/mixed depal)" },
      { title: "Barcode/RFID for recipe & traceability" },
      { title: "De-layering with Slip-Sheet Pick/Removal" },
    ],
  },
  {
    name: "Pallet Handling & Unitization",
    items: [
      { title: "Pallet Dispensers & Stackers/Destackers" },
      { title: "CDLR/Chain Conveyor, Right-Angle Transfers, Turntables" },
      { title: "Corner Boards, Top Caps, Tier/Slip Sheets" },
      { title: "Stretch Wrapper / Hooder Integration" },
      { title: "Pallet SSCC Print & Apply with Verify" },
    ],
  },
  {
    name: "Software, Safety & Integration",
    items: [
      { title: "Recipe/Pattern Management (mixed-case, tie layers)" },
      { title: "WMS/WES/WCS + PLC/HMI, Exception Handling" },
      { title: "Guarding, Light Curtains/Scanners, Risk Assessment" },
    ],
  },
];

/** Gallery (ensure images exist or extend demoSolutionImages) */
const gallery = demoSolutionImages.palletizing ?? [
  { src: "/images/solutions/palletizing/robotic-palletizer.jpg", alt: "Robotic palletizer with vacuum EOAT" },
  { src: "/images/solutions/palletizing/depalletizing-vision.jpg", alt: "Vision-guided depalletizing" },
  { src: "/images/solutions/palletizing/wrapper-handoff.jpg", alt: "Pallet wrapper handoff with SSCC label" },
];

/** Representative use cases */
const useCases = [
  "E-com/DC: mixed-case palletizing for store/D2C, sequenced to routes",
  "CPG/Food & Bev: high-rate palletizing with wrapper + SSCC",
  "Manufacturing: end-of-line palletizing and tote/case depal to kitting",
  "Cold storage: low-temp-ready palletizing/depalletizing cells",
];

export default function Page() {
  return (
    <SolutionPage
      title="Palletizing & Depalletizing"
      description="Robotic palletizing, layer-forming, and intelligent depalletizing with vision, robust EOAT, and integrated pallet handling. From recipe-driven patterns to SSCC labeling and wrapper handoffs."
      videos={[
        { url: "https://www.youtube.com/embed/1YUo0w3Gx5o", title: "Robotic Palletizer Overview" },
        { url: "https://www.youtube.com/embed/6yvfQ7fGJ3c", title: "Vision-Guided Depalletizing" },
      ]}
      benefits={benefits}
      steps={steps}
      options={options}
      gallery={gallery}
      useCases={useCases}
      brochureCta={{
        blurb: "Get the Palletizing Playbook—patterning templates, EOAT selection, and cell layouts.",
        buttonText: "Request playbook",
        href: "/contact",
      }}
      cta={{
        title: "Design your palletizing/depalletizing cell",
        body: "We’ll size EOAT and robot reach/payload, define patterns, and integrate pallet handling, wrap, and SSCC labeling.",
        buttonText: "Talk with an engineer",
        href: "/contact",
      }}
    />
  );
}
