# AI-Enhanced Clinical Reasoning Workshop
## DxCoach Pilot Session | AI in Medicine Club
### Western University of Health Sciences

---

## Workshop Overview

**Duration:** 60 minutes
**Setting:** Simulation suite
**Format:** Whole-room, facilitator-led, single case
**Case:** Acute dyspnea — Pulmonary Embolism vs. Acute Decompensated Heart Failure
**Tools Used:** DxCoach (custom GPT), OpenEvidence
**Audience:** M1 medical students (no prior clinical reasoning training assumed)

**What Students Walk Away With:**
1. Experience with a disciplined clinical reasoning process (problem representation, differential updating, discriminating tests)
2. A framework for using AI as a reasoning partner, not an answer machine
3. Access to DxCoach for independent practice with any case

---

## Educational Design Principles

This workshop is built on three evidence-based principles from the clinical reasoning literature:

**Students commit to their thinking before consulting any AI tool.** Research shows that unstructured AI use during clinical reasoning does not improve diagnostic performance. Structured integration — where the clinician forms their own assessment first, then uses AI for critique and reflection — consistently yields better outcomes.

**Evidence before AI opinion.** Clinicians reach for OpenEvidence or UpToDate to answer specific clinical questions under uncertainty. Students practice this habit before consulting DxCoach, mirroring the real clinical workflow: human reasoning first, targeted evidence second, AI coaching third.

**AI coaches the process, not the answer.** DxCoach never provides a diagnosis during the case. It critiques reasoning quality, challenges test selection, identifies bias risks, and audits management plans. The student always owns the final decision.

---

## Facilitator Roles

**Facilitator 1 (Lead):** Runs the session, controls pacing, manages transitions between phases, leads whole-room discussion at each decision point. This person keeps the energy up and the room moving.

**Facilitator 2 (Patient Actor):** Plays the patient during the history-taking phase. Stays in character, responds only to what students specifically ask, uses natural non-medical language. Steps out of character after history is complete.

**Facilitator 3 (DxCoach Operator):** Manages the DxCoach GPT on a projected screen during Phase 5. Types the room's consensus reasoning into DxCoach and reads the coaching response aloud. This keeps the interaction visible to everyone and prevents the session from fragmenting into individual phone screens.

*Note: Facilitators 1 and 3 can be the same person if needed. Facilitator 2 should be a separate person so the patient interaction feels distinct from the teaching voice.*

---

## Room Setup

- Screen or projector visible to all students (for DxCoach interaction and OpenEvidence display)
- Whiteboard or large sticky pad at the front of the room for tracking the group differential
- Each student has a one-page Reasoning Tracker handout (see appendix)
- Each student has their phone or laptop for OpenEvidence access during Phase 4
- DxCoach GPT loaded on the projected laptop, ready to go

---

## Pre-Session Preparation

**For Facilitators:**
- Run through the full case in DxCoach at least once to familiarize yourself with the coaching responses and flow
- Facilitator 2 reviews the patient script (see Case Materials section) and practices staying in character
- Pre-load DxCoach on the projection laptop and confirm it's working
- Pre-load OpenEvidence on the projection laptop as backup
- Print Reasoning Tracker handouts (one per student)
- Write on the whiteboard: "Your Thinking First. Evidence Second. AI Third."

**For Students (no pre-work required):**
- Students arrive with no advance preparation — the workshop is designed to be self-contained
- Optional: share the DxCoach GPT link in advance so students can bookmark it for later use

---

## Workshop Flow (60 Minutes)

---

### PHASE 1: Framing and Triage Snapshot (7 minutes)

**[0:00 - 0:03] Opening Frame (3 min)**

The lead facilitator sets context. This should be brief and energizing, not a lecture.

Key points to hit:
- "Today you're going to work through a clinical case the way you will as physicians — but with a new tool in your toolkit."
- "We're going to practice a disciplined process: you think first, you gather evidence, and then you consult an AI coach called DxCoach for feedback on your reasoning."
- "DxCoach will never give you the answer. It's going to challenge you, push back on your thinking, and help you find your blind spots. Think of it like presenting to a really good senior resident."
- Point to the whiteboard: "This is the hierarchy we follow today. Your thinking first. Evidence second. AI third."
- "At the end, you'll have access to DxCoach on your own to practice with any case you want."

Hand out the Reasoning Tracker.

**[0:03 - 0:07] Triage Snapshot (4 min)**

The lead facilitator presents the triage card to the room:

> **Chief Complaint:** "I can't catch my breath."
> **Patient:** 68-year-old male
> **Vitals:** HR 112, RR 26, BP 132/84, SpO2 90% on room air

Facilitator prompt to the room:
*"Alright — this is all you know. On your Reasoning Tracker, write down two things: a one-sentence problem representation using clinical language, and your top 2-3 hypotheses. You have 90 seconds."*

After 90 seconds, take 2-3 volunteers to share their problem representations. Coach briefly on semantic qualifiers if needed:
*"I heard 'he can't breathe.' Can we tighten that up? What's the acuity? What do the vitals tell us about severity?"*

Target problem representation: *"68-year-old male presenting with acute-onset dyspnea, tachycardic, tachypneic, and hypoxemic."*

Collect differentials from the room and write the top 4-5 on the whiteboard. Common answers will include PE, ADHF, pneumonia, COPD exacerbation, pneumothorax. All are reasonable at this stage.

Facilitator: *"Good list. Now — what don't we know yet that would help us narrow this down? What questions would you want to ask this patient?"*

Take 2-3 responses. This transitions naturally into Phase 2.

---

### PHASE 2: History Taking — Patient Encounter (12 minutes)

**[0:07 - 0:19]**

Facilitator 2 steps into character as the patient. The lead facilitator acts as the "attending" managing the interaction.

Lead facilitator to the room: *"Your patient is right here. Who wants to start? Ask him what you need to know."*

**How this runs:**
- Students raise hands or call out questions to the patient
- Facilitator 2 (patient) responds in character based on the script below
- The lead facilitator can redirect or prompt if the room gets stuck: *"We've covered the chest pain — what about risk factors? What in this patient's recent history might matter?"*
- After strong discriminating questions, the lead facilitator can briefly flag it for the room: *"Good question — hold onto that answer. It's going to matter."*

**Patient Script — Key History Points:**

The patient should reveal the following information ONLY when specifically asked:

| If students ask about... | Patient reveals... |
|---|---|
| Onset/timing | "It came on suddenly, about 3 hours ago. I was just sitting watching TV." |
| Character of dyspnea | "It's hard to take a deep breath. It hurts on the right side when I breathe in." |
| Chest pain | "Yeah, right side. Sharp. Worse when I breathe." |
| Orthopnea/PND | "No, I sleep fine flat. I haven't been waking up at night." |
| Leg swelling | "Now that you mention it, my right leg has been swollen and sore for a few days. I figured it was from sitting too much." |
| Recent surgery | "I had a knee replacement about 12 days ago. Right knee." |
| Recent travel/immobility | "I drove 6 hours to visit my daughter 2 days ago. Pretty uncomfortable with the knee." |
| Cardiac history | "No heart problems that I know of." |
| Cough | "No cough." |
| Fever | "No fever." |
| Medications | "Just the pain meds from the surgery and a blood thinner they gave me, but I ran out a few days ago." |
| Smoking | "Quit 10 years ago." |
| Prior similar episodes | "Never had anything like this." |

**What the patient does NOT volunteer unprompted:** The surgery, the car ride, the leg swelling, and the discontinued blood thinner. These are the critical discriminators and students must ask the right questions to uncover them.

**At the 10-minute mark** (or when history feels complete), the lead facilitator calls time:
*"Good work. Let's step out of the patient room for a moment. On your Reasoning Tracker, update your differential. What moved up? What moved down? What's the most important thing you just learned?"*

Take 2-3 responses. Update the whiteboard differential.

---

### PHASE 3: OpenEvidence Search (6 minutes)

**[0:19 - 0:25]**

This is the evidence-gathering phase. Students search OpenEvidence before any AI coaching.

Lead facilitator: *"Before we consult our AI coach, let's do what clinicians actually do in practice — look up the evidence. You've got two strong diagnoses competing on the board: PE and heart failure. Pull out your phones, open OpenEvidence, and search for: 'What clinical features best discriminate between pulmonary embolism and acute decompensated heart failure in acute dyspnea?' You've got 3 minutes."*

While students search, the lead facilitator can project an OpenEvidence search on the main screen so everyone can see the interface and results.

**At the 3-minute mark,** facilitate a brief share-out:
*"What did you find? What discriminators does the evidence highlight?"*

Key findings students should surface:
- Sudden onset favors PE; gradual progression favors ADHF
- Pleuritic chest pain favors PE
- Orthopnea/PND favors ADHF
- Unilateral leg swelling favors PE
- Clear lungs with hypoxemia out of proportion favors PE
- S3 and bilateral edema favor ADHF

Facilitator: *"Now look at our whiteboard. Based on what the evidence says AND what our patient told us — does your ranking change?"*

Update the whiteboard. By this point, PE should be climbing the list for most students.

*"Great. You've done your own thinking, you've gathered evidence. Now let's get a second opinion."*

This transitions into Phase 4.

---

### PHASE 4: Physical Exam + DxCoach Consult (15 minutes)

**[0:25 - 0:40]**

This is the core integration moment — where students experience DxCoach as a reasoning partner for the first time.

**[0:25 - 0:28] Physical Exam Disclosure (3 min)**

Lead facilitator presents exam findings (no longer in patient character — this is clinical information delivery):

> **Physical Exam Findings:**
> - Lungs: Clear to auscultation bilaterally
> - Heart: Tachycardic, loud P2, possible RV heave. No S3.
> - Extremities: Right calf larger than left, warm, tender. No bilateral edema.
> - No JVD

Facilitator: *"Update your Reasoning Tracker one more time. Based on the exam, what's your top diagnosis and why? And what ONE test would you order to confirm it? Write it down — you need to commit before we present to DxCoach."*

Give 90 seconds. Take 2-3 responses from the room. The whiteboard should now clearly reflect the group's thinking.

**[0:28 - 0:40] DxCoach Consult (12 min)**

Lead facilitator: *"Alright. Let's present our case to DxCoach and see what it thinks about our reasoning."*

Facilitator 3 (or the lead facilitator) types the group's reasoning into DxCoach on the projected screen. The whole room watches. This is intentionally a shared experience, not individual phone use.

**The prompt to DxCoach should include:**

The facilitator narrates as they type, modeling how to present to an AI reasoning coach:
*"I'm going to type in our problem representation, our differential, the key evidence we found, our exam findings, and the test we want to order. Watch how I frame this — this is exactly how you'd present to a senior resident."*

Example input:
> "Here's our case. 68-year-old male with acute-onset dyspnea, tachycardia, tachypnea, and hypoxemia. Pleuritic right-sided chest pain. Recent knee replacement 12 days ago, 6-hour car ride 2 days ago, discontinued anticoagulation. No orthopnea or PND. Exam shows clear lungs, loud P2, possible RV heave, unilateral right calf swelling, no S3, no bilateral edema.
>
> Our differential: PE is our top diagnosis, with ADHF as the main alternative. We deprioritized ADHF based on absence of orthopnea, clear lungs, no S3, no bilateral edema, and normal BNP would be expected.
>
> We want to order a D-dimer. Critique our reasoning."

**Read DxCoach's response aloud to the room.** Pause after each coaching point and engage the room:
- *"DxCoach just challenged our D-dimer choice. What do we think — is it right?"*
- *"It flagged a potential bias. Do we agree? Did we anchor too early?"*
- *"It's asking about our physiological reasoning for the test. Who can explain that?"*

If DxCoach suggests an OpenEvidence search (e.g., on D-dimer utility in post-surgical patients), do it live on screen.

**Continue the conversation with DxCoach** based on the room's responses. Type follow-ups, read responses, discuss. This should feel like a live, dynamic interaction — not a scripted checkpoint.

After 2-3 exchanges with DxCoach, the facilitator moves to test results.

---

### PHASE 5: Results, Diagnosis, and Management (8 minutes)

**[0:40 - 0:48]**

**[0:40 - 0:42] Test Results (2 min)**

Lead facilitator presents results:

> **Test Results:**
> - D-dimer: Elevated
> - BNP: Normal
> - CXR: No pulmonary edema, no infiltrates
> - ECG: Sinus tachycardia, right heart strain pattern

Facilitator: *"Based on these results, commit to your final diagnosis and a management plan on your Reasoning Tracker. No dosing — just priorities. What do you do first, what are you watching for, and what could go wrong? 90 seconds."*

**[0:42 - 0:45] Room Discussion (3 min)**

Take the room's final diagnosis (PE should be consensus) and management plan. Write the key management points on the whiteboard.

**[0:45 - 0:48] DxCoach Safety Audit (3 min)**

Type the group's management plan into DxCoach and ask for a safety audit:

> "We've diagnosed PE. Our management plan is: [room's plan]. Audit this for potential harm. What could go wrong if we're wrong, and what should we be watching for?"

Read the response aloud. Discuss any gaps DxCoach identifies.

Then the facilitator presents the final disclosure:

> **CT Pulmonary Angiography: Acute pulmonary embolus confirmed.**

---

### PHASE 6: Debrief and Takeaway (12 minutes)

**[0:48 - 1:00]**

This phase has two parts: reflecting on the process and equipping students to replicate it independently.

**[0:48 - 0:54] Reflection Debrief (6 min)**

Lead facilitator runs a focused debrief. Keep it conversational, not lecture-style.

Four questions (pick 2-3 based on time):

1. *"Where in this case was AI actually helpful? Where did DxCoach push your thinking in a direction you wouldn't have gone on your own?"*

2. *"Where could AI have misled you? If DxCoach had told you something wrong, would you have caught it? What's your responsibility as the clinician?"*

3. *"How did the OpenEvidence search change your thinking? Was there a moment where the evidence moved your differential?"*

4. *"Think about the order we followed today: your thinking first, evidence second, AI coaching third. Why does that order matter? What happens if you skip straight to AI?"*

The facilitator should connect student responses to the bigger picture:
*"This is the skill that's going to matter in your career. AI tools are going to get better and more integrated into clinical practice. The physicians who thrive will be the ones who know how to think WITH these tools without becoming dependent on them. That's what we practiced today."*

**[0:54 - 1:00] The Takeaway: Your Personal System (6 min)**

Lead facilitator: *"Everything we did today — you can do on your own with any case. Here's how."*

Walk through three concrete takeaways:

**1. DxCoach is yours to keep.**
Share the GPT link (QR code on screen or printed on the Reasoning Tracker).
*"This is a custom GPT we built. You can bring it any case — from CMR, from a practice question, from something you saw on rotations — and it will walk you through the same process we did today. You think first, it coaches second."*

**2. The workflow you practiced today works for any case.**
Point to the whiteboard hierarchy: Your Thinking First. Evidence Second. AI Third.
*"When you're studying and hit a case you're unsure about: write your problem representation and differential first. Search OpenEvidence for discriminators. Then present to DxCoach and see where your reasoning has gaps. This is a 15-minute exercise you can do anytime."*

**3. OpenEvidence is your evidence tool. DxCoach is your reasoning coach. They serve different purposes.**
*"OpenEvidence answers clinical questions with cited evidence. DxCoach critiques your thinking process. Use both, but don't confuse them. If you need a fact, search the evidence. If you need feedback on your reasoning, present to DxCoach."*

Close: *"This workshop was brought to you by the AI in Medicine Club. If you want to go deeper — how AI is changing clinical practice, how to evaluate AI tools, how to become an informed voice in healthcare AI policy — come find us."*

---

## Case Materials Appendix

### Student Reasoning Tracker (One-Page Handout)

**AI-Enhanced Clinical Reasoning Workshop | AI in Medicine Club**

*Your Thinking First. Evidence Second. AI Third.*

**DxCoach Access:** [QR Code / Link]

---

**TRIAGE SNAPSHOT**

My Problem Representation (1-2 sentences, use clinical language):

_______________________________________________

My Top 3 Hypotheses:
1. _______________ Because: _______________
2. _______________ Because: _______________
3. _______________ Because: _______________

One thing I need to know to discriminate: _______________

---

**AFTER HISTORY**

What moved UP on my differential? _______________
What moved DOWN? _______________
Most important discriminator from the history: _______________

---

**OPENEVIDENCE SEARCH**

I searched for: _______________
Key finding: _______________
How this changes my thinking: _______________

---

**AFTER EXAM**

My #1 diagnosis: _______________
One test I would order: _______________
Why this test discriminates: _______________

---

**DXCOACH FEEDBACK**

What DxCoach challenged: _______________
Do I agree or disagree? Why? _______________

---

**FINAL DIAGNOSIS:** _______________

**Management priorities (no dosing):**
1. _______________
2. _______________
3. _______________

**What could go wrong if I'm wrong:** _______________

---

**REFLECTION**

Where was my reasoning strongest? _______________
Where could AI mislead me? _______________
What will I do differently next time? _______________

---

### Core Discriminators Reference (Facilitator Only)

| Feature | Favors PE | Favors ADHF |
|---|---|---|
| Onset | Sudden | Gradual |
| Chest pain | Pleuritic, unilateral | Absent or diffuse |
| Orthopnea/PND | Absent | Present |
| Lung exam | Clear (hypoxemia out of proportion) | Crackles, pulmonary edema |
| Leg swelling | Unilateral | Bilateral |
| Heart sounds | Loud P2, RV heave | S3, displaced PMI |
| Risk factors | Recent surgery, immobility, travel, DVT history | Prior HF, fluid overload, medication non-adherence |
| BNP | Normal | Elevated |
| CXR | Often normal or wedge-shaped opacity | Pulmonary edema, cardiomegaly |

---

## Facilitator Preparation Checklist

**One week before:**
- [ ] Run through the full case in DxCoach to familiarize yourself with the coaching flow
- [ ] Confirm simulation suite booking and AV setup (projector, screen)
- [ ] Print Reasoning Tracker handouts
- [ ] Assign facilitator roles (Lead, Patient Actor, DxCoach Operator)
- [ ] Brief Facilitator 2 on the patient script — do a quick run-through

**Day of:**
- [ ] Write "Your Thinking First. Evidence Second. AI Third." on whiteboard
- [ ] Load DxCoach GPT on projection laptop and test
- [ ] Load OpenEvidence on projection laptop
- [ ] Set up whiteboard space for tracking group differential
- [ ] Display DxCoach QR code on screen or printed handouts
- [ ] Have Reasoning Trackers at each seat

**After the workshop:**
- [ ] Collect Reasoning Trackers (optional, for assessment/feedback)
- [ ] Send follow-up with DxCoach link and one-page summary of the reasoning workflow
- [ ] Collect student feedback (brief survey)
- [ ] Debrief with facilitator team on what worked and what to adjust

---

## Timing Summary

| Phase | Activity | Duration | Running Total |
|---|---|---|---|
| 1 | Framing + Triage Snapshot | 7 min | 0:07 |
| 2 | History Taking (Patient Encounter) | 12 min | 0:19 |
| 3 | OpenEvidence Search | 6 min | 0:25 |
| 4 | Physical Exam + DxCoach Consult | 15 min | 0:40 |
| 5 | Results, Diagnosis, Management | 8 min | 0:48 |
| 6 | Debrief + Takeaway | 12 min | 1:00 |

---

## Design Attribution

This workshop was created by the AI in Medicine Club at Western University of Health Sciences as part of their mission to develop AI-literate physician advocates through an Education, Action, and Advocacy framework. DxCoach was purpose-built by the club to train medical students in responsible AI use for clinical reasoning.

For questions, partnership inquiries, or to adapt this workshop for your institution, contact club leadership.
