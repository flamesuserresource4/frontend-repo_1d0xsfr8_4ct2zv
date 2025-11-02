import { useEffect, useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Showcase from './components/Showcase';
import SkillsContact from './components/SkillsContact';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="scroll-smooth bg-black text-white selection:bg-cyan-400/30 selection:text-white">
      {/* Floating Nav */}
      <header className={`fixed left-1/2 top-4 z-50 w-[92%] max-w-6xl -translate-x-1/2 rounded-2xl border backdrop-blur ${
        scrolled ? 'border-white/10 bg-black/40' : 'border-white/10 bg-black/20'
      }`}>
        <nav className="flex items-center justify-between px-4 py-3 text-sm">
          <a href="#home" className="font-semibold tracking-wide text-cyan-300">SC</a>
          <div className="flex flex-wrap items-center gap-2 sm:gap-4">
            <a href="#about" className="rounded-md px-3 py-1 text-slate-200 hover:text-white">About</a>
            <a href="#projects" className="rounded-md px-3 py-1 text-slate-200 hover:text-white">Work</a>
            <a href="#skills" className="rounded-md px-3 py-1 text-slate-200 hover:text-white">Skills</a>
            <a href="#contact" className="rounded-md px-3 py-1 text-slate-200 hover:text-white">Contact</a>
          </div>
          <a href="#contact" className="hidden rounded-lg border border-cyan-400/30 bg-cyan-500/10 px-3 py-1.5 text-cyan-200 hover:bg-cyan-500/20 sm:inline-block">Hire Me</a>
        </nav>
      </header>

      <main>
        <Hero />
        <About />
        <Showcase />
        <SkillsContact />
      </main>
    </div>
  );
}

export default App;
