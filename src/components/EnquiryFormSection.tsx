"use client";

import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock, User, MessageSquare, ChevronRight, FileText, CheckCircle2 } from "lucide-react";

const branches = [
    {
        name: "Kondapur Branch",
        title: "Aesthetics & Anti-Aging Center",
        fullName: "Dr. Venus Institute of Aesthetics & Anti-Aging",
        address: "3rd Floor, SSS SQUARE Building, Near Kothaguda Junction Whitefields, Opp To Sarath City Capital Mall, Kondapur, HITECH City, Hyderabad, Telangana 500084.",
        phone: "+91 77779 77027",
        email: "info@drvenus.in",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15224.03962144319!2d78.366108!3d17.45924!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9326b120dcbf%3A0xbc45f6945edefd1!2sDr.%20Venus!5e0!3m2!1sen!2sin!4v1771935674894!5m2!1sen!2sin"
    },
    {
        name: "Chandanagar Branch",
        title: "Skin & Hair Institute",
        fullName: "Dr. Venus Institute of Skin & Hair",
        address: "Door No 104, 2nd Floor, above Khazana Jewellery, beside My Home Jewel Road, Gangaram, Engineers Enclave, Chanda Nagar, Hyderabad, Telangana 500050.",
        phone: "+91 77779 77027",
        email: "info@drvenus.in",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d121768.32387323146!2d78.333721!3d17.495092!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb92895dc3cf6b%3A0x296c1886e753d824!2sDr.%20Venus!5e0!3m2!1sen!2sin!4v1771936279566!5m2!1sen!2sin"
    },
    {
        name: "Toli Chowki Branch",
        title: "Skin, Hair, Lasers & Weight Loss",
        fullName: "Dr. Venus Institute of Skin, Hair, Lasers & Weight Loss",
        address: "1st Floor, above Burger King, Galaxy, Deluxe Colony, Janaki Nagar Colony, Toli Chowki, Hyderabad, Telangana 500008.",
        phone: "+91 77779 77027",
        email: "info@drvenus.in",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7614.381048156828!2d78.411279!3d17.402642!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb973b12ff30fd%3A0x31d3b9c77159d038!2sDr.%20Venus!5e0!3m2!1sen!2sin!4v1771936430713!5m2!1sen!2sin"
    }
];

export default function EnquiryFormSection() {
    const [formData, setFormData] = useState({
        name: "",
        mobile: "",
        email: "",
        lookingFor: [] as string[],
        problem: "",
    });

    const [isRobot, setIsRobot] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleCheckboxChange = (service: string) => {
        setFormData(prev => {
            const current = [...prev.lookingFor];
            if (current.includes(service)) {
                return { ...prev, lookingFor: current.filter(s => s !== service) };
            } else {
                return { ...prev, lookingFor: [...current, service] };
            }
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!isRobot) {
            alert("Please verify you are not a robot.");
            return;
        }

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...formData, formType: 'enquiry' }),
            });

            if (response.ok) {
                console.log("Enquiry Form Submitted:", formData);
                alert("Thank you for your enquiry! We will get back to you shortly.");
                // Reset form
                setFormData({
                    name: "",
                    mobile: "",
                    email: "",
                    lookingFor: [],
                    problem: "",
                });
                setIsRobot(false);
            } else {
                throw new Error('Failed to submit');
            }
        } catch (error) {
            console.error("Submission error:", error);
            alert("Sorry, there was an error submitting your request. Please try again or call us directly.");
        }
    };

    return (
        <section className="pt-32 bg-white overflow-hidden">
            {/* ── Full-Width Header Band ── */}
            <div className="w-full bg-[#f0f4f2] border-b border-primary/5">
                <div className="max-w-7xl mx-auto px-6 py-16 text-center">
                    <span className="text-accent font-bold uppercase tracking-[0.3em] text-xs mb-3 block">Enquiry</span>
                    <h1 className="text-4xl md:text-5xl font-serif text-primary mb-4">Send Us An Enquiry</h1>
                    <div className="w-24 h-1 bg-accent mx-auto"></div>
                    <p className="mt-6 text-foreground/70 max-w-2xl mx-auto font-sans">
                        Have a specific concern or question? Fill out the form below and our experts will guide you through the best treatment options.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    {/* ── LEFT COLUMN: Form ── */}
                    <div className="lg:col-span-7">
                        <div className="bg-primary-soft/30 p-8 md:p-12 rounded-[2.5rem] border border-primary/5 shadow-sm">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Name */}
                                <div className="space-y-2">
                                    <label className="text-[11px] font-bold uppercase tracking-wider text-primary ml-1 flex items-center gap-2">
                                        <User size={12} className="text-accent" /> Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text" name="name" required
                                        placeholder="Your Full Name"
                                        className="w-full px-5 py-3 bg-white border border-primary/20 rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all font-sans"
                                        onChange={handleChange}
                                    />
                                </div>

                                {/* Phone & Email */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div className="space-y-2">
                                        <label className="text-[11px] font-bold uppercase tracking-wider text-primary ml-1 flex items-center gap-2">
                                            <Phone size={12} className="text-accent" /> Phone <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="tel" name="mobile" required
                                            placeholder="Mobile Number"
                                            className="w-full px-5 py-3 bg-white border border-primary/20 rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all font-sans"
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[11px] font-bold uppercase tracking-wider text-primary ml-1 flex items-center gap-2">
                                            <Mail size={12} className="text-accent" /> Email <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="email" name="email" required
                                            placeholder="Email Address"
                                            className="w-full px-5 py-3 bg-white border border-primary/20 rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all font-sans"
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>

                                {/* Looking For */}
                                <div className="space-y-4">
                                    <label className="text-[11px] font-bold uppercase tracking-wider text-primary ml-1 flex items-center gap-2">
                                        <CheckCircle2 size={12} className="text-accent" /> Looking For : <span className="text-red-500">*</span>
                                    </label>
                                    <div className="flex flex-wrap gap-6 pl-1">
                                        {["Skin", "Hair", "Facial Aesthetics", "Inch Loss"].map((service) => (
                                            <label key={service} className="flex items-center gap-2 cursor-pointer group">
                                                <input
                                                    type="checkbox"
                                                    className="w-5 h-5 rounded border-gray-300 text-accent focus:ring-accent/20 cursor-pointer"
                                                    onChange={() => handleCheckboxChange(service)}
                                                />
                                                <span className="text-sm font-medium text-primary group-hover:text-primary transition-colors">{service}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                {/* Specify Problem */}
                                <div className="space-y-2">
                                    <label className="text-[11px] font-bold uppercase tracking-wider text-primary ml-1 flex items-center gap-2">
                                        <MessageSquare size={12} className="text-accent" /> Specify Your Problem <span className="text-red-500">*</span>
                                    </label>
                                    <textarea
                                        name="problem" required
                                        rows={4}
                                        placeholder="Briefly describe your concern..."
                                        className="w-full px-5 py-3 bg-white border border-primary/20 rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all font-sans resize-none"
                                        onChange={handleChange}
                                    />
                                </div>

                                {/* Fake reCAPTCHA */}
                                <div className="bg-white border border-gray-200 rounded-lg p-4 flex items-center justify-between max-w-[300px] shadow-sm">
                                    <div className="flex items-center gap-3">
                                        <input
                                            type="checkbox"
                                            id="robot"
                                            className="w-6 h-6 border-2 border-gray-300 rounded cursor-pointer transition-all"
                                            onChange={(e) => setIsRobot(e.target.checked)}
                                        />
                                        <label htmlFor="robot" className="text-sm font-medium text-gray-700 cursor-pointer">I&apos;m not a robot</label>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" alt="reCAPTCHA" className="w-8 h-8" />
                                        <span className="text-[10px] text-gray-400 mt-1">reCAPTCHA</span>
                                        <div className="flex gap-2 text-[8px] text-gray-400">
                                            <span>Privacy</span>
                                            <span>Terms</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Submit button */}
                                <button
                                    type="submit"
                                    className="w-full bg-primary text-white font-bold py-5 rounded-2xl shadow-lg hover:bg-primary/90 transition-all transform hover:-translate-y-1 active:scale-[0.98] flex items-center justify-center gap-2 group mt-4"
                                >
                                    Request a Callback <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </form>
                        </div>

                        {/* Working Hours */}
                        <div className="mt-8 flex flex-col sm:flex-row items-stretch gap-px bg-primary/5 rounded-2xl overflow-hidden border border-primary/8">
                            <div className="flex items-center gap-3 bg-white px-6 py-4 flex-1">
                                <Clock size={16} className="text-accent flex-shrink-0" />
                                <span className="text-[11px] font-bold uppercase tracking-widest text-primary/50">Mon – Sat</span>
                                <span className="ml-auto text-primary font-bold text-sm">10:00 AM – 8:00 PM</span>
                            </div>
                            <div className="w-px bg-primary/8 hidden sm:block"></div>
                            <div className="flex items-center gap-3 bg-white px-6 py-4 flex-1">
                                <Clock size={16} className="text-gray-300 flex-shrink-0" />
                                <span className="text-[11px] font-bold uppercase tracking-widest text-primary/50">Sunday</span>
                                <span className="ml-auto text-primary font-bold text-sm">11:00 AM – 4:00 PM</span>
                            </div>
                        </div>
                    </div>

                    {/* ── RIGHT COLUMN: Address Cards ── */}
                    <div className="lg:col-span-5 space-y-6">
                        <h2 className="text-3xl font-serif text-primary mb-8 px-2">Our Clinics</h2>
                        {branches.map((branch, index) => (
                            <div key={index} className="bg-white border border-primary/5 p-6 rounded-3xl shadow-sm hover:shadow-md transition-all group border-l-4 border-l-accent">
                                <h3 className="text-xl font-serif text-primary mb-1 group-hover:text-accent transition-colors">{branch.name}</h3>
                                <p className="text-xs font-bold text-accent/80 uppercase tracking-widest mb-4">{branch.fullName}</p>
                                <div className="space-y-4">
                                    <div className="flex gap-3">
                                        <MapPin size={16} className="text-primary mt-0.5 flex-shrink-0" />
                                        <p className="text-foreground/70 text-sm leading-relaxed">{branch.address}</p>
                                    </div>
                                    <div className="flex flex-wrap gap-x-6 gap-y-3 pt-3 border-t border-primary/5">
                                        <div className="flex items-center gap-2.5">
                                            <div className="bg-primary/5 p-1.5 rounded-lg">
                                                <Phone size={13} className="text-primary" />
                                            </div>
                                            <a href={`tel:${branch.phone}`} className="text-foreground/80 font-bold text-[13px] hover:text-accent transition-colors">
                                                {branch.phone}
                                            </a>
                                        </div>
                                        <div className="flex items-center gap-2.5">
                                            <div className="bg-primary/5 p-1.5 rounded-lg">
                                                <Mail size={13} className="text-primary" />
                                            </div>
                                            <a href={`mailto:${branch.email}`} className="text-foreground/80 text-[13px] hover:text-accent transition-colors">
                                                {branch.email}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ── Maps Section ── */}
            <div className="bg-[#f0f4f2] mt-16">
                <div className="max-w-7xl mx-auto px-6 py-20">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
                        <div>
                            <span className="text-accent font-bold uppercase tracking-[0.3em] text-xs mb-3 block">Find Us</span>
                            <h2 className="text-4xl font-serif text-primary">Our Locations</h2>
                        </div>
                        <p className="text-foreground/60 font-sans text-sm max-w-sm leading-relaxed">
                            Visit any of our three premium clinics across Hyderabad for world-class skin &amp; hair care.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {branches.map((branch, index) => (
                            <div key={index} className="relative rounded-[2rem] overflow-hidden shadow-md" style={{ height: '380px' }}>
                                <iframe
                                    src={branch.mapUrl}
                                    width="100%" height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title={branch.name}
                                    className="w-full h-full"
                                ></iframe>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
