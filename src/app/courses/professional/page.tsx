import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
import Professional from "@/components/Professional";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Professional Dermatology Course | Dr. Venus",
  description:
    "Advanced professional dermatology and cosmetology training with practical modules at Dr. Venus Institute.",
  keywords: [
    "professional dermatology course",
    "advanced cosmetology training",
    "clinical aesthetics course",
    "dermatology certification Hyderabad",
    "Dr Venus professional program",
  ],
  alternates: {
    canonical: "/courses/professional",
  },
};

export default function ProfessionalPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Professional />
      </main>
      {/* <Footer /> */}
    </>
  );
}
