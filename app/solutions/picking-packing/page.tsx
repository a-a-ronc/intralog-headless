
// app/solutions/picking-packing/page.tsx
import SolutionPage from "@/components/SolutionPage";
import { demoSolutionImages } from "@/lib/demo";

export const metadata = { title: "Picking & Packing | Intralog" };

const benefits = [
  { title: "Increase pick rates", body: "Goods-to-person systems and optimized workflows achieve 300+ lines per hour per operator." },
  { title: "Reduce picking errors", body: "Pick-to-light, voice systems, and vision guidance cut error rates to less than 0.1%." },
  { title: "Ergonomic workstations", body: "Height-adjustable stations and automated material presentation reduce worker fatigue and injuries." },
  { title: "Flexible order profiles", body: "Handle single-item orders, multi-item batches, and complex kitting operations with the same system." },
  { title: "Real-time inventory", body: "Integrated WMS provides accurate stock levels and optimized pick paths for maximum efficiency." },
  { title: "Scalable throughput", body: "Add workstations and automation modules as volume grows without major system redesign." },
  { title: "Quality control integration", body: "Built-in checkweighing, dimensioning, and photo capture ensure shipping accuracy." },
  { title: "Packing optimization", body: "Automated carton selection and void fill minimize shipping costs and damage rates." },
];

const steps = [
  { step: 1, title: "Order release", body: "WMS releases orders to picking zones based on SKU velocity and workstation capacity." },
  { step: 2, title: "Pick guidance", body: "Light-directed or voice-guided systems direct operators to exact pick locations with quantities." },
  { step: 3, title: "Quality verification", body: "Scan verification, weight checks, and photo capture confirm accurate picks before packing." },
  { step: 4, title: "Pack & ship", body: "Automated carton sizing, labeling, and sortation route completed orders to shipping." },
];

const options = [
  {
    name: "Pick Technologies",
    items: [
      { title: "Pick-to-Light Systems" },
      { title: "Voice-Directed Picking" },
      { title: "Vision-Guided Picking" },
      { title: "RF/Barcode Scanning" },
    ],
  },
  {
    name: "Automation Level",
    items: [
      { title: "Goods-to-Person (G2P)" },
      { title: "Automated Storage Retrieval" },
      { title: "Collaborative Robots" },
      { title: "Conveyor Integration" },
    ],
  },
  {
    name: "Packing Solutions",
    items: [
      { title: "Automated Carton Selection" },
      { title: "Void Fill Systems" },
      { title: "Print & Apply Labeling" },
      { title: "Checkweighing & DWS" },
    ],
  },
  {
    name: "Quality Control",
    items: [
      { title: "Vision Verification" },
      { title: "Weight Confirmation" },
      { title: "Barcode Validation" },
      { title: "Photo Documentation" },
    ],
  },
];

const gallery = [
  { title: "Pick-to-Light Workstation", src: "/images/solutions/vlm/bin-handling.jpg" },
  { title: "Automated Packing Line", src: "/images/solutions/conveyor/pack-station-integration.JPG" },
  { title: "Vision-Guided Picking", src: "/images/solutions/robotics/vision-picking.jpg" },
];

const useCases = [
  "E-commerce fulfillment: high-velocity picking and same-day shipping requirements",
  "Retail distribution: store replenishment and omnichannel order fulfillment", 
  "Healthcare & pharma: temperature-controlled picking with lot tracking and expiration management",
  "Manufacturing: kitting and sub-assembly operations with precise component control",
  "3PL operations: multi-client picking with flexible workflows and billing accuracy",
];

export default function Page() {
  return (
    <SolutionPage
      title="Picking & Packing"
      description="Optimized picking and packing systems that combine ergonomic workstations, automated guidance, and quality controls to maximize accuracy and throughput while reducing labor costs."
      videos={[
        { url: "https://www.youtube.com/embed/dQw4w9WgXcQ", title: "Automated Picking System" },
      ]}
      benefits={benefits}
      steps={steps}
      options={options}
      gallery={gallery}
      useCases={useCases}
      brochureCta={{
        blurb: "Want detailed picking and packing system specifications? Download our complete operations guide.",
        buttonText: "Request brochure",
        href: "/contact",
      }}
      cta={{
        title: "Ready to optimize your picking operations?",
        body: "We'll analyze your order profiles, SKU velocity, and space constraints to design the optimal picking and packing solution for your operation.",
        buttonText: "Talk with an engineer",
        href: "/contact",
      }}
    />
  );
}
