// app/solutions/by-industry/manufacturing/page.tsx
import SolutionPage from "@/components/SolutionPage";
import { demoSolutionImages } from "@/lib/demo";

export const metadata = { title: "Manufacturing | Intralog" };

/** Benefits aligned to discrete/process manufacturing */
const benefits = [
  { title: "Line uptime & takt protection", body: "Right-time delivery of parts and empties to keep stations fed and protect takt." },
  { title: "Material availability & visibility", body: "Supermarkets, e-kanban, and WIP tracking reduce shortages and firefighting." },
  { title: "Quality & traceability", body: "Scan points, weigh/verify, and serial/lot capture enable root cause & auditability." },
  { title: "Flexible changeovers", body: "Modular flow racks, quick-swap fixtures, and recipe-driven workstations speed model changes." },
  { title: "Ergonomics & safety", body: "ESD benches, assist lifts, guarding/light curtains, and traffic zoning reduce risk." },
  { title: "Space efficiency", body: "Dense supermarkets, vertical storage, and compact cells free up line-side floor." },
];

/** Typical engagement flow */
const steps = [
  { step: 1, title: "Profile takt & BOM flows", body: "Model lines, pitch, container strategy, and routes for full-kit, JIT/JIS, or point-of-use supply." },
  { step: 2, title: "Design supermarkets & line-side", body: "Slotting, flow rack angles, container sizes, and presentation ergonomics per station." },
  { step: 3, title: "Plan conveyance & mobility", body: "Tow trains/AGVs/AMRs, MDR/CDLR, VRCs/spirals, and return loops for empties." },
  { step: 4, title: "Kitting, sequencing & QA", body: "Put-to-light, kit carts, weigh/verify, photo/vision; staging/sequencing to takt." },
  { step: 5, title: "Integrate systems", body: "WMS/WES/MES + PLC/HMI, e-kanban triggers, labeling, and traceability." },
  { step: 6, title: "Commission & improve", body: "Runbooks, training, OEE/KPI dashboards; iterate slotting and routings." },
];

/** Capability catalog */
const options = [
  {
    name: "Materials Delivery & Mobility",
    items: [
      { title: "Supermarkets & point-of-use storage (POUS)" },
      { title: "Tow trains & tuggers; AGV/AMR routes and handoffs" },
      { title: "Return loops for empties & dunnage" },
      { title: "e-Kanban signals (scan/button/weight) and rules" },
    ],
  },
  {
    name: "Storage, WIP & Presentation",
    items: [
      { title: "Flow racks (carton, pipe-&-joint), adjustable angles" },
      { title: "Selective/double-deep/pushback/pallet flow for raw & FG" },
      { title: "Cantilever for long stock; carts & kit frames" },
      { title: "Vertical storage: VLMs/miniload for secure smalls" },
    ],
  },
  {
    name: "Conveyance & Elevation",
    items: [
      { title: "MDR ZPA, BDLR/CDLR, belted & modular belt" },
      { title: "Right-angle transfers, turntables, lifts/indexers" },
      { title: "VRCs & spirals; towline/inverted monorail; power-&-free (where applicable)" },
    ],
  },
  {
    name: "Kitting, Sequencing & Stations",
    items: [
      { title: "Put-/Pick-to-Light, HMIs, vision prompts" },
      { title: "Kit carts, JIT/JIS sequencing, lineside buffers" },
      { title: "Error-proofing (poka-yoke), weigh/verify, photo capture" },
      { title: "Torque/asset tracking, tool interlocks" },
    ],
  },
  {
    name: "Palletizing, Unitization & Outbound",
    items: [
      { title: "Robotic palletizing/depalletizing, layer formers" },
      { title: "Stretch wrappers/hooders, corner/top caps" },
      { title: "SSCC print-and-apply with verify/void" },
    ],
  },
  {
    name: "Software, Data & Safety",
    items: [
      { title: "WMS/WES/MES + PLC/HMI integration" },
      { title: "Serial/lot capture, genealogy, traceability reports" },
      { title: "Andon/OEE dashboards, exception & rework flows" },
      { title: "Guarding, light curtains/scanners, traffic zoning" },
    ],
  },
];

/** Gallery (swap/extend with real assets) */
const gallery =
  demoSolutionImages.manufacturing ?? [
    { src: "/images/solutions/manufacturing/lineside-supermarket.jpg", alt: "Lineside supermarket & flow racks" },
    { src: "/images/solutions/manufacturing/amr-material-move.jpg", alt: "AMR moving totes to assembly" },
    { src: "/images/solutions/manufacturing/kitting-station.jpg", alt: "Kitting/put-to-light with verify" },
  ];

/** Representative use cases */
const useCases = [
  "Final assembly: JIT/JIS kitting with tow train/AMR delivery to takt",
  "Sub-assembly: parts supermarkets with e-kanban and POUS presentation",
  "Electronics/medical: ESD benches, traceability, vision prompts",
  "Fabrication/machine: long-load cantilever + WIP racks and VRCs",
];

export default function Page() {
  return (
    <SolutionPage
      title="Manufacturing"
      description="Line-side supply, kitting/sequencing, and traceable material flow for discrete and process manufacturers—supermarkets, AMR/AGV, conveyors, VRCs, and integrated WMS/WES/MES."
      benefits={benefits}
      steps={steps}
      options={options}
      gallery={gallery}
      useCases={useCases}
      videos={[
        { url: "https://www.youtube.com/embed/jf3IbA9pigs", title: "MDR Accumulation for Line Feed" },
        { url: "https://www.youtube.com/embed/vcI5c8AIPqA", title: "Vertical Storage & Kitting" },
      ]}
      brochureCta={{
        blurb: "Get the Manufacturing Playbook—supermarket sizing, e-kanban triggers, and line-feed patterns.",
        buttonText: "Get the playbook",
        href: "/contact",
      }}
      cta={{
        title: "Design your line-side supply & kitting",
        body: "We’ll size supermarkets, choose mobility (tow/AGV/AMR), design presentation racks, and integrate WMS/WES/MES with error-proofing.",
        buttonText: "Talk with an engineer",
        href: "/contact",
      }}
    />
  );
}
