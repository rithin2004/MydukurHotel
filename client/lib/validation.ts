export const NAME_MAX = 50;
export const EMAIL_MAX = 100;
export const MESSAGE_MAX = 1000;
const MOBILE_LENGTH = 10;

// Letters from any script (so Telugu works too) plus their vowel signs,
// with single spaces between words.
export function cleanName(value: string) {
  return value
    .replace(/[^\p{L}\p{M} ]/gu, "")
    .replace(/ {2,}/g, " ")
    .replace(/^ /, "")
    .slice(0, NAME_MAX);
}

export function isValidName(value: string) {
  const name = value.trim();
  return (
    /^[\p{L}\p{M}]+(?: [\p{L}\p{M}]+)*$/u.test(name) &&
    name.replace(/[^\p{L}]/gu, "").length >= 2
  );
}

// Typing: keep digits only, at most 10. A number the visitor types
// starting with 91 is left alone.
export function cleanTypedMobile(value: string) {
  return value.replace(/\D/g, "").slice(0, MOBILE_LENGTH);
}

// Pasting or autofill: drop spaces/dashes and a +91 / 91 / 0 prefix so only
// the 10-digit number remains, e.g. "+91 98859 73718" -> "9885973718".
export function normalizeMobile(value: string) {
  let digits = value.replace(/\D/g, "");
  if (/^\s*(\+|00)\s*91/.test(value)) {
    digits = digits.replace(/^(00)?91/, "");
  } else if (digits.length === 12 && digits.startsWith("91")) {
    digits = digits.slice(2);
  } else if (digits.length === 11 && digits.startsWith("0")) {
    digits = digits.slice(1);
  }
  return digits.slice(0, MOBILE_LENGTH);
}

export function isValidMobile(value: string) {
  return /^\d{10}$/.test(value);
}

export function isValidEmail(value: string) {
  return (
    value.length <= EMAIL_MAX && /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value)
  );
}
