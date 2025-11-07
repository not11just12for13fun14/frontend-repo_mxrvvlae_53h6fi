import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Work from './components/Work';
import About from './components/About';
import Contact from './components/Contact';

// Smooth scrolling behavior and custom cursor follower
export default function App() {
  useEffect(() => {
    // enable smooth scrolling
    document.documentElement.style.scrollBehavior = 'smooth';

    // custom 3D-like cursor follower
    const cursor = document.createElement('div');
    cursor.setAttribute('aria-hidden', 'true');
    cursor.className = 'pointer-events-none fixed z-[60] h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-cyan-400 to-fuchsia-500 blur-[1px] mix-blend-screen opacity-70';
    document.body.appendChild(cursor);

    const trail = document.createElement('div');
    trail.className = 'pointer-events-none fixed z-[59] h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-3xl';
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
    <div className="min-h-screen bg-black text-white antialiased selection:bg-cyan-500/30">
      <Navbar />
      <main>
        <Hero />
        <Work />
        <About />
        <Contact />
      </main>
      <footer className="border-t border-white/10 py-6 text-center text-white/60 bg-black/50">
        © {new Date().getFullYear()} Nebula Portfolio — Built with love and motion.
      </footer>
    </div>
  );
}
