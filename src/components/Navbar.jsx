import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Rocket, User, FolderGit2 } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 ${
        scrolled ? 'backdrop-blur-xl bg-black/40 shadow-lg shadow-cyan-500/5' : 'backdrop-blur-sm bg-black/20'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2 text-white">
            <Rocket className="h-6 w-6 text-cyan-400" />
            <span className="font-semibold tracking-tight">Nebula Portfolio</span>
          </a>
          <div className="hidden sm:flex items-center gap-6 text-sm">
            <a href="#work" className="text-white/80 hover:text-white transition-colors flex items-center gap-2">
              <FolderGit2 className="h-4 w-4" /> Work
            </a>
            <a href="#about" className="text-white/80 hover:text-white transition-colors flex items-center gap-2">
              <User className="h-4 w-4" /> About
            </a>
            <a href="#contact" className="px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-black font-medium shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-shadow">
              Contact
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
