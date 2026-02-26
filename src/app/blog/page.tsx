import Image from "next/image";

export const metadata = {
    title: "Blog | Dr. Venus – Institute of Skin & Hair",
    description: "Expert tips, news, and insights on skin care, hair restoration, and holistic beauty from Dr. Venus.",
};

const posts = [
    {
        title: "How to maintain your skin in Summer",
        category: "Skin Care",
        date: "May 12, 2026",
        image: "https://images.unsplash.com/photo-1520333789090-1afc82db536a?auto=format&fit=crop&q=80&w=800"
    },
    {
        title: "New Advancements in Hair Transplant",
        category: "Hair Care",
        date: "June 05, 2026",
        image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800"
    },
    {
        title: "Understanding PRP for Hair Growth",
        category: "Treatments",
        date: "July 10, 2026",
        image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=800"
    }
];

export default function BlogPage() {
    return (
        <main className="pt-20">
            <section className="bg-[#f8faf9] py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16 space-y-4">
                        <h1 className="text-5xl md:text-7xl font-serif text-[#1f4d3a]">Journal</h1>
                        <p className="text-xl text-gray-600 font-sans">Insights and advice from our clinical experts.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post, i) => (
                            <div key={i} className="group cursor-pointer">
                                <div className="rounded-[2.5rem] overflow-hidden aspect-[16/10] mb-6 shadow-xl shadow-black/5">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        width={640}
                                        height={400}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                </div>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-4">
                                        <span className="text-[10px] uppercase tracking-widest font-bold text-[#1f4d3a]">{post.category}</span>
                                        <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                                        <span className="text-[10px] uppercase tracking-widest font-bold text-gray-400">{post.date}</span>
                                    </div>
                                    <h3 className="text-2xl font-serif text-[#1f4d3a] group-hover:text-[#1f4d3a]/70 transition-colors leading-tight">{post.title}</h3>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-20 text-center">
                        <button className="px-10 py-4 bg-[#1f4d3a] text-white rounded-full font-bold uppercase tracking-widest text-xs hover:bg-[#1f4d3a]/90 transition-all duration-300 shadow-xl shadow-[#1f4d3a]/20">
                            Load More Articles
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
}
