
// app/solutions/conveyor-sortation/page.tsx
import SolutionPage from "@/components/SolutionPage";
import { demoSolutionImages } from "@/lib/demo";

export const metadata = { title: "Conveyor & Sortation Systems | Intralog" };

const benefits = [
  { title: "High‑throughput movement", body: "Automate transport and sortation to process thousands of items per hour from induction to shipping." },
  { title: "Flexible routing & diverting", body: "Merge, divert, and buffer with pop‑up transfers, right‑angle transfers, steerable wheels, and controlled merges." },
  { title: "Labor & travel reduction", body: "Cut walk time and manual cart moves by connecting work areas with automated flow." },
  { title: "Scalable & modular", body: "Add zones, tiers, and sort points as volumes grow without re‑architecting the whole line." },
  { title: "Integration‑ready controls", body: "Tie into WMS/WCS, scanners, dimensioning, scales, and print/apply for real‑time tracking and decisions." },
  { title: "Gentle, consistent handling", body: "Controlled acceleration, accumulation, and zero‑pressure logic help minimize damage and errors." },
  { title: "Energy‑aware operation", body: "Zone‑driven conveyors (e.g., MDR) run only where product is present, reducing power draw." },
  { title: "Pallet handling compatibility", body: "Pallet conveyor interfaces cleanly with pallet shuttles / LoadMatic for automated infeed, outfeed, and staging." },
];

const steps = [
  { step: 1, title: "Induct & identify", body: "Items or pallets enter the line and are identified via barcode/RFID, dimensioning, or lookups from WMS/WCS." },
  { step: 2, title: "Convey & accumulate", body: "Zero‑pressure accumulation and speed‑matched transfers move flow between work zones." },
  { step: 3, title: "Decision & divert", body: "Controls execute routing to doors, lanes, buffers, or value‑add stations via the chosen sortation method." },
  { step: 4, title: "Destination hand‑off", body: "Product arrives to pack, palletize, shipping, pallet shuttle, or storage—ready for the next step." },
];

const options = [
  {
    name: "Conveyor Types",
    items: [
      { title: "MDR / Zero‑pressure Roller" },
      { title: "Belt & Belt‑on‑Roller" },
      { title: "Chain & Chain‑Driven Live Roller (CDLR)" },
      { title: "Mat‑top / Modular Plastic Belt" },
      { title: "Pallet Conveyor (rollers, CDLR, chain)" },
      { title: "Incline/Decline & Spirals" },
    ],
  },
  {
    name: "Sortation Methods",
    items: [
      { title: "Sliding‑Shoe Sorter" },
      { title: "Cross‑Belt / Tilt‑Tray" },
      { title: "Narrow‑Belt Sorter (NBS) / Belt‑with‑Pop‑up Wheels" },
      { title: "Steerable Wheel / Swivel Wheel" },
      { title: "Pushers & Right‑Angle Transfers" },
    ],
  },
  {
    name: "Control & Tracking",
    items: [
      { title: "WMS / WCS Integration" },
      { title: "Barcode & RFID Scanners" },
      { title: "Photo‑eyes & Zone Control" },
      { title: "Dimensioning & Weighing (DWS)" },
      { title: "Print/Apply & Verify" },
    ],
  },
  {
    name: "Pallet Handling & Interfaces",
    items: [
      { title: "Pallet Infeed/Outfeed to Shuttle / LoadMatic" },
      { title: "Pallet Turntables & Indexers" },
      { title: "Pallet Transfers (Chain ↔ CDLR)" },
      { title: "Pallet Stackers / Destackers" },
      { title: "End‑of‑Line Palletizing Handoffs" },
    ],
  },
  {
    name: "Safety & Access",
    items: [
      { title: "Light Curtains & E‑Stops" },
      { title: "Guarding & Handrails" },
      { title: "Access Gates & Interlocks" },
      { title: "Lockout/Tagout Provisions" },
    ],
  },
];

const gallery = demoSolutionImages.conveyor;

const useCases = [
  "E‑commerce fulfillment: order routing, carrier sort, and pack lane feeds",
  "Distribution centers: zone‑to‑zone transport, pre‑sort to doors, and shipping lanes",
  "Manufacturing: WIP conveyance, kitting lines, and finished‑goods handling",
  "Postal & parcel: destination sorting by service level and route",
  "Retail & returns: putaway, restock flow, and reverse logistics",
];

export default function Page() {
  return (
    <SolutionPage
      title="Conveyor & Sortation Systems"
      description="Automated material flow from induction to shipping—combining modular conveyors, intelligent sortation, and pallet interfaces that scale with your throughput."
      videos={[
        { url: "https://www.youtube.com/embed/jf3IbA9pigs", title: "AutoRoll+™ MDR Conveyor" },
        { url: "https://www.youtube.com/embed/zyoootwqbqA", title: "Belt Conveyor" },
        { url: "https://www.youtube.com/embed/4GX7exZGpmQ", title: "Gravity Conveyor" },
        { url: "https://www.youtube.com/embed/E5BwPlU46QQ", title: "Narrow Belt Live Roller (NBLR) Conveyor" },
        { url: "https://www.youtube.com/embed/iOdUktCFxiY", title: "V‑Belt Conveyor" },
      ]}
      benefits={benefits}
      steps={steps}
      options={options}
      gallery={gallery}
      useCases={useCases}
      brochureCta={{
        blurb: "Want detailed conveyor specifications and layout options? Share your email to get our systems guide.",
        buttonText: "Request brochure",
        href: "/contact",
      }}
      cta={{
        title: "Ready to design a conveyor & sortation system?",
        body: "We'll map your flows, size throughput, and specify the right conveyor types, sortation method, and pallet interfaces for your targets.",
        buttonText: "Talk with an engineer",
        href: "/contact",
      }}
    />
  );
}
