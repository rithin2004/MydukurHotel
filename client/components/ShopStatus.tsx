import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import { formatDay, getShopStatus } from "@/lib/hours";
import { useLanguage } from "@/i18n/LanguageProvider";

// Live "Open now / Closed now" badge based on the hotel's hours in IST.
export default function ShopStatus({
  variant = "light",
  className,
}: {
  variant?: "light" | "dark";
  className?: string;
}) {
  const { lang, t } = useLanguage();
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const id = window.setInterval(() => setNow(new Date()), 30_000);
    return () => window.clearInterval(id);
  }, []);

  const status = getShopStatus(now);
  const isOpen = status.kind === "open";

  let headline: string = isOpen ? t.status.openNow : t.status.closedNow;
  let detail: string;
  switch (status.kind) {
    case "open":
      detail = t.status.closesAt;
      break;
    case "opensToday":
      detail = t.status.opensToday;
      break;
    case "opensTomorrow":
      if (status.closedToday) headline = t.status.closedToday;
      detail = t.status.opensTomorrow;
      break;
    case "opensOn":
      if (status.closedToday) headline = t.status.closedToday;
      detail = t.status.opensOn(
        formatDay(status.date, lang === "te" ? "te-IN" : "en-IN"),
      );
      break;
  }

  return (
    <div
      role="status"
      className={cn(
        "inline-flex flex-wrap items-center gap-x-2 gap-y-1 rounded-full px-4 py-1.5 text-sm",
        variant === "dark"
          ? "bg-black/40 text-white backdrop-blur-sm"
          : isOpen
            ? "bg-green-50 text-green-800"
            : "bg-red-50 text-red-800",
        className,
      )}
    >
      <span
        className={cn(
          "h-2.5 w-2.5 rounded-full",
          isOpen ? "bg-green-500" : "bg-red-500",
        )}
        aria-hidden="true"
      />
      <span className="font-semibold">{headline}</span>
      <span aria-hidden="true">·</span>
      <span>{detail}</span>
    </div>
  );
}
