import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative py-28 bg-gradient-to-b from-slate-950 to-black">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid gap-10 md:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="order-2 md:order-1"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white flex items-center gap-3">
              <Sparkles className="h-7 w-7 text-cyan-400" />
              About Me
            </h2>
            <p className="mt-4 text-white/70 leading-relaxed">
              I design and build immersive web experiences where motion, clarity, and performance converge. My approach blends
              product thinking with creative tech—resulting in interfaces that feel effortless and alive.
            </p>
            <ul className="mt-6 grid grid-cols-2 gap-3 text-white/80 text-sm">
              <li className="rounded-xl bg-white/5 border border-white/10 p-3">3D & Creative Coding</li>
              <li className="rounded-xl bg-white/5 border border-white/10 p-3">Motion Systems</li>
              <li className="rounded-xl bg-white/5 border border-white/10 p-3">Design Systems</li>
              <li className="rounded-xl bg-white/5 border border-white/10 p-3">Performance Tuning</li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="order-1 md:order-2"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-tr from-cyan-500/10 via-fuchsia-500/10 to-transparent">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-32 w-32 rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-500 blur-2xl opacity-40" />
              </div>
              <div className="absolute inset-0 p-6 flex items-end">
                <p className="text-white/80 text-sm">Carefully engineered details. Thoughtful interactions. Delightful flow.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
