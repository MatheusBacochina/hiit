import { ReactNode } from "react";

export const Header = ({
  children,
  className,
}: {
  children: ReactNode;
  className: string;
}) => {
  return <header className={className}>{children}</header>;
};
