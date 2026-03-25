# DxCoach — Technical Plan

## Overview

DxCoach is a clinical reasoning coach for medical students, built as a web app powered by the Anthropic Claude API. Students visit a URL, select a mode, and interact with an AI senior resident that coaches their clinical reasoning without giving them answers.

Built by the AI in Medicine Club at Western University of Health Sciences.

---

## Architecture

### Stack
- **Frontend:** Next.js (React) deployed on Vercel (free tier)
- **API:** Vercel serverless function (API route) — holds the Anthropic API key server-side
- **Model:** Claude Sonnet 4 (`claude-sonnet-4-20250514`)
- **Hosting:** Vercel (free tier supports serverless functions, custom domains, and sufficient traffic for a student club)

### Why This Stack
- Zero cost for hosting (Vercel free tier)
- API costs scale with usage (~$5-10/month for 50 students doing 2 cases/week)
- API key stays server-side, never exposed to the frontend
- No database needed — conversations live in browser session state only
- No user accounts or authentication required
- Single deployment, no infrastructure to manage

---

## File Structure

```
dxcoach/
├── app/
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Main chat interface
│   └── api/
│       └── chat/
│           └── route.ts        # Serverless API route (Anthropic calls)
├── lib/
│   ├── system-prompt.ts        # System instructions (condensed, <8000 chars)
│   ├── knowledge.ts            # Knowledge file content (exported as string)
│   └── cases/
│       └── pe-vs-adhf.ts       # Pre-loaded case data
├── components/
│   ├── ChatInterface.tsx       # Main chat UI component
│   ├── MessageBubble.tsx       # Individual message display
│   ├── ModeSelector.tsx        # Three-mode selection (Practice, Generate, Present)
│   └── CaseSelector.tsx        # Pre-loaded case picker
├── public/
│   └── favicon.ico
├── .env.local                  # ANTHROPIC_API_KEY (never committed to git)
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md
```

---

## API Route Design

### Endpoint: `/api/chat`

**Method:** POST

**Request body:**
```json
{
  "messages": [
    { "role": "user", "content": "..." },
    { "role": "assistant", "content": "..." },
    { "role": "user", "content": "..." }
  ],
  "mode": "practice" | "generate" | "present"
}
```

**Server-side logic:**
1. Read `ANTHROPIC_API_KEY` from environment variable
2. Construct the system prompt by combining:
   - The condensed system instructions (from `lib/system-prompt.ts`)
   - The knowledge file content (from `lib/knowledge.ts`)
   - Mode-specific preamble if applicable
3. Call the Anthropic Messages API with:
   - `model: "claude-sonnet-4-20250514"`
   - `max_tokens: 1024`
   - `system: [constructed system prompt]`
   - `messages: [conversation history from request]`
4. Stream the response back to the frontend

**Response:** Streamed text (using Anthropic's streaming API for real-time token display)

### System Prompt Construction

The system prompt sent with every API call is assembled from two parts:

```typescript
const systemPrompt = `
${SYSTEM_INSTRUCTIONS}

---

REFERENCE KNOWLEDGE:
${KNOWLEDGE_FILE}
`;
```

Total context: ~29,000 characters (~7,500 tokens) for system prompt. Well within Claude Sonnet's context window, leaving ample room for conversation history.

### Mode-Specific Behavior

The mode determines what initial message is sent to start the conversation:

**Practice mode (pre-loaded case):**
```
First message from app: "The student has selected a pre-loaded case. Here is the case data: [case content from cases/pe-vs-adhf.ts]. Begin with Phase 1 — present the triage snapshot and ask for their problem representation and initial hypotheses."
```

**Generate mode:**
```
First message from app: "The student wants to practice with a generated case. Ask them what organ system, chief complaint, or clinical domain they want to work on, then generate a case and begin Phase 1."
```

**Present to Attending mode:**
```
First message from app: "The student wants to practice presenting a case to their attending. Ask them to present the case as they would on rounds — problem representation, relevant history and exam, differential with reasoning, workup plan, and proposed management. Follow the Present to Your Attending guide in your knowledge file."
```

These initial messages are sent as the first `user` message but hidden from the UI. The student sees the DxCoach opening response.

---

## Frontend Design

### Interface

Clean, minimal chat interface. No sidebar, no complex navigation.

**Components:**

1. **Mode Selector (landing state):** Three cards displayed when the student first arrives:
   - "Practice a Case" — shows available pre-loaded cases
   - "Generate a New Case" — takes them directly to chat
   - "Present to Your Attending" — takes them directly to chat
   
2. **Case Selector (practice mode only):** After selecting "Practice a Case," shows available cases as clickable cards. Currently just one: "Acute Dyspnea: PE vs ADHF." Designed to accommodate more cases as they're added.

3. **Chat Interface:** After mode selection, the main view is a simple chat:
   - Messages displayed in a scrollable container
   - User input at the bottom (text area + send button)
   - Streaming response display (tokens appear in real-time)
   - "New Session" button to return to mode selection
   
4. **Header:** Minimal. "DxCoach" with a small tagline: "Your Thinking First. Evidence Second. AI Third." and an "AI in Medicine Club" attribution.

### State Management

All state lives in React client state (useState/useReducer). No database, no localStorage.

- `mode`: "practice" | "generate" | "present" | null (null = landing)
- `messages`: Array of { role, content } objects — the full conversation history
- `isLoading`: Boolean for streaming state
- `selectedCase`: String identifier for pre-loaded case (if practice mode)

When the student clicks "New Session," all state resets.

### Responsive Design

Must work well on mobile — students will use this on their phones during study sessions. Chat interface should be full-width on mobile with comfortable touch targets.

---

## Pre-Loaded Case Data Format

Cases are stored as TypeScript objects in `lib/cases/`:

```typescript
export const PE_VS_ADHF = {
  id: "pe-vs-adhf",
  title: "Acute Dyspnea: PE vs ADHF",
  subtitle: "68-year-old male with sudden shortness of breath",
  difficulty: "Intermediate",
  
  // This gets sent to the API as the initial hidden message
  casePrompt: `The student has selected a pre-loaded case. Here is the case:

Teaching Objective: Differentiate pulmonary embolism (PE) from acute decompensated heart failure (ADHF) in acute dyspnea.

Triage Snapshot (present this in Phase 1):
Chief Complaint: "I can't catch my breath."
68-year-old male
Vitals: HR 112, RR 26, BP 132/84, SpO2 90% on room air

[... full case data from knowledge file ...]

Begin with Phase 1 — present the triage snapshot and ask for their problem representation and initial hypotheses.`
};
```

To add a new case later: create a new file in `lib/cases/`, export the case object, and add it to the case selector component. No other changes needed.

---

## Environment Variables

```
ANTHROPIC_API_KEY=sk-ant-...
```

Set in Vercel dashboard under Project Settings > Environment Variables. Never committed to git.

---

## Cost Management

### Estimated Usage
- ~50 students, ~2 sessions/week each
- ~4,000 tokens per session (system prompt + conversation)
- ~400,000 tokens/week input, ~200,000 tokens/week output
- Monthly estimate: ~1.6M input tokens, ~800K output tokens

### Estimated Monthly Cost
- Input: 1.6M × $3/1M = ~$4.80
- Output: 800K × $15/1M = ~$12.00
- **Total: ~$17/month at moderate usage**

### Cost Controls
- `max_tokens: 1024` on every API call (prevents runaway responses)
- No persistent conversations — session ends when the browser tab closes
- If costs need to be reduced: switch to Claude Haiku for lighter interactions or add a simple rate limit middleware in the API route

---

## Deployment Steps

1. **Create the project:**
   ```bash
   npx create-next-app@latest dxcoach --typescript --tailwind --app
   ```

2. **Install Anthropic SDK:**
   ```bash
   npm install @anthropic-ai/sdk
   ```

3. **Add source files** from the file structure above

4. **Set environment variable locally:**
   ```bash
   echo "ANTHROPIC_API_KEY=sk-ant-..." > .env.local
   ```

5. **Test locally:**
   ```bash
   npm run dev
   ```

6. **Deploy to Vercel:**
   ```bash
   npx vercel
   ```

7. **Set environment variable in Vercel:**
   - Dashboard > Project > Settings > Environment Variables
   - Add `ANTHROPIC_API_KEY`

8. **Optional: Custom domain**
   - Add a custom domain in Vercel settings (e.g., `dxcoach.yourdomain.com`)

---

## Future Additions

These require no architectural changes — the system is designed to accommodate them:

- **More pre-loaded cases:** Add new files to `lib/cases/`, update the case selector
- **Usage analytics:** Add a simple event logger to the API route (Vercel Analytics or a free service like PostHog)
- **Session history:** Add optional localStorage to save/resume sessions (currently intentionally omitted for simplicity)
- **Faculty dashboard:** A separate page showing aggregate usage stats (requires adding a lightweight database — Vercel Postgres free tier)
- **Additional models:** Swap or A/B test different Claude models by changing the model string in the API route
- **Case authoring tool:** A simple form that outputs case data in the correct format for `lib/cases/`

---

## Security Considerations

- API key is server-side only — never sent to the browser
- No user data is stored or persisted
- No authentication = no credentials to protect
- Patient privacy reminder is built into the system instructions
- CORS is handled by Next.js defaults (same-origin)
- Rate limiting can be added via Vercel middleware if abuse occurs

---

## Documents Included in This Package

| File | Purpose | Where It Goes |
|---|---|---|
| `DxCoach_System_Instructions_Condensed.txt` | System prompt for API calls | `lib/system-prompt.ts` (as exported string) |
| `DxCoach_Knowledge_File.md` | Reference knowledge for case flow, coaching, and cases | `lib/knowledge.ts` (as exported string) |
| `DxCoach_System_Instructions.md` | Full unabridged system instructions (master reference) | Project documentation (not deployed) |
| `AI_Clinical_Reasoning_Workshop_v2.md` | 60-minute workshop structure | Club materials (not part of the app) |
| `DxCoach_Technical_Plan.md` | This document | Project documentation |
