"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, Instagram, Facebook, Youtube, Linkedin, ArrowRight, MapPin, Map } from "lucide-react";

const branches = [
    {
        name: "Kondapur Branch",
        title: "Aesthetics & Anti-Aging Center",
        address: "3rd Floor, SSS SQUARE Building, Opp To Sarath City Capital Mall, Kondapur, Hyderabad, TS 500084.",
        phone: "+91 77779 77027",
        mapUrl: "https://maps.google.com/?q=Dr.+Venus+Kondapur+SSS+Square+HITECH+City+Hyderabad",
    },
    {
        name: "Chandanagar Branch",
        title: "Skin & Hair Institute",
        address: "Door No 104, 2nd Floor, above Khazana Jewellery, Gangaram, Chanda Nagar, Hyderabad, TS 500050.",
        phone: "+91 77779 77027",
        mapUrl: "https://maps.google.com/?q=Dr.+Venus+Chandanagar+Khazana+Jewellery+Hyderabad",
    },
    {
        name: "Toli Chowki Branch",
        title: "Dermatology & Laser Clinic",
        address: "1st Floor, above Burger King, Galaxy, Deluxe Colony, Toli Chowki, Hyderabad, Telangana 500008.",
        phone: "+91 77779 77027",
        mapUrl: "https://maps.google.com/?q=Dr.+Venus+Toli+Chowki+Burger+King+Hyderabad",
        special: "New!"
    }
];

const treatmentCategories = [
    {
        title: "Skin Care",
        links: ["Pimple Treatment", "Wart Removal", "Mole Removal", "Acne Scar Removal", "Laser Hair Removal", "Tattoo Removal", "Skin Lightening", "Pigmentation Treatment"]
    },
    {
        title: "Hair & Body",
        links: ["Hair Transplant", "Beard Hair Transplant", "Moustache Hair Transplant", "Eyebrow Hair Transplant", "Weight Loss Treatment"]
    },
    {
        title: "Facial Aesthetics",
        links: ["Anti Aging Treatment", "Anti-Wrinkle Treatment", "Dermal Fillers", "Lip Fillers", "Skin Lifting", "Facial Rejuvenation", "Cheek Fillers", "Crows Feet"]
    }
];

export default function Footer() {
    return (
        <footer className="relative pt-16 md:pt-32 bg-[#f0f4f2] overflow-visible">
            <div className="relative bg-[#0a2e1f] text-white">
                {/* 1. Floating Overlapping Cards */}
                <div className="relative md:absolute md:top-0 left-0 w-full md:-translate-y-1/2 z-20 pt-16 md:pt-0">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
                            {branches.map((branch, index) => (
                                <div key={index} className="bg-[#143d2c] border border-white/10 p-7 rounded-[2rem] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] transition-all duration-500 hover:-translate-y-3 group">
                                    <div className="flex justify-between items-start mb-5">
                                        <div className="space-y-1">
                                            <p className="text-accent text-[10px] font-bold uppercase tracking-[0.2em]">{branch.name}</p>
                                            <h3 className="font-serif text-lg leading-tight group-hover:text-accent transition-colors">{branch.title}</h3>
                                        </div>
                                        {branch.special && (
                                            <span className="bg-accent text-primary px-2 py-0.5 rounded-full text-[9px] font-bold uppercase animate-pulse">{branch.special}</span>
                                        )}
                                    </div>
                                    <p className="text-white/50 text-[11px] leading-relaxed mb-6 flex-grow">
                                        {branch.address}
                                    </p>
                                    <div className="flex items-center justify-between border-t border-white/5 pt-5">
                                        <a href={`tel:${branch.phone}`} className="flex items-center gap-2 text-[13px] font-bold hover:text-accent transition-colors">
                                            <Phone size={13} className="text-accent" />
                                            {branch.phone}
                                        </a>
                                        <a
                                            href={branch.mapUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-1.5 text-[10px] font-bold text-accent italic group-hover:gap-2 transition-all"
                                        >
                                            View Map <ArrowRight size={11} />
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* 2. Main Navigation Section */}
                <div className="pt-16 md:pt-44 pb-12 px-6">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8 md:gap-16">
                            {/* Column 1: Brand & About */}
                            <div className="col-span-2 lg:col-span-1 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
                                <div className="bg-white p-3.5 rounded-2xl shadow-xl inline-block">
                                    <Image
                                        src="/logo/Dr-Venus-Logo-v1.svg"
                                        alt="Dr. Venus Institute"
                                        width={130}
                                        height={36}
                                        className="h-7 w-auto object-contain"
                                    />
                                </div>
                                <p className="text-white/50 text-[13px] leading-relaxed font-sans max-w-sm lg:max-w-xs">
                                    Dr. Venus – Institute of Skin & Hair. We are committed to providing world-class dermatological treatments and advanced hair restoration with a focus on precision and personalized care.
                                </p>
                                <div className="flex gap-4 pt-2">
                                    {[Facebook, Instagram, Youtube, Linkedin].map((Icon, i) => (
                                        <a key={i} href="#" className="w-9 h-9 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center hover:bg-accent hover:text-primary transition-all duration-300">
                                            <Icon size={16} />
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {/* Column 2, 3, 4: Treatment Categories */}
                            {treatmentCategories.map((cat, i) => (
                                <div key={i} className="col-span-1 flex flex-col items-start text-left">
                                    <h4 className="font-serif text-lg md:text-xl mb-6 text-white relative inline-block after:content-[''] after:absolute after:bottom-[-6px] after:left-0 after:w-6 after:h-0.5 after:bg-accent">
                                        {cat.title}
                                    </h4>
                                    <ul className="space-y-3">
                                        {cat.links.map(link => (
                                            <li key={link}>
                                                <Link href="#" className="text-white/50 hover:text-accent text-[12px] md:text-[13px] transition-all duration-300 hover:pl-1 font-sans">
                                                    {link}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* 4. Bottom Legal Credits */}
                <div className="bg-[#082418] py-8 px-6">
                    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-12">
                            <p className="text-white/70 text-[10px] uppercase font-bold tracking-[0.2em]">© 2026 Dr. Venus Institute. All Rights Reserved.</p>
                            <div className="flex gap-8">
                                <Link href="/privacy" className="text-white/70 hover:text-accent text-[10px] uppercase font-bold tracking-[0.2em] transition-colors">Privacy Policy</Link>
                                <Link href="/terms" className="text-white/70 hover:text-accent text-[10px] uppercase font-bold tracking-[0.2em] transition-colors">Terms & Conditions</Link>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 text-white text-[12px] uppercase font-bold tracking-[0.2em]">
                            <span className="opacity-60 lowercase font-normal italic">Powered by</span>
                            <span className="text-accent/60 cursor-pointer">Conquerors</span>
                        </div>
                    </div>
                </div>

                {/* Subtle Gradient Glow */}
                <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_100%,rgba(197,160,89,0.05),transparent_50%)] pointer-events-none"></div>
            </div>
        </footer>
    );
}
