import { useEffect, type ReactNode } from "react";
import SimplePageShell from "@/components/SimplePageShell";

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
    <SimplePageShell>
      <main className="flex-1 max-w-3xl w-full mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">{title}</h1>
        <p className="text-gray-500 mb-10">Effective date: {effectiveDate}</p>
        <div className="space-y-8 text-gray-700 leading-relaxed [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-gray-800 [&_h2]:mb-3 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1 [&_p+p]:mt-3 [&_a]:text-amber-600 [&_a:hover]:text-amber-700 [&_a]:underline">
          {children}
        </div>
      </main>
    </SimplePageShell>
  );
}
