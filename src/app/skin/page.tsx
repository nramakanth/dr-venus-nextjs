import Image from "next/image";
import Treatments from "@/components/Treatments";
import Results from "@/components/Results";

export const metadata = {
    title: "Skin Care Treatments | Dr. Venus – Institute of Skin & Hair",
    description: "Advanced skin care treatments including rejuvenation, laser therapy, and anti-aging at Dr. Venus Institute.",
};

export default function SkinPage() {
    return (
        <main className="pt-20">
            <section className="bg-[#fdf8f4] py-24 px-6 text-center">
                <div className="max-w-4xl mx-auto space-y-6">
                    <h1 className="text-5xl md:text-7xl font-serif text-[#1f4d3a]">Skin Care</h1>
                    <p className="text-xl text-gray-600 font-sans">Radiant, healthy skin starting from within.</p>
                </div>
            </section>

            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center flex-row-reverse">
                        <div className="order-2 lg:order-1 rounded-[3rem] overflow-hidden aspect-[4/5] shadow-2xl">
                            <Image
                                src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800"
                                alt="Skin Care"
                                width={600}
                                height={750}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="order-1 lg:order-2 space-y-8">
                            <h2 className="text-4xl font-serif text-[#1f4d3a]">Advanced Solutions for Every Skin Type</h2>
                            <div className="space-y-4">
                                <div className="p-6 bg-[#fdf8f4] rounded-2xl border border-orange-100">
                                    <h3 className="font-serif text-xl text-[#1f4d3a] mb-2">Skin Rejuvenation</h3>
                                    <p className="text-gray-600 text-sm">Chemical peels, hydra-facials, and microneedling to restore glow.</p>
                                </div>
                                <div className="p-6 bg-[#fdf8f4] rounded-2xl border border-orange-100">
                                    <h3 className="font-serif text-xl text-[#1f4d3a] mb-2">Laser therapy</h3>
                                    <p className="text-gray-600 text-sm">Targeted laser treatment for pigmentation, scars, and hair removal.</p>
                                </div>
                                <div className="p-6 bg-[#fdf8f4] rounded-2xl border border-orange-100">
                                    <h3 className="font-serif text-xl text-[#1f4d3a] mb-2">Anti-Aging</h3>
                                    <p className="text-gray-600 text-sm">BOTOX, Fillers, and thread lifts for a youthful appearance.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Results />
            <Treatments />
        </main>
    );
}
