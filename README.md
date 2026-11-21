# Abhay Jaiswal — Portfolio Website

A modern, high-performance developer portfolio engineered for **Abhay Jaiswal** (B.Tech ECE @ IIIT Surat), highlighting expertise in **Full-Stack Web Engineering**, **Autonomous AI Benchmark Authoring (SWE-bench / Harbor CLI @ Xelron)**, and **Competitive Programming (550+ Solved, Codeforces Pupil, GATE 2026 Qualified)**.

![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.4-38B2AC?logo=tailwind-css&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-25-339933?logo=node.js&logoColor=white)

---

## 🌟 Highlights & Features

- **Hero Section**: Dynamic typewriter role rotation, status indicator ("Available for SDE / AI Roles"), and quick stats cards.
- **Interactive Architecture & CLI Simulator**:
  - `Harbor SWE-bench`: Simulates Docker test harness, fail-to-pass / pass-to-pass verification for frontier AI evaluations (Xelron).
  - `Judge0 Runner`: Simulates C++ compilation & execution of graph/DP problems with runtime telemetry.
  - `Socket.IO Sync`: Simulates LiveCodeHub multi-user Monaco editor real-time cursor tracking.
  - Interactive custom command line supporting `help`, `stats`, `gate`, `skills`, `clear`, etc.
- **Experience Timeline**:
  - **Xelron | AfterQuery Silver Project**: Contractual SDE authoring SWE-bench style benchmark coding tasks, Harbor CLI evaluations, reproducible Dockerfiles.
  - **Personal & Open Source Projects**: LiveCodeHub & Solvenut full-stack engineering.
  - **Education**: IIIT Surat (B.Tech ECE, CGPA 7.59), SVM Public School (Senior Secondary XII: 89.6%, High School X: 82.3%).
- **Featured Projects**:
  - **LiveCodeHub**: Real-time collaborative coding platform with Monaco Editor, Socket.IO, Judge0 API for multi-language execution, Docker & MongoDB.
  - **Solvenut**: Expert consultation platform with JWT auth, Razorpay payments, Socket.IO chat, and Google Generative AI (Gemini) support.
- **Technical Skills Matrix**:
  - Interactive filterable and searchable skill tree (Languages, AI/ML & Benchmarks, Frontend, Backend & Systems, Core CS & Tools).
- **Achievements & Competitive Programming**:
  - GATE 2026 Qualified (~340 in ECE)
  - Codeforces Pupil (1207 max rating)
  - CodeChef 2-Star
  - 550+ Problems Solved on LeetCode & Codeforces
  - CBSE Class XII Top 10.33% Nationwide (89.6%)
- **Leadership & Extracurriculars**:
  - IIIT Surat Cultural Fest *Effervescence* (10+ events, 50+ members, +40% participation).
  - Weekly coding workshops for 20+ students (+30% engagement).
- **Interactive Resume Modal**:
  - In-app printable and downloadable resume styled identically to the standard LaTeX engineering resume with one-click print/PDF export.
- **Contact & Socials**:
  - Instant one-click copy for Phone (`+91-9219462953`) and Email.
  - Interactive contact form with input validation and instant state feedback.
  - Direct links to LinkedIn, GitHub, Codeforces, LeetCode, and CodeChef.

---

## 🛠️ Project Structure

```
portfolio/
├── index.html                   # HTML entry point with fonts & metadata
├── package.json                 # Project dependencies & scripts
├── vite.config.js               # Vite bundler configuration
├── tailwind.config.js           # Tailwind theme & color tokens
├── postcss.config.js            # PostCSS configuration
├── .browserslistrc              # Browser compatibility target
└── src/
    ├── main.jsx                 # React root DOM mount
    ├── App.jsx                  # Main application layout
    ├── index.css                # Global styles, scrollbars, cyber glows & fonts
    ├── data/
    │   └── portfolioData.js     # Centralized resume data & config
    └── components/
        ├── Navbar.jsx           # Glassmorphism header & navigation
        ├── Hero.jsx             # Hero section with typewriter effect
        ├── InteractiveTerminal.jsx # Interactive CLI & SWE-bench simulator
        ├── Experience.jsx       # Work experience & education tabs
        ├── Projects.jsx         # Project showcase cards & architecture
        ├── Skills.jsx           # Filterable skill matrix with search
        ├── Achievements.jsx     # Ratings, GATE 2026, and CP platforms
        ├── Leadership.jsx       # Event management & coding workshops
        ├── Contact.jsx          # Interactive contact form & details
        ├── ResumeModal.jsx      # High-fidelity printable resume modal
        ├── Icons.jsx            # Custom SVGs for GitHub, LinkedIn, etc.
        └── Footer.jsx           # Footer with quick links & credits
```

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open `http://localhost:3000` in your browser.

### 3. Build for Production
```bash
npm run build
```
Generates an optimized static production bundle in `dist/`.

### 4. Preview Production Build
```bash
npm run preview
```

---

## 🌐 One-Click Deployment

### Deploy to Vercel
```bash
npm i -g vercel
vercel
```

### Deploy to Netlify
```bash
npm i -g netlify-cli
netlify deploy --prod --dir=dist
```

### Deploy to GitHub Pages
You can configure a GitHub Actions workflow to publish the `dist/` directory directly to GitHub Pages on every push to `main`.
