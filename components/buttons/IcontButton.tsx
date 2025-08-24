import React from "react";

export function IconButton({
  label,
  onClick,
  children,
  className = "",
}: {
  label: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className={[
        "inline-flex items-center justify-center",
        "h-12 w-12 rounded-2xl",
        "backdrop-blur-md bg-black/10 dark:bg-white/10",
        "shadow-lg border border-white/15 dark:border-white/10",
        "transition-all duration-300 active:scale-95 hover:scale-105",
        "hover:bg-black/20 dark:hover:bg-white/20",
        "hover:shadow-xl hover:border-white/30 dark:hover:border-white/20",
        "group",
        className,
      ].join(" ")}
    >
      <span className="transition-transform duration-300 group-hover:scale-110">
        {children}
      </span>
    </button>
  );
}
