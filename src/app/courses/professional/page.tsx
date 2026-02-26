import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
import Professional from "@/components/Professional";

export const metadata = {
  title: "Professional Dermatology Course",
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