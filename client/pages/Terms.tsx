import LegalLayout from "@/components/LegalLayout";
import { useLanguage } from "@/i18n/LanguageProvider";
import { TermsTelugu } from "./TermsTelugu";

export default function Terms() {
  const { lang, t } = useLanguage();
  return (
    <LegalLayout title={t.pages.termsTitle}>
      {lang === "te" ? <TermsTelugu /> : <TermsEnglish />}
    </LegalLayout>
  );
}

function TermsEnglish() {
  return (
    <>
      <section>
        <p>
          By using this website you agree to these terms. If you do not agree,
          please do not use the website.
        </p>
      </section>

      <section>
        <h2>About this website</h2>
        <p>
          This website gives information about Mydukur Hotel, Main Bazaar,
          Atmakur, Nellore, Andhra Pradesh. It does not take orders or payments
          online.
        </p>
      </section>

      <section>
        <h2>Menu, timings and availability</h2>
        <p>
          Our menu, opening hours and dishes may change, and some items may be
          unavailable on a given day. We try to keep this website accurate, but
          please call us on +91 9885973718 if you need to confirm anything
          before visiting.
        </p>
      </section>

      <section>
        <h2>Food allergies</h2>
        <p>
          Our food is prepared in a kitchen that uses ingredients such as ghee
          (dairy), lentils, nuts and spices. If you have a food allergy or
          dietary requirement, please tell our staff before ordering.
        </p>
      </section>

      <section>
        <h2>Catering</h2>
        <p>
          Catering orders, prices and arrangements are agreed directly with us
          and are not confirmed through this website.
        </p>
      </section>

      <section>
        <h2>Content and images</h2>
        <p>
          The text, photos and logo on this website belong to Mydukur Hotel.
          Please do not copy or reuse them without our permission.
        </p>
      </section>

      <section>
        <h2>Links to other services</h2>
        <p>
          This website links to services run by others, such as WhatsApp and
          Google Maps. We are not responsible for their content or how they
          work; their own terms apply.
        </p>
      </section>

      <section>
        <h2>Limitation of liability</h2>
        <p>
          This website is provided "as is". To the extent allowed by law, we are
          not liable for any loss arising from use of the website or reliance on
          its information.
        </p>
      </section>

      <section>
        <h2>Governing law</h2>
        <p>
          These terms are governed by the laws of India. Any disputes are
          subject to the jurisdiction of the courts in Nellore, Andhra Pradesh.
        </p>
      </section>

      <section>
        <h2>Changes and contact</h2>
        <p>
          We may update these terms from time to time; the effective date above
          shows when they last changed. For any questions, contact us on +91
          9885973718 (phone or WhatsApp).
        </p>
      </section>
    </>
  );
}
