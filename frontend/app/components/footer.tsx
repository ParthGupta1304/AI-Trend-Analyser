import Link from "next/link";

const footerLinks = [
  { label: "Platform", href: "/features" },
  { label: "Security", href: "/about" },
  { label: "Docs", href: "/contact" },
  { label: "Pricing", href: "/pricing" },
];

export default function Footer() {
  return (
    <footer className="border-t border-zinc-100 bg-white/70">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 text-sm text-zinc-500 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} SentiMax. Crafted in New Delhi.</p>
        <div className="flex flex-wrap gap-6">
          {footerLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="transition hover:text-zinc-900"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
