"use client";

import { useState } from "react";
import IllnessScriptLibrary from "@/components/IllnessScriptLibrary";
import CaseSelector from "@/components/CaseSelector";
import AttendingCoachTab from "@/components/AttendingCoachTab";
import ChatInterface from "@/components/ChatInterface";

type Tab = "library" | "cases" | "attending";
type ChatMode = "practice" | "present";

type AppView =
  | { view: "home" }
  | { view: "tabs"; activeTab: Tab }
  | { view: "chat"; mode: ChatMode; caseId?: string };

export default function Home() {
  const [appView, setAppView] = useState<AppView>({ view: "home" });

  function handleStartChat(mode: ChatMode, caseId?: string) {
    setAppView({ view: "chat", mode, caseId });
  }

  function handleNewSession() {
    setAppView({ view: "home" });
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

  // Tab views (library, cases, attending)
  if (appView.view === "tabs") {
    const { activeTab } = appView;
    const tabs: { id: Tab; label: string }[] = [
      { id: "library", label: "Illness Scripts" },
      { id: "cases", label: "Cases" },
      { id: "attending", label: "Attending Coach" },
    ];

    return (
      <div className="flex flex-col min-h-screen bg-[var(--color-bg)]">
        {/* Header */}
        <header className="shrink-0 border-b border-outline-variant/60 bg-surface shadow-[0_2px_16px_rgba(58,48,42,0.04)] sticky top-0 z-50 px-6 py-4">
          <div className="max-w-6xl mx-auto flex items-center gap-8">
            <button
              onClick={() => setAppView({ view: "home" })}
              className="font-serif italic text-2xl text-primary tracking-tight hover:opacity-80 transition-opacity"
            >
              DxCoach
            </button>
            <nav className="hidden md:flex gap-6">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() =>
                    setAppView({ view: "tabs", activeTab: tab.id })
                  }
                  className={`font-medium font-sans tracking-tight transition-colors duration-200 ${
                    activeTab === tab.id
                      ? "text-primary"
                      : "text-stone-500 hover:text-primary"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>
        </header>

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
          {activeTab === "attending" && (
            <AttendingCoachTab onStart={() => handleStartChat("present")} />
          )}
        </main>

        {/* Footer */}
        <footer className="shrink-0 border-t border-outline-variant/30 px-6 py-3">
          <p className="text-center text-on-surface-variant text-xs">
            DxCoach is for educational use only. Never enter real patient
            identifiers. Created by the AI in Medicine Club at Western University
            of Health Sciences.
          </p>
        </footer>
      </div>
    );
  }

  // Home / Landing page
  return (
    <div className="bg-surface text-on-surface min-h-screen flex flex-col">
      {/* TopAppBar */}
      <header className="bg-surface border-b border-outline-variant/60 shadow-[0_2px_16px_rgba(58,48,42,0.04)] sticky top-0 z-50">
        <div className="flex justify-between items-center w-full px-6 py-4 max-w-full mx-auto">
          <div className="flex items-center gap-8">
            <span className="font-serif italic text-2xl text-primary tracking-tight">
              DxCoach
            </span>
            <nav className="hidden md:flex gap-6">
              <button
                onClick={() => setAppView({ view: "home" })}
                className="text-stone-500 font-medium font-sans tracking-tight hover:text-primary transition-colors duration-200"
              >
                New Session
              </button>
              <button
                onClick={() =>
                  setAppView({ view: "tabs", activeTab: "cases" })
                }
                className="text-stone-500 font-medium font-sans tracking-tight hover:text-primary transition-colors duration-200"
              >
                Case Library
              </button>
              <button
                onClick={() =>
                  setAppView({ view: "tabs", activeTab: "library" })
                }
                className="text-stone-500 font-medium font-sans tracking-tight hover:text-primary transition-colors duration-200"
              >
                Illness Scripts
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center px-6 py-12 md:py-24">
        {/* Hero Section */}
        <section className="text-center mb-16 max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-serif italic text-on-surface leading-tight mb-6">
            DxCoach
          </h1>
          <p className="text-xl md:text-2xl font-sans text-on-surface-variant font-light tracking-wide">
            &apos;Your Thinking First. Evidence Second. AI Third.&apos;
          </p>
        </section>

        {/* Mode Selection Grid (Asymmetric Bento Style) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full max-w-6xl mx-auto">
          {/* Card 1: Case Library */}
          <div
            className="md:col-span-7 group cursor-pointer"
            onClick={() => setAppView({ view: "tabs", activeTab: "cases" })}
          >
            <div className="bg-surface-container-low rounded-xl p-8 md:p-10 h-full border border-outline-variant/30 shadow-[0_2px_16px_rgba(58,48,42,0.04)] hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 group-hover:bg-primary/10 transition-colors" />
              <div className="relative z-10 flex flex-col h-full">
                <span className="material-symbols-outlined text-primary text-4xl mb-6">
                  history_edu
                </span>
                <h2 className="text-3xl font-serif italic text-on-surface mb-4">
                  Case Library
                </h2>
                <p className="text-on-surface-variant text-lg leading-relaxed mb-8 flex-grow">
                  Work through clinical cases with progressive disclosure. Test
                  your clinical reasoning at every step of the patient journey.
                </p>
                <div className="flex items-center text-primary font-bold tracking-tight group-hover:translate-x-2 transition-transform">
                  <span>Begin Simulation</span>
                  <span className="material-symbols-outlined ml-2">
                    arrow_forward
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Illness Script Library */}
          <div
            className="md:col-span-5 group cursor-pointer"
            onClick={() => setAppView({ view: "tabs", activeTab: "library" })}
          >
            <div className="bg-surface-container-highest rounded-xl p-8 md:p-10 h-full border border-outline-variant/30 shadow-[0_2px_16px_rgba(58,48,42,0.04)] hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex flex-col h-full">
                <span className="material-symbols-outlined text-primary text-4xl mb-6">
                  menu_book
                </span>
                <h2 className="text-3xl font-serif italic text-on-surface mb-4">
                  Illness Script Library
                </h2>
                <p className="text-on-surface-variant text-lg leading-relaxed mb-8 flex-grow">
                  Review curated mental models of common diseases and clinical
                  presentations.
                </p>
                <div className="flex items-center text-primary font-bold tracking-tight group-hover:translate-x-2 transition-transform">
                  <span>Browse Library</span>
                  <span className="material-symbols-outlined ml-2">
                    arrow_forward
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Present to Your Attending */}
          <div
            className="md:col-span-12 group cursor-pointer"
            onClick={() => handleStartChat("present")}
          >
            <div className="bg-[#fcf8f2] rounded-xl p-8 md:p-12 border border-outline-variant/30 shadow-[0_2px_16px_rgba(58,48,42,0.04)] hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col md:flex-row items-start md:items-center gap-8">
              <div className="bg-white p-6 rounded-full shadow-sm">
                <span className="material-symbols-outlined text-primary text-5xl">
                  psychology
                </span>
              </div>
              <div className="flex-grow">
                <h2 className="text-3xl font-serif italic text-on-surface mb-2">
                  Present to Your Attending
                </h2>
                <p className="text-on-surface-variant text-lg max-w-2xl">
                  Practice your case presentation and get challenged like
                  you&apos;re on rounds. Refine your oral report and defensive
                  reasoning.
                </p>
              </div>
              <div className="flex items-center bg-primary text-on-primary px-8 py-4 rounded-full font-bold tracking-tight hover:bg-primary/90 transition-all shrink-0">
                <span>Start Rounds</span>
                <span className="material-symbols-outlined ml-2">
                  record_voice_over
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative gradient */}
        <div className="fixed bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-surface-container-low/50 to-transparent pointer-events-none -z-10" />
      </main>

      {/* Footer */}
      <footer className="w-full py-12 px-6 text-center mt-auto border-t border-outline-variant/30" />

      {/* Mobile Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full bg-surface-bright border-t border-outline-variant/30 px-6 py-3 flex justify-around items-center z-50">
        <button
          onClick={() => setAppView({ view: "home" })}
          className="flex flex-col items-center gap-1 text-primary"
        >
          <span className="material-symbols-outlined">home</span>
          <span className="text-[10px] font-bold">Home</span>
        </button>
        <button
          onClick={() => setAppView({ view: "tabs", activeTab: "cases" })}
          className="flex flex-col items-center gap-1 text-on-surface-variant"
        >
          <span className="material-symbols-outlined">library_books</span>
          <span className="text-[10px] font-medium">Library</span>
        </button>
        <button
          onClick={() => setAppView({ view: "tabs", activeTab: "library" })}
          className="flex flex-col items-center gap-1 text-on-surface-variant"
        >
          <span className="material-symbols-outlined">menu_book</span>
          <span className="text-[10px] font-medium">Scripts</span>
        </button>
      </nav>
    </div>
  );
}
