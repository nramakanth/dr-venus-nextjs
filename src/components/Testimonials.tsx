"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
    {
        name: "Sarah Johnson",
        role: "Skin Rejuvenation Patient",
        text: "The care and attention I received at Dr. Venus were exceptional. My skin has never looked better, and the results are so natural.",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150"
    },
    {
        name: "Michael Chen",
        role: "Hair Restoration Patient",
        text: "I was skeptical about a hair transplant, but Dr. Venus and her team made me feel at ease. Six months later, the results speak for themselves.",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150"
    },
    {
        name: "Anita Verma",
        role: "Laser Therapy Patient",
        text: "Professional, hygienic, and highly effective. Truly the best institute for skin and hair in the city.",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150"
    },
    {
        name: "Priya Sharma",
        role: "Acne Treatment Patient",
        text: "I struggled with acne for years until I found Dr. Venus. The treatment plan was personalized and gave me my confidence back.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150"
    },
    {
        name: "Rajesh Kumar",
        role: "Hair Care Patient",
        text: "Wonderful experience. The clinical approach combined with modern technology is what sets them apart. Highly recommended!",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150"
    }
];

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const visibleCards = isMobile ? 1 : 3;
    const maxIndex = Math.max(0, testimonials.length - visibleCards);

    const next = () => {
        if (currentIndex < maxIndex) {
            setCurrentIndex(prev => prev + 1);
        }
    };

    const prev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prev => prev - 1);
        }
    };

    return (
        <section className="py-12 md:pt-24 md:pb-12 px-6 relative overflow-hidden bg-[#f0f4f2]">
            {/* Decorative decorative blob */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/50 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/50 rounded-full blur-3xl -z-10"></div>

            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-12 gap-8 px-4">
                    <div className="max-w-2xl space-y-3 text-left">
                        <div className="flex items-center gap-3">
                            <span className="w-8 h-px bg-[#1f4d3a]/30"></span>
                            <h2 className="text-[11px] md:text-[12px] uppercase tracking-[0.4em] font-bold text-[#1f4d3a]/60 font-sans">Patient Stories</h2>
                        </div>
                        <h3 className="text-3xl md:text-5xl font-serif text-[#1f4d3a] leading-tight">
                            Trusted by <span className="italic">Thousands</span>
                        </h3>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex gap-3">
                        <button
                            onClick={prev}
                            disabled={currentIndex === 0}
                            className={`group w-10 h-10 md:w-12 md:h-12 rounded-full border border-[#1f4d3a]/10 flex items-center justify-center transition-all duration-500 ${currentIndex === 0 ? 'opacity-20 cursor-not-allowed' : 'hover:bg-[#1f4d3a] hover:text-white bg-white hover:scale-105 shadow-sm'}`}
                        >
                            <ChevronLeft size={18} className="md:size-5" />
                        </button>
                        <button
                            onClick={next}
                            disabled={currentIndex >= maxIndex}
                            className={`group w-10 h-10 md:w-12 md:h-12 rounded-full border border-[#1f4d3a]/10 flex items-center justify-center transition-all duration-500 ${currentIndex >= maxIndex ? 'opacity-20 cursor-not-allowed' : 'hover:bg-[#1f4d3a] hover:text-white bg-white hover:scale-105 shadow-sm'}`}
                        >
                            <ChevronRight size={18} className="md:size-5" />
                        </button>
                    </div>
                </div>

                <div className="relative overflow-visible pb-8 md:pb-12">
                    <div className="overflow-hidden -mx-4">
                        <div
                            className="flex transition-transform duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)]"
                            style={{ transform: `translateX(-${currentIndex * (100 / visibleCards)}%)` }}
                        >
                            {testimonials.map((t, i) => (
                                <div key={i} className={`flex-shrink-0 px-4 ${isMobile ? 'w-full' : 'w-1/3'}`}>
                                    <div className="bg-white p-7 md:p-10 rounded-[2rem] md:rounded-[2.5rem] border border-[#1f4d3a]/5 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.05)] relative group hover:shadow-xl hover:-translate-y-1 transition-all duration-500 flex flex-col overflow-hidden h-full">

                                        {/* Minimal Quote Icon */}
                                        <div className="absolute top-6 right-8 opacity-[0.03] group-hover:opacity-10 transition-opacity">
                                            <Quote size={64} className="text-[#1f4d3a]" />
                                        </div>

                                        <div className="flex flex-col h-full space-y-6">
                                            <div className="flex-grow space-y-4">
                                                <div className="flex gap-0.5">
                                                    {[1, 2, 3, 4, 5].map(star => (
                                                        <span key={star} className="text-[#fab244] text-[10px]">★</span>
                                                    ))}
                                                </div>
                                                <p className="text-gray-600 leading-relaxed font-sans text-base md:text-lg font-light italic">
                                                    "{t.text}"
                                                </p>
                                            </div>

                                            <div className="flex items-center gap-4 pt-6 mt-auto border-t border-gray-50">
                                                <div className="relative shrink-0">
                                                    <Image
                                                        src={t.image}
                                                        alt={t.name}
                                                        width={44}
                                                        height={44}
                                                        className="w-11 h-11 md:w-12 md:h-12 rounded-full object-cover border-2 border-white shadow-sm grayscale group-hover:grayscale-0 transition-all duration-700"
                                                    />
                                                </div>
                                                <div className="space-y-0.5 overflow-hidden">
                                                    <h4 className="font-serif text-[#1f4d3a] text-base md:text-lg font-bold truncate">{t.name}</h4>
                                                    <p className="text-[9px] uppercase tracking-[0.2em] text-[#1f4d3a]/50 font-bold truncate">{t.role}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Progress Indicators */}
                <div className="flex justify-center gap-2 mt-4">
                    {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentIndex(idx)}
                            className={`h-1 rounded-full transition-all duration-700 ${currentIndex === idx ? 'w-8 md:w-10 bg-[#1f4d3a]' : 'w-2 bg-[#1f4d3a]/10 hover:bg-[#1f4d3a]/30'}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

