import { Check } from "lucide-react";
import Image from "next/image";

const principles = [
  "Personal attention from planning to service",
  "Design and dining shaped as one experience",
  "Clear communication at every stage",
] as const;

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="bg-[#eee5d7] py-24 sm:py-32"
    >
      <div className="mx-auto grid max-w-[90rem] gap-14 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20 lg:px-12 xl:px-16">
        <div className="relative mx-auto aspect-square w-full max-w-xl overflow-hidden rounded-[2rem] bg-[#06172d] shadow-[0_28px_80px_rgba(7,21,38,0.16)]">
          <Image
            src="/images/tyagi-logo.webp"
            alt="Tyagi Tent & Caterers emblem"
            fill
            sizes="(min-width: 1024px) 42vw, 90vw"
            className="object-cover"
          />
          <div className="absolute inset-0 ring-1 ring-white/10 ring-inset" />
        </div>

        <div>
          <p className="flex items-center gap-3 text-xs font-bold tracking-[0.24em] text-[#9b6b25] uppercase">
            <span className="h-px w-8 bg-[#b9883e]" aria-hidden="true" />
            The Tyagi approach
          </p>
          <h2
            id="about-heading"
            className="mt-6 max-w-2xl font-serif text-5xl leading-[0.95] font-medium tracking-[-0.035em] text-[#071526] sm:text-7xl"
          >
            Hospitality with heart. Execution with precision.
          </h2>
          <div className="mt-8 max-w-2xl space-y-5 text-base leading-8 text-[#465264]">
            <p>
              A beautiful celebration should feel effortless to the people at
              its centre. That belief guides how we plan, design, cook, and
              serve.
            </p>
            <p>
              Tyagi Tent & Caterers brings the moving parts of an event together
              under one attentive team, balancing imagination with the practical
              care that exceptional hospitality demands.
            </p>
          </div>
          <ul className="mt-9 grid gap-4">
            {principles.map((principle) => (
              <li
                key={principle}
                className="flex items-center gap-4 text-sm font-semibold text-[#17273b]"
              >
                <span className="grid size-8 shrink-0 place-items-center rounded-full bg-[#9b6b25] text-white">
                  <Check className="size-4" aria-hidden="true" />
                </span>
                {principle}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
