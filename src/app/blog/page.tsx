export const metadata = {
  title: "Blog | Dr. Venus – Institute of Skin & Hair",
  description:
    "Expert tips, news, and insights on skin care, hair restoration, and holistic beauty from Dr. Venus.",
};

export default function BlogPage() {
  return (
    <main className="pt-20 bg-[#f8faf9]">
      <div className="w-full h-[calc(100vh-80px)] overflow-hidden">
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
