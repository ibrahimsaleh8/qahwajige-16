"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "500+", label: "مناسبة نُفذت" },
  { value: "10+", label: "سنوات خبرة" },
  { value: "100%", label: "رضا العملاء" },
];

export default function StatsSection() {
  return (
    <section className="py-16 md:py-20" dir="rtl">
      <div
        className="mx-4 md:mx-6 lg:mx-8 rounded-2xl py-12 md:py-16"
        style={{
          backgroundColor: "var(--main-color)",
          boxShadow: "0 8px 40px rgba(44,24,16,0.2)",
        }}>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 max-w-4xl mx-auto px-6 md:px-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center">
              <span
                className="block text-4xl md:text-5xl font-black mb-2"
                style={{ color: "var(--accent-gold)" }}>
                {stat.value}
              </span>
              <span
                className="text-sm md:text-base font-medium"
                style={{ color: "rgba(255,255,255,0.9)" }}>
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
