import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AppointmentFormSection from "@/components/AppointmentFormSection";
import StickyAppointment from "@/components/StickyAppointment";

export const metadata = {
    title: "Book an Appointment | Dr. Venus – Institute of Skin & Hair",
    description: "Schedule your consultation with our expert dermatologists and hair restoration specialists at Dr. Venus Institute.",
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
