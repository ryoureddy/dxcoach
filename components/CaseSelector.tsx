"use client";

import { CASES, type Case } from "@/lib/cases/pe-vs-adhf";

interface CaseSelectorProps {
  onSelect: (caseId: string) => void;
}

const difficultyColors: Record<string, string> = {
  Beginner: "text-[#5a7a3a] bg-[#5a7a3a]/10",
  Intermediate: "text-[var(--color-primary)] bg-[var(--color-primary)]/10",
  Advanced: "text-[var(--color-tertiary)] bg-[var(--color-tertiary)]/10",
};

// Group cases by organ system (a case can appear in multiple groups)
function groupByOrganSystem(cases: Case[]) {
  const groups: Record<string, Case[]> = {};
  for (const c of cases) {
    for (const system of c.organSystems) {
      if (!groups[system]) groups[system] = [];
      if (!groups[system].some((existing) => existing.id === c.id)) {
        groups[system].push(c);
      }
    }
  }
  return Object.entries(groups).sort(([a], [b]) => a.localeCompare(b));
}

export default function CaseSelector({ onSelect }: CaseSelectorProps) {
  const grouped = groupByOrganSystem(CASES);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h2
          className="text-2xl font-medium text-[var(--color-text-primary)] mb-2"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Pre-loaded Cases
        </h2>
        <p className="text-sm text-[var(--color-text-secondary)]">
          Choose a case to practice. You&apos;ll know the diagnosis going in —
          your job is to walk through the complete reasoning chain.
        </p>
      </div>

      {grouped.map(([system, cases]) => (
        <div key={system} className="mb-8">
          <h3 className="text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-wider mb-3">
            {system}
          </h3>
          <div className="flex flex-col gap-3">
            {cases.map((c) => (
              <button
                key={c.id}
                onClick={() => onSelect(c.id)}
                className="group flex flex-col text-left p-5 rounded-lg bg-[var(--color-surface)] border border-[var(--color-border)] hover:border-[var(--color-primary)] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                style={{ boxShadow: "var(--shadow-soft)" }}
              >
                <div className="flex items-start justify-between gap-4 mb-1.5">
                  <h4 className="font-semibold text-[var(--color-text-primary)] group-hover:text-[var(--color-primary)] transition-colors">
                    {c.title}
                  </h4>
                  <span
                    className={`text-xs font-semibold px-2.5 py-1 rounded-full shrink-0 ${
                      difficultyColors[c.difficulty] ??
                      "text-[var(--color-text-muted)] bg-[var(--color-surface-container-low)]"
                    }`}
                  >
                    {c.difficulty}
                  </span>
                </div>
                <p className="text-sm text-[var(--color-text-secondary)]">
                  {c.subtitle}
                </p>
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
