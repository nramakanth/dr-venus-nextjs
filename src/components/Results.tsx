import Image from "next/image";

export default function Results() {
    return (
        <section className="py-24 px-6 bg-[#1f4d3a] text-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-[11px] md:text-[12px] uppercase tracking-[0.4em] font-medium text-white/80 mb-3 font-sans">Transformations</h2>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif text-white leading-tight">Real Results, Real People</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="space-y-4 group">
                            <div className="relative aspect-square rounded-3xl overflow-hidden border border-white/10">
                                <div className="absolute inset-0 flex">
                                    <div className="w-1/2 relative">
                                        <Image
                                            src={`https://images.unsplash.com/photo-1511974035430-5de47d3b95da?auto=format&fit=crop&q=80&w=400&h=400&sig=before${i}`}
                                            alt="Before"
                                            width={200}
                                            height={400}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-md text-[10px] px-2 py-1 rounded-md uppercase font-bold tracking-widest text-white">Before</div>
                                    </div>
                                    <div className="w-1/2 relative border-l border-white/20">
                                        <Image
                                            src={`https://images.unsplash.com/photo-1511974035430-5de47d3b95da?auto=format&fit=crop&q=80&w=400&h=400&sig=after${i}`}
                                            alt="After"
                                            width={200}
                                            height={400}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute bottom-4 right-4 bg-[#1f4d3a]/80 backdrop-blur-md text-[10px] px-2 py-1 rounded-md uppercase font-bold tracking-widest text-white">After</div>
                                    </div>
                                </div>
                            </div>
                            <div className="px-2">
                                <h4 className="text-xl font-serif">Hair Restoration - 6 Months</h4>
                                <p className="text-white/60 text-sm font-sans">Individual results may vary based on condition and treatment plan.</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <button className="px-10 py-4 border border-white/30 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-[#1f4d3a] transition-all duration-300">
                        View More Transformations
                    </button>
                </div>
            </div>
        </section>
    );
}
