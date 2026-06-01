// app/components/SkillsSection.tsx
"use client";

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { 
    Monitor, Server, Database, Brain, Bot, Code, Layers, MessageCircle, GitMerge,
    Target, CheckCircle2, Cloud, Activity, Layout, Network, Zap, Lock, LineChart,
    Settings, Globe, Smartphone, RefreshCw, Box, Flame
} from 'lucide-react';

// --- SKILLS DATA with Lucide Icons ---
const skillsData = {
    "💻 Full-Stack": [
        {
            category: "Frontend Development",
            items: [
                { name: 'HTML5', icon: <Code size={32} className="text-orange-500" /> },
                { name: 'CSS3', icon: <Layout size={32} className="text-blue-500" /> },
                { name: 'JavaScript', icon: <Zap size={32} className="text-yellow-400" /> },
                { name: 'TypeScript', icon: <Zap size={32} className="text-blue-400" /> },
                { name: 'Tailwind CSS', icon: <Layout size={32} className="text-teal-400" /> },
                { name: 'Bootstrap', icon: <Box size={32} className="text-purple-500" /> },
                { name: 'React.js', icon: <Monitor size={32} className="text-cyan-400" /> },
                { name: 'Next.js', icon: <Globe size={32} className="text-white" /> },
                { name: 'Responsive Web', icon: <Smartphone size={32} className="text-gray-300" /> },
                { name: 'UI/UX', icon: <Target size={32} className="text-pink-400" /> },
            ]
        },
        {
            category: "Backend Development",
            items: [
                { name: 'Node.js', icon: <Server size={32} className="text-green-500" /> },
                { name: 'Express.js', icon: <Server size={32} className="text-gray-400" /> },
                { name: 'REST APIs', icon: <Network size={32} className="text-blue-400" /> },
                { name: 'Auth / JWT', icon: <Lock size={32} className="text-yellow-500" /> },
                { name: 'API Integrations', icon: <RefreshCw size={32} className="text-purple-400" /> },
                { name: 'Server-Side', icon: <Database size={32} className="text-gray-300" /> },
            ]
        },
        {
            category: "Database Technologies",
            items: [
                { name: 'MongoDB', icon: <Database size={32} className="text-green-500" /> },
                { name: 'MySQL / PostgreSQL', icon: <Database size={32} className="text-blue-400" /> },
                { name: 'Firebase', icon: <Flame size={32} className="text-orange-500" /> },
                { name: 'DB Design', icon: <Layers size={32} className="text-purple-400" /> },
                { name: 'Query Optimization', icon: <Zap size={32} className="text-yellow-400" /> },
            ]
        }
    ],
    "🤖 AI Journey": [
        {
            category: "Machine Learning",
            items: [
                { name: 'Supervised Learning', icon: <Brain size={32} className="text-blue-400" /> },
                { name: 'Unsupervised Learning', icon: <Brain size={32} className="text-purple-400" /> },
                { name: 'Classification / Regression', icon: <LineChart size={32} className="text-green-400" /> },
                { name: 'Clustering', icon: <Network size={32} className="text-pink-400" /> },
                { name: 'Model Evaluation', icon: <CheckCircle2 size={32} className="text-teal-400" /> },
            ]
        },
        {
            category: "Deep Learning",
            items: [
                { name: 'Neural Networks', icon: <Network size={32} className="text-purple-500" /> },
                { name: 'CNNs & RNNs', icon: <Layers size={32} className="text-blue-500" /> },
                { name: 'LSTMs', icon: <Activity size={32} className="text-green-500" /> },
                { name: 'Autoencoders & VAEs', icon: <RefreshCw size={32} className="text-yellow-500" /> },
                { name: 'GANs', icon: <Zap size={32} className="text-orange-500" /> },
            ]
        },
        {
            category: "Agentic AI",
            items: [
                { name: 'Reinforcement Learning', icon: <Target size={32} className="text-red-400" /> },
                { name: 'AI Agents', icon: <Bot size={32} className="text-blue-400" /> },
                { name: 'Multi-Agent Systems', icon: <Network size={32} className="text-purple-400" /> },
                { name: 'LLM Integrations', icon: <MessageCircle size={32} className="text-teal-400" /> },
                { name: 'RAG Applications', icon: <Database size={32} className="text-green-400" /> },
                { name: 'n8n & Workflow Auto', icon: <Settings size={32} className="text-orange-400" /> },
            ]
        }
    ],
    "🛠 Tech Skills": [
        {
            category: "Programming Languages",
            items: [
                { name: 'JavaScript / TS', icon: <Code size={32} className="text-yellow-400" /> },
                { name: 'Python', icon: <Code size={32} className="text-blue-500" /> },
                { name: 'Java / C++', icon: <Code size={32} className="text-red-500" /> },
                { name: 'SQL', icon: <Database size={32} className="text-gray-400" /> },
            ]
        },
        {
            category: "Frameworks & Libraries",
            items: [
                { name: 'React / Next.js', icon: <Monitor size={32} className="text-cyan-400" /> },
                { name: 'Node / Express', icon: <Server size={32} className="text-green-500" /> },
                { name: 'Tailwind CSS', icon: <Layout size={32} className="text-teal-400" /> },
                { name: 'PyTorch', icon: <Flame size={32} className="text-orange-500" /> },
                { name: 'Pandas / NumPy', icon: <Box size={32} className="text-blue-400" /> },
                { name: 'Scikit-Learn', icon: <Brain size={32} className="text-yellow-500" /> },
            ]
        },
        {
            category: "Tools & Platforms",
            items: [
                { name: 'Git & GitHub', icon: <GitMerge size={32} className="text-orange-500" /> },
                { name: 'VS Code', icon: <Code size={32} className="text-blue-400" /> },
                { name: 'Postman', icon: <Network size={32} className="text-orange-400" /> },
                { name: 'Vercel / Netlify', icon: <Cloud size={32} className="text-gray-300" /> },
                { name: 'Linux', icon: <Monitor size={32} className="text-yellow-400" /> },
            ]
        }
    ],
    "🌱 Learning": [
        {
            category: "Currently Focusing On",
            items: [
                { name: 'Advanced ML', icon: <Brain size={32} className="text-purple-400" /> },
                { name: 'DL Architectures', icon: <Layers size={32} className="text-blue-400" /> },
                { name: 'LLM Engineering', icon: <MessageCircle size={32} className="text-teal-400" /> },
                { name: 'Agentic AI Systems', icon: <Bot size={32} className="text-green-400" /> },
                { name: 'MLOps', icon: <Settings size={32} className="text-orange-400" /> },
                { name: 'AI Deployment Pipelines', icon: <Cloud size={32} className="text-blue-300" /> },
            ]
        }
    ]
};

const tabs = Object.keys(skillsData);

// --- Category Section Component (Includes SpotlightGrid logic) ---
const CategorySection = ({ title, items }: { title: string, items: { name: string; icon: React.ReactNode }[] }) => {
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
        <div className="mb-12 w-full">
            <h3 className="text-2xl font-bold mb-6 text-purple-400 border-b border-gray-800 pb-2 text-left">{title}</h3>
            <motion.div
                ref={containerRef}
                onMouseMove={handleMouseMove}
                variants={gridVariants}
                initial="hidden"
                animate="visible"
                className="relative grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
                style={{
                    '--mouse-x': `${mousePosition.x}px`,
                    '--mouse-y': `${mousePosition.y}px`,
                } as React.CSSProperties}
            >
                {items.map((item) => (
                    <motion.div
                        key={item.name}
                        variants={itemVariants}
                        className="relative aspect-square rounded-xl bg-gray-900/80 p-4 flex flex-col items-center justify-center gap-3 border border-gray-800 transition-all duration-300 group hover:border-purple-500/50"
                    >
                        <div className="absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                            style={{
                                background: `radial-gradient(200px circle at var(--mouse-x) var(--mouse-y), rgba(192, 132, 252, 0.15), transparent 80%)`
                            }}
                        />
                        <div className="transition-transform duration-300 group-hover:scale-110 flex items-center justify-center w-12 h-12">
                            {item.icon}
                        </div>
                        <p className="text-sm text-center text-gray-400 transition-colors duration-300 group-hover:text-white font-medium">{item.name}</p>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

// --- Main Skills Section Component ---
export default function SkillsSection() {
    const [activeTab, setActiveTab] = useState(tabs[0]);

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
                SKILLS & EXPERTISE
            </motion.h2>

            <div className="flex flex-wrap justify-center gap-2 p-1 rounded-full bg-black/20 mb-12">
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

            <div className="w-full max-w-6xl mx-auto min-h-[300px]">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="w-full"
                    >
                        {skillsData[activeTab as keyof typeof skillsData].map((category) => (
                            <CategorySection key={category.category} title={category.category} items={category.items} />
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}
