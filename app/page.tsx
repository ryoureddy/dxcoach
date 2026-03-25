"use client";

import { useState } from "react";
import ModeSelector from "@/components/ModeSelector";
import CaseSelector from "@/components/CaseSelector";
import ChatInterface from "@/components/ChatInterface";

type Mode = "practice" | "generate" | "present";
type AppState = "landing" | "case-select" | "chat";

export default function Home() {
  const [appState, setAppState] = useState<AppState>("landing");
  const [mode, setMode] = useState<Mode | null>(null);
  const [selectedCaseId, setSelectedCaseId] = useState<string | undefined>();

  function handleModeSelect(selectedMode: Mode) {
    setMode(selectedMode);
    if (selectedMode === "practice") {
      setAppState("case-select");
    } else {
      setAppState("chat");
    }
  }

  function handleCaseSelect(caseId: string) {
    setSelectedCaseId(caseId);
    setAppState("chat");
  }

  function handleNewSession() {
    setAppState("landing");
    setMode(null);
    setSelectedCaseId(undefined);
  }

  if (appState === "landing") {
    return <ModeSelector onSelect={handleModeSelect} />;
  }

  if (appState === "case-select") {
    return (
      <CaseSelector
        onSelect={handleCaseSelect}
        onBack={() => setAppState("landing")}
      />
    );
  }

  // appState === "chat"
  return (
    <ChatInterface
      mode={mode!}
      caseId={selectedCaseId}
      onNewSession={handleNewSession}
    />
  );
}
