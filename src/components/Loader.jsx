import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-cream-white dark:bg-[#130F1A]"
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
        >
          {/* Animated concentric rings */}
          <div className="relative w-24 h-24 flex items-center justify-center">
            <motion.div
              className="absolute w-full h-full rounded-full border-4 border-blush-pink/20 border-t-blush-pink"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1.2, ease: 'linear' }}
            />
            <motion.div
              className="absolute w-16 h-16 rounded-full border-4 border-soft-mauve/20 border-b-soft-mauve"
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 1.6, ease: 'linear' }}
            />
            <motion.div
              className="absolute w-8 h-8 rounded-full bg-pastel-pink/80 dark:bg-soft-mauve/40"
              animate={{ scale: [0.8, 1.2, 0.8] }}
              transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            />
          </div>

          {/* Fading text */}
          <motion.div
            className="mt-8 flex flex-col items-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <h1 className="font-outfit text-2xl font-bold tracking-widest bg-gradient-to-r from-blush-pink to-soft-mauve bg-clip-text text-transparent">
              ASHITA JHA
            </h1>
            <p className="font-nunito text-xs text-text-light dark:text-gray-400 mt-2 tracking-widest">
              LOADING PORTFOLIO...
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
