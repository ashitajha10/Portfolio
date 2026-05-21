# 🌸 Ashita Jha | Portfolio Space

> **Software Developer • ML Explorer • Creative Soul**

Welcome to my digital space! This repository hosts my personal portfolio website—a showcase of my journey in software engineering, machine learning research, and creative user interface design. 

This website has been built from scratch to combine technical depth, clean interactive experiences, and an elegant, personalized aesthetic.

---

## ✨ Features

- **🎨 Modern Aesthetic & Theme System**: Curated HSL-tailored pastel color palettes featuring light and dark mode toggles with smooth, immersive CSS transitions.
- **✨ Dynamic Visuals**: Smooth cursor glow effects (`CursorGlow.jsx`), a custom floating particles background (`Background.jsx`), and entry loaders that elevate the interactive feel of the portfolio.
- **📱 Fully Responsive (Mobile-Optimized)**: Adaptive layouts optimized for every viewport. Includes a custom scrollable Modal layout in the Blog section that avoids header overlays and ensures readability on mobile.
- **🖼️ Stateful Loaders & Fallbacks**: Image error handlers that seamlessly transition to elegant CSS gradients and UI avatars if resources fail to load.
- **📬 Functional Contact Form**: Fully integrated contact form powered by Framer Motion animations and Web3Forms for secure, direct email submission.

---

## 🛠️ Tech Stack

- **Frontend Core**: [React](https://react.dev/) (v19) & [Vite](https://vite.dev/) (v8)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (v4 with the new `@tailwindcss/vite` compiler)
- **Animations**: [Framer Motion](https://www.framer.com/motion/) (v12)
- **Icons**: [Lucide React](https://lucide.dev/) & Lightweight Custom Brand SVGs
- **Form Submission**: [Web3Forms API](https://web3forms.com/)

---

## 📁 Repository Structure

```
ashitajha-portfolio/
├── public/                 # Static assets (images, icons, resumes)
│   └── projects/           # Screenshots of featured creations
├── src/
│   ├── components/         # Shared visual components and context
│   │   ├── Background.jsx  # Animated particle/node background canvas
│   │   ├── CursorGlow.jsx  # Interactive mouse-glow trailing effect
│   │   ├── Footer.jsx      # Social connections footer
│   │   ├── Icons.jsx       # Lightweight brand SVG icons (GitHub, LinkedIn)
│   │   ├── Loader.jsx      # Initial page loading screen
│   │   ├── Navbar.jsx      # Responsive navigation with Theme Toggle
│   │   └── ThemeContext.jsx# Light/Dark mode state provider
│   ├── sections/           # Key sections of the page
│   │   ├── Hero.jsx        # Landing fold with key call-to-actions
│   │   ├── About.jsx       # Biography, education, diploma, & tech skills
│   │   ├── Projects.jsx    # Filterable project portfolio grid
│   │   ├── Blogs.jsx       # Custom modal-driven blogging space
│   │   └── Contact.jsx     # Web3Forms contact form & connections
│   ├── App.jsx             # Main application orchestrator
│   ├── index.css           # Global typography & Tailwind styling overrides
│   └── main.jsx            # Application mount point
├── eslint.config.js        # Linter configuration rules
├── vite.config.js          # Vite plugins configuration (React & Tailwind)
└── package.json            # Script commands and dependencies
```

---

## 🚀 Getting Started

To run this project locally, follow these steps:

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/ashitajha10/ashitajha-portfolio.git
   cd ashitajha-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Launch the local development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`.

### Commands

- `npm run dev` - Starts Vite dev server with hot module replacement (HMR).
- `npm run build` - Builds production-ready minified assets in `dist/`.
- `npm run lint` - Runs ESLint to verify codebase code-quality compliance.
- `npm run preview` - Locally previews the production build.

---

## 📂 Featured Creations

### 🧠 [Dementia Detection System](https://github.com/ashitajha10/dementia-detector)
An ensemble machine learning application that classifies stages of cognitive decline using multimodal feature models. Built with **Python**, **Scikit-learn**, **SVM**, **Pandas**, and hosted via a **Streamlit** user interface.
*🔗 [Live Application](https://dementia-detector-hnewlxbymq3b5dw6neqg2f.streamlit.app/)*

### 🤝 [Cohive Collaboration Platform](https://github.com/ashitajha10/Cohive)
A real-time workspace for teams offering dynamic document editors, WebRTC video calling rooms, and interactive kanban project boards. Leverages **React**, **Node.js**, **Express**, **Socket.io**, **WebRTC**, and **MongoDB**.
*🔗 [Live Application](https://cohive-ecru.vercel.app/)*

### 🤖 [SkillSync-AI](https://github.com/ashitajha10/SkillSync-AI)
An intelligent, AI-powered developer hub that analyzes uploaded resumes, computes ATS scores, outputs custom skill recommendations, and supports interactive mock interview prep using the **Google Gemini API**, **React**, and **Express**.
*🔗 [Live Application](https://skillsync-ai-50ws.onrender.com/)*

---

## 🌸 Blogs & Thoughts

I write personal and technical reflections. Some of the articles you'll find featured directly in the portfolio modal include:
- **Why Dancing Makes Me a Better Developer 🎶**: Connecting classical Kathak training (discipline, rhythm, flow) to writing clean UI and frontend code.
- **Things Nobody Tells You About Deploying Projects 🌐**: Lessons on environment variables, CORS errors, and the grit forged in getting apps live.
- **Machine Learning Concepts That Confused Me at First 🤖**: De-jargonizing concepts like overfitting, gradient descent, and validation sets.
- **Ashita Between Commits 🎀**: A peek into my life, interests, and creative activities beyond terminal commits.

---

## 📬 Let's Connect!

I am always open to internships, collaboration, freelance work, and conversations about tech, design, or dancing!

- **Email**: [ashitajha10@gmail.com](mailto:ashitajha10@gmail.com)
- **LinkedIn**: [linkedin.com/in/ashitajha](https://linkedin.com/in/ashitajha)
- **GitHub**: [@ashitajha10](https://github.com/ashitajha10)

---
*Built with love, code, and maybe a few too many open browser tabs. ♡*
