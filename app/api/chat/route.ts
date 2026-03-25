import Anthropic from "@anthropic-ai/sdk";
import { SYSTEM_INSTRUCTIONS } from "@/lib/system-prompt";
import { KNOWLEDGE_FILE } from "@/lib/knowledge";
import { CASES } from "@/lib/cases/pe-vs-adhf";

const client = new Anthropic();

export async function POST(request: Request) {
  const { messages, mode, caseId } = await request.json();

  // Assemble the system prompt: instructions + knowledge file
  const systemPrompt = `${SYSTEM_INSTRUCTIONS}

---

REFERENCE KNOWLEDGE:
${KNOWLEDGE_FILE}`;

  // Build the message array, injecting a hidden first message based on mode
  let allMessages = [...messages];

  // If this is the first user message (only one message in array), prepend the mode-specific hidden message
  if (messages.length === 1) {
    let hiddenFirstMessage = "";

    if (mode === "practice" && caseId) {
      const selectedCase = CASES.find((c) => c.id === caseId);
      if (selectedCase) {
        hiddenFirstMessage = selectedCase.casePrompt;
      }
    } else if (mode === "test-me") {
      hiddenFirstMessage =
        "The student clicked 'Test Me' — they want a blind case from the curated case library. Ask them: 'What area do you want to be tested on? Give me a chief complaint, organ system, or body system — or say surprise me and I'll pick one.' Once they respond, select the best matching case from the Case Library and run it WITHOUT revealing the diagnosis. The diagnosis is not confirmed or denied until the Phase 5 teaching summary. If the student guesses mid-case, keep them building evidence: 'Keep building the evidence — what's making you think that, and what would you need to see to be sure?'";
    } else if (mode === "present") {
      hiddenFirstMessage =
        "The student wants to practice presenting a case to their attending. Ask them to present the case as they would on rounds — problem representation, relevant history and exam, differential with reasoning, workup plan, and proposed management. Follow the Present to Your Attending guide in your knowledge file.";
    }

    if (hiddenFirstMessage) {
      // Replace the first message content with the hidden prompt + original content (if any)
      const originalContent = messages[0].content;
      allMessages = [
        {
          role: "user",
          content: hiddenFirstMessage,
        },
        // Only include the student's actual message if it's non-empty and not just the trigger
        ...(originalContent && originalContent !== "__init__"
          ? [{ role: "user", content: originalContent }]
          : []),
      ];
    }
  }

  // Stream response from Claude
  const stream = client.messages.stream({
    model: "claude-sonnet-4-20250514",
    max_tokens: 1024,
    system: systemPrompt,
    messages: allMessages,
  });

  // Return a ReadableStream that emits text chunks
  const readable = new ReadableStream({
    async start(controller) {
      const encoder = new TextEncoder();
      try {
        for await (const chunk of stream) {
          if (
            chunk.type === "content_block_delta" &&
            chunk.delta.type === "text_delta"
          ) {
            controller.enqueue(encoder.encode(chunk.delta.text));
          }
        }
      } catch (err) {
        controller.error(err);
      } finally {
        controller.close();
      }
    },
  });

  return new Response(readable, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-cache",
      "X-Content-Type-Options": "nosniff",
    },
  });
}
