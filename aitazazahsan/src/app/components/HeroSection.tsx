// app/components/HeroSection.tsx
"use client";

import { motion, Variants } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';
import ParticleBackground from './ParticleBackground';

export default function HeroSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.4, delayChildren: 0.5 },
    },
  };

  const nameVariants: Variants = {
    hidden: { y: 50, opacity: 0, scale: 0.8 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { type: 'spring', stiffness: 100, damping: 15, duration: 1 },
    },
  };

  const buttonVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    // The padding-top class (pt-20) has been added here to push content down
    <div className="h-full w-full flex flex-col justify-center items-center text-center relative p-4 pt-20">
      <ParticleBackground />

      <motion.div
        className="flex flex-col items-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-6xl md:text-8xl font-black tracking-tighter"
          style={{ fontFamily: "'Poppins', sans-serif" }}
          variants={nameVariants}
        >
          <span className="bg-gradient-to-r from-gray-200 via-white to-gray-400 bg-clip-text text-transparent animated-gradient">
            Muhammad
          </span>
          <br />
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animated-gradient">
            Aitazaz Ahsan
          </span>
        </motion.h1>
        
        <motion.div variants={buttonVariants}>
            <TypeAnimation
                sequence={[
                    'Software Engineer',
                    2000,
                    'Web Developer',
                    2000,
                    'AI Enthusiast',
                    2000,
                ]}
                wrapper="p"
                speed={50}
                className="mt-4 text-xl md:text-2xl text-gray-400 max-w-2xl"
                repeat={Infinity}
            />
        </motion.div>

        <motion.div
          className="mt-10 flex flex-col sm:flex-row gap-4"
          variants={buttonVariants}
        >
          <motion.a
            href="#projects"
            className="px-8 py-3 bg-white text-black font-semibold rounded-lg shadow-lg hover:bg-gray-200 transition-all duration-300 transform"
            whileHover={{ scale: 1.1, boxShadow: "0px 0px 20px rgba(255, 255, 255, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          >
            View Work
          </motion.a>
          
          <motion.a
            href="#contact"
            className="px-8 py-3 bg-transparent border-2 border-white/50 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 transform"
            whileHover={{ scale: 1.1, boxShadow: "0px 0px 20px rgba(192, 132, 252, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          >
            Contact Me <ArrowRight className="inline ml-2 h-4 w-4" />
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  );
}
