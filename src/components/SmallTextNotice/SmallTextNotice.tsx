import { ReactNode } from "react";
export const SmallTextNotice = ({
  className,
  children,
}: {
  className: string;
  children: ReactNode;
}) => {
  return (
    <div className={className}>
      <p className="mt-7 max-w-[756px]  text-center text-sm font-normal text-white">
        {children}
      </p>
    </div>
  );
};
