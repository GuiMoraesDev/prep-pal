import { ExpertiseStep } from "./components/Steps/Expertise";
import { FormatStep } from "./components/Steps/Format";
import { SkillsStep } from "./components/Steps/Skills";

import { MultiStepForm } from "@/components/molecules/MultiStepForm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="flex max-w-96 flex-col items-center justify-center gap-10">
        <header className="flex flex-col gap-6">
          <h1 className="text-3xl">Prep pal</h1>

          <p className="text-sm">
            Prep pal is a meal planning app that helps you plan your meals and
            grocery list.
          </p>
        </header>

        <MultiStepForm>
          <ExpertiseStep />

          <SkillsStep />

          <FormatStep />
        </MultiStepForm>
      </div>
    </main>
  );
}
