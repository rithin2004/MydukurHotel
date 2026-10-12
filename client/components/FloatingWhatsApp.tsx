import WhatsAppIcon from "@/components/WhatsAppIcon";
import { whatsappUrl } from "@/lib/contact";
import { useLanguage } from "@/i18n/LanguageProvider";

export default function FloatingWhatsApp() {
  const { t } = useLanguage();
  return (
    <a
      href={whatsappUrl(t.whatsapp.quickMessage)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.contact.chatOnWhatsapp}
      title={t.contact.chatOnWhatsapp}
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg hover:bg-[#1DA851] hover:scale-105 transition"
    >
      <WhatsAppIcon className="h-8 w-8" />
    </a>
  );
}
