"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Check } from "lucide-react";

export interface SelectOption {
    value: string;
    label: string;
}

interface CustomSelectProps {
    name: string;
    options: SelectOption[];
    placeholder?: string;
    value?: string;
    onChange: (name: string, value: string) => void;
    required?: boolean;
    className?: string; // New prop for custom styling
}

export default function CustomSelect({
    name,
    options,
    placeholder = "— Select an option —",
    value = "",
    onChange,
    required = false,
    className = "", // Default to empty
}: CustomSelectProps) {
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    const selected = options.find((o) => o.value === value);

    // Close on outside click
    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, []);

    // Close on Escape
    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if (e.key === "Escape") setOpen(false);
        };
        document.addEventListener("keydown", handler);
        return () => document.removeEventListener("keydown", handler);
    }, []);

    const handleSelect = (optValue: string) => {
        onChange(name, optValue);
        setOpen(false);
    };

    return (
        <div ref={ref} className="relative w-full">
            {/* Hidden native select for form accessibility / required validation */}
            <select
                name={name}
                value={value}
                required={required}
                onChange={() => { }}
                aria-hidden="true"
                tabIndex={-1}
                className="absolute inset-0 w-full h-full opacity-0 pointer-events-none"
            >
                <option value="">{placeholder}</option>
                {options.map((o) => (
                    <option key={o.value} value={o.value}>{o.label}</option>
                ))}
            </select>

            {/* Trigger button */}
            <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-haspopup="listbox"
                aria-expanded={open}
                className={`
                    w-full bg-white border rounded-2xl text-left font-sans text-sm
                    flex items-center justify-between gap-2 px-4 py-3
                    transition-all duration-200 outline-none
                    ${open
                        ? "border-accent ring-2 ring-accent/20 shadow-sm"
                        : "border-primary/10 hover:border-primary/30"
                    }
                    ${className} 
                `}
            >
                <span className={selected ? "text-primary font-medium" : "text-primary/60"}>
                    {selected ? selected.label : placeholder}
                </span>
                <ChevronDown
                    size={16}
                    className={`flex-shrink-0 text-primary/40 transition-transform duration-300 ${open ? "rotate-180 text-accent" : ""}`}
                />
            </button>

            {/* Dropdown panel */}
            <div
                className={`
                    absolute left-0 right-0 z-50 mt-2
                    bg-white border border-primary/10 rounded-2xl shadow-2xl overflow-hidden
                    transition-all duration-200 origin-top
                    ${open ? "opacity-100 scale-y-100 translate-y-0 pointer-events-auto" : "opacity-0 scale-y-95 -translate-y-1 pointer-events-none"}
                `}
                role="listbox"
            >
                <div className="py-1 max-h-60 overflow-y-auto">
                    {options.map((option, idx) => {
                        const isSelected = option.value === value;
                        return (
                            <button
                                key={option.value}
                                type="button"
                                role="option"
                                aria-selected={isSelected}
                                onClick={() => handleSelect(option.value)}
                                className={`
                                    w-full text-left px-5 py-3 text-sm font-sans flex items-center justify-between gap-3
                                    transition-colors duration-150
                                    ${isSelected
                                        ? "bg-accent/8 text-accent font-semibold"
                                        : "text-foreground/80 hover:bg-primary/5 hover:text-primary"
                                    }
                                    ${idx !== 0 ? "border-t border-primary/5" : ""}
                                `}
                            >
                                <span>{option.label}</span>
                                {isSelected && (
                                    <Check size={14} className="text-accent flex-shrink-0" />
                                )}
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
