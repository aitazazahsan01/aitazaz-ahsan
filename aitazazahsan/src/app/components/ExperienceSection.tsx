// app/components/ExperienceSection.tsx
"use client";

import { useState, FC, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, GraduationCap, Award, Calendar, BarChart2, Users, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';

// Define types for the StatItem props for better TypeScript support
interface StatItemProps {
  icon: ReactNode;
  value: number;
  label: string;
  inView: boolean;
}

// Stat Item Component for the Experience Panel
const StatItem: FC<StatItemProps> = ({ icon, value, label, inView }) => (
    <div className="flex flex-col items-center text-center">
        <div className="text-purple-400 mb-2">{icon}</div>
        <div className="text-4xl font-bold">
            {inView && <CountUp end={value} duration={2.5} />}+
        </div>
        <p className="text-sm text-gray-400 uppercase tracking-widest">{label}</p>
    </div>
);

// Panels Data
const panels = [
    {
        title: "Experience",
        content: (inView: boolean) => (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 w-full max-w-4xl">
                <StatItem icon={<Calendar size={32} />} value={1} label="Year Experience" inView={inView} />
                <StatItem icon={<BarChart2 size={32} />} value={10} label="Projects Completed" inView={inView} />
                <StatItem icon={<Users size={32} />} value={10} label="Happy Clients" inView={inView} />
                <StatItem icon={<Star size={32} />} value={1} label="Awards Won" inView={inView} />
            </div>
        )
    },
    {
        title: "Education",
        content: () => (
            <div className="text-left bg-black/20 p-8 rounded-lg max-w-2xl w-full">
                <h3 className="text-2xl font-bold mb-4 text-purple-300">Bachelor of Engineering in Software Engineering</h3>
                <p className="text-xl font-semibold mb-2">National University of Sciences and Technology (NUST)</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-lg mt-4">
                    <div><strong className="text-gray-400">GPA:</strong> 3.7+</div>
                    <div><strong className="text-gray-400">Semester:</strong> 5th</div>
                    <div><strong className="text-gray-400">Status:</strong> Ongoing</div>
                </div>
            </div>
        )
    },
    {
        title: "Certifications",
        content: () => (
             <div className="text-left bg-black/20 p-8 rounded-lg max-w-2xl w-full">
                <h3 className="text-2xl font-bold mb-4 text-purple-300">Skills & Learning</h3>
                <ul className="list-disc list-inside space-y-2 text-lg">
                    <li>MERN Stack Development Bootcamp</li>
                    <li>Advanced TypeScript and Next.js Patterns</li>
                    <li>Certified AI & Machine Learning Practitioner</li>
                    <li>Responsive Web Design Principles</li>
                </ul>
            </div>
        )
    }
];

export default function ExperienceSection() {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

    const variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        })
    };

    const paginate = (newDirection: number) => {
        setDirection(newDirection);
        setIndex((prevIndex) => (prevIndex + newDirection + panels.length) % panels.length);
    };

    const currentPanel = panels[index];

    return (
        <section id="experience" className="min-h-screen py-24 px-4 relative z-20 bg-[#111119] flex flex-col items-center justify-center overflow-hidden" ref={ref}>
            {/* Striped Background */}
            <div 
                className="absolute inset-0 z-0 opacity-20"
                style={{
                    backgroundImage: 'repeating-linear-gradient(-45deg, #2d2d3a, #2d2d3a 10px, #1e1e28 10px, #1e1e28 20px)',
                }}
            ></div>
            
            <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
                <motion.h2 
                    className="text-4xl md:text-5xl font-bold mb-4 text-center" 
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                    initial={{ opacity: 0, y: -20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                >
                    {currentPanel.title}
                </motion.h2>

                <div className="relative w-full h-[300px] flex items-center justify-center mt-8">
                    <AnimatePresence initial={false} custom={direction}>
                        <motion.div
                            key={index}
                            custom={direction}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: "spring", stiffness: 300, damping: 30 },
                                opacity: { duration: 0.2 }
                            }}
                            className="absolute w-full h-full flex items-center justify-center px-4"
                        >
                            {currentPanel.content(inView)}
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Navigation */}
                <div className="mt-12 flex items-center gap-4">
                    <button onClick={() => paginate(-1)} className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                        <ChevronLeft size={24} />
                    </button>
                    <div className="flex gap-2">
                        {panels.map((_, i) => (
                            <div key={i} className={`w-3 h-3 rounded-full transition-colors ${i === index ? 'bg-purple-400' : 'bg-gray-600'}`}></div>
                        ))}
                    </div>
                    <button onClick={() => paginate(1)} className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                        <ChevronRight size={24} />
                    </button>
                </div>
            </div>
        </section>
    );
}
