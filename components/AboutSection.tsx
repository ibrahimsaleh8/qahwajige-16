import { AboutSectionData, WhyUsFeatureData } from "@/lib/responseType";
import Image from "next/image";

export default function AboutSection({
  description1,
  label,
  title,
  features,
  whyUsDescription,
  image,
}: AboutSectionData & {
  features?: WhyUsFeatureData[];
  whyUsDescription: string;
}) {
  return (
    <section id="about" className="overflow-hidden py-16 md:py-24">
      <div
        className="rounded-3xl overflow-hidden mx-4 md:mx-6 lg:mx-8"
        style={{
          backgroundColor: "var(--card-background)",
          boxShadow: "0 4px 30px rgba(44,24,16,0.08)",
          border: "1px solid var(--border-warm)",
        }}>
        <div className="grid lg:grid-cols-12">
          {/* Image */}
          <div className="lg:col-span-5 min-h-75 lg:min-h-125 relative overflow-hidden">
            {image ? (
              <>
                <Image
                  src={image}
                  alt={title ?? ""}
                  fill
                  className="object-cover"
                  priority
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(26,17,12,0.4) 0%, transparent 50%)",
                  }}
                />
              </>
            ) : (
              <div
                className="absolute inset-0 flex items-center justify-center"
                style={{ backgroundColor: "var(--secondary-accent)" }}>
                <svg
                  width="120"
                  height="120"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ color: "var(--accent-gold)", opacity: 0.4 }}>
                  <path
                    d="M7 12h22l-2.5 14A2 2 0 0 1 24.5 28h-13a2 2 0 0 1-1.98-1.7L7 12Z"
                    fill="currentColor"
                  />
                  <path
                    d="M29 15h2.5a3.5 3.5 0 0 1 0 7H29"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M5 30h26"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="lg:col-span-7 flex flex-col justify-center p-8 md:p-12 lg:p-16">
            <span className="text-xs uppercase mb-4 tracking-[3px] font-semibold">
              {label}
            </span>

            <h2
              className="font-black text-3xl md:text-4xl lg:text-5xl leading-[1.15] mb-8"
              style={{ color: "var(--main-color)" }}>
              {title}
            </h2>

            {features && features.length > 0 && (
              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                {features.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-xl transition-colors hover:bg-white/50"
                    style={{
                      border: "1px solid var(--border-warm)",
                      backgroundColor: "var(--main-background)",
                    }}>
                    <span
                      className="text-xs font-black shrink-0 w-8 h-8 rounded-lg flex items-center justify-center"
                      style={{
                        backgroundColor: "var(--accent-gold)",
                        color: "white",
                      }}>
                      {index + 1}
                    </span>
                    <div>
                      <h3
                        className="font-bold text-base mb-1"
                        style={{ color: "var(--main-color)" }}>
                        {item.title}
                      </h3>
                      <p
                        className="text-sm leading-relaxed"
                        style={{ color: "var(--main-color-dark)" }}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {description1 && (
              <p
                className="text-base leading-relaxed mb-4"
                style={{ color: "var(--main-color-dark)" }}>
                {description1}
              </p>
            )}
            {whyUsDescription && (
              <p
                className="text-base leading-relaxed"
                style={{ color: "var(--main-color-dark)" }}>
                {whyUsDescription}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
