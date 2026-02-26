"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Camera, ArrowRight, Sparkles, X, ChevronLeft, ChevronRight } from "lucide-react";

const galleryCategories = [
    {
        title: "Hair Transplantation For Men",
        images: [
            { src: "/images/gallery/Male-Hair-Transplant-min-375x300-1.jpg", alt: "Male Hair Transplant" },
            { src: "/images/gallery/Fue-hair-transplant-in-hyderabad-min-375x300-1.jpg", alt: "FUE Hair Transplant" },
            { src: "/images/gallery/Hair-Transplant-in-hyderabad-min-375x300-1-1.jpg", alt: "Hair Transplant Results" },
            { src: "/images/gallery/Hair-Transplant-in-hyderabad-min-375x300-1.jpg", alt: "Hair Restoration" },
            { src: "/images/gallery/Hair-Transplant-min-375x300-1-1.jpg", alt: "Advanced Hair Transplant" },
            { src: "/images/gallery/Hair-Transplantation-min-375x300-1.jpg", alt: "Specialist Hair Transplant" },
            { src: "/images/gallery/Hair-transplant-1-min-375x300-1.jpg", alt: "Hair Transplant Case 1" },
            { src: "/images/gallery/Hair-transplant-3-min-1-375x300-1.jpg", alt: "Hair Transplant Case 2" },
            { src: "/images/gallery/Hair-transplant-4-min-375x300-1.jpg", alt: "Hair Transplant Case 3" },
            { src: "/images/gallery/Hair-transplant-5-min-375x300-1.jpg", alt: "Hair Transplant Case 4" },
            { src: "/images/gallery/Hair-transplant-6-min-375x300-1.jpg", alt: "Hair Transplant Case 5" },
            { src: "/images/gallery/Fue-hair-transplant-min-375x300-1.jpg", alt: "FUE Technique" },
            { src: "/images/gallery/hair-treatment-min-375x300-1.jpg", alt: "Scalp Treatment" },
            { src: "/images/gallery/Hair-transplant-min-375x300-1.jpg", alt: "Male Restoration" },
        ]
    },
    {
        title: "Female Hair Transplantation",
        images: [
            { src: "/images/gallery/Female-Hair-Transplant-min-375x300-1.jpg", alt: "Female Hair Transplant Case 1" },
            { src: "/images/gallery/Female-hair-transplant-min-375x300-2.jpg", alt: "Female Hair Transplant Case 2" },
            { src: "/images/gallery/Fue-Hair-transplant-for-women-min-375x300-1.jpg", alt: "FUE for Women" },
            { src: "/images/gallery/Hair-transplant-For-women-min-375x300-1.jpg", alt: "Women Restoration" },
        ]
    },
    {
        title: "Eyebrow Hair Transplantation",
        images: [
            { src: "/images/gallery/Eye-Brow-hair-transplant-min-1-375x300-1.jpg", alt: "Eyebrow Restoration" },
        ]
    },
    {
        title: "Beard Transplantation",
        images: [
            { src: "/images/gallery/beard-transplantation-1-150x150-1.jpg", alt: "Beard Transplant Success" },
        ]
    },
    {
        title: "Ear Lobe Keloid",
        images: [
            { src: "/images/gallery/Ear-lobe-keloid-150x150-1.jpg", alt: "Ear Lobe Keloid Treatment" },
        ]
    }
];

// Flatten all images for easy navigation in modal
const allImages = galleryCategories.flatMap(cat =>
    cat.images.map(img => ({ ...img, category: cat.title }))
);

export default function GalleryPage() {
    const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

    // Handle ESC key to close modal
    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === "Escape") setSelectedImageIndex(null);
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, []);

    // Prevent scrolling when modal is open
    useEffect(() => {
        if (selectedImageIndex !== null) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [selectedImageIndex]);

    const handleNext = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (selectedImageIndex !== null) {
            setSelectedImageIndex((selectedImageIndex + 1) % allImages.length);
        }
    };

    const handlePrev = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (selectedImageIndex !== null) {
            setSelectedImageIndex((selectedImageIndex - 1 + allImages.length) % allImages.length);
        }
    };

    return (
        <main className="pt-32 pb-16 bg-[#f8faf9]">
            {/* ── Header Band ── */}
            <div className="w-full bg-[#f0f4f2] border-b border-primary/5 mb-8">
                <div className="max-w-7xl mx-auto px-6 py-10 text-center">
                    <span className="text-accent font-bold uppercase tracking-[0.3em] text-[10px] mb-2 block">Transformation Journey</span>
                    <h1 className="text-3xl md:text-4xl font-serif text-primary mb-4">Before & After Gallery</h1>
                    <div className="w-20 h-0.5 bg-accent mx-auto mb-6"></div>
                    <div className="max-w-4xl mx-auto">
                        <p className="text-foreground/70 text-base font-sans leading-relaxed">
                            Dr. Venus excels in providing a reliable solution for weight loss and inch loss through the body contouring program. It is a non-invasive technique that helps in weight and fat reduction. This is done in combination with physical activity, use of certain appliances and changes in eating pattern. The appliances comprise of advanced technology which focus on a specific body part and performs the procedure.
                        </p>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 space-y-12">
                {galleryCategories.map((category, catIdx) => (
                    <section key={catIdx} className="space-y-6">
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-primary/5">
                            <div className="space-y-1">
                                <div className="flex items-center gap-2 text-accent">
                                    <Sparkles size={16} />
                                    <span className="text-[9px] font-bold uppercase tracking-widest">Medical Results</span>
                                </div>
                                <h2 className="text-2xl font-serif text-primary">{category.title}</h2>
                            </div>
                            <div className="flex items-center gap-2 text-primary/40 text-[10px] font-bold uppercase tracking-widest">
                                <Camera size={12} /> {category.images.length} Photos
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {category.images.map((image) => {
                                // Find global index for modal navigation
                                const globalIndex = allImages.findIndex(img => img.src === image.src);
                                return (
                                    <div
                                        key={image.src}
                                        className="group relative aspect-[4/3] overflow-hidden bg-white shadow-sm border border-primary/5 hover:shadow-lg transition-all duration-500 hover:-translate-y-1 cursor-pointer"
                                        onClick={() => setSelectedImageIndex(globalIndex)}
                                    >
                                        <Image
                                            src={image.src}
                                            alt={image.alt}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        {/* Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-4">
                                            <p className="text-white text-[9px] font-bold uppercase tracking-widest flex items-center gap-2">
                                                Click to enlarge <ArrowRight size={10} />
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </section>
                ))}
            </div>

            {/* CTA Section */}
            <div className="max-w-7xl mx-auto px-6 mt-16">
                <div className="bg-primary p-12 rounded-none text-center space-y-6 relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
                    <div className="relative z-10 space-y-4">
                        <h2 className="text-3xl font-serif text-white">Start Your Transformation</h2>
                        <p className="text-white/70 max-w-xl mx-auto italic text-sm">Dedicated to medical excellence in dermatology and trichology.</p>
                        <div className="pt-4">
                            <a href="/appointment-form" className="inline-block bg-accent text-primary px-10 py-3.5 rounded-none font-bold text-xs shadow-xl shadow-accent/20 hover:scale-105 active:scale-95 transition-all uppercase tracking-[0.2em]">
                                Book Consultation
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Image Modal ── */}
            {selectedImageIndex !== null && (
                <div
                    className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-10 animate-in fade-in duration-300"
                    onClick={() => setSelectedImageIndex(null)}
                >
                    <button
                        className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-[110]"
                        onClick={() => setSelectedImageIndex(null)}
                    >
                        <X size={32} />
                    </button>

                    {/* Navigation Buttons */}
                    <button
                        className="absolute left-4 md:left-10 text-white/30 hover:text-white transition-colors z-[110] bg-white/5 p-4 md:p-6"
                        onClick={handlePrev}
                    >
                        <ChevronLeft size={40} />
                    </button>
                    <button
                        className="absolute right-4 md:right-10 text-white/30 hover:text-white transition-colors z-[110] bg-white/5 p-4 md:p-6"
                        onClick={handleNext}
                    >
                        <ChevronRight size={40} />
                    </button>

                    {/* Centered Image Card */}
                    <div
                        className="relative max-w-5xl w-full max-h-[85vh] bg-white shadow-2xl flex flex-col md:flex-row shadow-black/50 overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Image Side */}
                        <div className="relative flex-1 bg-gray-100 min-h-[40vh] md:min-h-0">
                            <Image
                                src={allImages[selectedImageIndex].src}
                                alt={allImages[selectedImageIndex].alt}
                                fill
                                className="object-contain p-4"
                                priority
                            />
                        </div>

                        {/* Info Side */}
                        <div className="w-full md:w-80 bg-white p-8 border-l border-gray-100 flex flex-col justify-center gap-6">
                            <div className="space-y-2">
                                <span className="text-accent font-bold uppercase tracking-[0.2em] text-[10px] block">
                                    {allImages[selectedImageIndex].category}
                                </span>
                                <h3 className="text-2xl font-serif text-primary leading-tight">
                                    {allImages[selectedImageIndex].alt}
                                </h3>
                            </div>
                            <div className="w-12 h-0.5 bg-accent"></div>
                            <p className="text-sm text-foreground/60 leading-relaxed font-sans">
                                Professional result achieved at Dr. Venus Institute of Skin & Hair. Use the arrows to browse other medical case results.
                            </p>
                            <button
                                onClick={() => setSelectedImageIndex(null)}
                                className="mt-4 border border-primary/10 py-3 text-[10px] font-bold text-primary/40 uppercase tracking-widest hover:bg-gray-50 transition-colors"
                            >
                                Close View
                            </button>
                        </div>
                    </div>

                    {/* Image Counter Overlay */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/40 text-[10px] font-bold uppercase tracking-[0.3em]">
                        Result {selectedImageIndex + 1} of {allImages.length}
                    </div>
                </div>
            )}
        </main>
    );
}
