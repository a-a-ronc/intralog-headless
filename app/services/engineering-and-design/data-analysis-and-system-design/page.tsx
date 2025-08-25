import SolutionPage from "@/components/SolutionPage";

export const metadata = { title: "Data Analysis & System Design | Intralog" };

export default function Page() {
  return (
    <SolutionPage
      title="Data Analysis & System Design"
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
        title: "Ready to explore data analysis & system design?",
        body: "We'll analyze your specific requirements and design a solution that delivers measurable ROI.",
        buttonText: "Talk with an engineer",
        href: "/contact"
      }}
    />
  );
}
