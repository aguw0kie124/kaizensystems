import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Services', href: '/services' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Industries', href: '/#industries' },
  { label: 'Contact', href: '/contact' },
];

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const isActive = (href: string) => {
    if (href.startsWith('/#')) return false;
    return location.pathname === href;
  };

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/#')) {
      const targetId = href.slice(2);
      if (location.pathname === '/') {
        e.preventDefault();
        const el = document.getElementById(targetId);
        el?.scrollIntoView({ behavior: 'smooth' });
      } else {
        // Will navigate to home page with hash, let router handle it
      }
    }
  };

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 h-[72px] flex items-center bg-white border-b border-light"
      >
        <div className="w-full max-w-[1200px] mx-auto px-6 md:px-10 flex items-center justify-between">
          <Link to="/" className="flex items-center" aria-label="Kaizen Systems home">
            <span className="text-lg font-semibold text-ink">Kaizen Systems</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={(e) => handleAnchorClick(e, link.href)}
                className={`text-sm transition-colors duration-200 ${
                  isActive(link.href)
                    ? 'text-ink border-b-2 border-accent-sage pb-1'
                    : 'text-ink-light hover:text-ink'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="text-sm font-semibold bg-ink text-ink-inverted px-5 py-2.5 rounded-sm hover:bg-accent-sage transition-colors duration-200"
            >
              Discuss outcomes
            </Link>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} className="text-ink" />
          </button>
        </div>
      </nav>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 z-[100] bg-white transition-transform duration-300 md:hidden ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between border-b border-light px-6 py-5">
          <Link to="/" className="flex items-center" onClick={() => setMobileOpen(false)}>
            <span className="text-lg font-semibold text-ink">Kaizen Systems</span>
          </Link>
          <button onClick={() => setMobileOpen(false)} aria-label="Close menu">
            <X size={28} className="text-ink" />
          </button>
        </div>
        <div className="flex flex-col gap-6 px-6 pt-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={(e) => {
                handleAnchorClick(e, link.href);
                setMobileOpen(false);
              }}
              className="text-2xl font-semibold text-ink"
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setMobileOpen(false)}
            className="text-base font-semibold bg-ink text-ink-inverted px-6 py-3 rounded-sm mt-4 text-center"
          >
            Discuss outcomes
          </Link>
        </div>
      </div>
    </>
  );
}
