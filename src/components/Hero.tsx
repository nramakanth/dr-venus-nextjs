"use client";

import React from "react";
import {
    ArrowRight,
    Users,
    Award,
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
                <div className="flex flex-col-reverse lg:flex-row items-center pt-32 pb-12 lg:pt-36 lg:pb-16 gap-10 lg:gap-16">

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
                        <div className="flex flex-wrap gap-2 md:gap-3 mb-7">
                            {[
                                "Hair Transplant",
                                "Acne Treatment",
                                "Laser Therapy",
                                "Skin Rejuvenation",
                                "PRP Therapy",
                                "Anti-Aging",
                            ].map((service) => (
                                <span
                                    key={service}
                                    className="inline-flex items-center gap-1.5 bg-[#f8faf9] border border-gray-200/80 text-gray-700 text-[12px] md:text-[13px] font-medium px-3 md:px-3.5 py-1 md:py-1.5 rounded-lg hover:border-secondary/40 hover:bg-secondary/[0.04] hover:text-primary transition-all duration-200 cursor-default"
                                >
                                    <Sparkles size={11} className="text-secondary hidden sm:inline-block" />
                                    {service}
                                </span>
                            ))}
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-row items-center gap-5 sm:gap-6 mb-8 flex-wrap">
                            <button
                                className="group bg-primary text-white font-semibold px-5 py-3 md:px-8 md:py-3.5 rounded-xl text-[13px] md:text-sm tracking-wide shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/25 hover:bg-primary/90 transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.98] flex items-center gap-2"
                                aria-label="Book a consultation appointment"
                            >
                                Book Consultation
                                <ArrowRight
                                    size={15}
                                    className="group-hover:translate-x-1 transition-transform duration-300 hidden sm:inline-block"
                                />
                            </button>
                            <a
                                href="tel:+917777977027"
                                className="group flex items-center gap-2.5 hover:opacity-80 transition-opacity"
                                aria-label="Call Dr. Venus Clinic"
                            >
                                <span className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                                    <Phone size={14} className="text-secondary" />
                                </span>
                                <span>
                                    <span className="block text-[10px] uppercase tracking-[0.12em] text-gray-500 font-bold leading-none mb-1">
                                        Call Now
                                    </span>
                                    <span className="block text-[13px] md:text-sm text-primary font-semibold leading-tight">
                                        +91 77779 77027
                                    </span>
                                </span>
                            </a>
                        </div>

                        {/* Trust Stats */}
                        <div className="grid grid-cols-3 items-start gap-2 sm:gap-8 pt-6 border-t border-gray-200/80 w-full max-w-xl">
                            {[
                                { icon: <Award size={18} />, value: "19+", label: "Years Exp." },
                                { icon: <Users size={18} />, value: "25K+", label: "Patients" },
                                {
                                    icon: (
                                        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                                        </svg>
                                    ),
                                    value: "4.9★",
                                    label: "Rating"
                                },
                            ].map((stat, idx) => (
                                <div key={idx} className="flex flex-col sm:flex-row items-center sm:items-center gap-2 sm:gap-3 group text-center sm:text-left">
                                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-primary/[0.07] flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shrink-0">
                                        {stat.icon}
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-lg sm:text-lg font-serif text-primary font-bold leading-none">
                                            {stat.value}
                                        </p>
                                        <p className="text-[9px] sm:text-[11px] uppercase tracking-[0.1em] sm:tracking-[0.12em] text-gray-500 font-bold mt-1 sm:mt-1.5">
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
                        <div className="absolute " />

                        {/* Image Container */}
                        <div className="relative z-10 w-full max-w-[720px]">
                            <div className=" overflow-hidden  ">
                                <img
                                    src="/logo/hero5.png"
                                    alt="Dr. Venus Institute – Best Hair and Skin Dermatology Clinic in Hyderabad"
                                    className="w-full object-cover"
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
            <div className="relative z-10 max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-10 pb-20 space-y-8 hidden lg:block">
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
