
import { mkdirSync, writeFileSync, existsSync } from "node:fs";
import { dirname } from "node:path";

const pages = [
  // DESIGN-BUILD
  { path: "app/design-build/our-approach/page.tsx", title: "Our Approach", group: "Design-Build" },

  // SOLUTIONS — BY FUNCTION
  { path: "app/solutions/by-function/store-more-in-less-space/page.tsx", title: "Store More in Less Space", group: "Solutions · By Function" },
  { path: "app/solutions/by-function/move-product-efficiently/page.tsx", title: "Move Product Efficiently", group: "Solutions · By Function" },
  { path: "app/solutions/by-function/pick-and-pack-faster/page.tsx", title: "Pick & Pack Faster", group: "Solutions · By Function" },
  { path: "app/solutions/by-function/fulfill-orders-accurately/page.tsx", title: "Fulfill Orders Accurately", group: "Solutions · By Function" },

  // SOLUTIONS — BY TECHNOLOGY
  { path: "app/solutions/by-technology/conveyor-and-sortation/page.tsx", title: "Conveyor & Sortation", group: "Solutions · By Technology" },
  { path: "app/solutions/by-technology/goods-to-person-vlms/page.tsx", title: "Goods-to-Person / VLMs", group: "Solutions · By Technology" },
  { path: "app/solutions/by-technology/pallet-shuttle-systems/page.tsx", title: "Pallet Shuttle Systems", group: "Solutions · By Technology" },
  { path: "app/solutions/by-technology/print-and-apply/page.tsx", title: "Print & Apply", group: "Solutions · By Technology" },
  { path: "app/solutions/by-technology/palletizing-and-de-palletizing/page.tsx", title: "Palletizing / De-Palletizing", group: "Solutions · By Technology" },
  { path: "app/solutions/by-technology/conventional-storage-systems/page.tsx", title: "Conventional Storage Systems", group: "Solutions · By Technology" },

  // SOLUTIONS — BY INDUSTRY
  { path: "app/solutions/by-industry/aerospace-and-defense/page.tsx", title: "Aerospace & Defense", group: "Solutions · By Industry" },
  { path: "app/solutions/by-industry/cold-storage-warehousing/page.tsx", title: "Cold Storage Warehousing", group: "Solutions · By Industry" },
  { path: "app/solutions/by-industry/food-and-beverage/page.tsx", title: "Food & Beverage", group: "Solutions · By Industry" },
  { path: "app/solutions/by-industry/industrial-distribution/page.tsx", title: "Industrial Distribution", group: "Solutions · By Industry" },
  { path: "app/solutions/by-industry/manufacturing/page.tsx", title: "Manufacturing", group: "Solutions · By Industry" },
  { path: "app/solutions/by-industry/retail-and-ecommerce/page.tsx", title: "Retail & E-commerce", group: "Solutions · By Industry" },
  { path: "app/solutions/by-industry/third-party-logistics/page.tsx", title: "Third Party Logistics (3PL)", group: "Solutions · By Industry" },

  // SERVICES — ENGINEERING & DESIGN
  { path: "app/services/engineering-and-design/industrial-real-estate-evaluation/page.tsx", title: "Industrial Real Estate Evaluation", group: "Services · Engineering & Design" },
  { path: "app/services/engineering-and-design/data-analysis-and-system-design/page.tsx", title: "Data Analysis & System Design", group: "Services · Engineering & Design" },
  { path: "app/services/engineering-and-design/simulation-and-emulation/page.tsx", title: "Simulation & Emulation", group: "Services · Engineering & Design" },

  // SERVICES — IMPLEMENTATION
  { path: "app/services/implementation/project-management/page.tsx", title: "Project Management", group: "Services · Implementation" },
  { path: "app/services/implementation/code-compliance-and-permits/page.tsx", title: "Code Compliance & Permits", group: "Services · Implementation" },
  { path: "app/services/implementation/installation/page.tsx", title: "Installation", group: "Services · Implementation" },
  { path: "app/services/implementation/commissioning-and-training/page.tsx", title: "Commissioning & Training", group: "Services · Implementation" },

  // RESOURCES
  { path: "app/resources/project-spotlights/page.tsx", title: "Project Spotlights", group: "Resources" },
  { path: "app/resources/blog/page.tsx", title: "Blog", group: "Resources" },
  { path: "app/resources/videos/page.tsx", title: "Videos", group: "Resources" },
];

const tpl = ({ title, group }) => `import SolutionPage from "@/components/SolutionPage";

export const metadata = { title: "${title} | Intralog" };

export default function Page() {
  return (
    <SolutionPage
      title="${title}"
      description="Replace with a sharp, outcomes-focused description that speaks to ROI, throughput, accuracy, or labor reduction."
      benefits={[
        { title: "Proven Results", body: "Short proof point or stat that builds confidence." },
        { title: "Low Risk, High ROI", body: "Address common objections with specific benefits." },
        { title: "Fast Time-to-Value", body: "Typical timeline or quick win that reduces decision friction." }
      ]}
      steps={[
        { step: 1, title: "Assessment", body: "Replace with real process step." },
        { step: 2, title: "Design", body: "Replace with real process step." },
        { step: 3, title: "Implementation", body: "Replace with real process step." },
        { step: 4, title: "Optimization", body: "Replace with real process step." }
      ]}
      useCases={[
        "Replace with specific industry or use case",
        "Replace with specific workflow or constraint",
        "Replace with specific operational challenge"
      ]}
      cta={{
        title: "Ready to explore ${title.toLowerCase()}?",
        body: "We'll analyze your specific requirements and design a solution that delivers measurable ROI.",
        buttonText: "Talk with an engineer",
        href: "/contact"
      }}
    />
  );
}
`;

function ensureDir(p) {
  const dir = dirname(p);
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
}

let created = 0;
for (const { path, title, group } of pages) {
  if (existsSync(path)) {
    console.log("skip", path);
    continue;
  }
  ensureDir(path);
  writeFileSync(path, tpl({ title, group }), "utf8");
  console.log("created", path);
  created++;
}
console.log("done. files created:", created);
