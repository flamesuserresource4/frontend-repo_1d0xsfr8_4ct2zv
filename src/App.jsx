import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';

import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import WorksPage from './components/WorksPage';
import ContactPage from './components/ContactPage';

function AnimeBackdrop() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0" aria-hidden>
      {/* subtle scanlines */}
      <div className="absolute inset-0 opacity-[0.08] [background:repeating-linear-gradient(0deg,rgba(255,255,255,0.12)_0px,rgba(255,255,255,0.12)_1px,transparent_1px,transparent_3px)]" />
      {/* sakura/particle dots */}
      <div className="absolute inset-0">
        <div className="absolute -left-10 top-10 h-40 w-40 rounded-full bg-fuchsia-500/10 blur-3xl" />
        <div className="absolute -right-10 bottom-10 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl" />
      </div>
    </div>
  );
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const linkBase = 'rounded-md px-3 py-1 text-slate-200 hover:text-white';

  return (
    <header className={`fixed left-1/2 top-4 z-50 w-[92%] max-w-6xl -translate-x-1/2 rounded-2xl border backdrop-blur ${
      scrolled ? 'border-white/10 bg-black/40' : 'border-white/10 bg-black/20'
    }`}>
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
            <Link
              key={l.to}
              to={l.to}
              className={`${linkBase} ${location.pathname === l.to ? 'text-white' : ''}`}
            >
              {l.label}
            </Link>
          ))}
        </div>
        <Link to="/contact" className="hidden rounded-lg border border-cyan-400/30 bg-cyan-500/10 px-3 py-1.5 text-cyan-200 hover:bg-cyan-500/20 sm:inline-block">Hire Me</Link>
      </nav>
    </header>
  );
}

function PageTransition({ children }) {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

function Shell() {
  return (
    <div className="scroll-smooth bg-black text-white selection:bg-cyan-400/30 selection:text-white">
      <AnimeBackdrop />
      <Nav />
      <main className="relative z-10">
        <PageTransition>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/works" element={<WorksPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </PageTransition>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Shell />
    </BrowserRouter>
  );
}
