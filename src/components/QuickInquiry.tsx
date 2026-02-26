"use client";

import React from "react";
import { Users, Phone, ArrowRight, MessageSquare, Sparkles } from "lucide-react";

export default function QuickInquiry() {
    return (
        <section className="relative z-20 -mt-8 pb-12">
            <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-10">
                <div className="relative group">
                    {/* Ultra-slim glass container */}
                    <div className="relative bg-white/95 backdrop-blur-xl border border-primary/5 rounded-2xl md:rounded-[1.5rem] p-1.5 md:p-2 shadow-[0_15px_40px_rgba(31,77,58,0.06)]">
                        <div className="flex flex-col lg:flex-row items-center gap-3">

                            {/* Minimal Left Label - Compact */}
                            <div className="lg:w-[15%] bg-primary rounded-[1rem] py-3 px-5 flex items-center justify-center lg:justify-start gap-3 shrink-0">
                                <Sparkles size={14} className="text-secondary" />
                                <span className="text-white font-serif font-bold text-sm tracking-wide whitespace-nowrap">
                                    Quick Inquiry
                                </span>
                            </div>

                            {/* Ultra-slim Horizontal Form */}
                            <div className="flex-1 w-full lg:px-2">
                                <form className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-3">

                                    {/* Name */}
                                    <div className="relative">
                                        <input
                                            type="text"
                                            placeholder="Full Name"
                                            className="w-full bg-gray-50/50 border border-gray-100 focus:border-primary/20 focus:bg-white rounded-xl px-4 py-2.5 text-[13px] outline-none transition-all placeholder:text-gray-400"
                                        />
                                        <Users size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300" />
                                    </div>

                                    {/* Phone */}
                                    <div className="relative">
                                        <input
                                            type="tel"
                                            placeholder="Phone Number"
                                            className="w-full bg-gray-50/50 border border-gray-100 focus:border-primary/20 focus:bg-white rounded-xl px-4 py-2.5 text-[13px] outline-none transition-all placeholder:text-gray-400"
                                        />
                                        <Phone size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300" />
                                    </div>

                                    {/* Service */}
                                    <div className="relative">
                                        <select className="w-full bg-gray-50/50 border border-gray-100 focus:border-primary/20 focus:bg-white rounded-xl px-4 py-2.5 text-[13px] outline-none transition-all appearance-none cursor-pointer text-gray-500">
                                            <option value="">Select Treatment</option>
                                            <option value="skin">Skin Care</option>
                                            <option value="hair">Hair restoration</option>
                                            <option value="laser">Laser Therapy</option>
                                        </select>
                                        <MessageSquare size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300" />
                                    </div>

                                    {/* Submit Button - Compact */}
                                    <button
                                        type="submit"
                                        className="bg-primary text-white font-bold px-6 py-2.5 rounded-xl text-[13px] shadow-lg shadow-primary/10 hover:shadow-xl hover:bg-primary/95 transition-all flex items-center justify-center gap-2 group"
                                    >
                                        Get Call Back
                                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                    </button>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Micro-trust indicators - More subtle */}
                <div className="flex items-center justify-center gap-6 mt-4 opacity-50">
                    <span className="text-[10px] font-bold text-primary uppercase tracking-widest flex items-center gap-1.5">
                        <div className="w-1 h-1 rounded-full bg-secondary"></div>
                        Privacy Protected
                    </span>
                    <span className="text-[10px] font-bold text-primary uppercase tracking-widest flex items-center gap-1.5">
                        <div className="w-1 h-1 rounded-full bg-secondary"></div>
                        FDA Approved
                    </span>
                </div>
            </div>
        </section>
    );
}
