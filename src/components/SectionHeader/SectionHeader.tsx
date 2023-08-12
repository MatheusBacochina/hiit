export const SectionHeader = ({
  className,
  children,
}: {
  className?: string;
  children?: any;
}) => {
  return <section className={className}>{children}</section>;
};
