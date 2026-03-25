# DxCoach — Product Architecture and Workflow
*A reference document describing the full user experience, app structure, and content relationships*

---

## Purpose of This Document

This document defines how DxCoach is structured as a product — how students navigate it, what each mode does, how illness scripts and cases relate to each other, and what the model knows versus what students can see at each moment. It is not an AI coaching guide (see System Instructions) and it is not case content (see Case Library). It is the connective tissue between all three.

---

## App Structure Overview

DxCoach has three primary tabs visible to students:

| Tab | Purpose |
|---|---|
| **Illness Script Library** | Browse curated illness scripts by organ system. Study guide and standalone learning resource. Each script links to its associated practice case. |
| **Pre-loaded Cases** | Browse the case library organized by organ system. Select a specific diagnosis to practice. Student knows the diagnosis going in. |
| **Test Me** | Request a case without knowing the diagnosis in advance. Student names a chief complaint or organ system; the model selects a matching case from the library and runs it blind. |

A fourth mode — **Present to Your Attending** — is accessible from within the app but is not a browsable library. It is entered by the student choosing this option, then providing their own patient scenario.

---

## Tab 1: Illness Script Library

### What it is

A browsable, student-facing library of illness scripts organized by organ system. Each entry is a curated, structured mental model of a specific disease. This tab functions as both a **pre-case study guide** and a **standalone reference**.

### Structure of each illness script entry

Every illness script entry contains:

1. **Diagnosis name** (e.g., Pulmonary Embolism)
2. **Organ system tag** (e.g., Pulmonary / Cardiovascular)
3. **Illness Script** — three components:
   - *Enabling Conditions* — who gets this disease and why (demographics, risk factors, exposures, prior history)
   - *Fault* — the underlying pathophysiology in plain terms
   - *Consequences* — what the disease looks like (symptoms, signs, and expected test findings)
4. **Key discriminators** — 3-5 findings that most distinguish this diagnosis from its most common mimics
5. **AMBOSS link** — direct link to the AMBOSS page for this diagnosis for deeper reading
6. **"Test Me With a Case" button** — launches the associated pre-loaded case (see Mode 1 below)

### Illness script scope

The library does not contain only the "primary" diagnoses for each case. It contains illness scripts for **every diagnosis that appears as a competing diagnosis** across the case library. Students must be able to look up and understand the illness scripts for the diagnoses they are ruling out, not just the ones they are ruling in.

For example, the PE case requires illness scripts for: Pulmonary Embolism, Acute Decompensated Heart Failure, and Pneumonia (at minimum). All three must exist in the library so that post-case links work and students can study the full differential.

### Navigation

- Organized by organ system (Pulmonary, Cardiovascular, Gastrointestinal, Neurological, etc.)
- Searchable by diagnosis name
- Each illness script is its own page with the structure above

---

## Tab 2: Pre-loaded Cases

### What it is

A browsable library of practice cases organized by organ system. Each case is named by its **primary diagnosis**. Students select a diagnosis they want to practice, knowing the topic going in.

### Structure of the case browser

- Cases grouped by organ system
- Each case listed as: [Diagnosis Name] — [Difficulty: Introductory / Intermediate / Advanced] — [System]
- Example: *Pulmonary Embolism — Intermediate — Pulmonary / Cardiovascular*

### What happens when a student selects a case

1. The case launches and the model begins with Phase 1 (triage snapshot)
2. The student knows the diagnosis — their goal is to walk through the complete reasoning chain
3. The illness script for this diagnosis is **not accessible** once the case begins — it was available in the library for pre-reading, but is locked during the active case
4. The case runs through all five phases as described in the System Instructions
5. After feedback, the top 3 illness scripts and the AMBOSS link are surfaced (see Post-Case Experience below)

### Relationship between illness scripts and cases

Each illness script entry has exactly one associated case. Each case has exactly one primary diagnosis. This is a 1:1 relationship. The "Test Me With a Case" button on an illness script always launches that diagnosis's associated case.

A single illness script may appear as a *competing diagnosis* in multiple cases — for example, the ADHF illness script is the primary competing diagnosis in the PE case, and may also appear in cases for cardiac tamponade or myocarditis. It only has one illness script entry, but that entry is linked from multiple case summaries.

---

## Tab 3: Test Me

### What it is

A randomized, blind practice mode. The student doesn't know the diagnosis in advance. The model selects a case from the case library based on the student's input and runs it without revealing the diagnosis until the Phase 5 teaching summary.

### Workflow

1. Student clicks "Test Me"
2. Model asks: *"What area do you want to be tested on? Give me a chief complaint, organ system, or system — or say 'surprise me' and I'll pick one."*
3. Student responds (e.g., "chest pain" / "pulmonary" / "surprise me")
4. Model selects a matching case from the library
5. Case runs blind through all five phases — diagnosis not revealed until Phase 5
6. If the student guesses the diagnosis mid-case, model keeps moving without confirming or denying: *"Keep building the evidence — what makes you think that, and what would you need to see to be sure?"*
7. Phase 5 teaching summary reveals the diagnosis and provides full feedback
8. Post-case resources are surfaced (see below)

### Case selection logic

- The model draws **only from the curated Case Library** — it does not generate novel cases
- Cases are matched to the student's input by chief complaint, organ system, or system tag
- If multiple cases match, the model selects one; future iterations may allow tracking of completed cases to avoid repetition
- If no case matches the student's input exactly, the model picks the closest available match and notes: *"I don't have a case for that exact topic yet, but I've got one that covers similar territory — [brief description]. Want to go with that?"*

---

## Mode 4: Present to Your Attending

### What it is

A separate mode for students who have already seen a real patient and want to practice presenting before rounds. This mode does not use the case library. The student provides their own clinical scenario.

### Workflow

1. Student selects "Present to Your Attending"
2. Model prompts the student to present as they would on rounds
3. Model coaches structure, then challenges reasoning, then anticipates attending pushback
4. Closes with three-point focused feedback (one strength, one structure note, one reasoning gap)
5. No teaching summary, no illness script links — this mode is about presentation polish, not case learning

### When to use vs. case modes

| Mode | Use when... |
|---|---|
| Pre-loaded Case | Learning or practicing a specific diagnosis |
| Test Me | Building pattern recognition under uncertainty |
| Present to Attending | Preparing for an actual patient presentation |

---

## Post-Case Experience

This is what the student sees after the Phase 5 teaching summary and reflection are complete, in both Mode 1 and Mode 3.

### What is surfaced

1. **Top 3 illness script links** — the primary diagnosis and the top 2 competing diagnoses from this case's differential. Each link goes to that illness script's page in the Illness Script Library.
2. **AMBOSS link** — for the primary diagnosis only. Links to the AMBOSS page for deeper pathophysiology, epidemiology, and management reading.

### What the model says

After feedback and reflection:
*"Three illness scripts worth reviewing from this case: [Primary Diagnosis], [Competing Diagnosis 1], and [Competing Diagnosis 2]. You can find each of those in the Illness Script Library. There's also an AMBOSS link for [Primary Diagnosis] if you want to go deeper."*

The model does not re-teach. The resources are for the student to use on their own after the session.

### Why this matters

The post-case links are not incidental — they are a core part of the learning loop. The sequence is:

> **Read the illness script → Practice the case → Rule out competing diagnoses actively → Revisit all three illness scripts after → Go deeper on AMBOSS**

This loop reinforces the illness script as a mental model *before and after* the case, while the case itself is where active reasoning practice happens. The competing diagnosis illness scripts ensure students build mental models for the diagnoses they ruled out, not just the one they confirmed.

---

## Data Access Rules: What the Model Knows vs. What Students Can See

| Content | Model Access | Student Access |
|---|---|---|
| Primary diagnosis illness script | ✅ Internal reference during case | ✅ Pre-case (library) / ✅ Post-case (linked) / ❌ During case |
| Competing diagnosis illness scripts | ✅ Internal reference during case | ✅ Pre-case (library) / ✅ Post-case (linked) / ❌ During case |
| Progressive disclosure history | ✅ Full history available | ❌ Only what they specifically ask |
| Discriminators table | ✅ Coaching reference | ❌ Not visible — earned through reasoning |
| Final diagnosis | ✅ Known | ❌ In Test Me mode — not revealed until Phase 5 |
| AMBOSS links | ✅ Referenced post-case | ✅ Post-case only |
| Teaching points | ✅ Available for summary | ❌ Not revealed mid-case |

---

## Illness Script Ecosystem

Because students must be able to rule out competing diagnoses and because post-case links require illness scripts for all top 3 diagnoses, the illness script library is not a simple 1:1 mirror of the case library. It is larger.

**Minimum required illness scripts per case:**
- 1 primary diagnosis script
- 2 competing diagnosis scripts (the top 2 alternatives in the case differential)

**Total illness scripts needed = all unique diagnoses across all cases** (primary + competing)

This means building the library is a shared responsibility: when a new case is added, the Case Library entry specifies its top 3 diagnoses, and each of those must have a corresponding entry in the Illness Script Library. If an illness script already exists (e.g., ADHF was already created for the PE case), it doesn't need to be recreated — just linked.

---

## Content Relationship Diagram

```
Illness Script Library          Case Library
─────────────────────          ─────────────────────
[PE Illness Script] ────────► [PE Case]
   ↑ also linked from               ├── Primary: PE
[ADHF Illness Script] ──────►       ├── Competing 1: ADHF
   ↑ also linked from               └── Competing 2: Pneumonia
[Pneumonia Illness Script] ──►
   ↑ also linked from

Post-case, all 3 illness scripts surface
Primary diagnosis also links to AMBOSS
```

---

## Future Considerations (Not in Scope for Current Build)

- **Case completion tracking** — so "Test Me" mode avoids repeating cases a student has already completed
- **Difficulty progression** — introductory cases before advanced cases within a system
- **Search and filter** in the Pre-loaded Cases tab by difficulty, system, or chief complaint
- **Student notes** — ability to annotate illness scripts with personal study notes
- **Spaced repetition prompts** — surface illness scripts for review at intervals after a case is completed
