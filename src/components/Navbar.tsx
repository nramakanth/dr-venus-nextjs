"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, ChevronDown, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const navItems = [
  { name: "Home", href: "/" },
  {
    name: "About",
    href: "/about-us",
    dropdown: [
      { name: "About Dr. Venus", href: "/about-us" },
      { name: "Doctors Profile", href: "/doctors-profile" },
      { name: "Gallery", href: "/gallery" },
    ],
  },
  {
    name: "Treatments & Services",
    href: "/services",
    megaMenu: [
      {
        category: "Skin Care",
        items: [
          { name: "Skin Treatment", href: "/skin-treatment" },
          { name: "Pimple Treatment", href: "/pimple-treatment" },
          { name: "Wart Removal", href: "/wart-removal" },
          { name: "Mole Removal", href: "/mole-removal-treatment" },
          { name: "Acne Scar Removal", href: "/acne-scar-removal-treatment" },
          { name: "Laser Hair Removal", href: "/laser-hair-removal-treatment" },
          { name: "Tattoo Removal", href: "/tattoo-removal" },
          { name: "Skin Lightening", href: "/skin-lightening-treatment" },
          { name: "Pigmentation Treatment", href: "/pigmentation-treatment" },
        ],
      },
      {
        category: "Hair Restoration",
        items: [
          { name: "Hair Transplant", href: "/hair-transplant" },
          { name: "Beard Hair Transplant", href: "/beard-hair-transplant" },
          {
            name: "Moustache Hair Transplant",
            href: "/moustache-hair-transplant",
          },
          { name: "Eyebrow Hair Transplant", href: "/eyebrow-hair-transplant" },
        ],
      },
      {
        category: "Facial Aesthetics",
        items: [
          { name: "Anti Aging Treatment", href: "/anti-aging-treatment" },
          { name: "Anti-Wrinkle Treatment", href: "/anti-wrinkle-treatment" },
          { name: "Dermal Fillers", href: "/dermal-fillers" },
          { name: "Lip Fillers", href: "/lip-fillers" },
          { name: "Skin Lifting Treatment ", href: "/skin-lifting-treatment" },
          {
            name: "Tear Troughs And Eye Bags",
            href: "/tear-troughs-and-eye-bags",
          },
          { name: "Facial Rejuvenation", href: "/facial-rejuvenation" },
          { name: "Cheek Fillers", href: "/cheek-fillers" },
          { name: "Crows Feet", href: "/crows-feet" },
        ],
      },
      {
        category: "Body Contouring",
        items: [
          { name: "Weight Loss Treatment", href: "/weight-loss-treatment" },
        ],
      },
    ],
  },
  { name: "Blog", href: "/blog/embed" },
  {
    name: "Courses",
    href: "/courses",
    dropdown: [
      { name: "Cosmetology Basics", href: "/cosmetology-courses" },
      { name: "Trichology Courses", href: "/trichology-courses" },
    ],
  },
  {
    name: "Contact Us",
    href: "/Contact-Us",
    dropdown: [
      { name: "Enquiry Form", href: "/enquiry-form" },
      { name: "Appointment Form", href: "/appointment-form" },
      { name: "Training Contact Form", href: "/training-contact-form" },
    ],
  },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="w-full fixed top-0 z-50 pointer-events-none">
      {/* 1) Top Header (Info Bar) - Hidden on scroll */}
      <div
        className={`w-full bg-[#eaf3ef] hidden lg:block border-b border-[#1f4d3a]/5 transition-all duration-500 overflow-hidden pointer-events-auto ${isScrolled ? "max-h-0 opacity-0 transform -translate-y-full" : "max-h-20 opacity-100 transform translate-y-0"}`}
      >
        <div className="py-2.5 px-6">
          <div className="max-w-7xl mx-auto flex justify-between items-center text-[11px] md:text-sm font-sans text-primary/80">
            <div className="uppercase tracking-[0.15em] font-bold text-[11px] hidden lg:block">
              Committed to Dermatology
            </div>
            <div className="flex gap-4 md:gap-8 items-center w-full lg:w-auto justify-between lg:justify-end">
              <a
                href="mailto:info@drvenus.in"
                className="flex items-center gap-1.5 hover:text-primary transition-colors duration-300"
              >
                <Mail size={12} strokeWidth={2.5} />
                <span className="hidden sm:inline">info@drvenus.in</span>
              </a>
              <a
                href="tel:+917777977027"
                className="flex items-center gap-1.5 hover:text-primary transition-colors duration-300"
              >
                <Phone size={12} strokeWidth={2.5} />
                <span className="font-bold underline underline-offset-2 tracking-tight">
                  +91 77779 77027
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 2) Main Navbar - Floating on Scroll */}
      <div
        className={`w-full pointer-events-none flex justify-center transition-all duration-500 ${isScrolled ? "px-4 md:px-6" : "px-0"}`}
      >
        <nav
          className={`transition-all duration-500 pointer-events-auto ${isScrolled ? "max-w-6xl w-full mx-auto mt-4 rounded-xl md:rounded-lg bg-white/90 backdrop-blur-lg shadow-2xl py-3 px-8 md:px-12" : "w-full bg-white py-5 px-6"}`}
        >
          <div
            className={`mx-auto flex justify-between items-center ${isScrolled ? "w-full" : "max-w-7xl"}`}
          >
            <div className="flex items-center">
              <Link href="/" className="relative">
                <Image
                  src="/logo/Dr-Venus-Logo-v1.svg"
                  alt="Dr. Venus Logo"
                  width={160}
                  height={50}
                  priority
                  className={`transition-all duration-300 ${isScrolled ? "h-8 md:h-9" : "h-10 md:h-12"} w-auto object-contain`}
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div
              className={`hidden lg:flex items-center gap-6 xl:gap-8 ${isScrolled ? "text-[15px]" : "text-[15px]"} font-medium tracking-wide font-sans`}
            >
              {navItems.map((item) => (
                <div key={item.name} className="relative group">
                  {item.megaMenu ? (
                    <>
                      <button className="flex items-center gap-1 text-gray-800 hover:text-primary transition-colors duration-300 py-2">
                        {item.name}{" "}
                        <ChevronDown
                          size={14}
                          className="group-hover:rotate-180 transition-transform duration-300"
                        />
                      </button>
                      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                        <div className="bg-white shadow-2xl rounded-[2.5rem] p-10 w-[min(90vw,900px)] max-h-[85vh] overflow-y-auto border border-gray-100 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 scrollbar-hide">
                          {item.megaMenu.map((cat) => (
                            <div key={cat.category} className="space-y-5">
                              <h4 className="text-[11px] uppercase tracking-[0.25em] font-bold text-primary/70 border-b border-gray-50 pb-3">
                                {cat.category}
                              </h4>
                              <div className="flex flex-col gap-3">
                                {cat.items.map((sub) => (
                                  <Link
                                    key={sub.name}
                                    href={sub.href}
                                    className="text-[14px] text-gray-600 hover:text-primary hover:translate-x-1 transition-all duration-300 font-sans"
                                  >
                                    {sub.name}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : item.dropdown ? (
                    <>
                      <button className="flex items-center gap-1 text-gray-800 hover:text-primary transition-colors duration-300 py-2">
                        {item.name}{" "}
                        <ChevronDown
                          size={14}
                          className="group-hover:rotate-180 transition-transform duration-300"
                        />
                      </button>
                      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                        <div className="bg-white shadow-2xl rounded-2xl p-4 w-[240px] border border-gray-100 overflow-hidden">
                          <div className="flex flex-col">
                            {item.dropdown.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                className="px-4 py-3 text-[15px] text-gray-600 hover:text-primary hover:bg-primary/5 rounded-xl transition-all duration-300"
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className={`py-2 transition-colors duration-300 ${item.name === "Home" ? "text-primary font-bold" : "text-gray-600 hover:text-primary"}`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            <div className="flex items-center gap-5">
              <Link href="/appointment-form">
                <button className="hidden lg:flex bg-[#1f4d3a] text-white px-6 md:px-8 py-2.5 md:py-3.5 rounded-lg font-bold text-xs md:text-sm shadow-xl shadow-[#1f4d3a]/20 hover:bg-[#1f4d3a]/90 transition-all duration-300 hover:scale-105 active:scale-95 border border-[#1f4d3a] whitespace-nowrap">
                  {isScrolled ? "Book Now" : "Book Appointment"}
                </button>
              </Link>

              {/* Mobile Menu Toggle */}
              <button
                className="lg:hidden text-[#1f4d3a] p-2 hover:bg-gray-50 rounded-xl transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          className={`lg:hidden fixed left-0 right-0 bottom-0 bg-white z-40 px-6 pt-2 pb-20 flex flex-col animate-in slide-in-from-top duration-300 pointer-events-auto overflow-y-auto ${isScrolled ? "top-[70px]" : "top-[100px]"}`}
        >
          <div className="flex flex-col">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="flex flex-col border-b border-gray-50 last:border-0"
              >
                {item.megaMenu ? (
                  <>
                    <button
                      onClick={() =>
                        setActiveDropdown(
                          activeDropdown === item.name ? null : item.name,
                        )
                      }
                      className="flex items-center justify-between text-base font-medium text-gray-800 py-3.5"
                    >
                      {item.name}{" "}
                      <ChevronDown
                        size={16}
                        className={`${activeDropdown === item.name ? "rotate-180" : ""} transition-transform text-gray-400`}
                      />
                    </button>
                    <div
                      className={`flex flex-col gap-6 pl-4 transition-all duration-500 ease-in-out ${activeDropdown === item.name ? "max-h-[2000px] opacity-100 py-4 pb-8" : "max-h-0 opacity-0 overflow-hidden"}`}
                    >
                      {item.megaMenu.map((cat) => (
                        <div key={cat.category} className="space-y-4">
                          <h4 className="text-[11px] uppercase tracking-[0.2em] font-bold text-primary/40 border-l-2 border-primary/20 pl-3">
                            {cat.category}
                          </h4>
                          <div className="flex flex-col gap-4 pl-3">
                            {cat.items.map((sub) => (
                              <Link
                                key={sub.name}
                                href={sub.href}
                                className="text-[15px] font-sans text-gray-600 hover:text-primary active:text-primary transition-colors py-1"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                {sub.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                ) : item.dropdown ? (
                  <>
                    <button
                      onClick={() =>
                        setActiveDropdown(
                          activeDropdown === item.name ? null : item.name,
                        )
                      }
                      className="flex items-center justify-between text-base font-medium text-gray-800 py-3.5"
                    >
                      {item.name}{" "}
                      <ChevronDown
                        size={16}
                        className={`${activeDropdown === item.name ? "rotate-180" : ""} transition-transform text-gray-400`}
                      />
                    </button>
                    <div
                      className={`flex flex-col gap-3 pl-4 overflow-hidden transition-all duration-300 ${activeDropdown === item.name ? "max-h-96 py-2 pb-4" : "max-h-0"}`}
                    >
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="text-[14px] font-sans text-gray-500 hover:text-primary transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="text-base font-medium text-gray-800 py-3.5"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Book Appointment Button */}
          <div className="mt-6 pt-6 border-t border-gray-50">
            <Link
              href="/appointment-form"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <button className="w-full bg-[#1f4d3a] text-white py-3.5 rounded-lg font-bold text-sm shadow-lg shadow-[#1f4d3a]/10">
                Book Appointment
              </button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
