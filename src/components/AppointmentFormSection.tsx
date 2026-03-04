"use client";

import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock, User, MessageSquare, ChevronRight, Map as MapIcon } from "lucide-react";
import CustomSelect from "./CustomSelect";

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

export default function AppointmentFormSection() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        mobile: "",
        email: "",
        service: "",
        captchaInput: "",
    });

    // Simple math CAPTCHA
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

    // Handler for CustomSelect (name + value directly)
    const handleSelectChange = (name: string, value: string) => {
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (parseInt(formData.captchaInput) !== captcha.answer) {
            setCaptchaError(true);
            return;
        }

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...formData, formType: 'appointment' }),
            });

            if (response.ok) {
                console.log("Form Submitted:", formData);
                alert("Thank you! We will contact you shortly.");
                // Reset form
                setFormData({
                    firstName: "",
                    lastName: "",
                    mobile: "",
                    email: "",
                    service: "",
                    captchaInput: "",
                });
            } else {
                throw new Error('Failed to submit');
            }
        } catch (error) {
            console.error("Submission error:", error);
            alert("Sorry, there was an error submitting your request. Please try again or call us directly.");
        }
    };

    return (
        <section className="pt-22 bg-white overflow-hidden">

            {/* ── Full-Width Header Band ── */}
            <div className="w-full bg-[#f0f4f2] border-b border-primary/5">
                <div className="max-w-7xl mx-auto px-6 py-10 text-center">
                    <span className="text-accent font-bold uppercase tracking-[0.3em] text-xs mb-3 mt-4 block">Reservation</span>
                    <h1 className="text-4xl md:text-5xl font-serif text-primary mb-4">Book Your Appointment</h1>
                    <div className="w-24 h-1 bg-accent mx-auto"></div>
                    <p className="mt-6 text-foreground/70 max-w-2xl mx-auto font-sans">
                        Take the first step towards radiant skin and healthy hair. Our specialists are ready to guide you on your aesthetic journey.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-16">
                {/* Main Grid: Form (left 7) + Addresses (right 5) */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                    {/* ── LEFT COLUMN ── */}
                    <div className="lg:col-span-7 flex flex-col gap-8">

                        {/* Form Card */}
                        <div className="bg-primary-soft/30 p-8 md:p-12 rounded-[2.5rem] border border-primary/5 shadow-sm">
                            <form onSubmit={handleSubmit} className="space-y-5">

                                {/* Row 1: First Name + Last Name */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div className="space-y-2">
                                        <label className="text-[11px] font-bold uppercase tracking-wider text-primary ml-1 flex items-center gap-2">
                                            <User size={12} className="text-accent" /> First Name
                                        </label>
                                        <input
                                            type="text" name="firstName" required
                                            placeholder="John"
                                            className="w-full px-5 py-3 bg-white border border-primary/20 rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all font-sans"
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[11px] font-bold uppercase tracking-wider text-primary ml-1 flex items-center gap-2">
                                            <User size={12} className="text-accent" /> Last Name
                                        </label>
                                        <input
                                            type="text" name="lastName" required
                                            placeholder="Doe"
                                            className="w-full px-5 py-3 bg-white border border-primary/20 rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all font-sans"
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>

                                {/* Row 2: Mobile + Email */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div className="space-y-2">
                                        <label className="text-[11px] font-bold uppercase tracking-wider text-primary ml-1 flex items-center gap-2">
                                            <Phone size={12} className="text-accent" /> Mobile Number
                                        </label>
                                        <input
                                            type="tel" name="mobile" required
                                            placeholder="+91 77779 77027"
                                            className="w-full px-5 py-3 bg-white border border-primary/20 rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all font-sans"
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[11px] font-bold uppercase tracking-wider text-primary ml-1 flex items-center gap-2">
                                            <Mail size={12} className="text-accent" /> Email Address
                                        </label>
                                        <input
                                            type="email" name="email" required
                                            placeholder="john@example.com"
                                            className="w-full px-5 py-3 bg-white border border-primary/20 rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all font-sans"
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>

                                {/* Row 3: Type of Service */}
                                <div className="space-y-2">
                                    <label className="text-[11px] font-bold uppercase tracking-wider text-primary ml-1 flex items-center gap-2">
                                        <MessageSquare size={12} className="text-accent" /> Type of Service
                                    </label>
                                    <CustomSelect
                                        name="service"
                                        required
                                        value={formData.service}
                                        onChange={handleSelectChange}
                                        placeholder="Select Service"
                                        className="px-5 py-3 border-primary/20"
                                        options={[
                                            { value: "Skin", label: "Skin" },
                                            { value: "Hair", label: "Hair" },
                                            { value: "Facial Aesthetics", label: "Facial Aesthetics" },
                                            { value: "Body", label: "Body" },
                                            { value: "Other", label: "Other" },
                                        ]}
                                    />
                                </div>

                                {/* Row 4: CAPTCHA */}
                                <div className="space-y-3">
                                    <label className="text-[11px] font-bold uppercase tracking-wider text-primary ml-1 flex items-center gap-2">
                                        <ChevronRight size={12} className="text-accent" />
                                        Verify You&apos;re Human
                                    </label>

                                    <div className="flex gap-4">

                                      
                                        <div className="w-1/2 h-14 flex items-center justify-center
                                        bg-white border border-primary/20
                                         rounded-2xl">
                                            <span className="font-mono font-semibold text-primary text-base tracking-normal">
                                                {captcha.a} + {captcha.b} = ?
                                            </span>
                                        </div>

                                     
                                        <input
                                            type="number"
                                            name="captchaInput"
                                            required
                                            placeholder="Answer"
                                            className={`w-1/2 h-14 text-center
                                                  bg-white border rounded-2xl
                                                  focus:outline-none focus:ring-2 transition-all
                                                  ${captchaError
                                                    ? "border-red-400 focus:ring-red-200"
                                                    : "border-primary/20 focus:ring-accent/20 focus:border-accent"
                                                }`}
                                            onChange={handleChange}
                                        />

                                    </div>

                                    {captchaError && (
                                        <p className="text-red-500 text-xs ml-1">
                                            Incorrect answer. Please try again.
                                        </p>
                                    )}
                                </div>
                                
                                <button
                                    type="submit"
                                    className="w-full bg-primary text-white font-bold py-5 rounded-2xl shadow-lg hover:bg-primary/90 transition-all transform hover:-translate-y-1 active:scale-[0.98] flex items-center justify-center gap-2 group"
                                >
                                    Book Appointment <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </button>

                            </form>
                        </div>

                        {/* ── Working Hours — simple clean strip ── */}
                        <div className="flex flex-col sm:flex-row items-stretch gap-px bg-primary/5 rounded-2xl overflow-hidden border border-primary/8">
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

                    {/* ── RIGHT COLUMN: 3 Address Cards ── */}
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
            <div className="bg-[#f0f4f2] mt-8">
                <div className="max-w-7xl mx-auto px-6 py-10">

                    {/* Header */}
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
                                {/* <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                                    <div className="w-9 h-9 bg-primary text-white rounded-xl flex items-center justify-center font-bold text-sm shadow-lg">
                                        {String(index + 1).padStart(2, "0")}
                                    </div>
                                    <span className="bg-white text-primary text-[11px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full shadow">{branch.name}</span>
                                </div> */}
                                {/* <a href="#"
                                    className="absolute top-4 right-4 z-10 bg-white text-primary text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow hover:bg-accent hover:text-white transition-all duration-300">
                                    <MapPin size={10} /> Directions
                                </a> */}
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
