import React from "react";
import Image from "next/image";
import {
  CheckCircle2,
  Award,
  Target,
  Eye,
  Instagram,
  Sparkles,
  ShieldCheck,
  Phone,
  ArrowUpRight,
} from "lucide-react";

export const metadata = {
  title: "About Dr. Venu Kumari - Dr Venus Institute",
  description:
    "Learn more about Dr. Venu Kumari and Dr. Venus Institute, our mission, vision, and the expertise in dermatology and trichology.",
  keywords: [
    "Dr. Venu Kumari",
    "best dermatologist in hyderabad",
    "skin specialist",
    "hair transplant expert",
    "aesthetic clinic hyderabad",
  ],
  alternates: {
    canonical: "/about-us",
  },
};

export default function AboutUsPage() {
  return (
    <main className="pt-20 md:pt-24 bg-[#fbfcfb] overflow-hidden">
      {/* ── Compact Header ── */}
      <div className="w-full bg-white border-b border-primary/5">
        <div className="max-w-7xl mx-auto px-6 py-6 md:py-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-accent font-bold uppercase tracking-[0.3em] text-[10px]">
              <span className="w-8 h-px bg-accent/30"></span>
              Founder & Medical Director
            </div>
            <h1 className="text-3xl md:text-5xl font-serif text-primary">
              Dr. Venu Kumari
            </h1>
          </div>
          <div className="max-w-md">
            <p className="text-foreground/60 font-sans text-sm md:text-base leading-relaxed">
              Leading Dr. Venus Institute with 19+ years of clinical excellence
              in dermatology, trichology, and advanced aesthetic
              transformations.
            </p>
          </div>
        </div>
      </div>

      {/* ── Spotlight & Experience Grid ── */}
      <section className="py-10 md:py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* 1. Portrait Section */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5] shadow-xl border border-primary/5">
                <Image
                  src="/images/Dr-Venu-Kumari-holding-award.jpg"
                  alt="Dr. Venu Kumari"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 p-5 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center text-primary shadow-lg">
                      <Award size={20} />
                    </div>
                    <div>
                      <div className="text-white text-xs font-bold uppercase tracking-widest">
                        Hi9 Healthcare Award
                      </div>
                      <div className="text-white/80 text-[10px]">
                        Best Dermatologist 2019
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Content & Bio */}
            <div className="lg:col-span-7 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-primary flex items-center gap-2">
                    <Sparkles size={16} className="text-accent" />
                    Medical Philosophy
                  </h3>
                  <p className="text-sm text-foreground/70 leading-relaxed italic border-l-2 border-accent/20 pl-4">
                    "My approach to aesthetics is rooted in clinical precision
                    and feminine intuition. I treat every patient as I would
                    treat myself, focusing on results that are both
                    transformative and naturally beautiful."
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-primary flex items-center gap-2">
                    <ShieldCheck size={16} className="text-accent" />
                    Academic Excellence
                  </h3>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    MBBS, MD in Dermatology, Venereology & Leprosy. A
                    specialized practitioner with extensive experience in
                    dermatosurgery and immunodermatology.
                  </p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-[2rem] border border-primary/5 shadow-sm space-y-6">
                <h2 className="text-2xl font-serif text-primary">
                  The Vision Behind Dr. Venus
                </h2>
                <div className="prose prose-sm text-foreground/70 font-sans leading-relaxed space-y-4 max-w-none">
                  <p>
                    Dr. Venus Institute was founded with a singular mission: to
                    democratize world-class aesthetic care in Hyderabad. Under
                    Dr. Venu's leadership, the clinic has grown into a
                    multi-branch institute known for{" "}
                    <strong>honesty, transparency, and safety</strong>.
                  </p>
                  <p>
                    From advanced laser treatments to complex hair restorations,
                    every protocol at Dr. Venus is personally vetted by the
                    doctor to ensure it meets US-FDA standards and delivers
                    predictable, high-quality outcomes.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 pt-2">
                  {[
                    "Dermatology",
                    "Trichology",
                    "Laser Experts",
                    "Anti-Aging",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-primary/5 text-primary text-[10px] font-bold uppercase tracking-widest rounded-lg border border-primary/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Stats Counter */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { label: "Clinical Years", value: "19+" },
                  { label: "Specialist", value: "13+" },
                  { label: "Smiles restored", value: "25k+" },
                  { label: "Happy rating", value: "4.9★" },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="p-4 bg-accent/5 rounded-2xl text-center border border-accent/10"
                  >
                    <div className="text-2xl font-serif text-primary font-bold">
                      {stat.value}
                    </div>
                    <div className="text-[12px] mt-2 uppercase tracking-widest font-bold text-primary/70 leading-tight">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Choose Dr. Venus ── */}
      <section className="py-16 md:py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -ml-40 -mt-40"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Section Heading */}
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
            <div className="flex items-center justify-center gap-3 text-accent font-bold uppercase tracking-[0.3em] text-[11px]">
              <div className="w-8 h-px bg-accent/40"></div>
              Why Choose Us
              <div className="w-8 h-px bg-accent/40"></div>
            </div>

            <h2 className="text-4xl md:text-5xl font-serif text-primary">
              Why Choose <span className="italic text-accent">Dr. Venus?</span>
            </h2>

            <p className="text-foreground/60 font-sans leading-relaxed">
              At Dr. Venus Institute, we combine advanced dermatology,
              cutting-edge technology, and compassionate patient care to deliver
              transformative, safe, and natural results.
            </p>
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                icon: <Sparkles size={26} />,
                title: "Advanced Aesthetic Care",
                text: "Latest US-FDA approved laser and anti-aging technologies.",
              },
              {
                icon: <ShieldCheck size={26} />,
                title: "Safety & Hygiene",
                text: "Strict sterilization protocols and medical-grade standards.",
              },
              {
                icon: <Award size={26} />,
                title: "Award Winning Expertise",
                text: "Recognized excellence in dermatology & trichology.",
              },
              {
                icon: <Target size={26} />,
                title: "Personalized Treatments",
                text: "Customized solutions for every skin and hair type.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-8 bg-[#fbfcfb] rounded-3xl border border-primary/5 shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-5 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                  {item.icon}
                </div>
                <h4 className="text-lg font-bold text-primary mb-3">
                  {item.title}
                </h4>
                <p className="text-sm text-foreground/60 leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          {/* Circular Beauty Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "98%", label: "Patient Satisfaction" },
              { value: "95%", label: "Treatment Success" },
              { value: "100%", label: "Safety Protocol" },
              { value: "92%", label: "Skin Improvement" },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center space-y-4">
                <div className="relative w-28 h-28 rounded-full border-[6px] border-accent flex items-center justify-center text-2xl font-serif font-bold text-primary shadow-lg">
                  {stat.value}
                </div>
                <div className="text-[12px] uppercase tracking-widest font-bold text-primary/90">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Purpose & Philosophy (Mission / Vision) ── */}
      <section className="py-10 md:py-16 bg-[#fbfcfb]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-[3rem] md:rounded-[4rem] p-8 md:p-14 shadow-sm border border-primary/5 relative overflow-hidden">
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl -mr-40 -mt-40"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/[0.02] rounded-full blur-3xl -ml-40 -mb-40"></div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
              {/* Mission Column */}
              <div className="lg:col-span-6 space-y-8">
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-accent font-bold uppercase tracking-[0.3em] text-[15px]">
                    <div className="w-8 h-px bg-accent/30"></div>
                    The Mission
                  </div>
                  <h2 className="text-4xl md:text-5xl font-serif text-primary leading-tight">
                    Pioneering <br />
                    <span className="italic">Clinical Integrity</span>
                  </h2>
                </div>

                <div className="relative">
                  <span className="text-[120px] font-serif text-accent/5 absolute -top-20 -left-10 select-none">
                    “
                  </span>
                  <p className="text-xl md:text-2xl text-primary font-serif leading-relaxed italic relative z-10">
                    Our mission is to make every treatment a gratifying
                    experience through evidence-based diagnosis and world-class
                    technology.
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center">
                    <Target size={18} className="text-primary" />
                  </div>
                  <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-primary/40 leading-none">
                    Driven by Patient Satisfaction
                  </div>
                </div>
              </div>

              {/* Vertical Divider (Desktop Only) */}
              <div className="hidden lg:block lg:col-span-1 border-l border-primary/5 h-64 mx-auto"></div>

              {/* Vision Column */}
              <div className="lg:col-span-5 space-y-10">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-accent font-bold uppercase tracking-[0.3em] text-[15px]">
                    <div className="w-8 h-px bg-accent/30"></div>
                    The Vision
                  </div>
                  <h2 className="text-4xl md:text-5xl font-serif text-primary leading-tight">
                    Global
                    <span className="italic text-accent">Standard</span>
                  </h2>
                </div>

                <p className="text-base md:text-lg text-foreground/60 leading-relaxed font-sans">
                  To be the primary destination for aesthetic dermatology,
                  recognized for our unwavering honesty and clinical safety.
                </p>

                <div className="grid grid-cols-1 gap-y-5">
                  {[
                    "Ethical Medical Practices",
                    "Uncompromising Quality",
                    "Patient-Centric Care",
                    "Safe Innovation",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 group">
                      <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all duration-300">
                        <CheckCircle2
                          size={12}
                          className="text-accent group-hover:text-white"
                        />
                      </div>
                      <span className="text-xs font-bold text-primary/70 uppercase tracking-widest">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Awards & Recognition ── */}
      <section className="py-20 bg-gradient-to-br from-white via-[#fbfcfb] to-accent/10 relative overflow-hidden">
        {/* Soft Decorative Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -mr-40 -mt-40"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -ml-40 -mb-40"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Section Heading */}
          <div className="text-center max-w-3xl mx-auto space-y-5 mb-16">
            <div className="flex items-center justify-center gap-3 text-accent font-bold uppercase tracking-[0.3em] text-[11px]">
              <div className="w-8 h-px bg-accent/40"></div>
              Awards & Recognition
              <div className="w-8 h-px bg-accent/40"></div>
            </div>

            <h2 className="text-4xl md:text-5xl font-serif text-primary leading-tight">
              Celebrating{" "}
              <span className="italic text-accent">Clinical Excellence</span>
            </h2>

            <p className="text-foreground/60 font-sans leading-relaxed">
              At Dr. Venus Institute, our commitment to ethical dermatology,
              innovation, and patient satisfaction has earned recognition and
              trust from thousands of happy clients.
            </p>
          </div>

          {/* Awards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                icon: <Award size={30} />,
                title: "Best Dermatologist Award",
                text: "Recognized for excellence in aesthetic dermatology and trichology.",
              },
              {
                icon: <ShieldCheck size={30} />,
                title: "Clinical Safety Excellence",
                text: "Highest standards in hygiene, sterilization & patient care.",
              },
              {
                icon: <Sparkles size={30} />,
                title: "Aesthetic Innovation Leader",
                text: "Advanced laser technologies and anti-aging solutions.",
              },
              {
                icon: <CheckCircle2 size={30} />,
                title: "Trusted by 25,000+ Clients",
                text: "Delivering visible transformations with patient-first approach.",
              },
            ].map((award, index) => (
              <div
                key={index}
                className="bg-white p-10 rounded-[2.5rem] border border-primary/5 shadow-sm hover:shadow-2xl transition-all duration-500 group text-center relative overflow-hidden"
              >
                {/* Hover Accent Glow */}
                <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition duration-500"></div>

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-20 h-20 mx-auto rounded-3xl bg-accent/10 flex items-center justify-center text-accent mb-6 group-hover:bg-accent group-hover:text-white transition-all duration-500 shadow-lg">
                    {award.icon}
                  </div>

                  {/* Title */}
                  <h4 className="text-lg font-bold text-primary mb-3">
                    {award.title}
                  </h4>

                  {/* Description */}
                  <p className="text-sm text-foreground/60 leading-relaxed">
                    {award.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ── Final Invitation Section ── */}
      <section className="py-16 md:py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(197,160,89,0.08),transparent_70%)] pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-6 text-center space-y-10 relative z-10">
          <div className="inline-block p-4 bg-primary/5 rounded-full text-primary mb-2">
            <ShieldCheck size={40} className="text-accent" />
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-primary">
            Your Journey to <span className="italic">Perfect Skin</span> Starts
            Here
          </h2>
          <p className="text-foreground/50 text-lg font-sans max-w-2xl mx-auto leading-relaxed">
            Whether you're looking for clinical dermatology or aesthetic
            enhancements, Dr. Venu Kumari and her expert team are here to guide
            you with honesty and care.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
            <a
              href="/appointment"
              className="w-full sm:w-auto px-12 py-5 bg-primary text-white rounded-full font-bold uppercase tracking-widest text-xs hover:bg-black transition-all shadow-xl shadow-primary/10"
            >
              Book Your Consultation
            </a>
            <a
              href="tel:+917777977027"
              className="w-full sm:w-auto px-10 py-5 border border-primary/10 text-primary rounded-full font-bold uppercase tracking-widest text-xs hover:bg-primary/5 transition-all flex items-center justify-center gap-3"
            >
              <Phone size={16} />
              Call +91 77779 77027
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
