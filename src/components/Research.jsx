export default function Research() {
  return (
    <section className="bg-white py-24">

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16">

        <div className="max-w-2xl">

          <h2 className="text-[40px] font-semibold text-brandBlue leading-tight mb-6">
            Grounded in research, <br /> proven by clinical outcomes
          </h2>

          <p className="text-gray-700 mb-8 leading-relaxed">
            Interval Weight Loss is a clinically tested method developed by Dr. Nick Fuller,
            Clinical Trials Director and obesity researcher within the University of Sydney.
          </p>

          <div className="space-y-8 pl-4 border-l-2 border-brandBlue/30">

            <div>
              <h4 className="font-semibold text-brandBlue mb-1">
                Tested in multiple government and industry-funded trials
              </h4>
              <p className="text-gray-700">
                Data published in top-tier journals including The Lancet, JAMA Open,
                American Journal of Clinical Nutrition, and more.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-brandBlue mb-1">
                Tested by independent trials in real world conditions
              </h4>
              <p className="text-gray-700">
                Independently validated and ranked #1 for sustainable weight loss in Australia
                by a study from University of Wollongong.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-brandBlue mb-1">
                Published as best-seller book
              </h4>
              <p className="text-gray-700">
                Interval Weight Loss is a best-selling book, written by Dr. Nick Fuller explaining
                the science and approach.
              </p>
            </div>

          </div>

          <button className="mt-10 bg-[#053B5C] text-white px-6 py-2.5 rounded-md shadow 
                             hover:bg-[#042F4A] transition">
            See How the Program Works
          </button>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl shadow-md p-5 max-w-lg">

          <img
            src="/icons-45/Drnic.png"
            alt="Dr Nick Fuller"
            className="w-full h-[440px] object-cover rounded-md mb-10"
          />

          <div className="flex items-start justify-between">

            <div>
              <h3 className="text-brandBlue text-lg font-semibold">
                Dr. Nick Fuller
              </h3>

              <p className="text-gray-600 text-sm leading-snug mt-1 max-w-xs">
                Leading Obesity and Metabolic Health Expert, 4×<br />
                Best Selling Author
              </p>
            </div>

            <img
              src="/icons-45/sydany.png"
              alt="University of Sydney"
              className="h-16 object-contain ml-4"
            />
          </div>

        </div>
      </div>

    </section>
  );
}
