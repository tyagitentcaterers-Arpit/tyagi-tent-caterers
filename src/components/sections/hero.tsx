"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative isolate flex min-h-[100svh] overflow-hidden bg-[#051426] text-white"
    >
      <Image
        src="/images/hero-wedding-pavilion.webp"
        alt="An elegant candlelit wedding pavilion prepared for a celebration"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[62%_center]"
      />

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,12,24,0.97)_0%,rgba(2,12,24,0.82)_38%,rgba(2,12,24,0.32)_68%,rgba(2,12,24,0.12)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,12,24,0.28)_0%,transparent_40%,rgba(2,12,24,0.78)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_38%,rgba(221,174,88,0.12),transparent_32%)]" />

      <div className="relative z-10 mx-auto flex w-full max-w-[90rem] flex-1 flex-col px-5 pt-24 pb-7 sm:px-8 sm:pb-9 lg:px-12 xl:px-16">
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{
            staggerChildren: reduceMotion ? 0 : 0.13,
            delayChildren: 0.15,
          }}
          className="my-auto max-w-[46rem] py-10 sm:py-14 lg:py-10"
        >
          <motion.div
            variants={reduceMotion ? undefined : reveal}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="mb-5 flex items-center gap-3 text-[0.68rem] font-semibold tracking-[0.24em] text-[#e2bd72] uppercase sm:mb-6 sm:text-xs"
          >
            <span className="h-px w-9 bg-[#e2bd72]" aria-hidden="true" />
            Celebrations, elevated
          </motion.div>

          <motion.h1
            id="hero-heading"
            variants={reduceMotion ? undefined : reveal}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-[46rem] font-serif text-[clamp(3rem,7vw,6.75rem)] leading-[0.91] font-medium tracking-[-0.04em] text-balance"
          >
            Crafted for your{" "}
            <span className="bg-gradient-to-r from-[#f8e3b4] via-[#e9c375] to-[#c38a35] bg-clip-text text-transparent italic">
              grandest moments.
            </span>
          </motion.h1>

          <motion.p
            variants={reduceMotion ? undefined : reveal}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-xl text-[0.95rem] leading-7 text-white/72 sm:mt-7 sm:text-base sm:leading-8"
          >
            Thoughtful tent design, distinctive catering, and seamless
            hospitality—brought together for weddings and celebrations that stay
            with you.
          </motion.p>

          <motion.div
            variants={reduceMotion ? undefined : reveal}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:items-center"
          >
            <Link
              href="#contact"
              className="group inline-flex min-h-13 items-center justify-center gap-2 rounded-full bg-[#e2bd72] px-7 text-sm font-bold tracking-[0.08em] text-[#071526] uppercase transition hover:bg-[#f2d28f] focus-visible:outline-[#f2d28f]"
            >
              Plan your celebration
              <ArrowUpRight
                className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </Link>
            <Link
              href="#portfolio"
              className="inline-flex min-h-13 items-center justify-center rounded-full border border-white/28 bg-white/5 px-7 text-sm font-bold tracking-[0.08em] text-white uppercase backdrop-blur-sm transition hover:border-white/55 hover:bg-white/10 focus-visible:outline-white"
            >
              View our work
            </Link>
          </motion.div>
        </motion.div>

        <motion.a
          href="#services"
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="group flex w-fit items-center gap-3 text-[0.65rem] font-semibold tracking-[0.24em] text-white/55 uppercase transition hover:text-white"
        >
          <span className="grid size-9 place-items-center rounded-full border border-white/20 transition group-hover:border-[#e2bd72]/70">
            <motion.span
              animate={reduceMotion ? undefined : { y: [0, 4, 0] }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <ArrowDown className="size-3.5" aria-hidden="true" />
            </motion.span>
          </span>
          Discover our craft
        </motion.a>
      </div>
    </section>
  );
}
