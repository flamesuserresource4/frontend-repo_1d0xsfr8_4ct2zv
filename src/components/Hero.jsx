import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-[#0f172a] text-white">
      {/* Spline 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient + grid overlays (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-[#0f172a]/40 to-[#0f172a]" />
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="w-full h-full bg-[radial-gradient(circle_at_20%_20%,rgba(6,182,212,0.15),transparent_40%),radial-gradient(circle_at_80%_50%,rgba(248,250,252,0.08),transparent_35%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 pb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-white/5 px-4 py-1.5 backdrop-blur"
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
          <span className="text-sm tracking-wide text-cyan-200">Dream. Code. Create.</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="text-balance bg-gradient-to-b from-white to-slate-200 bg-clip-text text-4xl font-extrabold leading-tight text-transparent sm:text-5xl md:text-6xl"
        >
          Hi, I’m Sumit Chauhan — a Futuristic Full-Stack Developer & AI Innovator
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-4 max-w-3xl text-pretty text-slate-200/90"
        >
          Crafting experiences where creativity meets intelligence. I build intelligent systems, immersive interfaces, and delightful digital products.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="group relative inline-flex items-center gap-2 rounded-xl border border-cyan-400/40 bg-cyan-500/10 px-6 py-3 text-cyan-200 transition hover:bg-cyan-500/20"
          >
            <span className="absolute inset-0 -z-0 rounded-xl bg-cyan-400/20 blur-md group-hover:bg-cyan-400/30" />
            <span className="relative font-semibold">Explore My Work</span>
          </a>
          <a
            href="#contact"
            className="relative inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3 text-white transition hover:bg-white/20"
          >
            <span className="relative font-semibold">Hire Me</span>
          </a>
        </motion.div>

        {/* Subtext */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="mt-10 text-xs text-slate-300/70"
        >
          Delhi, India • Full-Stack Developer | AI/ML Enthusiast | Creative Technologist
        </motion.div>
      </div>
    </section>
  );
}
