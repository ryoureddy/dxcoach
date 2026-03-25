// Illness Script Library — curated mental models for each diagnosis
// Each entry covers: enabling conditions, fault (pathophysiology), and consequences (presentation)

export interface IllnessScript {
  id: string;
  diagnosis: string;
  organSystems: string[];
  enablingConditions: string;
  fault: string;
  consequences: string;
  keyDiscriminators: string[];
  ambossUrl: string; // empty string = no link yet
  associatedCaseId: string | null; // null = no dedicated practice case yet
}

export const ILLNESS_SCRIPTS: IllnessScript[] = [
  {
    id: "pe",
    diagnosis: "Pulmonary Embolism",
    organSystems: ["Pulmonary", "Cardiovascular"],
    enablingConditions:
      "Patients with Virchow's triad: stasis (prolonged immobility, long travel, bed rest), endothelial injury (recent surgery — especially orthopedic — or trauma), and hypercoagulability (malignancy, OCP use, inherited thrombophilia, pregnancy, prior VTE, or discontinued anticoagulation). Classic high-risk profile: older adult, recent orthopedic surgery, post-op immobility or long car ride, unilateral leg swelling.",
    fault:
      "A thrombus — most often from a deep vein thrombosis — dislodges and lodges in the pulmonary vasculature, obstructing blood flow to a segment of lung. This increases right ventricular afterload (RV must pump against the obstruction), causes V/Q mismatch (ventilated lung but no perfusion), and produces hypoxemia disproportionate to the degree of respiratory distress. In massive PE, RV failure and obstructive shock can follow.",
    consequences:
      "Sudden-onset dyspnea, pleuritic chest pain (unilateral, sharp, worse with inspiration), tachycardia, hypoxemia out of proportion to exam. Lungs are clear to auscultation. Heart exam may reveal loud P2, RV heave, or signs of RV strain. Unilateral calf swelling or tenderness (DVT source). BNP normal (distinguishes from ADHF). CXR often normal. ECG may show sinus tachycardia or S1Q3T3 (RV strain). D-dimer elevated but nonspecific; Wells score guides whether CTPA is needed.",
    keyDiscriminators: [
      "Sudden onset of dyspnea (vs. gradual in ADHF)",
      "Pleuritic, unilateral chest pain (vs. absent or diffuse in ADHF)",
      "Clear lungs despite severe hypoxemia — hypoxemia out of proportion",
      "Unilateral leg swelling/DVT (vs. bilateral in ADHF)",
      "Normal BNP and normal CXR (both elevated/abnormal in ADHF)",
      "Loud P2 or RV heave (vs. S3 and displaced PMI in ADHF)",
      "Virchow's triad identifiable in the history",
    ],
    ambossUrl: "",
    associatedCaseId: "pe-vs-adhf",
  },
  {
    id: "adhf",
    diagnosis: "Acute Decompensated Heart Failure",
    organSystems: ["Cardiovascular", "Pulmonary"],
    enablingConditions:
      "Patients with known heart failure (HFrEF or HFpEF), prior myocardial infarction, hypertension, or valvular disease. Decompensation is triggered by: medication non-adherence (diuretics, ACE inhibitors), dietary sodium/fluid excess, new arrhythmia (especially atrial fibrillation), acute ischemia, infection, or worsening renal function. Most common presentation is volume overload.",
    fault:
      "Reduced cardiac output or elevated left ventricular filling pressures lead to pulmonary venous congestion — fluid backs up from the left heart into the pulmonary capillaries, crossing into the alveoli. This cardiogenic pulmonary edema impairs gas exchange, causing dyspnea and hypoxemia. Systemic venous congestion also causes bilateral peripheral edema and JVD.",
    consequences:
      "Gradual onset dyspnea (over hours to days), orthopnea (dyspnea when lying flat), paroxysmal nocturnal dyspnea, bilateral leg edema. On exam: bilateral crackles (pulmonary edema), S3 gallop, JVD, displaced PMI. BNP markedly elevated. CXR shows cardiomegaly, bilateral infiltrates/pulmonary edema, possible pleural effusions. Tachycardia may be present. History of prior HF, cardiac disease, or recent medication changes is common.",
    keyDiscriminators: [
      "Gradual onset over hours to days (vs. sudden in PE)",
      "Orthopnea and paroxysmal nocturnal dyspnea — positional dyspnea",
      "Bilateral leg edema (vs. unilateral in PE/DVT)",
      "Bilateral crackles on lung exam (vs. clear lungs in PE)",
      "S3 gallop, displaced PMI (vs. loud P2, RV heave in PE)",
      "Elevated BNP (vs. normal in PE)",
      "CXR showing cardiomegaly and pulmonary edema (vs. normal CXR in PE)",
    ],
    ambossUrl: "",
    associatedCaseId: null,
  },
  {
    id: "pneumonia",
    diagnosis: "Community-Acquired Pneumonia",
    organSystems: ["Pulmonary", "Infectious Disease"],
    enablingConditions:
      "Elderly, immunocompromised patients, smokers, aspiration risk (dysphagia, altered consciousness, alcoholism), nursing home residents, or patients with recent viral illness. Most common causative organisms: Streptococcus pneumoniae (lobar), atypicals (Mycoplasma, Chlamydophila — especially young adults, 'walking pneumonia'), and Legionella (exposure to water systems, air conditioning).",
    fault:
      "Bacterial or viral infection of the alveoli triggers an inflammatory response — neutrophil infiltration and exudate fill the air spaces (consolidation). This creates an intrapulmonary shunt (perfused but not ventilated lung) producing hypoxemia. The systemic inflammatory response causes fever, chills, and leukocytosis.",
    consequences:
      "Subacute onset over hours to days. Productive cough (purulent sputum) or dry cough in atypicals. Fever, chills, rigors. Dyspnea. Pleuritic chest pain if lobar (focal inflammation reaches pleura). On exam: dullness to percussion, decreased breath sounds or bronchial breath sounds over consolidation, crackles. CXR shows lobar or patchy consolidation. Leukocytosis. May be afebrile in elderly/immunocompromised. No unilateral leg swelling. No orthopnea.",
    keyDiscriminators: [
      "Fever (typically absent or mild in PE and ADHF)",
      "Productive cough (uncommon in PE; dry cough may occur in ADHF)",
      "Subacute onset over hours to days (vs. sudden in PE)",
      "CXR consolidation — lobar or patchy (vs. normal in PE, pulmonary edema in ADHF)",
      "Crackles or dullness over a focal lung zone (vs. bilateral crackles in ADHF or clear in PE)",
      "Leukocytosis with left shift",
      "No Virchow's triad, no orthopnea, no BNP elevation",
    ],
    ambossUrl: "",
    associatedCaseId: null,
  },
];

// Helper: look up a script by id
export function getIllnessScriptById(id: string): IllnessScript | undefined {
  return ILLNESS_SCRIPTS.find((s) => s.id === id);
}
