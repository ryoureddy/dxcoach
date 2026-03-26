"use client";

import { useState } from "react";
import type { IllnessScript } from "@/lib/illness-scripts";

interface IllnessScriptLibraryProps {
  onStartCase: (caseId: string) => void;
  illnessScripts: IllnessScript[];
}

// Group scripts by organ system (a script can appear in multiple groups)
function groupByOrganSystem(scripts: IllnessScript[]) {
  const groups: Record<string, IllnessScript[]> = {};
  for (const script of scripts) {
    for (const system of script.organSystems) {
      if (!groups[system]) groups[system] = [];
      if (!groups[system].some((s) => s.id === script.id)) {
        groups[system].push(script);
      }
    }
  }
  // Sort system names alphabetically
  return Object.entries(groups).sort(([a], [b]) => a.localeCompare(b));
}

export default function IllnessScriptLibrary({
  onStartCase,
  illnessScripts,
}: IllnessScriptLibraryProps) {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedScript = selectedId
    ? illnessScripts.find((s) => s.id === selectedId) ?? null
    : null;

  // Detail view
  if (selectedScript) {
    return (
      <IllnessScriptDetail
        script={selectedScript}
        onBack={() => setSelectedId(null)}
        onStartCase={onStartCase}
      />
    );
  }

  // List view
  const grouped = groupByOrganSystem(illnessScripts);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h2
          className="text-2xl font-medium text-[var(--color-text-primary)] mb-2"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Illness Script Library
        </h2>
        <p className="text-sm text-[var(--color-text-secondary)]">
          Curated mental models organized by organ system. Each script covers who
          gets the disease, what goes wrong, and what it looks like. Use these to
          study before a case or review after.
        </p>
      </div>

      {grouped.map(([system, scripts]) => (
        <div key={system} className="mb-8">
          <h3 className="text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-wider mb-3">
            {system}
          </h3>
          <div className="flex flex-col gap-3">
            {scripts.map((script) => (
              <button
                key={script.id}
                onClick={() => setSelectedId(script.id)}
                className="group flex flex-col text-left p-5 rounded-lg bg-[var(--color-surface)] border border-[var(--color-border)] hover:border-[var(--color-primary)] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                style={{ boxShadow: "var(--shadow-soft)" }}
              >
                <div className="flex items-center justify-between gap-3 mb-1.5">
                  <h4 className="font-semibold text-[var(--color-text-primary)] group-hover:text-[var(--color-primary)] transition-colors">
                    {script.diagnosis}
                  </h4>
                  <div className="flex gap-1.5 shrink-0">
                    {script.organSystems.map((sys) => (
                      <span
                        key={sys}
                        className="text-xs text-[var(--color-text-muted)] bg-[var(--color-surface-container-low)] px-2 py-0.5 rounded-full"
                      >
                        {sys}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-sm text-[var(--color-text-secondary)] line-clamp-2">
                  {script.epidemiology}
                </p>
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

// --- Detail View ---

function IllnessScriptDetail({
  script,
  onBack,
  onStartCase,
}: {
  script: IllnessScript;
  onBack: () => void;
  onStartCase: (caseId: string) => void;
}) {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      {/* Back button */}
      <button
        onClick={onBack}
        className="text-[var(--color-text-muted)] hover:text-[var(--color-primary)] text-sm mb-6 flex items-center gap-1 transition-colors"
      >
        ← Back to Library
      </button>

      {/* Header */}
      <div className="mb-6">
        <h2
          className="text-3xl font-medium text-[var(--color-text-primary)] mb-2"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {script.diagnosis}
        </h2>
        <div className="flex gap-2">
          {script.organSystems.map((sys) => (
            <span
              key={sys}
              className="text-xs font-medium text-[var(--color-primary)] bg-[var(--color-primary)]/10 px-2.5 py-1 rounded-full"
            >
              {sys}
            </span>
          ))}
        </div>
      </div>

      {/* Core illness script sections */}
      <div className="flex flex-col gap-4 mb-8">
        <ScriptSection
          title="Pathophysiology"
          subtitle="What goes wrong at the cellular and organ level"
          content={script.pathophysiology}
        />
        <ScriptSection
          title="Epidemiology"
          subtitle="Who gets this disease and why"
          content={script.epidemiology}
        />
        <ScriptSection
          title="Time Course"
          subtitle="How the disease evolves over time"
          content={script.timeCourse}
        />
        <ScriptSection
          title="Salient Symptoms & Signs"
          subtitle="What it looks like — the clinical presentation"
          content={script.salientSymptomsAndSigns}
        />
        <ScriptSection
          title="Diagnostics"
          subtitle="How to confirm the diagnosis"
          content={script.diagnostics}
        />
        <ScriptSection
          title="Treatment"
          subtitle="How to manage and treat"
          content={script.treatment}
        />
      </div>

      {/* Key Discriminators */}
      <div className="mb-8">
        <h3 className="text-sm font-semibold text-[var(--color-text-primary)] mb-3">
          Key Discriminators
        </h3>
        <ul className="space-y-2">
          {script.keyDiscriminators.map((d, i) => (
            <li
              key={i}
              className="flex gap-2 text-sm text-[var(--color-text-secondary)]"
            >
              <span className="text-[var(--color-primary)] shrink-0 mt-0.5">
                •
              </span>
              {d}
            </li>
          ))}
        </ul>
      </div>

      {/* Disease Mimickers */}
      {script.diseaseMimickers.length > 0 && (
        <div className="mb-8">
          <h3 className="text-sm font-semibold text-[var(--color-text-primary)] mb-3">
            Disease Mimickers
          </h3>
          <ul className="space-y-2">
            {script.diseaseMimickers.map((m, i) => (
              <li
                key={i}
                className="flex gap-2 text-sm text-[var(--color-text-secondary)]"
              >
                <span className="text-[var(--color-text-muted)] shrink-0 mt-0.5">
                  •
                </span>
                {m}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Sources */}
      {script.sources.length > 0 && (
        <div className="mb-8">
          <h3 className="text-sm font-semibold text-[var(--color-text-primary)] mb-3">
            Sources
          </h3>
          <ol className="space-y-1 list-decimal list-inside">
            {script.sources.map((s, i) => (
              <li
                key={i}
                className="text-xs text-[var(--color-text-muted)] leading-relaxed"
              >
                {s}
              </li>
            ))}
          </ol>
        </div>
      )}

      {/* Action buttons */}
      <div className="flex gap-3 flex-wrap">
        {script.associatedCaseId && (
          <button
            onClick={() => onStartCase(script.associatedCaseId!)}
            className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors"
          >
            Test Me With a Case
          </button>
        )}
        {script.ambossUrl && (
          <a
            href={script.ambossUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-[var(--color-primary)] hover:bg-[var(--color-primary)]/10 px-5 py-2.5 rounded-lg border border-[var(--color-primary)] transition-colors"
          >
            AMBOSS →
          </a>
        )}
        {!script.associatedCaseId && (
          <span className="text-sm text-[var(--color-text-muted)] px-5 py-2.5">
            No practice case available yet
          </span>
        )}
      </div>
    </div>
  );
}

// --- Reusable section card ---

function ScriptSection({
  title,
  subtitle,
  content,
}: {
  title: string;
  subtitle: string;
  content: string;
}) {
  if (!content) return null;

  return (
    <div
      className="p-5 rounded-lg bg-[var(--color-surface)] border border-[var(--color-border)]"
      style={{ boxShadow: "var(--shadow-soft)" }}
    >
      <h3 className="text-sm font-semibold text-[var(--color-text-primary)] mb-0.5">
        {title}
      </h3>
      <p className="text-xs text-[var(--color-text-muted)] mb-3">{subtitle}</p>
      <div className="text-sm text-[var(--color-text-secondary)] leading-relaxed whitespace-pre-line">
        {content}
      </div>
    </div>
  );
}
