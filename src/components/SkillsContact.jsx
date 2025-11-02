import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, Link as LinkIcon, MessageSquare } from 'lucide-react';

const skills = [
  { label: 'Python', value: 90 },
  { label: 'JavaScript', value: 88 },
  { label: 'PHP', value: 70 },
  { label: 'SQL', value: 78 },
  { label: 'Bootstrap', value: 86 },
  { label: 'jQuery', value: 80 },
  { label: 'Flask', value: 74 },
  { label: 'OpenGL', value: 60 },
  { label: 'AI/ML', value: 82 },
  { label: 'Data Analytics', value: 75 },
  { label: 'Web Design', value: 85 },
  { label: 'API Integration', value: 80 },
  { label: 'GitHub', value: 88 },
  { label: 'VS Code', value: 92 },
  { label: 'Figma', value: 84 },
];

export default function SkillsContact() {
  return (
    <section id="skills" className="relative w-full bg-[#0b1222] py-20 text-slate-100">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Skills */}
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">Skills</h2>
            <p className="mt-2 max-w-2xl text-slate-300">An evolving stack across languages, frameworks, tools, and core concepts.</p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {skills.map((s, i) => (
                <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm text-slate-200">{s.label}</span>
                    <span className="text-xs text-cyan-200/80">{s.value}%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-white/10">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.value}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: i * 0.02 }}
                      className="h-2 rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-400 shadow-[0_0_20px_rgba(6,182,212,0.5)]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div id="contact">
            <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">Contact</h2>
            <p className="mt-2 max-w-2xl text-slate-300">Have a project in mind? Let’s collaborate to build something remarkable.</p>

            <form onSubmit={(e) => e.preventDefault()} className="mt-6 space-y-4 rounded-2xl border border-cyan-400/20 bg-white/5 p-6 backdrop-blur">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-xs text-cyan-200">Name</label>
                  <input className="w-full rounded-lg border border-white/10 bg-black/30 px-3 py-2 text-sm text-white placeholder:text-slate-400 focus:border-cyan-400 focus:outline-none" placeholder="Your name" />
                </div>
                <div>
                  <label className="mb-1 block text-xs text-cyan-200">Email</label>
                  <input type="email" className="w-full rounded-lg border border-white/10 bg-black/30 px-3 py-2 text-sm text-white placeholder:text-slate-400 focus:border-cyan-400 focus:outline-none" placeholder="you@email.com" />
                </div>
              </div>
              <div>
                <label className="mb-1 block text-xs text-cyan-200">Message</label>
                <textarea rows={4} className="w-full rounded-lg border border-white/10 bg-black/30 px-3 py-2 text-sm text-white placeholder:text-slate-400 focus:border-cyan-400 focus:outline-none" placeholder="Tell me about your idea..." />
              </div>
              <button className="group relative inline-flex items-center justify-center gap-2 rounded-xl border border-cyan-400/40 bg-cyan-500/10 px-5 py-2.5 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-500/20">
                <span className="absolute inset-0 -z-0 rounded-xl bg-cyan-400/20 blur-md group-hover:bg-cyan-400/30" />
                <MessageSquare className="h-4 w-4" />
                Send Message
              </button>
            </form>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <a href="mailto:sumit@example.com" className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 hover:bg-white/10">
                <Mail className="h-4 w-4 text-cyan-300" /> sumit@example.com
              </a>
              <a href="tel:+911234567890" className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 hover:bg-white/10">
                <Phone className="h-4 w-4 text-cyan-300" /> +91 12345 67890
              </a>
              <a href="https://github.com/" target="_blank" className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 hover:bg-white/10" rel="noreferrer">
                <Github className="h-4 w-4 text-cyan-300" /> GitHub
              </a>
              <a href="https://linkedin.com/" target="_blank" className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 hover:bg-white/10" rel="noreferrer">
                <Linkedin className="h-4 w-4 text-cyan-300" /> LinkedIn
              </a>
              <a href="https://quora.com/" target="_blank" className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 hover:bg-white/10" rel="noreferrer">
                <LinkIcon className="h-4 w-4 text-cyan-300" /> Quora
              </a>
              <a href="https://reddit.com/" target="_blank" className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 hover:bg-white/10" rel="noreferrer">
                <LinkIcon className="h-4 w-4 text-cyan-300" /> Reddit
              </a>
            </div>

            {/* Footer */}
            <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-slate-400">
              <div className="mx-auto mb-3 h-px w-32 animate-pulse bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
              <p>Designed & Developed by Sumit Chauhan | Powered by AI</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
