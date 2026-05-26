import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-ink py-12">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <div className="text-xl font-semibold text-ink-inverted">Kaizen Systems</div>
            <p className="mt-3 max-w-[360px] text-sm leading-6 text-ink-inverted-muted">
              Enterprise-grade automation systems for local business growth.
            </p>
          </div>

          <div>
            <div className="text-sm font-semibold text-ink-inverted">Services</div>
            <div className="mt-4 grid gap-3 text-sm text-ink-inverted-muted">
              <span>Landing page & lead capture</span>
              <span>Lead & follow-up system</span>
              <span>Client onboarding system</span>
              <span>Reputation & referral system</span>
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold text-ink-inverted">Company</div>
            <div className="mt-4 grid gap-3 text-sm">
              <Link to="/services" className="text-ink-inverted-muted hover:text-ink-inverted">
                Services
              </Link>
              <Link to="/how-it-works" className="text-ink-inverted-muted hover:text-ink-inverted">
                How It Works
              </Link>
              <Link to="/contact" className="text-ink-inverted-muted hover:text-ink-inverted">
                Contact
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-dark pt-6 text-xs text-ink-inverted-muted">
          2026 Kaizen Systems. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
