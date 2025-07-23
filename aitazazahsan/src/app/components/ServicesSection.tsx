// app/components/ServicesSection.tsx
"use client";

import { motion , Variants} from 'framer-motion';
import { LayoutGrid, Bot, Store, Code, PenTool, Briefcase } from 'lucide-react';

// Services data based on your skills
const services = [
    {
        icon: <LayoutGrid size={32} className="text-purple-400" />,
        title: "Web Development",
        description: "Custom websites and dynamic web applications built with modern, scalable technologies like React and Next.js."
    },
    {
        icon: <PenTool size={32} className="text-purple-400" />,
        title: "UI/UX Design",
        description: "Beautiful and intuitive user interfaces that convert visitors to customers, designed with a focus on user experience."
    },
    {
        icon: <Bot size={32} className="text-purple-400" />,
        title: "AI Integration",
        description: "Conversational AI and chatbot solutions tailored to automate tasks and enhance user engagement for your business."
    },
    {
        icon: <Store size={32} className="text-purple-400" />,
        title: "E-Commerce",
        description: "Complete online stores with secure payment integration, inventory management, and a seamless shopping experience."
    },
    {
        icon: <Code size={32} className="text-purple-400" />,
        title: "API Development",
        description: "Robust and scalable RESTful APIs to power your web and mobile applications, built with Node.js and Express."
    },
    {
        icon: <Briefcase size={32} className="text-purple-400" />,
        title: "Technical Consulting",
        description: "Expert technical consulting and code reviews to optimize your existing projects for performance and scalability."
    }
];

// Animation variants for the cards
const cardVariants : Variants= {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5
        }
    }
};

export default function ServicesSection() {
    return (
        <section id="services" className="min-h-screen py-24 px-4 relative z-20 bg-[#111119] flex flex-col items-center justify-center">
            <motion.h2
                className="text-4xl md:text-5xl font-bold mb-12 text-center"
                style={{ fontFamily: "'Poppins', sans-serif" }}
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
            >
                SERVICES
            </motion.h2>

            <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ staggerChildren: 0.1 }}
            >
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        className="bg-black/20 p-8 rounded-lg border border-transparent hover:border-purple-500 transition-colors duration-300 cursor-pointer group"
                        variants={cardVariants}
                    >
                        <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                        <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                        <p className="text-gray-400">{service.description}</p>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
