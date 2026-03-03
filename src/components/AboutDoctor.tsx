import Image from "next/image";
import { Phone, Award, CheckCircle2, ArrowRight } from "lucide-react";

export default function AboutDoctor() {
    return (
        <section className="py-12 md:py-20 px-6 md:px-12 bg-[#f0f4f2] overflow-hidden">
            <div className="max-w-[1240px] mx-auto">
                <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-24">

                    {/* Left: Image Column (Significantly Reduced Size) */}
                    <div className="w-full sm:w-[80%] md:w-[60%] lg:w-[32%] shrink-0">
                        <div className="relative group">
                            {/* Main Image Frame - Ultra Neat */}
                            <div className="relative z-10 rounded-[2rem] overflow-hidden aspect-[4/5.2] shadow-2xl shadow-black/5 bg-gray-50">
                                <Image
                                    src="/images/Dr-Venu-Kumari-holding-award.jpg"
                                    alt="Dr. Venu Kumari - Award Winning Dermatologist"
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                    priority
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right: Content Column (Expanded & Redesigned) */}
                    <div className="w-full lg:w-[68%] space-y-6 md:space-y-8">
                        {/* 1) Subtle Label & Refined Heading */}
                        <div className="space-y-3">
                            <div className="text-[11px] md:text-[12px] uppercase tracking-[0.4em] font-medium text-primary/80 flex items-center gap-2 font-sans">
                                <span className="w-6 h-px bg-primary/20"></span>
                                Leadership Excellence
                            </div>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-primary leading-tight">
                                Award Winning <span className="italic">Dermatologist</span> in Hyderabad
                            </h2>
                        </div>

                        {/* 2) Redesigned Quote (More Compact) */}
                        <div className="bg-[#f8faf9] py-5 px-6 md:py-3 md:px-6 rounded-[2rem] md:rounded-[2.5rem] relative">
                            <p className="text-gray-600 text-base md:text-lg leading-relaxed font-sans relative z-10">
                                "As a woman, I approach aesthetics for patients as I approach it for myself. I care about <span className="text-primary font-bold">my appearance and yours</span> and want us to look our <span className="text-primary font-bold">natural best</span>."
                            </p>
                        </div>

                        {/* 3) Info Grid (Clean Split) */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2 items-start">
                            <div className="space-y-4">
                                <div>
                                    <h4 className="text-xl font-bold font-serif text-primary">Dr. Venu Kumari</h4>
                                    <p className="text-[11px] md:text-[12px] uppercase tracking-[0.2em] text-primary/60 font-bold">Medical Director</p>
                                </div>
                                <div className="space-y-4">
                                    <p className="text-sm md:text-base text-gray-500 font-medium leading-relaxed">
                                        MBBS, MD – <span className="text-gray-800">Dermatology, Venereology & Leprosy</span>
                                    </p>
                                    <div className="flex flex-wrap gap-2 md:gap-2.5">
                                        {["Dermatologist", "Trichologist", "Aesthetic Expert", "Dermatosurgeon", "Immunodermatologist", "Cosmetologist"].map(s => (
                                            <span key={s} className="text-[10px] md:text-[11px] uppercase tracking-widest font-bold text-primary bg-primary/[0.07] px-3 py-1.5 rounded-lg border border-primary/5 shadow-sm shadow-primary/[0.02]">
                                                {s}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-x-8 gap-y-6 md:border-l md:border-primary/10 md:pl-10">
                                <div>
                                    <div className="text-2xl md:text-3xl font-serif text-primary font-bold tracking-tight">19<span className="text-base text-primary/30 ml-0.5">+</span></div>
                                    <p className="text-[10px] md:text-[11px] uppercase tracking-widest font-bold text-gray-600">Total Years Exp.</p>
                                </div>
                                <div>
                                    <div className="text-2xl md:text-3xl font-serif text-primary font-bold tracking-tight">13<span className="text-base text-primary/30 ml-0.5">+</span></div>
                                    <p className="text-[10px] md:text-[11px] uppercase tracking-widest font-bold text-gray-600">As Specialist</p>
                                </div>
                                <div>
                                    <div className="text-2xl md:text-3xl font-serif text-primary font-bold tracking-tight">25K<span className="text-base text-primary/30 ml-0.5">+</span></div>
                                    <p className="text-[10px] md:text-[11px] uppercase tracking-widest font-bold text-gray-600">Happy Patients</p>
                                </div>
                                <div>
                                    <div className="text-2xl md:text-3xl font-serif text-primary font-bold tracking-tight">4.9<span className="text-base text-primary/30 ml-0.5">★</span></div>
                                    <p className="text-[10px] md:text-[11px] uppercase tracking-widest font-bold text-gray-600">Google Rating</p>
                                </div>
                                <div className="col-span-2">
                                    <a href="tel:+917777977027" className="inline-flex items-center gap-3 text-primary group/phone">
                                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover/phone:bg-primary group-hover/phone:text-white transition-all duration-300">
                                            <Phone size={14} />
                                        </div>
                                        <span className="text-sm md:text-base font-bold tracking-tight group-hover/phone:text-primary transition-colors">+91 77779 77027</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* 4) Final Action */}
                        {/* <button className="flex items-center gap-3 bg-primary text-white py-3.5 px-8 rounded-full font-bold uppercase tracking-[0.2em] text-[10px] shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all">
                            Full Biography
                            <ArrowRight size={14} />
                        </button> */}
                    </div>
                </div>
            </div>
        </section>
    );
}
