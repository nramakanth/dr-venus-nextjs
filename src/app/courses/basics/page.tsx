import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
import Basics from "@/components/Basics";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Basic Dermatology Course | Dr. Venus",
  description:
    "Start your journey in dermatology and cosmetology with foundational training designed for beginners at Dr. Venus Institute.",
  keywords: [
    "basic dermatology course",
    "cosmetology beginner training",
    "skin and hair course Hyderabad",
    "dermatology basics training",
    "Dr Venus academy",
  ],
  alternates: {
    canonical: "/courses/basics",
  },
};

export default function BasicsPage() {
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
