import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { Github, Linkedin } from '../components/Icons';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const validateForm = () => {
    const tempErrors = {};
    if (!form.name.trim()) tempErrors.name = 'Name is required';
    if (!form.email.trim()) {
      tempErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      tempErrors.email = 'Please enter a valid email address';
    }
    if (!form.message.trim()) tempErrors.message = 'Message is required';

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear error as user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "63b38a6a-34b5-40fd-a2ea-4cb575d02046",
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setIsSubmitting(false);
        setShowToast(true);
        setForm({ name: '', email: '', message: '' });

        // Auto-hide toast after 4 seconds
        setTimeout(() => {
          setShowToast(false);
        }, 4000);
      } else {
        console.error("Failed to send message", result);
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">

      {/* Section Header */}
      <div className="text-center mb-16">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-sora text-xs font-bold tracking-widest text-[#7D6B78] dark:text-soft-mauve uppercase mb-2"
        >
          Let&apos;s Connect
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-outfit text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#4B4453] dark:text-[#FFF9FB]"
        >
          Contact Me
        </motion.h2>
        <div className="w-16 h-1 bg-gradient-to-r from-blush-pink to-soft-mauve mx-auto mt-4 rounded-full" />
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

        {/* Left Side: Contact Information */}
        <motion.div
          className="lg:col-span-5"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="space-y-6">
            <h3 className="font-outfit text-2xl font-bold text-[#4B4453] dark:text-gray-200">
              Want to collaborate, hire, or just chat?
            </h3>
            <p className="font-nunito text-sm sm:text-base text-text-light dark:text-gray-300 leading-relaxed">
              Reach out for projects, collaborations, or tech conversations ♡ <br></br>I bring code, creativity, and at least 17 open browser tabs! ✿
            </p>

            {/* Visual Quick Contact Links */}
            <div className="space-y-4 pt-6">
              <a
                href="mailto:ashitajha10@gmail.com"
                className="flex items-center gap-4 group cursor-pointer"
              >
                <div className="p-3 rounded-2xl glass-card text-blush-pink group-hover:scale-110 transition-transform">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="font-outfit text-[11px] font-bold text-text-light dark:text-gray-400 uppercase tracking-widest">
                    Email Me
                  </p>
                  <p className="font-nunito text-sm text-[#4B4453] dark:text-gray-200 font-semibold group-hover:underline">
                    ashitajha10@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/ashitajha"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group cursor-pointer"
              >
                <div className="p-3 rounded-2xl glass-card text-soft-mauve group-hover:scale-110 transition-transform">
                  <Linkedin size={18} />
                </div>
                <div>
                  <p className="font-outfit text-[11px] font-bold text-text-light dark:text-gray-400 uppercase tracking-widest">
                    Connect on LinkedIn
                  </p>
                  <p className="font-nunito text-sm text-[#4B4453] dark:text-gray-200 font-semibold group-hover:underline">
                    linkedin.com/in/ashitajha
                  </p>
                </div>
              </a>

              <a
                href="https://github.com/ashitajha10"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group cursor-pointer"
              >
                <div className="p-3 rounded-2xl glass-card text-[#7D6B78] dark:text-gray-300 group-hover:scale-110 transition-transform">
                  <Github size={18} />
                </div>
                <div>
                  <p className="font-outfit text-[11px] font-bold text-text-light dark:text-gray-400 uppercase tracking-widest">
                    Follow on GitHub
                  </p>
                  <p className="font-nunito text-sm text-[#4B4453] dark:text-gray-200 font-semibold group-hover:underline">
                    github.com/ashitajha10
                  </p>
                </div>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Contact Form */}
        <motion.div
          className="lg:col-span-7"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="glass-card rounded-3xl p-6 sm:p-8 border border-blush-pink/30 shadow-sm relative">
            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Name Field */}
              <div className="flex flex-col">
                <label htmlFor="name" className="font-outfit text-xs font-bold text-text-dark dark:text-gray-300 uppercase tracking-wider mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleInputChange}
                  placeholder="e.g. Jane Doe"
                  className={`px-4 py-3 rounded-2xl border bg-cream-white/50 dark:bg-black/10 text-sm font-nunito text-text-dark dark:text-gray-200 focus:outline-none transition-all ${errors.name
                    ? 'border-red-400 focus:border-red-400'
                    : 'border-blush-pink/40 focus:border-blush-pink dark:border-soft-mauve/25 dark:focus:border-soft-mauve'
                    }`}
                />
                {errors.name && (
                  <span className="flex items-center gap-1 text-xs text-red-500 font-nunito mt-1">
                    <AlertCircle size={12} /> {errors.name}
                  </span>
                )}
              </div>

              {/* Email Field */}
              <div className="flex flex-col">
                <label htmlFor="email" className="font-outfit text-xs font-bold text-text-dark dark:text-gray-300 uppercase tracking-wider mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleInputChange}
                  placeholder="e.g. jane@example.com"
                  className={`px-4 py-3 rounded-2xl border bg-cream-white/50 dark:bg-black/10 text-sm font-nunito text-text-dark dark:text-gray-200 focus:outline-none transition-all ${errors.email
                    ? 'border-red-400 focus:border-red-400'
                    : 'border-blush-pink/40 focus:border-blush-pink dark:border-soft-mauve/25 dark:focus:border-soft-mauve'
                    }`}
                />
                {errors.email && (
                  <span className="flex items-center gap-1 text-xs text-red-500 font-nunito mt-1">
                    <AlertCircle size={12} /> {errors.email}
                  </span>
                )}
              </div>

              {/* Message Field */}
              <div className="flex flex-col">
                <label htmlFor="message" className="font-outfit text-xs font-bold text-text-dark dark:text-gray-300 uppercase tracking-wider mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={form.message}
                  onChange={handleInputChange}
                  placeholder="What would you like to build?"
                  className={`px-4 py-3 rounded-2xl border bg-cream-white/50 dark:bg-black/10 text-sm font-nunito text-text-dark dark:text-gray-200 focus:outline-none transition-all ${errors.message
                    ? 'border-red-400 focus:border-red-400'
                    : 'border-blush-pink/40 focus:border-blush-pink dark:border-soft-mauve/25 dark:focus:border-soft-mauve'
                    }`}
                />
                {errors.message && (
                  <span className="flex items-center gap-1 text-xs text-red-500 font-nunito mt-1">
                    <AlertCircle size={12} /> {errors.message}
                  </span>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-2xl bg-blush-pink hover:bg-blush-pink/80 dark:bg-soft-mauve dark:hover:bg-soft-mauve/80 text-text-dark dark:text-[#FFF9FB] font-nunito font-bold text-sm tracking-wide shadow-md flex items-center justify-center gap-2 hover:-translate-y-0.5 disabled:opacity-50 disabled:pointer-events-none transition-all"
              >
                {isSubmitting ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={14} />
                  </>
                )}
              </button>
            </form>
          </div>
        </motion.div>
      </div>

      {/* Floating Action/Submission Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            className="fixed bottom-6 right-6 z-50 glass-card px-5 py-3 rounded-2xl flex items-center gap-3 border border-green-300 dark:border-green-800 shadow-lg"
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: 'spring', damping: 25 }}
          >
            <CheckCircle2 className="text-green-500" size={20} />
            <div className="flex flex-col">
              <span className="font-outfit text-xs font-bold text-text-dark dark:text-gray-200">
                Message Sent!
              </span>
              <span className="font-nunito text-[11px] text-[#7D6B78] dark:text-gray-400">
                Thank you. I will get back to you shortly.
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
