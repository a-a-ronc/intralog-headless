
// app/resources/project-spotlights/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Project Spotlights | Intralog",
  description: "Real-world examples of our Design-Build process in action across different industries."
};

const spotlights = [
  {
    id: "retailer-expansion",
    title: "Major Retailer DC Expansion",
    industry: "Retail & Ecommerce",
    challenge: "300% volume growth with 50% space constraint",
    solution: "Goods-to-person VLMs + DensityPro optimization",
    results: "2.5x throughput increase, 40% labor reduction",
    image: "/images/showcase/demo-1.jpg"
  },
  {
    id: "cold-storage-automation", 
    title: "Cold Storage Automation",
    industry: "Food & Beverage",
    challenge: "Sub-zero environment automation compliance",
    solution: "Automated storage + Painless Permit for NFPA compliance",
    results: "6 months faster permitting, 99.8% accuracy",
    image: "/images/showcase/demo-2.jpg"
  },
  {
    id: "manufacturer-modernization",
    title: "Manufacturer Modernization", 
    industry: "Manufacturing",
    challenge: "Legacy warehouse limiting production scale",
    solution: "Conveyor integration + slotting optimization",
    results: "15% throughput lift, eliminated bottlenecks",
    image: "/images/showcase/demo-3.jpg"
  }
];

const Card = ({ children }: { children: React.ReactNode }) => (
  <div className="rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] p-6 shadow-sm hover:shadow-md transition-shadow">
    {children}
  </div>
);

export default function ProjectSpotlightsPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <header className="mb-10">
        <p className="text-sm uppercase tracking-wider text-[rgb(var(--muted-fg))]">Resources</p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight text-[rgb(var(--fg))]">Project Spotlights</h1>
        <p className="mt-3 text-[rgb(var(--muted-fg))]">
          Real-world examples of our Design-Build process in action. See how we've helped companies optimize their operations across different industries.
        </p>
      </header>

      <section className="grid gap-6 lg:grid-cols-3 sm:grid-cols-2">
        {spotlights.map((spotlight) => (
          <Card key={spotlight.id}>
            <div className="aspect-video rounded-lg overflow-hidden mb-4">
              <img 
                src={spotlight.image} 
                alt={spotlight.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-3">
              <div>
                <span className="text-xs uppercase tracking-wider text-[rgb(var(--muted-fg))] font-medium">
                  {spotlight.industry}
                </span>
                <h3 className="text-xl font-semibold text-[rgb(var(--fg))] mt-1">
                  {spotlight.title}
                </h3>
              </div>
              
              <div className="space-y-2">
                <div>
                  <span className="font-medium text-[rgb(var(--fg))]">Challenge:</span>
                  <p className="text-sm text-[rgb(var(--muted-fg))]">{spotlight.challenge}</p>
                </div>
                
                <div>
                  <span className="font-medium text-[rgb(var(--fg))]">Solution:</span>
                  <p className="text-sm text-[rgb(var(--muted-fg))]">{spotlight.solution}</p>
                </div>
                
                <div>
                  <span className="font-medium text-[rgb(var(--fg))]">Results:</span>
                  <p className="text-sm text-[rgb(var(--muted-fg))]">{spotlight.results}</p>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </section>

      <footer className="mt-12 text-center">
        <h3 className="text-xl font-semibold text-[rgb(var(--fg))] mb-3">
          Ready to optimize your operations?
        </h3>
        <p className="text-[rgb(var(--muted-fg))] mb-6">
          Share your data and constraints—we'll build a custom solution.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-xl bg-black px-6 py-3 text-white font-medium hover:bg-zinc-800"
        >
          Start Your Project
        </Link>
      </footer>
    </main>
  );
}
