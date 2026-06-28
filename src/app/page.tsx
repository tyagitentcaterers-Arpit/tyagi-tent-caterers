import type { Metadata } from "next";

import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";

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
    </main>
  );
}
