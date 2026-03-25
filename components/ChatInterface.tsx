"use client";

import { useState, useRef, useEffect, FormEvent } from "react";
import MessageBubble from "./MessageBubble";

type Mode = "practice" | "generate" | "present";

interface Message {
  role: "user" | "assistant";
  content: string;
}

interface ChatInterfaceProps {
  mode: Mode;
  caseId?: string;
  onNewSession: () => void;
}

const modeLabels: Record<Mode, string> = {
  practice: "Practice a Case",
  generate: "Generate a Case",
  present: "Present to Attending",
};

export default function ChatInterface({
  mode,
  caseId,
  onNewSession,
}: ChatInterfaceProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [streamingContent, setStreamingContent] = useState("");
  const [error, setError] = useState<string | null>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const hasInitialized = useRef(false);

  // Auto-scroll to bottom on new messages
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, streamingContent]);

  // Auto-resize textarea
  useEffect(() => {
    const ta = textareaRef.current;
    if (ta) {
      ta.style.height = "auto";
      ta.style.height = `${Math.min(ta.scrollHeight, 160)}px`;
    }
  }, [input]);

  // Initialize session on mount — send the hidden first message
  useEffect(() => {
    if (hasInitialized.current) return;
    hasInitialized.current = true;
    sendMessage("__init__", true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function sendMessage(userContent: string, isInit = false) {
    setError(null);

    // For init, we don't add a visible user message
    const updatedMessages: Message[] = isInit
      ? []
      : [...messages, { role: "user" as const, content: userContent }];

    if (!isInit) {
      setMessages(updatedMessages);
      setInput("");
    }

    setIsLoading(true);
    setStreamingContent("");

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: isInit
            ? [{ role: "user", content: "__init__" }]
            : updatedMessages,
          mode,
          caseId,
        }),
      });

      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }

      if (!response.body) {
        throw new Error("No response body");
      }

      // Stream the response
      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let accumulated = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value, { stream: true });
        accumulated += chunk;
        setStreamingContent(accumulated);
      }

      // Commit streamed content to messages
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: accumulated },
      ]);
      setStreamingContent("");
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Something went wrong. Try again."
      );
    } finally {
      setIsLoading(false);
    }
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed || isLoading) return;
    sendMessage(trimmed);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    // Submit on Enter, newline on Shift+Enter
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e as unknown as FormEvent);
    }
  }

  return (
    <div className="flex flex-col h-screen bg-gray-950">
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-3 border-b border-gray-800 bg-gray-950 shrink-0">
        <div className="flex items-center gap-3">
          <span className="text-white font-bold text-lg">DxCoach</span>
          <span className="text-xs font-medium text-blue-400 bg-blue-400/10 px-2 py-0.5 rounded-full">
            {modeLabels[mode]}
          </span>
        </div>
        <button
          onClick={onNewSession}
          className="text-gray-400 hover:text-white text-sm transition-colors px-3 py-1.5 rounded-lg hover:bg-gray-800"
        >
          New Session
        </button>
      </header>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-6">
        <div className="max-w-3xl mx-auto">
          {/* Loading state for init */}
          {messages.length === 0 && !streamingContent && isLoading && (
            <div className="flex justify-start mb-4">
              <div className="shrink-0 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold mr-3 mt-1">
                Dx
              </div>
              <div className="bg-gray-800 rounded-2xl rounded-bl-sm px-4 py-3">
                <div className="flex gap-1 items-center h-5">
                  <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce [animation-delay:0ms]" />
                  <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce [animation-delay:150ms]" />
                  <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce [animation-delay:300ms]" />
                </div>
              </div>
            </div>
          )}

          {/* Rendered messages */}
          {messages.map((msg, i) => (
            <MessageBubble key={i} role={msg.role} content={msg.content} />
          ))}

          {/* Streaming assistant message */}
          {streamingContent && (
            <MessageBubble
              role="assistant"
              content={streamingContent}
              isStreaming={true}
            />
          )}

          {/* Error */}
          {error && (
            <div className="flex justify-center mb-4">
              <div className="bg-red-900/40 border border-red-700 text-red-300 text-sm rounded-xl px-4 py-2 max-w-sm text-center">
                {error}
              </div>
            </div>
          )}

          <div ref={bottomRef} />
        </div>
      </div>

      {/* Input area */}
      <div className="shrink-0 border-t border-gray-800 bg-gray-950 px-4 py-3">
        <form
          onSubmit={handleSubmit}
          className="max-w-3xl mx-auto flex gap-3 items-end"
        >
          <textarea
            ref={textareaRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type your response… (Enter to send, Shift+Enter for new line)"
            disabled={isLoading}
            rows={1}
            className="flex-1 bg-gray-800 text-white placeholder-gray-500 rounded-xl px-4 py-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 min-h-[44px] max-h-40"
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="shrink-0 bg-blue-600 hover:bg-blue-500 disabled:bg-gray-700 disabled:text-gray-500 text-white rounded-xl px-4 py-3 text-sm font-medium transition-colors min-h-[44px]"
          >
            {isLoading ? (
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-white rounded-full animate-bounce [animation-delay:0ms]" />
                <span className="w-1.5 h-1.5 bg-white rounded-full animate-bounce [animation-delay:150ms]" />
                <span className="w-1.5 h-1.5 bg-white rounded-full animate-bounce [animation-delay:300ms]" />
              </span>
            ) : (
              "Send"
            )}
          </button>
        </form>
        <p className="text-center text-gray-600 text-xs mt-2">
          DxCoach is for educational use only. Never enter real patient
          identifiers.
        </p>
      </div>
    </div>
  );
}
