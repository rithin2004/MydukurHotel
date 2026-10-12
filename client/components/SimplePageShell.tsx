import type { ReactNode } from "react";
import { Link } from "react-router";
import { copyrightYears } from "@/lib/copyright";

const logoImg = "/Logo.jpg";

// Header and footer used by pages other than the home page.
export default function SimplePageShell({ children }: { children: ReactNode }) {
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

      {children}

      <footer className="bg-gray-800 text-gray-300 py-6 text-center">
        © {copyrightYears()} Mydukur Hotel. All rights reserved.
      </footer>
    </div>
  );
}
