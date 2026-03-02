import Hero from "@/components/Hero";
import QuickInquiry from "@/components/QuickInquiry";
import Treatments from "@/components/Treatments";
import AboutDoctor from "@/components/AboutDoctor";
import Awards from "@/components/Awards";
import Doctors from "@/components/Doctors";
import Testimonials from "@/components/Testimonials";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Skin and Hair Clinic in Hyderabad | Dr. Venus",
  description:
    "Discover dermatologist-led skin and hair treatments at Dr. Venus Institute in Hyderabad, including laser, anti-aging, and hair restoration care.",
  keywords: [
    "skin and hair clinic Hyderabad",
    "dermatologist Hyderabad",
    "hair treatment clinic",
    "aesthetic dermatology",
    "Dr Venus Institute",
  ],
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <QuickInquiry />
      <Treatments />
      <AboutDoctor />
      <Awards />
      <Doctors />
      {/* <Results /> */}
      <Testimonials />
    </main>
  );
}
