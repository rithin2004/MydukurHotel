// Opening hours, in India Standard Time.
export const OPEN_MINUTES = 7 * 60; // 7:00 AM
export const CLOSE_MINUTES = 11 * 60; // 11:00 AM

// Days the hotel is closed (festivals, holidays), as "YYYY-MM-DD".
// Example: ["2026-10-20", "2026-11-08"]
export const CLOSED_DATES: string[] = [];

const TIME_ZONE = "Asia/Kolkata";

export type ShopStatus =
  | { kind: "open" }
  | { kind: "opensToday" }
  | { kind: "opensTomorrow"; closedToday: boolean }
  | { kind: "opensOn"; date: Date; closedToday: boolean };

function istParts(now: Date) {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: TIME_ZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(now);
  const get = (type: string) =>
    Number(parts.find((p) => p.type === type)?.value);
  return {
    year: get("year"),
    month: get("month"),
    day: get("day"),
    minutes: get("hour") * 60 + get("minute"),
  };
}

// Midday UTC of the IST calendar day `offset` days from today, so the
// date never shifts when formatted in IST.
function istDay(year: number, month: number, day: number, offset: number) {
  return new Date(Date.UTC(year, month - 1, day + offset, 12));
}

function dateKey(date: Date) {
  return date.toISOString().slice(0, 10);
}

export function getShopStatus(now: Date = new Date()): ShopStatus {
  const { year, month, day, minutes } = istParts(now);
  const isClosedOn = (offset: number) =>
    CLOSED_DATES.includes(dateKey(istDay(year, month, day, offset)));

  const closedToday = isClosedOn(0);
  if (!closedToday) {
    if (minutes < OPEN_MINUTES) return { kind: "opensToday" };
    if (minutes < CLOSE_MINUTES) return { kind: "open" };
  }

  for (let offset = 1; offset <= 30; offset++) {
    if (!isClosedOn(offset)) {
      return offset === 1
        ? { kind: "opensTomorrow", closedToday }
        : {
            kind: "opensOn",
            date: istDay(year, month, day, offset),
            closedToday,
          };
    }
  }
  return { kind: "opensTomorrow", closedToday };
}

export function formatDay(date: Date, locale: string) {
  return new Intl.DateTimeFormat(locale, {
    timeZone: TIME_ZONE,
    weekday: "long",
    day: "numeric",
    month: "long",
  }).format(date);
}
