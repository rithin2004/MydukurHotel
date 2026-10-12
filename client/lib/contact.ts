export const PHONE_DISPLAY = "+91 9885973718";
export const PHONE_URL = "tel:+919885973718";

export function whatsappUrl(text: string) {
  return `https://wa.me/919885973718?text=${encodeURIComponent(text)}`;
}
