// app/components/Header.tsx
"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Menu, X } from 'lucide-react'; // Import icons for the mobile menu

// Using the most complete list of nav links for your site
const navLinks = ["About", "Experience", "Skills", "Services", "Projects", "Testimonials", "Contact"];

export default function Header() {
  // State to manage the mobile menu's visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuVariants = {
    hidden: { opacity: 0, x: '100%' },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3, ease: 'easeInOut' } }
  };

  return (
    <>
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
          
          {/* Desktop Navigation (hidden on mobile) */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} className="text-gray-300 hover:text-white transition-colors duration-300">
                {link}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button (visible only on mobile) */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(true)} className="text-white">
              <Menu size={28} />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex flex-col items-center justify-center"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <button 
              onClick={() => setIsMenuOpen(false)} 
              className="absolute top-6 right-8 text-gray-400 hover:text-white"
            >
              <X size={32} />
            </button>
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link) => (
                <a 
                  key={link} 
                  href={`#${link.toLowerCase()}`} 
                  className="text-3xl font-semibold text-gray-300 hover:text-white transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)} // Close menu on link click
                >
                  {link}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}



