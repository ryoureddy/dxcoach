"use client";

interface TestMeTabProps {
  onStart: () => void;
}

export default function TestMeTab({ onStart }: TestMeTabProps) {
  return (
    <div className="max-w-2xl mx-auto px-4 py-16 text-center">
      <h2
        className="text-2xl font-medium text-[var(--color-text-primary)] mb-3"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        Test Me
      </h2>
      <p className="text-sm text-[var(--color-text-secondary)] mb-2 max-w-md mx-auto">
        A blind case from the curated library. You won&apos;t know the diagnosis
        going in — you have to reason your way there.
      </p>
      <p className="text-xs text-[var(--color-text-muted)] mb-8 max-w-md mx-auto">
        You&apos;ll pick an organ system or chief complaint (or say &quot;surprise
        me&quot;), and DxCoach will select a matching case.
      </p>
      <button
        onClick={onStart}
        className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white text-sm font-medium px-8 py-3 rounded-lg transition-colors"
      >
        Start a Blind Case
      </button>
    </div>
  );
}
