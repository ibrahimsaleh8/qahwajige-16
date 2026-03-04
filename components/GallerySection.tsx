"use client";
import { GalleryImageData } from "@/lib/responseType";
import Image from "next/image";
import { motion } from "motion/react";
import { useState } from "react";

export function GallerySection({ gallery }: { gallery: GalleryImageData[] }) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-16 md:py-24">
      <div className="px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[3px] font-semibold mb-4 block">
            معرض الأعمال
          </span>
          <h2
            className="font-black text-3xl md:text-4xl lg:text-5xl leading-[1.15] mb-6"
            style={{ color: "var(--main-color)" }}>
            من ذكريات مناسباتنا
          </h2>
          <p
            className="text-base leading-relaxed"
            style={{ color: "var(--main-color-dark)" }}>
            لقطات حية من فعاليات ومناسبات قمنا بخدمتها في الرياض.
          </p>
        </div>

        {/* Gallery grid */}
        <div
          className="rounded-3xl overflow-hidden"
          style={{
            border: "1px solid var(--border-warm)",
            boxShadow: "0 4px 30px rgba(44,24,16,0.06)",
          }}>
          <div
            className={`grid gap-px ${gallery.length ? "grid-cols-2 md:grid-cols-3" : "grid-cols-1"} bg-border-warm`}>
            {gallery.length === 0 ? (
              <div
                className="flex items-center justify-center min-h-75 col-span-full"
                style={{
                  backgroundColor: "var(--second-background)",
                  color: "var(--low-color)",
                }}>
                <p className="text-sm">المعرض قيد التحديث</p>
              </div>
            ) : (
              gallery.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="relative aspect-square overflow-hidden cursor-pointer group bg-card-background">
                  <Image
                    src={image.url}
                    alt={image.alt ?? `صورة-${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div
                    className="absolute inset-0 transition-all duration-300"
                    style={{
                      background:
                        hoveredIndex === index
                          ? "rgba(44, 24, 16, 0.5)"
                          : "transparent",
                    }}
                  />

                  {hoveredIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                      className="absolute inset-0 flex items-end p-5">
                      <span
                        className="text-xs uppercase tracking-[2px] rounded-xl px-3 py-2"
                        style={{
                          backgroundColor: "var(--card-background)",
                          color: "var(--main-color)",
                          border: "1px solid var(--border-warm)",
                        }}>
                        {image.alt ?? `صورة-${index + 1}`}
                      </span>
                    </motion.div>
                  )}

                  <div
                    className="absolute top-3 right-3 w-8 h-8 rounded-xl flex items-center justify-center"
                    style={{
                      backgroundColor: "var(--accent-gold)",
                      color: "white",
                    }}>
                    <span className="text-xs font-bold">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                </motion.div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
