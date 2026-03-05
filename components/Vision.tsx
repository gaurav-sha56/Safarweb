export default function Vision() {
  return (
    <section id="vision" className="section-shell bg-navy">
      <div className="container-shell">
        <div className="h-1 w-20 rounded-full bg-orange" />
        <h2 className="mt-6 font-display text-3xl font-bold tracking-tight text-white md:text-5xl">The SAFAR Vision</h2>
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/85 md:text-lg">
          SAFAR Cabs will be launched on top of the SAFAR Safety Network.
        </p>
        <p className="mt-3 max-w-3xl text-base leading-relaxed text-white/85 md:text-lg">
          The platform layer is being built first to ensure reliable safety operations, compliance discipline, and
          scalable fleet governance.
        </p>
        <p className="mt-3 max-w-3xl text-base leading-relaxed text-white/85 md:text-lg">
          This approach prioritizes operational maturity before marketplace expansion.
        </p>

        <div className="mt-8 grid gap-3 md:grid-cols-3">
          <div className="rounded-lg border border-white/15 p-4">
            <p className="text-sm font-semibold text-white">Safety-first architecture</p>
            <p className="mt-2 text-sm text-white/75">Incident workflows built before growth workflows.</p>
          </div>
          <div className="rounded-lg border border-white/15 p-4">
            <p className="text-sm font-semibold text-white">Governance by design</p>
            <p className="mt-2 text-sm text-white/75">Role controls and audit trails in core product design.</p>
          </div>
          <div className="rounded-lg border border-white/15 p-4">
            <p className="text-sm font-semibold text-white">Measured rollout</p>
            <p className="mt-2 text-sm text-white/75">Pilot learning before city-wise expansion decisions.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
