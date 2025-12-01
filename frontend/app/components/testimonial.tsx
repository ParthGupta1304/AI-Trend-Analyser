export default function TestimonialSection() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-20">
      <div className="rounded-4xl border border-zinc-100 bg-zinc-900 text-white p-10 md:p-14">
        <p className="text-sm uppercase tracking-[0.3em] text-emerald-300">
          Customer story
        </p>
        <p className="mt-6 text-3xl leading-snug">
          “Within two weeks we uncovered three revenue leaks and rebuilt our
          response playbook. SentiMax delivers the kind of clarity we used to
          spend quarters assembling.”
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-zinc-400">
          <div>
            <p className="font-semibold text-white">Celia Brooks</p>
            <p>VP of CX, Rowan Collective</p>
          </div>
          <span className="hidden h-px flex-1 bg-zinc-700 md:block" />
          <p className="text-xs uppercase tracking-[0.4em]">+38% NPS</p>
          <p className="text-xs uppercase tracking-[0.4em]">24 markets</p>
        </div>
      </div>
    </section>
  );
}
