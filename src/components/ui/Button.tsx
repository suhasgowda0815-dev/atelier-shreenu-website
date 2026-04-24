import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  external?: boolean;
  variant?: "ghost" | "underline" | "solid";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
};

export function Button({
  children,
  href,
  external,
  variant = "ghost",
  className,
  onClick,
  type = "button",
}: ButtonProps) {
  const base = "inline-flex items-center justify-center text-micro transition-all duration-500";

  const variants = {
    ghost:
      "border border-ink/60 px-7 py-3.5 hover:bg-ink hover:text-bone hover:border-ink",
    underline:
      "border-b border-ink/60 pb-1 hover:border-ink hover:tracking-[0.18em]",
    solid: "bg-ink text-bone px-7 py-3.5 hover:bg-ink/85",
  };

  const classes = cn(base, variants[variant], className);

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
