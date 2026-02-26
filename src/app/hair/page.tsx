import Image from "next/image";
import Results from "@/components/Results";
import Testimonials from "@/components/Testimonials";

export const metadata = {
    title: "Hair Restoration | Dr. Venus – Institute of Skin & Hair",
    description: "Advanced hair transplant and regrowth treatments with DHT and FUE techniques at Dr. Venus Institute.",
};

export default function HairPage() {
    return (
        <main className="pt-20">
            <section className="bg-[#1f4d3a] py-24 px-6 text-center text-white">
                <div className="max-w-4xl mx-auto space-y-6">
                    <h1 className="text-5xl md:text-7xl font-serif">Hair Restoration</h1>
                    <p className="text-xl text-white/70 font-sans">Restore your hair, regain your confidence.</p>
                </div>
            </section>

            <section className="py-24 px-6 bg-white">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <h2 className="text-4xl font-serif text-[#1f4d3a]">World Class Hair Solutions</h2>
                        <p className="text-gray-600 leading-relaxed font-sans">
                            We specialize in advanced hair transplantation and non-surgical hair regrowth therapies. Our medical team uses high-precision tools to ensure minimal downtime and natural-looking density.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex gap-4 items-center">
                                <div className="w-8 h-8 rounded-full bg-[#eaf3ef] flex items-center justify-center text-[#1f4d3a] font-bold">1</div>
                                <span className="text-gray-700 font-sans">Direct Hair Transplantation (DHT)</span>
                            </li>
                            <li className="flex gap-4 items-center">
                                <div className="w-8 h-8 rounded-full bg-[#eaf3ef] flex items-center justify-center text-[#1f4d3a] font-bold">2</div>
                                <span className="text-gray-700 font-sans">Follicular Unit Extraction (FUE)</span>
                            </li>
                            <li className="flex gap-4 items-center">
                                <div className="w-8 h-8 rounded-full bg-[#eaf3ef] flex items-center justify-center text-[#1f4d3a] font-bold">3</div>
                                <span className="text-gray-700 font-sans">Platelet-Rich Plasma (PRP) Therapy</span>
                            </li>
                            <li className="flex gap-4 items-center">
                                <div className="w-8 h-8 rounded-full bg-[#eaf3ef] flex items-center justify-center text-[#1f4d3a] font-bold">4</div>
                                <span className="text-gray-700 font-sans">Growth Factor Therapy</span>
                            </li>
                        </ul>
                    </div>
                    <div className="relative">
                        <div className="rounded-[3rem] overflow-hidden aspect-square shadow-2xl">
                            <Image
                                src="https://images.unsplash.com/photo-1522338242992-e1a54906a8da?auto=format&fit=crop&q=80&w=800"
                                alt="Hair Treatment"
                                width={800}
                                height={800}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#eaf3ef] rounded-3xl -z-10"></div>
                    </div>
                </div>
            </section>

            <Results />
            <Testimonials />
        </main>
    );
}
