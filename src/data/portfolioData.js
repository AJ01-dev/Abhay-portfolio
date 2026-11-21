export const personalInfo = {
  name: "Abhay Jaiswal",
  title: "Full Stack Developer & AI / SWE-bench Engineer",
  tagline: "Building resilient distributed web systems, AI benchmarks, and real-time collaborative architectures.",
  about: "I am a B.Tech Electronics & Communication undergraduate at IIIT Surat with deep passions for Full-Stack Engineering, Real-Time Systems, and Autonomous AI Evaluation. I build production-grade web applications with React, Node.js, and WebSockets, author machine-verifiable SWE-bench style benchmarks using Harbor CLI & Docker for frontier AI evaluation, and have solved 550+ algorithmic challenges.",
  location: "Gorakhpur, UP / Surat, Gujarat, India",
  phone: "+91-9219462953",
  email: "abhayjaiswal.work@gmail.com",
  collegeEmail: "abhay@iiitsurat.ac.in",
  github: "https://github.com/AJ01-dev",
  linkedin: "https://linkedin.com/in/abhayjaiswal",
  codeforces: "https://codeforces.com/profile/abhayjaiswal",
  leetcode: "https://leetcode.com/abhayjaiswal",
  codechef: "https://www.codechef.com/users/abhayjaiswal",
  status: "Open to Software Engineering & AI Full-Stack Roles",
  stats: [
    { label: "DSA Problems Solved", value: "550+", sub: "Graphs, DP & Trees" },
    { label: "Codeforces Max Rating", value: "1207", sub: "Pupil Division" },
    { label: "GATE 2026", value: "Qualified", sub: "Score ~340 (ECE)" },
    { label: "Full Stack Platforms", value: "2+", sub: "LiveCodeHub & Solvenut" },
  ]
};

export const experiences = [
  {
    role: "Contractual Software Development Engineer",
    company: "Xelron | AfterQuery Silver Project",
    period: "Jun 2026 – Present",
    type: "Contract / Remote",
    description: "Engineering real-world evaluation benchmarks to rigorously test autonomous AI coding agents on complex private software repositories.",
    achievements: [
      "Authored SWE-bench-style coding tasks to evaluate frontier AI agents on real-world bug fixes in private production codebases using Harbor CLI.",
      "Designed machine-verifiable test harnesses (fail-to-pass and pass-to-pass test cases) ensuring deterministic, zero-leakage grading.",
      "Constructed reproducible, isolated Dockerfiles with pinned dependencies and tailored environment setups for multi-language execution."
    ],
    tech: ["SWE-bench", "Harbor CLI", "Docker", "Python", "Linux", "Test Harnesses", "AI Agent Evaluation", "Git"]
  },
  {
    role: "Full Stack Developer",
    company: "Personal & Open Source Projects",
    period: "2024 – Present",
    type: "Remote / Independent",
    description: "Designed, architected, and shipped high-performance real-time applications integrating modern frontend frameworks, WebSockets, cloud payments, and AI APIs.",
    achievements: [
      "Architected LiveCodeHub: A collaborative browser IDE with Monaco Editor, Socket.IO multi-client synchronization, and Judge0 remote execution.",
      "Engineered Solvenut: A full-scale 1:1 expert consultation platform with JWT authentication, Razorpay payment escrow, and Gemini AI query structuring.",
      "Integrated end-to-end security workflows including bcrypt encryption, role-based access control, and containerized deployment."
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.IO", "Monaco Editor", "Judge0", "Razorpay", "Google Gemini AI"]
  }
];

export const education = [
  {
    institution: "Indian Institute of Information Technology Surat (IIIT Surat)",
    degree: "B.Tech in Electronics and Communication Engineering",
    period: "2023 – Present",
    location: "Surat, Gujarat, India",
    grade: "CGPA: 7.59",
    details: "Key coursework: Data Structures & Algorithms, Object-Oriented Programming, Operating Systems, DBMS, Computer Networks, Digital Electronics, Embedded Systems."
  },
  {
    institution: "SVM Public School",
    degree: "Senior Secondary (Class XII) - CBSE",
    period: "2020 – 2022",
    location: "Gorakhpur, Uttar Pradesh",
    grade: "89.6%",
    details: "Ranked in the top 10.33% nationwide in CBSE Class XII examinations. Strong foundation in Mathematics and Physics."
  },
  {
    institution: "SVM Public School",
    degree: "High School (Class X) - CBSE",
    period: "2018 – 2020",
    location: "Gorakhpur, Uttar Pradesh",
    grade: "82.3%",
    details: "Comprehensive foundational education with academic excellence in Science and Mathematics."
  }
];

export const projects = [
  {
    id: "livecodehub",
    title: "LiveCodeHub",
    subtitle: "Real-Time Collaborative Coding Platform with Monaco & Remote Execution",
    period: "2024 – Present",
    featured: true,
    category: "Full Stack / Distributed Systems",
    links: {
      github: "https://github.com/AJ01-dev/livecodehub",
      live: "https://livecodehub.vercel.app"
    },
    tech: ["React (Vite)", "Node.js", "Socket.IO", "Monaco Editor", "MongoDB", "Judge0 API", "Docker", "JWT", "Tailwind CSS"],
    points: [
      "Built a production-ready collaborative coding platform featuring real-time shared coding rooms, millisecond-latency code sync, and room-based chat.",
      "Integrated Monaco Editor with custom Socket.IO synchronization protocol and live multi-user presence indicators (active users, cursor badges).",
      "Integrated Judge0 API enabling remote multi-language code execution for JavaScript, Python, Java, and C++ with custom stdin/stdout support.",
      "Implemented secure JWT authentication with bcrypt password hashing, protected private rooms, Docker container support, and persistent MongoDB chat/room history."
    ],
    architecture: {
      frontend: "React 18 + Vite + Tailwind CSS + Monaco Editor + Socket.IO Client",
      backend: "Node.js + Express.js + Socket.IO Server + JWT Middleware",
      execution: "Judge0 Rapid API with sandboxed compiler & runner containers",
      database: "MongoDB Atlas with room state schemas & chat audit trail"
    }
  },
  {
    id: "solvenut",
    title: "Solvenut",
    subtitle: "1:1 Expert Consultation Marketplace with AI Decision Support & Payments",
    period: "2024 – Present",
    featured: true,
    category: "Full Stack / AI & Payments",
    links: {
      github: "https://github.com/AJ01-dev/solvenut",
      live: "https://solvenut.vercel.app"
    },
    tech: ["React (Vite)", "Node.js", "Express.js", "MongoDB", "Socket.IO", "Razorpay", "Google Generative AI (Gemini)", "Tailwind CSS"],
    points: [
      "Built a full-stack platform connecting clients with vetted domain experts for 1:1 consultations across career development, finance, and technical decisions.",
      "Implemented role-based JWT authentication (client/expert roles), admin approval workflows, and Razorpay payment-gated chat session access.",
      "Developed real-time private consultation chat via Socket.IO with room-based isolation, online status indicators, and MongoDB-persisted message history.",
      "Integrated Google Generative AI (Gemini) for automated pre-consultation decision support, helping users structure and refine queries before speaking to human experts."
    ],
    architecture: {
      frontend: "Vite + React SPA + Responsive UI with real-time state synchronization",
      backend: "Modular Express REST API + WebSocket room management",
      ai: "Google Generative AI (Gemini 1.5) query distillation & prompt framing",
      payments: "Razorpay webhooks & signature verification for escrow release"
    }
  }
];

export const skillCategories = [
  {
    name: "Languages",
    description: "Core programming and scripting languages",
    skills: [
      { name: "C++", level: "Advanced", desc: "Competitive programming, STL, memory models, algorithms" },
      { name: "JavaScript (ES6+)", level: "Advanced", desc: "Async/await, Event Loop, closures, modern DOM & Node" },
      { name: "Python", level: "Proficient", desc: "Harbor CLI benchmarks, scripting, FastAPI, AI pipelines" },
      { name: "C", level: "Proficient", desc: "Low-level systems, pointers, memory management" }
    ]
  },
  {
    name: "AI / ML & Benchmarks",
    description: "Autonomous agent evaluation and Generative AI workflows",
    skills: [
      { name: "SWE-bench", level: "Specialist", desc: "Task authoring, patch validation, fail-to-pass testing" },
      { name: "Harbor CLI", level: "Specialist", desc: "AI agent evaluation harnesses on private codebases" },
      { name: "LLMs & Prompt Engineering", level: "Advanced", desc: "System prompts, structured outputs, multi-turn agents" },
      { name: "RAG & Vector DBs", level: "Proficient", desc: "FAISS, ChromaDB, document chunking & embeddings" },
      { name: "LangChain & LlamaIndex", level: "Proficient", desc: "Agentic tool calling, retrieval pipelines" },
      { name: "Google Generative AI", level: "Proficient", desc: "Gemini API integration for real-time user assistance" }
    ]
  },
  {
    name: "Frontend Development",
    description: "Modern web interfaces, state management & real-time UI",
    skills: [
      { name: "React.js", level: "Advanced", desc: "Hooks, Context, component lifecycles, performance tuning" },
      { name: "Tailwind CSS", level: "Advanced", desc: "Responsive utility styling, custom themes & animations" },
      { name: "Monaco Editor", level: "Proficient", desc: "Browser-based VS Code core editor integration & sync" },
      { name: "HTML5 & CSS3", level: "Advanced", desc: "Semantic markup, modern flex/grid layouts, responsiveness" },
      { name: "Bootstrap", level: "Proficient", desc: "Grid systems, accessible UI patterns" }
    ]
  },
  {
    name: "Backend & Systems",
    description: "Server architecture, databases, WebSockets & APIs",
    skills: [
      { name: "Node.js & Express.js", level: "Advanced", desc: "RESTful APIs, middleware chains, async pipeline architecture" },
      { name: "Socket.IO", level: "Advanced", desc: "Bidirectional WebSockets, rooms, presence tracking, broadcast" },
      { name: "MongoDB & Mongoose", level: "Proficient", desc: "Document modeling, aggregation pipelines, indexing" },
      { name: "JWT & Auth Security", level: "Proficient", desc: "Bcrypt, token rotation, role-based access control (RBAC)" },
      { name: "Judge0 API", level: "Proficient", desc: "Sandboxed multi-language remote compiler integration" },
      { name: "Razorpay Gateway", level: "Proficient", desc: "Payment orders, checkout integration, webhook validation" },
      { name: "FastAPI", level: "Familiar", desc: "Python asynchronous microservices & OpenAPI documentation" }
    ]
  },
  {
    name: "Core CS & Tools",
    description: "CS fundamentals, containerization, and developer tools",
    skills: [
      { name: "DSA", level: "Advanced", desc: "550+ problems solved, dynamic programming, graph theory" },
      { name: "Docker", level: "Proficient", desc: "Multi-stage builds, pinned reproducible benchmark containers" },
      { name: "Git & GitHub", level: "Advanced", desc: "Branching, PRs, merge workflows, GitHub Actions" },
      { name: "Operating Systems", level: "Proficient", desc: "Processes, threads, concurrency, virtual memory, Linux shell" },
      { name: "DBMS & OOP", level: "Proficient", desc: "ACID properties, normalization, design patterns, clean code" }
    ]
  }
];

export const achievements = [
  {
    title: "GATE 2026 Qualified",
    subtitle: "Score of approx. 340 in Electronics and Communication Engineering",
    category: "National Exam",
    badge: "GATE 2026",
    color: "from-emerald-500 to-teal-600",
    description: "Qualified the prestigious Graduate Aptitude Test in Engineering (GATE 2026) in Electronics and Communication Engineering, demonstrating rigorous analytical and engineering depth."
  },
  {
    title: "Codeforces Pupil",
    subtitle: "Max Rating: 1207 in Competitive Programming",
    category: "Competitive Coding",
    badge: "Pupil 1207",
    color: "from-cyan-500 to-blue-600",
    description: "Consistently participated in timed algorithmic contests, mastering fast mathematical reasoning, simulation, dynamic programming, and greedy algorithms."
  },
  {
    title: "CodeChef 2-Star",
    subtitle: "Global Rating & Division II / III Contests",
    category: "Competitive Coding",
    badge: "2-Star",
    color: "from-amber-500 to-orange-600",
    description: "Earned 2-star rating competing in CodeChef Starters and Cook-Offs, solving complex algorithmic challenges under strict time and memory limits."
  },
  {
    title: "550+ DSA Problems Solved",
    subtitle: "LeetCode, Codeforces & CodeChef",
    category: "Problem Solving",
    badge: "550+ Solved",
    color: "from-purple-500 to-indigo-600",
    description: "Deep practice focusing on Graph Algorithms (Dijkstra, BFS/DFS, TopoSort), Dynamic Programming (1D, 2D, Bitmask), Trees, and Binary Search."
  },
  {
    title: "Top 10.33% Nationwide",
    subtitle: "CBSE Class XII Board Examination (89.6%)",
    category: "Academic Excellence",
    badge: "Top 10.33%",
    color: "from-pink-500 to-rose-600",
    description: "Placed among the top decile of students across India in the CBSE Class XII Senior Secondary examinations with an aggregate of 89.6%."
  }
];

export const leadership = [
  {
    title: "IIIT Surat Cultural Fest 'Effervescence'",
    role: "Core Volunteer & Event Coordinator",
    period: "College Annual Fest",
    impact: "+40% Team Participation",
    points: [
      "Coordinated 10+ major collegiate events with a team of 50+ organizing members, managing schedules, logistics, and student engagement.",
      "Mentored junior undergraduates in competitive programming and modern web development, boosting team participation by 40%."
    ]
  },
  {
    title: "Student Coding Workshops",
    role: "Lead Instructor & Workshop Organizer",
    period: "Weekly Sessions",
    impact: "+30% Problem Solving Engagement",
    points: [
      "Conducted weekly hands-on coding workshops for 20+ students focusing on DSA, problem decomposition, and competitive coding fundamentals.",
      "Measured a 30% improvement in student retention and active participation in algorithmic contests."
    ]
  }
];
