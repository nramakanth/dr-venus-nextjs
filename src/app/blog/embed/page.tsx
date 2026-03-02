export const metadata = {
  title: "Blog | Dr. Venus - Embed View",
  description: "Embedded blog view without site header and footer.",
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
