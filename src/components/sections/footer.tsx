import Image from "next/image";
import Link from "next/link";

const links = [
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-white/8 bg-[#04101f] text-white">
      <div className="mx-auto max-w-[90rem] px-5 py-12 sm:px-8 lg:px-12 lg:py-16 xl:px-16">
        <div className="grid gap-12 border-b border-white/10 pb-12 md:grid-cols-[1.2fr_0.8fr] md:items-end">
          <Link
            href="#home"
            className="flex w-fit items-center gap-4"
            aria-label="Tyagi Tent & Caterers, home"
          >
            <span className="relative size-16 overflow-hidden rounded-full border border-[#e2bd72]/35">
              <Image
                src="/images/tyagi-logo.webp"
                alt=""
                fill
                sizes="64px"
                className="object-cover"
              />
            </span>
            <span>
              <span className="block font-serif text-2xl tracking-[0.12em] text-[#f2d28f]">
                TYAGI
              </span>
              <span className="mt-1 block text-[0.6rem] font-semibold tracking-[0.28em] text-white/45 uppercase">
                Tent & Caterers
              </span>
            </span>
          </Link>

          <nav aria-label="Footer navigation" className="md:justify-self-end">
            <ul className="flex max-w-xl flex-wrap gap-x-6 gap-y-4 md:justify-end">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs font-semibold tracking-[0.14em] text-white/55 uppercase transition hover:text-[#e2bd72]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="flex flex-col gap-3 pt-7 text-[0.68rem] tracking-[0.1em] text-white/35 uppercase sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Tyagi Tent & Caterers. All rights
            reserved.
          </p>
          <p>Celebrations, elevated.</p>
        </div>
      </div>
    </footer>
  );
}
