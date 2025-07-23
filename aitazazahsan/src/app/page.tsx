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
import LetsWorkTogetherSection from './components/LetsWorkTogetherSection';
import ContactSection from './components/ContactSection';
import Background from './components/Background';

export default function Home() {
  return (
    <>
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
      
      <Background />
      <Header />
      
      {/* The problematic overflow-x-hidden class has been REMOVED from this main tag */}
      <main className="relative w-full bg-[#111119] text-white font-sans">
        <div className="relative z-10">
          <HeroSection />
          <AboutSection />
          <ExperienceSection />
          <SkillsSection />
          <ServicesSection />
          <ProjectsSection />
          <TestimonialsSection />
          <LetsWorkTogetherSection />
          <ContactSection />
        </div>
      </main>
    </>
  );
}
