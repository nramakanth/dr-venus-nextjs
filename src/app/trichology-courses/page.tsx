import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
import Basics from "@/components/Basics";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trichology Courses - Dr Venus",
  description:
    "Trichology courses in Hyderabad for doctors. We cover hair transplantation, PRP and LLT training. Know duration and fee structure.",
  keywords: [
    "trichology courses",
    "hair transplant training",
    "PRP training course",
    "hair restoration course Hyderabad",
    "Dr Venus trichology program",
  ],
  alternates: {
    canonical: "/trichology-courses",
  },
};

export default function TrichologyCoursesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Basics />
      </main>
      {/* <Footer /> */}
    </>
  );
}
