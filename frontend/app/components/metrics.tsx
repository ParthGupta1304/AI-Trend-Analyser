const metrics = [
  {
    label: "Signals processed daily",
    value: "1.4M",
    detail: "Across chat, calls, and social",
  },
  {
    label: "Playbooks shipped",
    value: "320+",
    detail: "Tailored to your GTM stack",
  },
  {
    label: "Average ROI",
    value: "11x",
    detail: "Measured over the first quarter",
  },
];

export default function MetricsSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20">
      <div className="rounded-4xl border border-zinc-100 bg-white/90 p-10 shadow-[0_20px_80px_rgba(15,23,42,0.08)]">
        <div className="grid gap-8 md:grid-cols-3">
          {metrics.map((metric) => (
            <div key={metric.label} className="space-y-2">
              <p className="text-sm uppercase tracking-[0.3em] text-zinc-400">
                {metric.label}
              </p>
              <p className="text-4xl font-semibold text-zinc-900">
                {metric.value}
              </p>
              <p className="text-sm text-zinc-500">{metric.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
