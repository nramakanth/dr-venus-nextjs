"use client";

import React, { useState } from "react";
import {
  Users,
  Phone,
  ArrowRight,
  MessageSquare,
  Sparkles,
  ChevronDown,
} from "lucide-react";
import CustomSelect from "./CustomSelect";

const treatmentOptions = [
  { value: "Skin", label: "Skin" },
  { value: "Hair", label: "Hair" },
  { value: "Facial Aesthetics", label: "Facial Aesthetics" },
  { value: "Body", label: "Body" },
  { value: "Other", label: "Other" },
];

export default function QuickInquiry() {
  const [selectedTreatment, setSelectedTreatment] = useState("");

  const handleSelectChange = (name: string, value: string) => {
    setSelectedTreatment(value);
  };

  return (
    <section className="relative z-20 -mt-10 md:-mt-8 pb-14">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-10">
        <div className="relative group">
          {/* Ultra-slim glass container */}
          <div className="relative bg-white border border-primary/10 rounded-lg md:rounded-lg p-2 md:p-2.5 shadow-[0_20px_50px_rgba(31,77,58,0.08)] backdrop-blur-md">
            <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-4">
              {/* Left Label - Prominent on all screens */}
              <div className="lg:w-[15%] bg-primary rounded-lg md:rounded-lg py-3.5 px-6 flex items-center justify-center gap-3 shrink-0 text-center">
                {/* <Sparkles sisze={16} className="text-secondary" /> */}
                <span className="text-white font-serif font-bold text-sm md:text-base tracking-wide whitespace-nowrap text-center">
                  Quick Inquiry
                </span>
              </div>

              {/* Ultra-slim Horizontal Form */}
              <div className="flex-1 w-full lg:px-2">
                <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3.5">
                  {/* Name */}
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="w-full bg-white border border-primary/20 focus:border-secondary focus:ring-1 focus:ring-secondary/20 rounded-xl px-4 py-3 text-sm text-primary font-medium outline-none transition-all placeholder:text-gray-400"
                    />
                    <Users
                      size={15}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                    />
                  </div>

                  {/* Phone */}
                  <div className="relative">
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="w-full bg-white border border-primary/20 focus:border-secondary focus:ring-1 focus:ring-secondary/20 rounded-xl px-4 py-3 text-sm text-primary font-medium outline-none transition-all placeholder:text-gray-400"
                    />
                    <Phone
                      size={15}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                    />
                  </div>

                  {/* Service */}
                  <div className="relative">
                    <CustomSelect
                      name="treatment"
                      options={treatmentOptions}
                      value={selectedTreatment}
                      onChange={handleSelectChange}
                      placeholder="Select Service"
                      className="px-4 py-3 border-primary/20"
                    />
                  </div>

                  {/* Submit Button - Compact */}
                  <button
                    type="submit"
                    className="bg-secondary text-white font-bold px-8 py-3 rounded-xl text-sm shadow-lg shadow-secondary/10 hover:shadow-xl hover:bg-secondary/90 transition-all flex items-center justify-center gap-2 group"
                  >
                    Get Call Back
                    <ArrowRight
                      size={15}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Micro-trust indicators */}
      </div>
    </section>
  );
}
