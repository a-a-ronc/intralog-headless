
// // app/solutions/by-technology/goods-to-person-vlms/page.tsx
// import SolutionPage from "@/components/SolutionPage";
// import { demoSolutionImages } from "@/lib/demo";

// export const metadata = { title: "Goods-to-Person / VLMs | Intralog" };

// const benefits = [
//   { title: "Space‑efficient vertical storage", body: "Pack 85% more inventory in your existing footprint vs. shelving, with up to 40' height." },
//   { title: "Fast, accurate picking", body: "Automated tray delivery to ergonomic height with laser pointers and pick‑to‑light eliminates walking and searching." },
//   { title: "Cold storage ready", body: "Modula systems operate in ‑4°F to +104°F, ideal for food, pharma, and temperature‑sensitive items." },
//   { title: "Flexible tray configurations", body: "Adjustable shelves, dividers, and accessories adapt to your SKU mix and seasonality." },
//   { title: "Visual picking aids", body: "Laser pointers, LED bars, and external monitors guide operators to exact pick locations." },
//   { title: "WMS integration", body: "Real‑time inventory sync with your WMS/ERP for cycle counting, lot tracking, and order accuracy." },
//   { title: "Security & user authentication", body: "RFID badges, controlled access, and audit trails for high‑value or regulated inventory." },
//   { title: "Robot interface ready", body: "Collaborative robots can pick directly from delivered trays for lights‑out automation." },
// ];

// const steps = [
//   { step: 1, title: "Operator login & order", body: "RFID badge authentication loads pick list, and the system queues the first SKU location." },
//   { step: 2, title: "Tray delivery", body: "The VLM automatically delivers the correct tray to the operator at ergonomic height." },
//   { step: 3, title: "Guided picking", body: "Laser pointers and LED displays guide the operator to exact pick quantities and locations." },
//   { step: 4, title: "Confirm & continue", body: "Operator confirms pick, system updates inventory, and delivers the next tray until order complete." },
// ];

// const options = [
//   {
//     name: "Visual Picking Aids",
//     items: [
//       { title: "Laser Pointer" },
//       { title: "Alphanumeric LED Bar" },
//       { title: "X‑Axis LED Bar" },
//       { title: "Put‑to‑Light (stations)" },
//     ],
//   },
//   {
//     name: "User Authentication",
//     items: [
//       { title: "RFID Reader" },
//       { title: "Badge / EKS Reader" },
//     ],
//   },
//   {
//     name: "Improve Productivity",
//     items: [
//       { title: "External Picking Monitor" },
//       { title: "Sliding Console" },
//       { title: "Barcode Reader & Label Printer" },
//       { title: "Piece‑Counting Scale" },
//       { title: "Picking Cart" },
//     ],
//   },
//   {
//     name: "Bay Options",
//     items: [
//       { title: "Magnetic Interlocking Device" },
//       { title: "External Bay Lighting" },
//       { title: "Automatic Door" },
//     ],
//   },
//   {
//     name: "Tray Accessories",
//     items: [
//       { title: "Partitions & Dividers" },
//       { title: "Tray Extensions" },
//     ],
//   },
//   {
//     name: "Misc / Integration",
//     items: [
//       { title: "Robot Interface" },
//       { title: "Electrified Tray" },
//       { title: "Payload Distribution Plates" },
//       { title: "ESD Protection" },
//       { title: "Foot Bar" },
//       { title: "Task Complete / End‑Pick Button" },
//     ],
//   },
// ];

// const gallery = demoSolutionImages.vlm;

// const useCases = [
//   "Pharmaceuticals & healthcare: regulated storage with lot tracking and audit trails",
//   "Automotive & aerospace: small parts, fasteners, and MRO inventory management",
//   "Electronics & manufacturing: component storage with ESD protection and precise inventory",
//   "Cold storage: temperature‑sensitive food, beverage, and pharmaceutical products",
//   "E‑commerce & retail: small SKUs, seasonal items, and high‑velocity picking operations",
// ];

// export default function Page() {
//   return (
//     <SolutionPage
//       title="Goods-to-Person / VLMs"
//       description="Modula Vertical Lift Modules deliver precise inventory to operators at ergonomic height—maximizing space, speed, and accuracy for small‑parts picking."
//       videos={[
//         { url: "https://www.youtube.com/embed/PQSAOIZzwCQ", title: "Modula Lift in Action" },
//         { url: "https://www.youtube.com/embed/H5GIY7PTyR0?si=uUZPDA7SOofmjUCL", title: "FlexiBox Auto Case Pick" },
//         { url: "https://www.youtube.com/watch?v=zbLhByJqLWI", title: "Modula WMS Integration" },
//       ]}
//       benefits={benefits}
//       steps={steps}
//       options={options}
//       gallery={gallery}
//       useCases={useCases}
//       brochureCta={{
//         blurb: "Want the full Modula options guide? Drop your email and we'll send the latest brochure.",
//         buttonText: "Request brochure",
//         href: "/contact",
//       }}
//       cta={{
//         title: "Ready to size a VLM system for your SKU profile?",
//         body: "We'll help pick the right configuration (Lift or FlexiBox), trays, and accessories for your throughput and environment.",
//         buttonText: "Talk with an engineer",
//         href: "/contact",
//       }}
//     />
//   );
// }
// app/solutions/by-technology/goods-to-person-vlms/page.tsx
import SolutionPage from "@/components/SolutionPage";
import { demoSolutionImages } from "@/lib/demo";

export const metadata = { title: "Goods-to-Person / VLMs | Intralog" };

/** Top value props */
const benefits = [
  { title: "Space efficiency", body: "Recover floor space by going vertical; compress slow/medium movers into dense, secure storage." },
  { title: "Higher pick rates", body: "Bring totes/trays to the operator; reduce walk time and lift lines per hour with batching and guidance." },
  { title: "Accuracy & traceability", body: "Operator prompts, PTL/PTL, weigh/verify, and permissions improve quality and auditability." },
  { title: "Scalable growth", body: "Add towers/robots/aisles as demand grows—no need to re-platform." },
  { title: "Flexible SKU mix", body: "From smalls in trays to case/tote storage; slot by velocity and cube." },
  { title: "Cold & secure options", body: "Chilled/freezer kits, controlled access, and full access logs for high-value items." },
];

/** Process overview */
const steps = [
  { step: 1, title: "Replen & decant", body: "Inbound put into trays/totes with labeling, ID, and quality checks." },
  { step: 2, title: "Slot & buffer", body: "WMS/WCS assigns locations by velocity, size, and demand; optional pre-pick buffering." },
  { step: 3, title: "Request & present", body: "Orders trigger tray/tote presentation at pick stations with guidance and PTL/PTL." },
  { step: 4, title: "Pick, verify, pack", body: "Operator picks to destination, verifies by weight/scan, and passes to pack or sort." },
];

/** What we offer (grouped) */
const options = [
  {
    name: "Storage & Delivery Technologies",
    items: [
      { title: "VLMs (Vertical Lift Modules) — tray-based, dual-tray, tall configurations" },
      { title: "Vertical & Horizontal Carousels — compact, batch-friendly" },
      { title: "Tote/Carton Shuttle AS/RS — highest sustained throughput per aisle" },
      { title: "Mini-load AS/RS (crane) — tall aisles, strong vertical density" },
      { title: "ACR (Autonomous Case-handling Robots) — flexible tote/case G2P" },
      { title: "Rack-moving AMR G2P — pods/racks to person (where footprint fits)" },
      // { title: "Cube-based Bin Storage — offered with partner alignment" }, // enable later if desired
    ],
  },
  {
    name: "Workstations & Guidance",
    items: [
      { title: "Pick-to-Light / Put-to-Light (PTL/PTL), HMI prompts, vision cues" },
      { title: "Batch picking, put walls, totes/carts, quality check cameras" },
      { title: "Weigh/verify, print/label, exception lanes" },
    ],
  },
  {
    name: "Replen, Slotting & Buffering",
    items: [
      { title: "Decant stations, labeling/ID, QC" },
      { title: "Velocity-based slotting, waveless batching, order clustering" },
      { title: "Dynamic buffering/sequencing ahead of pack or sortation" },
    ],
  },
  {
    name: "Software & Controls",
    items: [
      { title: "WMS/WCS integration (APIs/PLC), inventory accuracy" },
      { title: "Permissions & audit trails, cycle counting, exceptions" },
      { title: "Dashboards & KPIs (UPH/LpH, wait time, utilization)" },
    ],
  },
  {
    name: "Environment, Safety & Compliance",
    items: [
      { title: "Guarding, light curtains, E-stops; ergonomic stations" },
      { title: "ESD surfaces, chilled/freezer kits, heaters/insulation" },
      { title: "Fire protection coordination and code compliance" },
    ],
  },
];

/** Demo/gallery images — add real assets under /public when ready */
const gallery = demoSolutionImages.vlm ?? [
  { src: "/images/solutions/vlm/vlm-hero.jpg", alt: "VLM pick station" },
  { src: "/images/solutions/vlm/vlm-station.jpg", alt: "Operator guidance on VLM" },
  { src: "/images/solutions/vlm/batch-picking.jpg", alt: "Batch picking with totes" },
];

const useCases = [
  "Spare parts/MRO: secure, serialized items with audit trails",
  "E-commerce: smalls and medium movers with high order mix",
  "Manufacturing: kitting and point-of-use replenishment",
  "Aftermarket & distribution: compact, accurate parts picking",
];

export default function Page() {
  return (
    <SolutionPage
      title="Goods-to-Person / VLMs"
      description="Increase speed and density by bringing inventory to the operator. We deploy VLMs, shuttle/mini-load AS/RS, and ACR robots with guided pick stations and tight WMS/WCS integration."
      videos={[
        { url: "https://www.youtube.com/embed/PQSAOIZzwCQ", title: "VLM Overview" },
        { url: "https://www.youtube.com/embed/H5GIY7PTyR0?si=uUZPDA7SOofmjUCL", title: "Mini-load AS/RS" },
        { url: "https://www.youtube.com/watch?v=zbLhByJqLWI", title: "Shuttle AS/RS G2P" },
      ]}
      benefits={benefits}
      steps={steps}
      options={options}
      gallery={gallery}
      useCases={useCases}
      brochureCta={{
        blurb: "Get our G2P Selection Guide—throughput bands, station designs, and slotting templates.",
        buttonText: "Request guide",
        href: "/contact",
      }}
      cta={{
        title: "Design your G2P system",
        body: "We’ll size stations, choose VLM vs. shuttle vs. ACR, and integrate with your WMS/WCS for high accuracy and UPH.",
        buttonText: "Talk with an engineer",
        href: "/contact",
      }}
    />
  );
}
//       videos={[
//         { url: "https://www.youtube.com/embed/PQSAOIZzwCQ", title: "Modula Lift in Action" },
//         { url: "https://www.youtube.com/embed/H5GIY7PTyR0?si=uUZPDA7SOofmjUCL", title: "FlexiBox Auto Case Pick" },
//         { url: "https://www.youtube.com/watch?v=zbLhByJqLWI", title: "Modula WMS Integration" },
//       ]}