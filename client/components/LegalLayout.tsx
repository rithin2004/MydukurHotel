import { useEffect, type ReactNode } from "react";
import { Link } from "react-router";
import { copyrightYears } from "@/lib/copyright";

const logoImg = "/Logo.jpg";

export default function LegalLayout({
  title,
  effectiveDate,
  children,
}: {
  title: string;
  effectiveDate: string;
  children: ReactNode;
}) {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `${title} | Mydukur Hotel`;
    return () => {
      document.title = "Mydukur Hotel";
    };
  }, [title]);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <header className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <img
              src={logoImg}
              alt="Mydukur Hotel Logo"
              className="w-10 h-10 rounded-full object-cover"
            />
            <span className="text-2xl font-bold text-amber-600">
              Mydukur Hotel
            </span>
          </Link>
          <Link
            to="/"
            className="text-gray-700 hover:text-amber-600 transition-colors"
          >
            Back to home
          </Link>
        </div>
      </header>

      <main className="flex-1 max-w-3xl w-full mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">{title}</h1>
        <p className="text-gray-500 mb-10">Effective date: {effectiveDate}</p>
        <div className="space-y-8 text-gray-700 leading-relaxed [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-gray-800 [&_h2]:mb-3 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1 [&_p+p]:mt-3 [&_a]:text-amber-600 [&_a:hover]:text-amber-700 [&_a]:underline">
          {children}
        </div>
      </main>

      <footer className="bg-gray-800 text-gray-300 py-6 text-center">
        © {copyrightYears()} Mydukur Hotel. All rights reserved.
      </footer>
    </div>
  );
}
