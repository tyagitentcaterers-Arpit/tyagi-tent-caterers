"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const experiences = [
  { title: "Wedding Pavilions", note: "Drapery · Lighting · Decor" },
  { title: "Dining Experiences", note: "Menus · Presentation · Service" },
  { title: "Intimate Celebrations", note: "Design · Detail · Hospitality" },
] as const;

export function Portfolio() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="portfolio"
      aria-labelledby="portfolio-heading"
      className="overflow-hidden bg-[#071526] py-24 text-white sm:py-32"
    >
      <div className="mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-12 xl:px-16">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <p className="flex items-center gap-3 text-xs font-bold tracking-[0.24em] text-[#e2bd72] uppercase">
              <span className="h-px w-8 bg-[#e2bd72]" aria-hidden="true" />
              Selected experiences
            </p>
            <h2
              id="portfolio-heading"
              className="mt-6 max-w-2xl font-serif text-5xl leading-[0.93] font-medium tracking-[-0.035em] sm:text-7xl"
            >
              Spaces that become memories.
            </h2>
          </div>
          <Link
            href="#contact"
            className="group inline-flex w-fit items-center gap-2 border-b border-[#e2bd72]/55 pb-2 text-xs font-bold tracking-[0.18em] text-[#f2d28f] uppercase transition hover:border-[#f2d28f]"
          >
            Create yours
            <ArrowUpRight
              className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </Link>
        </motion.div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.65fr_0.65fr] lg:gap-8">
          <motion.figure
            initial={reduceMotion ? false : { clipPath: "inset(0 100% 0 0)" }}
            whileInView={{ clipPath: "inset(0 0% 0 0)" }}
            viewport={{ once: true, amount: 0.18 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="group relative min-h-[32rem] overflow-hidden rounded-[1.75rem] sm:min-h-[40rem]"
          >
            <Image
              src="/images/hero-wedding-pavilion.webp"
              alt="A luxurious evening pavilion arranged for an elegant wedding celebration"
              fill
              sizes="(min-width: 1024px) 70vw, 100vw"
              className="object-cover object-[62%_center] transition duration-1000 group-hover:scale-[1.025]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#03101f]/90 via-transparent to-transparent" />
            <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-5 p-6 sm:p-10">
              <div>
                <p className="text-[0.65rem] font-bold tracking-[0.22em] text-[#e2bd72] uppercase">
                  Signature atmosphere
                </p>
                <p className="mt-2 font-serif text-3xl sm:text-5xl">
                  An evening in gold
                </p>
              </div>
              <span className="hidden size-12 place-items-center rounded-full border border-white/30 bg-black/10 backdrop-blur-sm sm:grid">
                <ArrowUpRight className="size-5" aria-hidden="true" />
              </span>
            </figcaption>
          </motion.figure>

          <div className="flex flex-col rounded-[1.75rem] border border-white/12 bg-white/[0.035] p-6 sm:p-8">
            <p className="text-xs leading-6 tracking-[0.16em] text-white/48 uppercase">
              Designed around you
            </p>
            <div className="my-auto divide-y divide-white/12">
              {experiences.map((experience, index) => (
                <motion.div
                  key={experience.title}
                  initial={reduceMotion ? false : { opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                  className="py-7 first:pt-10"
                >
                  <span className="text-[0.62rem] font-semibold tracking-[0.2em] text-[#e2bd72]">
                    0{index + 1}
                  </span>
                  <h3 className="mt-3 font-serif text-2xl font-semibold">
                    {experience.title}
                  </h3>
                  <p className="mt-2 text-xs tracking-[0.1em] text-white/45 uppercase">
                    {experience.note}
                  </p>
                </motion.div>
              ))}
            </div>
            <p className="border-t border-white/12 pt-6 text-sm leading-6 text-white/58">
              Each setting begins with a conversation and is shaped for the
              people, place, and feeling of the occasion.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
