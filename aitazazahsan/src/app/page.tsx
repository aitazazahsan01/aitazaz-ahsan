// app/page.tsx
// This is the main page file. It imports and orchestrates all the components.

"use client";

import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import SkillsSection from './components/SkillsSection';
import ServicesSection from './components/ServicesSection';
import ProjectsSection from './components/ProjectsSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection'; // Import the new section
import Background from './components/Background';

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
      
      <main className="relative w-full bg-[#111119] text-white font-sans overflow-x-hidden">
        <Background />
        <Header />
                
        {/* The sections of your single-page application */}
        <div className="relative z-10">
          <HeroSection />
          <AboutSection />
          <ExperienceSection />
          <SkillsSection />
          <ServicesSection />
          <ProjectsSection />
          <TestimonialsSection />
          <ContactSection /> {/* Add the new section here */}
        </div>
      </main>
    </>
  );
}
