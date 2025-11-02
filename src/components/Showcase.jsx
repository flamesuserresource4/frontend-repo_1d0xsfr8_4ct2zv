import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Bot, Sparkles, AppWindow, PenTool, Briefcase } from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: 'Web Development',
    desc: 'Full‑stack websites with modern UX/UI and robust backend integrations.'
  },
  {
    icon: Bot,
    title: 'AI/ML Projects',
    desc: 'Custom intelligent systems, automation tools, and data‑driven analysis.'
  },
  {
    icon: Sparkles,
    title: 'Creative Coding',
    desc: 'Interactive, visual, and generative projects using AI and graphics.'
  },
  {
    icon: AppWindow,
    title: 'App Development',
    desc: 'Cross‑platform responsive apps built for performance and scale.'
  },
  {
    icon: PenTool,
    title: 'UI/UX Design',
    desc: 'Minimalistic, futuristic interfaces with glassmorphism and motion.'
  },
  {
    icon: Briefcase,
    title: 'Consulting & Freelancing',
    desc: 'Technology‑based solutions, roadmaps, and delivery for your vision.'
  }
];

const works = [
  { title: 'FlySyk Tour – Travel Website', tag: 'Web', img: 'https://images.unsplash.com/photo-1491555103944-7c647fd857e6?q=80&w=1600&auto=format&fit=crop', desc: 'A sleek travel platform with immersive visuals and booking flows.' },
  { title: 'Restaurant Website', tag: 'Web', img: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=1600&auto=format&fit=crop', desc: 'Food & hospitality theme with menu management and reservations.' },
  { title: 'Hand Gesture Recognition Game (3D)', tag: 'AI/ML', img: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop', desc: 'Real‑time gesture detection with 3D feedback and scoring.' },
  { title: 'Python Voice Assistant', tag: 'AI/ML', img: 'https://images.unsplash.com/photo-1518441902110-31b4b3fdfd2e?q=80&w=1600&auto=format&fit=crop', desc: 'Voice‑controlled assistant for tasks, notes, and automation.' },
  { title: 'GitFinder – GitHub Project Search Engine', tag: 'Web', img: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?q=80&w=1600&auto=format&fit=crop', desc: 'Discover trending repos with filters and instant previews.' },
  { title: 'Nopo – Marketing Website Brand', tag: 'Brand', img: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=1600&auto=format&fit=crop', desc: 'Minimal brand system and landing microsite with animations.' },
  { title: 'Orivon – AI Personal Brand Builder', tag: 'AI/ML', img: 'https://images.unsplash.com/photo-1660641723160-e19aa42cfda7?q=80&w=1600&auto=format&fit=crop', desc: 'Generative branding assistant powered by ML workflows.' },
];

export default function Showcase() {
  const [active, setActive] = useState('All');
  const [modal, setModal] = useState(null);

  const tags = ['All', 'Web', 'AI/ML', 'Brand'];
  const filtered = active === 'All' ? works : works.filter(w => w.tag === active);

  return (
    <section id="projects" className="relative w-full bg-[#0f172a] py-20 text-slate-100">
      <div className="mx-auto max-w-7xl px-6">
        {/* Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">Services</h2>
          <p className="mt-2 max-w-2xl text-slate-300">From concept to code — I design and build intelligent, interactive systems.</p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(({ icon: Icon, title, desc }) => (
              <motion.div
                key={title}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-2xl border border-cyan-400/20 bg-white/5 p-6 backdrop-blur transition"
              >
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan-400/10 blur-2xl" />
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-500/10 text-cyan-300 shadow-[0_0_20px_rgba(6,182,212,0.3)]">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm text-slate-300">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Portfolio */}
        <div>
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">Projects</h2>
            <div className="flex flex-wrap gap-2">
              {tags.map(t => (
                <button
                  key={t}
                  onClick={() => setActive(t)}
                  className={`rounded-full border px-3 py-1 text-sm transition ${
                    active === t
                      ? 'border-cyan-400 bg-cyan-500/10 text-cyan-200'
                      : 'border-white/15 bg-white/5 text-slate-200 hover:bg-white/10'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((w) => (
              <motion.button
                key={w.title}
                onClick={() => setModal(w)}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 text-left"
              >
                <div className="aspect-video overflow-hidden">
                  <img src={w.img} alt={w.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                </div>
                <div className="p-4">
                  <p className="text-xs text-cyan-200/80">{w.tag}</p>
                  <h3 className="text-base font-semibold text-white">{w.title}</h3>
                </div>
                <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100" aria-hidden>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#06b6d4]/20 via-transparent to-transparent" />
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {modal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 grid place-items-center bg-black/60 p-6"
            onClick={() => setModal(null)}
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 10, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
              className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-white/10 bg-[#0b1222] text-slate-100 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="aspect-video">
                <img src={modal.img} alt={modal.title} className="h-full w-full object-cover" />
              </div>
              <div className="p-6">
                <p className="text-xs text-cyan-200/80">{modal.tag}</p>
                <h3 className="text-xl font-semibold text-white">{modal.title}</h3>
                <p className="mt-2 text-slate-300">{modal.desc}</p>
                <div className="mt-4 flex justify-end">
                  <button
                    onClick={() => setModal(null)}
                    className="rounded-lg border border-white/20 bg-white/5 px-4 py-2 text-sm text-white hover:bg-white/10"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
