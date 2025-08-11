// app/components/AboutSection.tsx
"use client";

import { useState, useEffect } from 'react';
import { motion, useAnimation, Variants  } from 'framer-motion';
import { Mail, Linkedin, Github, Download } from 'lucide-react';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

// --- Custom Cursor Component ---
const CustomCursor = ({ isHovering }: { isHovering: boolean }) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            setMousePosition({ x: event.clientX, y: event.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const cursorVariants : Variants = {
        default: {
            x: mousePosition.x - 8,
            y: mousePosition.y - 8,
            width: 16,
            height: 16,
            backgroundColor: "#A259FF",
            mixBlendMode: "difference"
        },
        hovering: {
            x: mousePosition.x - 50,
            y: mousePosition.y - 50,
            width: 100,
            height: 100,
            backgroundColor: "#fff",
            mixBlendMode: "difference"
        }
    };

    return (
        <motion.div
            variants={cursorVariants}
            animate={isHovering ? "hovering" : "default"}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="fixed top-0 left-0 rounded-full pointer-events-none z-50"
        />
    );
};


// --- Main About Section Component ---
export default function AboutSection() {
    const [isTextHovered, setIsTextHovered] = useState(false);
    const controls = useAnimation();
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.4,
    });

    const text = "I am a driven Software Engineering student at NUST, specializing in crafting dynamic and responsive web experiences. With a solid foundation in web development, I am now passionately expanding my skills into the fascinating realm of Artificial Intelligence. I thrive on solving complex problems and am dedicated to building applications that are not only functional but also intuitive and user-centric.";
    const words = text.split(" ");

    const containerVariants : Variants  = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.05, delayChildren: 0.3 },
        },
    };

    const wordVariants : Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    return (
        <section id="about" className="min-h-screen py-24 px-4 sm:px-8 md:px-16 relative z-20 bg-[#111119] flex items-center cursor-none">
            <CustomCursor isHovering={isTextHovered} />
            <div
                ref={ref}
                className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center"
            >
                {/* Left Column: Text Content */}
                <motion.div 
                    className="text-left"
                    initial={{ opacity: 0, x: -50 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: "'Poppins', sans-serif" }}>
                        ABOUT ME
                    </h2>
                    <motion.p
                        className={`text-gray-300 text-lg mb-6 leading-relaxed transition-colors duration-300 ${isTextHovered ? 'text-white' : ''}`}
                        onMouseEnter={() => setIsTextHovered(true)}
                        onMouseLeave={() => setIsTextHovered(false)}
                        variants={containerVariants}
                        initial="hidden"
                        animate={controls}
                    >
                        {words.map((word, index) => (
                            <motion.span key={index} variants={wordVariants} className="inline-block mr-[6px]">
                                {word}
                            </motion.span>
                        ))}
                    </motion.p>
                    <div className="flex items-center gap-6 mb-8">
                        <a href="mailto:code.aitazaz@gmail.com" className="text-gray-400 hover:text-white transition-colors"><Mail size={28}/></a>
                        <a href="https://www.linkedin.com/in/muhammad-aitazaz-ahsan-4b2480353" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><Linkedin size={28}/></a>
                        <a href="https://github.com/aitazazahsan01" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><Github size={28}/></a>
                    </div>
                    <a href="/MY_CV.pdf" download
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:scale-105 transform transition-transform duration-300"
                    >
                        <Download size={20}/>
                        Download CV
                    </a>
                </motion.div>

                {/* Right Column: Image */}
                <motion.div
                    className="relative w-full max-w-sm mx-auto h-auto"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-500 rounded-2xl blur-md animate-pulse"></div>
                    <div className="relative p-1.5 bg-gradient-to-br from-purple-600 to-blue-500 rounded-2xl">
                        <div className="bg-[#111119] p-1 rounded-xl">
                            <Image
                                src="/profile.jpg"
                                alt="A photo of Muhammad Aitazaz Ahsan"
                                width={500}
                                height={600}
                                className="rounded-lg object-cover w-full h-full"
                                onError={(e) => { e.currentTarget.src = 'https://placehold.co/500x600/111119/ffffff?text=Profile+Pic'; }}
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
