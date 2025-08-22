
// app/solutions/sortation/page.tsx
import SolutionPage from "@/components/SolutionPage";

export const metadata = { title: "Sortation | Intralog" };

const benefits = [
  { title: "High-speed processing", body: "Sort up to 10,000+ items per hour with automated diverting and routing systems." },
  { title: "Accurate destination routing", body: "Barcode scanning and weight verification ensure 99.9%+ sorting accuracy rates." },
  { title: "Flexible sorting criteria", body: "Route by destination, size, weight, priority, or custom business rules with real-time updates." },
  { title: "Reduce manual labor", body: "Eliminate manual sorting and reduce staffing requirements for distribution operations." },
  { title: "Scalable throughput", body: "Add sorting lanes and diverters to handle peak seasons and growing volumes." },
  { title: "Real-time visibility", body: "Track item progress and destination routing with comprehensive performance analytics." },
  { title: "Gentle product handling", body: "Controlled diverting mechanisms minimize damage to packages and products." },
  { title: "Space optimization", body: "Compact sortation systems maximize facility utilization with efficient layout designs." },
];

const steps = [
  { step: 1, title: "Item induction", body: "Products enter the sortation system via manual placement or automated feeding mechanisms." },
  { step: 2, title: "Data capture", body: "Barcode scanners and dimensioning systems capture routing data and package characteristics." },
  { step: 3, title: "Routing decision", body: "Control system determines destination lane based on sorting criteria and business rules." },
  { step: 4, title: "Automated diverting", body: "Diverting mechanisms route items to designated lanes for packing, shipping, or further processing." },
];

const options = [
  {
    name: "Sorter Types",
    items: [
      { title: "Sliding Shoe Sorter" },
      { title: "Tilt Tray Sorter" },
      { title: "Cross-belt Sorter" },
      { title: "Push Diverter" },
    ],
  },
  {
    name: "Diverting Methods",
    items: [
      { title: "Pop-up Transfers" },
      { title: "Paddle Diverters" },
      { title: "Pusher Systems" },
      { title: "Right-angle Transfers" },
    ],
  },
  {
    name: "Data Capture",
    items: [
      { title: "Barcode Scanners" },
      { title: "RFID Readers" },
      { title: "Weight Scales" },
      { title: "Dimensioning Systems" },
    ],
  },
  {
    name: "Control Features",
    items: [
      { title: "Route Optimization" },
      { title: "Exception Handling" },
      { title: "Performance Monitoring" },
      { title: "Maintenance Alerts" },
    ],
  },
];

const gallery = [
  { title: "Sliding shoe sorter", src: "/images/solutions/sortation/sliding-shoe.jpg" },
  { title: "Tilt tray system", src: "/images/solutions/sortation/tilt-tray.jpg" },
  { title: "Cross-belt sorter", src: "/images/solutions/sortation/cross-belt.jpg" },
  { title: "Diverter mechanisms", src: "/images/solutions/sortation/diverters.jpg" },
];

const useCases = [
  "E-commerce fulfillment: order sortation by shipping method and destination",
  "Postal and parcel: high-volume package sorting for delivery route optimization",
  "Retail distribution: store-specific sortation for replenishment and transfers",
  "Manufacturing: finished goods sorting for different distribution channels",
  "Returns processing: sorting returned items by condition and disposition",
];

export default function Page() {
  return (
    <SolutionPage
      title="Sortation"
      description="High-speed automated sortation systems that accurately route products to their destinations—from sliding shoe sorters to tilt trays, maximizing throughput while maintaining precise item handling."
      videos={[
        { url: "https://www.youtube.com/embed/dQw4w9WgXcQ", title: "High-Speed Sortation System" },
      ]}
      benefits={benefits}
      steps={steps}
      options={options}
      gallery={gallery}
      useCases={useCases}
      brochureCta={{
        blurb: "Need detailed sortation system specifications and capacity planning? Download our complete sortation guide.",
        buttonText: "Request brochure",
        href: "/contact",
      }}
      cta={{
        title: "Ready to implement high-speed sortation?",
        body: "We'll analyze your volume requirements, package mix, and destination patterns to design the optimal sortation solution for your operation.",
        buttonText: "Talk with an engineer",
        href: "/contact",
      }}
    />
  );
}
