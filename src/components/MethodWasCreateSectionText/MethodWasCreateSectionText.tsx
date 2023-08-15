import { ReactNode } from "react";
export const MethodWasCreateSectionText = ({
  text = "",
  children,
}: {
  text: string;
  children: ReactNode;
}) => {
  return (
    <div className="border__text__Method justify-betwee2  flex items-center gap-[32px]  py-12 max-lg:text-center  max-sm:flex-col">
      {children}
      <p className="max-w-[444px] text-sm  text-white">{text}</p>
    </div>
  );
};
