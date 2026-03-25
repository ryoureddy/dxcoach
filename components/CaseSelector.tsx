"use client";

import { CASES } from "@/lib/cases/pe-vs-adhf";

interface CaseSelectorProps {
  onSelect: (caseId: string) => void;
  onBack: () => void;
}

const difficultyColors: Record<string, string> = {
  Beginner: "text-green-400 bg-green-400/10",
  Intermediate: "text-yellow-400 bg-yellow-400/10",
  Advanced: "text-red-400 bg-red-400/10",
};

export default function CaseSelector({ onSelect, onBack }: CaseSelectorProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-12 bg-gray-950">
      {/* Header */}
      <div className="text-center mb-10 w-full max-w-2xl">
        <button
          onClick={onBack}
          className="text-gray-500 hover:text-gray-300 text-sm mb-6 flex items-center gap-1 mx-auto transition-colors"
        >
          ← Back
        </button>
        <h2 className="text-2xl font-bold text-white mb-2">Select a Case</h2>
        <p className="text-gray-400 text-sm">
          Choose a pre-loaded case to practice. More cases coming soon.
        </p>
      </div>

      {/* Case cards */}
      <div className="flex flex-col gap-4 w-full max-w-2xl">
        {CASES.map((c) => (
          <button
            key={c.id}
            onClick={() => onSelect(c.id)}
            className="group flex flex-col text-left p-6 rounded-2xl border border-gray-800 bg-gray-900 hover:border-blue-500 hover:bg-gray-800 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <div className="flex items-start justify-between gap-4 mb-2">
              <h3 className="text-white font-semibold text-lg group-hover:text-blue-300 transition-colors">
                {c.title}
              </h3>
              <span
                className={`text-xs font-semibold px-2 py-1 rounded-full shrink-0 ${
                  difficultyColors[c.difficulty] ?? "text-gray-400 bg-gray-800"
                }`}
              >
                {c.difficulty}
              </span>
            </div>
            <p className="text-gray-400 text-sm">{c.subtitle}</p>
          </button>
        ))}
      </div>
    </div>
  );
}
