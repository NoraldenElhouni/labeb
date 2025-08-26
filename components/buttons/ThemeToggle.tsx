"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme, systemTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  if (!mounted) {
    // Avoid hydration mismatch: render a neutral button until mounted
    return (
      <button
        className="inline-flex items-center justify-center h-12 w-12 rounded-2xl backdrop-blur-md bg-black/10 dark:bg-white/10 shadow-lg border border-white/15 dark:border-white/10 transition-transform active:scale-95"
        aria-label="Toggle theme"
        disabled
      >
        <Sun className="h-6 w-6" />
      </button>
    );
  }

  const current = (resolvedTheme ?? theme ?? systemTheme) as "light" | "dark";
  const next = current === "dark" ? "light" : "dark";

  return (
    <button
      aria-label={`Switch to ${next} mode`}
      onClick={() => setTheme(next)}
      className={[
        "inline-flex items-center justify-center",
        "h-12 w-12 rounded-2xl",
        "backdrop-blur-md bg-black/10 dark:bg-white/10",
        "shadow-lg border border-white/15 dark:border-white/10",
        "transition-transform active:scale-95",
        "hover:bg-black/15 dark:hover:bg-white/15",
        "relative",
      ].join(" ")}
    >
      <Sun className="h-6 w-6 rotate-0 scale-100 transition-all duration-200 dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-6 w-6 rotate-90 scale-0 transition-all duration-200 dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
