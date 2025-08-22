
// app/solutions/storage-retrieval/page.tsx
import SolutionPage from "@/components/SolutionPage";

export const metadata = { title: "Storage & Retrieval | Intralog" };

const benefits = [
  { title: "Maximize storage density", body: "Vertical storage and optimized slotting increase capacity up to 85% compared to static racking." },
  { title: "Goods-to-person efficiency", body: "Automated retrieval brings items to operators, eliminating travel time and increasing pick rates." },
  { title: "Inventory accuracy", body: "Real-time tracking and controlled access maintain 99.9%+ inventory accuracy." },
  { title: "Reduce picking errors", body: "Visual pick guides and system-directed workflows minimize mispicks and improve quality." },
  { title: "Optimize labor allocation", body: "Focus workers on value-added tasks while automation handles repetitive storage/retrieval." },
  { title: "Scalable throughput", body: "Add storage modules and retrieval equipment to match growing operational demands." },
  { title: "Environmental protection", body: "Enclosed storage protects inventory from dust, temperature, and unauthorized access." },
  { title: "Comprehensive tracking", body: "Full lot traceability and expiration date management for regulated industries." },
];

const steps = [
  { step: 1, title: "Storage request", body: "System receives putaway instructions with optimal location assignment based on SKU velocity." },
  { step: 2, title: "Automated storage", body: "Crane or shuttle transports item to assigned location with precise positioning." },
  { step: 3, title: "Retrieval demand", body: "Pick order triggers retrieval sequence with queue optimization for maximum efficiency." },
  { step: 4, title: "Item delivery", body: "Automated system delivers item to pick face with visual confirmation and quality checks." },
];

const options = [
  {
    name: "Storage Systems",
    items: [
      { title: "AS/RS Cranes" },
      { title: "Shuttle Systems" },
      { title: "Vertical Lift Modules" },
      { title: "Carousel Systems" },
    ],
  },
  {
    name: "Storage Media",
    items: [
      { title: "Pallet Racking" },
      { title: "Tote Storage" },
      { title: "Bin Systems" },
      { title: "Tray Storage" },
    ],
  },
  {
    name: "Control Features",
    items: [
      { title: "Inventory Management" },
      { title: "Slotting Optimization" },
      { title: "Cycle Counting" },
      { title: "Exception Handling" },
    ],
  },
  {
    name: "Integration Options",
    items: [
      { title: "WMS Interface" },
      { title: "ERP Connectivity" },
      { title: "Conveyor Integration" },
      { title: "Pick Station Interface" },
    ],
  },
];

const gallery = [
  { title: "AS/RS crane system", src: "/images/solutions/storage/asrs-crane.jpg" },
  { title: "Shuttle storage", src: "/images/solutions/storage/shuttle-storage.jpg" },
  { title: "Tote retrieval", src: "/images/solutions/storage/tote-retrieval.jpg" },
  { title: "Control dashboard", src: "/images/solutions/storage/control-dashboard.jpg" },
];

const useCases = [
  "Cold storage: maximizing cubic utilization in temperature-controlled environments",
  "Pharmaceutical: secure, traceable storage with lot control and expiration management",
  "E-commerce: high-density storage with rapid SKU access for order fulfillment",
  "Manufacturing: work-in-process and finished goods storage with JIT retrieval",
  "3PL operations: flexible storage allocation for multiple client inventories",
];

export default function Page() {
  return (
    <SolutionPage
      title="Storage & Retrieval"
      description="Automated storage and retrieval systems that maximize density and efficiency—from high-bay AS/RS to compact vertical storage, delivering the right items at the right time with precision and speed."
      videos={[
        { url: "https://www.youtube.com/embed/dQw4w9WgXcQ", title: "AS/RS System Overview" },
      ]}
      benefits={benefits}
      steps={steps}
      options={options}
      gallery={gallery}
      useCases={useCases}
      brochureCta={{
        blurb: "Want detailed storage system specifications and capacity analysis? Download our complete storage solutions guide.",
        buttonText: "Request brochure",
        href: "/contact",
      }}
      cta={{
        title: "Ready to optimize your storage and retrieval operations?",
        body: "We'll analyze your SKU profile, space constraints, and throughput requirements to design the most efficient automated storage solution.",
        buttonText: "Talk with an engineer",
        href: "/contact",
      }}
    />
  );
}
export const metadata = { title: "Storage & Retrieval | Intralog" };

export default function Page() {
  return (
    <main className="section">
      <div className="container">
        <h1 className="text-3xl font-semibold mb-2">Storage & Retrieval</h1>
        <div className="card">
          <p className="text-slate-700">Content coming soon. We'll publish examples, photos, and workflows here.</p>
        </div>
      </div>
    </main>
  );
}
export const metadata = { title: "Storage & Retrieval | Intralog" };

export default function Page() {
  return (
    <main className="section">
      <div className="container">
        <h1 className="text-3xl font-semibold mb-2">Storage & Retrieval</h1>
        <div className="card">
          <p className="text-slate-700">Content coming soon. We'll publish examples, photos, and workflows here.</p>
        </div>
      </div>
    </main>
  );
}
