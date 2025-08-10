// app/components/ContactSection.tsx
"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github } from 'lucide-react';
import Image from 'next/image';

export default function ContactSection() {
    const [status, setStatus] = useState("Send Message");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("Sending...");
        // This is where you would typically handle form submission,
        // e.g., send data to an API endpoint.
        // For this demo, we'll just simulate a delay.
        await new Promise(resolve => setTimeout(resolve, 2000));
        setStatus("Message Sent!");
        setTimeout(() => setStatus("Send Message"), 3000);
    };

    return (
        <>
            {/* --- Let's Work Together Section --- */}
            <section id="work-together" className="py-24 px-4 relative z-20 bg-[#111119] flex flex-col items-center justify-center text-center">
                <motion.h2
                    className="text-4xl md:text-5xl font-bold mb-4"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                >
                    LETS WORK TOGETHER
                </motion.h2>
                <motion.p
                    className="text-lg text-gray-400 max-w-xl mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    Ready to bring your ideas to life? I am here to help. Lets create something amazing together.
                </motion.p>
                <motion.a
                    href="#contact"
                    className="px-10 py-4 bg-gradient-to-r from-green-400 to-teal-500 text-white font-bold rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    Get In Touch
                </motion.a>
            </section>

            {/* --- Contact Form Section --- */}
            <section id="contact" className="py-24 px-4 relative z-20 flex items-center justify-center overflow-hidden"
                style={{ background: 'radial-gradient(circle, #2c1e4d, #111119 70%)' }}
            >
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
                    {/* Left Column: Info */}
                    <motion.div
                        className="text-left"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>GET IN TOUCH</h2>
                        <p className="text-gray-400 mb-8">Have a project in mind? Lets discuss how we can bring your vision to life.</p>
                        <div className="flex items-center gap-4 mb-6">
                            <Image
                                src="/pic.jpg"
                                alt="Muhammad Aitazaz Ahsan"
                                width={80}
                                height={80}
                                className="rounded-full border-2 border-purple-500 object-cover"
                            />
                            <div>
                                <h3 className="text-xl font-bold">Muhammad Aitazaz Ahsan</h3>
                                <p className="text-gray-400">Software Engineer</p>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <a href="mailto:code.aitazaz@gmail.com" className="flex items-center gap-4 text-lg hover:text-purple-400 transition-colors">
                                <Mail size={24} />
                                <span>code.aitazaz@gmail.com</span>
                            </a>
                             <a href="https://www.linkedin.com/in/muhammad-aitazaz-ahsan-4b2480353" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-lg hover:text-purple-400 transition-colors">
                                <Linkedin size={24} />
                                <span>LinkedIn Profile</span>
                            </a>
                             <a href="https://github.com/aitazazahsan01" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-lg hover:text-purple-400 transition-colors">
                                <Github size={24} />
                                <span>GitHub Profile</span>
                            </a>
                        </div>
                    </motion.div>

                    {/* Right Column: Form */}
                    <motion.form
                        onSubmit={handleSubmit}
                        className="space-y-6 bg-black/20 p-8 rounded-lg"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                                <input type="text" id="name" required className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-purple-500" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                                <input type="email" id="email" required className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-purple-500" />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">Subject</label>
                            <input type="text" id="subject" required className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-purple-500" />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                            <textarea id="message" rows={4} required className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-purple-500"></textarea>
                        </div>
                        <button
                            type="submit"
                            disabled={status !== "Send Message"}
                            className="w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {status}
                        </button>
                    </motion.form>
                </div>
            </section>
        </>
    );
}
