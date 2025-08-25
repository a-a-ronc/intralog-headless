
// app/solutions/by-technology/goods-to-person-vlms/page.tsx
import SolutionPage from "@/components/SolutionPage";
import { demoSolutionImages } from "@/lib/demo";

export const metadata = { title: "Goods-to-Person / VLMs | Intralog" };

const benefits = [
  { title: "Space‑efficient vertical storage", body: "Pack 85% more inventory in your existing footprint vs. shelving, with up to 40' height." },
  { title: "Fast, accurate picking", body: "Automated tray delivery to ergonomic height with laser pointers and pick‑to‑light eliminates walking and searching." },
  { title: "Cold storage ready", body: "Modula systems operate in ‑4°F to +104°F, ideal for food, pharma, and temperature‑sensitive items." },
  { title: "Flexible tray configurations", body: "Adjustable shelves, dividers, and accessories adapt to your SKU mix and seasonality." },
  { title: "Visual picking aids", body: "Laser pointers, LED bars, and external monitors guide operators to exact pick locations." },
  { title: "WMS integration", body: "Real‑time inventory sync with your WMS/ERP for cycle counting, lot tracking, and order accuracy." },
  { title: "Security & user authentication", body: "RFID badges, controlled access, and audit trails for high‑value or regulated inventory." },
  { title: "Robot interface ready", body: "Collaborative robots can pick directly from delivered trays for lights‑out automation." },
];

const steps = [
  { step: 1, title: "Operator login & order", body: "RFID badge authentication loads pick list, and the system queues the first SKU location." },
  { step: 2, title: "Tray delivery", body: "The VLM automatically delivers the correct tray to the operator at ergonomic height." },
  { step: 3, title: "Guided picking", body: "Laser pointers and LED displays guide the operator to exact pick quantities and locations." },
  { step: 4, title: "Confirm & continue", body: "Operator confirms pick, system updates inventory, and delivers the next tray until order complete." },
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
  "Pharmaceuticals & healthcare: regulated storage with lot tracking and audit trails",
  "Automotive & aerospace: small parts, fasteners, and MRO inventory management",
  "Electronics & manufacturing: component storage with ESD protection and precise inventory",
  "Cold storage: temperature‑sensitive food, beverage, and pharmaceutical products",
  "E‑commerce & retail: small SKUs, seasonal items, and high‑velocity picking operations",
];

export default function Page() {
  return (
    <SolutionPage
      title="Goods-to-Person / VLMs"
      description="Modula Vertical Lift Modules deliver precise inventory to operators at ergonomic height—maximizing space, speed, and accuracy for small‑parts picking."
      videos={[
        { url: "https://www.youtube.com/embed/PQSAOIZzwCQ", title: "Modula Lift in Action" },
        { url: "https://www.youtube.com/embed/2aHgHAk7ZFk", title: "FlexiBox Auto Case Pick" },
        { url: "https://www.youtube.com/embed/zbLhByJqLWI", title: "Modula WMS Integration" },
      ]}
      benefits={benefits}
      steps={steps}
      options={options}
      gallery={gallery}
      useCases={useCases}
      brochureCta={{
        blurb: "Want the full Modula options guide? Drop your email and we'll send the latest brochure.",
        buttonText: "Request brochure",
        href: "/contact",
      }}
      cta={{
        title: "Ready to size a VLM system for your SKU profile?",
        body: "We'll help pick the right configuration (Lift or FlexiBox), trays, and accessories for your throughput and environment.",
        buttonText: "Talk with an engineer",
        href: "/contact",
      }}
    />
  );
}
