import { type ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type StepWrapperProps = ComponentProps<"div"> & {
  title: string;
  description: string;
};

export const StepWrapper = ({
  title,
  description,
  className,
  children,
  ...props
}: StepWrapperProps) => (
  <div className={twMerge("flex flex-col gap-6", className)} {...props}>
    <h2 className="text-lg">{title}</h2>
    <p className="text-sm">{description}</p>

    {children}
  </div>
);
