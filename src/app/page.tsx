import type { Metadata } from "next";

import { Hero } from "@/components/sections/hero";
import { Portfolio } from "@/components/sections/portfolio";
import { Process } from "@/components/sections/process";
import { Services } from "@/components/sections/services";
import { Testimonials } from "@/components/sections/testimonials";

export const metadata: Metadata = {
  title: "Luxury Tent & Catering Services",
  description:
    "Tyagi Tent & Caterers creates refined weddings and celebrations with premium tent decor, exceptional catering, and attentive event service.",
};

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <Process />
      <Testimonials />
    </main>
  );
}
import { About } from "@/components/sections/about";
