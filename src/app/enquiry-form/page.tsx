import EnquiryFormSection from "@/components/EnquiryFormSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enquiry Form | Dr. Venus - Institute of Skin & Hair",
  description:
    "Submit your enquiry to Dr. Venus Institute for skin, hair, and aesthetic treatment consultations.",
  keywords: [
    "enquiry form",
    "skin clinic enquiry",
    "hair clinic enquiry Hyderabad",
    "dermatology contact form",
    "Dr Venus enquiry",
  ],
  alternates: {
    canonical: "/enquiry-form",
  },
};

export default function EnquiryPage() {
  return (
    <main>
      <EnquiryFormSection />
    </main>
  );
}
