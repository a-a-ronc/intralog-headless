// app/solutions/by-industry/retail-and-ecommerce/page.tsx
import SolutionPage from "@/components/SolutionPage";
import { demoSolutionImages } from "@/lib/demo";

export const metadata = { title: "Retail & eCommerce | Intralog" };

/** Benefits aligned to retail & ecom fulfillment */
const benefits = [
  { title: "Speed with accuracy", body: "Flow control, guided picking, and pack QA to hit SLAs without chargebacks." },
  { title: "Omnichannel flexibility", body: "Ship-from-DC, ship-from-store, buy-online-pickup-in-store (BOPIS), and store replenishment from one inventory spine." },
  { title: "Labor efficiency", body: "ZPA conveyor, AMRs, and goods-to-person reduce walking and touches." },
  { title: "Peak-proof scaling", body: "Add stations, zones, or robots seasonally without replatforming your core flow." },
  { title: "Returns made profitable", body: "Fast triage, grading, and re-slot keep sellable inventory moving." },
  { title: "Clean integration", body: "Tight WMS/WES/WCS + PLC/HMI links with exception handling and audit trails." },
];

/** Typical program flow */
const steps = [
  { step: 1, title: "Profile & targets", body: "Order lines/day, cutoffs, carrier mix, SKU velocity bands, and peak factors define the strategy." },
  { step: 2, title: "Slotting & storage mix", body: "Pick modules, shelving, carton flow, VLM/G2P for slow/secure SKUs; pallet reserve to match turns." },
  { step: 3, title: "Pick & convey", body: "Batch/cluster pick, AMR assists, merges, gapping, and sort to pack or put-walls." },
  { step: 4, title: "Pack, label & verify", body: "DWS + print/apply + barcode grading; compliance for retail routing guides." },
  { step: 5, title: "Returns & reverse", body: "Triage, grade, disposition, and rapid re-slot back to pick faces or liquidation." },
];

/** Capability catalog */
const options = [
  {
    name: "Storage, Picking & Slotting",
    items: [
      { title: "Shelving & Modular Bins for smalls" },
      { title: "Carton Flow & Multi-level Pick Modules" },
      { title: "VLMs / G2P for slow or secure SKUs" },
      { title: "Selective / Pushback / Pallet Flow / Shuttle for reserve" },
      { title: "Velocity-based slotting & dynamic re-slot" },
    ],
  },
  {
    name: "Conveyance, AMR & Sortation",
    items: [
      { title: "MDR ZPA, belted & modular belt; BDLR/CDLR where needed" },
      { title: "Singulation, gapping, brake meters; 1:2/2:1/3:1 merges" },
      { title: "Sorters: sliding-shoe, cross-belt, NBS, steerable wheel" },
      { title: "AMR for tote/pod moves, put-walls, and cart assists" },
      { title: "VRCs/spirals and dock telescopics" },
    ],
  },
  {
    name: "Pack, Labeling & Compliance",
    items: [
      { title: "DWS (dimensioning/weighing/scanning) + Print & Apply" },
      { title: "Barcode grading, presence/position checks, auto-void/reprint" },
      { title: "Retail/commercial routing guide compliance (labels/docs)" },
    ],
  },
  {
    name: "Returns & Reverse Logistics",
    items: [
      { title: "Triage cells with grading & disposition rules" },
      { title: "Refurb/repair lanes, repack, relabel, liquidation" },
      { title: "Fast re-slot to pick faces with inventory sync" },
    ],
  },
  {
    name: "Store Replenishment & Omnichannel",
    items: [
      { title: "Wave/waveless release, cluster pick to store cartons/totes" },
      { title: "Put-walls, route/street sequencing, ASN/EDI integration" },
      { title: "BOPIS/ship-from-store hooks and inventory visibility" },
    ],
  },
  {
    name: "Software & Data",
    items: [
      { title: "WMS/WES/WCS + PLC/HMI integrations" },
      { title: "Dashboards & KPIs (UPH, dwell, SLA hit rate, chargebacks)" },
      { title: "Exception handling, rework flows, claims evidence (DWS)" },
    ],
  },
];

/** Gallery (swap/extend with real assets under /public) */
const gallery =
  demoSolutionImages.retailEcom ?? [
    { src: "/images/solutions/retail-ecom/pick-module.jpg", alt: "Pick module feeding pack lanes" },
    { src: "/images/solutions/retail-ecom/sorter-chutes.jpg", alt: "Sorter chutes to destinations" },
    { src: "/images/solutions/retail-ecom/put-wall.jpg", alt: "Put-wall for order consolidation" },
  ];

/** Representative use cases */
const useCases = [
  "E-com smalls: batch pick + put-wall + shoe or cross-belt sort to pack",
  "Apparel: multi-level pick module + pouch/pocket or NBS sorter",
  "Omnichannel: cluster pick for store replenishment and DTC from one line",
  "Marketplace/3PL: AMR tote moves, rapid relabel, dynamic slotting",
];

export default function Page() {
  return (
    <SolutionPage
      title="Retail & eCommerce"
      description="High-velocity, SLA-safe fulfillment—slotting, ZPA conveyance, AMR assists, sortation to pack/put-walls, and compliant labeling integrated with your WMS/WES."
      benefits={benefits}
      steps={steps}
      options={options}
      gallery={gallery}
      useCases={useCases}
      videos={[
        { url: "https://www.youtube.com/embed/4GX7exZGpmQ", title: "Sortation & Pack Overview" },
        { url: "https://www.youtube.com/embed/jf3IbA9pigs", title: "ZPA & AMR in eCommerce" },
      ]}
      brochureCta={{
        blurb: "Get the Retail & eCom Playbook—slotting templates, sorter selection, and labor planning worksheets.",
        buttonText: "Get the playbook",
        href: "/contact",
      }}
      cta={{
        title: "Plan your next-phase fulfillment line",
        body: "We’ll size storage vs. pick faces, choose the right sorter and AMR assists, and integrate labeling/QA for chargeback-safe shipping.",
        buttonText: "Talk with an engineer",
        href: "/contact",
      }}
    />
  );
}
