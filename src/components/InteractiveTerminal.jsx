import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, Play, RotateCcw, Copy, Check, Sparkles, Code2, ShieldCheck } from 'lucide-react';

export default function InteractiveTerminal() {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState('swe-bench'); // 'swe-bench' | 'judge0' | 'socketio' | 'bash'
  const [terminalHistory, setTerminalHistory] = useState([]);
  const [inputVal, setInputVal] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const terminalEndRef = useRef(null);

  // Default presets for the modes
  const simulations = {
    'swe-bench': {
      title: "Xelron SWE-bench Benchmark Evaluation",
      command: "harbor evaluate --task-id XELRON-PY-309 --agent claude-code --mode test-harness",
      output: [
        "[*] Harbor CLI v2.4.1 initialized in isolated Docker runner.",
        "[*] Loading task spec: XELRON-PY-309 (Private repo bugfix evaluation)",
        "[*] Target: multi-file race condition in distributed cache eviction logic.",
        "--> Building test harness container from pinned Dockerfile: python:3.11-slim...",
        "[+] Container hash: sha256:d894b9f2c81... [Verified isolated]",
        "--> Running pre-patch baseline tests (FAIL-TO-PASS verification):",
        "    [FAIL] test_concurrent_eviction_under_high_load (Expected KeyError or StaleLock)",
        "    [PASS] test_sync_basic_cache_hit",
        "    [PASS] test_ttl_expiry",
        "[*] Baseline verified: 1 failing test as authored.",
        "--> Applying AI candidate patch to /workspace/src/cache/eviction.py...",
        "--> Running post-patch evaluation harness:",
        "    [PASS] test_concurrent_eviction_under_high_load (Resolved: atomic locks + versioning)",
        "    [PASS] test_sync_basic_cache_hit",
        "    [PASS] test_ttl_expiry",
        "    [PASS] test_no_regression_on_bulk_insert",
        "[SUCCESS] All 4/4 test assertions passed! Result: PASS-TO-PASS verified.",
        "[METRIC] Zero environment leakage. Reproducibility score: 100%."
      ]
    },
    'judge0': {
      title: "LiveCodeHub Judge0 Remote Execution (C++)",
      command: "judge0 run --lang cpp20 --file solution.cpp --stdin graph_input.txt",
      output: [
        "[*] Submitting code payload to Judge0 Rapid API endpoint...",
        "[*] Language: C++ 20 (g++ 12.2.0 -O3 -std=c++20)",
        "[*] Compiling solution.cpp...",
        "[+] Compilation successful with 0 warnings.",
        "--> Executing with custom stdin: [Nodes: 100000, Edges: 250000, Query: Shortest Path]",
        "--> Output stdout:",
        "    Min Distance to Target Node 99998: 42",
        "    Path Reconstruction: [1 -> 402 -> 1944 -> ... -> 99998]",
        "[VERDICT] ACCEPTED (Exit Code: 0)",
        "[TELEMETRY] Execution Time: 0.014s | Memory: 14.8 MB | Wall Time: 0.021s"
      ]
    },
    'socketio': {
      title: "LiveCodeHub Real-Time Room & Monaco Sync",
      command: "socket.io client --connect ws://livecodehub.api/rooms/surat-dev-collab",
      output: [
        "[*] Connecting WebSocket client...",
        "[+] Handshake established. Transport: websocket (Latency: 18ms)",
        "--> Emitting event: room:join { roomId: 'surat-dev-collab', user: 'Abhay Jaiswal' }",
        "[+] Room joined. Active participants: 3",
        "    - Abhay Jaiswal (Cursor: Ln 42, Col 18) [Host]",
        "    - Priya_S (Cursor: Ln 12, Col 4)",
        "    - Rahul_K (Cursor: Ln 78, Col 9)",
        "--> Monaco Operational Transform stream synchronized.",
        "--> Delta received: { range: [42,1, 42,15], text: 'void dijkstra()' }",
        "[+] Persisted snapshot to MongoDB (room_id: surat-dev-collab). Status: 200 OK."
      ]
    }
  };

  const runSimulation = (mode) => {
    setActiveTab(mode);
    setIsRunning(true);
    setTerminalHistory([]);
    const sim = simulations[mode];
    
    // Add command first
    setTerminalHistory([{ type: 'cmd', text: sim.command }]);
    
    // Simulate streaming output lines
    let index = 0;
    const interval = setInterval(() => {
      if (index < sim.output.length) {
        const line = sim.output[index];
        setTerminalHistory((prev) => [...prev, { type: 'out', text: line }]);
        index++;
      } else {
        clearInterval(interval);
        setIsRunning(false);
      }
    }, 110);
  };

  useEffect(() => {
    // Run default simulation on mount
    runSimulation('swe-bench');
  }, []);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [terminalHistory]);

  const handleCustomCommand = (e) => {
    e.preventDefault();
    if (!inputVal.trim() || isRunning) return;

    const cmd = inputVal.trim().toLowerCase();
    setInputVal('');
    setTerminalHistory((prev) => [...prev, { type: 'cmd', text: cmd }]);

    if (cmd === 'clear') {
      setTerminalHistory([]);
      return;
    }

    if (cmd === 'help') {
      setTerminalHistory((prev) => [
        ...prev,
        { type: 'out', text: "Available commands:" },
        { type: 'out', text: "  harbor   - Simulate SWE-bench task verification" },
        { type: 'out', text: "  judge0   - Simulate C++ compilation & execution on Judge0" },
        { type: 'out', text: "  socketio - Simulate LiveCodeHub real-time Monaco room" },
        { type: 'out', text: "  skills   - List technical competencies" },
        { type: 'out', text: "  stats    - View DSA & contest statistics" },
        { type: 'out', text: "  gate     - View GATE 2026 score" },
        { type: 'out', text: "  clear    - Clear the terminal screen" },
      ]);
      return;
    }

    if (cmd.includes('harbor') || cmd.includes('swe')) {
      runSimulation('swe-bench');
      return;
    }

    if (cmd.includes('judge0') || cmd.includes('cpp')) {
      runSimulation('judge0');
      return;
    }

    if (cmd.includes('socket') || cmd.includes('livecode')) {
      runSimulation('socketio');
      return;
    }

    if (cmd === 'skills') {
      setTerminalHistory((prev) => [
        ...prev,
        { type: 'out', text: "[Languages]: C++, JavaScript (ES6+), Python, C" },
        { type: 'out', text: "[Frontend]: React.js, Tailwind CSS, Monaco Editor, HTML5/CSS3" },
        { type: 'out', text: "[Backend & DB]: Node.js, Express.js, MongoDB, Socket.IO, JWT" },
        { type: 'out', text: "[AI/ML]: SWE-bench, Harbor CLI, LLM, RAG, Gemini API, LangChain" },
        { type: 'out', text: "[Tools]: Docker, Git, Judge0 API, Razorpay, Linux" },
      ]);
      return;
    }

    if (cmd === 'stats') {
      setTerminalHistory((prev) => [
        ...prev,
        { type: 'out', text: "• DSA Problems Solved: 550+ (LeetCode & Codeforces)" },
        { type: 'out', text: "• Codeforces: Pupil (Max rating: 1207)" },
        { type: 'out', text: "• CodeChef: 2-Star Competitive Programmer" },
        { type: 'out', text: "• GATE 2026: Qualified (~340 in ECE)" },
        { type: 'out', text: "• CBSE Class XII: 89.6% (Top 10.33% Nationwide)" },
      ]);
      return;
    }

    if (cmd === 'gate') {
      setTerminalHistory((prev) => [
        ...prev,
        { type: 'out', text: "[GATE 2026 Exam Result]" },
        { type: 'out', text: "  Status: QUALIFIED" },
        { type: 'out', text: "  Discipline: Electronics & Communication Engineering (EC)" },
        { type: 'out', text: "  Normalized Score: ~340" },
      ]);
      return;
    }

    // Default unrecognized
    setTerminalHistory((prev) => [
      ...prev,
      { type: 'err', text: `Command not recognized: '${cmd}'. Type 'help' to see valid commands.` }
    ]);
  };

  const copyTerminalOutput = () => {
    const text = terminalHistory.map(h => (h.type === 'cmd' ? `$ ${h.text}` : h.text)).join('\n');
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="interactive-terminal" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-10">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/20 text-cyan-300 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Interactive Engineering Sandbox</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Live Architecture Simulator
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            Inspect real-world execution workflows from my experience at <span className="text-cyan-300 font-medium">Xelron (SWE-bench)</span> and full-stack projects (<span className="text-cyan-300 font-medium">LiveCodeHub</span> & <span className="text-cyan-300 font-medium">Solvenut</span>).
          </p>
        </div>

        {/* Simulator Container */}
        <div className="rounded-2xl border border-white/10 bg-[#0a0f1d] shadow-2xl overflow-hidden backdrop-blur-xl">
          
          {/* Top Bar with Modes and Window Controls */}
          <div className="flex flex-wrap items-center justify-between border-b border-white/10 bg-[#0e162a] px-4 py-3 gap-2">
            
            {/* Window buttons */}
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
              <span className="text-xs font-mono text-slate-400 ml-2 hidden sm:inline">
                abhay@iiit-surat:~ / sandbox
              </span>
            </div>

            {/* Simulation Preset Selector */}
            <div className="flex items-center space-x-1 sm:space-x-2">
              <button
                onClick={() => runSimulation('swe-bench')}
                className={`px-3 py-1 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5 ${
                  activeTab === 'swe-bench'
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                <span>Harbor SWE-bench</span>
              </button>

              <button
                onClick={() => runSimulation('judge0')}
                className={`px-3 py-1 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5 ${
                  activeTab === 'judge0'
                    ? 'bg-purple-500/20 text-purple-300 border border-purple-500/40'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <Code2 className="w-3.5 h-3.5 text-purple-400" />
                <span>Judge0 Runner</span>
              </button>

              <button
                onClick={() => runSimulation('socketio')}
                className={`px-3 py-1 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5 ${
                  activeTab === 'socketio'
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <TerminalIcon className="w-3.5 h-3.5 text-emerald-400" />
                <span>Socket.IO Sync</span>
              </button>
            </div>

            {/* Quick Actions (Copy / Re-run) */}
            <div className="flex items-center space-x-1.5">
              <button
                onClick={() => runSimulation(activeTab)}
                disabled={isRunning}
                className="p-1.5 rounded-md text-slate-400 hover:text-white hover:bg-white/5 transition-colors disabled:opacity-40"
                title="Re-run simulation"
              >
                <RotateCcw className={`w-3.5 h-3.5 ${isRunning ? 'animate-spin' : ''}`} />
              </button>
              <button
                onClick={copyTerminalOutput}
                className="p-1.5 rounded-md text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
                title="Copy terminal output"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>

          {/* Terminal Screen Body */}
          <div className="p-4 sm:p-6 font-mono text-xs sm:text-sm text-slate-300 h-96 overflow-y-auto bg-[#070b14]/95 space-y-1.5 leading-relaxed">
            
            <div className="text-slate-400 pb-2 border-b border-white/5 mb-3 text-xs">
              # Tip: Select a preset above or type commands below (e.g. 'help', 'stats', 'gate', 'skills', 'clear').
            </div>

            {terminalHistory.map((item, index) => {
              if (item.type === 'cmd') {
                return (
                  <div key={index} className="flex items-start text-cyan-400 font-semibold space-x-2 pt-1">
                    <span className="text-cyan-500 select-none">$</span>
                    <span>{item.text}</span>
                  </div>
                );
              }
              if (item.type === 'err') {
                return (
                  <div key={index} className="text-rose-400 pl-4 font-mono">
                    {item.text}
                  </div>
                );
              }
              // Normal output formatting with color accents
              let formattedClass = "text-slate-300 pl-4";
              if (item.text.includes("[PASS]") || item.text.includes("[SUCCESS]") || item.text.includes("[+]") || item.text.includes("[VERDICT] ACCEPTED")) {
                formattedClass = "text-emerald-400 pl-4 font-medium";
              } else if (item.text.includes("[FAIL]")) {
                formattedClass = "text-amber-400 pl-4 font-medium";
              } else if (item.text.includes("[*]") || item.text.includes("-->")) {
                formattedClass = "text-sky-300 pl-4";
              } else if (item.text.includes("[METRIC]") || item.text.includes("[TELEMETRY]")) {
                formattedClass = "text-purple-300 pl-4 font-semibold";
              }

              return (
                <div key={index} className={formattedClass}>
                  {item.text}
                </div>
              );
            })}

            {isRunning && (
              <div className="flex items-center space-x-2 text-cyan-400 text-xs pl-4 pt-1">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping inline-block" />
                <span>Running benchmark execution pipeline...</span>
              </div>
            )}

            <div ref={terminalEndRef} />
          </div>

          {/* Terminal Interactive Input Footer */}
          <form onSubmit={handleCustomCommand} className="flex items-center border-t border-white/10 bg-[#0e162a] px-4 py-2.5">
            <span className="text-cyan-400 font-mono text-sm mr-2 select-none font-bold">$</span>
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="Try typing 'help', 'stats', 'gate', 'harbor', or 'clear'..."
              className="w-full bg-transparent text-slate-100 placeholder-slate-400 font-mono text-xs sm:text-sm focus:outline-none"
            />
            <button
              type="submit"
              disabled={!inputVal.trim() || isRunning}
              className="ml-2 px-3 py-1 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-xs font-mono hover:bg-cyan-500/30 disabled:opacity-30 transition-all flex items-center gap-1"
            >
              <span>Exec</span>
              <Play className="w-3 h-3 inline" />
            </button>
          </form>

        </div>
      </div>
    </section>
  );
}
