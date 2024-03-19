"use client";

import {
  type ComponentProps,
  useState,
  Children,
  useId,
  type FormEvent,
} from "react";
import { twMerge } from "tailwind-merge";

export const MultiStepForm = ({
  className,
  ...props
}: ComponentProps<"form">) => {
  const formId = useId();
  const [currentStep, setCurrentStep] = useState(0);

  const childrenLength = Children.count(props.children);

  const handlePrevStep = () => {
    setCurrentStep((currStep) => {
      if (currStep === 0) {
        return currStep;
      }

      return currStep - 1;
    });
  };

  const handleNextStep = () => {
    setCurrentStep((currStep) => {
      if (currStep === childrenLength - 1) {
        return currStep;
      }

      return currStep + 1;
    });
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    // eslint-disable-next-line no-console
    console.log("Form submitted");
  };

  return (
    <div className="relative flex h-[440px] w-full flex-col gap-8 rounded-md border-2 border-plum-50 p-4">
      <form
        {...props}
        id={formId}
        onSubmit={handleSubmit}
        className={twMerge(
          "h-full w-full overflow-y-auto overflow-x-hidden",
          className,
        )}
      >
        {Children.map(props.children, (child, index) => {
          if (child && index === currentStep) {
            return child;
          }

          return null;
        })}
      </form>

      <span className="absolute bottom-4 left-4 text-sm">
        {currentStep + 1}/{childrenLength}
      </span>

      <section className="flex w-full items-center justify-end gap-4 text-plum-900">
        <button
          type="button"
          onClick={handlePrevStep}
          hidden={currentStep === 0}
          disabled={currentStep === 0}
          className="inline-flex w-24 cursor-pointer items-center justify-center rounded-md border-2 border-plum-100 bg-plum-50 p-4 transition hover:border-plum-200 hover:bg-plum-100 disabled:hidden"
        >
          Previous
        </button>
        <button
          type="button"
          onClick={handleNextStep}
          disabled={currentStep === childrenLength - 1}
          hidden={currentStep === childrenLength - 1}
          className="inline-flex w-24 cursor-pointer items-center justify-center rounded-md border-2 border-plum-100 bg-plum-50 p-4 transition hover:border-plum-200 hover:bg-plum-100 disabled:hidden"
        >
          Next
        </button>

        <button
          type="submit"
          form={formId}
          disabled={currentStep !== childrenLength - 1}
          hidden={currentStep !== childrenLength - 1}
          className="inline-flex w-24 cursor-pointer items-center justify-center rounded-md border-2 border-plum-100 bg-plum-50 p-4 transition hover:border-plum-200 hover:bg-plum-100 disabled:hidden"
        >
          Submit
        </button>
      </section>
    </div>
  );
};
