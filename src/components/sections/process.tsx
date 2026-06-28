const steps = [
  {
    number: "01",
    title: "Listen",
    description:
      "We begin with your occasion, priorities, guests, venue, and the feeling you want to create.",
  },
  {
    number: "02",
    title: "Curate",
    description:
      "Our team brings decor, menu, service, and practical requirements into one considered plan.",
  },
  {
    number: "03",
    title: "Refine",
    description:
      "Together, we shape the details and align every moving part before the celebration arrives.",
  },
  {
    number: "04",
    title: "Celebrate",
    description:
      "We manage the experience with attentive service so you can be fully present with your guests.",
  },
] as const;

export function Process() {
  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="bg-[#fbf8f2] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-12 xl:px-16">
        <div className="max-w-2xl">
          <p className="flex items-center gap-3 text-xs font-bold tracking-[0.24em] text-[#9b6b25] uppercase">
            <span className="h-px w-8 bg-[#b9883e]" aria-hidden="true" />
            How we work
          </p>
          <h2
            id="process-heading"
            className="mt-6 font-serif text-5xl leading-[0.95] font-medium tracking-[-0.035em] text-[#071526] sm:text-7xl"
          >
            From first thought to final toast.
          </h2>
        </div>

        <ol className="mt-16 grid border-t border-[#071526]/15 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <li
              key={step.title}
              className="relative border-b border-[#071526]/15 py-9 md:px-8 md:odd:border-r lg:border-r lg:last:border-r-0"
            >
              <span className="font-serif text-5xl text-[#c79a50]/55">
                {step.number}
              </span>
              <h3 className="mt-12 font-serif text-3xl font-semibold text-[#071526]">
                {step.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-[#566172]">
                {step.description}
              </p>
              {index < steps.length - 1 ? (
                <span
                  className="absolute top-15 -right-1.5 z-10 hidden size-3 rounded-full border-2 border-[#fbf8f2] bg-[#b9883e] lg:block"
                  aria-hidden="true"
                />
              ) : null}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
