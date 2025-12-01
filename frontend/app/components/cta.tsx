import Link from "next/link";

export default function CtaSection() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-20">
      <div className="rounded-4xl border border-zinc-100 bg-white p-10 text-center shadow-[0_20px_80px_rgba(15,23,42,0.08)]">
        <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
          Ready when you are
        </p>
        <h3 className="mt-4 text-3xl font-semibold text-zinc-900">
          Ship your first insight deck in days, not months.
        </h3>
        <p className="mt-3 text-zinc-600">
          Start with a free workspace, invite your team, and keep your stack
          exactly as it is.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/pricing"
            className="rounded-full bg-zinc-900 px-8 py-3 text-sm font-semibold text-white transition hover:bg-zinc-700"
          >
            Create workspace
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-zinc-300 px-8 py-3 text-sm font-semibold text-zinc-900 transition hover:border-zinc-500"
          >
            Talk to an expert
          </Link>
        </div>
      </div>
    </section>
  );
}
