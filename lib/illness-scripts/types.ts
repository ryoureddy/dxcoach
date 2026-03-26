// Shared type — safe to import from both server and client code

export interface IllnessScript {
  id: string;
  diagnosis: string;
  organSystems: string[];
  pathophysiology: string;
  epidemiology: string;
  timeCourse: string;
  salientSymptomsAndSigns: string;
  diagnostics: string;
  treatment: string;
  keyDiscriminators: string[];
  diseaseMimickers: string[];
  sources: string[];
  ambossUrl: string;
  associatedCaseId: string | null;
}
