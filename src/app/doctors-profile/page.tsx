import React from "react";
import Image from "next/image";
import { Instagram, Plus, Award, BookOpen, GraduationCap } from "lucide-react";

export const metadata = {
    title: "Acne Scar Removal Treatment in Hyderabad [Using Laser Technology]",
    description: "Meet our expert team of dermatologists and plastic surgeons. Highly qualified specialists committed to your skin and hair health.",
    keywords: [
  "best dermatologist",
  "skin specialist",
  "best aesthetic dermatologist",
  "best cosmetologist",
  "skin and hair clinic",
  "famous skin and hair clinic",
  "best skin and hair clinic in hyderabad",
  "skin and hair clinic near me",
  "best skin and hair clinic near me",
  "best skin care clinic in hyderabad",
  "skin clinic near me",
  "skin clinic hyderabad cost",
  "hair specialist",
  "lady skin specialist in hyderabad",
  "skin specialist in hyderabad",
  "best skin specialist in hyderabad",
  "female skin specialist near me",
  "best lady skin specialist near me",
  "best lady skin specialist in hyderabad",
  "lady doctor skin specialist",
  "best skin specialist near me",
  "skin specialist hyderabad",
  "skin specialist near me",
  "dermal fillers in hyderabad",
  "dermal fillers cost in hyderabad",
  "dermal fillers cost",
  "dermal fillers before and after",
  "dermal fillers side effects photos",
  "risks of dermal fillers",
  "types of dermal fillers",
  "what are dermal fillers made of",
  "dermal fillers and covid vaccine",
  "long-term effects of dermal fillers"
],
    alternates: {
        canonical: "/doctors-profile",
    },
};

const doctors = [
    {
        name: "Dr. Venu Kumari",
        role: "Chief Dermatologist",
        image: "/images/1-Dr-Venu-Kumari.jpg",
        specialty: "Aesthetic Expert",
        degrees: "MBBS, MD – DVL",
        experience: "15+ Years",
        bio: "Dr. Venu Kumari is a pioneer in the field of dermatology, known for her medical excellence and patient-centric approach. She specializes in advanced skin rejuvenation and trichology.",
        instagram: "https://www.instagram.com/drvenusmd/",
    },
    {
        name: "Dr. G. Sharath Chandra Reddy",
        role: "Chief Plastic Surgeon",
        image: "/images/2-Chandra-Reddy.jpg",
        specialty: "Cosmetic Surgery",
        degrees: "MS, M.Ch (Plastic Surgery)",
        experience: "12+ Years",
        bio: "An expert plastic surgeon specializing in cosmetic transformations and reconstructive surgeries with a focus on natural-looking results.",
    },
    {
        name: "Dr. K. Anusha",
        role: "Dermatologist",
        image: "/images/3-dr-k-anusha.jpg",
        specialty: "Skin Specialist",
        degrees: "MBBS, MD – DVL",
        experience: "8+ Years",
        bio: "Specializes in clinical dermatology and laser treatments, providing customized solutions for all skin types and conditions.",
    },
];

export default function DoctorsProfilePage() {
    return (
        <main className="pt-22 pb-24 bg-[#f8faf9]">
            {/* ── Header Band ── */}
            <div className="w-full bg-[#f0f4f2] border-b border-primary/5 mb-10">
                <div className="max-w-7xl mx-auto px-6 lg:py-10 py-4 text-center">
                    <span className="text-accent font-bold uppercase tracking-[0.3em] text-[10px] mb-2 block">Medical Team</span>
                    <h1 className="text-3xl md:text-4xl font-serif text-primary mb-4">Expert Specialists</h1>
                    <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
                    <p className="max-w-2xl mx-auto text-foreground/70 lg:text-base text-sm font-sans leading-relaxed">
                        Our clinic is led by highly qualified and experienced medical professionals dedicated to bringing you the best in aesthetic and clinical dermatology.
                    </p>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-1 gap-8">
                    {doctors.map((doc, index) => (
                        <div key={index} className="bg-white p-6 md:p-8 rounded-[2.5rem] shadow-sm border border-primary/5 hover:border-accent/10 transition-all group">
                            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">

                                {/* Doctor Image - Smaller & More Integrated */}
                                <div className="w-40 h-40 md:w-48 md:h-48 shrink-0 relative">
                                    <div className="absolute inset-0 bg-accent/5 rounded-[2rem] -rotate-6 transition-transform group-hover:rotate-0 duration-500"></div>
                                    <div className="relative w-full h-full rounded-[2rem] overflow-hidden shadow-lg z-10">
                                        <Image
                                            src={doc.image}
                                            alt={doc.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>

                                {/* Doctor Details - Compact Layout */}
                                <div className="flex-1 text-center md:text-left">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                                        <div>
                                            <h2 className="text-2xl md:text-3xl font-serif text-primary mb-1">{doc.name}</h2>
                                            <div className="flex items-center justify-center md:justify-start gap-3">
                                                <span className="text-accent font-bold uppercase tracking-widest text-[10px]">{doc.role}</span>
                                                <span className="w-1 h-1 bg-primary/20 rounded-full"></span>
                                                <span className="text-primary/50 text-[10px] font-bold uppercase tracking-widest">{doc.experience} Exp</span>
                                            </div>
                                        </div>
                                        {doc.instagram && (
                                            <a href={doc.instagram} target="_blank" rel="noopener noreferrer"
                                                className="w-10 h-10 mx-auto md:mx-0 rounded-full bg-primary/5 flex items-center justify-center text-primary hover:bg-accent hover:text-white transition-all">
                                                <Instagram size={18} />
                                            </a>
                                        )}
                                    </div>

                                    <p className="text-base text-foreground/70 font-sans leading-relaxed mb-6 max-w-3xl">
                                        {doc.bio}
                                    </p>

                                    {/* Stats Strip - Minimalist */}
                                    <div className="flex flex-wrap justify-center md:justify-start gap-x-8 gap-y-4 pt-6 border-t border-primary/5">
                                        <div className="flex items-center gap-3">
                                            <GraduationCap className="text-accent" size={18} />
                                            <span className="text-[13px] font-bold text-primary/80 uppercase tracking-wide">{doc.degrees}</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <BookOpen className="text-accent" size={18} />
                                            <span className="text-[13px] font-bold text-primary/80 uppercase tracking-wide">{doc.specialty}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
