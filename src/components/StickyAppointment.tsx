"use client";

import Link from "next/link";
import { Calendar } from "lucide-react";
import { useState, useEffect } from "react";

export default function StickyAppointment() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show button after scrolling 300px
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            className={`fixed right-0 top-1/2 -translate-y-1/2 z-[60] transition-all duration-700 transform ${isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
                }`}
        >
            <Link href="/appointment-form" className="block">
                <button
                    className="group relative rounded-r-lg flex items-center bg-gradient-to-b from-primary to-[#153528] text-white py-2 px-4 shadow-[-15px_0_35px_rgba(0,0,0,0.15)] hover:pl-6 transition-all duration-500 ease-in-out cursor-pointer"
                    style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
                >
                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-r-lg  blur-xl -z-10"></div>

                    <div className="flex flex-row items-center gap-4">
                        <div className="bg-white/10 p-2 rounded-full mb-2 group-hover:scale-110 transition-transform duration-500">
                            <Calendar size={18} className="transform rotate-180" />
                        </div>
                        <span className="uppercase tracking-[0.25em] font-bold text-[10px] md:text-[11px] font-sans">
                            Book Appointment
                        </span>
                    </div>

                    {/* Accent Border */}
                    <div className="absolute left-0 top-4 bottom-4 w-0.5 bg-accent/50 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-center"></div>
                </button>
            </Link>
        </div>
    );
}
