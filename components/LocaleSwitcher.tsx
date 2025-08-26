"use client";
import { routing } from "@/i18n/routing";
import { useLocale } from "next-intl";
import { SelectItem } from "./ui/select";
import { useEffect, useState } from "react";
import LocaleSwitcherSelect from "./LocaleSwitcherSelect";

interface LocaleSwitcherProps {
  width?: string;
}

export default function LocaleSwitcher({
  width = "w-12", // Updated default width to match button size
}: LocaleSwitcherProps) {
  const locale: string = useLocale();
  const [defaultLocale, setDefaultLocale] = useState(routing.defaultLocale);

  useEffect(() => {
    const storedLocale = localStorage.getItem("locale");
    if (storedLocale && storedLocale !== defaultLocale) {
      setDefaultLocale(storedLocale as "en" | "ar");
    } else if (!storedLocale) {
      // If no stored preference, use Arabic as default
      setDefaultLocale(routing.defaultLocale);
    }
  }, [locale, defaultLocale]);

  const languageNames: Record<string, { en: string; ar: string }> = {
    ar: { en: "العربية", ar: "العربية" },
    en: { en: "English", ar: "English" },
  };

  return (
    <div>
      <LocaleSwitcherSelect width={width} defaultValue={defaultLocale} label="">
        {routing.locales.map((cur) => (
          <SelectItem key={cur} value={cur}>
            {languageNames[cur]
              ? languageNames[cur][locale as "en" | "ar"]
              : cur}
          </SelectItem>
        ))}
      </LocaleSwitcherSelect>
    </div>
  );
}
