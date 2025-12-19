'use client';

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-[90vh] flex flex-col justify-center items-center text-center px-6">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-7xl font-extrabold tracking-tight"
      >
        We Are AlgoRiders
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="mt-6 max-w-2xl text-lg text-muted"
      >
        A high-performance engineering team competing in hackathons and delivering
        real-world freelance solutions across AI, software, and systems.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-10 flex gap-6"
      >
        <a
          href="/contact"
          className="px-6 py-3 rounded-xl bg-white text-black font-semibold"
        >
          Work With Us
        </a>

        <a
          href="/team"
          className="px-6 py-3 rounded-xl border border-white/20"
        >
          Meet the Team
        </a>
      </motion.div>
    </section>
  );
}
