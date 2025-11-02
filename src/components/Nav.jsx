import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sparkles } from 'lucide-react';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const linkBase = 'rounded-md px-3 py-1 text-slate-200 hover:text-white';

  return (
    <header
      className={`fixed left-1/2 top-4 z-50 w-[92%] max-w-6xl -translate-x-1/2 rounded-2xl border backdrop-blur ${
        scrolled ? 'border-white/10 bg-black/40' : 'border-white/10 bg-black/20'
      }`}
    >
      <nav className="flex items-center justify-between px-4 py-3 text-sm">
        <Link to="/" className="inline-flex items-center gap-2 font-semibold tracking-wide text-cyan-300">
          <Sparkles className="h-4 w-4" /> SC
        </Link>
        <div className="flex flex-wrap items-center gap-2 sm:gap-4">
          {[
            { to: '/', label: 'Home' },
            { to: '/about', label: 'About' },
            { to: '/works', label: 'Works' },
            { to: '/contact', label: 'Contact' },
          ].map((l) => (
            <Link key={l.to} to={l.to} className={`${linkBase} ${location.pathname === l.to ? 'text-white' : ''}`}>
              {l.label}
            </Link>
          ))}
        </div>
        <Link
          to="/contact"
          className="hidden rounded-lg border border-cyan-400/30 bg-cyan-500/10 px-3 py-1.5 text-cyan-200 hover:bg-cyan-500/20 sm:inline-block"
        >
          Hire Me
        </Link>
      </nav>
    </header>
  );
}
