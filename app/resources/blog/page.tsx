
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog & Insights | Intralog",
  description: "Expert insights on warehouse automation, material handling, and operational optimization from our engineering team."
};

const blogPosts = [
  {
    id: "warehouse-slotting-optimization",
    title: "Optimizing Warehouse Slotting with Data",
    category: "Operations",
    publishDate: "December 15, 2024",
    readTime: "8 min read",
    excerpt: "Learn how data-driven slotting strategies can reduce travel time by 30% and increase picking efficiency in your warehouse operations.",
    content: "Modern warehouse slotting goes beyond ABC analysis. By combining order velocity, product affinity, and seasonal patterns, we can create dynamic slotting strategies that adapt to your business."
  },
  {
    id: "nfpa-compliance-automation",
    title: "NFPA Compliance for Automated Systems",
    category: "Compliance",
    publishDate: "December 8, 2024", 
    readTime: "12 min read",
    excerpt: "Navigate the complexities of NFPA 101 and 13 requirements for automated storage and retrieval systems in your facility.",
    content: "Automated systems introduce unique fire safety considerations. Understanding sprinkler coverage, egress requirements, and detection systems is crucial for compliant installations."
  },
  {
    id: "roi-calculation-material-handling",
    title: "ROI Calculation for Material Handling Equipment",
    category: "Business Case",
    publishDate: "November 28, 2024",
    readTime: "10 min read", 
    excerpt: "A comprehensive framework for calculating true ROI on material handling investments, including hidden costs and long-term benefits.",
    content: "Beyond initial equipment costs, successful ROI calculations must account for installation, training, maintenance, and opportunity costs of delayed implementation."
  },
  {
    id: "cold-storage-design",
    title: "Cold Storage Design Considerations",
    category: "Design",
    publishDate: "November 20, 2024",
    readTime: "15 min read",
    excerpt: "Essential factors for designing efficient cold storage operations, from equipment selection to energy optimization strategies.",
    content: "Temperature-controlled environments require specialized equipment ratings, insulation strategies, and workflow optimization to maintain efficiency while preserving product integrity."
  },
  {
    id: "conveyor-integration-patterns",
    title: "Modern Conveyor Integration Patterns",
    category: "Technology",
    publishDate: "November 12, 2024",
    readTime: "9 min read",
    excerpt: "Explore advanced conveyor integration techniques that seamlessly connect manual and automated processes in modern distribution centers.",
    content: "Today's conveyor systems serve as the nervous system of automated facilities, requiring careful consideration of control integration, zone management, and throughput balancing."
  },
  {
    id: "labor-optimization-automation",
    title: "Balancing Labor and Automation",
    category: "Strategy",
    publishDate: "November 5, 2024",
    readTime: "11 min read",
    excerpt: "Strategic approaches to implementing automation while optimizing your existing workforce and maintaining operational flexibility.", 
    content: "Successful automation implementations augment rather than replace human capabilities, creating hybrid workflows that leverage the strengths of both people and technology."
  }
];

const Card = ({ children }: { children: React.ReactNode }) => (
  <div className="rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] p-6 shadow-sm hover:shadow-md transition-shadow">
    {children}
  </div>
);

export default function BlogPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <header className="mb-10">
        <p className="text-sm uppercase tracking-wider text-[rgb(var(--muted-fg))]">Resources</p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight text-[rgb(var(--fg))]">Blog & Insights</h1>
        <p className="mt-3 text-[rgb(var(--muted-fg))]">
          Expert insights on warehouse automation, material handling, and operational optimization from our engineering team.
        </p>
      </header>

      <section className="grid gap-8 lg:grid-cols-2">
        {blogPosts.map((post) => (
          <Card key={post.id}>
            <div className="space-y-4">
              <div className="flex items-center justify-between text-sm">
                <span className="rounded-full bg-[rgb(var(--muted))] px-3 py-1 text-[rgb(var(--muted-fg))] font-medium">
                  {post.category}
                </span>
                <span className="text-[rgb(var(--muted-fg))]">{post.readTime}</span>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold text-[rgb(var(--fg))] mb-2">
                  {post.title}
                </h2>
                <p className="text-sm text-[rgb(var(--muted-fg))] mb-3">
                  Published {post.publishDate}
                </p>
                <p className="text-[rgb(var(--muted-fg))] leading-relaxed">
                  {post.excerpt}
                </p>
              </div>
              
              <div className="pt-2">
                <p className="text-sm text-[rgb(var(--muted-fg))] italic">
                  {post.content}
                </p>
              </div>
              
              <div className="pt-4 border-t border-[rgb(var(--border))]">
                <Link
                  href={`/resources/blog/${post.id}`}
                  className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800"
                >
                  Read full article
                  <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </Card>
        ))}
      </section>

      <aside className="mt-16">
        <Card>
          <div className="text-center">
            <h3 className="text-xl font-semibold text-[rgb(var(--fg))] mb-3">
              Subscribe to Our Newsletter
            </h3>
            <p className="text-[rgb(var(--muted-fg))] mb-6">
              Get the latest insights on warehouse automation, case studies, and industry trends delivered to your inbox.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-black px-6 py-3 text-white font-medium hover:bg-zinc-800"
            >
              Subscribe Now
            </Link>
          </div>
        </Card>
      </aside>

      <footer className="mt-12 text-center">
        <h3 className="text-xl font-semibold text-[rgb(var(--fg))] mb-3">
          Need specific guidance for your project?
        </h3>
        <p className="text-[rgb(var(--muted-fg))] mb-6">
          Our engineering team provides custom analysis and recommendations based on your operational data.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-xl bg-black px-6 py-3 text-white font-medium hover:bg-zinc-800"
        >
          Get Expert Consultation
        </Link>
      </footer>
    </main>
  );
}
