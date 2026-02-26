import Image from "next/image";
import { Plus, Instagram } from "lucide-react";

const doctors = [
    {
        name: "Dr. Venu Kumari",
        role: "Chief Dermatologist",
        image: "/images/1-Dr-Venu-Kumari.jpg",
        specialty: "Aesthetic Expert",
        degrees: "MBBS, MD – DVL",
        instagram: "https://www.instagram.com/drvenusmd/",
    },
    {
        name: "Dr. G. Sharath Chandra Reddy",
        role: "Chief Plastic Surgeon",
        image: "/images/2-Chandra-Reddy.jpg",
        specialty: "Cosmetic Surgery",
        degrees: "MS, M.Ch (Plastic Surgery)",
    },
    {
        name: "Dr. K. Anusha",
        role: "Dermatologist",
        image: "/images/3-dr-k-anusha.jpg",
        specialty: "Skin Specialist",
        degrees: "MBBS, MD – DVL",
    },
];

export default function Doctors() {
    return (
        <section className="py-12 md:py-20 bg-white overflow-hidden relative">
            {/* Subtle Background Ornament */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -mr-48 -mt-48 opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -ml-48 -mb-48 opacity-50"></div>

            <div className="max-w-[1240px] mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-16 gap-6">
                    <div className="max-w-xl">
                        <div className="text-[11px] md:text-[12px] uppercase tracking-[0.4em] font-medium text-primary/80 mb-3 flex items-center gap-2 font-sans">
                            <span className="w-8 h-px bg-primary/20"></span>
                            Our Medical Team
                        </div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-primary leading-tight">
                            Meet Our <span className="italic">Specialist</span> Doctors
                        </h2>
                    </div>
                    <div className="hidden md:block">
                        <p className="text-gray-700 text-sm max-w-xs font-light leading-relaxed">
                            A highly-skilled team of experts committed to delivering the most advanced level of skin and hair care.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 sm:gap-8 lg:gap-12 pb-12">
                    {doctors.map((doc, i) => (
                        <div key={i} className="group relative">
                            {/* Main Image Container */}
                            <div className="relative aspect-[4/5] sm:aspect-[4/4.5] rounded-[2rem] overflow-hidden bg-gray-50 shadow-lg group-hover:shadow-2xl transition-all duration-500 border border-gray-100">
                                <Image
                                    src={doc.image}
                                    alt={doc.name}
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                                {/* Overlay Gradient for better text contrast */}
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                {/* Floating Info Card - Now integrated "on image" */}
                                <div className="absolute left-3 right-3 bottom-3 sm:left-4 sm:right-4 sm:bottom-4 bg-white/95 backdrop-blur-md rounded-2xl p-4 sm:p-5 shadow-xl transform transition-all duration-500 group-hover:translate-y-[-5px] border border-white/20">
                                    <div className="space-y-1">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] font-bold text-secondary mb-1">
                                                    {doc.role}
                                                </p>
                                                <h4 className="text-base sm:text-lg font-serif text-primary font-bold pr-2 leading-tight">
                                                    {doc.name}
                                                </h4>
                                            </div>
                                            {doc.instagram ? (
                                                <a
                                                    href={doc.instagram}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center text-secondary shrink-0 hover:bg-secondary hover:text-white transition-all duration-300"
                                                >
                                                    <Instagram size={14} />
                                                </a>
                                            ) : (
                                                <div className="w-8 h-8 rounded-full bg-primary/5 flex items-center justify-center text-primary/40 shrink-0">
                                                    <Plus size={14} />
                                                </div>
                                            )}
                                        </div>
                                        <div className="pt-3 border-t border-gray-100 mt-3 flex items-center justify-between">
                                            <span className="text-[10px] sm:text-[11px] text-gray-500 font-medium">{doc.degrees}</span>
                                            <span className="text-[8px] sm:text-[9px] bg-primary/5 text-primary px-2 py-0.5 rounded font-bold uppercase tracking-wider">{doc.specialty}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
