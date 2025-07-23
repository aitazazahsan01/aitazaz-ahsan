// app/components/AboutSection.tsx
"use client";

import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Download } from 'lucide-react';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="about" className="min-h-screen py-24 px-4 sm:px-8 md:px-16 relative z-20 bg-[#111119] flex items-center">
      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Left Column: Text Content */}
        <div className="text-left">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: "'Poppins', sans-serif" }}>
            ABOUT ME
          </h2>
          <p className="text-gray-300 text-lg mb-6 leading-relaxed">
            I am a driven Software Engineering student at NUST, specializing in crafting dynamic and responsive web experiences. With a solid foundation in web development, I am now passionately expanding my skills into the fascinating realm of Artificial Intelligence. I thrive on solving complex problems and am dedicated to building applications that are not only functional but also intuitive and user-centric.
          </p>
          <div className="flex items-center gap-6 mb-8">
            <a href="mailto:code.aitazaz@gmail.com" className="text-gray-400 hover:text-white transition-colors"><Mail size={28}/></a>
            <a href="https://www.linkedin.com/in/muhammad-aitazaz-ahsan-4b2480353" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><Linkedin size={28}/></a>
            <a href="https://github.com/aitazazahsan01" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><Github size={28}/></a>
          </div>
          <a href="/MY_CV.pdf" download
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:scale-105 transform transition-transform duration-300"
          >
            <Download size={20}/>
            Download CV
          </a>
        </div>

        {/* Right Column: Image */}
        <motion.div
          className="relative w-full max-w-sm mx-auto h-auto"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-500 rounded-2xl blur-md animate-pulse"></div>
          <div className="relative p-1.5 bg-gradient-to-br from-purple-600 to-blue-500 rounded-2xl">
            <div className="bg-[#111119] p-1 rounded-xl">
              <Image
                src="/profile.jpg"
                alt="A photo of Muhammad Aitazaz Ahsan"
                width={500}
                height={600}
                className="rounded-lg object-cover w-full h-full"
                onError={(e) => { e.currentTarget.src = 'https://placehold.co/500x600/111119/ffffff?text=Profile+Pic'; }}
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
