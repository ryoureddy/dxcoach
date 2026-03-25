"use client";

import { CASES } from "@/lib/cases/pe-vs-adhf";

interface CaseSelectorProps {
  onSelect: (caseId: string) => void;
  onBack: () => void;
}

const difficultyColors: Record<string, string> = {
  Beginner: "text-[#5a7a3a] bg-[#5a7a3a]/10",
  Intermediate: "text-[var(--color-primary)] bg-[var(--color-primary)]/10",
  Advanced: "text-[var(--color-tertiary)] bg-[var(--color-tertiary)]/10",
};

export default function CaseSelector({ onSelect, onBack }: CaseSelectorProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-16 bg-[var(--color-bg)]">
      {/* Header */}
      <div className="text-center mb-12 w-full max-w-2xl">
        <button
          onClick={onBack}
          className="text-[var(--color-text-muted)] hover:text-[var(--color-primary)] text-sm mb-6 flex items-center gap-1 mx-auto transition-colors"
        >
          ← Back
        </button>
        <h2 className="text-3xl font-medium mb-3 text-[var(--color-text-primary)]">
          Select a Case
        </h2>
        <p className="text-sm text-[var(--color-text-secondary)]">
          Choose a pre-loaded case to practice. More cases coming soon.
        </p>
      </div>

      {/* Case cards */}
      <div className="flex flex-col gap-4 w-full max-w-2xl">
        {CASES.map((c) => (
          <button
            key={c.id}
            onClick={() => onSelect(c.id)}
            className="group flex flex-col text-left p-7 rounded-lg bg-[var(--color-surface)] border border-[var(--color-border)] hover:border-[var(--color-primary)] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
            style={{ boxShadow: "var(--shadow-soft)" }}
          >
            <div className="flex items-start justify-between gap-4 mb-2">
              <h3 className="font-semibold text-lg text-[var(--color-text-primary)] group-hover:text-[var(--color-primary)] transition-colors">
                {c.title}
              </h3>
              <span
                className={`text-xs font-semibold px-2.5 py-1 rounded-full shrink-0 ${
                  difficultyColors[c.difficulty] ?? "text-[var(--color-text-muted)] bg-[var(--color-surface-container-low)]"
                }`}
              >
                {c.difficulty}
              </span>
            </div>
            <p className="text-sm text-[var(--color-text-secondary)]">{c.subtitle}</p>
          </button>
        ))}
      </div>
    </div>
  );
}
