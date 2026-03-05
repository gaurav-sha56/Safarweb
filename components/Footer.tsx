export default function Footer() {
  return (
    <footer className="bg-navy">
      <div className="container-shell py-12">
        <div className="divider-subtle pt-8">
          <p className="font-display text-xl font-semibold text-white">SAFAR CABS PRIVATE LIMITED</p>
          <p className="mt-3 text-sm text-white/80">CIN: U00000UP2026PTC000000</p>
          <p className="mt-2 text-sm text-white/80">Registered Office: Kanpur, Uttar Pradesh, India</p>
          <p className="mt-2 text-sm text-white/80">
            Contact:{" "}
            <a href="mailto:contact@safarcabs.com" className="text-orange hover:text-orange-light">
              contact@safarcabs.com
            </a>
          </p>
          <a href="#" className="mt-4 inline-block text-sm text-white/80 hover:text-white">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
