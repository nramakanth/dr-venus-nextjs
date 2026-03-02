import TrainingFormSection from "@/components/TrainingFormSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Training Contact Form | Dr. Venus – Institute of Skin & Hair",
    description: "Contact us for professional dermatology and cosmetology training programs at Dr. Venus Institute.",
    keywords: [
        "dermatology training enquiry",
        "cosmetology course contact",
        "professional skin training Hyderabad",
        "Dr Venus training form",
        "aesthetic training institute",
    ],
    alternates: {
        canonical: "/training-contact-form",
    },
};

export default function TrainingContactPage() {
    return (
        <main>
            <TrainingFormSection />
        </main>
    );
}
