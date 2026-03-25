# DxCoach

A Socratic clinical reasoning coach for medical students, built by the AI in Medicine Club at Western University of Health Sciences.

**Your Thinking First. Evidence Second. AI Third.**

## What It Does

DxCoach acts as a supportive senior resident — it coaches students through clinical cases without ever giving away the diagnosis. Three modes:

- **Practice a Case** — Pre-loaded cases with progressive disclosure (PE vs. ADHF and more to come)
- **Generate a Case** — Tell DxCoach an organ system or chief complaint and it builds a custom case
- **Present to Your Attending** — Practice presenting a de-identified real patient case; get attending-style pushback

## Stack

- Next.js (App Router) + TypeScript + Tailwind CSS
- Anthropic Claude Sonnet 4 (`claude-sonnet-4-20250514`)
- Deployed on Vercel (serverless, no database)

## Local Development

1. Clone the repo
2. Install dependencies: `npm install`
3. Create `.env.local` with your Anthropic API key:
   ```
   ANTHROPIC_API_KEY=
   
   ```
4. Run: `npm run dev`
5. Open http://localhost:3000

## Deploy to Vercel

```bash
npx vercel
```

Set `ANTHROPIC_API_KEY` in Vercel Dashboard → Project → Settings → Environment Variables.

## Adding New Cases

Create a new file in `lib/cases/`, export a case object following the shape in `lib/cases/pe-vs-adhf.ts`, then add it to the `CASES` array. The `CaseSelector` component will pick it up automatically.

## Cost

~$17/month at 50 students × 2 sessions/week. `max_tokens: 1024` is a hard cost control — do not increase without explicit decision.

## Project Structure

```
DxCoach/
├── app/                    # Next.js App Router (pages, layout, API route)
├── components/             # UI components (chat, mode selector, case selector)
├── lib/                    # App logic (system prompt, knowledge file, cases)
│   └── cases/              # Pre-loaded case data (one file per case)
├── docs/                   # Planning and reference documents (not deployed)
└── public/                 # Static assets
```

## Architecture

See `docs/DxCoach_Technical_Plan.md` for the full architecture reference.
