"use client";

import { FooterData } from "@/lib/responseType";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const mapEmbedSrc =
  "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7247.733529263881!2d46.7653!3d24.731454!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f013bec0d4b7b%3A0xeb4d9048d7b13647!2z2YLZh9mI2KzZiiDZiNi12KjYp9io2YrZhiDZgtmH2YjYqSDYp9mE2LHZitin2LY!5e0!3m2!1sar!2str!4v1728329118756!5m2!1sar!2str";

export default function ContactSection({
  address,
  phone,
  email,
  whatsapp,
}: FooterData & { whatsapp: string }) {
  const formattedWhatsapp = whatsapp.replace("+", "");

  const contactItems = [
    {
      icon: Phone,
      label: "الهاتف",
      value: phone,
      href: phone ? `tel:${phone}` : null,
      dir: "ltr" as const,
    },
    {
      icon: MessageCircle,
      label: "واتساب",
      value: whatsapp,
      href: whatsapp ? `https://wa.me/${formattedWhatsapp}` : null,
      dir: "ltr" as const,
    },
    {
      icon: Mail,
      label: "البريد الإلكتروني",
      value: email,
      href: email ? `mailto:${email}` : null,
      dir: "rtl" as const,
    },
    {
      icon: MapPin,
      label: "العنوان",
      value: address,
      href: null,
      dir: "rtl" as const,
    },
  ].filter((item) => item.value);

  return (
    <section id="contact" className="py-20 md:py-28" dir="rtl">
      <div className="px-4 md:px-6 lg:px-8 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span
            className="text-xs uppercase tracking-[3px] font-semibold mb-4 block"
            style={{ color: "var(--accent-gold)" }}>
            تواصل
          </span>
          <h2
            className="font-black text-3xl md:text-4xl leading-tight mb-6"
            style={{ color: "var(--main-color)" }}>
            خل الكلام بيننا سهل
          </h2>
          <p
            className="text-base leading-relaxed max-w-xl mx-auto"
            style={{ color: "var(--main-color-dark)" }}>
            نحن هنا لخدمتكم على مدار الساعة. اختر طريقة التواصل اللي تناسبك.
          </p>
        </div>

        {/* Primary CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12">
          <a
            href={`https://wa.me/${formattedWhatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-base transition-all duration-300 hover:scale-105 hover:shadow-lg"
            style={{
              backgroundColor: "#25D366",
              color: "white",
              boxShadow: "0 8px 24px rgba(37, 211, 102, 0.35)",
            }}>
            <FaWhatsapp className="w-6 h-6" />
            جاهزين لخدمتك — تواصل الآن
          </a>
        </motion.div>

        {/* Contact grid + Map */}
        <div className="grid lg:grid-cols-12 gap-6">
          {/* Contact cards */}
          <div className="lg:col-span-5 grid sm:grid-cols-2 gap-4">
            {contactItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.06 }}
                  viewport={{ once: true }}
                  className="p-5 rounded-2xl transition-all duration-300 hover:shadow-md"
                  style={{
                    backgroundColor: "var(--card-background)",
                    border: "1px solid var(--border-warm)",
                  }}>
                  <Icon
                    className="w-5 h-5 mb-3"
                    style={{ color: "var(--accent-gold)" }}
                    strokeWidth={1.8}
                  />
                  <span
                    className="text-xs uppercase tracking-[2px] block mb-1"
                    style={{ color: "var(--low-color)" }}>
                    {item.label}
                  </span>
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      dir={item.dir}
                      className="font-bold text-sm break-all transition-opacity hover:opacity-70"
                      style={{ color: "var(--main-color)" }}>
                      {item.value}
                    </a>
                  ) : (
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "var(--main-color-dark)" }}>
                      {item.value}
                    </p>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            viewport={{ once: true }}
            className="lg:col-span-7 relative aspect-4/3 md:aspect-video rounded-2xl overflow-hidden"
            style={{
              border: "1px solid var(--border-warm)",
              boxShadow: "0 4px 20px rgba(44,24,16,0.06)",
            }}>
            <iframe
              src={mapEmbedSrc}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              title="موقع قهوجيين الرياض على الخريطة"
              className="absolute inset-0 w-full h-full border-0"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
