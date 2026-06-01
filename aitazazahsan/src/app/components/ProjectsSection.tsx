// app/components/ProjectsSection.tsx
"use client";

import { motion, Variants } from 'framer-motion';
import { Github } from 'lucide-react';
import Image from 'next/image';

// Your project data
const projects = [
    {
        title: "Park Intel - Smart Parking",
        description: "An AI-based smart parking system with real-time analytics. Deployed on Vercel.",
        tech: ["Next.js", "AI", "Tailwind CSS"],
        link: "https://github.com/aitazazahsan01/ParkIntel---Smart-Parking",
        image: "/parkintel.png"
    },
    {
        title: "DevCon NUST Portal",
        description: "Contributor to the website of DevCon NUST, a flagship event of MCS NUST.",
        tech: ["React", "Next.js", "Tailwind CSS"],
        link: "https://github.com/aitazazahsan01/mcs-devcon-portal",
        image: "/devcon.png"
    },
    {
        title: "AI Crowd Behavior Analysis",
        description: "A CNN & LSTM-based system utilizing drone and CCTV footage for real-time crowd behavior analysis.",
        tech: ["Python", "CNN", "LSTM", "Deep Learning"],
        link: "https://github.com/aitazazahsan01/CrowdBehaviourAnalysis",
        image: "/crowd-behavior.png"
    },
    {
        title: "Financial Archive System",
        description: "A comprehensive financial archiving system developed under the supervision of Institute Instructors and Commandant.",
        tech: ["Full Stack", "Database", "Security"],
        link: "#",
        image: "/financial-archive.png"
    },
    {
        title: "ML & Deep Learning Labs",
        description: "A comprehensive collection of Machine Learning and Deep Learning laboratory tasks and experiments.",
        tech: ["Python", "Machine Learning", "Deep Learning"],
        link: "https://github.com/aitazazahsan01/CS405_Deep-_Learning_Course",
        image: "/ml-dl-labs.png"
    },
    {
        title: "Kaawish Website",
        description: "A full-stack web platform designed to connect and empower communities.",
        tech: ["React", "Node.js", "MongoDB"],
        link: "https://github.com/aitazazahsan01/kaawish",
        image: "/kaawish.png"
    },
    {
        // --- THIS SECTION HAS BEEN UPDATED ---
        title: "Khuda Hafiz Website",
        description: "Contributed to the development of the Khuda Hafiz startup website, a platform for connecting users with services.",
        tech: ["React", "Node.js", "MongoDB", "Express"],
        link: "https://github.com/muhiu-din/KhudaHafizWeb",
        image: "/khudahafiz.png" // You can create a placeholder image for this
    },
    {
        title: "Weather App",
        description: "A sleek, real-time weather application providing current forecasts using a third-party API.",
        tech: ["React", "API", "CSS"],
        link: "https://github.com/aitazazahsan01/My-Weather-App",
        image: "/weather.jpeg"
    },
    {
        title: "Food Delivery Site",
        description: "A responsive frontend for a modern food ordering and delivery service.",
        tech: ["HTML", "CSS", "JavaScript"],
        link: "https://github.com/aitazazahsan01/food-site",
        image: "/food.png"
    },
    {
        title: "Image Searcher Bot",
        description: "A simple yet effective bot for searching and retrieving images based on user queries.",
        tech: ["Node.js", "JavaScript"],
        link: "https://github.com/aitazazahsan01/Image-Searcher-Bot",
        image: "/searcher.jpeg"
    },
    {
        title: "Library Management System",
        description: "A robust desktop application for managing library records, built with core Java principles.",
        tech: ["Java", "Swing", "OOP"],
        link: "https://github.com/aitazazahsan01/LMS.java",
        image: "/LMS.jpeg"
    }
];

const cardVariants : Variants= {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.5,
            ease: "easeOut"
        }
    }
};

export default function ProjectsSection() {
    return (
        <section id="projects" className="min-h-screen py-24 px-4 relative z-20 bg-[#111119] flex flex-col items-center justify-center">
            <motion.h2
                className="text-4xl md:text-5xl font-bold mb-12 text-center"
                style={{ fontFamily: "'Poppins', sans-serif" }}
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
            >
                PROJECTS
            </motion.h2>

            <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                transition={{ staggerChildren: 0.15 }}
            >
                {projects.map((project) => (
                    <motion.div
                        key={project.title}
                        className="bg-black/20 rounded-lg overflow-hidden border border-gray-800 flex flex-col"
                        variants={cardVariants}
                    >
                        <div className="relative h-48 w-full bg-gray-800">
                             <Image
                                src={project.image}
                                alt={`${project.title} screenshot`}
                                layout="fill"
                                objectFit="cover"
                                className="opacity-50"
                                onError={(e) => { e.currentTarget.src = `https://placehold.co/600x400/111119/4a00e0?text=${project.title.replace(' ', '+')}`; }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                        </div>

                        <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                            <p className="text-gray-400 text-sm mb-4 flex-grow">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tech.map(t => <span key={t} className="text-xs bg-purple-900/50 text-purple-300 px-2 py-1 rounded-full">{t}</span>)}
                            </div>
                            {project.link !== "#" && (
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:scale-105 transform transition-transform duration-300"
                                >
                                    <Github size={20}/>
                                    View Project
                                </a>
                            )}
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
