# DxCoach

A Socratic clinical reasoning coach for medical students, built by the AI in Medicine Club at Western University of Health Sciences.

**Your Thinking First. Evidence Second. AI Third.**

**Live at [dxcoach.vercel.app](https://dxcoach.vercel.app/)**

## What It Does

DxCoach acts as a supportive senior resident — it coaches students through clinical cases without ever giving away the diagnosis. Three modes:

- **Case Library** — Pre-loaded cases with progressive disclosure (PE vs. ADHF and more to come). Work through each step of the patient journey.
- **Illness Script Library** — Browse curated mental models of common diseases and clinical presentations.
- **Present to Your Attending** — Practice presenting a de-identified real patient case; get attending-style pushback and refine your oral report.

## Design System

DxCoach uses the **Sahara** design system — warm minimalism inspired by "Sun-Baked Simplicity." Key elements:

- **Colors:** Burnt sienna primary (`#c2652a`), warm linen background (`#faf5ee`), dusty rose accent (`#8c3c3c`)
- **Typography:** EB Garamond (editorial serif headlines) + Manrope (geometric sans body)
- **Elevation:** Ultra-soft shadows and warm background tinting for hierarchy

See `design system/DESIGN.md` for the full design spec and `design system/DESIGN_PHILOSOPHY.md` for frontend implementation details.

## Stack

- Next.js 16 (App Router, Turbopack) + TypeScript + Tailwind CSS v4
- Anthropic Claude Sonnet 4 (`claude-sonnet-4-20250514`)
- Material Symbols Outlined (icons)
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
├── components/             # UI components (chat, case selector, illness scripts)
├── design system/          # Sahara design system docs (DESIGN.md, DESIGN_PHILOSOPHY.md)
├── lib/                    # App logic (system prompt, knowledge file, cases)
│   └── cases/              # Pre-loaded case data (one file per case)
├── docs/                   # Planning and reference documents (not deployed)
└── public/                 # Static assets
```

## Architecture

See `docs/DxCoach_Technical_Plan.md` for the full architecture reference.
