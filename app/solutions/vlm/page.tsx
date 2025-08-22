
// app/solutions/vlm/page.tsx
import SolutionPage from "@/components/SolutionPage";
import { demoSolutionImages } from "@/lib/demo";

export const metadata = { title: "Vertical Lift Modules (VLM) | Intralog" };

const benefits = [
  { title: "Save up to ~90% floor space", body: "Use vertical cube with dense tray storage; recover aisles and reduce footprint." },
  { title: "Fast goods‑to‑person picking", body: "Trays present at an ergonomic opening; high lines/hour when paired with software & aids." },
  { title: "FlexiBox for fast movers", body: "Up to ~180 bins/hour with shuttle + telescopic fork retrieving multiple containers per cycle." },
  { title: "Accuracy & traceability", body: "Copilot + Modula WMS, barcode/labeling, and pick‑to‑light options help cut errors." },
  { title: "Cold‑storage ready", body: "Climate‑control options protect temperature‑sensitive goods and minimize conditioned volume." },
  { title: "Enhanced ergonomics & safety", body: "Goods‑to‑person reduces travel and awkward reaches for better comfort and fewer injuries." },
  { title: "High tray capacities", body: "Lift line supports quick cycles and significant tray payloads for heavy parts." },
  { title: "Secure, enclosed storage", body: "Access control and enclosed trays protect inventory from theft, dust, and contamination." },
];

const steps = [
  { step: 1, title: "Operator login", body: "Badge/RFID authentication ensures the right person accesses assigned tasks." },
  { step: 2, title: "System retrieval", body: "VLM fetches the correct tray to the pick window; FlexiBox shuttles grab multiple bins." },
  { step: 3, title: "Guided picking", body: "Laser pointers, LED bars, or pick‑to‑light direct the exact location and quantity." },
  { step: 4, title: "Confirm & return", body: "Barcode scan or button press confirms the pick; tray returns to optimal storage position." },
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

const gallery = demoSolutionImages.vlm;

const useCases = [
  "Automotive: small parts, fasteners, and service components",
  "Electronics: ESD-safe storage for semiconductors and circuit boards",
  "Healthcare/Pharma: temperature-controlled storage for medications",
  "Aerospace: high-value parts with strict inventory control",
  "Manufacturing: tooling, spare parts, and work-in-process materials",
  "E-commerce: fast-moving SKUs in dense, climate-controlled environments",
  "Retail: spare parts, warranty items, and high-security merchandise",
  "Food service: ingredients, packaging, and temperature-sensitive items",
  "Defense: secure storage for sensitive and serialized components",
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
        href: "/contact",
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
