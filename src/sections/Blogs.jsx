import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, ArrowRight, Image as ImageIcon } from 'lucide-react';

const BLOGS = [
  {
    id: 1,
    title: 'Why Dancing Makes Me a Better Developer 🎶',
    date: 'May 20, 2026',
    excerpt: 'Years of learning Kathak taught me discipline, rhythm, and intention, and somewhere along the way, I realized those same qualities make a better developer too. Here is how dance shaped the way I think about code ♡',
    content: `People usually see dancing and software development as two completely different worlds - one artistic and expressive, the other technical and logical. But for me, they’ve always been deeply connected ♡

Before I started building projects and writing code, I spent years learning Kathak 💃, a classical dance form that taught me discipline, rhythm, storytelling, and expression. At first, I never imagined those lessons would shape the way I approach technology and design today, but somehow, they did.

Kathak taught me that every movement has intention ✨ In development, I’ve started seeing interfaces the same way. Good design isn’t just about making things look pretty; it’s about creating flow, clarity, and emotion. The same way dance guides attention through movement, great UI guides users naturally through an experience.

Dancing also made me more patient with the creative process 🌸 Learning choreography takes repetition, refinement, and consistency, a lot like debugging code or redesigning an interface for the tenth time because something still feels “slightly off.” Both require attention to detail, persistence, and trust in gradual improvement.

One of my favorite things about Kathak is rhythm 🎵, and honestly, I think coding has rhythm too. There’s a strange kind of harmony in building components, structuring logic, and creating interactions that feel smooth and intuitive. Whether it’s animations, transitions, or frontend design, I’m always drawn to experiences that feel fluid and expressive.

Beyond technical skills, dancing reminds me that creativity matters 💡 In a world where technology can sometimes feel cold or overly functional, I love creating digital experiences that feel warm, thoughtful, and human ♡

So while development and dance may seem unrelated, both have shaped the way I think, create, and solve problems. One taught me logic, the other taught me expression - and somewhere between the two, I found my own creative rhythm ✿`,
    image: '/blogs/danceblog.png',
    category: 'Personal',
  },
  {
    id: 2,
    title: 'Things Nobody Tells You About Deploying Projects 🌐',
    date: 'May 02, 2026',
    excerpt: 'I once spent hours convinced the hosting platform was broken — turns out I had just forgotten my environment variables 🤦 Nobody warned me that deployment is where the real developer grit gets forged ♡',
    content: `When I first started building web applications, I naively assumed deployment would be the easiest step - just click a magical "Deploy" button and watch your app appear beautifully on the internet. Absolutely not 😅 Nobody tells you that deployment is where the real developer grit is forged 💪

The first time I deployed a project, I spent hours convinced the hosting platform was broken, only to realize I had forgotten to add my environment variables 🤦 Then came broken API endpoints, mysterious CORS errors, and the classic "works perfectly on localhost" disclaimer. Deployment has a very special way of humbling even the most confident developers ✨

Building the project is only half the journey 🛠️; making it work consistently in production is a completely different skill. You suddenly find yourself diving deep into folder structures, production environment configs, API security protocols, performance optimization, and cross-browser compatibility. Somehow, every tiny edge case decides to manifest only after you go live.

Beyond the technical hurdles, there is a unique emotional attachment to seeing your site go live 🥹 You spend weeks building it, and when it finally works, it feels like sharing a small piece of your brain with the world. Through all the chaos, deployment has taught me patience, the importance of reading error logs carefully, and never to trust a project that works flawlessly on the first try. Every successful build feels less like clicking a button and more like surviving a rewarding adventure ✿`,
    image: '/blogs/deployblog.jpg',
    category: 'Technology',
  },
  {
    id: 3,
    title: 'Machine Learning Concepts That Confused Me at First 🤖',
    date: 'April 21, 2026',
    excerpt: 'From gradients that sounded like magic to models that were “too smart” for their own good, ML was a bumpy ride. Here is how I finally cut through the jargon and started building things that actually work ♡',
    content: `When I first started learning machine learning, I genuinely thought the hardest part would be writing the code 💻 In reality, the real challenge was wrapping my head around the complex mathematical terms, graphs, and equations. At the beginning, everything from epochs and loss to overfitting and gradients sounded deceptively similar, and tutorials often assumed you already had a PhD in statistics 😭

One of the first concepts that completely baffled me was overfitting 🤔 I remember seeing a model reach 99% accuracy and wondering why anyone would be unhappy about that. It took some hands-on practice to realize that a model can become so good at memorizing training data and completely fail on real-world inputs. That was when I understood that ML is not about perfect training scores, but about building models that generalize well ✨

Understanding the difference between training, validation, and test accuracy was another hurdle - they initially felt like the same concept in different packaging. Then came gradient descent 📉, which was usually explained with intimidating multi-dimensional slope diagrams and partial derivative equations. Stripping away the jargon, I realized it is just a model iteratively taking smaller, calculated steps to minimize its errors.

Ultimately, I learned that machine learning is highly experimental 🧪 There is rarely a single "perfect" model for a problem; instead, it is a process of trial, observation, and continuous adjustment. Feeling confused is a completely natural part of the learning curve, and the best way to grasp these concepts is simply to build things, break them, and learn from the error logs ✿`,
    image: '/blogs/mlblog.png',
    category: 'Technology',
  },
  {
    id: 4,
    title: 'How I structure my React Projects 👩🏻‍💻',
    date: 'April 14, 2026',
    excerpt: 'My early React directories were a graveyard of files named “finalFinalComponent.” Now, I’ve found a scalable, clean, and intuitive way to keep my code organized so I don’t lose my mind at 2 AM ♡',
    content: `When I first started learning React, my project directory looked like absolute chaos 😵 Components were mixed with pages, utility files were scattered everywhere, and I had multiple files named things like "finalFinalComponent.jsx". As projects grow, you quickly realize that a clean, scalable folder structure is not just about aesthetics - it is a survival mechanism.

Today, I organize my React applications with high modularity and separation of concerns 🗂️ I maintain dedicated folders for reusable UI components, layout pages, custom hooks, utilities, context providers, and API services. This keeps the workspace organized and saves precious time when debugging issues.

A key principle I follow is component reusability ♻️ Writing the same button logic multiple times is inefficient, so I build small, modular elements that accept props for customization. Additionally, I prioritize folder readability; if a layout is too nested and hard to navigate, it is usually a sign of over-engineering that needs to be simplified.

For styling, keeping a centralized theme and consistent naming makes a massive difference ✨ Establishing shared constants and responsive styling utilities prevents the headache of fixing spacing issues across dozens of disparate components. A thoughtful structure makes onboarding easier, development smoother, and scaling far less painful ✿`,
    image: '/blogs/reactblog.jpg',
    category: 'Technology',
  },
  {
    id: 5,
    title: 'My Relationship With Browser Tabs Is Getting Serious ♡',
    date: 'December 21, 2025',
    excerpt: 'One quick search. That is all it ever starts as. Somehow that turns into 27 tabs of Stack Overflow threads, Pinterest boards, documentation, and at least one tab whose purpose no longer exists 🦝 And yet, I refuse to close any of them ♡',
    content: `As a developer, my relationship with browser tabs has reached a level of emotional attachment that feels slightly chaotic 😅 What starts as a simple search for a single API reference inevitably spirals into a collection of Stack Overflow pages, documentation, UI design ideas on Pinterest, and several tabs whose original purpose has long been forgotten.

We developers are like digital raccoons 🦝, hoarding resources under the assumption that "we might need this later." The funny thing is, even when the tab titles are squished to microscopic widths, I can still navigate them by pure visual memory - remembering that the solution to my bug is located "near the purple icon next to Spotify 🎵."

While having dozens of active tabs can slow down your system 🥲, it also mirrors the creative and curious mindset of a software engineer. We jump between ideas, cross-reference solutions, and collect design inspiration on the fly. So while I probably do not need all 27 tabs active at this exact moment, closing them still feels like a step I am not quite ready to take ♡`,
    image: '/blogs/tabblog.jpg',
    category: 'Personal',
  },
  {
    id: 6,
    title: 'Ashita Between Commits 🎀',
    date: 'October 10, 2025',
    excerpt: 'Code, chaos, creativity, and way too many thoughts - that is basically me ✨ A little peek into who I am beyond the terminal, the commits, and the late-night debugging sessions ♡',
    content: `Hi, I’m Ashita ♡ - a little mix of code, chaos, creativity, and way too many thoughts ✨

Ever since I was a child, I’ve always been that kid - the one constantly talking 🗣️, dancing around the house 💃, volunteering for stage performances 🎤, and somehow making friends everywhere I went ♡ Silence and I have never really been best friends ✨

I grew up loving expression in every form possible 🎶 Whether it was dancing, speaking on stage, painting, music, storytelling, or simply being around people, I always found joy in creating energy and connection around me ✿

Dance especially became a huge part of who I am 💃 I hold a junior diploma in Kathak, and honestly, performing has always felt magical to me ✨ There’s something beautiful about rhythm, movement, storytelling, and emotion all coming together, and I think that love for creativity slowly found its way into the way I design and build things today too ♡

And then somewhere between school projects , curiosity, and pressing random buttons on computers just to “see what happens,” I discovered technology 💻

At first, I didn’t even realize engineering was becoming my thing. I just knew I loved solving problems , understanding how systems worked, and creating things that felt meaningful ✨ The more I explored software development and machine learning, the more I realized: “wait… I actually really love this.” ♡

Now I genuinely enjoy building projects , designing interfaces 🎀, debugging chaos at 2am ☕, and turning tiny ideas into real applications ✨

And yes, despite loving tech, I’m still very much an emotional, expressive, slightly chaotic human being ♡ I panic sometimes 😭 I overthink things. But I’ve also realized that being calm under pressure isn’t the only thing that matters - being adaptable, communicative, and willing to figure things out matters too ✨

I think one of my biggest strengths is that I genuinely enjoy people 🫶

I love conversations, stories, and understanding how different minds work ♡ One of the sweetest compliments I’ve received from people is that I carry a lot of warmth and love within me ✨ My family and friends mean everything to me, and I feel incredibly lucky to be surrounded by people who love, support, and care for me 💗 They’ve shaped so much of who I am and continue to remind me to stay grounded no matter where life takes me 🌸

At the same time, I’m deeply rooted in culture and tradition ✿ I love creating Madhubani paintings 🎨, dancing to classical rhythms 💃, and carrying little pieces of tradition with me even while working in modern technology spaces 💻 And honestly, anyone who knows me knows just how obsessed I am with pretty kurtis and jhumkas ♡🌷

To me, art and engineering don’t oppose each other, they complete each other ✨

Outside coding, you’ll usually find me listening to music like it’s emotional therapy 🎧, romanticizing life over sunsets and playlists 🌅✨, traveling and collecting tiny memories , redesigning interfaces for absolutely no reason , painting whenever inspiration randomly hits , or talking so much that people eventually ask me to breathe ♡

I also absolutely love food 🍜 - both eating it and cooking for the people I love ♡ There’s something really comforting about sharing meals, trying new places, and making food for people who matter to me ✨ And if I’m being honest, momos might genuinely be my soulmate at this point 🥟💗

I value art in all its forms because I think creativity makes life softer, warmer, and more human 🌸

As for the future, I hope to build a meaningful career in software development , create things that genuinely help people ♡, and continue growing into someone who can contribute positively to society ✨

But more than perfectly planned outcomes, I think I want a life full of exciting challenges 🚀, unexpected opportunities 🌷, beautiful surprises ✨, meaningful connections 🫶, and stories worth telling ♡

For now, I’m just trying to learn, create, explore, dance through the chaos 💃, and enjoy the journey one little step at a time ✿`,
    image: '/blogs/myblog.jpeg',
    category: 'Personal',
  },
];

function BlogThumbnail({ src, alt }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <div className="relative w-full h-48 overflow-hidden bg-gradient-to-br from-[#FFD9E8] to-[#EADCF8] dark:from-[#2A2438] dark:to-[#1E1B24]">
      {/* Loading State / Fallback Icon */}
      {(!isLoaded || hasError) && (
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            animate={{ scale: [1, 1.1, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ImageIcon className="text-blush-pink/40 dark:text-soft-mauve/40" size={48} />
          </motion.div>
        </div>
      )}

      {/* Actual Image */}
      {!hasError && (
        <img
          src={src}
          alt={alt}
          onError={() => setHasError(true)}
          onLoad={() => setIsLoaded(true)}
          className={`absolute inset-0 w-full h-full object-cover object-center transition-all duration-700 ease-in-out ${isLoaded ? 'opacity-100' : 'opacity-0'
            } group-hover:scale-105`}
        />
      )}
    </div>
  );
}

function ModalImage({ src, alt }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <div className="relative w-full h-full bg-gradient-to-br from-[#FFD9E8] to-[#EADCF8] dark:from-[#2A2438] dark:to-[#1E1B24]">
      {/* Loading State / Fallback Icon */}
      {(!isLoaded || hasError) && (
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            animate={{ scale: [1, 1.1, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ImageIcon className="text-blush-pink/40 dark:text-soft-mauve/40" size={64} />
          </motion.div>
        </div>
      )}

      {/* Actual Image */}
      {!hasError && (
        <img
          src={src}
          alt={alt}
          onError={() => setHasError(true)}
          onLoad={() => setIsLoaded(true)}
          className={`w-full h-full object-cover object-center transition-all duration-700 ease-in-out ${isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
        />
      )}
    </div>
  );
}

const NOTE_COLORS = [
  'bg-[#FFF9E6] dark:bg-[#2C2822]', // Pastel Yellow
  'bg-[#FFF0F5] dark:bg-[#2C2226]', // Lavender Blush
  'bg-[#F0F8FF] dark:bg-[#21272C]', // Alice Blue
  'bg-[#F5FFFA] dark:bg-[#202C26]', // Mint Cream
];

const NOTE_ROTATIONS = ['-rotate-2', 'rotate-2', '-rotate-1', 'rotate-1'];

export default function Blogs() {
  const [selectedBlog, setSelectedBlog] = useState(null);

  // Lock body scroll when blog modal is open
  useEffect(() => {
    if (selectedBlog) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedBlog]);

  return (
    <section id="blogs" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">

      {/* Section Header */}
      <div className="text-center mb-16">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-sora text-xs font-bold tracking-widest text-[#7D6B78] dark:text-soft-mauve uppercase mb-2"
        >
          My Thoughts
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-outfit text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#4B4453] dark:text-[#FFF9FB]"
        >
          Latest Blogs
        </motion.h2>
        <div className="w-16 h-1 bg-gradient-to-r from-blush-pink to-soft-mauve mx-auto mt-4 rounded-full" />
      </div>

      {/* Blog Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {BLOGS.map((blog, index) => (
          <motion.div
            key={blog.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`group relative rounded-sm shadow-[2px_4px_12px_rgba(0,0,0,0.1)] hover:shadow-[4px_8px_20px_rgba(0,0,0,0.15)] dark:shadow-[2px_4px_12px_rgba(0,0,0,0.3)] transition-all duration-300 flex flex-col cursor-pointer hover:-translate-y-2 hover:rotate-0 ${NOTE_COLORS[index % NOTE_COLORS.length]} ${NOTE_ROTATIONS[index % NOTE_ROTATIONS.length]}`}
            onClick={() => setSelectedBlog(blog)}
          >
            {/* Sticky Tape */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-14 h-6 bg-white/60 dark:bg-white/20 backdrop-blur-md shadow-[0_1px_3px_rgba(0,0,0,0.1)] border border-white/40 dark:border-white/10 rotate-2 z-20" />

            {/* Thumbnail */}
            <div className="p-3 pb-0">
              <BlogThumbnail src={blog.image} alt={blog.title} />
            </div>

            {/* Content Container */}
            <div className="p-5 flex flex-col flex-grow">
              <div className="flex items-center justify-between mb-3">
                <span className="px-2 py-1 text-[9px] font-bold uppercase tracking-wider bg-black/5 dark:bg-white/10 text-text-dark dark:text-gray-200 rounded-sm">
                  {blog.category}
                </span>
                <span className="flex items-center gap-1.5 text-xs font-nunito font-semibold text-text-light dark:text-gray-400">
                  <Calendar size={12} /> {blog.date}
                </span>
              </div>

              <h3 className="font-outfit text-xl font-bold text-text-dark dark:text-gray-100 mb-3 group-hover:text-blush-pink dark:group-hover:text-soft-mauve transition-colors">
                {blog.title}
              </h3>

              <p className="font-nunito text-sm text-text-light dark:text-gray-400 mb-6 flex-grow">
                {blog.excerpt}
              </p>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedBlog(blog);
                }}
                className="flex items-center gap-2 font-outfit text-sm font-bold text-[#7D6B78] dark:text-gray-300 group-hover:text-blush-pink dark:group-hover:text-soft-mauve transition-colors mt-auto"
              >
                Read More <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Expanded Blog Modal */}
      {createPortal(
        <AnimatePresence>
          {selectedBlog && (
            <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 sm:p-6 md:p-10 pointer-events-auto">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedBlog(null)}
                className="fixed inset-0 bg-black/60 backdrop-blur-md z-0"
              />

              {/* Modal Content Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                className="relative w-full max-w-2xl bg-cream-white dark:bg-[#130F1A] rounded-3xl shadow-2xl overflow-hidden z-10 border border-white/20 dark:border-white/10 flex flex-col max-h-[85vh] sm:max-h-[80vh]"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedBlog(null)}
                  className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/50 dark:bg-black/50 backdrop-blur-sm border border-white/30 dark:border-white/10 hover:bg-white dark:hover:bg-white/10 text-text-dark dark:text-white transition-all shadow-sm"
                >
                  <X size={20} />
                </button>

                {/* Scrollable Container */}
                <div className="overflow-y-auto w-full h-full custom-scrollbar flex-1">
                  {/* Modal Header Image */}
                  <div className="w-full h-48 sm:h-64 relative bg-gradient-to-br from-[#FFD9E8] to-[#EADCF8] dark:from-[#2A2438] dark:to-[#1E1B24]">
                    <ModalImage src={selectedBlog.image} alt={selectedBlog.title} />
                  </div>

                  {/* Modal Body */}
                  <div className="p-6 sm:p-8 max-w-3xl mx-auto">
                    {/* Category, Date & Title */}
                    <div className="mb-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider bg-blush-pink dark:bg-soft-mauve text-white rounded-full">
                          {selectedBlog.category}
                        </span>
                        <span className="flex items-center gap-1.5 text-xs font-nunito font-semibold text-text-light dark:text-gray-400">
                          <Calendar size={14} /> {selectedBlog.date}
                        </span>
                      </div>
                      <h2 className="font-outfit text-2xl sm:text-3xl md:text-4xl font-extrabold text-text-dark dark:text-white leading-tight">
                        {selectedBlog.title}
                      </h2>
                      <div className="w-full h-px bg-gradient-to-r from-blush-pink/30 to-soft-mauve/30 my-6" />
                    </div>

                    <div className="prose prose-lg prose-headings:font-outfit prose-p:font-nunito dark:prose-invert max-w-none text-text-light dark:text-gray-300">
                      {/* Render paragraphs preserving line breaks */}
                      {selectedBlog.content.split('\n\n').map((paragraph, index) => (
                        <p key={index} className="mb-4 leading-relaxed text-base sm:text-lg whitespace-pre-line">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </section>
  );
}
