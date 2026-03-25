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
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-12 bg-gray-950">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white tracking-tight mb-2">
          DxCoach
        </h1>
        <p className="text-gray-400 text-lg font-medium">
          Your Thinking First. Evidence Second. AI Third.
        </p>
        <p className="text-gray-600 text-sm mt-2">
          AI in Medicine Club · Western University of Health Sciences
        </p>
      </div>

      {/* Mode cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-4xl">
        {modes.map((mode) => (
          <button
            key={mode.id}
            onClick={() => onSelect(mode.id)}
            className="group flex flex-col text-left p-6 rounded-2xl border border-gray-800 bg-gray-900 hover:border-blue-500 hover:bg-gray-800 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <span className="text-3xl mb-4">{mode.icon}</span>
            <span className="inline-block text-xs font-semibold text-blue-400 uppercase tracking-wider mb-2">
              {mode.tag}
            </span>
            <h2 className="text-white font-semibold text-lg mb-2 group-hover:text-blue-300 transition-colors">
              {mode.title}
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              {mode.description}
            </p>
          </button>
        ))}
      </div>

      <p className="text-gray-600 text-xs mt-10 text-center max-w-md">
        Never enter real patient identifiers. All sessions are ephemeral —
        nothing is stored when you close the tab.
      </p>
    </div>
  );
}
