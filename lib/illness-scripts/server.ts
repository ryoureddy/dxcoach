// Server-only: reads and parses illness script markdown files from "Illness Scripts/"
// Must only be imported from server components or API routes

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { IllnessScript } from "./types";

// --- Markdown parsing helpers ---

/** Extract the body text under a given ## heading, stopping at the next ## or EOF */
function extractSection(markdown: string, heading: string): string {
  const escapedHeading = heading.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const regex = new RegExp(
    `^## ${escapedHeading}\\s*\\n([\\s\\S]*?)(?=^## |\\Z)`,
    "m"
  );
  const match = markdown.match(regex);
  return match ? match[1].trim() : "";
}

/** Parse a bulleted section into an array of strings (strips leading `- ` or `* `) */
function extractBulletList(markdown: string, heading: string): string[] {
  const section = extractSection(markdown, heading);
  if (!section) return [];
  return section
    .split("\n")
    .map((line) => line.replace(/^[-*]\s+/, "").trim())
    .filter(Boolean);
}

/** Parse numbered list items (strips leading `1. `, `2. `, etc.) */
function extractNumberedList(markdown: string, heading: string): string[] {
  const section = extractSection(markdown, heading);
  if (!section) return [];
  return section
    .split("\n")
    .map((line) => line.replace(/^\d+\.\s+/, "").trim())
    .filter(Boolean);
}

/** Load all illness scripts from the "Illness Scripts/" directory */
export function loadIllnessScripts(): IllnessScript[] {
  const scriptsDir = path.join(process.cwd(), "Illness Scripts");

  if (!fs.existsSync(scriptsDir)) {
    console.warn(`Illness Scripts directory not found at ${scriptsDir}`);
    return [];
  }

  const files = fs
    .readdirSync(scriptsDir)
    .filter((f) => f.endsWith(".md"))
    .sort();

  return files.map((file) => {
    const raw = fs.readFileSync(path.join(scriptsDir, file), "utf-8");
    const { data, content } = matter(raw);

    return {
      id: data.id,
      diagnosis: data.diagnosis,
      organSystems: data.organSystems ?? [],
      pathophysiology: extractSection(content, "Pathophysiology"),
      epidemiology: extractSection(content, "Epidemiology"),
      timeCourse: extractSection(content, "Time Course"),
      salientSymptomsAndSigns: extractSection(
        content,
        "Salient Symptoms & Signs"
      ),
      diagnostics: extractSection(content, "Diagnostics"),
      treatment: extractSection(content, "Treatment"),
      keyDiscriminators: extractBulletList(content, "Key Discriminators"),
      diseaseMimickers: extractBulletList(content, "Disease Mimickers"),
      sources: extractNumberedList(content, "Sources"),
      ambossUrl: data.ambossUrl ?? "",
      associatedCaseId: data.associatedCaseId ?? null,
    };
  });
}
