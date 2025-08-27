// app/software/warehousr/page.tsx
import SolutionPage from "@/components/SolutionPage";

export const metadata = { title: "Warehousr | Intralog" };

const benefits = [
  { title: "Right-size every slot", body: "Map SKUs to the smallest safe bin that fits orientation and weight rules—freeing capacity without buying more rack." },
  { title: "Design shelves in minutes", body: "Auto-calc level spacing and count within your vertical envelope, with ergonomic and safety clearances baked in." },
  { title: "Season-ready plans", body: "Peak vs. average assignments and clean deltas so re-slotting before Q4 or promo season is painless." },
  { title: "Objective-driven", body: "Choose capacity balance, throughput, or travel reduction. Swap objectives and compare exports." },
  { title: "CSV in, CSV out", body: "Works with your SKU master and bin catalogs. Clean exports for WMS imports and field teams." },
];

const steps = [
  { 
    step: 1, 
    title: "Import data", 
    body: "Load SKU master (L×W×H, weight, demand) and bin catalog or current map.", 
    image: { src: "/images/software/warehousr/step1.svg", alt: "Import data interface" }
  },
  { 
    step: 2, 
    title: "Pick objectives & rules", 
    body: "Select optimization objective, orientation rules, safety clearances, and season (peak/avg).", 
    image: { src: "/images/software/warehousr/step2.svg", alt: "Objectives and rules configuration" }
  },
  { 
    step: 3, 
    title: "Run assignment & shelf design", 
    body: "Warehousr computes bin fits, shelf levels, and generates the slotting plan.", 
    image: { src: "/images/software/warehousr/step3.mp4", alt: "Assignment and shelf design process" }
  },
  { 
    step: 4, 
    title: "Export & implement", 
    body: "Download assignments and deltas for WMS and field execution, plus a simple review report.", 
    image: { src: "/images/software/warehousr/step4.svg", alt: "Export and implementation" }
  },
];

const options = [
  {
    name: "Core Analytics",
    items: [
      { title: "Activity profile analysis" },
      { title: "SKU velocity & classification" },
      { title: "Transaction pattern recognition" },
      { title: "Space utilization metrics" },
      { title: "Labor performance tracking" },
    ],
  },
  {
    name: "Visualization & Reporting",
    items: [
      { title: "Interactive plotly dashboards" },
      { title: "Activity heatmaps" },
      { title: "Throughput trend analysis" },
      { title: "Pick behavior visualization" },
      { title: "Bottleneck identification charts" },
    ],
  },
  {
    name: "Data Integration",
    items: [
      { title: "Pandas-based data processing" },
      { title: "CSV/Excel import capabilities" },
      { title: "WMS/ERP data compatibility" },
      { title: "Clean export formats" },
      { title: "Python ecosystem integration" },
    ],
  },
];

const gallery = [
  { title: "Data Analysis Interface", src: "/images/software/warehousr/data-analysis.jpg", alt: "Warehousr data analysis interface" },
  { title: "Visualization Dashboard", src: "/images/software/warehousr/visualization-dashboard.jpg", alt: "Interactive warehouse data visualization" },
  { title: "GitHub Repository", src: "/images/software/warehousr/github-repo.jpg", alt: "Open source GitHub repository" }
];

const useCases = [
  "Supply chain professionals analyzing operational performance",
  "Students and researchers studying warehouse operations",
  "Consultants diagnosing client facility inefficiencies",
  "Engineers optimizing layouts and processes",
  "Analysts turning raw data into actionable insights",
];

export default function Page() {
  return (
    <SolutionPage
      title="Warehousr"
      description="Open-source tools for warehouse analytics and diagnostics. Warehouses generate a wealth of operational data - every transaction, every movement, every SKU. Yet too often, decisions are still made using rules of thumb or oversimplified ratios. We built Warehousr to change that."
      benefits={benefits}
      steps={steps}
      options={options}
      gallery={gallery}
      useCases={useCases}
      brochureCta={{
        blurb: "A contribution from Intralog. We believe in data-driven design and open-source progress. Warehousr is our contribution back to the community.",
        buttonText: "View on GitHub",
        href: "https://github.com/intralog/warehousr",
      }}
      cta={{
        title: "Get started on GitHub",
        body: "Clone the repo, explore the docs, and start diagnosing your warehouse today. It's free, open-source, and built by warehouse engineers for warehouse professionals.",
        buttonText: "Start analyzing your warehouse",
        href: "https://github.com/intralog/warehousr",
      }}
    />
  );
}