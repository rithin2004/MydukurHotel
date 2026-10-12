import { useState, type ClipboardEvent, type FormEvent } from "react";
import { Link } from "react-router";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { cn } from "@/lib/cn";
import { whatsappUrl } from "@/lib/contact";
import {
  EMAIL_MAX,
  MESSAGE_MAX,
  NAME_MAX,
  cleanName,
  cleanTypedMobile,
  isValidEmail,
  isValidMobile,
  isValidName,
  normalizeMobile,
} from "@/lib/validation";
import { useLanguage } from "@/i18n/LanguageProvider";

type Field = "name" | "mobile" | "email" | "message" | "agree";
type Errors = Partial<Record<Field, string>>;

const inputClass =
  "w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent";

export default function ContactForm() {
  const { t } = useLanguage();
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [errors, setErrors] = useState<Errors>({});

  const clearError = (field: Field) =>
    setErrors((prev) => ({ ...prev, [field]: undefined }));

  const validate = (): Errors => {
    const next: Errors = {};
    if (!isValidName(name)) next.name = t.contact.nameInvalid;
    if (!isValidMobile(mobile)) next.mobile = t.contact.mobileInvalid;
    if (email.trim() && !isValidEmail(email.trim()))
      next.email = t.contact.emailInvalid;
    if (!message.trim()) next.message = t.contact.messageRequired;
    if (!agreed) next.agree = t.contact.agreeRequired;
    return next;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    const firstInvalid = (Object.keys(next) as Field[])[0];
    if (firstInvalid) {
      document.getElementById(`contact-${firstInvalid}`)?.focus();
      return;
    }
    const text = t.whatsapp.formMessage({
      name: name.trim(),
      mobile,
      email: email.trim(),
      message: message.trim(),
    });
    // noopener: the WhatsApp tab gets no handle back to this page.
    window.open(whatsappUrl(text), "_blank", "noopener,noreferrer");
  };

  // Paste only the 10-digit number, whatever spacing or +91 it came with.
  const handleMobilePaste = (e: ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pasted = normalizeMobile(e.clipboardData.getData("text"));
    const input = e.currentTarget;
    const start = input.selectionStart ?? mobile.length;
    const end = input.selectionEnd ?? mobile.length;
    const next =
      pasted.length === 10
        ? pasted
        : cleanTypedMobile(mobile.slice(0, start) + pasted + mobile.slice(end));
    setMobile(next);
    clearError("mobile");
  };

  // Typed input keeps digits only (a leading 91 stays). Autofill that
  // brings "+91 ..." or more than 10 digits is normalised like a paste.
  // No maxLength on the input: it would cut "+91 98859 73718" before this
  // runs; the 10-digit cap is applied here instead.
  const handleMobileChange = (value: string) => {
    const tooLong = value.replace(/\D/g, "").length > 10;
    setMobile(
      value.includes("+") || tooLong
        ? normalizeMobile(value)
        : cleanTypedMobile(value),
    );
    clearError("mobile");
  };

  const errorText = (field: Field) =>
    errors[field] ? (
      <p
        id={`contact-${field}-error`}
        role="alert"
        className="mt-1 text-sm text-red-600"
      >
        {errors[field]}
      </p>
    ) : null;

  const fieldProps = (field: Field) => ({
    "aria-invalid": errors[field] ? true : undefined,
    "aria-describedby": errors[field] ? `contact-${field}-error` : undefined,
  });

  const borderFor = (field: Field) =>
    errors[field] ? "border-red-500" : "border-gray-300";

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      name="contact"
      autoComplete="on"
      aria-labelledby="contact-form-title"
      className="flex-1 flex flex-col justify-between gap-5"
    >
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="contact-name"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            {t.contact.name} <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="contact-name"
            name="name"
            autoComplete="name"
            maxLength={NAME_MAX}
            required
            value={name}
            onChange={(e) => {
              setName(cleanName(e.target.value));
              clearError("name");
            }}
            className={cn(inputClass, borderFor("name"))}
            {...fieldProps("name")}
          />
          {errorText("name")}
        </div>
        <div>
          <label
            htmlFor="contact-mobile"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            {t.contact.mobile} <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="contact-mobile"
            name="mobile"
            autoComplete="tel-national"
            inputMode="numeric"
            pattern="[0-9]{10}"
            required
            value={mobile}
            onChange={(e) => handleMobileChange(e.target.value)}
            onPaste={handleMobilePaste}
            className={cn(inputClass, borderFor("mobile"))}
            {...fieldProps("mobile")}
          />
          {errorText("mobile")}
        </div>
      </div>

      <div>
        <label
          htmlFor="contact-email"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          {t.contact.email}
        </label>
        <input
          type="email"
          id="contact-email"
          name="email"
          autoComplete="email"
          maxLength={EMAIL_MAX}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value.replace(/\s/g, ""));
            clearError("email");
          }}
          className={cn(inputClass, borderFor("email"))}
          {...fieldProps("email")}
        />
        {errorText("email")}
      </div>

      <div>
        <label
          htmlFor="contact-message"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          {t.contact.message} <span className="text-red-500">*</span>
        </label>
        <textarea
          rows={4}
          id="contact-message"
          name="message"
          autoComplete="off"
          maxLength={MESSAGE_MAX}
          required
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
            clearError("message");
          }}
          className={cn(inputClass, "resize-none", borderFor("message"))}
          {...fieldProps("message")}
        ></textarea>
        {errorText("message")}
      </div>

      <div>
        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            id="contact-agree"
            name="agree"
            autoComplete="off"
            required
            checked={agreed}
            onChange={(e) => {
              setAgreed(e.target.checked);
              clearError("agree");
            }}
            className="mt-1 h-4 w-4 shrink-0 accent-amber-600"
            {...fieldProps("agree")}
          />
          <label htmlFor="contact-agree" className="text-sm text-gray-700">
            {t.contact.agreeBefore}
            <Link
              to="/privacy"
              className="text-amber-600 underline hover:text-amber-700"
            >
              {t.footer.privacy}
            </Link>
            {t.contact.agreeBetween}
            <Link
              to="/terms"
              className="text-amber-600 underline hover:text-amber-700"
            >
              {t.contact.agreeTermsLink}
            </Link>
            {t.contact.agreeAfter}
          </label>
        </div>
        {errorText("agree")}
      </div>

      <button
        type="submit"
        className="w-full inline-flex items-center justify-center gap-2 bg-amber-600 text-white px-4 sm:px-6 py-3 rounded-lg text-sm sm:text-base font-semibold hover:bg-amber-700 transition-colors"
      >
        <WhatsAppIcon className="w-5 h-5" />
        {t.contact.send}
      </button>
    </form>
  );
}
