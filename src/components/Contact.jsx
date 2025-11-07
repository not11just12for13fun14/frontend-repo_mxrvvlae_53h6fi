import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

export default function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="relative py-28 bg-black">
      <div className="mx-auto max-w-3xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-white"
        >
          Let's build something exceptional
        </motion.h2>
        <form onSubmit={onSubmit} className="mt-8 grid gap-4">
          <input required placeholder="Name" className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/30" />
          <input required type="email" placeholder="Email" className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/30" />
          <textarea required placeholder="Tell me about your project" rows={5} className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/30" />
          <button type="submit" className="mt-2 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-black shadow-lg shadow-white/10 hover:shadow-white/20 transition">
            <Send className="h-4 w-4" /> Send Message
          </button>
          {sent && (
            <p className="text-white/80">Thanks! Your message has been noted.</p>
          )}
        </form>
      </div>
    </section>
  );
}
