import { StepWrapper } from "@/components/molecules/MultiStepForm";

export const FormatStep = () => (
  <StepWrapper
    title="Format customization"
    description="It will determinethe train format."
  >
    <label>
      <p>Number of questions</p>

      <input
        type="number"
        min={1}
        max={40}
        className="w-full rounded-md border border-plum-300 p-2 shadow-sm shadow-plum-400"
        name="number-questions"
      />
    </label>

    <label>
      <p>Time limit</p>

      <input
        type="time"
        name="questions-stopwatch"
        className="w-full rounded-md border border-plum-300 p-2 shadow-sm shadow-plum-400"
      />
    </label>
  </StepWrapper>
);
