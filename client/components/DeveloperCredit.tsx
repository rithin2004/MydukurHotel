import { cn } from "@/lib/cn";
import { useLanguage } from "@/i18n/LanguageProvider";

const DEVELOPER_NAME = "Somisetty Sai Rithin";
const DEVELOPER_URL = "https://www.linkedin.com/in/somisettysairithin";

// "Website by ..." line shown at the bottom of every page.
export default function DeveloperCredit({ className }: { className?: string }) {
  const { t } = useLanguage();
  return (
    <p className={cn("text-sm text-gray-400", className)}>
      {t.footer.websiteBy}{" "}
      <a
        href={DEVELOPER_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-300 underline underline-offset-2 hover:text-amber-400 transition-colors"
      >
        {DEVELOPER_NAME}
      </a>
    </p>
  );
}
