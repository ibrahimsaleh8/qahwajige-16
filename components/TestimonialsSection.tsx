"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "تجربة مميزة جداً. الصبّابون محترفون والقهوة كانت على أعلى مستوى. أنصح بهم لكل من يبحث عن ضيافة عربية أصيلة.",
    author: "عميل — حفل زفاف",
  },
  {
    quote:
      "تعامل راقٍ والتزام تام بالمواعيد. ضيوفنا أعجبوا بالخدمة وطريقة التقديم. شكراً لكم.",
    author: "عميل — مناسبة عائلية",
  },
  {
    quote:
      "من أفضل خدمات القهوة العربية في الرياض. الباقات مناسبة والأسعار معقولة. نتعامل معهم دائماً.",
    author: "عميل — فعالية شركات",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 md:py-28" dir="rtl">
      <div className="px-4 md:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-xs uppercase tracking-[3px] font-semibold mb-4 block">
            آراء العملاء
          </span>
          <h2
            className="font-black text-3xl md:text-4xl leading-[1.15] mb-6"
            style={{ color: "var(--main-color)" }}>
            ماذا يقول عملاؤنا
          </h2>
          <p
            className="text-base leading-relaxed max-w-xl mx-auto"
            style={{ color: "var(--main-color-dark)" }}>
            ثقة عملائنا هي أكبر دليل على جودة خدماتنا.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 md:p-8 rounded-2xl flex flex-col"
              style={{
                backgroundColor: "var(--card-background)",
                border: "1px solid var(--border-warm)",
                boxShadow: "0 4px 20px rgba(44,24,16,0.04)",
              }}>
              <Quote
                className="w-8 h-8 mb-4 opacity-30"
                style={{ color: "var(--accent-gold)" }}
                strokeWidth={1.5}
              />
              <p
                className="text-sm md:text-base leading-relaxed flex-1 mb-6"
                style={{ color: "var(--main-color-dark)" }}>
                {item.quote}
              </p>
              <span
                className="text-xs font-semibold"
                style={{ color: "var(--low-color)" }}>
                — {item.author}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
