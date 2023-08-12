import { ReactNode } from "react";
export const StepComponent = ({
  headline = "",
  paragraph = "",
  step = 0,
  direction = "left",
  children = "",
  maxWidthParagraph = 0,
  spaceBetween = true,
}: {
  headline: string;
  paragraph: ReactNode | string;
  step: number;
  direction: string;
  children?: ReactNode;
  maxWidthParagraph: number;
  spaceBetween?: boolean;
}) => {
  const textContent = (
    <div
      style={{ flexBasis: maxWidthParagraph }}
      className="flex flex-1  flex-grow-0 flex-col gap-2 "
    >
      <h2 className="text-xl font-semibold leading-normal text-white ">
        {headline}
      </h2>
      <p className="text-sm font-normal leading-normal text-white">
        {paragraph}
      </p>
    </div>
  );

  const stepContent = (
    <div className="flex-shrink-2 flex aspect-square w-[192px] items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-blue-400">
      <div className="text-8xl font-normal text-white">{step}</div>
    </div>
  );
  const returnContentByDirection = [
    direction === "left" ? textContent : stepContent,
    direction === "left" ? stepContent : textContent,
  ];
  return (
    <div className="box__shadow   flex  flex-col items-center bg-neutral-800  bg-opacity-75  px-16">
      <div
        className={`relative flex w-full max-w-screen-lg items-center ${
          !children && spaceBetween && "justify-between"
        }  gap-12 py-12 `}
      >
        {returnContentByDirection}
        {children}
      </div>
    </div>
  );
};
