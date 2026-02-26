import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
import Basics from "@/components/Basics";

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