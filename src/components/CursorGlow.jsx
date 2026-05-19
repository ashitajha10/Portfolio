import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CursorGlow() {
  const [isMobile, setIsMobile] = useState(true);

  const cursorX = useMotionValue(-200);
  const cursorY = useMotionValue(-200);

  const springConfig = { damping: 40, stiffness: 300, mass: 0.6 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(
        window.matchMedia('(max-width: 768px)').matches || 
        'ontouchstart' in window || 
        navigator.maxTouchPoints > 0
      );
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    if (!isMobile) {
      window.addEventListener('mousemove', moveCursor);
    }

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('mousemove', moveCursor);
    };
  }, [isMobile, cursorX, cursorY]);

  if (isMobile) return null;

  return (
    <motion.div
      id="cursor-glow"
      className="hidden md:block pointer-events-none fixed top-0 left-0 w-[400px] h-[400px] rounded-full -translate-x-1/2 -translate-y-1/2 z-40 bg-[radial-gradient(circle,rgba(248,200,220,0.25)_0%,rgba(234,220,248,0.08)_50%,transparent_100%)] dark:bg-[radial-gradient(circle,rgba(216,191,216,0.18)_0%,rgba(248,200,220,0.03)_50%,transparent_100%)] blur-[40px]"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
      }}
    />
  );
}
