const faqs = [
  {
    question: "What kinds of events do you cater and decorate?",
    answer:
      "We create experiences for weddings, family celebrations, social occasions, and corporate events. The scope is shaped around your guest count, venue, and priorities.",
  },
  {
    question: "Can tent decor and catering be planned together?",
    answer:
      "Yes. Bringing both together allows the visual setting, guest flow, menu, and service plan to support one another as a cohesive experience.",
  },
  {
    question: "How early should we begin planning?",
    answer:
      "Starting early gives the widest choice and the most time to refine details, especially for larger celebrations. Contact us with your preferred date and we will advise on availability.",
  },
  {
    question: "Can menus be tailored to our event?",
    answer:
      "Menus are planned around the style of occasion, guest preferences, service format, and practical venue requirements. Specific dietary needs should be discussed during planning.",
  },
  {
    question: "Do you work with outdoor and private venues?",
    answer:
      "Venue suitability depends on access, permissions, utilities, weather planning, and event scale. We review these practical details before confirming the recommended setup.",
  },
] as const;

export function FAQ() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="bg-[#f7f2e9] py-24 sm:py-32"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="mx-auto grid max-w-[90rem] gap-12 px-5 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20 lg:px-12 xl:px-16">
        <div>
          <p className="flex items-center gap-3 text-xs font-bold tracking-[0.24em] text-[#9b6b25] uppercase">
            <span className="h-px w-8 bg-[#b9883e]" aria-hidden="true" />
            Good to know
          </p>
          <h2
            id="faq-heading"
            className="mt-6 font-serif text-5xl leading-[0.95] font-medium tracking-[-0.035em] text-[#071526] sm:text-7xl"
          >
            Questions, answered.
          </h2>
          <p className="mt-6 max-w-md text-sm leading-7 text-[#566172]">
            Every celebration is different. These answers cover the starting
            points; the details become clear once we understand your occasion.
          </p>
        </div>

        <div className="border-t border-[#071526]/15">
          {faqs.map((faq, index) => (
            <details
              key={faq.question}
              className="group border-b border-[#071526]/15 py-1"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-6 text-left font-serif text-xl font-semibold text-[#071526] marker:content-none sm:text-2xl">
                <span>
                  <span className="mr-4 align-middle font-sans text-xs tracking-[0.18em] text-[#9b6b25]">
                    0{index + 1}
                  </span>
                  {faq.question}
                </span>
                <span
                  className="relative size-5 shrink-0 before:absolute before:top-1/2 before:h-px before:w-full before:bg-current after:absolute after:left-1/2 after:h-full after:w-px after:bg-current after:transition after:duration-300 group-open:after:rotate-90 group-open:after:opacity-0"
                  aria-hidden="true"
                />
              </summary>
              <p className="max-w-2xl pb-7 pl-0 text-sm leading-7 text-[#566172] sm:pl-10">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
