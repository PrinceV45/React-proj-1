export default function Navbar() {
  return (
    <header className="w-full bg-white border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
 
        <div className="flex items-center gap-3">
          <div className="w-8 h-6 flex flex-col justify-between">
            <span className="block h-1 bg-brandBlue rounded w-3/4"></span>
            <span className="block h-1 bg-brandBlue rounded w-1/2"></span>
            <span className="block h-1 bg-brandBlue rounded w-1/3"></span>
          </div>
          <span className="text-lg font-medium text-brandBlue">Interval Weight Loss</span>
        </div>

        <div className="flex items-center gap-4">
          <button className="text-sm text-brandBlue hover:text-[#003B5C]">
            Sign in
          </button>

          <button className="  bg-[#053B5C]
              text-white
              px-5
              py-2
              rounded-md
              shadow
              hover:bg-[#042F4A]
              transition
              mx-auto
              block">
            See How the Program Works
          </button>
        </div>
      </div>
    </header>
  );
}
