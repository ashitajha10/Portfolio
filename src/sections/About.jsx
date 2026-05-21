import { useState } from 'react';
import { motion } from 'framer-motion';
import { Code } from 'lucide-react';

const SKILLS = [
  "C++", "Python", "JavaScript", "Java",
  "React", "Tailwind CSS", "HTML5", "CSS3", "React Router", "Bootstrap",
  "Node.js", "Socket.IO", "JWT",
  "TensorFlow", "PyTorch", "Scikit-learn", "Keras", "Pandas", "NumPy", "Matplotlib",
  "MongoDB", "MySQL",
  "Git", "GitHub", "Figma", "Canva", "Streamlit"
];

function ProfileImage() {
  const [hasError, setHasError] = useState(false);

  return (
    <img
      src={hasError ? 'https://ui-avatars.com/api/?name=Ashita+Jha&background=FADAE9&color=D8869E&size=400' : '/photo.jpg'}
      alt="Ashita Jha"
      className={`w-full h-full object-cover object-center transition-transform duration-500 ${
        hasError
          ? 'scale-100 translate-x-0' // centered fallback avatar
          : 'origin-center scale-[1.8] translate-x-4 hover:scale-[1.9]' // real photo crop
      }`}
      onError={() => setHasError(true)}
    />
  );
}

export default function About() {
  const scrollVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">

      {/* Section Header */}
      <div className="text-center mb-16">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-sora text-xs font-bold tracking-widest text-[#7D6B78] dark:text-soft-mauve uppercase mb-2"
        >
          Get To Know Me
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-outfit text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#4B4453] dark:text-[#FFF9FB]"
        >
          About Me
        </motion.h2>
        <div className="w-16 h-1 bg-gradient-to-r from-blush-pink to-soft-mauve mx-auto mt-4 rounded-full" />
      </div>

      {/* Main Grid: Photo + Info */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">

        {/* Left Side: Photo Profile */}
        <motion.div
          className="lg:col-span-4 flex justify-center lg:justify-start"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full p-2 glass-card mx-auto lg:mx-0">
            <div className="w-full h-full rounded-full overflow-hidden border-2 border-white/50 relative bg-blush-pink/10">
              {/* Profile Image (Will fallback to centered avatar placeholder if not found) */}
              <ProfileImage />
            </div>
            {/* Decorative Ambient Glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blush-pink to-soft-mauve rounded-full blur-2xl opacity-30 -z-10 animate-pulse-slow"></div>
          </div>
        </motion.div>

        {/* Right Side: Biography text */}
        <motion.div
          className="lg:col-span-8 flex flex-col space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={scrollVariants}
        >
          <h3 className="font-outfit text-2xl font-bold text-[#4B4453] dark:text-gray-200">
            A software developer with a heart for intelligence and aesthetics.
          </h3>
          <p className="font-nunito text-text-light dark:text-gray-300 leading-relaxed">
            I’m an engineering undergraduate at Bharati Vidyapeeth's College of Engineering, New Delhi, passionate about software development and machine learning systems ♡. I love building thoughtful digital experiences that combine clean code, creative UI design, and intelligent problem-solving to create applications people genuinely enjoy using.
          </p>
          <p className="font-nunito text-text-light dark:text-gray-300 leading-relaxed">
            From real-time collaboration platforms to AI-powered projects, I’m always exploring ways to make technology more meaningful, accessible, and aesthetically engaging.
          </p>
          <p className="font-nunito text-text-light dark:text-gray-300 leading-relaxed">
            Beyond coding, I hold a junior diploma in Kathak, and dancing has always been one of my favorite creative outlets. When I’m not building projects or experimenting with new technologies, you’ll probably find me dancing my heart out, listening to music, exploring cute interface ideas, or obsessing over soft pastel color palettes ♡
          </p>
          <p className="font-nunito text-text-light dark:text-gray-300 leading-relaxed">
            I’m someone who loves creating things — whether it’s software, interfaces, ideas, or moments — and I’m always curious, always learning, and always building something new ✿
          </p>
          <p className="font-nunito text-text-light dark:text-gray-300 leading-relaxed">
            Currently open to internships, freelance opportunities, collaborations, and exciting projects where I can learn, create, and grow as a developer and ML enthusiast.
          </p>

          {/* Skills Section */}
          <div className="pt-6">
            <h4 className="font-outfit text-xl font-bold text-[#4B4453] dark:text-gray-200 mb-4 flex items-center gap-2">
              <Code size={22} className="text-blush-pink" /> My Skills
            </h4>
            <div className="flex flex-wrap gap-2.5">
              {SKILLS.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 text-sm font-nunito font-bold bg-white/60 dark:bg-white/5 border border-blush-pink/20 text-[#4B4453] dark:text-gray-200 rounded-full shadow-sm hover:shadow-md hover:border-blush-pink/50 hover:-translate-y-0.5 hover:bg-blush-pink/10 dark:hover:bg-blush-pink/20 transition-all duration-300 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
