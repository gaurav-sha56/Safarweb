const insuranceBenefits = [
  {
    audience: "For Insurance Companies",
    title: "Accurate Risk Pricing with Real Data",
    details:
      "Stop estimating premiums based on vehicle age and city. Safar's telematics data gives you actual driving behaviour — braking patterns, speed history, fatigue signals — to price risk with precision.",
  },
  {
    audience: "For Insurance Companies",
    title: "Fraud Detection & Claim Verification",
    details:
      "Every incident is timestamped and logged with driver behaviour context. Verify claims instantly against real trip data — reducing fraudulent payouts and improving investigation speed.",
  },
  {
    audience: "For Insurance Companies",
    title: "Usage-Based Insurance (UBI) Ready",
    details:
      "Build telematics-backed UBI products for Indian fleets. Safar's API delivers the structured driving data you need to launch pay-as-you-drive or behaviour-linked premium models.",
  },
  {
    audience: "For Fleet Owners & Drivers",
    title: "Lower Premiums for Safer Fleets",
    details:
      "Fleets with high Safar safety scores qualify for reduced insurance premiums. Better driver behaviour directly translates to lower operating costs — a measurable ROI from day one.",
  },
  {
    audience: "For Fleet Owners & Drivers",
    title: "Documented Safety Record",
    details:
      "Build a verifiable safety history for your entire fleet over time. Use Safar's compliance reports as proof of operational discipline when renewing or negotiating insurance contracts.",
  },
  {
    audience: "For Fleet Owners & Drivers",
    title: "Faster Claim Settlement",
    details:
      "When incidents happen, Safar's timestamped event logs and driver behaviour trail speed up claim processing — protecting your drivers and reducing dispute time with insurers.",
  },
];

export default function InsuranceAdvantage() {
  return (
    <section id="insurance" className="section-shell bg-white">
      <div className="container-shell">
        <h2 className="section-title">The Insurance Advantage</h2>
        <p className="section-copy">
          Safar bridges the data gap between fleet operations and insurance pricing — creating value on both sides of the equation.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {insuranceBenefits.map((benefit) => (
            <article key={benefit.title} className="rounded-xl border border-stone-200 bg-white p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-orange">{benefit.audience}</p>
              <h3 className="mt-2 text-lg font-semibold text-navy">{benefit.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-stone-500">{benefit.details}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}