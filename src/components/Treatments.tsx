import Link from "next/link";
import Image from "next/image";

const treatments = [
  {
    title: "Skin Specialist",
    description: "Medical-grade solutions for clear, acne-free skin.",
    image: "/images/treatments/skin-specialist.png",
    link: "/skin-treatment",
  },
  {
    title: "Pimple Treatment",
    description: "Medical-grade solutions for clear, acne-free skin.",
    image: "/images/treatments/pimple-treatment.png",
    link: "/pimple-treatment",
  },
  {
    title: "Hair Transplants",
    description: "Natural-looking results with DHT techniques.",
    image: "/images/hair-transplant.png",
    link: "/hair-transplant",
  },
  {
    title: "PRP Hair Treatment",
    description:
      "Stimulate hair growth and improve scalp health with PRP therapy.",
    image: "/images/treatments/prp-hair-treatment.png",
    link: "/prp-hair-treatment",
  },
  {
    title: "Skin Lightening",
    description: "Clinical therapies for a brighter complexion.",
    image: "/images/treatments/skin-lightening.png",
    link: "/skin-lightening",
  },
  {
    title: "Acne Removal",
    description:
      "Advanced clinical procedures for permanent acne scar and spot removal.",
    image: "/images/treatments/acne-removal.png",
    link: "/acne-treatment",
  },
  // {
  //     title: "Laser Removal",
  //     description: "Silky smooth skin with safe laser technology.",
  //     image: "/images/laser-removal.png",
  //     link: "/laser-hair-removal"
  // },
  // {
  //     title: "Body Sculpting",
  //     description: "Non-invasive fat reduction and sculpting.",
  //     image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80&w=800",
  //     link: "/body-sculpting"
  // }
];

export default function Treatments() {
  return (
    <section className="py-10 md:pb-16 md:pt-8 px-4 md:px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-[10px] md:text-[12px] uppercase tracking-[0.4em] font-medium text-primary/80 mb-2 font-sans">
            Our Expertise
          </h2>
          <h3 className="text-xl sm:text-3xl md:text-4xl font-serif text-primary leading-tight">
            Advanced Clinical Treatments
          </h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
          {treatments.map((t, i) => (
            <div
              key={i}
              className="group relative aspect-[4/5.5] sm:aspect-[4/5.5] overflow-hidden rounded-2xl md:rounded-[2rem] bg-gray-50 shadow-lg shadow-black/5 hover:-translate-y-1 transition-all duration-700"
            >
              {/* Base Image */}
              <Image
                src={t.image}
                alt={t.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />

              {/* Base Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent group-hover:via-black/40 transition-all duration-500"></div>

              {/* Shutter Reveal (Middle to Sides) - Simplified for mobile */}
              <div className="absolute inset-0 z-10 pointer-events-none flex opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="h-full w-1/2 bg-[#1f4d3a]/10 backdrop-blur-[1px] -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
                <div className="h-full w-1/2 bg-[#1f4d3a]/10 backdrop-blur-[1px] translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
              </div>

              {/* Content */}
              <div className="absolute inset-0 p-3.5 md:p-5 flex flex-col justify-end z-20">
                <h4 className="text-[13px] md:text-base lg:text-lg font-serif text-white mb-1 md:mb-2 leading-tight group-hover:-translate-y-0.5 transition-all duration-500">
                  {t.title}
                </h4>

                <div className="max-h-0 overflow-hidden group-hover:max-h-32 transition-all duration-700 ease-in-out">
                  <p className="hidden md:block text-[11px] text-white/80 mb-4 line-clamp-2 leading-relaxed">
                    {t.description}
                  </p>
                  <Link
                    href={t.link}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 md:px-4 md:py-2 bg-white text-primary rounded-full text-[9px] font-bold uppercase tracking-wider hover:bg-[#1f4d3a] hover:text-white transition-all duration-300 shadow-md"
                  >
                    Details
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="4"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
