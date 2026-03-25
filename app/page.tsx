"use client";

import { useState } from "react";
import IllnessScriptLibrary from "@/components/IllnessScriptLibrary";
import CaseSelector from "@/components/CaseSelector";
import TestMeTab from "@/components/TestMeTab";
import ChatInterface from "@/components/ChatInterface";

type Tab = "library" | "cases" | "test-me";
type ChatMode = "practice" | "test-me" | "present";

type AppView =
  | { view: "tabs"; activeTab: Tab }
  | { view: "chat"; mode: ChatMode; caseId?: string };

const tabs: { id: Tab; label: string }[] = [
  { id: "library", label: "Illness Scripts" },
  { id: "cases", label: "Pre-loaded Cases" },
  { id: "test-me", label: "Test Me" },
];

export default function Home() {
  const [appView, setAppView] = useState<AppView>({
    view: "tabs",
    activeTab: "library",
  });

  function handleStartChat(mode: ChatMode, caseId?: string) {
    setAppView({ view: "chat", mode, caseId });
  }

  function handleNewSession() {
    setAppView({ view: "tabs", activeTab: "library" });
  }

  // Chat view — full screen
  if (appView.view === "chat") {
    return (
      <ChatInterface
        mode={appView.mode}
        caseId={appView.caseId}
        onNewSession={handleNewSession}
      />
    );
  }

  // Tabs view
  const { activeTab } = appView;

  return (
    <div className="flex flex-col min-h-screen bg-[var(--color-bg)]">
      {/* Header */}
      <header className="shrink-0 border-b border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div>
            <h1
              className="text-2xl font-bold text-[var(--color-text-primary)]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              DxCoach
            </h1>
            <p className="text-xs text-[var(--color-text-muted)] mt-0.5">
              Your Thinking First. Evidence Second. AI Third.
            </p>
          </div>
          <button
            onClick={() => handleStartChat("present")}
            className="text-sm font-medium text-[var(--color-primary)] hover:bg-[var(--color-primary)]/10 px-4 py-2 rounded-lg transition-colors"
          >
            Present to Your Attending
          </button>
        </div>
      </header>

      {/* Tab bar */}
      <nav className="shrink-0 border-b border-[var(--color-border)] bg-[var(--color-surface)] px-4">
        <div className="max-w-4xl mx-auto flex gap-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() =>
                setAppView({ view: "tabs", activeTab: tab.id })
              }
              className={`px-4 py-3 text-sm font-medium transition-colors relative ${
                activeTab === tab.id
                  ? "text-[var(--color-primary)]"
                  : "text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)]"
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--color-primary)] rounded-full" />
              )}
            </button>
          ))}
        </div>
      </nav>

      {/* Tab content */}
      <main className="flex-1">
        {activeTab === "library" && (
          <IllnessScriptLibrary
            onStartCase={(caseId) => handleStartChat("practice", caseId)}
          />
        )}
        {activeTab === "cases" && (
          <CaseSelector
            onSelect={(caseId) => handleStartChat("practice", caseId)}
          />
        )}
        {activeTab === "test-me" && (
          <TestMeTab onStart={() => handleStartChat("test-me")} />
        )}
      </main>

      {/* Footer */}
      <footer className="shrink-0 border-t border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3">
        <p className="text-center text-[var(--color-text-muted)] text-xs">
          DxCoach is for educational use only. Never enter real patient
          identifiers. Created by the AI in Medicine Club at Western University
          of Health Sciences.
        </p>
      </footer>
    </div>
  );
}
