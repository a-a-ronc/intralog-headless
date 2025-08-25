// app/solutions/by-industry/industrial-distribution/page.tsx
import SolutionPage from "@/components/SolutionPage";
import { demoSolutionImages } from "@/lib/demo";

export const metadata = { title: "Industrial Distribution | Intralog" };

/** Benefits aligned to industrial distributors & 3PLs */
const benefits = [
  { title: "Throughput with accuracy", body: "Engineer lines for steady flow—right picks, right pack, right carrier—without starving or blocking." },
  { title: "Flexible for SKU churn", body: "Slotting + modular media (carton flow, shelving, VLM/G2P) flex with seasonal and vendor changes." },
  { title: "Labor efficiency", body: "ZPA conveyor, smart sortation, AMRs, and ergonomic pick faces cut walking and touches." },
  { title: "Profit-safe compliance", body: "Print & apply, barcode grading, and pack QA to meet customer/retailer routing guides." },
  { title: "Fast ramp & expansion", body: "Phased installs, pre-wired zones, and software toggles let you scale without replatforming." },
  { title: "Clean integration", body: "Tight WMS/WES/WCS + PLC/HMI links, with exception flows and audit trails." },
];

/** Typical program flow */
const steps = [
  { step: 1, title: "Profile & design targets", body: "Order lines/day, service levels, SKU velocity bands, and dock cadence define the strategy." },
  { step: 2, title: "Storage & slotting mix", body: "Balance selective/pushback/flow/shuttle with pick modules, shelving, and optional G2P/VLMs." },
  { step: 3, title: "Flow & sortation", body: "Convey, accumulate, gap/merge, and sort to pack or route staging; integrate AMR as needed." },
  { step: 4, title: "Label, verify, document", body: "DWS + print/apply + grading; capture weights/dims for claims and chargebacks." },
  { step: 5, title: "Commission & iterate", body: "Dashboards for UPH, dwell, and accuracy; tune slotting, waves/waveless release, and staffing." },
];

/** Capabilities offered to industrial distributors */
const options = [
  {
    name: "Storage, Picking & Slotting",
    items: [
      { title: "Selective, Double-Deep, Pushback, Pallet Flow, Shuttle" },
      { title: "Carton Flow & Multi-level Pick Modules" },
      { title: "Shelving & Modular Bins for smalls" },
      { title: "VLMs / G2P for slow/secure SKUs" },
      { title: "Velocity-based slotting & dynamic re-slot" },
    ],
  },
  {
    name: "Conveyance, AMR & Sortation",
    items: [
      { title: "MDR ZPA, BDLR/CDLR, belted & modular belt" },
      { title: "Gapping, singulation, 1:2/2:1/3:1 merges" },
      { title: "Sorters: sliding-shoe, cross-belt, NBS, steerable wheel" },
      { title: "AMR for tote/pod moves & put-walls" },
      { title: "VRCs/spirals, dock telescopics" },
    ],
  },
  {
    name: "Value-Add & Pack",
    items: [
      { title: "Kitting, relabeling, light assembly, custom packs" },
      { title: "Put-walls, batch picking, QC weigh/verify" },
      { title: "Print & Apply (ship/LPN/SSCC) with verify/void" },
    ],
  },
  {
    name: "Labeling, DWS & Compliance",
    items: [
      { title: "Dimensioning/Weighing/Scanning (audit/claims)" },
      { title: "Barcode grading & exception handling" },
      { title: "Retail/commercial routing guide compliance" },
    ],
  },
  {
    name: "Software & Data",
    items: [
      { title: "WMS/WES/WCS + PLC/HMI integrations" },
      { title: "Wave/waveless release, order clustering, batching" },
      { title: "Dashboards & KPIs (UPH, dwell, SLA hit rate, accuracy)" },
    ],
  },
  {
    name: "Safety, Facilities & Expansion",
    items: [
      { title: "Guarding, light curtains/scanners, egress" },
      { title: "Aisle planning, signage/labels, 5S visuals" },
      { title: "Phased growth plans and spare kits" },
    ],
  },
];

/** Gallery (swap or extend with real assets) */
const gallery =
  demoSolutionImages.industrialDistribution ?? [
    { src: "/images/solutions/industrial-distribution/pick-module.jpg", alt: "Pick module feeding pack lanes" },
    { src: "/images/solutions/industrial-distribution/sorter-chutes.jpg", alt: "Sortation chutes to routes" },
    { src: "/images/solutions/industrial-distribution/dws-pack.jpg", alt: "DWS + print/apply at pack" },
  ];

/** Representative use cases */
const useCases = [
  "MRO/industrial supply DC: carton flow + shoe sorter to route lanes",
  "Fasteners/electrical: smalls shelving + VLM for secure parts + put-wall",
  "3PL multi-client: flexible pick module with AMR tote moves and rapid relabel",
  "Regional hub: pallet shuttle reserve + high-rate pack with DWS + P&A",
];

export default function Page() {
  return (
    <SolutionPage
      title="Industrial Distribution"
      description="Designs for high-mix industrial distributors and 3PLs—balanced storage, ZPA conveyor and sortation, AMR assists, and compliant pack/labeling integrated with your WMS/WES."
      benefits={benefits}
      steps={steps}
      options={options}
      gallery={gallery}
      useCases={useCases}
      videos={[
        { url: "https://www.youtube.com/embed/4GX7exZGpmQ", title: "Sortation & Pack Overview" },
        { url: "https://www.youtube.com/embed/jf3IbA9pigs", title: "MDR Accumulation in Distribution" },
      ]}
      brochureCta={{
        blurb: "Get the Industrial Distribution Playbook—slotting templates, sorter selection, and labor planning worksheets.",
        buttonText: "Get the playbook",
        href: "/contact",
      }}
      cta={{
        title: "Plan your next-phase DC",
        body: "We’ll size storage vs. pick faces, choose the right sorter and AMR assists, and integrate labeling/QA for SLA-safe fulfillment.",
        buttonText: "Talk with an engineer",
        href: "/contact",
      }}
    />
  );
}
