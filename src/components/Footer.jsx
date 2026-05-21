import { Mail, Heart } from 'lucide-react';
import { Github, Linkedin } from './Icons';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full relative mt-20 pb-12 z-10 px-4 sm:px-6 lg:px-8">
      {/* Soft Divider */}
      <div className="max-w-7xl mx-auto border-t border-blush-pink/20 dark:border-soft-mauve/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Side: Copyright */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <p className="font-outfit font-bold text-[#4B4453] dark:text-[#FFF9FB] text-lg tracking-wider">
            Ashita Jha
          </p>
          <p className="font-nunito text-xs text-text-light dark:text-gray-400 mt-1">
            &copy; {currentYear} Ashita Jha. All rights reserved.
          </p>
        </div>

        {/* Center: Built With */}
        <div className="flex items-center gap-1 font-nunito text-xs text-text-light dark:text-gray-400">
          <span>Made with</span>
          <Heart size={12} className="text-blush-pink fill-blush-pink animate-pulse" />
          <span>using React &amp; Tailwind CSS</span>
        </div>

        {/* Right Side: Social Icons */}
        <div className="flex items-center space-x-4">
          <a
            href="https://github.com/ashitajha10"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full glass-card hover:scale-110 text-text-light hover:text-text-dark dark:text-gray-300 dark:hover:text-white transition-all duration-300 shadow-sm"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href="https://linkedin.com/in/ashitajha"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full glass-card hover:scale-110 text-text-light hover:text-text-dark dark:text-gray-300 dark:hover:text-white transition-all duration-300 shadow-sm"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="mailto:ashitajha691@gmail.com"
            className="p-2.5 rounded-full glass-card hover:scale-110 text-text-light hover:text-text-dark dark:text-gray-300 dark:hover:text-white transition-all duration-300 shadow-sm"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
