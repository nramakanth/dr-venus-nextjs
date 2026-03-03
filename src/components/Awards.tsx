import Image from "next/image";
import { Users, Sparkles } from "lucide-react";


const recognitions = [
    {
        image: "/images/Award-2.svg",
        alt: "Times Excellence Award - Dermatology",
        subtitle: "Dermatology Category - No.2",
    },
    {
        image: "/images/Award-1.svg",
        alt: "Times Excellence Award - Trichology",
        subtitle: "Trichology Category - No.2",
    },
    {
        image: "/images/Award-3.svg",
        alt: "Hi9 - Best Dermatologists Award",
        subtitle: "Best Dermatologists - Hi9",
        isMajor: true,
    },
];

export default function Awards() {
    return (
        <section className="pb-4 pt-16 md:pt-24 bg-white overflow-hidden border-t border-primary/5 ">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-12 lg:mb-20">
                    <h2 className="text-[11px] md:text-[12px] uppercase tracking-[0.4em] font-medium text-primary/80 mb-3 font-sans">Achievements</h2>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif text-primary leading-tight">Awards and Recognitions</h3>
                </div>


                {/* 1) Award Images - Single Row Layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 mb-12 items-end">
                    {recognitions.map((r, i) => (
                        <div key={i} className="group flex flex-col items-center text-center px-4">
                            <div className="relative w-full max-w-[200px] md:max-w-[240px] aspect-[4/3] transition-transform duration-700 hover:scale-105">
                                <Image
                                    src={r.image}
                                    alt={r.alt}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Statistics for Mobile View */}
                <div className="lg:hidden mb-12">
                    <div className="relative overflow-hidden rounded-2xl border border-primary/5 bg-primary/[0.02] backdrop-blur-sm shadow-xl shadow-primary/5">
                        <div className="grid grid-cols-2 divide-x divide-y divide-primary/5">
                            {[
                                { label: "Consultations", value: "75,779+", icon: Users },
                                { label: "Treatments", value: "19,892+", icon: Sparkles },
                                { label: "Transplants", value: "1,076+", icon: Users },
                                { label: "Anti Ageing", value: "5,015+", icon: Sparkles },
                            ].map((s, i) => (
                                <div
                                    key={i}
                                    className="relative py-6 px-4 flex flex-col items-center text-center transition-all duration-300 hover:bg-white/60 group"
                                >
                                    <div className="flex flex-col items-center gap-1.5">
                                        <div className="text-2xl font-serif font-bold text-primary tracking-tight">
                                            {s.value}
                                        </div>
                                        <div className="text-[10px] uppercase tracking-[0.15em] font-bold text-primary/60">
                                            {s.label}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>



            </div>
        </section>
    );
}
