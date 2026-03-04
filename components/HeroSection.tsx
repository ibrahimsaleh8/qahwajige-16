import HeroLinks from "./AnimatedComponents/HeroLinks";
import { HeroSectionData } from "@/lib/responseType";

export default function HeroSection({
  headline,
  subheadline,
  whatsApp,
}: HeroSectionData) {
  return (
    <section id="home" className="relative overflow-hidden" dir="rtl">
      <div className="flex flex-col justify-center items-center text-center px-6 py-16 md:px-12 lg:px-16 lg:py-24 order-2 lg:order-1">
        <span
          className="text-xs uppercase tracking-[4px] font-semibold mb-6 block"
          style={{ color: "var(--accent-gold)" }}>
          ضيافة عربية أصيلة
        </span>
        <h1
          className="font-display font-black leading-[1.1] text-[clamp(2.25rem,6vw,4.5rem)] mb-6"
          style={{ color: "var(--main-color)" }}>
          {headline}
        </h1>
        <p
          className="text-base md:text-lg max-w-xl mb-10 leading-relaxed"
          style={{ color: "var(--main-color-dark)" }}>
          {subheadline}
        </p>
        <HeroLinks whatsApp={whatsApp} />
      </div>
    </section>
  );
}
