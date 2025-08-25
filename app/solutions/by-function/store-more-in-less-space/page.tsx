// app/solutions/by-function/store-more-in-less-space/page.tsx
import SolutionPage from "@/components/SolutionPage";
import { demoSolutionImages } from "@/lib/demo";

export const metadata = { title: "Store More in Less Space | Intralog" };

const benefits = [
  { title: "Higher storage density", body: "Right-size mix of selective, pushback, flow, shuttle, and vertical storage." },
  { title: "Selectivity where it matters", body: "Fast movers stay accessible; slow movers compress into dense media." },
  { title: "Permit-ready & safe", body: "Seismic, flues, egress, and AHJ packages reduce project risk." },
  { title: "Future-proof layout", body: "Reserve interfaces for AS/RS, VLMs, and pallet shuttles later." },
];

const steps = [
  { step: 1, title: "Profile & slotting", body: "Analyze pallets/SKU, turns, and cube to set density targets by velocity band." },
  { step: 2, title: "Layout & code", body: "Aisles, flue space, egress, and ESFR coordination; stamped drawings and permits." },
  { step: 3, title: "Build & protect", body: "Install rack/shelving, decking, guards, signage/labels, and safety systems." },
  { step: 4, title: "Optimize & expand", body: "Tune pick faces, add flow lanes or a mezzanine, and plan automation tie-ins." },
];

const options = [
  {
    name: "Pallet Storage",
    items: [
      { title: "Selective & Double-Deep" },
      { title: "Pushback (2–6 deep, LIFO)" },
      { title: "Pallet Flow (FIFO, deep lane)" },
      { title: "Drive-In / Drive-Through" },
      { title: "Pallet Shuttle Systems (deep-lane, FIFO/LIFO)" },
      { title: "Cantilever (long loads)" },
    ],
  },
  {
    name: "Case/Tote & Small Parts",
    items: [
      { title: "Carton Flow & Pick Modules" },
      { title: "Rivet/Boltless & Steel Shelving" },
      { title: "Vertical Storage (VLMs/miniload) for secure smalls" },
      { title: "Modular bins, drawers, cabinets" },
    ],
  },
  {
    name: "Platforms & Access",
    items: [
      { title: "Mezzanines, catwalks, work platforms" },
      { title: "Stairs, handrails, lift/swing gates" },
      { title: "Decking: bar grating, perforated, solid, wire" },
    ],
  },
];

const gallery =
  demoSolutionImages.storeMore ?? [
    { src: "/images/solutions/by-function/store-more/selective.jpg", alt: "Selective pallet rack" },
    { src: "/images/solutions/by-function/store-more/carton-flow.jpg", alt: "Carton flow pick faces" },
    { src: "/images/solutions/by-function/store-more/mezzanine.jpg", alt: "Mezzanine and catwalks" },
  ];

const useCases = [
  "DC retrofit: add pallet flow + pushback for higher turns",
  "E-com: multi-level pick module over reserve selective",
  "3PL: flexible bays for client churn and SKU volatility",
];

export default function Page() {
  return (
    <SolutionPage
      title="Store More in Less Space"
      description="Engineered storage mixes—selective, pushback, pallet flow, shuttles, mezzanines, and vertical storage—to boost density without sacrificing critical access."
      benefits={benefits}
      steps={steps}
      options={options}
      gallery={gallery}
      useCases={useCases}
      brochureCta={{
        blurb: "Download the Storage Mix Guide—slotting templates, flue spacing, and rack selection charts.",
        buttonText: "Get the guide",
        href: "/contact",
      }}
      cta={{
        title: "Design your storage mix",
        body: "We’ll profile your SKUs and turns, then deliver a permit-ready layout built to expand and automate later.",
        buttonText: "Talk with an engineer",
        href: "/contact",
      }}
    />
  );
}
