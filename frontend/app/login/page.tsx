"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { playfair } from "../fonts";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <div className="flex min-h-screen">
      {/* Left Side - Form */}
      <div className="flex w-full flex-col justify-center bg-white px-8 lg:w-1/2 lg:px-16">
        <div className="mx-auto w-full max-w-md">
          {/* Logo */}
          <div className="mb-12 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600 text-sm font-bold text-white">
              SA
            </div>
            <span className="text-xl font-semibold tracking-tight text-zinc-900">
              SentiMax
            </span>
          </div>

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className={`${playfair.className} text-4xl text-zinc-900`}>
              Holla,
              <br />
              Welcome Back
            </h1>
            <p className="mt-3 text-zinc-500">
              Hey, welcome back to your special place
            </p>
          </motion.div>

          {/* Form */}
          <form
            className="mt-10 space-y-5"
            onSubmit={(e) => e.preventDefault()}
          >
            <div>
              <input
                type="email"
                placeholder="stanley@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-xl border border-zinc-200 bg-white px-5 py-3.5 text-sm text-zinc-900 placeholder-zinc-400 transition focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
              />
            </div>

            <div>
              <input
                type="password"
                placeholder="••••••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-xl border border-zinc-200 bg-white px-5 py-3.5 text-sm text-zinc-900 placeholder-zinc-400 transition focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
              />
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="size-4 rounded border-zinc-300 text-emerald-600 focus:ring-emerald-500"
                />
                <span className="text-zinc-600">Remember me</span>
              </label>
              <Link
                href="/forgot-password"
                className="text-zinc-500 hover:text-zinc-900"
              >
                Forgot Password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-emerald-600 py-3.5 text-sm font-semibold text-white transition hover:bg-emerald-700"
            >
              Sign In
            </button>
          </form>

          {/* Sign Up Link */}
          <p className="mt-8 text-center text-sm text-zinc-500">
            Don't have an account?{" "}
            <Link
              href="/register"
              className="font-semibold text-emerald-600 hover:text-emerald-700"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>

      {/* Right Side - Illustration */}
      <div className="relative hidden w-1/2 overflow-hidden bg-linear-to-br from-violet-500 via-violet-400 to-blue-400 lg:block">
        {/* Clouds */}
        <div className="pointer-events-none absolute left-10 top-20 h-32 w-48 rounded-[100px] bg-white/90 blur-sm" />
        <div className="pointer-events-none absolute right-20 top-32 h-24 w-36 rounded-[80px] bg-white/80 blur-sm" />
        <div className="pointer-events-none absolute bottom-32 left-20 h-28 w-40 rounded-[90px] bg-white/85 blur-sm" />
        <div className="pointer-events-none absolute bottom-20 right-32 h-36 w-52 rounded-[110px] bg-white/90 blur-sm" />

        {/* Central Illustration Area */}
        <div className="flex h-full items-center justify-center p-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Phone Mockup */}
            <div className="relative z-10 h-[500px] w-[280px] rounded-[48px] border-8 border-zinc-900 bg-gradient-to-br from-violet-600 to-pink-500 p-6 shadow-2xl">
              <div className="flex h-full flex-col items-center justify-center text-white">
                {/* Fingerprint Icon */}
                <div className="flex h-40 w-40 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="h-24 w-24"
                  >
                    <path
                      d="M12 11a4 4 0 0 1 4 4v1M8 15v-1a4 4 0 0 1 8 0M12 15v5M8 15v3M16 15v3M7 19h10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-8 top-20 z-20 flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-xl"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-10 w-10 text-emerald-600"
              >
                <path
                  d="M5 13l4 4L19 7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.div>

            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -right-8 bottom-32 z-20 flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-xl"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-12 w-12 text-violet-600"
              >
                <path
                  d="M12 2a5 5 0 0 1 5 5v0a5 5 0 0 1-5 5v0a5 5 0 0 1-5-5v0a5 5 0 0 1 5-5zM3 22a9 9 0 0 1 18 0"
                  strokeLinecap="round"
                />
              </svg>
            </motion.div>

            {/* Character Illustration Placeholder */}
            <motion.div
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-12 left-1/2 -translate-x-1/2"
            >
              <div className="h-40 w-32 rounded-t-full bg-amber-400" />
              <div className="mx-auto mt-2 h-20 w-20 rounded-full border-4 border-zinc-900 bg-zinc-800" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
