import { useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Work from './components/Work';
import Contact from './components/Contact';

// Smooth scrolling behavior and custom cursor follower + scroll progress
export default function App() {
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    // enable smooth scrolling
    document.documentElement.style.scrollBehavior = 'smooth';

    // custom monochrome cursor follower
    const cursor = document.createElement('div');
    cursor.setAttribute('aria-hidden', 'true');
    cursor.className = 'pointer-events-none fixed z-[60] h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white blur-[1px] mix-blend-screen opacity-80';
    document.body.appendChild(cursor);

    const trail = document.createElement('div');
    trail.className = 'pointer-events-none fixed z-[59] h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-3xl';
    document.body.appendChild(trail);

    let x = window.innerWidth / 2, y = window.innerHeight / 2;
    let tx = x, ty = y;
    const speed = 0.15;

    const onMove = (e) => {
      tx = e.clientX; ty = e.clientY;
    };
    window.addEventListener('pointermove', onMove);

    let raf = 0;
    const loop = () => {
      x += (tx - x) * speed;
      y += (ty - y) * speed;
      cursor.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      trail.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('pointermove', onMove);
      cursor.remove();
      trail.remove();
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white antialiased selection:bg-white/20">
      {/* Subtle scroll progress at the very top */}
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed left-0 right-0 top-0 z-[70] h-[2px] origin-left bg-white/60"
      />

      <Navbar />
      <main>
        <Hero />
        <Work />
        <Contact />
      </main>
      <footer className="border-t border-white/10 py-6 text-center text-white/60 bg-black/50">
        © {new Date().getFullYear()} Monochrome Studio — Crafted with motion.
      </footer>
    </div>
  );
}
