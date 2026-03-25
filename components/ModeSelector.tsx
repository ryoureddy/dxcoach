"use client";

type Mode = "practice" | "generate" | "present";

interface ModeSelectorProps {
  onSelect: (mode: Mode) => void;
}

const modes = [
  {
    id: "practice" as Mode,
    icon: "🩺",
    title: "Practice a Case",
    description:
      "Work through a pre-loaded case with progressive disclosure. Build your diagnostic reasoning step by step.",
    tag: "Pre-loaded cases",
  },
  {
    id: "generate" as Mode,
    icon: "⚡",
    title: "Generate a New Case",
    description:
      "Tell me an organ system or chief complaint and I'll build a custom case for you on the spot.",
    tag: "AI-generated",
  },
  {
    id: "present" as Mode,
    icon: "🏥",
    title: "Present to Your Attending",
    description:
      "Saw a real patient? Paste your de-identified case and practice your presentation. I'll push back like an attending would.",
    tag: "Real-world prep",
  },
];

export default function ModeSelector({ onSelect }: ModeSelectorProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-16 bg-[var(--color-bg)]">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-medium tracking-tight mb-3 text-[var(--color-text-primary)]">
          DxCoach
        </h1>
        <p className="text-lg font-medium text-[var(--color-text-secondary)]">
          Your Thinking First. Evidence Second. AI Third.
        </p>
        <p className="text-sm mt-3 text-[var(--color-text-muted)]">
          AI in Medicine Club · Western University of Health Sciences
        </p>
      </div>

      {/* Mode cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
        {modes.map((mode) => (
          <button
            key={mode.id}
            onClick={() => onSelect(mode.id)}
            className="group flex flex-col text-left p-7 rounded-lg bg-[var(--color-surface)] border border-[var(--color-border)] hover:border-[var(--color-primary)] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
            style={{ boxShadow: "var(--shadow-soft)" }}
          >
            <span className="text-3xl mb-4">{mode.icon}</span>
            <span className="inline-block text-xs font-semibold text-[var(--color-primary)] uppercase tracking-wider mb-2">
              {mode.tag}
            </span>
            <h2 className="font-semibold text-lg mb-2 text-[var(--color-text-primary)] group-hover:text-[var(--color-primary)] transition-colors">
              {mode.title}
            </h2>
            <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">
              {mode.description}
            </p>
          </button>
        ))}
      </div>

      <p className="text-xs mt-12 text-center max-w-md text-[var(--color-text-muted)]">
        Never enter real patient identifiers. All sessions are ephemeral —
        nothing is stored when you close the tab.
      </p>
    </div>
  );
}
