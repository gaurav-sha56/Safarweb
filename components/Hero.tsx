export default function Hero() {
  return (
    <section className="section-shell bg-stone-100">
      <div className="container-shell grid items-start gap-12 lg:grid-cols-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-navy/70">Fleet Safety Platform</p>
          <h1 className="section-title mt-4">Safety Infrastructure for Fleet Mobility</h1>
          <p className="section-copy">
            Proactive monitoring, structured SOS workflows, and compliance-ready safety documentation for transport
            operators.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="btn-primary">
              Request Pilot
            </a>
            <a href="#implementation" className="btn-secondary" aria-label="Download SAFAR brief">
              Download Brief
            </a>
          </div>

          <div className="mt-8 rounded-lg border border-stone-300 bg-white p-4">
            <p className="text-sm font-medium text-navy">Typical pilot scope</p>
            <ul className="mt-3 grid gap-2 text-sm text-stone-500 md:grid-cols-2">
              <li>10 to 50 vehicles</li>
              <li>Ops + safety manager onboarding</li>
              <li>Incident response playbook setup</li>
              <li>Weekly operating review cadence</li>
            </ul>
          </div>
        </div>

        <div className="rounded-xl border border-navy/15 bg-white p-6 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-navy/70">Operations Console Preview</p>

          <div className="mt-4 rounded-lg border border-stone-200">
            <div className="grid grid-cols-4 border-b border-stone-200 bg-stone-100 px-4 py-3 text-xs font-semibold uppercase tracking-[0.08em] text-stone-500">
              <span>Trip</span>
              <span>Vehicle</span>
              <span>Status</span>
              <span>Owner</span>
            </div>
            <div className="grid grid-cols-4 px-4 py-3 text-sm text-navy">
              <span>Morning Route</span>
              <span>DL 01 AB 1234</span>
              <span className="text-orange">Alert Open</span>
              <span>Ops Desk</span>
            </div>
            <div className="grid grid-cols-4 border-t border-stone-200 px-4 py-3 text-sm text-navy">
              <span>Airport Pickup</span>
              <span>UP 32 AC 4481</span>
              <span>Monitoring</span>
              <span>Safety Lead</span>
            </div>
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <div className="rounded-lg border border-stone-200 bg-stone-100 p-4">
              <p className="text-sm font-medium text-navy">Alert Queue</p>
              <p className="mt-2 text-sm text-stone-500">Escalation owner and response notes.</p>
            </div>
            <div className="rounded-lg border border-stone-200 bg-stone-100 p-4">
              <p className="text-sm font-medium text-navy">Audit Trail</p>
              <p className="mt-2 text-sm text-stone-500">Timestamped actions for every event.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
