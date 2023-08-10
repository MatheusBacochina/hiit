import { Links } from "../index";
export default function Nav({ className }: { className?: string }) {
  return (
    <nav className={className}>
      <div className="flex h-[72px] w-full max-w-[1280px] flex-row content-center items-center justify-start gap-14">
        <Links></Links>
      </div>
    </nav>
  );
}
