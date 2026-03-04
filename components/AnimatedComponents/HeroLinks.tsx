"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { Images } from "lucide-react";

export default function HeroLinks({
  whatsApp,
}: {
  whatsApp?: string | undefined;
}) {
  return (
    <div className="flex flex-wrap gap-4 justify-center" dir="rtl">
      {whatsApp && (
        <motion.a
          href={`https://wa.me/${whatsApp.replace(/\+/g, "")}?text=`}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="group flex items-center gap-3 bg-green-700 text-white hover:bg-green-800 px-8 py-4 rounded-full font-bold text-base transition-all duration-300"
          whileHover={{
            scale: 1.03,
            boxShadow: "0 8px 30px rgba(37, 211, 102, 0.5)",
          }}
          whileTap={{ scale: 0.98 }}>
          <FaWhatsapp className="w-5 h-5" />
          اطلب الخدمة الآن
        </motion.a>
      )}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}>
        <Link
          href="#services"
          className="group flex items-center border-2 border-black gap-3 px-8 py-4 rounded-full font-bold text-base transition-all duration-300 hover:bg-main-color hover:text-white active:scale-[0.98]">
          <Images className="w-5 h-5" strokeWidth={2} />
          عرض خدماتنا
        </Link>
      </motion.div>
    </div>
  );
}
