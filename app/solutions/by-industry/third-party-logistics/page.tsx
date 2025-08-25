// app/solutions/by-industry/third-party-logistics/page.tsx
import SolutionPage from "@/components/SolutionPage";
import { demoSolutionImages } from "@/lib/demo";

export const metadata = { title: "Third-Party Logistics (3PL) | Intralog" };

/** Benefits aligned to multi-client 3PL operations */
const benefits = [
  { title: "Fast client onboarding", body: "Pre-wired stations, configurable flows, and API templates bring new accounts online quickly." },
  { title: "Flex for SKU churn & seasonality", body: "Slotting rules, modular pick media, and scalable stations/AMRs adapt to demand." },
  { title: "Throughput with accuracy", body: "ZPA conveyance, right-sized sortation, and guided pick/pack to protect SLAs." },
  { title: "Chargeback-safe compliance", body: "DWS + P&A + barcode grading for routing guides and audit trails." },
  { title: "Margin visibility", body: "Task/cost capture and KPI dashboards make operations (and billing) transparent." },
  { title: "Low-risk growth path", body: "Phase installs; add zones, sort points, or robots without replatforming." },
];

/** Typical 3PL program flow */
const steps = [
  { step: 1, title: "Profile & SOW", body: "Service levels, cutoffs, SKU/line mix, peak factors, and value-add define scope & targets." },
  { step: 2, title: "Storage & slotting", body: "Balance selective/pushback/flow/shuttle; define pick media and velocity bands per client." },
  { step: 3, title: "Pick, convey & sort", body: "Batch/cluster pick; merges/gapping; sort to pack, put-walls, or route lanes." },
  { step: 4, title: "Pack, label & verify", body: "DWS + print/apply with grading/exception handling and documentation capture." },
  { step: 5, title: "Onboard & scale", body: "Templates for EDI/ASN, labels, and reports; add stations/AMRs for peak or new clients." },
];

/** Capabilities offered to 3PLs */
const options = [
  {
    name: "Storage, Picking & Slotting",
    items: [
      { title: "Selective / Double-Deep / Pushback / Pallet Flow / Shuttle" },
      { title: "Carton Flow & Multi-level Pick Modules" },
      { title: "Shelving & Modular Bins for smalls" },
      { title: "VLMs / G2P for slow/secure SKUs" },
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
    name: "Value-Add (VAS) & Pack",
    items: [
      { title: "Kitting, relabeling, light assembly, custom packs" },
      { title: "Put-walls, batch picking, QC weigh/verify, photo capture" },
      { title: "Brand-specific inserts, gift wrap, and documentation" },
    ],
  },
  {
    name: "Labeling, DWS & Compliance",
    items: [
      { title: "Dimensioning/Weighing/Scanning with evidence images" },
      { title: "Print & Apply (ship/LPN/SSCC) with verify/void" },
      { title: "Retail/commercial routing guide compliance" },
    ],
  },
  {
    name: "Onboarding, Billing & Data",
    items: [
      { title: "WMS/WES/WCS + PLC/HMI integrations; EDI/ASN templates" },
      { title: "Client portals, order/status webhooks, exception feeds" },
      { title: "Task/cost capture for billing; KPIs for SLAs & margin" },
    ],
  },
  {
    name: "Safety, Facilities & Expansion",
    items: [
      { title: "Guarding, light curtains/scanners, egress & signage" },
      { title: "Phased growth plans, pre-wired zones, spare kits" },
      { title: "Cold-ready options and hazardous handling hooks (as needed)" },
    ],
  },
];

/** Gallery (swap/extend with real assets under /public) */
const gallery =
  demoSolutionImages.threePL ?? [
    { src: "/images/solutions/3pl/pick-module.jpg", alt: "Multi-client pick module feeding pack" },
    { src: "/images/solutions/3pl/sorter-chutes.jpg", alt: "Sortation chutes to routes/clients" },
    { src: "/images/solutions/3pl/dws-pack.jpg", alt: "DWS + print/apply at pack" },
  ];

/** Representative use cases */
const useCases = [
  "Multi-client eCom: batch pick + put-walls + shoe/cross-belt sort to pack",
  "Retail replenishment: cluster pick to store cartons, compliance docs at pack",
  "3PL onboarding: new client live in weeks via label/EDI templates and modular cells",
  "Peak surge: add AMRs and stations seasonally without changing the core flow",
];

export default function Page() {
  return (
    <SolutionPage
      title="Third-Party Logistics (3PL)"
      description="Flexible, SLA-safe fulfillment and VAS for multi-client operations—balanced storage & slotting, ZPA conveyance, AMR assists, right-sized sortation, and compliant labeling integrated with your WMS/WES."
      benefits={benefits}
      steps={steps}
      options={options}
      gallery={gallery}
      useCases={useCases}
      videos={[
        { url: "https://www.youtube.com/embed/4GX7exZGpmQ", title: "Sortation & Pack Overview" },
        { url: "https://www.youtube.com/embed/jf3IbA9pigs", title: "ZPA & AMR in 3PL Fulfillment" },
      ]}
      brochureCta={{
        blurb: "Get the 3PL Playbook—onboarding templates, sorter selection, and labor planning worksheets.",
        buttonText: "Get the playbook",
        href: "/contact",
      }}
      cta={{
        title: "Plan your next-phase 3PL operation",
        body: "We’ll size storage vs. pick faces, choose the right sorter and AMR assists, and integrate labeling/QA for chargeback-safe shipping.",
        buttonText: "Talk with an engineer",
        href: "/contact",
      }}
    />
  );
}
