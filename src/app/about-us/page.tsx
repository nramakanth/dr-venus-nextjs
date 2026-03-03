import React from "react";
import Image from "next/image";
import { CheckCircle2, Award, Target, Eye, Instagram, Sparkles, ShieldCheck, Phone, ArrowUpRight } from "lucide-react";

export const metadata = {
    title: "About Dr. Venu Kumari - Dr Venus Institute",
    description: "Learn more about Dr. Venu Kumari and Dr. Venus Institute, our mission, vision, and the expertise in dermatology and trichology.",
    keywords: [
        "Dr. Venu Kumari", "best dermatologist in hyderabad", "skin specialist", "hair transplant expert", "aesthetic clinic hyderabad"
    ],
    alternates: {
        canonical: "/about-us",
    },
};

export default function AboutUsPage() {
    return (
        <main className="pt-20 md:pt-24 bg-[#fbfcfb] overflow-hidden">
            {/* ── Compact Header ── */}
            <div className="w-full bg-white border-b border-primary/5">
                <div className="max-w-7xl mx-auto px-6 py-6 md:py-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div className="space-y-2">
                        <div className="flex items-center gap-2 text-accent font-bold uppercase tracking-[0.3em] text-[10px]">
                            <span className="w-8 h-px bg-accent/30"></span>
                            Founder & Medical Director
                        </div>
                        <h1 className="text-3xl md:text-5xl font-serif text-primary">Dr. Venu Kumari</h1>
                    </div>
                    <div className="max-w-md">
                        <p className="text-foreground/60 font-sans text-sm md:text-base leading-relaxed">
                            Leading Dr. Venus Institute with 19+ years of clinical excellence in dermatology, trichology, and advanced aesthetic transformations.
                        </p>
                    </div>
                </div>
            </div>

            {/* ── Spotlight & Experience Grid ── */}
            <section className="py-10 md:py-12 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                        {/* 1. Portrait Section */}
                        <div className="lg:col-span-5 relative">
                            <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5] shadow-xl border border-primary/5">
                                <Image
                                    src="/images/Dr-Venu-Kumari-holding-award.jpg"
                                    alt="Dr. Venu Kumari"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                                <div className="absolute bottom-6 left-6 right-6 p-5 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center text-primary shadow-lg">
                                            <Award size={20} />
                                        </div>
                                        <div>
                                            <div className="text-white text-xs font-bold uppercase tracking-widest">Hi9 Healthcare Award</div>
                                            <div className="text-white/80 text-[10px]">Best Dermatologist 2019</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 2. Content & Bio */}
                        <div className="lg:col-span-7 space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-4">
                                    <h3 className="text-lg font-bold text-primary flex items-center gap-2">
                                        <Sparkles size={16} className="text-accent" />
                                        Medical Philosophy
                                    </h3>
                                    <p className="text-sm text-foreground/70 leading-relaxed italic border-l-2 border-accent/20 pl-4">
                                        "My approach to aesthetics is rooted in clinical precision and feminine intuition. I treat every patient as I would treat myself, focusing on results that are both transformative and naturally beautiful."
                                    </p>
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-lg font-bold text-primary flex items-center gap-2">
                                        <ShieldCheck size={16} className="text-accent" />
                                        Academic Excellence
                                    </h3>
                                    <p className="text-sm text-foreground/70 leading-relaxed">
                                        MBBS, MD in Dermatology, Venereology & Leprosy. A specialized practitioner with extensive experience in dermatosurgery and immunodermatology.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white p-8 rounded-[2rem] border border-primary/5 shadow-sm space-y-6">
                                <h2 className="text-2xl font-serif text-primary">The Vision Behind Dr. Venus</h2>
                                <div className="prose prose-sm text-foreground/70 font-sans leading-relaxed space-y-4 max-w-none">
                                    <p>
                                        Dr. Venus Institute was founded with a singular mission: to democratize world-class aesthetic care in Hyderabad. Under Dr. Venu's leadership, the clinic has grown into a multi-branch institute known for <strong>honesty, transparency, and safety</strong>.
                                    </p>
                                    <p>
                                        From advanced laser treatments to complex hair restorations, every protocol at Dr. Venus is personally vetted by the doctor to ensure it meets US-FDA standards and delivers predictable, high-quality outcomes.
                                    </p>
                                </div>
                                <div className="flex flex-wrap gap-2 pt-2">
                                    {["Dermatology", "Trichology", "Laser Experts", "Anti-Aging"].map(tag => (
                                        <span key={tag} className="px-3 py-1 bg-primary/5 text-primary text-[10px] font-bold uppercase tracking-widest rounded-lg border border-primary/5">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Stats Counter */}
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                                {[
                                    { label: "Clinical Years", value: "19+" },
                                    { label: "Specialist", value: "13+" },
                                    { label: "Smiles restored", value: "25k+" },
                                    { label: "Happy rating", value: "4.9★" }
                                ].map((stat, i) => (
                                    <div key={i} className="p-4 bg-accent/5 rounded-2xl text-center border border-accent/10">
                                        <div className="text-xl font-serif text-primary font-bold">{stat.value}</div>
                                        <div className="text-[9px] uppercase tracking-widest font-bold text-primary/40 leading-tight">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Purpose & Philosophy (Mission / Vision) ── */}
            <section className="py-10 md:py-16 bg-[#fbfcfb]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="bg-white rounded-[3rem] md:rounded-[4rem] p-8 md:p-14 shadow-sm border border-primary/5 relative overflow-hidden">
                        {/* Decorative background element */}
                        <div className="absolute top-0 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl -mr-40 -mt-40"></div>
                        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/[0.02] rounded-full blur-3xl -ml-40 -mb-40"></div>

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
                            {/* Mission Column */}
                            <div className="lg:col-span-6 space-y-8">
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3 text-accent font-bold uppercase tracking-[0.3em] text-[10px]">
                                        <div className="w-8 h-px bg-accent/30"></div>
                                        The Mission
                                    </div>
                                    <h2 className="text-4xl md:text-5xl font-serif text-primary leading-tight">
                                        Pioneering <br />
                                        <span className="italic">Clinical Integrity</span>
                                    </h2>
                                </div>

                                <div className="relative">
                                    <span className="text-[120px] font-serif text-accent/5 absolute -top-20 -left-10 select-none">“</span>
                                    <p className="text-xl md:text-2xl text-primary font-serif leading-relaxed italic relative z-10">
                                        Our mission is to make every treatment a gratifying experience through evidence-based diagnosis and world-class technology.
                                    </p>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center">
                                        <Target size={18} className="text-primary" />
                                    </div>
                                    <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-primary/40 leading-none">
                                        Driven by Patient Satisfaction
                                    </div>
                                </div>
                            </div>

                            {/* Vertical Divider (Desktop Only) */}
                            <div className="hidden lg:block lg:col-span-1 border-l border-primary/5 h-64 mx-auto"></div>

                            {/* Vision Column */}
                            <div className="lg:col-span-5 space-y-10">
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3 text-accent font-bold uppercase tracking-[0.3em] text-[10px]">
                                        <div className="w-8 h-px bg-accent/30"></div>
                                        The Vision
                                    </div>
                                    <h2 className="text-4xl md:text-5xl font-serif text-primary leading-tight">
                                        Global <br />
                                        <span className="italic text-accent">Standard</span>
                                    </h2>
                                </div>

                                <p className="text-base md:text-lg text-foreground/60 leading-relaxed font-sans">
                                    To be the primary destination for aesthetic dermatology, recognized for our unwavering honesty and clinical safety.
                                </p>

                                <div className="grid grid-cols-1 gap-y-5">
                                    {[
                                        "Ethical Medical Practices",
                                        "Uncompromising Quality",
                                        "Patient-Centric Care",
                                        "Safe Innovation"
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-4 group">
                                            <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all duration-300">
                                                <CheckCircle2 size={12} className="text-accent group-hover:text-white" />
                                            </div>
                                            <span className="text-xs font-bold text-primary/70 uppercase tracking-widest">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Digital Spotlight: Instagram & Community ── */}
            <section className="py-12 md:py-20 bg-white relative overflow-hidden">
                {/* Subtle Artistic Background */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] -mr-64 -mt-64 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/[0.03] rounded-full blur-[100px] -ml-48 -mb-48 pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-32">

                        {/* Right to Left Layout for Variety */}
                        <div className="w-full lg:w-1/2 order-2 lg:order-1">
                            <div className="relative group max-w-[420px] mx-auto lg:mx-0">
                                {/* Premium Frame */}
                                <div className="relative z-10 bg-white p-4 rounded-[3rem] shadow-[0_40px_100px_-20px_rgba(10,46,31,0.12)] border border-primary/5">
                                    <div className="relative aspect-[9/16] rounded-[2.2rem] overflow-hidden bg-gray-100">
                                        <iframe
                                            className="absolute inset-0 w-full h-full"
                                            src="https://www.instagram.com/reels/videos/C4I-pM3S0z-/embed"
                                            frameBorder="0"
                                            scrolling="no"
                                            allowTransparency={true}
                                        />
                                    </div>

                                    {/* Floating Engagement Info */}
                                    <div className="absolute -right-6 top-1/4 bg-accent p-4 rounded-2xl shadow-xl shadow-accent/20 rotate-6 group-hover:rotate-0 transition-transform duration-500 hidden md:block">
                                        <Sparkles size={24} className="text-primary" />
                                    </div>
                                </div>

                                {/* Decorative "Shadow" Frame */}
                                <div className="absolute inset-0 bg-primary/5 rounded-[3rem] translate-x-6 translate-y-6 -z-10 blur-sm"></div>
                            </div>
                        </div>

                        <div className="w-full lg:w-1/2 space-y-10 order-1 lg:order-2">
                            <div className="space-y-4">
                                <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 rounded-full text-primary text-[10px] font-bold uppercase tracking-widest border border-accent/20">
                                    <Instagram size={14} />
                                    Digital Community
                                </div>
                                <h2 className="text-4xl md:text-5xl font-serif text-primary leading-tight">
                                    Clinical Wisdom <br />
                                    <span className="italic text-accent">Shared Daily</span>
                                </h2>
                                <p className="text-lg text-foreground/60 font-sans leading-relaxed">
                                    Follow Dr. Venu Kumari for an exclusive look at patient transformations, advanced procedure walkthroughs, and skin-health education.
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-x-8 gap-y-8 py-6 border-y border-primary/5">
                                {
                                    [
                                        { label: "Community", value: "50k+", detail: "Engaged Followers" },
                                        { label: "Knowledge", value: "500+", detail: "Educational Reels" },
                                        { label: "Trust", value: "1M+", detail: "Digital Reach" },
                                        { label: "Support", value: "24/7", detail: "Online Query Desk" }
                                    ].map((stat, i) => (
                                        <div key={i} className="space-y-1">
                                            <div className="text-2xl font-serif text-primary font-bold">{stat.value}</div>
                                            <div className="text-[10px] uppercase tracking-widest font-bold text-accent">{stat.label}</div>
                                            <div className="text-[12px] text-foreground/40 font-sans">{stat.detail}</div>
                                        </div>
                                    ))
                                }
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <a
                                    href="https://www.instagram.com/drvenusmd/"
                                    target="_blank"
                                    className="flex items-center justify-center gap-3 px-10 py-5 bg-primary text-white rounded-full font-bold uppercase tracking-widest text-[11px] hover:bg-accent hover:text-primary transition-all duration-300 shadow-xl shadow-primary/10"
                                >
                                    <Instagram size={16} />
                                    Follow @drvenusmd
                                </a>
                                <div className="flex items-center gap-3 px-6 py-4">
                                    <div className="flex -space-x-2">
                                        {[1, 2, 3].map(i => (
                                            <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                                                <Image src={`/images/gallery/IMG_0${i}.jpg`} alt="follower" width={32} height={32} />
                                            </div>
                                        ))}
                                    </div>
                                    <div className="text-[10px] font-bold text-foreground/40 uppercase tracking-widest">
                                        Join 50k others
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Final Invitation Section ── */}
            <section className="py-16 md:py-20 bg-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(197,160,89,0.08),transparent_70%)] pointer-events-none"></div>
                <div className="max-w-4xl mx-auto px-6 text-center space-y-10 relative z-10">
                    <div className="inline-block p-4 bg-primary/5 rounded-full text-primary mb-2">
                        <ShieldCheck size={40} className="text-accent" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-serif text-primary">Your Journey to <span className="italic">Perfect Skin</span> Starts Here</h2>
                    <p className="text-foreground/50 text-lg font-sans max-w-2xl mx-auto leading-relaxed">
                        Whether you're looking for clinical dermatology or aesthetic enhancements, Dr. Venu Kumari and her expert team are here to guide you with honesty and care.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
                        <a href="/appointment" className="w-full sm:w-auto px-12 py-5 bg-primary text-white rounded-full font-bold uppercase tracking-widest text-xs hover:bg-black transition-all shadow-xl shadow-primary/10">
                            Book Your Consultation
                        </a>
                        <a href="tel:+917777977027" className="w-full sm:w-auto px-10 py-5 border border-primary/10 text-primary rounded-full font-bold uppercase tracking-widest text-xs hover:bg-primary/5 transition-all flex items-center justify-center gap-3">
                            <Phone size={16} />
                            Call +91 77779 77027
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}
