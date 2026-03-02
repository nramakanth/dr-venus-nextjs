import type { Metadata } from "next";
import { Marcellus, DM_Sans } from "next/font/google";
import "./globals.css";
// import "@fortawesome/fontawesome-free/css/all.min.css";
import SiteChrome from "@/components/SiteChrome";

const marcellus = Marcellus({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-marcellus",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.drvenus.in"),
  title: "Dr. Venus – Institute of Skin & Hair | Committed to Dermatology",
  icons: {
    icon: "/logo/favicon.svg",
    apple: "/logo/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${marcellus.variable} ${dmSans.variable} font-sans antialiased text-gray-900 `}
      >
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
