"use client";

import React from "react";
import {
    ArrowRight,
    Users,
    Award,
    Star,
    Sparkles,
    Phone,
    BadgePercent,
    MapPin,
    Stethoscope,
    ShieldCheck,
    Microscope,
    Heart,
} from "lucide-react";

export default function Hero() {
    return (
        <section
            className="relative bg-white overflow-hidden"
            aria-label="Hero Section – Dr. Venus Hair & Skin Clinic"
        >
            {/* ─── Background ─── */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-br from-[#f0f7f4] via-white to-[#fdf8ed] opacity-80" />
                <div className="absolute top-[15%] left-[5%] w-[600px] h-[600px] bg-primary/[0.03] rounded-full blur-[140px]" />
                <div className="absolute bottom-[5%] right-[10%] w-[500px] h-[500px] bg-accent/[0.04] rounded-full blur-[120px]" />
            </div>

            {/* ─── Main Content ─── */}
            <div className="relative z-10 max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-10">
                <div className="flex flex-col lg:flex-row items-center pt-28 pb-12 lg:pt-36 lg:pb-16 gap-10 lg:gap-16">

                    {/* ════════════════════════════════════
                         LEFT SIDE — Content
                    ════════════════════════════════════ */}
                    <div className="w-full lg:w-[48%] flex flex-col items-start text-left">

                        {/* Offer Badge — Eye-catching */}
                        <div className="relative mb-6">
                            {/* <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-orange-500 text-white pl-3 pr-5 py-2 rounded-full shadow-lg shadow-red-500/20 animate-pulse">
                                <BadgePercent size={18} strokeWidth={2.5} />
                                <span className="text-xs sm:text-sm font-bold uppercase tracking-wide">
                                    50% Off on All Services
                                </span>
                            </div> */}
                            {/* Small sparkle accent */}
                            <span className="absolute -top-1 -right-2 text-yellow-400 animate-bounce">
                                <Sparkles size={14} />
                            </span>
                        </div>

                        {/* Headline */}
                        <header className="space-y-5 mb-7">
                            <h1 className="text-4xl sm:text-5xl md:text-[3.25rem] lg:text-[3.5rem] xl:text-[3.75rem] font-serif text-primary leading-[1.12] tracking-tight">
                                Advanced{" "}
                                <span className="relative inline-block">
                                    <span className="relative z-10">Hair</span>
                                    <span className="absolute bottom-0.5 left-0 w-full h-3 bg-accent/25 rounded-sm -z-0" />
                                </span>{" "}
                                &amp;{" "}
                                <span className="relative inline-block">
                                    <span className="relative z-10">Skin</span>
                                    <span className="absolute bottom-0.5 left-0 w-full h-3 bg-secondary/25 rounded-sm -z-0" />
                                </span>
                                <br />
                                <span className="text-secondary">Dermatology</span>{" "}
                                Clinic
                            </h1>
                            <p className="text-base md:text-lg text-gray-600 max-w-xl leading-[1.7] font-sans">
                                Hyderabad&apos;s most trusted institute for clinical dermatology,
                                hair restoration &amp; cosmetic treatments — backed by{" "}
                                <strong className="text-primary font-semibold">17+ years</strong>{" "}
                                of expert care &amp;{" "}
                                <strong className="text-primary font-semibold">25,000+ happy patients</strong>.
                            </p>
                        </header>

                        {/* Service Tags */}
                        <div className="flex flex-wrap gap-2 mb-7">
                            {[
                                "Hair Transplant",
                                "Acne Treatment",
                                "Laser Therapy",
                                "Skin Rejuvenation",
                                "PRP Therapy",
                            ].map((service) => (
                                <span
                                    key={service}
                                    className="inline-flex items-center gap-1.5 bg-[#f8faf9] border border-gray-200/80 text-gray-700 text-[13px] font-medium px-3.5 py-1.5 rounded-lg hover:border-secondary/40 hover:bg-secondary/[0.04] hover:text-primary transition-all duration-200 cursor-default"
                                >
                                    <Sparkles size={11} className="text-secondary" />
                                    {service}
                                </span>
                            ))}
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8">
                            <button
                                className="group bg-primary text-white font-semibold px-8 py-3.5 rounded-xl text-sm tracking-wide shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/25 hover:bg-primary/90 transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.98] flex items-center gap-2.5"
                                aria-label="Book a consultation appointment"
                            >
                                Book Consultation
                                <ArrowRight
                                    size={16}
                                    className="group-hover:translate-x-1 transition-transform duration-300"
                                />
                            </button>
                            <a
                                href="tel:+919999999999"
                                className="group flex items-center gap-3 hover:opacity-80 transition-opacity"
                                aria-label="Call Dr. Venus Clinic"
                            >
                                <span className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                                    <Phone size={15} className="text-secondary" />
                                </span>
                                <span>
                                    <span className="block text-[11px] uppercase tracking-[0.15em] text-gray-500 font-bold leading-none mb-0.5">
                                        Call Now
                                    </span>
                                    <span className="block text-sm text-primary font-semibold leading-tight">
                                        +91 99999 99999
                                    </span>
                                </span>
                            </a>
                        </div>

                        {/* Trust Stats */}
                        <div className="flex flex-wrap items-center gap-y-5 gap-x-6 sm:gap-x-8 pt-6 border-t border-gray-200/80 w-full max-w-lg">
                            {[
                                { icon: <Award size={20} />, value: "17+", label: "Years Exp." },
                                { icon: <Users size={20} />, value: "25K+", label: "Patients" },
                                { icon: <Star size={20} />, value: "4.9★", label: "Google Rating" },
                            ].map((stat, idx) => (
                                <div key={idx} className="flex items-center gap-3 group">
                                    <div className="w-10 h-10 rounded-xl bg-primary/[0.07] flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                        {stat.icon}
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-lg font-serif text-primary font-bold leading-none">
                                            {stat.value}
                                        </p>
                                        <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.12em] text-gray-500 font-bold mt-1.5">
                                            {stat.label}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ════════════════════════════════════
                         RIGHT SIDE — Image
                    ════════════════════════════════════ */}
                    <div className="w-full lg:w-[52%] relative flex items-center justify-center">
                        {/* Background glow */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] via-transparent to-secondary/[0.03] rounded-[2.5rem] blur-xl scale-105" />

                        {/* Image Container */}
                        <div className="relative z-10 w-full max-w-[720px]">
                            <div className="rounded-2xl lg:rounded-[1.75rem] overflow-hidden  ring-1 ring-black/[0.04]">
                                <img
                                    src="/logo/hero5.png"
                                    alt="Dr. Venus Institute – Best Hair and Skin Dermatology Clinic in Hyderabad"
                                    className="w-full h-auto object-cover"
                                    loading="eager"
                                />
                            </div>
                        </div>

                        {/* Corner decorations */}
                        <div className="absolute -top-4 -right-4 w-24 h-24 bg-[radial-gradient(#1f4d3a12_1.5px,transparent_1.5px)] [background-size:12px_12px] opacity-50" />
                        <div className="absolute -bottom-3 -left-3 w-20 h-20 bg-[radial-gradient(#d4af3718_1.5px,transparent_1.5px)] [background-size:12px_12px] opacity-50" />
                    </div>
                </div>
            </div>

            {/* ─── Statistics & Quick Lead Form ─── */}
            <div className="relative z-10 max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-10 pb-20 space-y-8">
                {/* Stats Section - Compact Version */}
                <div className="relative overflow-hidden rounded-[2rem] md:rounded-[2.5rem] border border-primary/5 bg-primary/[0.02] backdrop-blur-sm shadow-xl shadow-primary/5">
                    <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-primary/5">
                        {[
                            { label: "Consultations", value: "75,779+", icon: Users },
                            { label: "Treatments", value: "19,892+", icon: Sparkles },
                            { label: "Transplants", value: "1,076+", icon: Users },
                            { label: "Anti Ageing", value: "5,015+", icon: Sparkles },
                        ].map((s, i) => (
                            <div
                                key={i}
                                className="relative py-6 md:py-8 px-4 flex flex-col items-center text-center transition-all duration-300 hover:bg-white/60 group"
                            >
                                <div className="flex flex-col items-center gap-1.5">
                                    <div className="text-2xl md:text-3xl font-serif font-bold text-primary tracking-tight">
                                        {s.value}
                                    </div>
                                    <div className="text-[10px] md:text-[11px] uppercase tracking-[0.15em] font-bold text-primary/60">
                                        {s.label}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
