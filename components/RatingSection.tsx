"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Toast } from "@/app/(Dashboard)/_components/Toast";
import { APP_URL } from "@/lib/ProjectId";

const STORAGE_KEY = (projectId: string) => `rating_${projectId}`;

interface RatingSectionProps {
  projectId: string;
  averageRating: number;
  totalRatings: number;
}

export default function RatingSection({
  projectId,
  averageRating,
  totalRatings,
}: RatingSectionProps) {
  const [selectedRating, setSelectedRating] = useState<number>(0);
  const [hoverRating, setHoverRating] = useState<number>(0);
  const [submitted, setSubmitted] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY(projectId));
      if (stored) {
        const value = parseInt(stored, 10);
        if (value >= 1 && value <= 5) setSubmitted(value);
      }
    } catch {}
    setMounted(true);
  }, [projectId]);

  const displayRating = hoverRating || selectedRating;

  const handleStarClick = async (value: number) => {
    if (submitted !== null) return;
    setSelectedRating(value);
    setIsLoading(true);
    try {
      const res = await fetch(`${APP_URL}/api/rating`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ projectId, stars: value }),
      });
      const data = await res.json();
      if (res.ok) {
        setSubmitted(value);
        try {
          localStorage.setItem(STORAGE_KEY(projectId), String(value));
        } catch {}
        Toast({ icon: "success", message: "شكراً لتقييمك!" });
      } else {
        setSelectedRating(0);
        Toast({
          icon: "error",
          message: data.message || data.error || "حدث خطأ في التقييم",
        });
      }
    } catch {
      setSelectedRating(0);
      Toast({ icon: "error", message: "حدث خطأ في التقييم" });
    } finally {
      setIsLoading(false);
    }
  };

  const renderStars = (value: number, interactive = false) => (
    <div className="flex justify-center gap-2" dir="rtl">
      {[1, 2, 3, 4, 5].map((star) => {
        const isActive = star <= value;
        return (
          <span key={star} className="relative inline-block">
            {interactive ? (
              <motion.button
                type="button"
                disabled={isLoading || !mounted}
                onClick={() => handleStarClick(star)}
                onMouseEnter={() => setHoverRating(star)}
                onMouseLeave={() => setHoverRating(0)}
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                className="p-2.5 rounded-xl transition-colors duration-200 disabled:opacity-40 disabled:cursor-not-allowed focus:outline-none"
                style={{
                  backgroundColor: isActive
                    ? "var(--accent-gold)"
                    : "var(--secondary-accent)",
                  border: `1px solid ${isActive ? "var(--accent-gold)" : "var(--border-warm)"}`,
                }}
                aria-label={`تقييم ${star} من 5`}>
                <Star
                  className="w-6 h-6 md:w-7 md:h-7 transition-colors duration-200"
                  style={{
                    fill: isActive ? "white" : "transparent",
                    color: isActive ? "white" : "var(--low-color)",
                  }}
                  strokeWidth={1.8}
                />
              </motion.button>
            ) : (
              <div
                className="p-2.5 rounded-xl"
                style={{
                  backgroundColor: isActive
                    ? "var(--accent-gold)"
                    : "var(--secondary-accent)",
                  border: `1px solid ${isActive ? "var(--accent-gold)" : "var(--border-warm)"}`,
                }}>
                <Star
                  className="w-6 h-6 md:w-7 md:h-7"
                  style={{
                    fill: isActive ? "white" : "transparent",
                    color: isActive ? "white" : "var(--low-color)",
                  }}
                  strokeWidth={1.8}
                />
              </div>
            )}
          </span>
        );
      })}
    </div>
  );

  return (
    <section id="rating" className="py-16 md:py-24">
      <div
        className="rounded-3xl overflow-hidden mx-4 md:mx-6 lg:mx-8"
        style={{
          backgroundColor: "var(--card-background)",
          border: "1px solid var(--border-warm)",
          boxShadow: "0 4px 30px rgba(44,24,16,0.06)",
        }}>
        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* Header + Stats */}
          <div className="lg:col-span-5 p-8 md:p-12 flex flex-col justify-center gap-8">
            <div>
              <span
                className="text-xs uppercase tracking-[3px] font-semibold mb-4 block"
                style={{ color: "var(--accent-gold)" }}>
                التقييمات
              </span>
              <h2
                className="font-black text-3xl md:text-4xl leading-[1.15] mb-4"
                style={{ color: "var(--main-color)" }}>
                قيّم تجربتك معنا
              </h2>
            </div>

            {(averageRating > 0 || totalRatings > 0) && (
              <div className="flex gap-12">
                {averageRating > 0 && (
                  <div>
                    <span className="text-4xl font-black block mb-1">
                      {averageRating.toFixed(1)}
                    </span>
                    <div className="flex gap-0.5 mb-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className="w-3 h-3"
                          style={{
                            fill:
                              star <= Math.round(averageRating)
                                ? "var(--accent-gold)"
                                : "transparent",
                            color:
                              star <= Math.round(averageRating)
                                ? "var(--accent-gold)"
                                : "var(--border-warm)",
                          }}
                          strokeWidth={1.5}
                        />
                      ))}
                    </div>
                    <span className="text-xs">متوسط التقييم</span>
                  </div>
                )}
                {totalRatings > 0 && (
                  <div>
                    <span
                      className="text-4xl font-black block mb-1"
                      style={{ color: "var(--main-color)" }}>
                      {totalRatings}
                    </span>
                    <span className="text-xs">
                      {totalRatings === 1 ? "تقييم" : "تقييمات"}
                    </span>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Rating interaction */}
          <div
            className="lg:col-span-7 p-8 md:p-12 flex flex-col items-center justify-center gap-6 border-t lg:border-t-0 lg:border-l"
            style={{
              backgroundColor: "var(--main-background)",
              borderColor: "var(--border-warm)",
            }}>
            <p
              className="font-black text-xl md:text-2xl text-center mb-2"
              style={{ color: "var(--main-color)" }}>
              وش رأيك في تجربتك معنا؟
            </p>
            <p
              className="text-sm text-center mb-4"
              style={{ color: "var(--main-color-dark)" }}>
              رأيك يهمنا ويساعدنا نطور خدماتنا باستمرار.
            </p>

            {submitted !== null && mounted ? (
              <motion.div
                className="flex flex-col items-center gap-6"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}>
                {renderStars(submitted, false)}
                <div
                  className="px-8 py-5 rounded-2xl text-center"
                  style={{
                    backgroundColor: "var(--accent-gold-light)",
                    border: "1px solid var(--accent-gold)",
                  }}>
                  <p
                    className="font-black text-lg mb-1"
                    style={{ color: "var(--main-color)" }}>
                    يعطيك العافية!
                  </p>
                  <p
                    className="text-sm"
                    style={{ color: "var(--main-color-dark)" }}>
                    تقييمك يساعدنا نكون أفضل
                  </p>
                </div>
              </motion.div>
            ) : (
              <div className="flex flex-col items-center gap-6 w-full">
                {renderStars(displayRating || 0, true)}
                <p className="text-sm" style={{ color: "var(--low-color)" }}>
                  {mounted && !isLoading && "اضغط على النجوم للتقييم"}
                  {isLoading && (
                    <span className="flex items-center gap-2">
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                        }}>
                        ◌
                      </motion.span>
                      جاري الإرسال...
                    </span>
                  )}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
