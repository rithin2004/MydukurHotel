const FIRST_YEAR = 2025;

// "2025" in the first year, then "2025-<current year>".
export function copyrightYears(): string {
  const currentYear = new Date().getFullYear();
  return currentYear > FIRST_YEAR
    ? `${FIRST_YEAR}-${currentYear}`
    : `${FIRST_YEAR}`;
}
