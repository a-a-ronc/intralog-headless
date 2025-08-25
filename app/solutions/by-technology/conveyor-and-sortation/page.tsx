// app/solutions/by-technology/conveyor-and-sortation/page.tsx
import SolutionPage from "@/components/SolutionPage";
import { demoSolutionImages } from "@/lib/demo";

export const metadata = { title: "Conveyor & Sortation | Intralog" };

/** Top value props */
const benefits = [
  { title: "High-throughput movement", body: "Automate transport/sortation from induction to shipping; scale to thousands of items per hour." },
  { title: "Flexible routing & diverting", body: "Merges, diverts, buffers, and controlled releases keep downstream fed without starving or blocking." },
  { title: "Labor & travel reduction", body: "Cut walk time and manual cart moves by connecting work areas with automated flow." },
  { title: "Scalable & modular", body: "Add zones, tiers, and sort points as volumes grow—without re-architecting the entire line." },
  { title: "Integration-ready controls", body: "Tie into WMS/WCS, DWS, scanners, and print/apply for live decisions and traceability." },
  { title: "Gentle, consistent handling", body: "Controlled acceleration and ZPA logic minimize damage and mis-sorts." },
  { title: "Energy-aware operation", body: "MDR/24V zones run only where product is present to reduce power draw." },
  { title: "Pallet compatibility", body: "Clean interfaces to pallet conveyor and deep-lane shuttle systems." },
];

/** Process overview */
const steps = [
  { step: 1, title: "Induct & identify", body: "Cartons, totes, or pallets enter; ID via barcode/RFID, DWS, or WMS/WCS lookups." },
  { step: 2, title: "Convey & accumulate", body: "ZPA accumulation, merges, and speed-matched transfers balance line flow." },
  { step: 3, title: "Decision & divert", body: "Controls route to doors, lanes, buffers, value-add, or pack via selected sortation." },
  { step: 4, title: "Destination hand-off", body: "Product arrives to pack, palletize, shipping, pallet shuttle, or storage." },
];

/** Your complete offering, grouped for UI */
const options = [
  {
    name: "Unit-Handling Conveyors (Cartons/Totes)",
    items: [
      { title: "Gravity Roller & Skatewheel" },
      { title: "Belt (Slider Bed), Belt-over-Roller" },
      { title: "Live Roller: BDLR (belt-driven), CDLR (chain-driven)" },
      { title: "MDR/24V: Zero-Pressure & Minimum-Pressure Accumulation" },
      { title: "Lineshaft Roller" },
      { title: "Modular Plastic Belt (Mat-top), Table-top Chain" },
      { title: "Curves, Merges, Combiners, Diverters (30°/45°/90°), Switchbacks" },
      { title: "Cleated/Flighted Belt (Inclines/Declines), Troughed Belt" },
      { title: "Flexible/Expandable (Gravity or Powered) for Temp Lines" },
      { title: "Telescopic/Boom Loaders for Docks" },
      { title: "Chutes: Spiral, Skatewheel, Sliding, Parcel Slides" },
    ],
  },
  {
    name: "Pallet Handling",
    items: [
      { title: "CDLR Pallet Conveyor (Single/Dual Lane)" },
      { title: "2-Strand & 3-Strand Chain Conveyor" },
      { title: "Chain Transfers (Pop-up), Right-Angle Transfers, Turntables" },
      { title: "Pallet Stackers/Destackers, Dispensers, Lifts" },
      { title: "Interfaces to Pallet Shuttles (Deep-Lane Infeed/Outfeed)" },
      { title: "Pallet Scales, Centering Stations, Profile Checks" },
    ],
  },
  {
    name: "Vertical Movement",
    items: [
      { title: "VRCs / Vertical Lifts (C- & Z-pattern), Continuous Vertical Conveyors" },
      { title: "Spirals (Belt or Modular)" },
      { title: "Lift & Rotate Units, Vertical Indexers" },
    ],
  },
  {
    name: "Sortation Systems (Unit Sorters)",
    items: [
      { title: "Sliding-Shoe Sorter (High Speed, Many Diverts)" },
      { title: "Cross-Belt Sorter (Loop or Linear)" },
      { title: "Tilt-Tray Sorter" },
      { title: "Narrow-Belt Sorter (NBS) with Pop-up/Angling Wheels" },
      { title: "Steerable/Swivel Wheel Diverts" },
      { title: "Pushers & 90° Transfers" },
      { title: "AMR / Mobile-Robot Sortation (e.g., totes to chutes)" },
    ],
  },
  {
    name: "Flow Control & Induction",
    items: [
      { title: "Singulators (3-belt, Shoe, Angled Roller)" },
      { title: "Dynamic Gappers, Brake Meters, Metering Belts" },
      { title: "Merge Controllers (1:2, 2:1, 3:1), Combiner Logic" },
      { title: "Accumulation Logic: Zone Lengths, Release Rules, Slug/Blocked Modes" },
    ],
  },
  {
    name: "Tracking, ID, & Print/Apply",
    items: [
      { title: "Barcode/RFID Scanners, Scales, Dimensioners (DWS)" },
      { title: "Print-and-Apply (with Verify/Void), Inline Labeling" },
      { title: "Photoeyes, Encoder Tracking, Zone Controllers" },
      { title: "WMS/WCS Integration, PLC/HMI, Exception Handling" },
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

/** Demo/gallery images (ensure these exist under /public) */
const gallery = demoSolutionImages.conveyor;

/** Representative use cases */
const useCases = [
  "E-commerce: order routing, carrier sort, pack lane feeds",
  "3PL/DC: zone-to-zone transport, pre-sort to doors, shipping lanes",
  "Manufacturing: WIP conveyance, kitting lines, finished-goods handling",
  "Postal & parcel: destination sorting by service level and route",
  "Retail & returns: putaway, restock flow, reverse logistics",
];

export default function Page() {
  return (
    <SolutionPage
      title="Conveyor & Sortation Systems"
      description="Automated material flow from induction to shipping—combining modular conveyors, intelligent sorters, pallet interfaces, vertical lifts, and integrated ID/labeling."
      videos={[
        { url: "https://www.youtube.com/embed/jf3IbA9pigs", title: "AutoRoll+™ MDR Conveyor" },
        { url: "https://www.youtube.com/embed/zyoootwqbqA", title: "Belt Conveyor" },
        { url: "https://www.youtube.com/embed/4GX7exZGpmQ", title: "Gravity Conveyor" },
        { url: "https://www.youtube.com/embed/E5BwPlU46QQ", title: "Narrow Belt Live Roller (NBLR) Conveyor" },
        { url: "https://www.youtube.com/embed/iOdUktCFxiY", title: "V-Belt Conveyor" },
      ]}
      benefits={benefits}
      steps={steps}
      options={options}
      gallery={gallery}
      useCases={useCases}
      brochureCta={{
        blurb: "Want detailed specifications, layouts, and selection guidance? Share your email to get our Conveyor & Sortation Playbook.",
        buttonText: "Request playbook",
        href: "/contact",
      }}
      cta={{
        title: "Build the right conveyor & sortation mix",
        body: "We’ll size throughput, pick the sorter, and tune merges/accumulation to your order profile—and interface with pallet shuttles where it pays.",
        buttonText: "Talk with an engineer",
        href: "/contact",
      }}
    />
  );
}
