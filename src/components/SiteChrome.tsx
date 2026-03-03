"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyAppointment from "@/components/StickyAppointment";
import MobileQuickActions from "@/components/MobileQuickActions";

const HIDE_CHROME_PREFIXES = ["/blog/embed"];

export default function SiteChrome({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const hideChrome = HIDE_CHROME_PREFIXES.some((prefix) =>
    pathname.startsWith(prefix)
  );

  if (hideChrome) {
    return <>{children}</>;
  }

  return (
    <>
      <Navbar />
      {children}
      <StickyAppointment />
      <MobileQuickActions />
      <Footer />
    </>
  );
}
