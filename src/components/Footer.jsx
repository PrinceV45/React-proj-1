import facebookIcon from "../assets/icons/facebook.png";
import instagramIcon from "../assets/icons/instagram.png";
import youtubeIcon from "../assets/icons/youtube.png";

export default function Footer() {
  return (
    <footer className="bg-[#F4FBFF] text-[#053B5C] pt-16 pb-12">

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-10">

        <div className="md:col-span-2">
          <img src="/icons-45/logo.png" alt="Interval Weight Loss" className="w-5" />
          <p>Interval Weight Loss</p>
        </div>

        <div className="md:col-span-2 space-y-3">
          <h4 className="font-semibold mb-4">Overview</h4>
          <p>Home</p>
          <p>How It Works</p>
          <p>IWL Essentials</p>
          <p>IWL PLUS</p>
          <p>FAQs</p>
        </div>

        <div className="md:col-span-2 space-y-3">
          <h4 className="font-semibold mb-4">Media</h4>
          <p>TV</p>
          <p>Articles</p>
          <p>Radio / Podcast</p>
        </div>

        <div className="md:col-span-2 space-y-3">
          <h4 className="font-semibold mb-4">Resources</h4>
          <p>Articles</p>
          <p>IWL Books</p>
          <p>IWL Guides</p>
          <p>Research behind IWL</p>
          <p>Health Insurance</p>
          <p>Recipes</p>
        </div>

        <div className="md:col-span-4 flex flex-col space-y-10">

          <div>
            <h4 className="font-semibold mb-4">Subscribe</h4>

            <p className="text-sm mb-4 leading-relaxed">
              Join our newsletter for updates on features and releases.
            </p>

            <div className="flex w-full mb-3">
              <input
                type="email"
                placeholder="Your email here"
                className="border border-[#053B5C]/40 px-4 py-3 rounded-l-md w-full"
              />
              <button className="px-6 py-3 bg-[#053B5C] text-white rounded-r-md font-medium">
                Subscribe
              </button>
            </div>

            <p className="text-xs text-[#053B5C]/70 leading-relaxed max-w-[320px]">
              We’re committed to your privacy. By subscribing, you agree to our
              Privacy Policy – your information will not be shared.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>

            <p className="mb-4 text-sm">
              <strong>General enquiries</strong><br />
              iwl@intervalweightloss.com.au
            </p>

            <p className="text-sm">
              <strong>Media enquiries</strong><br />
              media@intervalweightloss.com.au
            </p>
          </div>

        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">

        <div>
          <p className="text-xs text-[#053B5C]/70 mb-4 max-w-4xl">
            [1] Batterham et al: Nutrients 2025: Jan 17;17(2):332. doi: 10.3390/nu17020332.
            Evaluation of Intermittent Restricted Eating Using the Interval Weight Loss Online
            Platform in an Everyday Setting.
          </p>

          <div className="flex flex-wrap items-center gap-6 text-xs text-[#053B5C]">
            <span>© 2025 Interval Weight Loss. All rights reserved.</span>
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms and Conditions</a>
            <a href="#" className="hover:underline">Billing Terms</a>
            <a href="#" className="hover:underline">Cookie Settings</a>
          </div>
        </div>

        <div className="flex space-x-5">
          <img src={facebookIcon} alt="Facebook" className="w-5 h-5" />
          <img src={instagramIcon} alt="Instagram" className="w-5 h-5" />
          <img src={youtubeIcon} alt="YouTube" className="w-5 h-5" />
        </div>
      </div>

    </footer>
  );
}
