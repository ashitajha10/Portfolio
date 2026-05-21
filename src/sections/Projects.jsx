import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Cpu, Layout, Users, MessageSquare } from 'lucide-react';
import { Github } from '../components/Icons';

const PROJECTS = [
  {
    id: 1,
    title: 'Dementia Detection System',
    category: 'ml',
    desc: 'An ensemble machine learning app classifying stages of cognitive decline using multimodal feature models.',
    tech: ['Python', 'Scikit-learn', 'SVM', 'Pandas', 'Streamlit'],
    gitLink: 'https://github.com/ashitajha10/dementia-detector',
    demoLink: 'https://dementia-detector-hnewlxbymq3b5dw6neqg2f.streamlit.app/',
    icon: <Cpu className="text-blush-pink" size={32} />,
    gradient: 'from-[#FFD9E8] to-[#EADCF8]',
    image: '/projects/dementia-detector.png',
  },
  {
    id: 2,
    title: 'Cohive Collaboration Platform',
    category: 'web-collab',
    desc: 'A real-time team collaboration platform offering document editors, WebRTC video calling rooms, and kanban boards.',
    tech: ['React', 'Node.js', 'Express', 'Socket.io', 'WebRTC', 'Tailwind', 'MongoDB'],
    gitLink: 'https://github.com/ashitajha10/Cohive',
    demoLink: 'https://cohive-ecru.vercel.app/',
    icon: <Users className="text-soft-mauve" size={32} />,
    gradient: 'from-[#EADCF8] to-[#F8C8DC]',
    image: '/projects/cohive.png',
  },
  {
    id: 3,
    title: 'SkillSync-AI',
    category: 'web',
    desc: 'An AI-powered platform that analyzes resumes, generates skill recommendations, provides ATS scores, and supports interview preparation.',
    tech: ['React', 'Node.js', 'Express', 'Google Gemini API'],
    gitLink: 'https://github.com/ashitajha10/SkillSync-AI',
    demoLink: 'https://skillsync-ai-50ws.onrender.com/',
    icon: <MessageSquare className="text-blush-pink" size={32} />,
    gradient: 'from-[#FFD9E8] to-[#F6E6E9]',
    image: '/projects/skillsync-ai.png',
  },
  {
    id: 4,
    title: 'Weather App',
    category: 'web',
    desc: 'A modern weather application featuring real-time forecasts, geolocation support, and a sleek glassmorphism-inspired user interface powered by the OpenWeatherMap API.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'OpenWeatherMap API'],
    gitLink: 'https://github.com/ashitajha10/Weather-App',
    demoLink: 'https://ashitajha10.github.io/Weather-App/',
    icon: <Layout className="text-[#7D6B78] dark:text-soft-mauve" size={32} />,
    gradient: 'from-[#F6E6E9] to-[#EADCF8]',
    image: '/projects/weather-app.png',
  },
  {
    id: 5,
    title: 'Currency Converter',
    category: 'web',
    desc: 'A modern currency converter featuring real-time exchange rates, seamless currency switching, and a sleek glassmorphism-inspired user interface.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Exchange Rate API'],
    gitLink: 'https://github.com/ashitajha10/Currency-Converter',
    demoLink: 'https://currency-converter-self-chi.vercel.app/',
    icon: <Layout className="text-[#7D6B78] dark:text-soft-mauve" size={32} />,
    gradient: 'from-[#F6E6E9] to-[#EADCF8]',
    image: '/projects/currency-converter.png',
  },
  {
    id: 6,
    title: 'Music Player UI',
    category: 'web',
    desc: 'A fully responsive Spotify Web Player clone built with HTML and CSS, recreating the platform’s sleek interface and immersive music streaming experience.',
    tech: ['HTML5', 'CSS3'],
    gitLink: 'https://github.com/ashitajha10/Music-Player-UI',
    demoLink: 'https://ashitajha10.github.io/Music-Player-UI/',
    icon: <Layout className="text-[#7D6B78] dark:text-soft-mauve" size={32} />,
    gradient: 'from-[#F6E6E9] to-[#EADCF8]',
    image: '/projects/music-player-ui.png',
  },
];

const FILTER_ITEMS = [
  { id: 'all', label: 'All Projects' },
  { id: 'web', label: 'Web Dev' },
  { id: 'ml', label: 'Machine Learning' },
  { id: 'collab', label: 'Collaborative' },
];

function ProjectThumbnail({ project }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <div className={`h-48 w-full bg-gradient-to-br ${project.gradient} relative overflow-hidden flex items-center justify-center`}>
      {/* Fallback/Underlay Graphic Elements */}
      <div className="absolute inset-0 bg-white/20 dark:bg-black/10 backdrop-blur-[1px]" />

      {/* Central Icon - fades out once image is loaded */}
      <div
        className={`p-6 rounded-2xl bg-white/60 dark:bg-[#1E1B24]/80 shadow-md relative z-10 transition-all duration-500 ${isLoaded && !hasError ? 'opacity-0 scale-75 pointer-events-none' : 'opacity-100 scale-100'
          }`}
      >
        {project.icon}
      </div>

      {/* Main Screenshot Image */}
      {project.image && !hasError && (
        <img
          src={project.image}
          alt={project.title}
          onError={() => setHasError(true)}
          onLoad={() => setIsLoaded(true)}
          className={`absolute inset-0 w-full h-full object-cover object-top transition-all duration-700 ease-in-out ${isLoaded ? 'opacity-100' : 'opacity-0'
            } group-hover:scale-105`}
        />
      )}


      {/* Glowing Highlight */}
      <div className="absolute -bottom-8 -right-8 w-24 h-24 rounded-full bg-white/30 blur-2xl group-hover:scale-150 transition-all duration-500" />
    </div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const filteredProjects = PROJECTS.filter((project) => {
    if (filter === 'all') return true;
    if (filter === 'web') return project.category.includes('web');
    if (filter === 'ml') return project.category === 'ml';
    if (filter === 'collab') return project.category.includes('collab');
    return true;
  });

  return (
    <section id="projects" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">

      {/* Section Header */}
      <div className="text-center mb-16">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-sora text-xs font-bold tracking-widest text-[#7D6B78] dark:text-soft-mauve uppercase mb-2"
        >
          My Creations
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-outfit text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#4B4453] dark:text-[#FFF9FB]"
        >
          Featured Projects
        </motion.h2>
        <div className="w-16 h-1 bg-gradient-to-r from-blush-pink to-soft-mauve mx-auto mt-4 rounded-full" />
      </div>

      {/* Project Filters */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        {FILTER_ITEMS.map((item) => (
          <button
            key={item.id}
            onClick={() => setFilter(item.id)}
            className={`px-5 py-2 rounded-full font-nunito text-xs sm:text-sm font-bold tracking-wider transition-all duration-300 ${filter === item.id
              ? 'bg-blush-pink dark:bg-soft-mauve text-[#4B4453] dark:text-[#FFF9FB] shadow-md scale-105'
              : 'glass-card text-text-light hover:text-text-dark dark:text-gray-400 dark:hover:text-white hover:bg-blush-pink/15'
              }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Projects Grid with Framer Motion Layout animations */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        layout
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              className="glass-card rounded-3xl overflow-hidden shadow-sm hover:shadow-lg border border-blush-pink/30 hover:border-blush-pink/60 dark:hover:border-soft-mauve/40 transition-all duration-300 group flex flex-col h-full"
            >
              {/* Thumbnail Area */}
              <ProjectThumbnail project={project} />

              {/* Details Area */}
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="font-outfit text-xl font-bold text-[#4B4453] dark:text-[#FFF9FB] mb-3 group-hover:text-blush-pink dark:group-hover:text-soft-mauve transition-colors">
                    {project.title}
                  </h3>
                  <p className="font-nunito text-sm text-[#7D6B78] dark:text-gray-300 leading-relaxed mb-6">
                    {project.desc}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="font-nunito text-[10px] font-bold tracking-wider px-2.5 py-1 rounded-full bg-cream-white dark:bg-[#1A1625] text-text-light dark:text-gray-400 border border-blush-pink/20 dark:border-soft-mauve/15"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Buttons */}
                <div className="flex items-center gap-3 border-t border-blush-pink/10 dark:border-soft-mauve/10 pt-4">
                  <a
                    href={project.gitLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2 rounded-xl border border-blush-pink/30 hover:border-blush-pink/60 dark:border-soft-mauve/20 dark:hover:border-soft-mauve/50 font-nunito text-xs font-bold text-text-light dark:text-gray-300 hover:bg-[#FFD9E8]/20 dark:hover:bg-soft-mauve/10 transition-all"
                  >
                    <Github size={14} />
                    <span>Source</span>
                  </a>
                  {project.demoLink !== '#' && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-2 rounded-xl bg-blush-pink hover:bg-blush-pink/80 dark:bg-soft-mauve dark:hover:bg-soft-mauve/80 font-nunito text-xs font-bold text-[#4B4453] dark:text-[#FFF9FB] transition-all"
                    >
                      <ExternalLink size={14} />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
