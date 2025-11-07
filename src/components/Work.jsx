import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Aurora Commerce',
    desc: 'High-conversion storefront with micro-interactions and realtime inventory.',
    tags: ['Next.js', 'Stripe', 'Edge'],
  },
  {
    title: 'Horizon OS',
    desc: '3D dashboard with spatial navigation and tactile feedback motion.',
    tags: ['Three.js', 'Framer Motion', 'WebGL'],
  },
  {
    title: 'Nebula Labs',
    desc: 'Brand site with generative visuals and smooth narrative scrolling.',
    tags: ['Vite', 'GSAP', 'Spline'],
  },
];

export default function Work() {
  return (
    <section id="work" className="relative py-28 bg-gradient-to-b from-black to-slate-950">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-white"
        >
          Selected Work
        </motion.h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md hover:bg-white/10 transition relative overflow-hidden"
            >
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition">
                <div className="absolute -inset-20 bg-gradient-to-tr from-cyan-500/10 via-fuchsia-500/10 to-transparent blur-2xl" />
              </div>
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-white">{p.title}</h3>
                <span className="text-xs text-white/60">{String(i + 1).padStart(2, '0')}</span>
              </div>
              <p className="mt-3 text-white/70">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map(t => (
                  <span key={t} className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/80 border border-white/10">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
