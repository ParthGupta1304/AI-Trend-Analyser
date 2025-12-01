"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { playfair } from "../fonts";

const stats = [
  { label: "Lift in conversions", value: "+19%" },
  { label: "Response automation", value: "92%" },
  { label: "Time to insight", value: "2m" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-[#fdfbf7] to-white">
      <div className="pointer-events-none absolute -left-48 top-10 h-72 w-72 rounded-full bg-emerald-100 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-amber-100 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-20 md:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-8">
          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700">
            <span className="h-px w-8 bg-emerald-500" />
            4.8/5 on TrustPilot
          </p>

          <h1
            className={`${playfair.className} text-4xl leading-tight text-zinc-900 md:text-6xl`}
          >
            Boost buying intent with
            <span className="block text-zinc-900">
              {" "}
              clean customer intelligence.
            </span>
          </h1>

          <p className="text-lg leading-relaxed text-zinc-600">
            SentiMax distills every mention, call, and review into ready-to-use
            insights. Act faster with AI-powered tagging, prioritization, and
            automated responses that feel decidedly human.
          </p>

          <div className="flex flex-wrap gap-3">
            <button className="rounded-full bg-zinc-900 px-8 py-3 text-sm font-semibold text-white transition hover:bg-zinc-700">
              Get started — free
            </button>
            <button className="rounded-full border border-zinc-300 px-8 py-3 text-sm font-semibold text-zinc-900 transition hover:border-zinc-500">
              Book a live demo
            </button>
          </div>

          <div className="grid gap-6 pt-4 sm:grid-cols-3">
            {stats.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-zinc-100 bg-white/80 p-4 shadow-sm"
              >
                <p className="text-3xl font-semibold text-zinc-900">
                  {item.value}
                </p>
                <p className="text-sm text-zinc-500">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <Image
              src="/images/hero-sentiment.png"
              alt="SentiMax dashboard"
              width={720}
              height={540}
              priority
              className="w-full rounded-4xl border border-zinc-200 bg-white shadow-[0_40px_120px_rgba(15,23,42,0.12)]"
            />

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="absolute -right-6 top-10 rounded-3xl border border-emerald-100 bg-white/90 px-5 py-4 shadow-lg"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-emerald-600">
                sentiment
              </p>
              <p className="text-2xl font-semibold text-zinc-900">+85%</p>
              <p className="text-xs text-zinc-500">Overall customer mood</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="absolute -left-8 bottom-6 flex items-center gap-3 rounded-3xl border border-zinc-100 bg-white/95 px-5 py-4 shadow-xl"
            >
              <div className="size-12 rounded-full bg-emerald-600/10 text-emerald-700">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="h-full w-full p-2"
                >
                  <path
                    d="M5 12.4 9.5 17 19 7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-zinc-900">
                  Auto-response drafted
                </p>
                <p className="text-xs text-zinc-500">Under 8 seconds</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
