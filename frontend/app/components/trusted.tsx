const logos = [
  "Heirloom",
  "Seamless",
  "Northwind",
  "Aster",
  "Lanova",
  "Cotton & Co",
];

export default function TrustedSection() {
  return (
    <section className="border-y border-zinc-100 bg-white/70">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-10 px-4 py-10 text-xs font-semibold tracking-[0.4em] text-zinc-400">
        {logos.map((logo) => (
          <span key={logo} className="uppercase">
            {logo}
          </span>
        ))}
      </div>
    </section>
  );
}
