import { GalleryImageData, ServicesSectionData } from "@/lib/responseType";
import Image from "next/image";

export default function ServicesSection({
  description,
  items,
  label,
  title,
  images,
}: ServicesSectionData & {
  images: GalleryImageData[];
}) {
  return (
    <section id="services" className="py-16 md:py-24">
      <div className="px-4 md:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span
            className="text-xs uppercase tracking-[3px] font-semibold mb-4 block"
            style={{ color: "var(--accent-gold)" }}>
            {label}
          </span>
          <h2
            className="font-black text-3xl md:text-4xl lg:text-5xl leading-[1.15] mb-6"
            style={{ color: "var(--main-color)" }}>
            {title}
          </h2>
          <p
            className="text-base leading-relaxed"
            style={{ color: "var(--main-color-dark)" }}>
            {description}
          </p>
        </div>

        {/* Services grid — bento style */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {items?.map((card, index) => {
            const image = images?.[index] ?? images?.[0];
            return (
              <div
                key={card.title}
                className="group flex flex-col rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2"
                style={{
                  backgroundColor: "var(--card-background)",
                  border: "1px solid var(--border-warm)",
                  boxShadow: "0 4px 20px rgba(44,24,16,0.06)",
                }}>
                {image?.url ? (
                  <div className="relative w-full aspect-4/3 overflow-hidden">
                    <Image
                      src={image.url}
                      alt={image.alt || ""}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 bg-main-color text-white right-4 w-10 h-10 rounded-xl flex items-center justify-center font-black text-sm">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                  </div>
                ) : (
                  <div
                    className="w-full aspect-4/3 flex items-center justify-center"
                    style={{ backgroundColor: "var(--secondary-accent)" }}>
                    <span
                      className="text-4xl font-black opacity-20"
                      style={{ color: "var(--main-color)" }}>
                      0{index + 1}
                    </span>
                  </div>
                )}

                <div className="flex flex-col flex-1 p-6 md:p-8">
                  <h3
                    className="font-black text-lg leading-snug mb-3"
                    style={{ color: "var(--main-color)" }}>
                    {card.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed flex-1"
                    style={{ color: "var(--main-color-dark)" }}>
                    {card.description}
                  </p>
                  <div
                    className="mt-6 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                    style={{
                      backgroundColor: "var(--secondary-accent)",
                      border: "1px solid var(--border-warm)",
                    }}>
                    <span
                      className="text-lg rotate-[-135deg]"
                      style={{ color: "var(--accent-gold)" }}>
                      ↗
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
