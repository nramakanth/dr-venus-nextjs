"use client";
import React, { useState, useEffect } from "react";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
    {
        name: "Sarah Johnson",
        role: "Skin Rejuvenation Patient",
        text: "The care and attention I received at Dr. Venus were exceptional. My skin has never looked better, and the results are so natural.",
    },
    {
        name: "Michael Chen",
        role: "Hair Restoration Patient",
        text: "I was skeptical about a hair transplant, but Dr. Venus and her team made me feel at ease. Six months later, the results speak for themselves.",
    },
    {
        name: "Anita Verma",
        role: "Laser Therapy Patient",
        text: "Professional, hygienic, and highly effective. Truly the best institute for skin and hair in the city.",
    },
    {
        name: "Priya Sharma",
        role: "Acne Treatment Patient",
        text: "I struggled with acne for years until I found Dr. Venus. The treatment plan was personalized and gave me my confidence back.",
    },
    {
        name: "Rajesh Kumar",
        role: "Hair Care Patient",
        text: "Wonderful experience. The clinical approach combined with modern technology is what sets them apart. Highly recommended!",
    }
];

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const [touchStart, setTouchStart] = useState<number | null>(null);
    const [touchEnd, setTouchEnd] = useState<number | null>(null);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const visibleCards = isMobile ? 1.15 : 3;
    const maxIndex = testimonials.length - Math.floor(visibleCards);

    const next = () => {
        if (currentIndex < maxIndex) {
            setCurrentIndex(prev => prev + 1);
        } else {
            setCurrentIndex(0);
        }
    };

    const prev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prev => prev - 1);
        } else {
            setCurrentIndex(maxIndex);
        }
    };

    // Swipe handlers
    const handleTouchStart = (e: React.TouchEvent) => {
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > 50;
        const isRightSwipe = distance < -50;

        if (isLeftSwipe) next();
        if (isRightSwipe) prev();

        setTouchStart(null);
        setTouchEnd(null);
    };

    return (
        <section className="py-16 md:py-24 px-6 relative overflow-hidden bg-[#fafafa]">
            {/* Soft background accents */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-[#1f4d3a]/5 blur-[120px] -z-10"></div>
            <div className="absolute bottom-0 left-0 w-1/3 h-full bg-[#1f4d3a]/5 blur-[120px] -z-10"></div>

            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8 px-4">
                    <div className="max-w-2xl space-y-3">
                        <div className="flex items-center gap-3">
                            <span className="w-10 h-[2px] bg-[#1f4d3a]/20"></span>
                            <h2 className="text-[11px] md:text-[12px] uppercase tracking-[0.4em] font-medium text-[#1f4d3a]/80 font-sans">Patient Stories</h2>
                        </div>
                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#1f4d3a] leading-tight">
                            Trusted by <span className="italic font-normal">Thousands</span>
                        </h3>
                    </div>

                    <div className="hidden md:flex gap-3">
                        <button
                            onClick={prev}
                            className="w-12 h-12 rounded-full border border-[#1f4d3a]/10 flex items-center justify-center transition-all duration-300 hover:bg-[#1f4d3a] hover:text-white bg-white shadow-sm"
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <button
                            onClick={next}
                            className="w-12 h-12 rounded-full border border-[#1f4d3a]/10 flex items-center justify-center transition-all duration-300 hover:bg-[#1f4d3a] hover:text-white bg-white shadow-sm"
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>

                <div
                    className="relative"
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    <div className="overflow-hidden">
                        <div
                            className="flex transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
                            style={{ transform: `translateX(-${currentIndex * (100 / (isMobile ? 1.15 : 3))}%)` }}
                        >
                            {testimonials.map((t, i) => (
                                <div key={i} className={`flex-shrink-0 px-3 ${isMobile ? 'w-[87%]' : 'w-1/3'}`}>
                                    <div className="bg-white p-6 md:p-8 rounded-[2rem] border border-[#1f4d3a]/5 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.03)] relative group hover:shadow-xl transition-all duration-500 flex flex-col h-full min-h-[240px] md:min-h-[280px]">

                                        <div className="absolute top-6 right-8 text-[#1f4d3a]/5 group-hover:text-[#1f4d3a]/10 transition-colors">
                                            <Quote size={50} />
                                        </div>

                                        <div className="flex flex-col h-full">
                                            <div className="flex gap-0.5 mb-4">
                                                {[...Array(5)].map((_, star) => (
                                                    <Star key={star} size={14} className="fill-[#fab244] text-[#fab244]" />
                                                ))}
                                            </div>

                                            <div className="flex-grow">
                                                <p className="text-gray-600 leading-relaxed font-sans text-base md:text-lg font-light italic">
                                                    "{t.text}"
                                                </p>
                                            </div>

                                            <div className="pt-6 mt-6 border-t border-gray-50">
                                                <h4 className="font-serif text-[#1f4d3a] text-lg font-bold leading-tight">{t.name}</h4>
                                                <p className="text-[10px] uppercase tracking-[0.15em] text-[#1f4d3a]/50 font-bold mt-1">{t.role}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Modern Progress Bar */}
                <div className="flex justify-center items-center gap-4 mt-12">
                    <div className="flex gap-2">
                        {testimonials.slice(0, maxIndex + 1).map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentIndex(idx)}
                                className={`h-1.5 rounded-full transition-all duration-500 ${currentIndex === idx ? 'w-10 bg-[#1f4d3a]' : 'w-2 bg-[#1f4d3a]/10 hover:bg-[#1f4d3a]/30'}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

