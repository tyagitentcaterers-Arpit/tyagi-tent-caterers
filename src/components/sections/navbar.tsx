"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "FAQ", href: "#faq" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={
        "fixed inset-x-0 top-0 z-50 transition duration-500 " +
        (scrolled || open
          ? "border-b border-white/10 bg-[#061426]/92 shadow-lg shadow-black/10 backdrop-blur-xl"
          : "bg-transparent")
      }
    >
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex h-20 max-w-[90rem] items-center justify-between px-5 sm:px-8 lg:px-12 xl:px-16"
      >
        <Link
          href="#home"
          className="flex items-center gap-3"
          aria-label="Tyagi Tent & Caterers, home"
        >
          <span className="relative size-11 overflow-hidden rounded-full border border-[#e2bd72]/35">
            <Image
              src="/images/tyagi-logo.webp"
              alt=""
              fill
              sizes="44px"
              className="object-cover"
            />
          </span>
          <span className="hidden sm:block">
            <span className="block font-serif text-lg tracking-[0.12em] text-[#f2d28f]">
              TYAGI
            </span>
            <span className="block text-[0.5rem] font-semibold tracking-[0.25em] text-white/55 uppercase">
              Tent & Caterers
            </span>
          </span>
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-[0.68rem] font-bold tracking-[0.16em] text-white/68 uppercase transition hover:text-[#e2bd72]"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Link
            href="#contact"
            className="hidden min-h-10 items-center rounded-full border border-[#e2bd72]/50 px-5 text-[0.65rem] font-bold tracking-[0.16em] text-[#f2d28f] uppercase transition hover:bg-[#e2bd72] hover:text-[#071526] sm:inline-flex"
          >
            Enquire now
          </Link>
          <button
            type="button"
            className="grid size-11 place-items-center rounded-full border border-white/18 text-white lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? "Close navigation" : "Open navigation"}
            onClick={() => setOpen((current) => !current)}
          >
            {open ? (
              <X className="size-5" aria-hidden="true" />
            ) : (
              <Menu className="size-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.25 }}
            className="h-[calc(100svh-5rem)] border-t border-white/10 bg-[#061426] px-5 py-10 lg:hidden"
          >
            <ul className="divide-y divide-white/10">
              {links.map((link, index) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between py-5 font-serif text-3xl text-white"
                  >
                    {link.label}
                    <span className="font-sans text-[0.6rem] tracking-[0.18em] text-[#e2bd72]">
                      0{index + 1}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-8 flex min-h-13 items-center justify-center rounded-full bg-[#e2bd72] text-xs font-bold tracking-[0.16em] text-[#071526] uppercase"
            >
              Plan your celebration
            </Link>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
