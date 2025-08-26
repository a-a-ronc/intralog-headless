
import type { Metadata } from "next";
import Link from "next/link";
import CaseStudyCard from "@/components/CaseStudyCard";
import { wpFetch } from "@/lib/wp";
import { CASE_STUDIES_QUERY } from "@/lib/queries";

export const metadata: Metadata = {
  title: "Resources | Case Studies, Videos & Blog",
  description:
    "Project spotlights, technical videos, and insights from our material handling and automation experts.",
};

export default async function ResourcesPage() {
  let caseStudies: any[] = [];
  try {
    const cs = await wpFetch<{ caseStudies: { nodes: any[] } }>(CASE_STUDIES_QUERY, { first: 6 });
    caseStudies = cs?.caseStudies?.nodes || [];
  } catch {
    // Use fallback demo data if WordPress fetch fails
    caseStudies = [
      {
        id: "demo-1",
        slug: "dense-storage-upfit",
        title: "Dense Storage Upfit",
        featuredImage: { node: { sourceUrl: "/images/showcase/demo-1.jpg", altText: "Dense storage solution" } },
        excerpt: "Consolidated SKUs and increased pick density with a compact layout.",
        uri: "/case-studies/dense-storage-upfit",
      },
      {
        id: "demo-2",
        slug: "amr-sortation-pilot",
        title: "AMR Sortation Pilot",
        featuredImage: { node: { sourceUrl: "/images/showcase/demo-2.jpg", altText: "AMR sortation system" } },
        excerpt: "Flexible, track‑free sortation to support seasonal peaks.",
        uri: "/case-studies/amr-sortation-pilot",
      },
      {
        id: "demo-3",
        slug: "cold-storage-reflow",
        title: "Cold Storage Reflow",
        featuredImage: { node: { sourceUrl: "/images/showcase/demo-3.jpg", altText: "Cold storage facility" } },
        excerpt: "Temperature‑controlled picking flow with ergonomic stations.",
        uri: "/case-studies/cold-storage-reflow",
      }
    ];
  }

  const videoResources = [
    { title: "Stow Pallet Shuttle System Overview", href: "/resources/videos#stow-shuttle" },
    { title: "Modula VLM Integration Demo", href: "/resources/videos#modula-demo" },
    { title: "Conveyor System Design Principles", href: "/resources/videos#conveyor-design" },
    { title: "AMR Sortation in Action", href: "/resources/videos#amr-sortation" },
  ];

  const blogPosts = [
    { title: "Optimizing Warehouse Slotting with Data", href: "/resources/blog/warehouse-slotting-optimization" },
    { title: "NFPA Compliance for Automated Systems", href: "/resources/blog/nfpa-compliance-automation" },
    { title: "ROI Calculation for Material Handling", href: "/resources/blog/roi-calculation-material-handling" },
    { title: "Cold Storage Design Considerations", href: "/resources/blog/cold-storage-design" },
  ];

  return (
    <main className="bg-[rgb(var(--bg))]">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1 style={{ fontSize: 'clamp(1.75rem, 5vw, 3rem)', lineHeight: '1.2', textAlign: 'center' }}>
            Resources
          </h1>
          <p style={{ 
            fontSize: 'clamp(1rem, 2.5vw, 1.25rem)', 
            maxWidth: '800px', 
            margin: '1rem auto', 
            textAlign: 'center',
            lineHeight: '1.6'
          }}>
            Project spotlights, technical videos, and insights from our material handling and automation experts.
          </p>
          <div style={{ marginTop: '2rem', textAlign: 'center' }}>
            <Link className="btn" href="/contact" style={{ fontSize: 'clamp(0.9rem, 2vw, 1.1rem)' }}>
              Get Expert Advice
            </Link>
          </div>
        </div>
      </section>

      {/* Project Spotlights Section */}
      <section className="section">
        <div className="container">
          <div className="mb-8 flex items-baseline justify-between">
            <h2 className="text-2xl font-semibold text-[rgb(var(--fg))]">Project Spotlights</h2>
            <Link href="/case-studies" className="text-sm font-medium text-blue-600 hover:text-blue-800">
              View all showcase →
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map(cs => <CaseStudyCard key={cs.id} cs={cs} />)}
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section className="section" style={{ background: 'rgb(var(--surface))' }}>
        <div className="container">
          <div className="mb-8 flex items-baseline justify-between">
            <h2 className="text-2xl font-semibold text-[rgb(var(--fg))]">Videos</h2>
            <Link href="/resources/videos" className="text-sm font-medium text-blue-600 hover:text-blue-800">
              View all videos →
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {videoResources.map((video) => (
              <Link
                key={video.href}
                href={video.href}
                className="block rounded-lg border border-[rgb(var(--border))] bg-[rgb(var(--card))] p-4 transition-all hover:shadow-md hover:ring-2 hover:ring-blue-500/20 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="font-medium text-[rgb(var(--fg))]">{video.title}</h3>
                  </div>
                  <svg className="ml-2 h-4 w-4 text-[rgb(var(--muted-fg))]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h1m4 0h1m-6-8h8a2 2 0 012 2v8a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2z" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="section">
        <div className="container">
          <div className="mb-8 flex items-baseline justify-between">
            <h2 className="text-2xl font-semibold text-[rgb(var(--fg))]">Blog & Insights</h2>
            <Link href="/resources/blog" className="text-sm font-medium text-blue-600 hover:text-blue-800">
              View all articles →
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {blogPosts.map((post) => (
              <Link
                key={post.href}
                href={post.href}
                className="block rounded-lg border border-[rgb(var(--border))] bg-[rgb(var(--card))] p-6 transition-all hover:shadow-md hover:ring-2 hover:ring-blue-500/20 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="font-medium text-[rgb(var(--fg))]">{post.title}</h3>
                  </div>
                  <svg className="ml-4 h-5 w-5 text-[rgb(var(--muted-fg))]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section" style={{ background: 'var(--brand-blue)', color: '#fff' }}>
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-semibold">Stay Updated</h2>
            <p className="mt-2 opacity-90">
              Get the latest insights on material handling automation, case studies, and industry trends.
            </p>
            <div className="mt-6">
              <Link 
                className="btn" 
                href="/contact" 
                style={{ 
                  background: '#fff', 
                  color: 'var(--brand-blue)',
                  fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
                  padding: 'clamp(0.75rem, 2vw, 1rem) clamp(1rem, 3vw, 1.5rem)'
                }}
              >
                Subscribe to updates
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
