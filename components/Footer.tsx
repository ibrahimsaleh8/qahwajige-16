"use client";

import { FooterData } from "@/lib/responseType";
import { Mail, MapPin, Phone } from "lucide-react";
import {
  FaInstagram,
  FaTiktok,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import Link from "next/link";

export default function Footer({
  address,
  phone,
  brandName,
  email,
  description,
}: FooterData & { description?: string }) {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: FaInstagram,
      href: "https://www.instagram.com/qahwajeyn",
      label: "انستقرام",
      background: "#833ab4",
    },
    {
      icon: FaTiktok,
      href: "https://www.tiktok.com/@user61719922769991",
      label: "تيك توك",
      background: "#000000",
    },
    {
      icon: FaFacebookF,
      href: "https://www.facebook.com/SbabinAlkahwaa/?_rdr",
      label: "فيسبوك",
      background: "#1877f2",
    },
    {
      icon: FaTwitter,
      href: "https://x.com/NghmAbw11703",
      label: "تويتر",
      background: "#1da1f2",
    },
    {
      icon: FaYoutube,
      href: "https://www.youtube.com/channel/UCProSRhVIgB-Bkn6_NPrMng",
      label: "يوتيوب",
      background: "#ff0000",
    },
  ];

  const footerLinks = [
    { name: "الرئيسية", href: "/#home" },
    { name: "عن الشركة", href: "/#about" },
    { name: "خدماتنا", href: "/#services" },
    { name: "باقاتنا", href: "/#packages" },
    { name: "اتصل بنا", href: "/#contact" },
  ];

  return (
    <footer
      className="overflow-hidden mt-8"
      style={{
        borderTop: "1px solid var(--border-warm)",
        backgroundColor: "var(--second-background)",
      }}>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* Brand column */}
          <div
            className="lg:col-span-5 p-8 md:p-12 flex flex-col justify-between gap-10 border-b lg:border-b-0 lg:border-l"
            style={{ borderColor: "var(--border-warm)" }}>
            <div>
              <div className="flex items-center gap-2.5 mb-6">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ color: "var(--accent-gold)" }}>
                  <path
                    d="M7 12h22l-2.5 14A2 2 0 0 1 24.5 28h-13a2 2 0 0 1-1.98-1.7L7 12Z"
                    fill="currentColor"
                  />
                  <path
                    d="M29 15h2.5a3.5 3.5 0 0 1 0 7H29"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M5 30h26"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
                <span
                  className="font-black text-xl tracking-tight"
                  style={{ color: "var(--main-color)" }}>
                  {brandName}
                </span>
              </div>
              <p
                className="text-sm leading-relaxed max-w-xs"
                style={{ color: "var(--main-color-dark)" }}>
                {description ||
                  "نصنع الذكريات بقطرة قهوة وابتسامة عريضة. خدمة استثنائية لمناسباتك الخاصة."}
              </p>
            </div>
            <p className="text-xs uppercase tracking-[2px]">
              © {currentYear} {brandName} — جميع الحقوق محفوظة
            </p>
          </div>

          {/* Links + Contact */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x rtl:sm:divide-x-reverse">
            <div
              className="p-8 md:p-12 border-b sm:border-b-0 sm:border-l rtl:sm:border-l-0 rtl:sm:border-r"
              style={{ borderColor: "var(--border-warm)" }}>
              <span
                className="text-xs uppercase tracking-[2px] mb-8 block"
                style={{ color: "var(--low-color)" }}>
                روابط سريعة
              </span>
              <ul
                className="divide-y"
                style={{ borderColor: "var(--secondary-accent)" }}>
                {footerLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="flex items-center justify-between py-3 text-sm transition-colors group"
                      style={{
                        color: "var(--main-color-dark)",
                        borderColor: "var(--secondary-accent)",
                      }}>
                      <span className="group-hover:opacity-70">
                        {link.name}
                      </span>
                      <span
                        className="rotate-[-135deg] text-xs transition-all"
                        style={{ color: "var(--accent-gold)" }}>
                        ↗
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 md:p-12">
              <span
                className="text-xs uppercase tracking-[2px] mb-8 block"
                style={{ color: "var(--low-color)" }}>
                تواصل معنا
              </span>
              <ul className="space-y-5">
                {address && (
                  <li className="flex items-start gap-3">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center mt-0.5 shrink-0"
                      style={{
                        backgroundColor: "var(--accent-gold-light)",
                        border: "1px solid var(--accent-gold)",
                      }}>
                      <MapPin
                        className="w-3.5 h-3.5"
                        style={{ color: "var(--accent-gold)" }}
                        strokeWidth={1.8}
                      />
                    </div>
                    <span
                      className="text-sm leading-relaxed"
                      style={{ color: "var(--main-color-dark)" }}>
                      {address}
                    </span>
                  </li>
                )}
                {email && (
                  <li className="flex items-start gap-3">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                      style={{
                        backgroundColor: "var(--accent-gold-light)",
                        border: "1px solid var(--accent-gold)",
                      }}>
                      <Mail
                        className="w-3.5 h-3.5"
                        style={{ color: "var(--accent-gold)" }}
                        strokeWidth={1.8}
                      />
                    </div>
                    <a
                      href={`mailto:${email}`}
                      className="text-sm font-medium transition-opacity hover:opacity-70 break-all"
                      style={{ color: "var(--main-color)" }}>
                      {email}
                    </a>
                  </li>
                )}
                {phone && (
                  <li className="flex items-start gap-3">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                      style={{
                        backgroundColor: "var(--accent-gold-light)",
                        border: "1px solid var(--accent-gold)",
                      }}>
                      <Phone
                        className="w-3.5 h-3.5"
                        style={{ color: "var(--accent-gold)" }}
                        strokeWidth={1.8}
                      />
                    </div>
                    <a
                      href={`tel:${phone}`}
                      dir="ltr"
                      className="text-sm font-medium transition-opacity hover:opacity-70"
                      style={{ color: "var(--main-color)" }}>
                      {phone}
                    </a>
                  </li>
                )}
              </ul>
              <div className="mt-8">
                <span
                  className="text-xs uppercase tracking-[2px] mb-4 block"
                  style={{ color: "var(--low-color)" }}>
                  تابعنا
                </span>
                <div className="flex items-center gap-4">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        style={{
                          backgroundColor: social.background,
                        }}
                        className={`transition-opacity hover:opacity-80 size-9 flex items-center justify-center text-white rounded-md`}>
                        <Icon className="w-5 h-5" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="px-8 md:px-12 py-5 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderTop: "1px solid var(--border-warm)" }}>
          <p
            className="text-xs uppercase tracking-[2px]"
            style={{ color: "var(--low-color)" }}>
            تجربة قهوة لا تُنسى
          </p>
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="w-1.5 h-1.5 rounded-full"
                style={{
                  backgroundColor:
                    i <= 3 ? "var(--accent-gold)" : "var(--border-warm)",
                  opacity: i <= 3 ? 0.8 : 1,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
