import { NavContent } from "@/components/NavContent";
export const Nav = ({ className }: { className?: string }) => {
  return (
    <nav className={className}>
      <div className="flex h-[72px] w-full max-w-[1280px] flex-row content-center items-center justify-start gap-14">
        <NavContent></NavContent>
      </div>
    </nav>
  );
};
