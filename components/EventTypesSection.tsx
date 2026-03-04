"use client";

import { motion } from "framer-motion";
import { Heart, Briefcase, Users, Sparkles } from "lucide-react";

const events = [
  {
    icon: Heart,
    title: "أعراس",
    description: "ضيافة راقية ليومكم الخاص",
  },
  {
    icon: Briefcase,
    title: "فعاليات شركات",
    description: "اجتماعات ومؤتمرات رسمية",
  },
  {
    icon: Users,
    title: "مناسبات عائلية",
    description: "تجمعات وزيارات عائلية",
  },
  {
    icon: Sparkles,
    title: "فعاليات خاصة",
    description: "حفلات واحتفالات متنوعة",
  },
];

export default function EventTypesSection() {
  return (
    <section id="events" className="py-20 md:py-28" dir="rtl">
      <div className="px-4 md:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span
            className="text-xs uppercase tracking-[3px] font-semibold mb-4 block"
            style={{ color: "var(--accent-gold)" }}>
            أنواع المناسبات
          </span>
          <h2
            className="font-black text-3xl md:text-4xl leading-[1.15] mb-6"
            style={{ color: "var(--main-color)" }}>
            نخدم جميع مناسباتكم
          </h2>
          <p
            className="text-base leading-relaxed max-w-xl mx-auto"
            style={{ color: "var(--main-color-dark)" }}>
            من اللقاءات الصغيرة إلى الفعاليات الكبرى — نجهز لكم تجربة ضيافة لا تُنسى.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {events.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl text-center transition-all duration-300 hover:-translate-y-1"
                style={{
                  backgroundColor: "var(--card-background)",
                  border: "1px solid var(--border-warm)",
                  boxShadow: "0 2px 12px rgba(44,24,16,0.04)",
                }}>
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
                  style={{
                    backgroundColor: "var(--accent-gold-light)",
                    color: "var(--accent-gold)",
                  }}>
                  <Icon className="w-6 h-6" strokeWidth={2} />
                </div>
                <h3
                  className="font-bold text-base mb-2"
                  style={{ color: "var(--main-color)" }}>
                  {item.title}
                </h3>
                <p
                  className="text-xs leading-relaxed"
                  style={{ color: "var(--main-color-dark)" }}>
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
