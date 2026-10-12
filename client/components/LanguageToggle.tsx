import { cn } from "@/lib/cn";
import { useLanguage } from "@/i18n/LanguageProvider";

export default function LanguageToggle({ className }: { className?: string }) {
  const { lang, setLang, t } = useLanguage();
  return (
    <button
      type="button"
      onClick={() => setLang(lang === "en" ? "te" : "en")}
      aria-label={t.switchLanguage.ariaLabel}
      lang={lang === "en" ? "te" : "en"}
      className={cn(
        "whitespace-nowrap rounded-full border border-amber-600 px-2.5 sm:px-3 py-1 text-xs sm:text-sm font-semibold text-amber-600 hover:bg-amber-600 hover:text-white transition-colors",
        className,
      )}
    >
      {t.switchLanguage.label}
    </button>
  );
}
