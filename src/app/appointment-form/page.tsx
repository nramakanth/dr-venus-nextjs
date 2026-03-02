import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AppointmentFormSection from "@/components/AppointmentFormSection";
import StickyAppointment from "@/components/StickyAppointment";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Book an Appointment | Dr. Venus – Institute of Skin & Hair",
    description: "Schedule your consultation with our expert dermatologists and hair restoration specialists at Dr. Venus Institute.",
    keywords: [
        "book dermatologist appointment",
        "skin consultation Hyderabad",
        "hair treatment consultation",
        "Dr Venus appointment",
        "dermatology booking",
    ],
    alternates: {
        canonical: "/appointment-form",
    },
};

export default function AppointmentFormPage() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen">
                <AppointmentFormSection />
            </main>
            <Footer />
            <StickyAppointment />
        </>
    );
}
