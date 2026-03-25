// Knowledge file content for DxCoach
// Supplementary reference data: case content, OpenEvidence examples, and app context
// The system prompt (system-prompt.ts) contains the full behavioral instructions and case flow.

export const KNOWLEDGE_FILE = `# DxCoach Knowledge File
## Supplementary Reference: App Context, OpenEvidence Examples, and Case Data

---

## App Structure Context

DxCoach has three primary navigation tabs and one additional mode:

1. **Illness Script Library** — A browsable, student-facing library of curated illness scripts organized by organ system. Each entry contains the three-part illness script (Enabling Conditions, Fault, Consequences), key discriminators, an AMBOSS link, and a "Test Me With a Case" button that launches the associated pre-loaded case. Students use this for pre-case study and post-case review.

2. **Pre-loaded Cases** — A browsable library of practice cases organized by organ system and difficulty. The student knows the diagnosis going in. Their job is to walk through the complete reasoning chain.

3. **Test Me** — Randomized, blind practice mode. The student picks an organ system or chief complaint (or says "surprise me"), and a matching case from the curated library runs without revealing the diagnosis until Phase 5.

4. **Present to Your Attending** — The student presents a real (de-identified) case and gets coaching on structure, reasoning, and attending-readiness.

**Illness Script Library and Case Relationship:**
Each illness script has at most one associated practice case (1:1). A single illness script may appear as a competing diagnosis in multiple cases. Post-case, the app surfaces links to the top 3 illness scripts and an AMBOSS link for the primary diagnosis. The model should reference this in the Phase 5 resource handoff: *"Three illness scripts worth reviewing from this case: [Primary], [Competing 1], and [Competing 2]. You can find each in the Illness Script Library."*

---

## Detailed OpenEvidence Integration Examples

These examples supplement the five integration moments described in the system instructions.

**1. Discriminating between diagnoses (after history):**
"You've got PE and ADHF both on your list, and I can see why. Before we go further — step into OpenEvidence and search: 'What clinical features best discriminate between pulmonary embolism and acute decompensated heart failure?' Come back and tell me what you found and how it changes your ranking."

**2. Test selection uncertainty:**
"You're leaning toward D-dimer. Good instinct, but let's make sure that's the right move here. Search OpenEvidence: 'diagnostic accuracy of D-dimer in suspected PE with concurrent heart failure' — what does the evidence say about how useful it is in this specific clinical context?"

**3. Management verification:**
"You've committed to your diagnosis — now let's make sure the management is evidence-based. Check OpenEvidence for current guideline recommendations on initial management of [diagnosis]. What does the evidence say the first priorities should be?"

**4. Knowledge gap:**
"That's a great question and I could tell you, but this is exactly the kind of thing you'll need to look up in practice. Search OpenEvidence for it — the habit of knowing when to look something up is just as important as knowing the answer."

**5. Reasoning conflicts with evidence:**
"Interesting approach. I want you to gut-check that against the literature. Search OpenEvidence for [specific clinical question]. Does the evidence support what you're proposing?"

**Handling the return from a search:**
- If vague: "What specifically did you find? What was the sensitivity? Which patient population does that apply to?"
- If good: "Good find. How does that change your differential?"
- If conflicting with plan: "The evidence says [first-line treatment] — does that match what you had in your plan? If not, what would you change?"

---

## Present to Your Attending Mode — Detailed Guide

**Step 1: Ask for the presentation.**
Prompt the student to present as they would to an attending on rounds: problem representation, relevant history, key exam findings, differential (ranked with reasoning), proposed workup, and management plan.

**Step 2: Coach the presentation quality.**
Evaluate: problem representation clarity, information hierarchy, differential organization, and plan coherence.

**Step 3: Challenge the reasoning.**
- "If your attending asks why [diagnosis X] isn't on your list, what would you say?"
- "What's the most dangerous thing this could be, and how have you ruled it out?"
- "Walk me through your reasoning for [management decision]. What's the evidence behind that?"

**Step 4: Anticipate the pushback.**
- "What would change your mind about your top diagnosis?"
- "If [test] comes back [unexpected result], what's your next move?"
- "Why this treatment and not [alternative]?"

**Step 5: Focused feedback.**
End with three points only:
1. One thing that was strong about their presentation
2. One thing to tighten or reorganize
3. One clinical reasoning gap to address

Do NOT provide a full teaching summary in this mode.

---

## Pre-Loaded Cases

### Case 1: Acute Dyspnea — Pulmonary Embolism vs. Acute Decompensated Heart Failure

**Teaching Objective:** Differentiate pulmonary embolism (PE) from acute decompensated heart failure (ADHF) in the evaluation of acute dyspnea, emphasizing discriminators, pretest probability, and harm prevention.

**Triage Snapshot (Phase 1):**
Chief Complaint: "I can't catch my breath."
68-year-old male
Vitals: HR 112, RR 26, BP 132/84, SpO2 90% on room air

**History (Phase 2 — reveal ONLY when the student asks the right questions):**

The patient should be played in character using natural, non-medical language.

- Onset/timing: "It came on suddenly, about 3 hours ago. I was just sitting watching TV."
- Character of dyspnea: "It's hard to take a deep breath. It hurts on the right side when I breathe in."
- Chest pain: "Yeah, right side. Sharp. Worse when I breathe."
- Orthopnea/PND: "No, I sleep fine flat. I haven't been waking up at night."
- Leg swelling: "Now that you mention it, my right leg has been swollen and sore for a few days. I figured it was from sitting too much."
- Recent surgery: "I had a knee replacement about 12 days ago. Right knee."
- Recent travel/immobility: "I drove 6 hours to visit my daughter 2 days ago. Pretty uncomfortable with the knee."
- Cardiac history: "No heart problems that I know of."
- Cough: "No cough."
- Fever: "No fever."
- Medications: "Just the pain meds from the surgery and a blood thinner they gave me, but I ran out a few days ago."
- Smoking: "Quit 10 years ago."
- Prior similar episodes: "Never had anything like this."

Critical information the patient does NOT volunteer unprompted: the surgery, the car ride, the leg swelling, and the discontinued blood thinner. These are the key discriminators — the student must ask.

**Physical Exam (Phase 3):**
- Lungs: Clear to auscultation bilaterally
- Heart: Tachycardic, loud P2, possible RV heave. No S3.
- Extremities: Right calf larger than left, warm, tender. No bilateral edema.
- No JVD

**Test Results (Phase 4):**
- D-dimer: Elevated
- BNP: Normal
- CXR: No pulmonary edema, no infiltrates
- ECG: Sinus tachycardia, right heart strain pattern

**Final Disclosure:**
CT Pulmonary Angiography: Acute pulmonary embolus confirmed.

**Core Discriminators (for coaching reference):**

| Feature | Favors PE | Favors ADHF |
|---|---|---|
| Onset | Sudden | Gradual |
| Chest pain | Pleuritic, unilateral | Absent or diffuse |
| Orthopnea/PND | Absent | Present |
| Lung exam | Clear (hypoxemia out of proportion) | Crackles, pulmonary edema |
| Leg swelling | Unilateral | Bilateral |
| Heart sounds | Loud P2, RV heave | S3, displaced PMI |
| Risk factors | Recent surgery, immobility, travel | Prior HF, fluid overload, med non-adherence |
| BNP | Normal | Elevated |
| CXR | Often normal | Pulmonary edema, cardiomegaly |

**Key teaching points for this case:**
- Sudden onset dyspnea with clear lungs and hypoxemia out of proportion should always raise concern for PE
- Virchow's triad (stasis, endothelial injury, hypercoagulability) is present: recent surgery + immobility + discontinued anticoagulation
- D-dimer has high sensitivity but low specificity — an elevated D-dimer in a post-surgical patient is expected, so the clinical probability assessment (Wells score or similar) matters more than the D-dimer result alone
- The absence of ADHF findings (no orthopnea, no S3, no bilateral edema, no pulmonary edema on CXR, normal BNP) is just as important as the presence of PE findings

---

## Design Attribution

DxCoach was created by the AI in Medicine Club at Western University of Health Sciences as part of their mission to develop AI-literate physician advocates.`;
