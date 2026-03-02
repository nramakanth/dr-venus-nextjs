import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Embed View | Dr. Venus",
  description: "Embedded blog view without site header and footer.",
  keywords: [
    "blog embed",
    "Dr Venus blog iframe",
    "skin and hair blog view",
  ],
  alternates: {
    canonical: "/blog/embed",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function BlogEmbedPage() {
  return (
    <main className="bg-[#f8faf9]">
      <div className="w-full h-screen overflow-hidden">
        <iframe
          src="https://www.drvenus.in/blog/"
          className="w-full h-full border-none"
          title="Dr. Venus Blog"
          loading="lazy"
        />
      </div>
    </main>
  );
}
