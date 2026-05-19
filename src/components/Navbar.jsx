import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from './ThemeContext';

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Scroll handler for navbar height and progress indicator
  useEffect(() => {
    const handleScroll = () => {
      // Set scrolled background trigger
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Calculate scroll progress percentage
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for active section highlighting
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px', // Trigger when section occupies the center of the viewport
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    NAV_ITEMS.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => {
      NAV_ITEMS.forEach((item) => {
        const el = document.getElementById(item.id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const handleNavClick = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // offset for sticky navbar
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
    <header className="fixed top-0 left-0 right-0 z-40 w-full transition-all duration-300">
      {/* Scroll Progress Bar */}
      <div 
        className="h-1 bg-gradient-to-r from-blush-pink via-[#EADCF8] to-soft-mauve transition-all duration-100 ease-out origin-left"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Main Navbar container */}
      <div 
        className={`w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-2 transition-all duration-300 ${
          scrolled ? 'py-2' : 'py-4'
        }`}
      >
        <div className="glass-card rounded-full px-6 py-3 flex items-center justify-between shadow-sm">
          {/* Logo */}
          <div 
            onClick={() => handleNavClick('home')}
            className="cursor-pointer font-outfit text-xl font-bold tracking-wider bg-gradient-to-r from-[#7D6B78] to-[#4B4453] dark:from-blush-pink dark:to-soft-mauve bg-clip-text text-transparent transition-all duration-300"
          >
            Ashita Jha
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-1">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative px-4 py-1.5 rounded-full font-nunito text-sm font-semibold tracking-wide transition-all duration-300 ${
                  activeSection === item.id
                    ? 'text-[#4B4453] dark:text-[#FFF9FB]'
                    : 'text-text-light hover:text-text-dark dark:text-gray-400 dark:hover:text-gray-200'
                }`}
              >
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-blush-pink/40 dark:bg-soft-mauve/30 rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </button>
            ))}
          </nav>

          {/* Right Side Buttons: Dark Mode + Mobile Hamburger */}
          <div className="flex items-center space-x-3">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full border border-blush-pink/30 hover:border-blush-pink/60 dark:border-soft-mauve/20 dark:hover:border-soft-mauve/50 text-[#7D6B78] dark:text-gray-300 hover:bg-[#FFD9E8]/20 dark:hover:bg-soft-mauve/10 transition-all duration-300"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>

            {/* Mobile Hamburger Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-full border border-blush-pink/30 hover:border-blush-pink/60 dark:border-soft-mauve/20 dark:hover:border-soft-mauve/50 text-[#7D6B78] dark:text-gray-300 hover:bg-[#FFD9E8]/20 dark:hover:bg-soft-mauve/10 transition-all duration-300"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden w-full px-4 sm:px-6 mt-1"
          >
            <div className="glass-card rounded-2xl p-4 shadow-lg flex flex-col space-y-2">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left px-4 py-2.5 rounded-xl font-nunito font-semibold tracking-wide transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-blush-pink/40 dark:bg-soft-mauve/30 text-[#4B4453] dark:text-[#FFF9FB]'
                      : 'text-text-light hover:text-text-dark hover:bg-blush-pink/10 dark:text-gray-400 dark:hover:text-gray-200 dark:hover:bg-soft-mauve/10'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
