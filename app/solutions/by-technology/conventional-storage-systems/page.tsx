// app/solutions/by-technology/conventional-storage-systems/page.tsx
import SolutionPage from "@/components/SolutionPage";
import { demoSolutionImages } from "@/lib/demo";

export const metadata = { title: "Conventional Storage Systems | Intralog" };

/** Benefits aligned to conventional storage */
const benefits = [
  { title: "Right mix of density & selectivity", body: "Design racking and pick media that balance storage positions with fast access." },
  { title: "Code-compliant & safe", body: "Seismic calcs, flue-space, guarding, and load plaques to MH16.1/RMI and local AHJ requirements." },
  { title: "Scalable & retrofit-friendly", body: "Add bays, levels, flow lanes, or a mezzanine as volumes grow—without replatforming." },
  { title: "Pick speed & ergonomics", body: "Carton flow, pick modules, lighting, and work zones that shorten walks and reduce strain." },
  { title: "Cold/freezer ready", body: "Materials, decking, and anchors suited for low-temp, washdown, and food-grade environments." },
  { title: "Integration ready", body: "Clean interfaces to conveyors, AMRs/AGVs, VLMs, shuttles, and pallet shuttles." },
];

/** Typical delivery flow */
const steps = [
  { step: 1, title: "Profile & slot", body: "Analyze SKU cube/velocity, pallets-per-SKU, and turn to define the storage mix (ABC/slotting)." },
  { step: 2, title: "Layout & compliance", body: "Aisles, flues, egress, and sprinkler coordination; seismic design & permit package." },
  { step: 3, title: "Build & protect", body: "Install rack/shelving, decking, guards, labeling/plaques, and safety systems." },
  { step: 4, title: "Optimize & expand", body: "Tune pick faces, add flow lanes or a mezzanine, and prep interfaces for future automation." },
];

/** The complete offering, grouped for clear UI */
const options = [
  {
    name: "Pallet Racking Types",
    items: [
      { title: "Selective (single-deep)" },
      { title: "Double-Deep (reach truck)" },
      { title: "Drive-In / Drive-Through" },
      { title: "Pushback (2–6 deep, LIFO)" },
      { title: "Pallet Flow / Deep Lane FIFO" },
      { title: "Cantilever (long loads)" },
      { title: "Specialty: seismic, ESFR-friendly, food-grade, freezer" },
    ],
  },
  {
    name: "Case/Tote Picking & Modules",
    items: [
      { title: "Carton Flow (gravity/dynamic pick faces)" },
      { title: "Pick Modules (multi-level, conveyor/AMR interfaces)" },
      { title: "Rivet/Boltless & Steel Shelving (bin & smalls)" },
      { title: "Modular Bins & Cabinets, Dividers, Partitioned Shelves" },
    ],
  },
  {
    name: "Platforms & Access",
    items: [
      { title: "Mezzanines, Catwalks, Work Platforms" },
      { title: "Stairs, Handrails, Swing/Lift Gates" },
      { title: "Decking: bar grating, perforated, solid, wire" },
    ],
  },
  {
    name: "Safety, Protection & Labels",
    items: [
      { title: "End-of-Aisle & Column Guards, Rack Repair Kits" },
      { title: "Row Spacers, Backstops/Netting, Pallet Stops, Guide Rails" },
      { title: "Load Plaques, Beam/Floor Labels, Hanging Signs" },
    ],
  },
  {
    name: "Fire, Seismic & Permitting",
    items: [
      { title: "Transverse/longitudinal flues, ESFR/CMDA coordination" },
      { title: "Seismic calculations & stamped drawings (MH16.1/MH26.2)" },
      { title: "Permit submittals and inspections (AHJ coordination)" },
    ],
  },
  {
    name: "Interfaces & Expansion",
    items: [
      { title: "Conveyor & Sortation tie-ins (induction, pick & pack)" },
      { title: "AMR/AGV aisles, charging zones, pallet shuttle interfaces" },
      { title: "VLMs, mini-load, and shuttle ASRS pre-integration" },
    ],
  },
];

/** Gallery (ensure assets exist or extend demoSolutionImages) */
const gallery =
  demoSolutionImages.conventional ?? [
    { src: "/images/solutions/conventional/selective-rack.jpg", alt: "Selective pallet rack bay" },
    { src: "/images/solutions/conventional/carton-flow.jpg", alt: "Carton flow pick faces" },
    { src: "/images/solutions/conventional/pick-module.jpg", alt: "Multi-level pick module with conveyor" },
  ];

/** Representative use cases */
const useCases = [
  "DC retrofit: convert static pick to carton flow + selective reserve",
  "E-commerce: multi-level pick module feeding pack lanes",
  "Cold storage: pallet flow with proper flues and ESFR spacing",
  "Manufacturing: WIP rack + mezzanine work platforms",
  "3PL: flexible bays with pushback and selective to match SKU churn",
];

export default function Page() {
  return (
    <SolutionPage
      title="Conventional Storage Systems"
      description="Pallet racking, shelving, carton flow, and pick modules engineered for code compliance, speed, and density—with clean interfaces to downstream automation."
      benefits={benefits}
      steps={steps}
      options={options}
      gallery={gallery}
      useCases={useCases}
      videos={[
        { url: "https://www.youtube.com/embed/3qTzV5e2VbQ", title: "Carton Flow & Pick Module Overview" },
        { url: "https://www.youtube.com/embed/5l5l2Q5mS6Q", title: "Pallet Flow in Cold Storage" },
      ]}
      brochureCta={{
        blurb: "Download the Storage Mix Guide—slotting templates, flue spacing, and rack selection charts.",
        buttonText: "Get the guide",
        href: "/contact",
      }}
      cta={{
        title: "Design your storage mix",
        body: "We’ll map SKU profiles, balance density vs. selectivity, and deliver a stamped, permit-ready layout that’s built to expand.",
        buttonText: "Talk with an engineer",
        href: "/contact",
      }}
    />
  );
}
