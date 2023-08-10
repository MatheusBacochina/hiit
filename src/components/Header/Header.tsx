import { ReactNode } from "react";

export default function Header({
  children,
  className,
}: {
  children: ReactNode;
  className: string;
}) {
  return (
    <header className={className}>
      <div className="linear__bottom absolute bottom-0  h-[26vh] w-full bg-slate-300"></div>
      {children}
    </header>
  );
}
