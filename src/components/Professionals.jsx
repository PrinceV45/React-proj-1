export default function Professionals() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-4xl font-semibold text-brandBlue mb-4">
          Delivered by Real Healthcare Professionals
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Every dietitian in the IWL network is legally accredited through the APD, 
          the official regulatory body for dietetics in Australia.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 justify-items-center">

     
          <div>
            <img
              src="/icons-45/num1.png"
              alt="Christina Forsyth"
              className="w-40 h-40 object-cover rounded-md mx-auto"
            />
            <h4 className="mt-4 font-semibold text-brandBlue">Christina Forsyth</h4>
            <p className="text-gray-600 text-sm">BSc, MNutrDiet</p>
          </div>

          <div>
            <img
              src="/icons-45/num2.png"
              alt="Melissa Men"
              className="w-40 h-40 object-cover rounded-md mx-auto"
            />
            <h4 className="mt-4 font-semibold text-brandBlue">Melissa Men</h4>
            <p className="text-gray-600 text-sm">BSc, MNutrDiet</p>
          </div>

          <div>
            <img
              src="/icons-45/num3.png"
              alt="Jane Doe"
              className="w-40 h-40 object-cover rounded-md mx-auto"
            />
            <h4 className="mt-4 font-semibold text-brandBlue">Jane Doe</h4>
            <p className="text-gray-600 text-sm">BSc, MNutrDiet</p>
          </div>

        </div>

        <button className="mt-10 bg-[#053B5C] text-white px-6 py-2.5 rounded-md shadow 
                             hover:bg-[#042F4A] transition">
          See How the Program Works
        </button>

      </div>
    </section>
  );
}
