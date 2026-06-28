import type { Metadata } from "next";

import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { FAQ } from "@/components/sections/faq";
import { Footer } from "@/components/sections/footer";
import { Hero } from "@/components/sections/hero";
import { Navbar } from "@/components/sections/navbar";
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
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Services />
        <Portfolio />
        <About />
        <Process />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
