// app/components/SkillsSection.tsx
"use client";

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { MessageCircle, Users, Wrench, GitMerge } from 'lucide-react';
import Image from 'next/image'; // Import the Next.js Image component

// --- SVG Icon Components for Tools (as they are less likely to be custom files) ---
const FigmaIcon = () => <svg viewBox="0 0 128 128" className="w-12 h-12"><path fill="#F24E1E" d="M42.7 128h42.7V85.3H42.7z"/><path fill="#FF7262" d="M42.7 85.3h42.7V42.7H42.7z"/><path fill="#A259FF" d="M42.7 42.7h42.7V0H42.7z"/><path fill="#1ABCFE" d="M85.3 42.7H42.7c-23.6 0-42.7 19.1-42.7 42.7h42.7v42.7h42.7z"/><path fill="#0ACF83" d="M85.3 0h42.7v42.7H85.3z"/></svg>;
const GitIcon = () => <svg viewBox="0 0 128 128" className="w-12 h-12"><path fill="#F1502F" d="M124.2 58.3L69.7 3.8c-2.1-2.1-5.5-2.1-7.5 0L3.8 62.2c-2.1 2.1-2.1 5.5 0 7.5l54.4 54.4c2.1 2.1 5.5 2.1 7.5 0l58.4-58.4c2.1-2.1 2.1-5.4.1-7.4z"/><path fill="#fff" d="M91.8 64c0 10.9-8.9 19.8-19.8 19.8s-19.8-8.9-19.8-19.8c0-10.9 8.9-19.8 19.8-19.8s19.8 8.9 19.8 19.8m-31.9 0c0 6.7 5.4 12.1 12.1 12.1s12.1-5.4 12.1-12.1-5.4-12.1-12.1-12.1-12.1 5.4-12.1 12.1m12.1-16.7v11.2h-11.2c-1.1 0-2 .9-2 2s.9 2 2 2h11.2v11.2c0 1.1.9 2 2 2s2-.9 2-2V64.5h11.2c1.1 0 2-.9 2-2s-.9-2-2-2H74v-11.2c0-1.1-.9-2-2-2s-2 .9-2 2"/></svg>;


// --- SKILLS DATA with Image Paths ---
const skillsData = {
    "Technical Skills": [
        // Replace the src path with the actual path to your icons in the /public folder
        { name: 'HTML', icon: <Image src="/icons/html.png" alt="HTML5" width={48} height={48} /> },
        { name: 'CSS', icon: <Image src="/icons/css.png" alt="CSS3" width={48} height={48} /> },
        { name: 'JavaScript', icon: <Image src="/icons/javascript.png" alt="JavaScript" width={48} height={48} /> },
        { name: 'React', icon: <Image src="/icons/react.png" alt="React" width={48} height={48} /> },
        { name: 'Next.js', icon: <Image src="/icons/nextjs.png" alt="Next.js" width={48} height={48} /> },
        { name: 'Node.js', icon: <Image src="/icons/nodejs.png" alt="Node.js" width={48} height={48} /> },
        { name: 'MongoDB', icon: <Image src="/icons/mongodb.png" alt="MongoDB" width={48} height={48} /> },
        { name: 'Tailwind CSS', icon: <Image src="/icons/css-3.png" alt="Tailwind CSS" width={48} height={48} /> },
        { name: 'Supabase', icon: <Image src="/icons/mysql.png" alt="Supabase" width={48} height={48} /> },
        { name: 'C++', icon: <Image src="/icons/cpp.png" alt="C++" width={48} height={48} /> },
        { name: 'Java', icon: <Image src="/icons/java.png" alt="Java" width={48} height={48} /> },
    ],
    "Tools": [
        { name: 'Git', icon: <GitIcon /> },
        { name: 'GitHub', icon: <div className="w-12 h-12 text-white font-bold text-lg flex items-center justify-center">GitHub</div> },
        { name: 'Figma', icon: <FigmaIcon /> },
        { name: 'VS Code', icon: <div className="w-12 h-12 text-blue-500 font-bold text-lg flex items-center justify-center">VSCode</div> },
        { name: 'Postman', icon: <div className="w-12 h-12 text-orange-500 font-bold text-lg flex items-center justify-center">Postman</div> },
    ],
    "Soft Skills": [
        { title: "Communication", icon: <MessageCircle size={24} className="text-purple-400"/>, description: "Clear and effective communication to bridge technical and non-technical gaps." },
        { title: "Teamwork", icon: <Users size={24} className="text-purple-400"/>, description: "Collaborating effectively with teams to achieve a common goal." },
        { title: "Problem Solving", icon: <Wrench size={24} className="text-purple-400"/>, description: "Analyzing complex problems and delivering efficient, practical solutions." },
        { title: "Adaptability", icon: <GitMerge size={24} className="text-purple-400"/>, description: "Quickly learning and adapting to new technologies and project requirements." }
    ]
};

const tabs = Object.keys(skillsData);

// --- Spotlight Grid Component ---
const SpotlightGrid = ({ items }: { items: { name: string; icon: React.ReactNode }[] }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });

    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
        const rect = containerRef.current?.getBoundingClientRect();
        if (rect) {
            setMousePosition({ x: event.clientX - rect.left, y: event.clientY - rect.top });
        }
    };

    const gridVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.05 }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 }
    };

    return (
        <motion.div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            variants={gridVariants}
            initial="hidden"
            animate="visible"
            className="relative grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 p-4"
            style={{
                '--mouse-x': `${mousePosition.x}px`,
                '--mouse-y': `${mousePosition.y}px`,
            } as React.CSSProperties}
        >
            {items.map((item) => (
                <motion.div
                    key={item.name}
                    variants={itemVariants}
                    className="relative aspect-square rounded-xl bg-gray-900/80 p-4 flex flex-col items-center justify-center gap-2 border border-gray-800 transition-all duration-300 group"
                >
                    <div className="absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                        style={{
                            background: `radial-gradient(300px circle at var(--mouse-x) var(--mouse-y), rgba(192, 132, 252, 0.2), transparent 80%)`
                        }}
                    />
                    <div className="transition-transform duration-300 group-hover:scale-110">
                        {item.icon}
                    </div>
                    <p className="text-sm text-gray-400 transition-colors duration-300 group-hover:text-white">{item.name}</p>
                </motion.div>
            ))}
        </motion.div>
    );
};

// --- Main Skills Section Component ---
export default function SkillsSection() {
    const [activeTab, setActiveTab] = useState(tabs[0]);

    const contentVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, staggerChildren: 0.1 } }
    };

    return (
        <div className="w-full h-full flex flex-col items-center justify-center p-4">
            <motion.h2 
                className="text-4xl md:text-5xl font-bold mb-12 text-center" 
                style={{ fontFamily: "'Poppins', sans-serif" }}
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
            >
                SKILLS
            </motion.h2>

            <div className="flex space-x-1 p-1 rounded-full bg-black/20 mb-12">
                {tabs.map(tab => (
                    <button key={tab} onClick={() => setActiveTab(tab)}
                        className={`${ activeTab === tab ? "text-white" : "text-gray-400" } relative rounded-full px-6 py-2.5 text-sm font-medium transition`}
                    >
                        {activeTab === tab && (
                            <motion.span layoutId="bubble" className="absolute inset-0 z-10 bg-gradient-to-r from-blue-500 to-purple-600"
                                style={{ borderRadius: 9999 }}
                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            />
                        )}
                        <span className="relative z-20">{tab}</span>
                    </button>
                ))}
            </div>

            <div className="w-full max-w-5xl mx-auto min-h-[300px]">
                <AnimatePresence mode="wait">
                    {activeTab === "Technical Skills" && <SpotlightGrid key="tech" items={skillsData["Technical Skills"]} />}
                    {activeTab === "Tools" && <SpotlightGrid key="tools" items={skillsData["Tools"]} />}
                    {activeTab === "Soft Skills" && (
                         <motion.div
                            key="soft"
                            variants={contentVariants}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            className="grid grid-cols-1 md:grid-cols-2 gap-8"
                        >
                            {skillsData["Soft Skills"].map(skill => (
                                <motion.div key={skill.title} variants={contentVariants} className="flex items-start gap-4 p-4 bg-black/20 rounded-lg">
                                    <div className="mt-1">{skill.icon}</div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-1">{skill.title}</h3>
                                        <p className="text-gray-400">{skill.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
