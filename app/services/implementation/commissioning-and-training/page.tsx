// app/services/implementation/commissioning-and-training/page.tsx
import SolutionPage from "@/components/SolutionPage";
import { demoSolutionImages } from "@/lib/demo";

export const metadata = { title: "Commissioning & Training | Intralog" };

const benefits = [
  { title: "Fast, confident ramp", body: "Structured SAT, performance tests, and operator sign-offs for a clean go-live." },
  { title: "Reliable operation", body: "Alarm handling, recovery guides, and spare kits reduce downtime." },
  { title: "Knowledge transfer", body: "Train-the-trainer programs and SOPs anchor long-term performance." },
  { title: "Measured success", body: "KPIs for throughput, accuracy, and utilization tied to acceptance criteria." },
];

const steps = [
  { step: 1, title: "SAT & IO verification", body: "Device checks, safety circuits, and functional sequencing." },
  { step: 2, title: "Performance & stress tests", body: "Peak scenarios, fault injection, and recovery drills." },
  { step: 3, title: "Training & SOPs", body: "Operator/maintenance training, recovery cards, and videos." },
  { step: 4, title: "Handover & support", body: "As-builts, spares, warranty terms, and early-life support plan." },
];

const options = [
  {
    name: "Documentation & Training",
    items: [
      { title: "SOPs, troubleshooting, and recovery guides" },
      { title: "PM schedules, parts lists, and lubrication charts" },
      { title: "Operator & maintenance certification checklists" },
      { title: "Video modules and quick-reference cards" },
    ],
  },
];

const gallery = demoSolutionImages.servicesCx ?? [
  { src: "/images/services/cx/io-checks.jpg", alt: "I/O and safety checks" },
  { src: "/images/services/cx/training.jpg", alt: "Operator training" },
  { src: "/images/services/cx/throughput-test.jpg", alt: "Throughput and stress testing" },
];

const useCases = [
  "New sorter line with staged go-live",
  "G2P station ramp with UPH targets",
  "Palletizer cell SAT and safety validation",
];

export default function Page() {
  return (
    <SolutionPage
      title="Commissioning & Training"
      description="Structured startup with SAT, performance testing, and operator/maintenance training—plus SOPs and early-life support to lock in uptime."
      benefits={benefits}
      steps={steps}
      options={options}
      gallery={gallery}
      useCases={useCases}
      brochureCta={{ blurb: "Request our commissioning plan template.", buttonText: "Get the template", href: "/contact" }}
      cta={{ title: "Plan a clean go-live", body: "We’ll validate function and performance, train your team, and set up SOPs and support.", buttonText: "Talk with commissioning", href: "/contact" }}
    />
  );
}
