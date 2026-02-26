"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceSidebar from "@/components/ServiceSidebar";
import Image from "next/image";
import StickyAppointment from "@/components/StickyAppointment";
import { Treatment } from "@/data/treatments";

interface TreatmentPageTemplateProps {
    treatment: Treatment;
    breadcrumb: { label: string; href?: string }[];
}

export default function TreatmentPageTemplate({ treatment, breadcrumb }: TreatmentPageTemplateProps) {
    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-gray-50/20">
                {/* 1) Clean Spacer to separate Navbar from Page Header */}
                <div className="h-20 lg:h-[100px] bg-white"></div>

                {/* 2) Distinct Page Header with its own background color */}
                <header className="bg-primary-soft/30 border-y border-primary/5 py-8 md:py-12 px-6">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <span className="w-8 h-[1px] bg-accent/50"></span>
                                    <span className="text-accent font-bold uppercase tracking-[0.3em] text-[10px]">Clinical Expertise</span>
                                </div>
                                <h1 className="text-4xl md:text-6xl font-serif text-primary leading-tight">{treatment.title}</h1>
                                <p className="text-lg text-foreground/50 max-w-2xl font-sans lg:leading-relaxed">
                                    {treatment.description}
                                </p>
                            </div>

                            {/* Refined Breadcrumb */}
                            <nav className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-primary/40 bg-white/50 backdrop-blur-md px-6 py-3.5 rounded-2xl border border-primary/5 self-start md:self-center shadow-sm">
                                {breadcrumb.map((item, index) => (
                                    <React.Fragment key={index}>
                                        {item.href ? (
                                            <a href={item.href} className="hover:text-accent transition-colors">{item.label}</a>
                                        ) : (
                                            <span className="text-primary/70">{item.label}</span>
                                        )}
                                        {index < breadcrumb.length - 1 && <span className="text-primary/10 mx-1">/</span>}
                                    </React.Fragment>
                                ))}
                            </nav>
                        </div>
                    </div>
                </header>

                {/* Content Section */}
                <section className="py-20 px-6">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex flex-col lg:flex-row gap-16">

                            {/* Left Side (65%) */}
                            <div className="lg:w-[65%] space-y-12">
                                <div className="space-y-8">
                                    <div className="rounded-[3rem] overflow-hidden aspect-video relative shadow-2xl border-8 border-white">
                                        <Image
                                            src={treatment.image}
                                            alt={treatment.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>

                                    <div className="space-y-6">
                                        <h2 className="text-3xl md:text-4xl font-serif text-primary">Overview</h2>
                                        <div className="prose prose-lg max-w-none text-foreground/70 leading-relaxed font-sans space-y-6">
                                            <div dangerouslySetInnerHTML={{ __html: treatment.content }} />
                                            <p>
                                                At Dr. Venus Institute, we believe in providing personalized care. Each treatment begins with a thorough assessment by our board-certified specialists to ensure the procedure is perfectly aligned with your goals and health profile. We utilize state-of-the-art medical technology to deliver results that are both effective and natural-looking.
                                            </p>
                                            <p>
                                                Safety is our top priority. All procedures are performed in a sterile environment following strict medical protocols. Our team is committed to your comfort throughout the process, providing detailed aftercare instructions to ensure optimal recovery and long-lasting results.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Video Section */}
                                    <div className="space-y-6">
                                        <h2 className="text-3xl font-serif text-primary">Procedure Highlights</h2>
                                        <div className="rounded-[2.5rem] overflow-hidden aspect-video shadow-xl ring-1 ring-primary/5">
                                            <iframe
                                                width="100%"
                                                height="100%"
                                                src={treatment.videoUrl}
                                                title={`${treatment.title} Video`}
                                                frameBorder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                                className="w-full h-full"
                                            ></iframe>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Side (35%) */}
                            <div className="lg:w-[35%]">
                                <div className="sticky top-32">
                                    <ServiceSidebar />
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </main>
            <Footer />
            <StickyAppointment />
        </>
    );
}
