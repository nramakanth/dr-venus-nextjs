import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
import Professional from "@/components/Professional";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cosmetology Courses - Dr Venus",
  description:
    "Cosmetology courses in Hyderabad for doctors. Our curriculum includes botox and filler training. Know duration and fee structure.",
 keywords: [
  "best dermatologist",
  "skin specialist",
  "best aesthetic dermatologist",
  "best cosmetologist",
  "skin and hair clinic",
  "famous skin and hair clinic",
  "best skin and hair clinic in hyderabad",
  "skin and hair clinic near me",
  "best skin and hair clinic near me",
  "best skin care clinic in hyderabad",
  "skin clinic near me",
  "skin clinic hyderabad cost",
  "hair specialist",
  "lady skin specialist in hyderabad",
  "skin specialist in hyderabad",
  "best skin specialist in hyderabad",
  "female skin specialist near me",
  "best lady skin specialist near me",
  "best lady skin specialist in hyderabad",
  "lady doctor skin specialist",
  "best skin specialist near me",
  "skin specialist hyderabad",
  "skin specialist near me",
  "dermal fillers in hyderabad",
  "dermal fillers cost in hyderabad",
  "dermal fillers cost",
  "dermal fillers before and after",
  "dermal fillers side effects photos",
  "risks of dermal fillers",
  "types of dermal fillers",
  "what are dermal fillers made of",
  "dermal fillers and covid vaccine",
  "long-term effects of dermal fillers",
  "top cosmetology courses clinics in hyderabad"
],
  alternates: {
    canonical: "/cosmetology-courses",
  },
};

export default function CosmetologyCoursesPage() {
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
