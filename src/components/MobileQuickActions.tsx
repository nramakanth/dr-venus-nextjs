"use client";

import React from "react";
import { Phone, MessageSquare, Calendar } from "lucide-react";
import Link from "next/link";

export default function MobileQuickActions() {
    return (
        <div className="lg:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-[60] w-[90%] max-w-sm">
            <div className="bg-[#1f4d3a]/95 backdrop-blur-md rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.2)] border border-white/10 flex items-center justify-around py-2 px-1 overflow-hidden relative">
                {/* Background Decor */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-white/5 rounded-full blur-xl -translate-y-8 translate-x-8" />

                {/* Call Button */}
                <a
                    href="tel:+917777977027"
                    className="relative z-10 flex flex-col items-center gap-1 flex-1 group"
                >
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-active:scale-95 transition-all duration-200">
                        <Phone size={15} className="text-white" />
                    </div>
                    <span className="text-[9px] font-bold text-white/90 uppercase tracking-widest">Call</span>
                </a>

                {/* Divider */}
                <div className="w-[1px] h-8 bg-white/10" />

                {/* Enquiry Button */}
                <Link
                    href="/enquiry-form"
                    className="relative z-10 flex flex-col items-center gap-1 flex-1 group"
                >
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-active:scale-95 transition-all duration-200">
                        <MessageSquare size={15} className="text-white" />
                    </div>
                    <span className="text-[9px] font-bold text-white/90 uppercase tracking-widest">Enquiry</span>
                </Link>

                {/* Divider */}
                <div className="w-[1px] h-8 bg-white/10" />

                {/* Book Button */}
                <Link
                    href="/appointment-form"
                    className="relative z-10 flex flex-col items-center gap-1 flex-1 group"
                >
                    <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center group-active:scale-95 transition-all duration-200 border border-secondary/30">
                        <Calendar size={15} className="text-secondary" />
                    </div>
                    <span className="text-[9px] font-bold text-white uppercase tracking-widest leading-none">Book Now</span>
                </Link>
            </div>
        </div>
    );
}
