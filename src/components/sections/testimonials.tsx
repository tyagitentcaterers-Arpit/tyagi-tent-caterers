import { Quote } from "lucide-react";

const experienceStandards = [
  {
    title: "Feel understood",
    text: "The celebration should reflect the host—not a template. We listen closely and shape every recommendation around the occasion.",
  },
  {
    title: "Feel looked after",
    text: "From planning conversations to guest service, thoughtful communication should make the entire experience feel calm and cared for.",
  },
  {
    title: "Feel fully present",
    text: "On the day, the details should simply flow. Our purpose is to let families and hosts enjoy the people and moments that matter.",
  },
] as const;

export function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="bg-[#0a1b30] py-24 text-white sm:py-32"
    >
      <div className="mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-12 xl:px-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold tracking-[0.24em] text-[#e2bd72] uppercase">
            Our promise to every host
          </p>
          <h2
            id="testimonials-heading"
            className="mt-6 font-serif text-5xl leading-[0.95] font-medium tracking-[-0.035em] sm:text-7xl"
          >
            An experience worth remembering.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-white/60">
            Verified client stories will be shared here with permission. Until
            then, these are the standards we hold ourselves to at every
            celebration.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {experienceStandards.map((item) => (
            <article
              key={item.title}
              className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-7 transition hover:-translate-y-1 hover:border-[#e2bd72]/35 hover:bg-white/[0.06] sm:p-9"
            >
              <Quote
                className="size-8 text-[#e2bd72]"
                strokeWidth={1.25}
                aria-hidden="true"
              />
              <h3 className="mt-10 font-serif text-3xl font-semibold text-[#f4dfb2]">
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-white/63">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
