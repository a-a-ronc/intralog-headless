
import SolutionPage from "@/components/SolutionPage";

export const metadata = { title: "Store More in Less Space | Intralog" };

const benefits = [
  { title: "Maximize vertical space", body: "Utilize ceiling height with VLMs, pallet shuttles, and multi‑tier racking systems up to 40+ feet." },
  { title: "High‑density configurations", body: "Store 3‑10× more inventory per square foot versus traditional selective racking." },
  { title: "Flexible storage types", body: "Combine pallets, cases, and small parts in integrated high‑density systems." },
  { title: "Reduce facility costs", body: "Avoid costly building expansions or additional lease space with smart storage design." },
  { title: "Optimize picking paths", body: "Goods‑to‑person systems eliminate travel time while maximizing storage density." },
  { title: "Climate control efficiency", body: "Smaller footprints reduce HVAC costs, especially critical in cold storage applications." },
];

const steps = [
  { step: 1, title: "Space & SKU analysis", body: "Analyze current utilization, SKU dimensions, and velocity to identify density opportunities." },
  { step: 2, title: "System selection", body: "Choose optimal mix of VLMs, pallet shuttles, multi‑tier systems based on inventory profile." },
  { step: 3, title: "Layout optimization", body: "Design integrated system that maximizes cubic utilization while maintaining access and safety." },
  { step: 4, title: "Implementation", body: "Install and commission high‑density storage with minimal operational disruption." },
];

const useCases = [
  "Cold storage: maximize expensive refrigerated space with shuttle systems",
  "Urban distribution: overcome high real estate costs with vertical storage",
  "Manufacturing: store more components and finished goods in limited factory space",
  "E‑commerce: handle growing SKU counts without facility expansion",
  "Pharmaceutical: secure, compliant storage for high‑value inventory",
];

export default function Page() {
  return (
    <SolutionPage
      title="Store More in Less Space"
      description="Maximize storage density with vertical lift modules, pallet shuttles, and multi‑tier systems that utilize every cubic foot efficiently."
      benefits={benefits}
      steps={steps}
      useCases={useCases}
      cta={{
        title: "Ready to maximize your storage density?",
        body: "We'll analyze your space and inventory to design solutions that dramatically increase storage capacity.",
        buttonText: "Get density analysis",
        href: "/contact",
      }}
    />
  );
}
