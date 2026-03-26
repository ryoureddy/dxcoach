import { loadIllnessScripts } from "@/lib/illness-scripts/server";
import AppShell from "@/components/AppShell";

export default function Home() {
  const illnessScripts = loadIllnessScripts();
  return <AppShell illnessScripts={illnessScripts} />;
}
