// app/components/HeroSection.tsx
"use client";

import { motion, Variants } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="hero" className="h-screen flex flex-col justify-center items-center text-center px-4 sticky top-0">
      <motion.div
        className="flex flex-col items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-6xl md:text-8xl font-black tracking-tighter"
          style={{ fontFamily: "'Poppins', sans-serif" }}
          variants={itemVariants}
        >
          <span className="bg-gradient-to-r from-gray-200 via-white to-gray-400 bg-clip-text text-transparent animated-gradient">
            Muhammad
          </span>
          <br />
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animated-gradient">
            Aitazaz Ahsan
          </span>
        </motion.h1>
        <motion.p
          className="mt-4 text-xl md:text-2xl text-gray-400 max-w-2xl"
          variants={itemVariants}
        >
          Software Engineer and Web Developer
        </motion.p>
        <motion.div
          className="mt-10 flex flex-col sm:flex-row gap-4"
          variants={itemVariants}
        >
          {/* --- UPDATED "View Work" BUTTON --- */}
          <motion.a
            href="#projects"
            className="px-8 py-3 bg-white text-black font-semibold rounded-lg shadow-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Work
          </motion.a>
          
          {/* --- UPDATED "Contact Me" BUTTON --- */}
          <motion.a
            href="#contact"
            className="px-8 py-3 bg-transparent border-2 border-white/50 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me <ArrowRight className="inline ml-2 h-4 w-4" />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
