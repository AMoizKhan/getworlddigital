import Link from "next/link";
import { type ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: ButtonVariant;
  type?: "button" | "submit" | "reset";
  className?: string;
  onClick?: () => void;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-[#0d57b8] text-white shadow-md shadow-blue-600/25 hover:bg-[#09438f] hover:shadow-lg hover:shadow-blue-600/30 active:scale-[0.98]",
  secondary:
    "border border-slate-300 bg-white text-[#071a38] shadow-xs hover:border-[#0d57b8]/40 hover:bg-[#f5f8ff] hover:text-[#0d57b8] active:scale-[0.98]",
  ghost:
    "bg-[#eef3ff] text-[#0d57b8] hover:bg-[#e1ebff] active:scale-[0.98]",
};

export function Button({
  children,
  href,
  variant = "primary",
  type = "button",
  className = "",
  onClick,
}: ButtonProps) {
  const classes = `group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 ease-out cursor-pointer ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
