import { Mail, Phone } from "lucide-react";

export default function Footer(){
    return (
        <footer className="bg-[rgba(174,35,56,0.05)]  text-black py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img
                  src="/images/GvmtObms.png"
                  alt="Government Tourism Logo"
                  className="w-70 h-auto object-contain"
                /> 
              </div>

              {/* Small Icons Row */}
            <div className="flex items-center gap-4 mt-3">
              <img
                src="/images/linkedin.png"
                alt="icon-1"
                className="w-8 h-8 object-contain hover:scale-110 transition"
              />
              <img
                src="/images/facebook.png"
                alt="icon-2"
                className="w-8 h-8 object-contain hover:scale-110 transition"
              />
              <img
                src="/images/instagram.png"
                alt="icon-3"
                className="w-8 h-8 object-contain hover:scale-110 transition"
              />
              <img
                src="/images/youtube.png"
                alt="icon-4"
                className="w-8 h-8 object-contain hover:scale-110 transition"
              />
              <img
                src="/images/twitter.png"
                alt="icon-4"
                className="w-8 h-8 object-contain hover:scale-110 transition"
              />
            </div>

          <div className="border-t border-white/10 pt-10  text-xs opacity-90">

              <p>Last updated on: 18 November, 2025 </p>
            </div>

            </div>

            <div>
              <h4 className="font-semibold mb-4">Useful Links</h4>
              <ul className="space-y-2 text-sm opacity-90">
                <li><a href="#" className="hover:opacity-100 transition">Explore</a></li>
                <li><a href="#" className="hover:opacity-100 transition">Packages</a></li>
                <li><a href="#" className="hover:opacity-100 transition">Helpdesk</a></li>
                <li><a href="#" className="hover:opacity-100 transition">FAQ</a></li>
                <li><a href="#" className="hover:opacity-100 transition">Search</a></li>
                <li><a href="#" className="hover:opacity-100 transition">About US</a></li>

              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Explore Cities</h4>
              <ul className="space-y-2 text-sm opacity-90">
                <li><a href="#" className="hover:opacity-100 transition">Jaipur</a></li>
                <li><a href="#" className="hover:opacity-100 transition">Udaipur</a></li>
                 <li><a href="#" className="hover:opacity-100 transition">Jaisalmer</a></li>
                <li><a href="#" className="hover:opacity-100 transition">Jodhpur</a></li>
                <li><a href="#" className="hover:opacity-100 transition">Pushkar</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Help & Support</h4>
              <ul className="space-y-2 text-sm opacity-90">
                <li><a href="#" className="hover:opacity-100 transition">Help Desk</a></li>
                <li><a href="#" className="hover:opacity-100 transition">FAQ's</a></li>
                <li><a href="#" className="hover:opacity-100 transition">Booking Support</a></li>
                <li><a href="#" className="hover:opacity-100 transition">Tourist Helpline</a></li>
                <li><a href="#" className="hover:opacity-100 transition">Emergency Contacts</a></li>
                <li><a href="#" className="hover:opacity-100 transition">SOS</a></li>

              </ul>
            </div>

         <div>
              <h4 className="font-semibold mb-4">Contact Us</h4>

              <ul className="space-y-3 text-sm opacity-90">

                {/* Phone */}
                <li>
                  <a
                    href="tel:01412923486"
                    className="flex items-center gap-2 hover:opacity-100 transition"
                  >
                    <Phone size={16} className="text-primary" />
                    <span>01412923486, 01412921311</span>
                  </a>
                </li>

                {/* Email */}
                <li>
                  <a
                    href="mailto:helpdesk.tourist@rajasthan.gov.in"
                    className="flex items-center gap-2 hover:opacity-100 transition"
                  >
                    <Mail size={16} className="text-primary" />
                    <span>helpdesk.tourist@rajasthan.gov.in</span>
                  </a>
                </li>

              </ul>
            </div>

          </div>

          <div className="border-t border-white/20 pt-8 text-sm opacity-90 text-[#A8A5A8] 
                flex flex-col sm:flex-row items-center justify-between gap-4">

              {/* Left Side */}
              <p>Copyright © 2025 RISL, Rajasthan. All rights reserved</p>

              {/* Right Side */}
              <div className="flex items-center gap-2">
                <a
                  href="/terms"
                  className="hover:text-white transition underline-offset-4 hover:underline"
                >
                  Terms & Conditions
                </a>

                <span>|</span>

                <a
                  href="/privacy"
                  className="hover:text-white transition underline-offset-4 hover:underline"
                >
                  Privacy Policy
                </a>
              </div>

</div>

        </div>
      </footer>
    );
}