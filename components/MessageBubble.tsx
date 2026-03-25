"use client";

import ReactMarkdown from "react-markdown";

interface MessageBubbleProps {
  role: "user" | "assistant";
  content: string;
  isStreaming?: boolean;
}

export default function MessageBubble({
  role,
  content,
  isStreaming = false,
}: MessageBubbleProps) {
  const isUser = role === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} mb-4`}>
      {/* Avatar for assistant */}
      {!isUser && (
        <div className="shrink-0 w-8 h-8 rounded-full bg-[var(--color-primary)] flex items-center justify-center text-white text-xs font-bold mr-3 mt-1">
          Dx
        </div>
      )}

      <div
        className={`max-w-[80%] rounded-2xl px-4 py-3 ${
          isUser
            ? "bg-[var(--color-primary)] text-white rounded-br-sm"
            : "bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-text-primary)] rounded-bl-sm"
        }`}
        style={!isUser ? { boxShadow: "var(--shadow-soft)" } : undefined}
      >
        {isUser ? (
          <p className="text-sm leading-relaxed whitespace-pre-wrap">
            {content}
          </p>
        ) : (
          <div className="text-sm leading-relaxed max-w-none">
            <ReactMarkdown
              components={{
                // Style paragraphs
                p: ({ children }) => (
                  <p className="mb-2 last:mb-0">{children}</p>
                ),
                // Style bold text (key clinical terms)
                strong: ({ children }) => (
                  <strong className="text-[var(--color-primary)] font-semibold">
                    {children}
                  </strong>
                ),
                // Style bullet lists
                ul: ({ children }) => (
                  <ul className="list-disc list-inside mb-2 space-y-1">
                    {children}
                  </ul>
                ),
                ol: ({ children }) => (
                  <ol className="list-decimal list-inside mb-2 space-y-1">
                    {children}
                  </ol>
                ),
                li: ({ children }) => (
                  <li className="text-[var(--color-text-primary)]">{children}</li>
                ),
                // Tables
                table: ({ children }) => (
                  <div className="overflow-x-auto my-2">
                    <table className="text-xs border-collapse w-full">
                      {children}
                    </table>
                  </div>
                ),
                th: ({ children }) => (
                  <th className="border border-[var(--color-border)] px-2 py-1 bg-[var(--color-surface-container-low)] text-left font-semibold">
                    {children}
                  </th>
                ),
                td: ({ children }) => (
                  <td className="border border-[var(--color-border)] px-2 py-1">
                    {children}
                  </td>
                ),
                // Links
                a: ({ children, href }) => (
                  <a
                    href={href}
                    className="text-[var(--color-primary)] underline decoration-[var(--color-primary)]/40 hover:decoration-[var(--color-primary)] transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {children}
                  </a>
                ),
                // Inline code
                code: ({ children }) => (
                  <code className="bg-[var(--color-surface-container-low)] text-[var(--color-tertiary)] px-1.5 py-0.5 rounded text-xs">
                    {children}
                  </code>
                ),
              }}
            >
              {content}
            </ReactMarkdown>
            {isStreaming && (
              <span className="inline-block w-2 h-4 bg-[var(--color-primary)] ml-0.5 animate-pulse rounded-sm" />
            )}
          </div>
        )}
      </div>

      {/* Avatar placeholder for user (right side spacing) */}
      {isUser && <div className="shrink-0 w-8 ml-3" />}
    </div>
  );
}
