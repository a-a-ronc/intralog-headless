// app/solutions/by-industry/cold-storage-warehousing/page.tsx
import SolutionPage from "@/components/SolutionPage";
import { demoSolutionImages } from "@/lib/demo";

export const metadata = { title: "Cold Storage Warehousing | Intralog" };

/** Benefits aligned to chilled/freezer operations */
const benefits = [
  { title: "Built for low-temp uptime", body: "Freezer-rated conveyors, heaters, and controls to keep lines moving through defrost cycles." },
  { title: "Density without bottlenecks", body: "Pallet shuttle, flow, and drive-in solutions sized for your dock-to-stock and case-pick needs." },
  { title: "Code-compliant design", body: "ESFR/flue spacing, egress, and permit packages coordinated with the AHJ." },
  { title: "Safer, faster docks", body: "Vestibules, high-speed insulated doors, and seals minimize infiltration and ice." },
  { title: "Accurate traceability", body: "Freezer-grade P&A, scanners, and WMS/WES integration for lot/expiry handling." },
  { title: "Energy & labor savings", body: "Right-size travel with deep-lane storage and AMR/AGV interfaces to cut forklift time." },
];

/** Typical delivery flow for cold storage projects */
const steps = [
  { step: 1, title: "Assess profile & temperature zones", body: "Map SKU velocity, pallet turn, and chilled vs. freezer footprints; define docks/vestibules." },
  { step: 2, title: "Engineer storage & flow", body: "Select selective/pushback/flow/shuttle/drive-in; plan aisles, flues, and pick faces." },
  { step: 3, title: "Specify low-temp equipment", body: "Freezer-rated MDR, belted, CDLR/chain, heated photoeyes, stainless hardware, sealed bearings." },
  { step: 4, title: "Integrate labeling & ID", body: "Freezer-grade print/apply, scanners with heaters, and WMS/WES rules for lots/expiry." },
  { step: 5, title: "Commission & validate", body: "Thermal performance checks, safety validation, and operator training for cold environments." },
];

/** Capability catalog */
const options = [
  {
    name: "Storage Systems",
    items: [
      { title: "Selective & Double-Deep Pallet Rack" },
      { title: "Pushback (2–6 deep, LIFO)" },
      { title: "Pallet Flow (FIFO, deep lane)" },
      { title: "Drive-In / Drive-Through" },
      { title: "Pallet Shuttle Systems (deep-lane, FIFO/LIFO)" },
      { title: "Pick Modules & Carton Flow (chilled pick)" },
    ],
  },
  {
    name: "Conveyance & Handling (Low-Temp Rated)",
    items: [
      { title: "Belted & Modular Belt Conveyors (cold-resistant belt compounds)" },
      { title: "MDR ZPA with zone heaters & low-temp grease" },
      { title: "CDLR / 2- & 3-Strand Chain, Right-Angle Transfers, Turntables" },
      { title: "VRCs/Spirals with heaters and condensation management" },
      { title: "AMR/AGV interfaces for pallet/tote movement" },
    ],
  },
  {
    name: "Docks, Doors & Enclosures",
    items: [
      { title: "Air vestibules, insulated high-speed doors, dock seals/shelters" },
      { title: "Under-floor heat, vapor barriers, anti-slip & drainage details" },
      { title: "Curtain walls and convertible rooms (blast/temper zones)" },
    ],
  },
  {
    name: "Labeling, ID & QA",
    items: [
      { title: "Freezer-grade Print & Apply (SSCC, ship labels) with verify/void" },
      { title: "Barcode/RFID scanners with heaters/anti-fog windows" },
      { title: "Inline DWS for audit trails and ship compliance" },
    ],
  },
  {
    name: "Power, Batteries & Controls",
    items: [
      { title: "Heated enclosures, cabinet purge & condensation control" },
      { title: "Battery strategy for cold (Li-ion with heaters or lead-acid rooms)" },
      { title: "PLC/HMI with low-temp HMIs and sealed components" },
    ],
  },
  {
    name: "Safety & Compliance",
    items: [
      { title: "ESFR/flue spacing coordination, egress & signage" },
      { title: "Guarding, light curtains, floor repair/traction upgrades" },
      { title: "Ammonia/CO₂ alarm interface points (facility systems)" },
    ],
  },
];

/** Gallery (swap or extend with real assets) */
const gallery =
  demoSolutionImages.coldStorage ?? [
    { src: "/images/solutions/cold-storage/pallet-flow-freezer.jpg", alt: "Pallet flow in a freezer" },
    { src: "/images/solutions/cold-storage/deep-lane-shuttle.jpg", alt: "Deep-lane pallet shuttle in cold room" },
    { src: "/images/solutions/cold-storage/insulated-doors.jpg", alt: "Insulated high-speed doors at dock vestibule" },
  ];

/** Representative use cases */
const useCases = [
  "Frozen food DC: deep-lane pallet shuttle with freezer-rated pallet conveyor",
  "Ice cream & premium frozen: pallet flow with strict temperature integrity and SSCC at wrapper",
  "Meat/seafood: selective/pushback mix with chilled pick modules feeding pack",
  "Pharma cold-chain: secure, lot/expiry control with freezer-grade labeling & verification",
];

export default function Page() {
  return (
    <SolutionPage
      title="Cold Storage Warehousing"
      description="Low-temperature intralogistics built for uptime—code-compliant storage, freezer-rated conveyors, vestibules/doors, and WMS/WES-driven labeling and traceability."
      benefits={benefits}
      steps={steps}
      options={options}
      gallery={gallery}
      useCases={useCases}
      videos={[
        { url: "https://www.youtube.com/embed/5l5l2Q5mS6Q", title: "Pallet Flow in Cold Storage" },
        { url: "https://www.youtube.com/embed/1YUo0w3Gx5o", title: "Freezer-Rated Pallet Handling" },
      ]}
      brochureCta={{
        blurb: "Download the Cold Storage Playbook—rack selection, door/vestibule details, and low-temp equipment checklist.",
        buttonText: "Get the playbook",
        href: "/contact",
      }}
      cta={{
        title: "Design your cold-storage flow",
        body: "We’ll size deep-lane density, pick faces, and freezer-rated conveyance—and coordinate code, docks, and labeling for an end-to-end solution.",
        buttonText: "Talk with an engineer",
        href: "/contact",
      }}
    />
  );
}
