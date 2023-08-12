import { ReactNode } from "react";
export const SectionSteps = ({
  children,
}: {
  children?: ReactNode;
  className?: string;
}) => {
  return (
    <section className=" bg-[url('/images/main/bgsteps.png')] bg-cover bg-center bg-no-repeat  ">
      {children}
    </section>
  );
};
