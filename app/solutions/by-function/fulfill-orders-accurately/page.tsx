
import SolutionPage from "@/components/SolutionPage";

export const metadata = { title: "Fulfill Orders Accurately | Intralog" };

const benefits = [
  { title: "Eliminate picking errors", body: "Guided picking with visual confirmation reduces errors to less than 0.01%." },
  { title: "Real‑time verification", body: "Barcode scanning and weight checks at each step prevent downstream issues." },
  { title: "Lot tracking & traceability", body: "Maintain complete chain of custody for regulated and high‑value products." },
  { title: "Automated quality control", body: "Vision systems and sensors detect damaged items before shipment." },
  { title: "Exception handling", body: "Clear workflows for handling shorts, overages, and damaged goods." },
  { title: "Audit trails", body: "Complete digital records for order accuracy analysis and continuous improvement." },
];

const steps = [
  { step: 1, title: "Order validation", body: "System validates order details, inventory availability, and special requirements." },
  { step: 2, title: "Guided picking", body: "Visual and audio cues guide pickers to exact items with quantity confirmation." },
  { step: 3, title: "Quality verification", body: "Multi‑point verification including scanning, weighing, and visual inspection." },
  { step: 4, title: "Shipping confirmation", body: "Final verification and labeling with complete order accuracy tracking." },
];

const useCases = [
  "Pharmaceutical distribution: regulatory compliance and patient safety requirements",
  "Food & beverage: lot tracking and expiration date management",
  "E‑commerce luxury goods: high‑value item security and quality assurance",
  "Automotive parts: critical component accuracy for production lines",
  "Medical device distribution: sterility and traceability requirements",
];

export default function Page() {
  return (
    <SolutionPage
      title="Fulfill Orders Accurately"
      description="Achieve near‑perfect order accuracy with guided picking, real‑time verification, and quality control systems that eliminate costly errors."
      benefits={benefits}
      steps={steps}
      useCases={useCases}
      cta={{
        title: "Ready to eliminate fulfillment errors?",
        body: "We'll design accuracy systems that meet your quality requirements and reduce costly returns and chargebacks.",
        buttonText: "Get accuracy assessment",
        href: "/contact",
      }}
    />
  );
}
