// app/components/Header.tsx
"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

// Updated navLinks array
const navLinks = ["About", "Experience", "Skills", "Services", "Projects", "Contact"];

export default function Header() {
  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 py-4 px-8 md:px-16 backdrop-blur-sm bg-black/10"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <Image
            src="/profile.jpg"
            alt="Muhammad Aitazaz Ahsan"
            width={40}
            height={40}
            className="rounded-full border-2 border-white/50 object-cover"
            onError={(e) => { e.currentTarget.src = 'https://placehold.co/40x40/7c3aed/ffffff?text=MA'; }}
          />
          <span className="font-bold text-lg">My Profile</span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="text-gray-300 hover:text-white transition-colors duration-300">
              {link}
            </a>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}
