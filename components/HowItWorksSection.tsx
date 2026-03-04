"use client";

import { MessageCircle, CalendarCheck, Coffee, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    icon: MessageCircle,
    number: "1",
    title: "تواصل معنا",
    description:
      "راسلنا عبر واتساب أو الهاتف، واخبرنا بنوع مناسبتك وتاريخها وعدد الضيوف.",
  },
  {
    icon: CalendarCheck,
    number: "2",
    title: "احجز الباقة",
    description:
      "نختار معك الباقة المناسبة، نحدد التفاصيل ونؤكد الحجز بدون تعقيد.",
  },
  {
    icon: Coffee,
    number: "3",
    title: "استمتع بالضيافة",
    description:
      "نصل في الموعد، نجهز كل شيء ونقدم لضيوفك تجربة قهوة عربية أصيلة.",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 md:py-28" dir="rtl">
      <div className="px-4 md:px-6 lg:px-8 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span
            className="text-xs uppercase tracking-[3px] font-semibold mb-4 block"
            style={{ color: "var(--accent-gold)" }}>
            كيف نعمل
          </span>
          <h2
            className="font-black text-3xl md:text-4xl lg:text-5xl leading-[1.15] mb-6"
            style={{ color: "var(--main-color)" }}>
            خطوات بسيطة لضيافة لا تُنسى
          </h2>
          <p
            className="text-base leading-relaxed max-w-xl mx-auto"
            style={{ color: "var(--main-color-dark)" }}>
            من أول تواصل حتى آخر فنجال — نرافقك في كل خطوة.
          </p>
        </div>

        {/* Steps — horizontal cards with arrows */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-4 items-stretch">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isLast = index === steps.length - 1;
            return (
              <div key={step.number} className="flex flex-1 items-stretch">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex-1 flex flex-col p-6 md:p-8 rounded-2xl transition-all duration-300 hover:shadow-lg"
                  style={{
                    backgroundColor: "var(--card-background)",
                    border: "1px solid var(--border-warm)",
                    boxShadow: "0 2px 12px rgba(44,24,16,0.04)",
                  }}>
                  {/* Step number */}
                  <span
                    className="text-4xl font-black mb-4 block opacity-20"
                    style={{ color: "var(--main-color)" }}>
                    {step.number}
                  </span>

                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{
                      backgroundColor: "var(--accent-gold-light)",
                      color: "var(--accent-gold)",
                    }}>
                    <Icon className="w-6 h-6" strokeWidth={2} />
                  </div>

                  <h3
                    className="font-black text-xl mb-3"
                    style={{ color: "var(--main-color)" }}>
                    {step.title}
                  </h3>

                  <p
                    className="text-sm leading-relaxed flex-1"
                    style={{ color: "var(--main-color-dark)" }}>
                    {step.description}
                  </p>
                </motion.div>

                {/* Arrow between steps (desktop) */}
                {!isLast && (
                  <div
                    className="hidden md:flex items-center justify-center shrink-0 px-2"
                    style={{ color: "var(--border-warm)" }}>
                    <ArrowLeft className="w-5 h-5" strokeWidth={2} />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
