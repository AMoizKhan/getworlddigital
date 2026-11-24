import { type ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
  interactive?: boolean;
};

export function Card({
  children,
  className = "",
  interactive = true,
}: CardProps) {
  const interactiveClasses = interactive
    ? "transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-[#1f4fe0]/35 hover:shadow-xl hover:shadow-blue-600/[0.08]"
    : "";

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm shadow-slate-900/[0.03] ${interactiveClasses} ${className}`}
    >
      {children}
    </div>
  );
}
