export default function Basic() {
  return (
    <main className="pt-24">
      <div className="p-10 text-3xl bg-[#ecf0f1] font-serif text-green-900 text-center mt-4">
        Trichology Courses
      </div>

      <h1 className="p-8 text-center text-2xl">
        Trichology Course Details
      </h1>

      <h2 className="font-bold text-center mb-4">
        Trichology Course Fees
      </h2>

      <div className="flex justify-center">
        <table className="border-collapse border border-gray-200">
          <thead >
            <tr>
              <th className="border p-2">S.No</th>
              <th className="border p-2">Name</th>
              <th className="border p-2">Cost</th>
              <th className="border p-2">Duration</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="border p-2">1</td>
              <td className="border p-2">
                Hair Transplantation + PRP + LLT
              </td>
              <td className="border p-2">₹75,000 + tax</td>
              <td className="border p-2">2 Days</td>
            </tr>

            <tr>
              <td className="border p-2">2</td>
              <td className="border p-2">
                Other Transplantations (Hair, Eyebrow, Mustache & Beard)
              </td>
              <td className="border p-2">₹1,00,000 + tax</td>
              <td className="border p-2">Flexible (Any 2 Days)</td>
            </tr>

            <tr>
              <td className="border p-2">3</td>
              <td className="border p-2">Only PRP</td>
              <td className="border p-2">₹20,000 + tax</td>
              <td className="border p-2">2 Days</td>
            </tr>

            <tr>
              <td className="border p-2">4</td>
              <td className="border p-2">All Trichology Courses</td>
              <td className="border p-2">₹1,00,000 + tax</td>
              <td className="border p-2">Flexible (2–5 Days)</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}