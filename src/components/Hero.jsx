import { useRef, useEffect } from 'react';
import Spline from '@splinetool/react-spline';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.6]);

  // Prevent iOS overscroll glow capturing interactions
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    el.style.webkitOverflowScrolling = 'touch';
  }, []);

  return (
    <section id="home" className="relative h-[100svh] w-full overflow-hidden bg-black">
      <div ref={containerRef} className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/hqXbe5uy0NxM7CDI/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle monochrome vignettes that don't block interaction */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 translate-x-1/3 translate-y-1/3 rounded-full bg-white/5 blur-3xl" />
      </div>

      <motion.div style={{ y, opacity }} className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white"
        >
          Minimal. Modern. Alive.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
          className="mt-4 max-w-2xl text-base sm:text-lg text-white/70"
        >
          A monochrome portfolio with an interactive 3D canvas and buttery-smooth motion.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
          className="mt-8 flex items-center gap-4"
        >
          <a
            href="#work"
            className="rounded-full bg-white text-black px-6 py-3 font-medium shadow-xl shadow-white/10 transition will-change-transform hover:shadow-white/20 active:scale-[0.98]"
          >
            See Work
          </a>
          <a
            href="#contact"
            className="rounded-full bg-transparent border border-white/20 text-white px-6 py-3 font-medium transition will-change-transform hover:border-white/40 active:scale-[0.98]"
          >
            Get In Touch
          </a>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            className="text-sm tracking-widest"
          >
            SCROLL
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
