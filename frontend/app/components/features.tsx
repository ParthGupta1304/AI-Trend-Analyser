import { ReactNode } from "react";

const features: { title: string; description: string; icon: ReactNode }[] = [
  {
    title: "Unified sentiment",
    description:
      "Combine survey, support, and social signals in one clean timeline with smart clustering.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        className="h-6 w-6"
      >
        <path d="M5 12h14M12 5v14" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Human handoff",
    description:
      "Route critical conversations with context, suggested tone, and recommended next steps.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        className="h-6 w-6"
      >
        <path d="M5 7h14M5 12h10M5 17h6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Insight studio",
    description:
      "Drag-and-drop boards to share wins, risks, and live KPI movement with stakeholders.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        className="h-6 w-6"
      >
        <path d="M4 4h6v16H4zM14 9h6v11h-6z" />
      </svg>
    ),
  },
  {
    title: "Playbook automation",
    description:
      "Trigger personalized responses, workflows, and reporting across your stack instantly.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        className="h-6 w-6"
      >
        <path d="M4 8h16M4 16h16M8 4v4m0 8v4" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function FeaturesSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
            Platform
          </p>
          <h2 className="text-4xl font-semibold text-zinc-900">
            Signal clarity without another busy dashboard.
          </h2>
          <p className="text-lg text-zinc-600">
            Layer SentiMax on top of your support, social, and commerce stack to
            understand why customers convert (or churn) faster than your
            competitors.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-3xl border border-zinc-100 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-600/10 text-emerald-600">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-zinc-900">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm text-zinc-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
