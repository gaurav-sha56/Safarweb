const faqs = [
  {
    q: "Does SAFAR need additional hardware installation?",
    a: "No. SAFAR is designed to run on the existing driver smartphone with configured fleet workflows.",
  },
  {
    q: "Who typically uses SAFAR in the organization?",
    a: "Fleet admin, operations managers, and safety/compliance leads are usually the primary users.",
  },
  {
    q: "Can escalation rules be customized by shift or route?",
    a: "Yes. Escalation ownership and alert routing can be configured based on shift, location, and severity.",
  },
  {
    q: "What happens after a pilot period?",
    a: "Pilot outcomes are reviewed jointly. If operational fit is confirmed, rollout planning is done in phases.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="section-shell bg-stone-100">
      <div className="container-shell">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <p className="section-copy">Questions typically asked by operations and procurement teams during evaluation.</p>

        <div className="mt-10 space-y-3">
          {faqs.map((item) => (
            <article key={item.q} className="rounded-xl border border-stone-300 bg-white p-5">
              <h3 className="text-base font-semibold text-navy">{item.q}</h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-500">{item.a}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
