// Pre-loaded case: Acute Dyspnea — Pulmonary Embolism vs. Acute Decompensated Heart Failure

export interface Case {
  id: string;
  title: string;
  subtitle: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  organSystems: string[];
  primaryDiagnosisId: string; // illness script id
  competingDiagnoses: string[]; // illness script ids for top competing diagnoses
  casePrompt: string;
}

export const PE_VS_ADHF: Case = {
  id: "pe-vs-adhf",
  title: "Acute Dyspnea: PE vs ADHF",
  subtitle: "68-year-old male with sudden shortness of breath",
  difficulty: "Intermediate",
  organSystems: ["Pulmonary", "Cardiovascular"],
  primaryDiagnosisId: "pe",
  competingDiagnoses: ["adhf", "pneumonia"],

  // This gets injected as the first hidden user message to kick off the case
  casePrompt: `The student has selected a pre-loaded case. Here is the full case data:

Teaching Objective: Differentiate pulmonary embolism (PE) from acute decompensated heart failure (ADHF) in the evaluation of acute dyspnea, emphasizing discriminators, pretest probability, and harm prevention.

TRIAGE SNAPSHOT (present this in Phase 1):
Chief Complaint: "I can't catch my breath."
68-year-old male
Vitals: HR 112, RR 26, BP 132/84, SpO2 90% on room air

HISTORY (Phase 2 — reveal ONLY when the student asks the right questions. Play the patient in character with natural, non-medical language):
- If asked about onset/timing: "It came on suddenly, about 3 hours ago. I was just sitting watching TV."
- If asked about character of dyspnea: "It's hard to take a deep breath. It hurts on the right side when I breathe in."
- If asked about chest pain: "Yeah, right side. Sharp. Worse when I breathe."
- If asked about orthopnea/PND: "No, I sleep fine flat. I haven't been waking up at night."
- If asked about leg swelling: "Now that you mention it, my right leg has been swollen and sore for a few days. I figured it was from sitting too much."
- If asked about recent surgery: "I had a knee replacement about 12 days ago. Right knee."
- If asked about recent travel/immobility: "I drove 6 hours to visit my daughter 2 days ago. Pretty uncomfortable with the knee."
- If asked about cardiac history: "No heart problems that I know of."
- If asked about cough: "No cough."
- If asked about fever: "No fever."
- If asked about medications: "Just the pain meds from the surgery and a blood thinner they gave me, but I ran out a few days ago."
- If asked about smoking: "Quit 10 years ago."
- If asked about prior similar episodes: "Never had anything like this."

CRITICAL: The surgery, the car ride, the leg swelling, and the discontinued blood thinner are NOT volunteered unprompted. The student must ask.

PHYSICAL EXAM (Phase 3 — present when student is ready):
- Lungs: Clear to auscultation bilaterally
- Heart: Tachycardic, loud P2, possible RV heave. No S3.
- Extremities: Right calf larger than left, warm, tender. No bilateral edema.
- No JVD

TEST RESULTS (Phase 4 — present when student selects tests):
- D-dimer: Elevated
- BNP: Normal
- CXR: No pulmonary edema, no infiltrates
- ECG: Sinus tachycardia, right heart strain pattern
- CT Pulmonary Angiography (if ordered): Acute pulmonary embolus confirmed.

CORE DISCRIMINATORS (your coaching reference — do not share directly):
- Sudden onset → favors PE over ADHF (gradual)
- Pleuritic unilateral chest pain → PE
- No orthopnea/PND → against ADHF
- Clear lungs with hypoxemia out of proportion → PE
- Unilateral calf swelling → DVT/PE
- Loud P2, RV heave, no S3 → PE (not ADHF)
- Virchow's triad present: surgery (endothelial injury) + immobility/travel (stasis) + discontinued anticoagulation (hypercoagulability)
- Normal BNP → against ADHF
- Normal CXR → against ADHF

KEY TEACHING POINTS (for Phase 5 summary):
- Sudden onset dyspnea with clear lungs and hypoxemia out of proportion should always raise concern for PE
- Virchow's triad is fully present here
- D-dimer has high sensitivity but low specificity — elevated in any post-surgical patient; Wells score matters more than D-dimer alone
- Absence of ADHF findings is as important as presence of PE findings

Begin with Phase 1 — present only the triage snapshot and ask for the student's problem representation and initial hypotheses.`,
};

// Registry of all available cases
export const CASES: Case[] = [PE_VS_ADHF];
