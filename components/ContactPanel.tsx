export default function ContactPanel() {
  return (
    <section id="contact" className="section-shell bg-white">
      <div className="container-shell">
        <div className="grid gap-8 rounded-xl border border-stone-200 bg-stone-100 p-6 md:p-8 lg:grid-cols-2">
          <div>
            <h2 className="section-title text-3xl md:text-4xl">Request a Pilot Discussion</h2>
            <p className="section-copy mt-3">
              Share your operating context and we will structure a focused walkthrough for your fleet type.
            </p>
            <div className="mt-6 space-y-2 text-sm text-stone-500">
              <p>Response window: within 1 business day</p>
              <p>Format: remote product walkthrough with operations lead</p>
              <p>Email: safarcabs25@gmail.com</p>
            </div>
          </div>

          <form
            className="grid gap-3 rounded-lg border border-stone-300 bg-white p-5"
            action="https://formsubmit.co/safarcabs25@gmail.com"
            method="post"
          >
            <input type="hidden" name="_subject" value="New SAFAR pilot request" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />

            <label className="text-sm font-medium text-navy" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="rounded-md border border-stone-300 px-3 py-2 text-sm"
            />

            <label className="text-sm font-medium text-navy" htmlFor="company">
              Company
            </label>
            <input
              id="company"
              name="company"
              type="text"
              required
              className="rounded-md border border-stone-300 px-3 py-2 text-sm"
            />

            <label className="text-sm font-medium text-navy" htmlFor="email">
              Work Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="rounded-md border border-stone-300 px-3 py-2 text-sm"
            />

            <label className="text-sm font-medium text-navy" htmlFor="phone">
              Phone
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              className="rounded-md border border-stone-300 px-3 py-2 text-sm"
            />

            <label className="text-sm font-medium text-navy" htmlFor="fleet">
              Fleet Size
            </label>
            <select
              id="fleet"
              name="fleet_size"
              className="rounded-md border border-stone-300 px-3 py-2 text-sm"
              defaultValue="1-20 vehicles"
            >
              <option>1-20 vehicles</option>
              <option>21-100 vehicles</option>
              <option>101-500 vehicles</option>
              <option>500+ vehicles</option>
            </select>

            <label className="text-sm font-medium text-navy" htmlFor="notes">
              Notes
            </label>
            <textarea
              id="notes"
              name="notes"
              rows={4}
              className="rounded-md border border-stone-300 px-3 py-2 text-sm"
              placeholder="Tell us about your fleet, routes, or pilot requirement."
            />

            <button type="submit" className="btn-primary mt-2">
              Request Pilot
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
