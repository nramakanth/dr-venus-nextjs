import Hero from "@/components/Hero";
import QuickInquiry from "@/components/QuickInquiry";
import Treatments from "@/components/Treatments";
import AboutDoctor from "@/components/AboutDoctor";
import Awards from "@/components/Awards";
import Doctors from "@/components/Doctors";
import Results from "@/components/Results";
import Testimonials from "@/components/Testimonials";

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
