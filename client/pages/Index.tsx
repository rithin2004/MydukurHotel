import { useEffect, useState } from "react";
import masalaDosaImg from "../assets/MasalaDosa.webp";
import karamDosaImg from "../assets/KaramDosa.webp";
import plainDosaImg from "../assets/PlainDosa.webp";
import idlySambarImg from "../assets/IdlySambar.webp";
import gheeKaramPodiDosaImg from "../assets/GheeKaramPodiDosa.webp";
import gheeKaramDosaImg from "../assets/GheeKaramDosa.webp";
import {
  Menu,
  X,
  Phone,
  MapPin,
  Star,
  Clock,
  Utensils,
  Shield,
  ChefHat,
  Navigation,
} from "lucide-react";

import { Link } from "react-router";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import DeveloperCredit from "@/components/DeveloperCredit";
import ContactForm from "@/components/ContactForm";
import LanguageToggle from "@/components/LanguageToggle";
import ShopStatus from "@/components/ShopStatus";
import { copyrightYears } from "@/lib/copyright";
import { PHONE_DISPLAY, PHONE_URL, whatsappUrl } from "@/lib/contact";
import { useLanguage } from "@/i18n/LanguageProvider";

const logoImg = "/Logo.jpg";
// Hero images live in public/ so index.html can preload them.
const heroImg = "/images/hero.webp";
const heroMobileImg = "/images/hero-mobile.webp";
// Search by address (not the hotel name, which Google matched to other hotels).
const mapQuery = "Main Bazaar, Atmakur, Andhra Pradesh 524322";
const mapEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(mapQuery)}&z=16&output=embed`;
const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(mapQuery)}`;

export default function Index() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();
  const whatsappChatUrl = whatsappUrl(t.whatsapp.quickMessage);

  useEffect(() => {
    document.title = t.brand;
  }, [t.brand]);

  const navLinks = [
    { href: "#home", label: t.nav.home },
    { href: "#menu", label: t.nav.menu },
    { href: "#services", label: t.nav.services },
    { href: "#quality", label: t.nav.quality },
    { href: "#contact", label: t.nav.contact },
  ];

  const signatureDishes = [
    { ...t.signature.dishes.masala, image: masalaDosaImg },
    { ...t.signature.dishes.karam, image: karamDosaImg },
    { ...t.signature.dishes.gheeKaram, image: gheeKaramDosaImg },
    { ...t.signature.dishes.plain, image: plainDosaImg },
    { ...t.signature.dishes.gheeKaramPodi, image: gheeKaramPodiDosaImg },
    { ...t.signature.dishes.idlySambar, image: idlySambarImg },
  ];

  const serviceIcons = [Utensils, Clock, Shield, ChefHat];
  const services = t.services.items.map((item, i) => ({
    ...item,
    icon: serviceIcons[i],
  }));

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-lg fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex items-center space-x-3">
                <img
                  src={logoImg}
                  alt={t.logoAlt}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <h1 className="text-xl sm:text-2xl font-bold text-amber-600 whitespace-nowrap">
                  {t.brand}
                </h1>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 hover:text-amber-600 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <LanguageToggle />
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center gap-3">
              <LanguageToggle />
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-3 py-2 text-gray-700 hover:text-amber-600"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat [background-image:linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.3)),var(--hero-mobile)] sm:[background-image:linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.3)),var(--hero)]"
        style={
          {
            "--hero": `url(${heroImg})`,
            "--hero-mobile": `url(${heroMobileImg})`,
          } as React.CSSProperties
        }
      >
        <div className="max-w-7xl mx-auto px-4 py-20 mt-32 sm:mt-16 md:mt-20 lg:mt-28 xl:mt-40">
          <div className="text-center text-white">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6">
              {t.hero.titleBefore}
              <span className="text-amber-400">{t.brand}</span>
              {t.hero.titleAfter}
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 max-w-3xl mx-auto">
              {t.hero.text}
            </p>
            <ShopStatus variant="dark" className="mb-6 sm:mb-8" />
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a
                href="#signature-dishes"
                className="bg-amber-600 text-white px-4 py-3 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-full text-sm sm:text-base md:text-lg font-semibold hover:bg-amber-700 transition-colors"
              >
                {t.hero.signatureButton}
              </a>
              <a
                href="#contact"
                className="border-2 border-amber-400 text-amber-400 px-4 py-3 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-full text-sm sm:text-base md:text-lg font-semibold hover:bg-amber-400 hover:text-white transition-colors"
              >
                {t.hero.contactButton}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Dishes Section */}
      <section id="signature-dishes" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              {t.signature.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t.signature.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {signatureDishes.map((dish, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    {dish.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {dish.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              {t.menu.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t.menu.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 items-start">
            {/* Main Dishes */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 lg:col-span-2">
              <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                {t.menu.mainTitle}
              </h3>
              <div className="grid gap-4 lg:grid-cols-2">
                {t.menu.mainItems.map((item, index) => (
                  <div
                    key={index}
                    className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <span className="text-lg font-medium text-gray-800">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Side Dishes */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8">
              <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                {t.menu.sideTitle}
              </h3>
              <div className="space-y-4">
                {t.menu.sideItems.map((item, index) => (
                  <div
                    key={index}
                    className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <span className="text-lg font-medium text-gray-800">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              {t.services.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t.services.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <service.icon className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Section */}
      <section
        id="quality"
        className="py-20 bg-gradient-to-br from-amber-600 to-orange-600"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              {t.quality.title}
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <div className="text-center">
                <div className="text-5xl font-bold mb-4">25+</div>
                <div className="text-xl">{t.quality.years}</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-4">1500+</div>
                <div className="text-xl">{t.quality.customers}</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-4">15+</div>
                <div className="text-xl">{t.quality.dishes}</div>
              </div>
            </div>

            <div className="mt-16 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {t.quality.testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white bg-opacity-10 rounded-2xl p-8 flex flex-col"
                >
                  <div className="flex justify-center mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-6 h-6 text-yellow-300 fill-current"
                      />
                    ))}
                  </div>
                  <blockquote className="text-lg italic mb-4 flex-1">
                    "{testimonial.quote}"
                  </blockquote>
                  <cite className="text-lg">- {testimonial.name}</cite>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              {t.contact.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t.contact.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
            <div className="space-y-6 lg:col-span-2">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-amber-100 p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">
                    {t.contact.visitTitle}
                  </h3>
                </div>
                <p className="text-gray-600 ml-16">
                  {t.contact.addressLines[0]}
                  <br />
                  {t.contact.addressLines[1]}
                  <br />
                  {t.contact.addressLines[2]}
                </p>
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-16 mt-3 inline-flex items-center gap-2 text-amber-600 font-semibold hover:text-amber-700 transition-colors"
                >
                  <Navigation className="w-4 h-4" />
                  {t.contact.directions}
                </a>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-amber-100 p-3 rounded-full">
                    <Phone className="w-6 h-6 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">
                    {t.contact.callTitle}
                  </h3>
                </div>
                <div className="ml-16 flex flex-wrap items-center gap-3">
                  <a
                    href={PHONE_URL}
                    className="text-gray-600 hover:text-amber-600 hover:underline transition-colors"
                  >
                    {PHONE_DISPLAY}
                  </a>
                  <a
                    href={whatsappChatUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={t.contact.chatOnWhatsapp}
                    title={t.contact.chatOnWhatsapp}
                    className="inline-flex items-center justify-center rounded-full bg-[#25D366] p-2 text-white hover:bg-[#1DA851] transition-colors"
                  >
                    <WhatsAppIcon className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-amber-100 p-3 rounded-full">
                    <Clock className="w-6 h-6 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">
                    {t.contact.hoursTitle}
                  </h3>
                </div>
                <p className="text-gray-600 ml-16">
                  {t.contact.days}
                  <br />
                  {t.contact.hours}
                </p>
                <ShopStatus className="ml-16 mt-3" />
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 lg:col-span-3 flex flex-col">
              <h3
                id="contact-form-title"
                className="text-2xl font-bold text-gray-800 mb-6"
              >
                {t.contact.formTitle}
              </h3>
              <ContactForm />
            </div>
          </div>

          <div className="mt-12 rounded-2xl overflow-hidden shadow-sm">
            <iframe
              title={t.contact.mapTitle}
              src={mapEmbedUrl}
              className="w-full h-80 md:h-96 border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white pt-8 pb-24 md:pb-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img
                  src={logoImg}
                  alt={t.logoAlt}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <h3 className="text-2xl font-bold text-amber-400">{t.brand}</h3>
              </div>
              <p className="text-gray-300 mb-6">{t.footer.tagline}</p>
              <div className="flex space-x-4">
                <a
                  href={whatsappChatUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-amber-400 transition-colors flex items-center space-x-2"
                >
                  <WhatsAppIcon className="w-5 h-5 text-[#25D366]" />
                  <span>{t.contact.whatsapp}</span>
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-4">{t.footer.quickLinks}</h4>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-amber-400 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-4">{t.footer.contactInfo}</h4>
              <ul className="space-y-2 text-gray-300">
                <li>{t.footer.addressLines[0]}</li>
                <li>{t.footer.addressLines[1]}</li>
                <li>
                  {t.footer.phone}:{" "}
                  <a
                    href={PHONE_URL}
                    className="hover:text-amber-400 hover:underline transition-colors"
                  >
                    {PHONE_DISPLAY}
                  </a>
                </li>
                <li>{t.footer.openDaily}</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-300">
              © {copyrightYears()} {t.footer.rights} {t.footer.madeWith}
            </p>
            <div className="mt-3 space-x-4 text-sm">
              <Link
                to="/privacy"
                className="text-gray-300 underline underline-offset-2 hover:text-amber-400 transition-colors"
              >
                {t.footer.privacy}
              </Link>
              <Link
                to="/terms"
                className="text-gray-300 underline underline-offset-2 hover:text-amber-400 transition-colors"
              >
                {t.footer.terms}
              </Link>
            </div>
            <DeveloperCredit className="mt-4" />
          </div>
        </div>
      </footer>
    </div>
  );
}
