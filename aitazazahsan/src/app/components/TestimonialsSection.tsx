// app/components/TestimonialsSection.tsx
"use client";

import { motion, Variants } from 'framer-motion';
import { Star } from 'lucide-react';

// Updated, personalized testimonials data
const testimonials = [
    {
        name: "Sarah Shafqat",
        title: "CEO, DreamzSsoft",
        quote: "Collaborating with Aitazaz on the Kaawish project was a pleasure. He took our vision and translated it into a functional, user-friendly platform with great technical skill. His commitment to the project's success was evident throughout.",
        stars: 5
    },
    {
        name: "Owner, Nexium",
        title: "Internship Supervisor",
        quote: "Aitazaz was a tremendous asset to our team during his internship. He is a quick learner, highly motivated, and contributed significantly to our projects. He has a bright future ahead and comes with my highest recommendation.",
        stars: 5
    },
    {
        name: "Dr. Ayesha Naseer",
        title: "Professor, NUST",
        quote: "TI was impressed by the Library Management System Aitazaz submitted. It was a well-executed project that clearly demonstrated his strong grasp of software design, object-oriented principles, and the practical application of database concepts.",
        stars: 5
    }
];

const cardVariants : Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
};

export default function TestimonialsSection() {
    return (
        <section id="testimonials" className="min-h-screen py-24 px-4 relative z-20 bg-[#111119] flex flex-col items-center justify-center overflow-hidden">
            {/* Striped Background */}
            <div
                className="absolute inset-0 z-0 opacity-20"
                style={{
                    backgroundImage: 'repeating-linear-gradient(-45deg, #2d2d3a, #2d2d3a 10px, #1e1e28 10px, #1e1e28 20px)',
                }}
            ></div>

            <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
                <motion.h2
                    className="text-4xl md:text-5xl font-bold mb-12 text-center"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                >
                    TESTIMONIALS
                </motion.h2>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ staggerChildren: 0.2 }}
                >
                    {testimonials.map((testimonial) => (
                        <motion.div
                            key={testimonial.name}
                            className="bg-black/30 p-8 rounded-lg border border-gray-800 flex flex-col text-left hover:border-purple-500 transition-colors duration-300"
                            variants={cardVariants}
                        >
                            <div className="flex mb-4">
                                {Array.from({ length: testimonial.stars }).map((_, i) => (
                                    <Star key={i} size={20} className="text-yellow-400 fill-current" />
                                ))}
                            </div>
                            <p className="text-gray-300 mb-6 flex-grow">&quot;{testimonial.quote}&quot;</p>
                            <div>
                                <h3 className="font-bold text-lg">{testimonial.name}</h3>
                                <p className="text-sm text-gray-500">{testimonial.title}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
