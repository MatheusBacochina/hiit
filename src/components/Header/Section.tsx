import Image from "next/image";

export default function Section({
  className,
  children,
}: {
  className?: string;
  children?: any;
}) {
  return <section className={className}>{children}</section>;
}
