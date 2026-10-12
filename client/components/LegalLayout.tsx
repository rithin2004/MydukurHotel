import { useEffect, type ReactNode } from "react";
import SimplePageShell from "@/components/SimplePageShell";
import { useLanguage } from "@/i18n/LanguageProvider";

export default function LegalLayout({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    document.title = `${title} | ${t.brand}`;
    return () => {
      document.title = "Mydukur Hotel";
    };
  }, [title, t.brand]);

  return (
    <SimplePageShell>
      <main className="flex-1 bg-gradient-to-br from-amber-50 to-orange-50 px-4 py-12">
        <article className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-6 sm:p-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2 text-center">
            {title}
          </h1>
          <p className="text-gray-500 mb-8 text-center">
            {t.pages.effectiveDate}: {t.pages.effectiveDateValue}
          </p>
          {t.pages.translationNote && (
            <p className="mb-8 rounded-lg bg-amber-50 p-4 text-sm text-gray-700 text-center">
              {t.pages.translationNote}
            </p>
          )}
          <div className="space-y-8 text-gray-700 leading-relaxed text-justify [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-gray-800 [&_h2]:mb-3 [&_h2]:text-left [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1 [&_p+p]:mt-3 [&_a]:text-amber-600 [&_a:hover]:text-amber-700 [&_a]:underline">
            {children}
          </div>
        </article>
      </main>
    </SimplePageShell>
  );
}
