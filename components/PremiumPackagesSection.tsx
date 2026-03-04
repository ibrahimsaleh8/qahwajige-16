"use client";

import { PackageData } from "@/lib/responseType";
import { Check } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function PremiumPackagesSection({
  whatsapp,
  packages,
}: {
  whatsapp: string;
  packages: PackageData[];
}) {
  const whatsappNumber = whatsapp.replace("+", "");

  if (!packages?.length) return null;

  return (
    <section id="packages" className="py-20 md:py-28" dir="rtl">
      <div className="px-4 md:px-6 lg:px-8 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span
            className="text-xs uppercase tracking-[3px] font-semibold block mb-4"
            style={{ color: "var(--accent-gold)" }}>
            باقاتنا
          </span>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-6"
            style={{ color: "var(--main-color)" }}>
            اختر الباقة المناسبة لفعاليتك
          </h2>
          <p
            className="text-base md:text-lg leading-relaxed max-w-2xl mx-auto"
            style={{ color: "var(--main-color-dark)" }}>
            باقات مصممة بعناية لتناسب جميع أنواع المناسبات — من اللقاءات الخاصة
            إلى الفعاليات الكبيرة.
          </p>
        </div>

        {/* Packages */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map((pkg, index) => {
            const isFeatured = index === 1;
            const message = encodeURIComponent(
              `مرحباً 👋 أود طلب باقة "${pkg.title}" من فضلكم.`,
            );
            const waLink = `https://wa.me/${whatsappNumber}?text=${message}`;

            return (
              <motion.article
                key={pkg.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`group relative flex flex-col overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1 ${
                  isFeatured ? "lg:scale-[1.02]" : ""
                }`}
                style={{
                  backgroundColor: "var(--card-background)",
                  border: "1px solid var(--border-warm)",
                  boxShadow: "0 4px 20px rgba(44,24,16,0.06)",
                }}>
                {/* Image */}
                {pkg.image && (
                  <div className="relative aspect-3/2 overflow-hidden">
                    <Image
                      src={pkg.image}
                      alt={pkg.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {isFeatured && (
                      <span
                        className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold"
                        style={{
                          backgroundColor: "var(--accent-gold)",
                          color: "white",
                        }}>
                        الأكثر طلباً
                      </span>
                    )}
                  </div>
                )}

                {/* Content */}
                <div className="flex flex-col flex-1 p-6 md:p-7">
                  <h3
                    className="text-xl font-black mb-5"
                    style={{ color: "var(--main-color)" }}>
                    {pkg.title}
                  </h3>

                  <ul className="space-y-3 mb-8">
                    {pkg.features?.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2.5 text-sm"
                        style={{ color: "var(--main-color-dark)" }}>
                        <Check
                          className="size-4 mt-0.5 shrink-0"
                          style={{ color: "var(--accent-gold)" }}
                          strokeWidth={2.5}
                        />
                        <span className="leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 mt-auto hover:bg-[#1da851]"
                    style={{
                      backgroundColor: "#25D366",
                      color: "white",
                    }}>
                    <FaWhatsapp className="size-5" />
                    اطلب الباقة الآن
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
