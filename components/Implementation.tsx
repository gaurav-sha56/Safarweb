const phases = [
  {
    title: "Phase 1: Discovery",
    timeline: "Week 0",
    details: "Fleet structure, shift pattern, and incident response expectations are mapped.",
  },
  {
    title: "Phase 2: Configuration",
    timeline: "Week 1",
    details: "Roles, routes, escalation workflows, and reporting templates are configured.",
  },
  {
    title: "Phase 3: Pilot Launch",
    timeline: "Week 2-3",
    details: "Selected vehicles and teams go live with supervised operating reviews.",
  },
  {
    title: "Phase 4: Scale Decision",
    timeline: "Week 4",
    details: "Pilot outcomes are reviewed jointly before phased rollout planning.",
  },
];

export default function Implementation() {
  return (
    <section id="implementation" className="section-shell bg-white">
      <div className="container-shell">
        <h2 className="section-title">Pilot Implementation Plan</h2>
        <p className="section-copy">A realistic rollout sequence designed for operations teams, not just product demos.</p>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {phases.map((phase) => (
            <article key={phase.title} className="rounded-xl border border-stone-200 bg-white p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-orange">{phase.timeline}</p>
              <h3 className="mt-2 text-lg font-semibold text-navy">{phase.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-stone-500">{phase.details}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
