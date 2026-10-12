import { useEffect } from "react";
import { Link } from "react-router";
import SimplePageShell from "@/components/SimplePageShell";
import { useLanguage } from "@/i18n/LanguageProvider";

const NotFound = () => {
  const { t } = useLanguage();

  useEffect(() => {
    document.title = `${t.pages.notFoundTitle} | ${t.brand}`;
    return () => {
      document.title = "Mydukur Hotel";
    };
  }, [t]);

  return (
    <SimplePageShell>
      <main className="flex-1 flex items-center justify-center px-4 py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="text-center">
          <p className="text-7xl font-bold text-amber-600 mb-4">404</p>
          <h1 className="text-3xl font-bold text-gray-800 mb-3">
            {t.pages.notFoundTitle}
          </h1>
          <p className="text-lg text-gray-600 mb-8">{t.pages.notFoundText}</p>
          <Link
            to="/"
            className="inline-block bg-amber-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-amber-700 transition-colors"
          >
            {t.pages.notFoundButton}
          </Link>
        </div>
      </main>
    </SimplePageShell>
  );
};

export default NotFound;
