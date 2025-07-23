// app/components/ProjectsSection.tsx
"use client";

import { motion } from 'framer-motion';
import { Github, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

// Your project data
const projects = [
    {
        title: "Kaawish Website",
        description: "A full-stack web platform designed to connect and empower communities.",
        tech: ["React", "Node.js", "MongoDB"],
        link: "https://github.com/aitazazahsan01/kaawish",
        image: "/kaawish.png"
    },
    {
        title: "Internship Projects",
        description: "A showcase of professional projects and contributions made during my internship at Nexium.",
        tech: ["Next.js", "TypeScript", "Tailwind"],
        link: "https://github.com/aitazazahsan01/Nexium",
        image: "/nexium.png"
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

const cardVariants = {
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
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:scale-105 transform transition-transform duration-300"
                            >
                                <Github size={20}/>
                                View Project
                            </a>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
