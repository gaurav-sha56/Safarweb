const features = [
  {
    title: "Live Fleet Monitoring",
    description: "Track active vehicles and route context from a single operations dashboard.",
    detail: "See trip status, route deviations, and active incident flags in one view.",
  },
  {
    title: "Driver Behaviour Risk Signals",
    description: "Identify driving pattern risks early using structured event signals and alerts.",
    detail: "Flag harsh acceleration, braking, and repeated risk patterns for supervisor review.",
  },
  {
    title: "Structured SOS and Escalation",
    description: "Capture incidents with clear ownership, response trails, and escalation routing.",
    detail: "Define response owners by shift, route, or severity level.",
  },
  {
    title: "Auto Compliance Documentation",
    description: "Generate incident timelines that are review-ready for policy, legal, and audit workflows.",
    detail: "Export incident records with actions, acknowledgements, and closure notes.",
  },
  {
    title: "Role-based Access Control",
    description: "Assign clear permissions for fleet admin, safety lead, and operations teams.",
    detail: "Maintain visibility without exposing sensitive incident notes to every user.",
  },
  {
    title: "Shift-ready Escalation Rules",
    description: "Configure workflows for day/night operations and region-specific response teams.",
    detail: "Avoid missed alerts during shift handovers and multi-city operations.",
  },
];

export default function Features() {
  return (
    <section id="features" className="section-shell bg-white">
      <div className="container-shell">
        <h2 className="section-title">Core Capabilities</h2>
        <p className="section-copy">Built to support reliability, response speed, and operational accountability.</p>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="rounded-xl border border-stone-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-4 h-2 w-8 rounded-full bg-orange" aria-hidden />
              <h3 className="text-lg font-semibold text-navy">{feature.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-stone-500">{feature.description}</p>
              <p className="mt-3 border-t border-stone-200 pt-3 text-sm leading-relaxed text-navy/80">{feature.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
