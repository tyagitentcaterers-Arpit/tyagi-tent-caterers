"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ChefHat, Gem, PartyPopper, TentTree } from "lucide-react";

const services = [
  {
    number: "01",
    title: "Luxury Tent Decor",
    description:
      "Bespoke pavilions, layered drapery, lighting, florals, and furnishings composed around your celebration.",
    icon: TentTree,
  },
  {
    number: "02",
    title: "Signature Catering",
    description:
      "Thoughtfully curated menus, beautiful presentation, and warm service from the first tasting to the final course.",
    icon: ChefHat,
  },
  {
    number: "03",
    title: "Wedding Celebrations",
    description:
      "A seamless setting for every ceremony—from intimate rituals to grand receptions and joyful family gatherings.",
    icon: Gem,
  },
  {
    number: "04",
    title: "Social & Corporate Events",
    description:
      "Polished environments for milestones, launches, gatherings, and occasions that deserve a memorable finish.",
    icon: PartyPopper,
  },
] as const;

export function Services() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="bg-[#f7f2e9] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="flex items-center gap-3 text-xs font-bold tracking-[0.24em] text-[#9b6b25] uppercase">
              <span className="h-px w-8 bg-[#b9883e]" aria-hidden="true" />
              Our expertise
            </p>
            <h2
              id="services-heading"
              className="mt-6 max-w-xl font-serif text-5xl leading-[0.95] font-medium tracking-[-0.035em] text-[#071526] sm:text-6xl"
            >
              Every detail, considered.
            </h2>
            <p className="mt-6 max-w-md text-base leading-7 text-[#354153]">
              One experienced team bringing design, dining, and hospitality
              together with clarity and care.
            </p>
          </motion.div>

          <div className="grid border-t border-[#071526]/15 sm:grid-cols-2">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.article
                  key={service.title}
                  initial={reduceMotion ? false : { opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{
                    duration: 0.65,
                    delay: reduceMotion ? 0 : index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group relative border-b border-[#071526]/15 py-9 sm:px-8 sm:odd:border-r"
                >
                  <div className="mb-12 flex items-start justify-between">
                    <span className="text-xs font-semibold tracking-[0.2em] text-[#9b6b25]">
                      {service.number}
                    </span>
                    <span className="grid size-11 place-items-center rounded-full border border-[#9b6b25]/25 text-[#9b6b25] transition duration-500 group-hover:border-[#9b6b25] group-hover:bg-[#9b6b25] group-hover:text-white">
                      <Icon
                        className="size-5"
                        strokeWidth={1.5}
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                  <h3 className="font-serif text-3xl font-semibold tracking-[-0.02em] text-[#071526]">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[#566172]">
                    {service.description}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
