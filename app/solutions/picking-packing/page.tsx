
// app/solutions/picking-packing/page.tsx
import SolutionPage from "@/components/SolutionPage";

export const metadata = { title: "Picking & Packing | Intralog" };

const benefits = [
  { title: "Increase pick rates", body: "Goods-to-person systems and optimized workflows achieve 300+ lines per hour per operator." },
  { title: "Reduce picking errors", body: "Pick-to-light, voice systems, and vision guidance cut error rates to less than 0.1%." },
  { title: "Ergonomic workstations", body: "Height-adjustable stations and automated material presentation reduce worker fatigue and injuries." },
  { title: "Flexible order profiles", body: "Handle single-item orders to large bulk picks with adaptive station configurations." },
  { title: "Real-time visibility", body: "Track picking progress, productivity, and quality metrics across all operations." },
  { title: "Scalable throughput", body: "Add pick stations and automation as order volume grows without facility expansion." },
  { title: "Quality assurance", body: "Integrated weighing, scanning, and visual verification ensure accurate order fulfillment." },
  { title: "Labor optimization", body: "Task interleaving and intelligent work allocation maximize operator productivity." },
];

const steps = [
  { step: 1, title: "Order batching", body: "System optimizes order grouping and assigns picks to stations based on efficiency algorithms." },
  { step: 2, title: "Item presentation", body: "Automated storage brings required SKUs to picking stations at optimal sequence and timing." },
  { step: 3, title: "Guided picking", body: "Visual, audio, or haptic guidance directs operators to exact pick locations and quantities." },
  { step: 4, title: "Pack & verify", body: "Integrated packing with quality checks, labeling, and shipping documentation completion." },
];

const options = [
  {
    name: "Picking Methods",
    items: [
      { title: "Goods-to-Person" },
      { title: "Zone Picking" },
      { title: "Batch Picking" },
      { title: "Cluster Picking" },
    ],
  },
  {
    name: "Guidance Systems",
    items: [
      { title: "Pick-to-Light" },
      { title: "Voice Picking" },
      { title: "Vision Picking" },
      { title: "RF Scanning" },
    ],
  },
  {
    name: "Workstation Features",
    items: [
      { title: "Ergonomic Design" },
      { title: "Integrated Scales" },
      { title: "Label Printers" },
      { title: "Pack Stations" },
    ],
  },
  {
    name: "Quality Control",
    items: [
      { title: "Weight Verification" },
      { title: "Barcode Validation" },
      { title: "Photo Documentation" },
      { title: "Dimension Scanning" },
    ],
  },
];

const gallery = [
  { title: "Goods-to-person station", src: "/images/solutions/picking/goods-to-person.jpg" },
  { title: "Pick-to-light system", src: "/images/solutions/picking/pick-to-light.jpg" },
  { title: "Automated pack station", src: "/images/solutions/picking/pack-station.jpg" },
  { title: "Zone picking layout", src: "/images/solutions/picking/zone-picking.jpg" },
];

const useCases = [
  "E-commerce fulfillment: high-velocity order processing with diverse SKU mix",
  "Retail distribution: store replenishment and customer direct shipments",
  "Healthcare: medication picking with strict accuracy and traceability requirements",
  "Food & beverage: temperature-controlled picking with expiration date management",
  "Industrial distribution: MRO and parts fulfillment with technical specifications",
];

export default function Page() {
  return (
    <SolutionPage
      title="Picking & Packing"
      description="Optimized fulfillment operations that combine advanced automation with intelligent workflows—maximizing picking accuracy and throughput while reducing labor costs and operational complexity."
      videos={[
        { url: "https://www.youtube.com/embed/dQw4w9WgXcQ", title: "Automated Picking System" },
        { url: "https://www.youtube.com/embed/dQw4w9WgXcQ", title: "Pack Station Integration" },
      ]}
      benefits={benefits}
      steps={steps}
      options={options}
      gallery={gallery}
      useCases={useCases}
      brochureCta={{
        blurb: "Looking for picking and packing optimization strategies? Get our comprehensive fulfillment operations guide.",
        buttonText: "Request brochure",
        href: "/contact",
      }}
      cta={{
        title: "Ready to transform your picking and packing operations?",
        body: "We'll analyze your order profiles, SKU characteristics, and labor costs to design an optimal fulfillment solution that maximizes efficiency and accuracy.",
        buttonText: "Talk with an engineer",
        href: "/contact",
      }}
    />
  );
}
export const metadata = { title: "Picking & Packing | Intralog" };

export default function Page() {
  return (
    <main className="section">
      <div className="container">
        <h1 className="text-3xl font-semibold mb-2">Picking & Packing</h1>
        <div className="card">
          <p className="text-slate-700">Content coming soon. We'll publish examples, photos, and workflows here.</p>
        </div>
      </div>
    </main>
  );
}
