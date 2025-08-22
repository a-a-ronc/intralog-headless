
// app/solutions/conveyor/page.tsx
import SolutionPage from "@/components/SolutionPage";

export const metadata = { title: "Conveyor & Sortation Systems | Intralog" };

const benefits = [
  { title: "High-throughput processing", body: "Move thousands of packages per hour with automated conveyor lines and sortation systems." },
  { title: "Flexible routing & diverting", body: "Direct items to multiple destinations with pop-up transfers, push diverters, and merge points." },
  { title: "Reduce labor costs", body: "Automate material flow between zones, reducing manual cart pushing and walking." },
  { title: "Scalable & modular design", body: "Add sections, zones, and sortation points as your operation grows." },
  { title: "Integration-ready", body: "Connect with WMS, WCS, and automated equipment for seamless data flow." },
  { title: "Minimize damage & errors", body: "Controlled transport reduces handling damage and misdirected items." },
  { title: "Real-time tracking", body: "Monitor item location and flow rates with integrated sensors and controls." },
  { title: "Energy efficient", body: "Modern motors and zone controls minimize power consumption during operation." },
];

const steps = [
  { step: 1, title: "Item induction", body: "Products enter the conveyor system via manual placement or automated feeders." },
  { step: 2, title: "Transport & routing", body: "Conveyor belt moves items while scanners read barcodes for routing decisions." },
  { step: 3, title: "Sortation decision", body: "Control system directs items to appropriate lanes via diverters or pop-ups." },
  { step: 4, title: "Destination delivery", body: "Items arrive at designated zones for packing, shipping, or further processing." },
];

const options = [
  {
    name: "Conveyor Types",
    items: [
      { title: "Belt Conveyor" },
      { title: "Roller Conveyor" },
      { title: "Chain Conveyor" },
      { title: "Slat Conveyor" },
    ],
  },
  {
    name: "Sortation Methods",
    items: [
      { title: "Push Diverter" },
      { title: "Pop-up Transfer" },
      { title: "Sliding Shoe Sorter" },
      { title: "Tilt Tray Sorter" },
    ],
  },
  {
    name: "Control & Tracking",
    items: [
      { title: "Barcode Scanners" },
      { title: "RFID Readers" },
      { title: "Photo Eyes" },
      { title: "Weight Scales" },
    ],
  },
  {
    name: "Safety & Access",
    items: [
      { title: "Light Curtains" },
      { title: "Emergency Stops" },
      { title: "Guard Rails" },
      { title: "Access Gates" },
    ],
  },
];

const gallery = [
  { title: "High-speed sortation", src: "/images/solutions/conveyor/sortation.jpg" },
  { title: "Multi-level conveyor", src: "/images/solutions/conveyor/multi-level.jpg" },
  { title: "Automated induction", src: "/images/solutions/conveyor/induction.jpg" },
  { title: "Pack station integration", src: "/images/solutions/conveyor/pack-station.jpg" },
];

const useCases = [
  "E-commerce fulfillment: high-volume order processing and shipping",
  "Distribution centers: cross-docking and zone-to-zone transport",
  "Manufacturing: work-in-process movement and finished goods handling",
  "Postal & parcel: automated sorting by destination and service level",
  "Retail: store replenishment and returns processing",
];

export default function Page() {
  return (
    <SolutionPage
      title="Conveyor & Sortation Systems"
      description="Automated material handling that moves products efficiently through your facility—from simple transport to high-speed sortation for order fulfillment and distribution."
      videos={[
        { url: "https://www.youtube.com/embed/dQw4w9WgXcQ", title: "Conveyor System Overview" },
      ]}
      benefits={benefits}
      steps={steps}
      options={options}
      gallery={gallery}
      useCases={useCases}
      brochureCta={{
        blurb: "Want detailed conveyor specifications and layouts? Share your email for our complete systems guide.",
        buttonText: "Request brochure",
        href: "/contact",
      }}
      cta={{
        title: "Ready to design a conveyor system for your facility?",
        body: "We'll map your material flow, size the system, and specify the right conveyor types and sortation methods for your throughput requirements.",
        buttonText: "Talk with an engineer",
        href: "/contact",
      }}
    />
  );
}
