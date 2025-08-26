"use client";

import * as React from "react";
import { useRouter, usePathname } from "next/navigation";
import { Globe } from "lucide-react";

interface LocaleSwitcherSelectProps {
  defaultValue: string;
  label: string;
  children: React.ReactNode;
  width?: string;
}

export default function LocaleSwitcherSelect({
  defaultValue,
  label,
  children,
}: LocaleSwitcherSelectProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [selectedLocale, setSelectedLocale] =
    React.useState<string>(defaultValue);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  React.useEffect(() => {
    if (!mounted) return;

    const storedLocale = localStorage.getItem("locale");
    if (storedLocale && storedLocale !== selectedLocale) {
      setSelectedLocale(storedLocale);
    } else if (!storedLocale && defaultValue !== selectedLocale) {
      setSelectedLocale(defaultValue);
    }
  }, [selectedLocale, defaultValue, mounted]);

  if (!mounted) {
    // Avoid hydration mismatch: render a neutral button until mounted
    return (
      <button
        className="inline-flex items-center justify-center gap-2 h-12 px-4 rounded-2xl min-w-fit backdrop-blur-md bg-black/10 dark:bg-white/10 shadow-lg border border-white/15 dark:border-white/10 transition-transform active:scale-95"
        aria-label={label}
        disabled
      >
        <Globe className="h-5 w-5" />
        <span className="text-sm font-medium">{defaultValue}</span>
      </button>
    );
  }

  // Extract locale options from children
  const localeOptions = React.Children.toArray(children)
    .filter(
      (
        child
      ): child is React.ReactElement<{
        value: string;
        children: React.ReactNode;
      }> => React.isValidElement(child)
    )
    .map((child) => {
      const element = child as React.ReactElement<{
        value: string;
        children: React.ReactNode;
      }>;
      return {
        value: element.props.value,
        label: element.props.children as string,
      };
    });

  const currentIndex = localeOptions.findIndex(
    (opt) => opt.value === selectedLocale
  );
  const nextIndex = (currentIndex + 1) % localeOptions.length;
  const nextLocale = localeOptions[nextIndex];

  const handleClick = () => {
    if (!nextLocale) return;

    const newLocale = nextLocale.value;
    setSelectedLocale(newLocale);
    localStorage.setItem("locale", newLocale);

    const segments = pathname?.split("/") ?? [];
    if (segments[1]) {
      segments[1] = newLocale;
      const newPath = segments.join("/") || "/";
      router.push(newPath);
    }
  };

  const currentLocale = localeOptions.find(
    (opt) => opt.value === selectedLocale
  );

  return (
    <button
      aria-label={`Current: ${
        currentLocale?.label || selectedLocale
      }. Click to switch to ${nextLocale?.label || "next locale"}`}
      onClick={handleClick}
      className={[
        "inline-flex items-center justify-center gap-2",
        "h-12 px-4 rounded-2xl min-w-fit",
        "backdrop-blur-md bg-black/10 dark:bg-white/10",
        "shadow-lg border border-white/15 dark:border-white/10",
        "transition-transform active:scale-95",
        "hover:bg-black/15 dark:hover:bg-white/15",
        "relative",
      ].join(" ")}
    >
      <Globe className="h-5 w-5" />
      <span className="text-sm font-medium">
        {currentLocale?.label || selectedLocale}
      </span>
      <span className="sr-only">{label}</span>
    </button>
  );
}
