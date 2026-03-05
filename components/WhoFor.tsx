const segments = [
  {
    title: "School Transport",
    challenge: "Needs strict route discipline, parent trust, and verifiable escalation records.",
    fit: "Best for operators handling daily route repetition and school admin reporting.",
  },
  {
    title: "Corporate Fleet",
    challenge: "Needs policy-aligned employee commute safety and vendor accountability.",
    fit: "Best for enterprise transport teams running shift-based city operations.",
  },
  {
    title: "Travel Operators",
    challenge: "Needs fast response during long-distance or night trips with distributed teams.",
    fit: "Best for fleets handling intercity, airport, and tourist movement.",
  },
];

export default function WhoFor() {
  return (
    <section id="for-fleets" className="section-shell bg-white">
      <div className="container-shell">
        <h2 className="section-title">Who It Is For</h2>
        <p className="section-copy">Designed for professional fleet operators who need reliable safety operations at scale.</p>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {segments.map((segment) => (
            <article key={segment.title} className="rounded-xl border border-stone-200 bg-white p-6">
              <h3 className="text-xl font-semibold text-navy">{segment.title}</h3>
              <p className="mt-4 text-sm font-medium text-navy">Primary challenge</p>
              <p className="mt-2 text-sm leading-relaxed text-stone-500">{segment.challenge}</p>
              <p className="mt-4 text-sm font-medium text-navy">Where SAFAR fits</p>
              <p className="mt-2 text-sm leading-relaxed text-stone-500">{segment.fit}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
