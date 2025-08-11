// app/components/ExperienceSection.tsx
"use client";

import { useState, FC, ReactNode, useRef } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Calendar, BarChart2, Users, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';

// --- Helper Components & Data ---

// Stat Item for Experience Tab
interface StatItemProps {
  icon: ReactNode;
  value: number;
  label: string;
  inView: boolean;
}
const StatItem: FC<StatItemProps> = ({ icon, value, label, inView }) => (
    <div className="flex flex-col items-center text-center">
        <div className="text-purple-400 mb-2">{icon}</div>
        <div className="text-4xl font-bold">
            {inView && <CountUp end={value} duration={2.5} />}+
        </div>
        <p className="text-sm text-gray-400 uppercase tracking-widest">{label}</p>
    </div>
);

// Internship Data for Education Tab
const internships = [
    {
        company: "Special Communication Organization",
        role: "IT Intern",
        duration: "May 2024 - July 2024",
        logo: <div className="font-bold text-lg text-green-400">SCO</div>,
        description: "Gained hands-on experience in network infrastructure, system administration, and providing technical support within a large-scale telecom organization."
    },
    {
        company: "Nexium",
        role: "AI Enhanced Full Stack Developer Intern",
        duration: "June 2025 - July 2025",
        logo: <div className="font-bold text-lg text-cyan-400">NEX</div>,
        description: "Worked on developing and integrating AI features into full-stack applications, focusing on machine learning models and modern web technologies."
    },
    {
        company: "Khuda Hafiz",
        role: "Web Developer Intern",
        duration: "Aug 2025 - Sept 2025",
        logo: <div className="font-bold text-lg text-rose-400">KH</div>,
        description: "Contributed to the core development of the startup's primary web platform, enhancing features and improving the overall user experience."
    }
];

// --- Panels Data ---
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
        title: "Education & Internships",
        content: () => (
            <div className="w-full max-w-5xl flex flex-col items-center">
                 <div className="text-center mb-8 bg-black/20 p-6 rounded-lg">
                    <h3 className="text-2xl font-bold text-purple-300">BE in Software Engineering</h3>
                    <p className="text-xl font-semibold">National University of Sciences and Technology (NUST)</p>
                </div>
                <InternshipTimeline />
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

// --- Internship Timeline Component ---
const InternshipTimeline = () => {
    const constraintsRef = useRef(null);
    return (
        <div ref={constraintsRef} className="w-full cursor-grab overflow-hidden">
            <motion.div 
                className="flex relative items-center h-80"
                drag="x"
                dragConstraints={constraintsRef}
            >
                {/* Timeline Line */}
                <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-700" />

                {/* Internship Nodes */}
                <div className="flex">
                    {internships.map((internship, index) => (
                        <div key={index} className="relative flex-shrink-0 w-80 px-4">
                            <div className={`absolute top-1/2 left-4 w-4 h-4 rounded-full bg-purple-500 border-2 border-gray-900 z-10 ${index % 2 === 0 ? '-translate-y-20' : 'translate-y-16'}`} />
                            <div className={`absolute top-1/2 left-4 h-20 w-0.5 bg-gray-700 ${index % 2 === 0 ? 'bottom-1/2' : 'top-1/2'}`} />
                            
                            <motion.div 
                                className={`p-4 bg-gray-900/80 backdrop-blur-sm rounded-lg border border-gray-800 absolute left-10 w-72 ${index % 2 === 0 ? 'bottom-[calc(50%+2rem)]' : 'top-[calc(50%+2rem)]'}`}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.6 }}
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center border border-gray-700">
                                        {internship.logo}
                                    </div>
                                    <span className="text-xs text-gray-400">{internship.duration}</span>
                                </div>
                                <h4 className="font-bold text-lg">{internship.role}</h4>
                                <p className="text-sm text-gray-300 mb-2">{internship.company}</p>
                                <p className="text-xs text-gray-400">{internship.description}</p>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};


// --- Main Experience Section Component ---
export default function ExperienceSection() {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

    const variants: Variants = {
        enter: (direction: number) => ({ x: direction > 0 ? 1000 : -1000, opacity: 0 }),
        center: { zIndex: 1, x: 0, opacity: 1 },
        exit: (direction: number) => ({ zIndex: 0, x: direction < 0 ? 1000 : -1000, opacity: 0 })
    };

    const paginate = (newDirection: number) => {
        setDirection(newDirection);
        setIndex((prevIndex) => (prevIndex + newDirection + panels.length) % panels.length);
    };

    const currentPanel = panels[index];

    return (
        <div ref={ref} className="w-full h-full flex flex-col items-center justify-center p-4 relative overflow-hidden">
            {/* Animated Grid Background */}
            <div className="absolute inset-0 z-0 opacity-50" style={{
                backgroundImage: `
                    linear-gradient(to right, rgba(128, 90, 213, 0.1) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(128, 90, 213, 0.1) 1px, transparent 1px)
                `,
                backgroundSize: '40px 40px',
                animation: 'moveGrid 20s linear infinite'
            }} />
            <style jsx global>{`
                @keyframes moveGrid {
                    0% { background-position: 0 0; }
                    100% { background-position: 40px 40px; }
                }
            `}</style>
            
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

                <div className="relative w-full min-h-[400px] flex items-center justify-center mt-8">
                    <AnimatePresence initial={false} custom={direction}>
                        <motion.div
                            key={index}
                            custom={direction}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
                            className="absolute w-full h-full flex items-center justify-center px-4"
                        >
                            {currentPanel.content(inView)}
                        </motion.div>
                    </AnimatePresence>
                </div>

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
        </div>
    );
}
