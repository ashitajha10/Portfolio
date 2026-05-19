import React from 'react';
import { ThemeProvider } from './components/ThemeContext';
import Loader from './components/Loader';
import Background from './components/Background';
import CursorGlow from './components/CursorGlow';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Sections
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

function AppContent() {
  return (
    <div className="relative min-h-screen text-[#4B4453] dark:text-gray-200 selection:bg-blush-pink/40">
      {/* Visual Enhancers */}
      <Background />
      <CursorGlow />
      <Loader />

      {/* Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="w-full relative">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
