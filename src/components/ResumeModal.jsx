import React from 'react';
import { X, Printer, Download, ExternalLink, Mail, Phone, MapPin } from 'lucide-react';
import { personalInfo, education, experiences, projects, achievements, leadership, skillCategories } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
      {/* Modal Container */}
      <div className="relative w-full max-w-4xl max-h-[92vh] bg-white text-neutral-900 rounded-2xl shadow-2xl overflow-y-auto flex flex-col">
        
        {/* Sticky Action Header (hidden on print) */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-3.5 bg-slate-900 text-white border-b border-white/10 print:hidden">
          <div className="flex items-center space-x-2">
            <span className="font-bold text-sm tracking-tight">Abhay Jaiswal — Official Resume</span>
            <span className="text-xs font-mono text-cyan-400 bg-cyan-950 px-2 py-0.5 rounded border border-cyan-800">Verified</span>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-sm"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save as PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close resume"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Sheet (Formatted precisely like the classic LaTeX resume layout) */}
        <div className="p-8 sm:p-12 space-y-6 text-[13px] leading-normal font-sans bg-white selection:bg-cyan-200">
          
          {/* Header */}
          <div className="text-center border-b pb-4">
            <h1 className="text-2xl font-bold uppercase tracking-wider text-neutral-900">
              {personalInfo.name}
            </h1>
            <p className="text-neutral-600 text-xs mt-1">
              Gorakhpur, Uttar Pradesh, India
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-neutral-700 mt-2 font-mono">
              <span>{personalInfo.phone}</span>
              <span>•</span>
              <a href="mailto:abhay@iiitsurat.ac.in" className="text-blue-700 hover:underline">iiitsurat.ac.in</a>
              <span>•</span>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="text-blue-700 hover:underline">LinkedIn</a>
              <span>•</span>
              <a href={personalInfo.codechef} target="_blank" rel="noreferrer" className="text-blue-700 hover:underline">CodeChef</a>
              <span>•</span>
              <a href={personalInfo.leetcode} target="_blank" rel="noreferrer" className="text-blue-700 hover:underline">LeetCode</a>
              <span>•</span>
              <a href={personalInfo.codeforces} target="_blank" rel="noreferrer" className="text-blue-700 hover:underline">Codeforces</a>
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider border-b-2 border-neutral-900 pb-0.5 mb-2.5 text-neutral-900">
              Education
            </h2>
            <div className="space-y-2">
              <div className="flex justify-between items-start">
                <div>
                  <div className="font-bold text-neutral-900">Indian Institute of Information Technology Surat</div>
                  <div className="text-neutral-700 text-xs italic">B.Tech in Electronics and Communication · CGPA: 7.59</div>
                </div>
                <div className="text-right text-xs">
                  <div className="font-semibold text-neutral-900">2023 – Present</div>
                  <div className="text-neutral-500">Surat, India</div>
                </div>
              </div>

              <div className="flex justify-between items-start">
                <div>
                  <div className="font-bold text-neutral-900">SVM Public School, Gorakhpur</div>
                  <div className="text-neutral-700 text-xs italic">Senior Secondary (XII) · 89.6%</div>
                </div>
                <div className="text-right text-xs">
                  <div className="font-semibold text-neutral-900">2020 – 2022</div>
                  <div className="text-neutral-500">Gorakhpur, India</div>
                </div>
              </div>

              <div className="flex justify-between items-start">
                <div>
                  <div className="font-bold text-neutral-900">SVM Public School, Gorakhpur</div>
                  <div className="text-neutral-700 text-xs italic">High School (X) · 82.3%</div>
                </div>
                <div className="text-right text-xs">
                  <div className="font-semibold text-neutral-900">2018 – 2020</div>
                  <div className="text-neutral-500">Gorakhpur, India</div>
                </div>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider border-b-2 border-neutral-900 pb-0.5 mb-2.5 text-neutral-900">
              Experience
            </h2>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between items-start">
                  <div>
                    <span className="font-bold text-neutral-900">Xelron | AfterQuery Silver Project</span>
                    <span className="text-neutral-700 text-xs italic ml-2">Contractual Software Development Engineer</span>
                  </div>
                  <div className="text-right text-xs">
                    <span className="font-semibold text-neutral-900">Jun 2026 – Present</span>
                    <span className="text-neutral-500 ml-2">Remote</span>
                  </div>
                </div>
                <ul className="list-disc list-outside ml-4 mt-1 space-y-1 text-xs text-neutral-700">
                  <li>Authored SWE-bench-style coding tasks to evaluate AI agents on real-world bug fixes in private codebases using Harbor CLI.</li>
                  <li>Designed machine-verifiable test harnesses (fail-to-pass/pass-to-pass) and reproducible Dockerfiles with pinned dependencies.</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-start">
                  <div>
                    <span className="font-bold text-neutral-900">Personal Projects (Fresher)</span>
                    <span className="text-neutral-700 text-xs italic ml-2">Full Stack Developer</span>
                  </div>
                  <div className="text-right text-xs">
                    <span className="font-semibold text-neutral-900">2024 – Present</span>
                    <span className="text-neutral-500 ml-2">Remote</span>
                  </div>
                </div>
                <ul className="list-disc list-outside ml-4 mt-1 space-y-1 text-xs text-neutral-700">
                  <li><strong>CognitiveRAG</strong> – Full-stack technical literature RAG system with FastAPI, LangChain, ChromaDB, Groq, and vector explorer UI.</li>
                  <li><strong>LiveCodeHub</strong> – Real-time collaborative coding platform with Monaco Editor, Socket.IO, Judge0 API for multi-language execution.</li>
                  <li><strong>Solvenut</strong> – Expert consultation platform with JWT auth, Razorpay payments, Socket.IO chat, and Google Generative AI support.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider border-b-2 border-neutral-900 pb-0.5 mb-2 text-neutral-900">
              Technical Skills
            </h2>
            <div className="space-y-1 text-xs text-neutral-800">
              <div><strong className="text-neutral-900">Languages:</strong> C, C++, JavaScript, Python</div>
              <div><strong className="text-neutral-900">Core CS:</strong> DSA, OOP, OS, DBMS</div>
              <div><strong className="text-neutral-900">Frontend:</strong> React.js, HTML5, CSS3, Bootstrap, Tailwind CSS</div>
              <div><strong className="text-neutral-900">Backend & DB:</strong> Node.js, Express.js, MongoDB</div>
              <div><strong className="text-neutral-900">AI/ML:</strong> LLM, RAG, Prompt Engineering, Fine-Tuning, Embeddings, Vector Databases</div>
              <div><strong className="text-neutral-900">Tools:</strong> Git, Docker, Socket.IO, JWT, Judge0 API, Razorpay, LangChain, LlamaIndex, HuggingFace, FAISS, ChromaDB, FastAPI</div>
            </div>
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider border-b-2 border-neutral-900 pb-0.5 mb-2.5 text-neutral-900">
              Projects
            </h2>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between items-start">
                  <div>
                    <span className="font-bold text-neutral-900">CognitiveRAG</span>
                    <span className="text-neutral-600 text-xs italic ml-1">| Python, FastAPI, LangChain, ChromaDB, Groq, React (Vite)</span>
                  </div>
                  <div className="text-right text-xs font-semibold text-neutral-900">2026 – Present</div>
                </div>
                <ul className="list-disc list-outside ml-4 mt-1 space-y-1 text-xs text-neutral-700">
                  <li>Built a full-stack RAG system for technical books and research papers with a FastAPI + LangChain backend and React frontend, deployed on Render and Vercel.</li>
                  <li>Implemented PDF/TXT/Markdown ingestion with configurable chunking and overlap, indexing MiniLM embeddings into a persistent ChromaDB store.</li>
                  <li>Added MMR, similarity search and multi-query expansion retrieval; Groq LLM answers are grounded in retrieved context with source and page citations.</li>
                  <li>Developed a vector explorer UI to inspect chunk distances and metadata, plus arXiv search integration for academic literature.</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-start">
                  <div>
                    <span className="font-bold text-neutral-900">LiveCodeHub</span>
                    <span className="text-neutral-600 text-xs italic ml-1">| React (Vite), Node.js, Socket.IO, MongoDB, Judge0</span>
                  </div>
                  <div className="text-right text-xs font-semibold text-neutral-900">2024 – Present</div>
                </div>
                <ul className="list-disc list-outside ml-4 mt-1 space-y-1 text-xs text-neutral-700">
                  <li>Built a production-ready collaborative coding platform with real-time shared rooms, live code sync, and room-based chat.</li>
                  <li>Implemented Monaco Editor with Socket.IO for real-time synchronization and live online presence tracking across users.</li>
                  <li>Integrated Judge0 API for multi-language code execution (JS, Python, Java, C++) with custom input support.</li>
                  <li>Developed JWT auth with bcrypt, protected routes, Docker support, and MongoDB-persisted room and message history.</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-start">
                  <div>
                    <span className="font-bold text-neutral-900">Solvenut</span>
                    <span className="text-neutral-600 text-xs italic ml-1">| React (Vite), Node.js, MongoDB, Socket.IO, Razorpay</span>
                  </div>
                  <div className="text-right text-xs font-semibold text-neutral-900">2024 – Present</div>
                </div>
                <ul className="list-disc list-outside ml-4 mt-1 space-y-1 text-xs text-neutral-700">
                  <li>Built a full-stack platform connecting clients with vetted experts for 1:1 consultations across career, finance, and life decisions.</li>
                  <li>Implemented JWT auth with client/expert roles, admin approval workflow, and Razorpay payment-gated chat access.</li>
                  <li>Developed real-time private chat via Socket.IO with room-based messaging, online presence, and MongoDB message history.</li>
                  <li>Integrated Google Generative AI for decision support, helping users structure queries before consulting human experts.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider border-b-2 border-neutral-900 pb-0.5 mb-2 text-neutral-900">
              Achievements
            </h2>
            <ul className="list-disc list-outside ml-4 space-y-1 text-xs text-neutral-700">
              <li><strong>GATE 2026:</strong> Qualified with a score of approx. 340 in Electronics and Communication Engineering.</li>
              <li><strong>Codeforces:</strong> Pupil with max rating 1207 | <strong>CodeChef:</strong> 2-star rating in competitive programming.</li>
              <li><strong>LeetCode/Codeforces:</strong> Solved 550+ DSA problems focused on graph algorithms and dynamic programming.</li>
              <li><strong>Academics:</strong> Ranked in the top 10.33% nationwide in CBSE Class XII with 89.6%.</li>
            </ul>
          </div>

          {/* Leadership & Extracurriculars */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider border-b-2 border-neutral-900 pb-0.5 mb-2 text-neutral-900">
              Leadership & Extracurriculars
            </h2>
            <ul className="list-disc list-outside ml-4 space-y-1 text-xs text-neutral-700">
              <li>Volunteered at IIITS’s annual cultural fest Effervescence; coordinated 10+ events with 50+ members. Mentored juniors in CP and web dev, increasing team participation by 40%.</li>
              <li>Conducted weekly coding workshops for 20+ students, improving problem-solving skills and engagement by 30%.</li>
            </ul>
          </div>

        </div>

      </div>
    </div>
  );
}
