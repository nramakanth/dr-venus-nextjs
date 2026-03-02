import EnquiryFormSection from "@/components/EnquiryFormSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us | Dr. Venus – Institute of Skin & Hair",
    description: "Get in touch with Dr. Venus Institute for consultations, appointments, and queries about skin and hair treatments.",
    keywords: [
        "contact dermatology clinic",
        "skin treatment enquiry",
        "hair clinic contact Hyderabad",
        "Dr Venus enquiry form",
        "dermatology support",
    ],
    alternates: {
        canonical: "/Contact-Us",
    },
};

export default function ContactPage() {
    return (
        <main>
            <EnquiryFormSection />
        </main>
    );
}
