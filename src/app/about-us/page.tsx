import React from "react";
import { CheckCircle2, Award, Target, Eye } from "lucide-react";

export const metadata = {
    title: "About Us | Dr. Venus – Institute of Skin & Hair",
    description: "Learn more about Dr. Venus Institute, our mission, vision, and the expertise of Dr. Venu Kumari in dermatology and trichology.",
    keywords: [
        "Best Dermatologist",
        "Skin Specialist",
        "Best Aesthetic Dermatologist",
        "Best Cosmetologist",
        "Skin and hair clinic",
        "Famous Skin and hair clinic",
        "best skin and hair clinic"
    ],
    alternates: {
        canonical: "/about-us",
    },
};

export default function AboutUsPage() {
    return (
        <main className="pt-32">
            {/* ── Header Band (Mimicking Appointment Form) ── */}
            <div className="w-full bg-[#f0f4f2] border-b border-primary/5">
                <div className="max-w-7xl mx-auto px-6 py-16 text-center">
                    <span className="text-accent font-bold uppercase tracking-[0.3em] text-xs mb-3 block">Welcome to Dr. Venus</span>
                    <h1 className="text-4xl md:text-5xl font-serif text-primary mb-4">About Our Institute</h1>
                    <div className="w-24 h-1 bg-accent mx-auto"></div>
                    <p className="mt-6 text-foreground/70 max-w-2xl mx-auto font-sans">
                        Pioneering excellence in dermatology and trichology with a focus on medical mastery and patient satisfaction.
                    </p>
                </div>
            </div>

            {/* ── Main Introduction Section (Paragraph Focused) ── */}
            <section className="py-24 bg-white">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="space-y-12 text-center mb-20">
                        <div className="inline-block px-4 py-1.5 bg-primary-soft/30 rounded-full border border-primary/10">
                            <span className="text-primary font-bold uppercase tracking-[0.2em] text-[10px]">Medical Excellence</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-serif text-primary leading-tight">
                            Pioneering a transformation in <br />
                            <span className="text-accent italic">Aesthetic Dermatology</span>
                        </h2>
                    </div>

                    <div className="prose prose-lg max-w-none font-sans text-foreground/80 leading-relaxed md:text-xl space-y-10">
                        <p>
                            Having blemish-free skin and healthy, voluminous hair are no more a dream, but a reality!
                            <strong> Dr. Venus Institute of Skin and Hair Clinic</strong> is an Aesthetic Clinic dedicated to medical excellence in dermatology and trichology with international facilities.
                        </p>

                        <p>
                            Our well-organized team provides our customers uttermost satisfaction through our brilliant mastery and care, treating the skin and hair related issues with customized treatments. Thus, we&apos;ve transformed the lives of thousands of people so far with the best efficacy!
                        </p>

                        <div className="relative py-12 px-8 md:px-16 border-y border-primary/5 bg-[#f8faf9]/50 my-16">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-full border border-primary/5">
                                <Award className="text-accent" size={32} />
                            </div>
                            <h3 className="text-2xl font-serif text-primary text-center mb-6">Recognized Excellence</h3>
                            <p className="text-center italic text-lg leading-relaxed text-primary/80">
                                &ldquo;BEST DERMATOLOGIST&rdquo; award was given to <strong>Dr. Venu Kumari</strong> for her outstanding work on the occasion of National Doctor&apos;s Day, held on 1st-July-2019 by Hi9 Health Services to honour healthcare heroes.
                            </p>
                        </div>

                        <p>
                            A pioneer in the field of dermatology, the highly professional cosmetic practitioner, <strong>Dr. Venu Kumari</strong> and her team at Dr. Venus deliver the high quality services with an unmatched experience.
                            Set in a pristine ambience, we handle all types of aesthetic treatments including painless skin rejuvenation treatment, anti-aging Treatments, skin lightening treatments, hair transplant etc.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── Mission & Vision Section (No Cards) ── */}
            <section className="py-24 bg-[#f0f4f2] border-t border-primary/5">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-20">

                        {/* Mission Section */}
                        <div className="space-y-8">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
                                    <Target className="text-white" size={24} />
                                </div>
                                <h3 className="text-3xl font-serif text-primary">Our Mission</h3>
                            </div>
                            <p className="text-xl text-primary/70 leading-relaxed font-sans italic border-l-4 border-accent pl-8 py-2">
                                &ldquo;Our mission is to make the treatments a gratifying experience. At Dr. Venus, we aim at providing the customers with the best available option in skin and hair treatments, after a proper diagnosis backed by advanced technologies.&rdquo;
                            </p>
                        </div>

                        {/* Vision Section */}
                        <div className="space-y-8">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center shadow-lg shadow-accent/20">
                                    <Eye className="text-white" size={24} />
                                </div>
                                <h3 className="text-3xl font-serif text-primary">Our Vision</h3>
                            </div>
                            <div className="space-y-6">
                                <p className="text-xl text-primary/70 leading-relaxed font-sans">
                                    By swearing the motto of honesty and best practices, Dr. Venus visions to become a one-stop solution for all kinds of dermatology, aesthetic and trichology issues.
                                </p>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {[
                                        "Uncompromising Quality",
                                        "Ethical Medical Practices",
                                        "Patient-Centric Care",
                                        "International Safety Standards"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-sm font-bold text-primary/60 uppercase tracking-widest bg-white/50 p-4 rounded-2xl border border-primary/5">
                                            <CheckCircle2 size={16} className="text-accent" /> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </main>
    );
}
