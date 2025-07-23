// app/components/SkillsSection.tsx
"use client";

import { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Code, Palette, Rocket, Database, MessageCircle, Users, Wrench, GitMerge } from 'lucide-react';

// Data for the skills section
const skillsData = {
  "Technical Skills": [
    { title: "Frontend", icon: <Code size={24} className="text-purple-400"/>, skills: ["HTML", "CSS", "Tailwind CSS", "React / Next.js"] },
    { title: "UI/UX", icon: <Palette size={24} className="text-purple-400"/>, skills: ["ShadCN UI", "Figma", "UI/UX Principles", "Responsive Design"] },
    { title: "Backend", icon: <Database size={24} className="text-purple-400"/>, skills: ["Node.js", "Express.js", "MySQL", "MongoDB"] },
    { title: "Animation", icon: <Rocket size={24} className="text-purple-400"/>, skills: ["Framer Motion", "CSS Transitions", "GSAP (Basics)"] }
  ],
  "Soft Skills": [
    { title: "Communication", icon: <MessageCircle size={24} className="text-purple-400"/>, description: "Clear and effective communication to bridge technical and non-technical gaps." },
    { title: "Teamwork", icon: <Users size={24} className="text-purple-400"/>, description: "Collaborating effectively with teams to achieve a common goal." },
    { title: "Problem Solving", icon: <Wrench size={24} className="text-purple-400"/>, description: "Analyzing complex problems and delivering efficient, practical solutions." },
    { title: "Adaptability", icon: <GitMerge size={24} className="text-purple-400"/>, description: "Quickly learning and adapting to new technologies and project requirements." }
  ],
  "Tools": [
    "Git & GitHub",
    "VS Code",
    "Postman",
    "Jira / Trello",
    "LinkedIn",
    "Webpack / Vite"
  ]
};

const tabs = Object.keys(skillsData);

export default function SkillsSection() {
    const [activeTab, setActiveTab] = useState(tabs[0]);

    const contentVariants : Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.5, staggerChildren: 0.1 }
        }
    };

    return (
        <section id="skills" className="min-h-screen py-24 px-4 relative z-20 bg-[#111119] flex flex-col items-center justify-center">
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

            {/* Tab switcher */}
            <div className="flex space-x-1 p-1 rounded-full bg-black/20 mb-12">
                {tabs.map(tab => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`${
                            activeTab === tab ? "text-white" : "text-gray-400"
                        } relative rounded-full px-6 py-2.5 text-sm font-medium transition`}
                    >
                        {activeTab === tab && (
                            <motion.span
                                layoutId="bubble"
                                className="absolute inset-0 z-10 bg-gradient-to-r from-blue-500 to-purple-600"
                                style={{ borderRadius: 9999 }}
                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            />
                        )}
                        <span className="relative z-20">{tab}</span>
                    </button>
                ))}
            </div>

            {/* Tab content */}
            <div className="w-full max-w-5xl mx-auto">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        variants={contentVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                    >
                        {activeTab === "Technical Skills" && (
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                                {skillsData["Technical Skills"].map(category => (
                                    <motion.div key={category.title} variants={contentVariants} className="flex flex-col items-start">
                                        <div className="flex items-center gap-3 mb-4">
                                            {category.icon}
                                            <h3 className="font-bold text-lg uppercase tracking-wider">{category.title}</h3>
                                        </div>
                                        <ul className="space-y-2">
                                            {category.skills.map(skill => <li key={skill} className="text-gray-300">{skill}</li>)}
                                        </ul>
                                    </motion.div>
                                ))}
                            </div>
                        )}

                        {activeTab === "Soft Skills" && (
                             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {skillsData["Soft Skills"].map(skill => (
                                    <motion.div key={skill.title} variants={contentVariants} className="flex items-start gap-4 p-4 bg-black/20 rounded-lg">
                                        <div className="mt-1">{skill.icon}</div>
                                        <div>
                                            <h3 className="font-bold text-lg mb-1">{skill.title}</h3>
                                            <p className="text-gray-400">{skill.description}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        )}

                        {activeTab === "Tools" && (
                            <div className="flex flex-wrap justify-center gap-4">
                                {skillsData["Tools"].map(tool => (
                                    <motion.div key={tool} variants={contentVariants} className="bg-gray-800 px-6 py-3 rounded-lg font-semibold">
                                        {tool}
                                    </motion.div>
                                ))}
                            </div>
                        )}
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
}
