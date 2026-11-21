import React from 'react';

export function Github({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );
}

export function Linkedin({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function CodeforcesIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <rect x="1.5" y="9" width="4.5" height="12" rx="1.5" fill="#facc15" />
      <rect x="9.5" y="4" width="4.5" height="17" rx="1.5" fill="#3b82f6" />
      <rect x="17.5" y="12" width="4.5" height="9" rx="1.5" fill="#ef4444" />
    </svg>
  );
}

export function LeetCodeIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .271 4.735 5.46 5.46 0 0 0 4.126 2.766 5.485 5.485 0 0 0 4.092-.934l8.368-6.19a1.374 1.374 0 0 0 .267-1.922 1.374 1.374 0 0 0-1.922-.267l-8.368 6.19a2.738 2.738 0 0 1-2.046.467 2.73 2.73 0 0 1-2.063-1.383 2.764 2.764 0 0 1-.136-2.367 2.632 2.632 0 0 1 .605-1.052l3.854-4.126 5.406-5.788A1.374 1.374 0 0 0 13.483 0z" />
    </svg>
  );
}
