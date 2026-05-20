import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Sparkles, FileText } from 'lucide-react';
import { Github, Linkedin } from '../components/Icons';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] },
    },
  };

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[95vh] flex items-center justify-center pt-24 px-4 sm:px-6 lg:px-8 overflow-hidden z-10"
    >
      {/* Decorative Sparkles & Nodes */}
      <motion.div
        className="absolute top-[25%] left-[15%] text-blush-pink dark:text-soft-mauve opacity-50 hidden md:block"
        animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
      >
        <Sparkles size={32} />
      </motion.div>
      <motion.div
        className="absolute bottom-[20%] right-[15%] text-[#EADCF8] dark:text-[#7D6B78] opacity-50 hidden md:block"
        animate={{ y: [0, 20, 0], rotate: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }}
      >
        <Sparkles size={28} />
      </motion.div>

      {/* Main Content Area */}
      <motion.div
        className="max-w-4xl text-center flex flex-col items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Intro Badge */}
        <motion.div
          variants={itemVariants}
          className="glass-card px-4 py-1.5 rounded-full mb-6 flex items-center gap-2 shadow-sm border border-blush-pink/40"
        >
          <span className="w-2 h-2 rounded-full bg-blush-pink animate-pulse" />
          <span className="font-nunito text-xs font-bold tracking-wider text-text-dark dark:text-gray-200">
            WELCOME TO MY SPACE
          </span>
        </motion.div>

        {/* Big Greeting Heading */}
        <motion.h1
          variants={itemVariants}
          className="font-outfit text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-[#4B4453] dark:text-[#FFF9FB] leading-none mb-6"
        >
          Hi, I&apos;m{' '}
          <span className="relative inline-block mt-2 sm:mt-0">
            <span className="bg-gradient-to-r from-blush-pink via-soft-mauve to-[#EADCF8] dark:from-blush-pink dark:via-[#FFD9E8] dark:to-soft-mauve bg-clip-text text-transparent">
              Ashita Jha
            </span>
          </span>
        </motion.h1>

        {/* Professional Subtitle */}
        <motion.h2
          variants={itemVariants}
          className="font-sora text-sm sm:text-lg md:text-xl font-semibold tracking-widest text-text-light dark:text-gray-300 uppercase mb-8"
        >
          Software Developer • ML Explorer • Creative Soul
        </motion.h2>

        {/* Brief Professional Bio */}
        <motion.p
          variants={itemVariants}
          className="font-nunito text-base sm:text-lg md:text-xl text-[#6b6375] dark:text-gray-300 max-w-2xl leading-relaxed mb-10"
        >
          An engineering undergraduate specializing in building intelligent, accessible software and machine learning applications. I weave technical depth with elegant UI/UX design.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full max-w-md mb-12"
        >
          <button
            onClick={() => handleScrollTo('projects')}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full font-nunito font-bold text-sm tracking-wide text-text-dark dark:text-[#FFF9FB] bg-blush-pink hover:bg-blush-pink/80 dark:bg-soft-mauve dark:hover:bg-soft-mauve/80 hover:-translate-y-0.5 transition-all duration-300 shadow-md flex items-center justify-center gap-2"
          >
            <span>View Projects</span>
            <ArrowRight size={16} />
          </button>

          <a
            href="/Ashita_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full font-nunito font-bold text-sm tracking-wide text-text-light dark:text-gray-200 glass-card hover:bg-blush-pink/20 dark:hover:bg-soft-mauve/20 hover:-translate-y-0.5 transition-all duration-300 shadow-sm flex items-center justify-center gap-2"
          >
            <FileText size={16} />
            <span>Download Resume</span>
          </a>
        </motion.div>


      </motion.div>

      {/* Floating Animated Scroll Down Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 cursor-pointer opacity-70 hover:opacity-100 transition-opacity"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        onClick={() => handleScrollTo('about')}
      >
        <span className="font-nunito text-[10px] tracking-widest text-[#7D6B78] dark:text-gray-400 uppercase font-semibold">
          Scroll Down
        </span>
        <div className="w-5 h-8 border-2 border-blush-pink dark:border-soft-mauve rounded-full flex justify-center pt-1.5">
          <motion.div
            className="w-1.5 h-1.5 bg-blush-pink dark:bg-soft-mauve rounded-full"
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </section>
  );
}
