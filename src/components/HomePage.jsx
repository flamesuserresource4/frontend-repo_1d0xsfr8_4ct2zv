import Hero from './Hero';
import { motion } from 'framer-motion';
import { Sparkles, Rocket, Star } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="relative">
      <Hero />

      {/* Anime vibe ribbon */}
      <div className="relative z-10 bg-[#0b1222] py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-8 flex items-center gap-3">
            <Sparkles className="h-5 w-5 text-cyan-300" />
            <h3 className="text-xl font-semibold tracking-wide text-white">Featured Highlights</h3>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[{
              icon: Rocket,
              title: 'Hyper Motion UI',
              desc: 'Framer Motion powered transitions with anime‑style easing.'
            }, {
              icon: Star,
              title: 'Neon + Glass',
              desc: 'Cyan neon glow with glassmorphic cards and grids.'
            }, {
              icon: Sparkles,
              title: '3D Interactions',
              desc: 'Interactive Spline scene layered with safe overlays.'
            }].map(({ icon: Icon, title, desc }) => (
              <motion.div key={title} whileHover={{ y: -6 }} className="group rounded-2xl border border-cyan-400/20 bg-white/5 p-6 backdrop-blur">
                <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-500/10 text-cyan-300">
                  <Icon className="h-6 w-6" />
                </div>
                <h4 className="text-white">{title}</h4>
                <p className="mt-1 text-sm text-slate-300">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
