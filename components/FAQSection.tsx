"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "كم مقدماً أحتاج للحجز؟",
    answer:
      "ننصح بالحجز قبل أسبوع على الأقل، خاصة في مواسم المناسبات. للحفلات الكبيرة أو الأعراس، يُفضل التواصل قبل أسبوعين أو أكثر.",
  },
  {
    question: "هل تخدمون خارج الرياض؟",
    answer:
      "نعم، نقدم خدماتنا في الرياض والمناطق المجاورة. قد يُطبق رسوم إضافية للمسافات البعيدة — يمكنك الاستفسار عند الحجز.",
  },
  {
    question: "ماذا يشمل سعر الباقة؟",
    answer:
      "تشمل الباقات عادةً: القهوة العربية، الدلال والفناجيل، صبّابين محترفين، ومستلزمات الضيافة. تفاصيل كل باقة تظهر عند الاختيار.",
  },
  {
    question: "هل يمكن تخصيص الباقة حسب احتياجاتي؟",
    answer:
      "بالتأكيد. نرحب بطلبات التخصيص — عدد الضيوف، مدة الخدمة، إضافات خاصة. تواصل معنا وننسق معك التفاصيل.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 md:py-28" dir="rtl">
      <div className="px-4 md:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span
            className="text-xs uppercase tracking-[3px] font-semibold mb-4 block"
            style={{ color: "var(--accent-gold)" }}>
            أسئلة شائعة
          </span>
          <h2
            className="font-black text-3xl md:text-4xl leading-[1.15] mb-6"
            style={{ color: "var(--main-color)" }}>
            كل ما تريد معرفته
          </h2>
          <p
            className="text-base leading-relaxed"
            style={{ color: "var(--main-color-dark)" }}>
            أجوبة سريعة على الأسئلة الأكثر تكرراً من عملائنا.
          </p>
        </div>

        {/* FAQ accordion */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={false}
                className="rounded-2xl overflow-hidden transition-all duration-300"
                style={{
                  backgroundColor: "var(--card-background)",
                  border: "1px solid var(--border-warm)",
                  boxShadow: isOpen
                    ? "0 8px 30px rgba(44,24,16,0.08)"
                    : "0 2px 8px rgba(44,24,16,0.03)",
                }}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between gap-4 p-6 md:p-7 text-right transition-colors duration-200">
                  <span
                    className="font-bold text-base md:text-lg"
                    style={{
                      color: isOpen ? "var(--main-color)" : "var(--main-color-dark)",
                    }}>
                    {faq.question}
                  </span>
                  <span
                    className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors duration-200"
                    style={{
                      backgroundColor: isOpen
                        ? "var(--accent-gold)"
                        : "var(--secondary-accent)",
                      color: isOpen ? "white" : "var(--main-color-dark)",
                    }}>
                    {isOpen ? (
                      <Minus className="w-4 h-4" strokeWidth={2.5} />
                    ) : (
                      <Plus className="w-4 h-4" strokeWidth={2.5} />
                    )}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden">
                      <div
                        className="px-6 md:px-7 pb-6 md:pb-7 pt-0 leading-relaxed text-sm md:text-base"
                        style={{
                          color: "var(--main-color-dark)",
                          borderTop: "1px solid var(--border-warm)",
                        }}>
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
