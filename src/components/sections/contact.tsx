import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

const contact = {
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL,
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE,
  location: process.env.NEXT_PUBLIC_CONTACT_LOCATION,
};

export function Contact() {
  const hasDirectContact = Boolean(contact.email || contact.phone);

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative overflow-hidden bg-[#071526] py-24 text-white sm:py-32"
    >
      <div
        className="absolute inset-0 [background-image:radial-gradient(circle_at_75%_15%,#b9883e_0,transparent_32%)] opacity-25"
        aria-hidden="true"
      />
      <div className="relative mx-auto grid max-w-[90rem] gap-14 px-5 sm:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-20 lg:px-12 xl:px-16">
        <div>
          <p className="flex items-center gap-3 text-xs font-bold tracking-[0.24em] text-[#e2bd72] uppercase">
            <span className="h-px w-8 bg-[#e2bd72]" aria-hidden="true" />
            Begin your celebration
          </p>
          <h2
            id="contact-heading"
            className="mt-7 max-w-4xl font-serif text-[clamp(3.5rem,8vw,7.5rem)] leading-[0.88] font-medium tracking-[-0.045em]"
          >
            Let&apos;s create something{" "}
            <span className="text-[#e2bd72] italic">unforgettable.</span>
          </h2>
          <p className="mt-8 max-w-xl text-base leading-8 text-white/62">
            Tell us about the date, venue, guest count, and vision you have in
            mind. We&apos;ll help turn the first ideas into a beautifully
            considered plan.
          </p>

          {contact.email ? (
            <a
              href={
                "mailto:" +
                contact.email +
                "?subject=Event enquiry for Tyagi Tent %26 Caterers"
              }
              className="group mt-10 inline-flex min-h-14 items-center gap-3 rounded-full bg-[#e2bd72] px-8 text-sm font-bold tracking-[0.1em] text-[#071526] uppercase transition hover:bg-[#f2d28f]"
            >
              Start a conversation
              <ArrowUpRight
                className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </a>
          ) : (
            <p className="mt-10 inline-flex rounded-full border border-[#e2bd72]/30 px-6 py-4 text-sm text-[#f2d28f]">
              Verified booking details will be published shortly.
            </p>
          )}
        </div>

        <address className="not-italic">
          <p className="text-xs font-bold tracking-[0.22em] text-white/40 uppercase">
            Contact details
          </p>
          <div className="mt-5 divide-y divide-white/12 border-y border-white/12">
            <ContactRow
              icon={Phone}
              label="Call"
              value={contact.phone}
              href={
                contact.phone
                  ? "tel:" + contact.phone.replace(/\s/g, "")
                  : undefined
              }
            />
            <ContactRow
              icon={Mail}
              label="Email"
              value={contact.email}
              href={contact.email ? "mailto:" + contact.email : undefined}
            />
            <ContactRow
              icon={MapPin}
              label="Location"
              value={contact.location}
            />
          </div>
          {!hasDirectContact ? (
            <p className="mt-5 text-xs leading-5 text-white/38">
              Contact information is intentionally hidden until the official
              business details are verified.
            </p>
          ) : null}
        </address>
      </div>
    </section>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Phone;
  label: string;
  value?: string;
  href?: string;
}) {
  return (
    <div className="flex items-center gap-4 py-5">
      <span className="grid size-10 shrink-0 place-items-center rounded-full border border-[#e2bd72]/25 text-[#e2bd72]">
        <Icon className="size-4" aria-hidden="true" />
      </span>
      <div>
        <p className="text-[0.62rem] font-bold tracking-[0.18em] text-white/38 uppercase">
          {label}
        </p>
        {href && value ? (
          <a
            href={href}
            className="mt-1 block text-sm text-white/78 transition hover:text-[#e2bd72]"
          >
            {value}
          </a>
        ) : (
          <p className="mt-1 text-sm text-white/35">
            {value ?? "To be confirmed"}
          </p>
        )}
      </div>
    </div>
  );
}
