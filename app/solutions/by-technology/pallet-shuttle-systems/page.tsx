
// app/solutions/by-technology/pallet-shuttle-systems/page.tsx
import SolutionPage from "@/components/SolutionPage";
import { demoSolutionImages } from "@/lib/demo";

export const metadata = { title: "Pallet Shuttle Systems | Intralog" };

const benefits = [
  { title: "High‑density storage", body: "Store up to 10× more pallets per square foot vs. selective racking with deep‑lane configurations." },
  { title: "FIFO or LIFO flexibility", body: "Configure for first‑in‑first‑out food safety or last‑in‑first‑out efficiency based on your inventory needs." },
  { title: "Reduced forklift traffic", body: "Shuttles move pallets within lanes while forklifts focus on loading/unloading, improving safety and cycle times." },
  { title: "Cold storage optimized", body: "Minimize door‑open time and energy loss with rapid pallet movements in freezer environments." },
  { title: "NFPA compliant", body: "Maintains proper flue space for sprinkler systems while maximizing storage density." },
  { title: "Scalable capacity", body: "Add lanes, levels, and shuttles as inventory grows without major structural changes." },
  { title: "Automated integration", body: "Interfaces with WMS/WCS for real‑time inventory tracking and automated shuttle dispatch." },
  { title: "Multi‑SKU capability", body: "Store different products in the same system with intelligent routing and inventory management." },
];

const steps = [
  { step: 1, title: "Pallet staging", body: "Forklift delivers pallets to shuttle input/output positions at lane entrances." },
  { step: 2, title: "Shuttle pickup", body: "Battery‑powered shuttle picks up pallet and travels into the lane to the designated storage position." },
  { step: 3, title: "Deep storage", body: "Shuttle deposits pallet in lane and can continue to move existing pallets deeper as needed." },
  { step: 4, title: "Retrieval & output", body: "When needed, shuttle brings requested pallet back to the lane entrance for forklift pickup." },
];

const options = [
  {
    name: "Shuttle Types",
    items: [
      { title: "Single‑Deep Shuttles" },
      { title: "Multi‑Deep Shuttles" },
      { title: "Four‑Directional Shuttles" },
      { title: "Temperature‑Rated (-40°F to +104°F)" },
    ],
  },
  {
    name: "Racking Systems",
    items: [
      { title: "Drive‑In Rack Conversion" },
      { title: "New Shuttle‑Optimized Racking" },
      { title: "Multi‑Level Configurations" },
      { title: "Earthquake & Seismic Rated" },
    ],
  },
  {
    name: "Control & Automation",
    items: [
      { title: "WMS Integration" },
      { title: "Shuttle Fleet Management" },
      { title: "Remote Monitoring" },
      { title: "Predictive Maintenance" },
    ],
  },
  {
    name: "Safety & Access",
    items: [
      { title: "Lane‑End Safety Gates" },
      { title: "Emergency Stop Systems" },
      { title: "Maintenance Walkways" },
      { title: "LED Status Indicators" },
    ],
  },
];

const gallery = demoSolutionImages.palletShuttles;

const useCases = [
  "Cold storage & freezer warehouses: high‑density storage with minimal door‑open time",
  "Food & beverage: FIFO rotation for date‑sensitive products and compliance",
  "Manufacturing: staging production materials and finished goods in limited space",
  "Third‑party logistics (3PL): maximizing storage for seasonal or overflow inventory",
  "Retail distribution: buffer storage and cross‑docking operations",
];

export default function Page() {
  return (
    <SolutionPage
      title="Pallet Shuttle Systems"
      description="Stow LoadMatic and semi‑automated pallet shuttles maximize storage density while maintaining selectivity—ideal for high‑volume SKUs and cold storage."
      videos={[
        { url: "https://www.youtube.com/embed/BF7HCTcsN2s?si=Ap3h-C9btFy_rTf0", title: "Stow LoadMatic Shuttle System"},
        { url: "https://www.youtube.com/embed/vZdz8M9c3AQ", title: "Four‑Directional Shuttle System" },
        { url: "https://www.youtube.com/embed/7j7c1P8Cx3E", title: "Cold Storage Shuttle Implementation" },
      ]}
      benefits={benefits}
      steps={steps}
      options={options}
      gallery={gallery}
      useCases={useCases}
      brochureCta={{
        blurb: "Want detailed shuttle specifications and ROI calculations? Share your contact info for our complete systems guide.",
        buttonText: "Request brochure",
        href: "/contact",
      }}
      cta={{
        title: "Ready to maximize your pallet storage density?",
        body: "We'll analyze your SKU velocity, space constraints, and throughput requirements to design the optimal shuttle configuration.",
        buttonText: "Talk with an engineer",
        href: "/contact",
      }}
    />
  );
}
