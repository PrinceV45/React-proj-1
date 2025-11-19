export default function Hero() {
  return (
    <section className="bg-white">

      <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        <div className="order-2 md:order-1">
          <h1 className="pro-heading text-5xl md:text-6xl leading-tight text-brandBlue mb-6">
            For those who want <br />
            to lose the weight <br />
            <span className="bg-pale-aqua px-2">for good.</span>
          </h1>

          <p className="text-lg text-gray-600 max-w-lg mb-8">
            IWL is a clinically-proven weight loss program that works with your biology instead of fighting it,
            keeping the weight off for life.
            <br /><br />
            Developed by Dr. Nick Fuller, delivered virtually by accredited dietitians.
          </p>

          <button className="bg-[#053B5C] text-white px-5 py-2 rounded-md shadow hover:bg-[#042F4A] transition">
            See How the Program Works
          </button>
        </div>

        <div className="order-1 md:order-2 h-full">
          <div className="w-full h-[500px] md:h-[600px] bg-pale-aqua"></div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 mt-20 mb-24 text-center">

        <p className="text-base text-brandBlue font-semibold mb-14">
          Backed by Health & Government Partners
        </p>

        <div className="flex justify-center items-center gap-20 flex-wrap">

          <img src="/icons-45/hbf.png" alt="HBF" className="h-19 object-contain" />
          <img src="/icons-45/bupa.png" alt="Bupa" className="h-19 object-contain" />
          <img src="/icons-45/nib.png" alt="nib" className="h-19 object-contain" />
          <img src="/icons-45/australian-gov.png" alt="Australian Government" className="h-26 object-contain" />
          <img src="/icons-45/australian-retirement-trust.png" alt="Australian Retirement Trust" className="h-19 object-contain" />
          <img src="/icons-45/tuh.png" alt="TUH" className="h-19 object-contain" />

        </div>
      </div>
    </section>
  );
}
