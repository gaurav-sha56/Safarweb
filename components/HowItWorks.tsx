const steps = [
  {
    title: "Driver installs SAFAR app",
    description: "Driver app setup is completed on the existing smartphone with route and vehicle mapping.",
    output: "Output: active trip-linked safety channel per driver",
  },
  {
    title: "Fleet dashboard activates",
    description: "Operations team receives live visibility with assigned roles for monitoring and escalation response.",
    output: "Output: shared incident queue for ops and safety owners",
  },
  {
    title: "Real-time safety monitoring and documentation",
    description: "Incidents are logged with response actions, acknowledgements, and closure notes for governance.",
    output: "Output: audit-ready event timeline",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-shell bg-stone-100">
      <div className="container-shell">
        <h2 className="section-title">How It Works</h2>
        <p className="section-copy">A practical workflow that aligns drivers, operations teams, and compliance stakeholders.</p>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {steps.map((step, index) => (
            <article key={step.title} className="rounded-xl border border-navy/10 bg-white p-6">
              <div className="mb-4 flex items-center gap-3">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-orange text-sm font-semibold text-white">
                  {index + 1}
                </span>
                <span className="h-px flex-1 bg-stone-200" />
              </div>
              <h3 className="text-lg font-semibold text-navy">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-stone-500">{step.description}</p>
              <p className="mt-4 border-t border-stone-200 pt-3 text-sm font-medium text-navy/80">{step.output}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
