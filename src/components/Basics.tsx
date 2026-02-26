export default function Basic() {
    return (
        <main className="pt-24">
            <div className=" text-3xl bg-[#ecf0f1] font-serif text-green-900 text-center mt-4 p-18 h-[160px]">
                Trichology Courses
            </div>

            <h1 className="p-14 text-bold text-center text-green-900 text-2xl">
                Trichology Course Details
            </h1>
            <div className="max-w-7xl mx-auto">
                <h2 className="font-serif ml-24 text-xl text-green-900 mb-4">
                    Trichology Course Fees
                </h2>

                <div className="flex justify-center">
                    <table className="min-w-[85%] border border-gray-300 border-collapse">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="border border-gray-300 p-2 text-left">S.No</th>
                                <th className="border border-gray-300 p-2 text-left">Name</th>
                                <th className="border border-gray-300 p-2 text-left">Cost</th>
                                <th className="border border-gray-300 p-2 text-left">Duration</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td className="border border-gray-300 p-2">1</td>
                                <td className="border border-gray-300 p-2">
                                    Hair Transplantation + PRP + LLT
                                </td>
                                <td className="border border-gray-300 p-2">₹75,000 + tax</td>
                                <td className="border border-gray-300 p-2">2 Days</td>
                            </tr>

                            <tr className="bg-gray-50">
                                <td className="border border-gray-300 p-2">2</td>
                                <td className="border border-gray-300 p-2">
                                    Other Transplantations (Hair, Eyebrow, Mustache & Beard)
                                </td>
                                <td className="border border-gray-300 p-2">₹1,00,000 + tax</td>
                                <td className="border border-gray-300 p-2">Flexible (Any 2 Days)</td>
                            </tr>

                            <tr>
                                <td className="border border-gray-300 p-2">3</td>
                                <td className="border border-gray-300 p-2">Only PRP</td>
                                <td className="border border-gray-300 p-2">₹20,000 + tax</td>
                                <td className="border border-gray-300 p-2">2 Days</td>
                            </tr>

                            <tr className="bg-gray-50">
                                <td className="border border-gray-300 p-2">4</td>
                                <td className="border border-gray-300 p-2">All Trichology Courses</td>
                                <td className="border border-gray-300 p-2">₹1,00,000 + tax</td>
                                <td className="border border-gray-300 p-2">Flexible (2–5 Days)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    );
}