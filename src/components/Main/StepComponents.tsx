import { ReactNode } from "react";

export default function StepsContainer({
  children,
  className,
}: {
  children?: ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <section className="flex h-[418px] items-center justify-center  bg-black px-[94px]">
        <div className=" h-[220px] max-w-[1092px]  flex-1  rounded-[100px] bg-slate-600 "></div>
      </section>
    </div>
  );
}
