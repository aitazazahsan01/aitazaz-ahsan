// app/components/FloatingQuotes.tsx
"use client";

import { useState, useEffect } from 'react';
import { motion, Variants } from 'framer-motion';

const quotes = [
  "Turning coffee into code since 2020.",
  "Making the web a prettier place, one div at a time.",
  "Fluent in JavaScript and sarcasm.",
  "Believe you can and you're halfway there.",
  "I don't just build websites, I build experiences.",
  "Ctrl + C, Ctrl + V... just kidding (mostly).",
  "Professional pixel pusher."
];

export default function FloatingQuotes() {
  const [leftQuote, setLeftQuote] = useState('');
  const [rightQuote, setRightQuote] = useState('');

  useEffect(() => {
    const getRandomQuote = () => quotes[Math.floor(Math.random() * quotes.length)];
    const setInitialQuotes = () => {
      const q1 = getRandomQuote();
      let q2 = getRandomQuote();
      while (q1 === q2) { q2 = getRandomQuote(); }
      setLeftQuote(q1);
      setRightQuote(q2);
    };
    const initialTimeout = setTimeout(setInitialQuotes, 2000);
    const interval = setInterval(() => {
      setLeftQuote(getRandomQuote());
      setTimeout(() => setRightQuote(getRandomQuote()), 3500);
    }, 7000);
    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  const quoteVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
};

  return (
    <div className="fixed top-0 left-0 w-full h-full z-20 pointer-events-none">
      {leftQuote && (
        <motion.div
          key={leftQuote}
          className="absolute top-1/3 left-8 md:left-16 max-w-[200px] text-gray-400 text-sm p-3 bg-black/20 rounded-lg backdrop-blur-sm"
          variants={quoteVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          {leftQuote}
        </motion.div>
      )}
      {rightQuote && (
        <motion.div
          key={rightQuote}
          className="absolute bottom-1/4 right-8 md:right-16 max-w-[200px] text-gray-400 text-sm p-3 bg-black/20 rounded-lg backdrop-blur-sm"
          variants={quoteVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          &quot;{rightQuote}&quot;
        </motion.div>
      )}
    </div>
  );
}
