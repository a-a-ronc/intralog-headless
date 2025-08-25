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
        { url: "https://www.youtube.com/embed/vcI5c8AIPqA", title: "VLM Overview" },
        { url: "https://www.youtube.com/embed/7t1YqC6FQ7M", title: "Mini-load AS/RS" },
        { url: "https://www.youtube.com/embed/BVwzBPA0XQ0", title: "Shuttle AS/RS G2P" },
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
        body: "We'll size stations, choose VLM vs. shuttle vs. ACR, and integrate with your WMS/WCS for high accuracy and UPH.",
        buttonText: "Talk with an engineer",
        href: "/contact",
      }}
    />
  );
}