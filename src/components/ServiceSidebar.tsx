"use client";

import React, { useState } from "react";
import { User, Phone, Mail, ChevronRight, Calendar, MessageSquare, ShieldCheck } from "lucide-react";
import CustomSelect from "./CustomSelect";

export default function ServiceSidebar() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        mobile: "",
        email: "",
        service: "",
        captchaInput: "",
    });

    // Simple math CAPTCHA logic matching the main appointment form
    const [captcha] = useState(() => {
        const a = Math.floor(Math.random() * 9) + 1;
        const b = Math.floor(Math.random() * 9) + 1;
        return { a, b, answer: a + b };
    });
    const [captchaError, setCaptchaError] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (name === "captchaInput") setCaptchaError(false);
    };

    const handleSelectChange = (name: string, value: string) => {
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (parseInt(formData.captchaInput) !== captcha.answer) {
            setCaptchaError(true);
            return;
        }
        console.log("Sidebar Form Submitted:", formData);
        alert("Thank you! Our specialists will contact you soon.");
    };

    const archives = ["2025", "2024", "2023", "2022"];

    return (
        <aside className="space-y-10">
            {/* 1) Full Appointment Form */}
            <div className="bg-white border border-primary/5 p-8 rounded-[2.5rem] shadow-sm relative group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-soft/30 rounded-full -mr-16 -mt-16 transition-transform duration-700 group-hover:scale-110"></div>

                <div className="relative z-10">
                    <h3 className="text-3xl font-serif text-primary mb-2">Book Consultation</h3>
                    <p className="text-foreground/50 text-xs mb-8 uppercase tracking-widest font-bold">Priority Appointment</p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="relative">
                                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/30" size={14} />
                                <input
                                    type="text" name="firstName" required placeholder="First Name"
                                    className="w-full bg-primary-soft/10 border border-primary/5 rounded-xl py-4 pl-11 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all font-sans placeholder:text-foreground/50"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="relative">
                                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/30" size={14} />
                                <input
                                    type="text" name="lastName" required placeholder="Last Name"
                                    className="w-full bg-primary-soft/10 border border-primary/5 rounded-xl py-4 pl-11 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all font-sans placeholder:text-foreground/50"
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="relative">
                            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/30" size={14} />
                            <input
                                type="tel" name="mobile" required placeholder="Mobile Number"
                                className="w-full bg-primary-soft/10 border border-primary/5 rounded-xl py-4 pl-11 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all font-sans placeholder:text-foreground/50"
                                onChange={handleChange}
                            />
                        </div>

                        <div className="relative">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/30" size={14} />
                            <input
                                type="email" name="email" required placeholder="Email Address"
                                className="w-full bg-primary-soft/10 border border-primary/5 rounded-xl py-4 pl-11 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all font-sans placeholder:text-foreground/50"
                                onChange={handleChange}
                            />
                        </div>

                        <div className="space-y-1.5">
                            <label className="text-[11px] font-bold uppercase tracking-wider text-primary/70 ml-1 flex items-center gap-1.5">
                                <MessageSquare size={10} className="text-accent" /> Type of Service
                            </label>
                            <CustomSelect
                                name="service"
                                required
                                value={formData.service}
                                onChange={handleSelectChange}
                                placeholder="Select Service"
                                options={[
                                    { value: "Advanced Skin Care", label: "Skin Care" },
                                    { value: "Hair Restoration", label: "Hair Restoration" },
                                    { value: "Laser Treatments", label: "Laser Treatments" },
                                    { value: "Cosmetic Surgery", label: "Cosmetic Surgery" },
                                    { value: "Anti-Aging", label: "Anti-Aging" },
                                    { value: "Weight Loss", label: "Weight Loss" },
                                ]}
                            />
                        </div>

                        {/* CAPTCHA SECTION */}
                        <div className="space-y-3 pt-2">
                            <label className="text-[11px] font-bold uppercase tracking-wider text-primary/70 ml-1 flex items-center gap-1.5">
                                <ShieldCheck size={10} className="text-accent" /> Security Check
                            </label>
                            <div className="flex items-center gap-3">
                                <div className="bg-primary/5 border border-primary/10 rounded-xl px-4 py-3 flex items-center justify-center min-w-[100px]">
                                    <span className="font-mono font-bold text-primary text-sm tracking-widest">{captcha.a} + {captcha.b} =</span>
                                </div>
                                <input
                                    type="number" name="captchaInput" required placeholder="?"
                                    className={`w-full bg-white border rounded-xl py-4 px-4 text-sm focus:outline-none focus:ring-2 transition-all font-sans placeholder:text-foreground/50 ${captchaError ? "border-red-400 focus:ring-red-100" : "border-primary/10 focus:ring-accent/20"}`}
                                    onChange={handleChange}
                                />
                            </div>
                            {captchaError && <p className="text-red-500 text-[10px] ml-1">Incorrect answer.</p>}
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-primary text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/10 hover:bg-primary/95 transition-all transform hover:-translate-y-0.5 active:scale-[0.98] mt-4 flex items-center justify-center gap-2 group"
                        >
                            Book Now <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </form>
                </div>
            </div>

            <div className="space-y-6">
                <div className="px-2">
                    <h3 className="text-2xl font-serif text-primary">Recent Updates</h3>
                </div>

                <div className="space-y-6">
                    {[
                        {
                            title: "Conquering Dandruff & Hair Fall: Expert Solutions for a Healthier Scalp",
                            date: "Feb 12, 2025",
                            image: "https://images.unsplash.com/photo-1527799822367-31885720443d?auto=format&fit=crop&q=80&w=200",
                        },
                        {
                            title: "Facelift: The Ultimate Guide to Reversing Skin Age for Every Gender",
                            date: "Feb 03, 2025",
                            image: "/images/clinical-care.png",
                        },
                        {
                            title: "K-Beauty and Skin Lightening: Does It Work for Indian Women?",
                            date: "Jan 28, 2025",
                            image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&q=80&w=200",
                        },
                        {
                            title: "Spot Fat Reduction and Targeted Toning: Myths, Realities, and Effective Strategies",
                            date: "Jan 21, 2025",
                            image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80&w=200",
                        },
                        {
                            title: "Everything You Need to Know About Microblading: A Comprehensive Guide to Perfect Eyebrows",
                            date: "Jan 14, 2025",
                            image: "https://images.unsplash.com/photo-1516394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=200",
                        }
                    ].map((post, idx) => (
                        <div key={idx} className="flex gap-4 group cursor-pointer border-b border-primary/5 pb-6 last:border-0 last:pb-0">
                            <div className="w-20 h-20 flex-shrink-0 rounded-xl overflow-hidden shadow-sm">
                                <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                            </div>
                            <div className="flex flex-col justify-center gap-1.5">
                                <span className="text-[11px] text-foreground/40 font-bold uppercase tracking-widest">{post.date}</span>
                                <h4 className="text-[15px] font-serif text-primary leading-tight group-hover:text-accent transition-colors">
                                    {post.title}
                                </h4>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* 3) Archives Section */}
            <div className="bg-primary-soft/30 border border-primary/5 p-8 rounded-[2.5rem] shadow-sm">
                <h3 className="text-xl font-serif text-primary mb-6 flex items-center gap-2">
                    <Calendar size={18} className="text-accent" />
                    Archives
                </h3>
                <div className="grid grid-cols-2 gap-3">
                    {archives.map((year) => (
                        <a
                            key={year}
                            href={`#`}
                            className="flex items-center justify-center group py-3 px-4 rounded-xl bg-white border border-primary/5 hover:border-accent/30 hover:shadow-md transition-all"
                        >
                            <span className="text-gray-500 group-hover:text-primary font-bold text-sm font-sans">{year}</span>
                            <ChevronRight size={12} className="ml-2 text-gray-300 group-hover:text-accent transition-colors" />
                        </a>
                    ))}
                </div>
            </div>
        </aside>
    );
}
