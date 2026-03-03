"use client";

import React, { useState } from "react";
import {
  User,
  Phone,
  Mail,
  ChevronRight,
  MessageSquare,
  ShieldCheck,
} from "lucide-react";
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

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (name === "captchaInput") setCaptchaError(false);
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
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

  return (
    <aside>
      {/* 1) Appointment Form Only */}
      <div className="bg-white border border-primary/5 p-8 rounded-[2.5rem] shadow-sm relative group overflow-hidden">
        {/* Decorative element */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 transition-transform duration-700 group-hover:scale-110"></div>

        <div className="relative z-10">
          <div className="mb-8">
            <h3 className="text-3xl font-serif text-primary mb-2">
              Book Consultation
            </h3>
            <p className="text-foreground/50 text-[10px] uppercase tracking-[0.2em] font-bold">
              Priority Appointment
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative">
                <User
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/30"
                  size={14}
                />
                <input
                  type="text"
                  name="firstName"
                  required
                  placeholder="First Name"
                  className="w-full bg-primary-soft/[0.15] border border-primary/10 rounded-xl py-4 pl-11 pr-4 text-sm text-primary font-bold focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all font-sans placeholder:text-primary/50"
                  onChange={handleChange}
                />
              </div>
              <div className="relative">
                <User
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/50"
                  size={14}
                />
                <input
                  type="text"
                  name="lastName"
                  required
                  placeholder="Last Name"
                  className="w-full bg-primary-soft/[0.15] border border-primary/10 rounded-xl py-4 pl-11 pr-4 text-sm text-primary font-bold focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all font-sans placeholder:text-primary/50"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="relative">
              <Phone
                className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/50"
                size={14}
              />
              <input
                type="tel"
                name="mobile"
                required
                placeholder="Mobile Number"
                className="w-full bg-primary-soft/[0.15] border border-primary/10 rounded-xl py-4 pl-11 pr-4 text-sm text-primary font-bold focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all font-sans placeholder:text-primary/50"
                onChange={handleChange}
              />
            </div>

            <div className="relative">
              <Mail
                className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/50"
                size={14}
              />
              <input
                type="email"
                name="email"
                required
                placeholder="Email Address"
                className="w-full bg-primary-soft/[0.15] border border-primary/10 rounded-xl py-4 pl-11 pr-4 text-sm text-primary font-bold focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all font-sans placeholder:text-primary/50"
                onChange={handleChange}
              />
            </div>

            <div className="space-y-2">
              <div className="relative">
                <MessageSquare
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/50 z-10 pointer-events-none"
                  size={14}
                />
                <CustomSelect
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleSelectChange}
                  placeholder="Select Service"
                  className="!bg-primary-soft/[0.15] !border-primary/10 !rounded-xl !py-4 !pl-11 pr-4 !shadow-none hover:!border-primary/30"
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
            </div>

            {/* CAPTCHA SECTION */}
            <div className="space-y-3 pt-2">
              <label className="text-[10px] font-bold uppercase tracking-wider text-primary/50 ml-1 flex items-center gap-1.5 font-sans">
                <ShieldCheck size={12} className="text-accent" /> Security Check
              </label>
              <div className="flex items-center gap-3">
                <div className="bg-primary/5 border border-primary/10 rounded-xl px-4 py-3 flex items-center justify-center min-w-[100px]">
                  <span className="font-mono font-bold text-primary text-sm tracking-widest">
                    {captcha.a} + {captcha.b} =
                  </span>
                </div>
                <input
                  type="number"
                  name="captchaInput"
                  required
                  placeholder="?"
                  className={`w-full bg-white border rounded-xl py-4 px-4 text-sm font-bold text-primary focus:outline-none focus:ring-2 transition-all font-sans placeholder:text-primary/40 ${captchaError ? "border-red-400 focus:ring-red-100" : "border-primary/20 focus:ring-accent/20"}`}
                  onChange={handleChange}
                />
              </div>
              {captchaError && (
                <p className="text-red-500 text-[10px] ml-1">
                  Incorrect answer.
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/10 hover:bg-primary/95 transition-all transform hover:-translate-y-0.5 active:scale-[0.98] mt-4 flex items-center justify-center gap-2 group"
            >
              Book Now{" "}
              <ChevronRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </form>
        </div>
      </div>
    </aside>
  );
}
