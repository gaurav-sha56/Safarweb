const lifecycle = [
  {
    phase: "Before incident",
    items: ["Driver onboarding and app mapping", "Route and shift assignment", "Escalation owner setup"],
  },
  {
    phase: "During incident",
    items: ["SOS capture or risk trigger", "Role-based alert distribution", "Response notes and acknowledgement"],
  },
  {
    phase: "After incident",
    items: ["Case closure workflow", "Root-cause review", "Compliance and policy documentation"],
  },
];

export default function Operations() {
  return (
    <section id="operating-model" className="section-shell bg-stone-100">
      <div className="container-shell">
        <h2 className="section-title">Operating Model</h2>
        <p className="section-copy">A straightforward safety operating cycle from prevention to documented closure.</p>

        <div className="mt-10 grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-8 space-y-4">
            {lifecycle.map((block) => (
              <article key={block.phase} className="rounded-xl border border-stone-300 bg-white p-5">
                <h3 className="text-lg font-semibold text-navy">{block.phase}</h3>
                <ul className="mt-3 grid gap-2 text-sm text-stone-500 md:grid-cols-2">
                  {block.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <aside className="lg:col-span-4 rounded-xl border border-navy/15 bg-white p-5">
            <h3 className="text-lg font-semibold text-navy">Role ownership matrix</h3>
            <div className="mt-4 space-y-3 text-sm">
              <div className="rounded-md border border-stone-200 bg-stone-100 p-3">
                <p className="font-medium text-navy">Fleet Admin</p>
                <p className="mt-1 text-stone-500">Policy settings, route mapping, and user governance.</p>
              </div>
              <div className="rounded-md border border-stone-200 bg-stone-100 p-3">
                <p className="font-medium text-navy">Ops Manager</p>
                <p className="mt-1 text-stone-500">Shift monitoring, incident triage, and response coordination.</p>
              </div>
              <div className="rounded-md border border-stone-200 bg-stone-100 p-3">
                <p className="font-medium text-navy">Safety Lead</p>
                <p className="mt-1 text-stone-500">Escalation review, closure validation, and reporting governance.</p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
