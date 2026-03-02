import Image from "next/image";
import AboutDoctor from "@/components/AboutDoctor";
import Testimonials from "@/components/Testimonials";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us | Dr. Venus – Institute of Skin & Hair",
    description: "Learn about Dr. Venus Institute, our treatment philosophy, and our patient-focused approach to skin and hair care.",
    keywords: [
        "about Dr Venus",
        "skin and hair specialists",
        "dermatology clinic Hyderabad",
        "aesthetic dermatology team",
        "hair and skin expertise",
    ],
    alternates: {
        canonical: "/about",
    },
};

export default function AboutPage() {
    return (
        <main className="pt-20">
            <section className="bg-[#eaf3ef] py-24 px-6 text-center">
                <div className="max-w-4xl mx-auto space-y-6">
                    <h1 className="text-5xl md:text-7xl font-serif text-[#1f4d3a]">About Dr. Venus</h1>
                    <p className="text-xl text-gray-600 font-sans">Pioneering natural results in skin and hair care for over 15 years.</p>
                </div>
            </section>

            <AboutDoctor />

            <section className="py-24 px-6 bg-white">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div className="space-y-6">
                        <h2 className="text-4xl font-serif text-[#1f4d3a]">Our Philosophy</h2>
                        <p className="text-gray-600 leading-relaxed font-sans">
                            At Dr. Venus Institute, we believe that true dermatological care is a blend of science, technology, and art. Every patient is unique, and so is their journey to confidence. We don&apos;t just treat symptoms; we understand the individual behind the skin or hair concern.
                        </p>
                        <p className="text-gray-600 leading-relaxed font-sans">
                            Our commitment to safety and ethics is paramount. We use only clinically proven methods and the latest technology to ensure that every treatment is as effective as it is safe.
                        </p>
                    </div>
                    <div className="rounded-[3rem] overflow-hidden aspect-video shadow-2xl">
                        <Image
                            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800"
                            alt="Clinic"
                            width={800}
                            height={450}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </section>

            <Testimonials />
        </main>
    );
}
