import { ReactNode } from "react";
import { Stick } from "../Styck";
import { StepComponent } from "../StepComponent";
import { StepTwo } from "../StepTwo";

export const Main = ({
  children,
  className,
}: {
  children?: ReactNode;
  className?: string;
}) => {
  return (
    <div className={className}>
      <Stick />
      {children}
    </div>
  );
};
