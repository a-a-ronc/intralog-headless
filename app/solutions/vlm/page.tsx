// app/solutions/vlm/page.tsx
import SolutionPage from "@/components/SolutionPage";

export const metadata = { title: "Vertical Lift Modules (VLM) | Intralog" };

const benefits = [
  { title: "Save up to ~90% floor space", body: "Use vertical cube with dense tray storage; recover aisles and reduce footprint." }, // Modula VLM overview
  { title: "Fast goods‑to‑person picking", body: "Trays present at an ergonomic opening; high lines/hour when paired with software & aids." },
  { title: "FlexiBox for fast movers", body: "Up to ~180 bins/hour with shuttle + telescopic fork retrieving multiple containers per cycle." }, // FlexiBox
  { title: "Accuracy & traceability", body: "Copilot + Modula WMS, barcode/labeling, and pick‑to‑light options help cut errors." },
  { title: "Cold‑storage ready", body: "Climate‑control options protect temperature‑sensitive goods and minimize conditioned volume." },
  { title: "Ergonomics & safety", body: "Goods‑to‑person reduces travel and awkward reaches for better comfort and fewer injuries." },
  { title: "High tray capacities", body: "Lift line supports quick cycles and significant tray payloads for heavy parts." },
  { title: "Secure, enclosed storage", body: "Access control and enclosed trays protect inventory quality." },
];

const steps = [
  { step: 1, title: "Request the tray", body: "Operator uses Copilot or WMS to call a SKU or tray ID." },
  { step: 2, title: "Lift retrieves", body: "Central elevator fetches the correct tray from vertical storage." },
  { step: 3, title: "Ergonomic pick", body: "Tray is presented at waist height with visual aids guiding the pick." },
  { step: 4, title: "Store & replenish", body: "Tray returns automatically; replenishment uses the same workflow." },
];

const options = [
  {
    name: "Visual Picking Aids",
    items: [
      { title: "Laser Pointer" },
      { title: "Alphanumeric LED Bar" },
      { title: "X‑Axis LED Bar" },
      { title: "Put‑to‑Light (stations)" },
    ],
  },
  {
    name: "User Authentication",
    items: [
      { title: "RFID Reader" },
      { title: "Badge / EKS Reader" },
    ],
  },
  {
    name: "Improve Productivity",
    items: [
      { title: "External Picking Monitor" },
      { title: "Sliding Console" },
      { title: "Barcode Reader & Label Printer" },
      { title: "Piece‑Counting Scale" },
      { title: "Picking Cart" },
    ],
  },
  {
    name: "Bay Options",
    items: [
      { title: "Magnetic Interlocking Device" },
      { title: "External Bay Lighting" },
      { title: "Automatic Door" },
    ],
  },
  {
    name: "Tray Accessories",
    items: [
      { title: "Partitions & Dividers" },
      { title: "Tray Extensions" },
    ],
  },
  {
    name: "Misc / Integration",
    items: [
      { title: "Robot Interface" },
      { title: "Electrified Tray" },
      { title: "Payload Distribution Plates" },
      { title: "ESD Protection" },
      { title: "Foot Bar" },
      { title: "Task Complete / End‑Pick Button" },
    ],
  },
];

const gallery = [
  { title: "FlexiBox: fast movers", src: "/images/solutions/vlm/bin-handling.jpg" },
  { title: "VLM in cold storage", src: "/images/solutions/vlm/climate-control.png" },
  { title: "Robot Interface", src: "/images/solutions/vlm/robot-interface.jpg" },
  { title: "Full Auto Case Pick", src: "/images/solutions/vlm/auto-case-pick.jpg" },
];

const useCases = [
  "Cold storage: dense, organized inventory with tight environmental control",
  "Bio/Pharma & Healthcare: traceable, clean storage with access control",
  "E‑commerce & Retail parts: high SKU variety with fast access",
  "Manufacturing, MRO & Tooling: kitting, spares, consumables",
  "Electronics & Aerospace: secure, serialized components",
];

export default function Page() {
  return (
    <SolutionPage
      title="Vertical Lift Modules (VLM)"
      description="Automated vertical storage that brings trays to your operators—saving space, increasing pick speed, and improving accuracy from ambient to cold‑storage environments."
      videos={[
        { url: "https://www.youtube.com/embed/H5GIY7PTyR0", title: "FlexiBox Overview" },
        { url: "https://www.youtube.com/embed/DNVNXjgT5MU", title: "Modula Lift Overview" },
      ]}
      benefits={benefits}
      steps={steps}
      options={options}
      gallery={gallery}
      useCases={useCases}
      brochureCta={{
        blurb:
          "Want the complete Modula options catalog (Lift & FlexiBox)? Share your email and we'll send you the current brochure.",
        buttonText: "Request brochure",
        href: "/contact", // or route to a dedicated /contact?topic=vlm
      }}
      cta={{
        title: "Considering a VLM or FlexiBox for cold storage?",
        body:
          "We'll size the unit, trays, and software to match your SKU profile, temperature band, and throughput.",
        buttonText: "Talk with an engineer",
        href: "/contact",
      }}
    />
  );
}