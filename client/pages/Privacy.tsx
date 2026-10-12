import LegalLayout from "@/components/LegalLayout";
import { useLanguage } from "@/i18n/LanguageProvider";
import { PrivacyTelugu } from "./PrivacyTelugu";

export default function Privacy() {
  const { lang, t } = useLanguage();
  return (
    <LegalLayout title={t.pages.privacyTitle}>
      {lang === "te" ? <PrivacyTelugu /> : <PrivacyEnglish />}
    </LegalLayout>
  );
}

function PrivacyEnglish() {
  return (
    <>
      <section>
        <p>
          This Privacy Policy explains how Mydukur Hotel ("we", "us") handles
          information when you use this website. We keep things simple: we do
          not run user accounts, we do not sell your information, and we do not
          use advertising or analytics trackers.
        </p>
      </section>

      <section>
        <h2>Who we are</h2>
        <p>
          Mydukur Hotel, Main Bazaar, Atmakur, Nellore, Andhra Pradesh, India.
          Phone / WhatsApp: +91 9885973718.
        </p>
      </section>

      <section>
        <h2>Information you share with us</h2>
        <p>
          The "Get in Touch" form does not send anything to our servers. When
          you press "Send Message via WhatsApp", the name, email, mobile number
          and message you typed are placed into a WhatsApp message on your own
          device. We only receive that message if you choose to send it in
          WhatsApp.
        </p>
        <p>
          We use the details you send only to reply to you, for example about
          your visit, an enquiry or a catering request. We do not share them
          with anyone else except where the law requires it.
        </p>
      </section>

      <section>
        <h2>Third-party services</h2>
        <p>Some parts of this website are provided by other companies:</p>
        <ul>
          <li>
            <strong>Netlify</strong> hosts this website and may record basic
            technical information, such as your IP address and browser type, to
            deliver and protect the site.
          </li>
          <li>
            <strong>Google Maps</strong> shows our location on the Contact
            section. The map is loaded from Google, which may use cookies and
            collect information under{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google's Privacy Policy
            </a>
            .
          </li>
          <li>
            <strong>WhatsApp</strong> (Meta) handles messages you send us, under{" "}
            <a
              href="https://www.whatsapp.com/legal/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp's Privacy Policy
            </a>
            .
          </li>
        </ul>
      </section>

      <section>
        <h2>Cookies</h2>
        <p>
          We do not set our own cookies. The embedded Google Map may set
          cookies, as described above.
        </p>
      </section>

      <section>
        <h2>How long we keep information</h2>
        <p>
          WhatsApp messages stay in our chat history only as long as needed to
          respond to you or deal with your request. You can ask us to delete
          them at any time.
        </p>
      </section>

      <section>
        <h2>Your rights</h2>
        <p>
          Under India's Digital Personal Data Protection Act, 2023, you can ask
          us what personal data we hold about you, ask us to correct or delete
          it, and raise a concern with us. Contact us on +91 9885973718 (phone
          or WhatsApp) and we will respond as soon as we can.
        </p>
      </section>

      <section>
        <h2>Children</h2>
        <p>
          This website is meant for a general audience. We do not knowingly
          collect personal data from children.
        </p>
      </section>

      <section>
        <h2>Changes to this policy</h2>
        <p>
          We may update this policy from time to time. The effective date at the
          top of this page shows when it last changed.
        </p>
      </section>
    </>
  );
}
