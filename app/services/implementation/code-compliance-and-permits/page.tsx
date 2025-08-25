// app/services/implementation/code-compliance-and-permits/page.tsx
import SolutionPage from "@/components/SolutionPage";
import { demoSolutionImages } from "@/lib/demo";

export const metadata = { title: "Code Compliance & Permits | Intralog" };

const benefits = [
  { title: "Avoid redesign & delays", body: "Get flue spacing, ESFR/CMDA, egress, and seismic right before submittal." },
  { title: "Clear AHJ path", body: "Stamped drawings, spec sheets, and narratives that answer reviewer questions." },
  { title: "Inspection-ready", body: "Pre-inspection checks, signage/labels, and as-builts aligned to permit set." },
  { title: "Multi-jurisdiction experience", body: "From local AHJs to high-seismic and cold storage nuances." },
];

const steps = [
  { step: 1, title: "Code review", body: "Fire, life safety, structural/seismic, electrical, and accessibility." },
  { step: 2, title: "Permit set", body: "Stamped drawings, calc packages, and equipment docs." },
  { step: 3, title: "Submittal & response", body: "RFI tracking, comments resolution, and resubmittals." },
  { step: 4, title: "Inspection & closeout", body: "As-builts, load plaques, labels, and O&M documentation." },
];

const options = [
  {
    name: "Permit Package",
    items: [
      { title: "Rack calcs (MH16.1/MH26.2) & anchorage" },
      { title: "Flue spacing & ESFR/CMDA assumptions" },
      { title: "Egress paths & signage" },
      { title: "Electrical/controls one-lines and load summary" },
    ],
  },
];

const gallery = demoSolutionImages.servicesPermits ?? [
  { src: "/images/services/permits/stamped.jpg", alt: "Stamped drawings" },
  { src: "/images/services/permits/inspection.jpg", alt: "Inspection walk" },
  { src: "/images/services/permits/signage.jpg", alt: "Safety signage & labels" },
];

const useCases = [
  "High-bay rack permit with ESFR",
  "Freezer retrofit with pallet shuttle",
  "Conveyor & sorter permit package in active DC",
];

export default function Page() {
  return (
    <SolutionPage
      title="Code Compliance & Permits"
      description="Code reviews and stamped permit sets for rack, conveyors, mezzanines, and automation—coordinated with your AHJ to keep schedules intact."
      benefits={benefits}
      steps={steps}
      options={options}
      gallery={gallery}
      useCases={useCases}
      brochureCta={{ blurb: "Request our permit checklist and example drawings.", buttonText: "Get the checklist", href: "/contact" }}
      cta={{ title: "Prepare a clean submittal", body: "We’ll assemble a complete permit package and manage AHJ interactions through approval.", buttonText: "Talk with permitting", href: "/contact" }}
    />
  );
}
