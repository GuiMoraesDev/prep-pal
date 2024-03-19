import { StepWrapper } from "@/components/molecules/MultiStepForm";

export const SkillsStep = () => (
  <StepWrapper
    title="Interview skills"
    description="It will determine which type of question will be asked in the interview."
  >
    <div className="flex w-full flex-col gap-6">
      <p>Train soft or hard skills</p>

      <section className="flex items-center justify-center gap-6">
        <label className="flex cursor-pointer gap-4 rounded-md border-2 border-plum-300 p-4 transition hover:bg-plum-50">
          Hard skills
          <input
            type="radio"
            id="hard-skills"
            value="hard-skills"
            name="skills"
            defaultChecked
          />
        </label>

        <label className="flex cursor-pointer gap-4 rounded-md border-2 border-plum-300 p-4 transition hover:bg-plum-50">
          Soft skills
          <input
            type="radio"
            id="soft-skills"
            value="soft-skills"
            name="skills"
          />
        </label>
      </section>
    </div>
  </StepWrapper>
);
