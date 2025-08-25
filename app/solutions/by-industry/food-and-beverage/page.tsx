// app/solutions/by-industry/food-and-beverage/page.tsx
import SolutionPage from "@/components/SolutionPage";
import { demoSolutionImages } from "@/lib/demo";

export const metadata = { title: "Food & Beverage | Intralog" };

/** Benefits aligned to F&B operations */
const benefits = [
  { title: "Hygienic, code-compliant design", body: "Sanitary frames, washdown-rated components, FSMA/HACCP-aware layouts, and cleanability by design." },
  { title: "Cold-ready performance", body: "Freezer/chill-rated conveyors, vestibules, and deep-lane storage that keep throughput up in low temps." },
  { title: "Traceability & recalls", body: "Lot/expiry capture, SSCC labeling, and scan checkpoints enable rapid track-and-trace." },
  { title: "Labor & ergonomics", body: "Goods-to-person, palletizing, and engineered pick faces reduce walking and lifts." },
  { title: "Flexible throughput", body: "Lines scale with seasonal volume—add zones, stations, or robots without replatforming." },
  { title: "Uptime & maintainability", body: "Stainless/IP65/IP69K selections, accessible guarding, and spare kits for fast service." },
];

/** Typical project flow */
const steps = [
  { step: 1, title: "Profile products & zones", body: "Ambient/chilled/freezer areas, allergens, packaging types, and target throughputs." },
  { step: 2, title: "Engineer storage & flow", body: "Select rack mixes (selective, pushback, flow, shuttle) and hygienic conveyors with right pitches." },
  { step: 3, title: "Integrate labeling & QA", body: "DWS + Print & Apply, inline barcode grading, vision/weight checks, and reject logic." },
  { step: 4, title: "Automate handling", body: "Robotic palletizing/depalletizing, VRCs/spirals, AMR/AGV interfaces, dock solutions." },
  { step: 5, title: "Commission, validate, train", body: "Sanitation SOPs, changeover procedures, and KPIs for OEE, dwell, and accuracy." },
];

/** Capability catalog */
const options = [
  {
    name: "Storage & Picking",
    items: [
      { title: "Selective, Double-Deep, Pushback, Drive-In/Through" },
      { title: "Pallet Flow (FIFO) & Deep-Lane Pallet Shuttle" },
      { title: "Carton Flow & Pick Modules (ambient/chilled)" },
      { title: "Secure/segregated bays for allergens & QA holds" },
    ],
  },
  {
    name: "Conveyance & Handling (Hygienic/Low-Temp)",
    items: [
      { title: "Stainless/IP65–IP69K belted & modular belt conveyors" },
      { title: "MDR ZPA with low-temp grease & heated sensors" },
      { title: "CDLR / 2- & 3-strand chain, right-angle transfers, turntables" },
      { title: "VRCs, spirals (washdown options), and dock telescopics" },
    ],
  },
  {
    name: "Palletizing, Depalletizing & Unitization",
    items: [
      { title: "Robotic case/bag palletizing (vacuum, clamp, bag EOAT)" },
      { title: "Vision-guided depal for random/mixed pallets" },
      { title: "Dispensers, stackers, corner/top caps, stretch wrappers/hooders" },
      { title: "Inline SSCC print & apply with verify/void" },
    ],
  },
  {
    name: "Labeling, QA & Compliance",
    items: [
      { title: "DWS (dimensioning/weighing/scanning) + P&A cells" },
      { title: "Barcode grading, presence/position checks, vision OCV/OCR" },
      { title: "Lot/expiry capture, allergen segregation, hold/release" },
    ],
  },
  {
    name: "Software & Integration",
    items: [
      { title: "WMS/WES/ERP integration (APIs/PLC), batch/lot rules" },
      { title: "KPI dashboards: OEE, UPH, dwell time, shrink, accuracy" },
      { title: "Exception handling, rework flows, recall drill support" },
    ],
  },
  {
    name: "Environment, Safety & Sanitation",
    items: [
      { title: "Vestibules, insulated doors, underfloor heat, drainage" },
      { title: "Sanitary design details: open profiles, no harbor points" },
      { title: "Guarding, light curtains/scanners, egress & signage" },
    ],
  },
];

/** Gallery (swap/extend with real assets under /public) */
const gallery =
  demoSolutionImages.foodBev ?? [
    { src: "/images/solutions/food-bev/washdown-conveyor.jpg", alt: "Washdown-rated belt conveyor" },
    { src: "/images/solutions/food-bev/pallet-shuttle.jpg", alt: "Deep-lane shuttle for freezer" },
    { src: "/images/solutions/food-bev/robotic-palletizer.jpg", alt: "Robotic palletizer with bag EOAT" },
  ];

/** Representative use cases */
const useCases = [
  "Frozen foods DC: pallet shuttle + freezer-rated pallet handling with SSCC at wrapper",
  "Beverage: high-rate case palletizing with stretch wrap & label verify",
  "Bakery/snacks: carton flow pick modules feeding pack and ship",
  "Protein/seafood: chilled pick, stainless conveyors, QA holds with lot control",
];

export default function Page() {
  return (
    <SolutionPage
      title="Food & Beverage"
      description="Hygienic, code-compliant intralogistics for ambient, chilled, and freezer operations—storage, conveyors, palletizing, and labeling integrated with your WMS/WES for end-to-end traceability."
      benefits={benefits}
      steps={steps}
      options={options}
      gallery={gallery}
      useCases={useCases}
      videos={[
        { url: "https://www.youtube.com/embed/1YUo0w3Gx5o", title: "Freezer-Rated Pallet Handling" },
        { url: "https://www.youtube.com/embed/3qTzV5e2VbQ", title: "Pick Modules & Carton Flow" },
      ]}
      brochureCta={{
        blurb: "Get the F&B Logistics Guide—sanitary design checklist, rack selection, and cold-ready equipment specs.",
        buttonText: "Request guide",
        href: "/contact",
      }}
      cta={{
        title: "Design your F&B flow",
        body: "We’ll balance density and selectivity, choose hygienic conveyance, and automate palletizing/labeling with full lot/expiry traceability.",
        buttonText: "Talk with an engineer",
        href: "/contact",
      }}
    />
  );
}
