import type { ReactNode } from "react";
import { Link } from "react-router";
import LanguageToggle from "@/components/LanguageToggle";
import { copyrightYears } from "@/lib/copyright";
import { useLanguage } from "@/i18n/LanguageProvider";

const logoImg = "/Logo.jpg";

// Header and footer used by pages other than the home page.
export default function SimplePageShell({ children }: { children: ReactNode }) {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <header className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center space-x-3 min-w-0">
            <img
              src={logoImg}
              alt={t.logoAlt}
              className="w-10 h-10 rounded-full object-cover shrink-0"
            />
            <span className="text-xl sm:text-2xl font-bold text-amber-600 truncate">
              {t.brand}
            </span>
          </Link>
          <div className="flex items-center gap-4 shrink-0">
            <Link
              to="/"
              className="hidden sm:inline text-gray-700 hover:text-amber-600 transition-colors"
            >
              {t.pages.backHome}
            </Link>
            <LanguageToggle />
          </div>
        </div>
      </header>

      {children}

      <footer className="bg-gray-800 text-gray-300 pt-6 pb-24 sm:pb-6 px-4 text-center">
        © {copyrightYears()} {t.footer.rights}
      </footer>
    </div>
  );
}
