import Link from "next/link";

const navItems = [
  { name: "Product", href: "/features" },
  { name: "Customer Stories", href: "/about" },
  { name: "Resources", href: "/contact" },
  { name: "Pricing", href: "/pricing" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-[rgba(253,251,247,0.92)] backdrop-blur-xl border-b border-zinc-100">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-zinc-200 bg-white text-sm font-semibold tracking-tight text-zinc-900">
            SA
          </div>
          <div className="flex flex-col">
            <Link
              href="/"
              className="text-xl font-semibold tracking-tight text-zinc-900"
            >
              SentiMax
            </Link>
            <span className="text-xs uppercase tracking-[0.2em] text-zinc-500">
              Signal intelligence
            </span>
          </div>
        </div>

        <nav className="hidden items-center gap-8 text-sm font-medium text-zinc-600 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="transition-colors hover:text-zinc-900"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <span className="hidden rounded-full border border-zinc-200 px-4 py-2 text-xs font-medium text-zinc-500 sm:inline-flex">
            hello@sentimax.ai
          </span>
          <Link
            href="/register"
            className="rounded-full border border-zinc-900 px-5 py-2 text-sm font-semibold text-zinc-900 transition-colors hover:bg-zinc-900 hover:text-white"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}
