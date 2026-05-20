import { useMemo } from 'react';
import { motion } from 'framer-motion';

export default function Background() {
  // Generate random positions for subtle sparkles/stars once on mount
  const sparkles = useMemo(() => {
    return Array.from({ length: 20 }, (_, i) => ({
      id: i,
      // eslint-disable-next-line react-hooks/purity
      top: `${Math.random() * 100}%`,
      // eslint-disable-next-line react-hooks/purity
      left: `${Math.random() * 100}%`,
      // eslint-disable-next-line react-hooks/purity
      delay: Math.random() * 5,
      // eslint-disable-next-line react-hooks/purity
      size: Math.random() * 4 + 2,
      // eslint-disable-next-line react-hooks/purity
      duration: Math.random() * 3 + 2,
    }));
  }, []);

  return (
    <div className="fixed inset-0 -z-50 w-full h-full overflow-hidden bg-rose-beige dark:bg-[#130F1A] transition-colors duration-500">
      {/* Decorative Pastel Blobs */}
      {/* Blob 1: Blush Pink (Top Left) */}
      <motion.div
        className="absolute -top-[10%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-blush-pink/30 dark:bg-blush-pink/10 blur-[120px]"
        animate={{
          x: [0, 50, -30, 0],
          y: [0, 30, -50, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Blob 2: Lavender Tint (Bottom Right) */}
      <motion.div
        className="absolute -bottom-[10%] -right-[10%] w-[45vw] h-[45vw] rounded-full bg-[#EADCF8]/30 dark:bg-[#EADCF8]/10 blur-[120px]"
        animate={{
          x: [0, -40, 50, 0],
          y: [0, -30, 40, 0],
          scale: [1, 0.9, 1.15, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Blob 3: Soft Mauve (Center Left) */}
      <motion.div
        className="absolute top-[40%] -left-[15%] w-[35vw] h-[35vw] rounded-full bg-soft-mauve/25 dark:bg-soft-mauve/8 blur-[100px]"
        animate={{
          x: [0, 60, -20, 0],
          y: [0, -40, 20, 0],
          scale: [0.95, 1.05, 0.9, 0.95],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Blob 4: Pastel Pink (Center Right) */}
      <motion.div
        className="absolute top-[20%] right-[10%] w-[30vw] h-[30vw] rounded-full bg-[#FFD9E8]/35 dark:bg-[#FFD9E8]/8 blur-[110px]"
        animate={{
          x: [0, -30, 20, 0],
          y: [0, 40, -30, 0],
          scale: [1.1, 0.95, 1.05, 1.1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Sparkling Stars */}
      <div className="absolute inset-0">
        {sparkles.map((sparkle) => (
          <motion.svg
            key={sparkle.id}
            className="absolute text-blush-pink dark:text-soft-mauve opacity-40"
            style={{
              top: sparkle.top,
              left: sparkle.left,
              width: sparkle.size,
              height: sparkle.size,
            }}
            viewBox="0 0 24 24"
            fill="currentColor"
            animate={{
              opacity: [0.2, 0.9, 0.2],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: sparkle.duration,
              repeat: Infinity,
              delay: sparkle.delay,
              ease: 'easeInOut',
            }}
          >
            <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4L12 0Z" />
          </motion.svg>
        ))}
      </div>
    </div>
  );
}
