import { useEffect, useRef } from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    // Smooth reveal on mount
  }, []);

  return (
    <section id="home" className="relative h-[100svh] w-full overflow-hidden bg-gradient-to-b from-black via-slate-950 to-black">
      <div ref={containerRef} className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/N8g2VNcx8Rycz93J/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Glow overlays that don't block interaction */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 translate-x-1/3 translate-y-1/3 rounded-full bg-fuchsia-500/20 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-white via-cyan-200 to-fuchsia-300 bg-clip-text text-transparent"
        >
          Crafting Futuristic Experiences
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
          className="mt-4 max-w-2xl text-base sm:text-lg text-white/70"
        >
          A sleek 3D portfolio with interactive depth, buttery-smooth scrolling, and motion that feels alive.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
          className="mt-8 flex items-center gap-4"
        >
          <a href="#work" className="rounded-full bg-white text-black px-6 py-3 font-medium shadow-xl shadow-cyan-500/20 hover:shadow-cyan-500/30 transition">See Work</a>
          <a href="#contact" className="rounded-full bg-transparent border border-white/20 text-white px-6 py-3 font-medium hover:border-white/40 transition">Get In Touch</a>
        </motion.div>
      </div>
    </section>
  );
}
