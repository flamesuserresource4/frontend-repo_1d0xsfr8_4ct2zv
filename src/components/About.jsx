import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="relative w-full bg-[#0b1222] py-20 text-slate-100">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">
              About Me
            </h2>
            <p className="mt-3 max-w-2xl text-slate-300">
              Sumit Chauhan is a passionate Full-Stack Developer and AI/ML student at IITM Group of Institutions (Murthal, Haryana), skilled in building intelligent systems and creative digital products. He explores emerging technologies, develops innovative projects, and loves blending design with powerful logic.
            </p>
          </div>
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          {/* Image morph effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-slate-900 to-slate-800"
          >
            <img
              src="https://images.unsplash.com/photo-1520975940400-38f084432c3b?q=80&w=1600&auto=format&fit=crop"
              alt="Sumit portrait"
              className="absolute inset-0 h-full w-full object-cover opacity-90 transition duration-700 group-hover:scale-105 group-hover:opacity-0"
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(6,182,212,0.15),transparent_60%)] opacity-0 transition duration-700 group-hover:opacity-100" />
            <div className="absolute inset-0 grid place-items-center">
              <div className="pointer-events-none origin-center scale-75 opacity-0 transition duration-700 group-hover:scale-100 group-hover:opacity-100">
                <div className="h-40 w-40 animate-pulse rounded-2xl border border-cyan-300/30 bg-gradient-to-br from-cyan-500/20 to-fuchsia-500/20 shadow-[0_0_60px_rgba(6,182,212,0.35)]" />
                <p className="mt-4 text-center text-sm text-cyan-200">Hover: photo → digital core</p>
              </div>
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.ul
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.12 } },
            }}
            className="relative space-y-6 border-l border-white/10 pl-6"
          >
            {[
              {
                title: 'B.Tech AI/ML – IITM Group of Institutions',
                period: '2024 – 2028',
                desc: 'Focused on artificial intelligence, machine learning, and practical systems engineering.'
              },
              {
                title: 'Certification – Intellus Design, Delhi',
                period: 'Full Stack & Data Analyst',
                desc: 'Gained hands-on expertise across web stacks and data analytics workflows.'
              },
              {
                title: 'Internship – Cothon Solutions',
                period: 'Dec 2024 – Jan 2025',
                desc: 'Contributed to production features and automation pipelines.'
              }
            ].map((item, idx) => (
              <motion.li
                key={idx}
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                className="relative rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur"
              >
                <span className="absolute -left-3 top-5 h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.6)]" />
                <h3 className="font-semibold text-white">{item.title}</h3>
                <p className="text-xs text-cyan-200/80">{item.period}</p>
                <p className="mt-2 text-sm text-slate-300">{item.desc}</p>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
