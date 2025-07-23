// app/page.tsx
"use client";

import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import SkillsSection from './components/SkillsSection';
import ServicesSection from './components/ServicesSection';
import ProjectsSection from './components/ProjectsSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import Background from './components/Background';
// I've added the import for LetsWorkTogetherSection as it was missing in the code you sent
import LetsWorkTogetherSection from './components/LetsWorkTogetherSection';

export default function Home() {
  return (
    <>
      {/* Global styles for font and animated gradient */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700;900&display=swap');
        html { scroll-behavior: smooth; }
        .animated-gradient {
          background-size: 200% 200%;
          animation: gradient-animation 5s ease infinite;
        }
        @keyframes gradient-animation {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
      
      {/* --- CORRECTED LAYOUT --- */}
      {/* Header and Background are moved outside of the main tag */}
      <Background />
      <Header />
      
      <main className="relative w-full bg-[#111119] text-white font-sans overflow-x-hidden">
        {/* The sections of your single-page application */}
        <div className="relative z-10">
          <HeroSection />
          <AboutSection />
          <ExperienceSection />
          <SkillsSection />
          <ServicesSection />
          <ProjectsSection />
          <TestimonialsSection />
          {/* I've added the missing LetsWorkTogetherSection back in */}
          <LetsWorkTogetherSection />
          <ContactSection />
        </div>
      </main>
    </>
  );
}
