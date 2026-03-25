# DxCoach — Case Library
*Pre-built cases for clinical reasoning practice*

---

## How to Use This Document

Each case in this library is designed to be delivered through DxCoach's five-phase case flow (see System Instructions). Cases follow progressive disclosure — the triage snapshot is presented first, and history details are revealed only when the student asks the right questions.

Every case includes:
- **Teaching objective** — the core clinical reasoning skill being practiced
- **Illness scripts** — for both the primary diagnosis and the main competing diagnosis, for use in coaching and the Phase 5 teaching summary
- **Progressive disclosure history table** — what to reveal and only when asked
- **Physical exam and test results** — released at the appropriate phase
- **Core discriminators table** — the AI's coaching reference for the full case
- **Key teaching points** — for the Phase 5 summary

---

## Case 1: Acute Dyspnea — Pulmonary Embolism vs. Acute Decompensated Heart Failure

**Difficulty:** Intermediate
**Primary System:** Pulmonary / Cardiovascular
**Key Skills:** Illness script comparison, Virchow's triad, semantic qualifiers (acute vs. gradual onset, unilateral vs. bilateral), pertinent negatives, pre-test probability

**Teaching Objective:** Differentiate pulmonary embolism (PE) from acute decompensated heart failure (ADHF) in the evaluation of acute dyspnea. Emphasize the role of risk factor elicitation, discriminating exam findings, appropriate use of pre-test probability, and the diagnostic value of pertinent negatives.

---

### Illness Scripts (Coaching Reference)

| Component | PE Script | ADHF Script |
|---|---|---|
| **Enabling Conditions** | Recent surgery, prolonged immobility, long-distance travel, prior VTE, hypercoagulable state, active malignancy, pregnancy/postpartum, OCP use | Prior heart failure diagnosis, hypertension, ischemic heart disease, valvular disease, excessive sodium/fluid intake, medication non-adherence, EtOH use disorder, new arrhythmia |
| **Fault** | Thrombus occludes pulmonary artery → increased RV afterload → V/Q mismatch → hypoxemia disproportionate to lung exam findings | Impaired myocardial contractility or increased filling pressures → reduced cardiac output → pulmonary venous congestion → fluid transudation into alveoli |
| **Consequences** | Sudden-onset dyspnea, pleuritic chest pain (unilateral), clear lungs despite significant hypoxemia, unilateral warm/tender leg swelling, loud P2, sinus tachycardia, normal BNP, elevated D-dimer, possible S1Q3T3 on ECG | Gradual dyspnea, orthopnea, paroxysmal nocturnal dyspnea (PND), bilateral crackles, bilateral pitting edema, S3 gallop, elevated BNP, pulmonary edema and cardiomegaly on CXR |

---

### Phase 1 — Triage Snapshot

Present this to the student to open the case:

> Chief Complaint: *"I can't catch my breath."*
> **68-year-old male**
> HR 112 | RR 26 | BP 132/84 | SpO2 90% on room air

---

### Phase 2 — History (Progressive Disclosure)

Respond in character as the patient using natural, non-medical language. **Only reveal information the student specifically asks about.** Do not volunteer the bolded items unprompted — these are the case's critical discriminators.

| If the student asks about... | The patient says... |
|---|---|
| Onset / timing | "It came on suddenly — I was just sitting watching TV, about 3 hours ago." |
| Character of dyspnea | "Hard to take a deep breath. Hurts on the right side when I breathe in." |
| Chest pain | "Yeah, right side. Sharp. It's worse when I breathe in." |
| Orthopnea / PND | "No, I sleep flat just fine. I haven't been waking up at night." |
| **Leg swelling** | "Now that you mention it, my right leg has been swollen and sore for a few days. I just figured it was from sitting too much." |
| **Recent surgery** | "I had a knee replacement about 12 days ago. Right knee." |
| **Recent travel or immobility** | "I drove 6 hours to visit my daughter 2 days ago. Pretty uncomfortable with the knee." |
| Cardiac history | "No heart problems that I know of." |
| Cough | "No cough." |
| Fever / chills | "No fever." |
| **Medications** | "Pain meds from the surgery and a blood thinner they put me on — but I ran out a few days ago and haven't refilled it." |
| Smoking history | "I quit about 10 years ago." |
| Family history | "My mom had a blood clot in her leg once, I think." |
| Prior similar episodes | "Never had anything like this before." |

**Critical information NOT volunteered unprompted:** the recent knee surgery, the 6-hour car ride, the unilateral leg swelling, and the discontinued anticoagulation. These four elements collectively constitute Virchow's triad. The student must ask specifically for each.

**Coaching note (step out of patient role if student asks a key discriminating question):** *"[Out of role for a second — asking about leg swelling in a patient with acute dyspnea is exactly right. That's a direct discriminator. Now let's see what that answer does to your differential.] [Back in role...]"*

---

### Phase 3 — Physical Exam

Present these findings after the student completes history gathering:

- **Lungs:** Clear to auscultation bilaterally — no crackles, no wheeze
- **Heart:** Tachycardic. Loud P2. Possible RV heave at left sternal border. No S3. No JVD.
- **Extremities:** Right calf notably larger than left, warm to touch, tender to palpation. No bilateral pitting edema.
- **General:** Diaphoretic, appears uncomfortable and anxious

*Coaching note: the combination of clear lungs + significant hypoxemia (SpO2 90%) is a classic PE signal — hypoxemia out of proportion to the lung exam. Prompt the student: "Why is the oxygen saturation so low if the lungs sound clear? What does that physiology tell you?"*

---

### Phase 4 — Test Results

Release results in response to the student's test selections. If they order tests not listed here, acknowledge them and note they are pending or unrevealing.

| Test | Result |
|---|---|
| D-dimer | Elevated |
| BNP | Normal |
| CBC | WBC 10.2, Hgb 13.8, Plt 224 — within normal limits |
| BMP | Unremarkable |
| Troponin | Mildly elevated (reflecting RV strain) |
| CXR | No pulmonary edema, no infiltrates, no cardiomegaly — lungs clear |
| ECG | Sinus tachycardia; S1Q3T3 pattern consistent with right heart strain |
| CT Pulmonary Angiography | **Acute pulmonary embolism confirmed** — right lower lobe segmental arteries |

**D-dimer coaching note:** D-dimer has high sensitivity but low specificity. In a post-surgical patient, any elevation is expected and not diagnostically useful in isolation. Its value here is within the context of clinical pre-test probability (Wells score) — not as a standalone positive test.

---

### Core Discriminators (Coaching Reference)

| Feature | Favors PE | Favors ADHF |
|---|---|---|
| Onset | Sudden | Gradual (hours to days) |
| Chest pain | Pleuritic, sharp, unilateral | Absent or non-specific |
| Orthopnea / PND | Absent | Present — classic |
| Lung exam | Clear (disproportionate to hypoxemia) | Bilateral crackles, pulmonary edema |
| Leg swelling | Unilateral, warm, tender (DVT) | Bilateral, pitting, non-tender |
| Heart sounds | Loud P2, RV heave | S3 gallop, displaced PMI |
| Risk factors | Recent surgery, immobility, travel, anticoagulation lapse | Prior HF, fluid overload, med non-adherence |
| BNP | Normal (or mildly elevated from RV strain) | Markedly elevated |
| CXR | Often normal | Pulmonary edema, cardiomegaly, Kerley B lines |
| ECG | Sinus tach, S1Q3T3, right heart strain | LVH, LBBB, ischemic changes |

---

### Key Teaching Points (Phase 5 Summary)

1. **Virchow's triad was fully present** — stasis (6-hour car ride + post-surgical immobility), endothelial injury (surgical trauma to vessel walls), hypercoagulability (discontinued anticoagulation). When all three components are present in a patient with acute dyspnea, PE should be near the top of every differential.

2. **Hypoxemia out of proportion to the lung exam is a PE signature.** Clear lungs + low SpO2 = think vascular obstruction, not parenchymal disease. This is the physiology of V/Q mismatch.

3. **Pertinent negatives matter as much as positives here.** The absence of orthopnea, absence of S3, absence of bilateral edema, normal BNP, and clear CXR are collectively what rules out ADHF — not just the presence of PE features.

4. **D-dimer interpretation requires clinical context.** In a post-surgical patient, an elevated D-dimer is expected and meaningless on its own. The Wells Pre-Test Probability Score should be calculated first — it determines whether D-dimer adds diagnostic value or whether you go straight to CT-PA.

5. **The discontinued blood thinner is the pivotal detail.** Students who don't ask about medications will miss it. In practice, medication reconciliation — especially anticoagulation status — is one of the most important questions in any acute presentation.

---

## Case 2: *[Placeholder — Next Case]*

*Additional cases to be added as the library grows. Suggested next cases: acute chest pain (ACS vs. aortic dissection), altered mental status (septic encephalopathy vs. nonconvulsive status epilepticus), abdominal pain (appendicitis vs. ovarian pathology), headache (SAH vs. migraine with red flags).*

---

## Case Library Standards

All cases added to this library should follow the structure above and meet the following standards:

- The primary diagnosis and at least one compelling alternative must have distinguishable illness scripts
- Critical discriminating history details must be withheld unless specifically asked — never volunteered
- At least 3-4 key discriminators must be embedded across history and exam
- At least one misleading finding should be present (e.g., the elevated D-dimer post-surgery)
- The case must reward systematic, hypothesis-driven questioning — shotgun history-taking should leave gaps
- Vitals, demographics, and test results must be internally consistent and clinically realistic
- All patient dialogue must use natural, non-medical language
