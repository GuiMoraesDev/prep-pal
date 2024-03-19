import { StepWrapper } from "@/components/molecules/MultiStepForm";

export const ExpertiseStep = () => (
  <StepWrapper
    title="Your expertise level"
    description="It will determine your proficiency level and the relevant skills for the
  job"
  >
    <label className="w-full">
      <p>Years of experience</p>

      <input
        type="number"
        min={0}
        max={80}
        className="w-full rounded-md border border-plum-300 p-2 shadow-sm shadow-plum-400"
        id="years-experience"
      />
    </label>

    <label>
      <p>Area of expertise</p>

      <input
        type="text"
        id="expertise"
        className="w-full rounded-md border border-plum-300 p-2 shadow-sm shadow-plum-400"
      />
    </label>
  </StepWrapper>
);
