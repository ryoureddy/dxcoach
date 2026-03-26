"use client";

interface AttendingCoachTabProps {
  onStart: () => void;
}

export default function AttendingCoachTab({ onStart }: AttendingCoachTabProps) {
  return (
    <div className="max-w-2xl mx-auto px-4 py-16 text-center">
      <h2
        className="text-2xl font-medium text-[var(--color-text-primary)] mb-3"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        Attending Coach
      </h2>
      <p className="text-sm text-[var(--color-text-secondary)] mb-2 max-w-md mx-auto">
        Practice presenting a real patient case. Present as you would on
        rounds — problem representation, pertinent history, differential
        with reasoning, workup, and management.
      </p>
      <p className="text-xs text-[var(--color-text-muted)] mb-8 max-w-md mx-auto">
        Get attending-style feedback on your structure and clinical reasoning.
      </p>
      <button
        onClick={onStart}
        className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white text-sm font-medium px-8 py-3 rounded-lg transition-colors"
      >
        Start a Presentation
      </button>
    </div>
  );
}
