export default function Footer(){
    return (
        <footer className="bg-primary text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-primary font-bold text-sm">
                  OB
                </div>
                <div>
                  <p className="font-bold text-sm">Government of Rajasthan</p>
                  <p className="text-xs opacity-75">Tourism Department</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Useful Links</h4>
              <ul className="space-y-2 text-sm opacity-90">
                <li><a href="#" className="hover:opacity-100 transition">Home</a></li>
                <li><a href="#" className="hover:opacity-100 transition">Explore</a></li>
                <li><a href="#" className="hover:opacity-100 transition">Packages</a></li>
                <li><a href="#" className="hover:opacity-100 transition">Hotels</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Explore Cities</h4>
              <ul className="space-y-2 text-sm opacity-90">
                <li><a href="#" className="hover:opacity-100 transition">Jaipur</a></li>
                <li><a href="#" className="hover:opacity-100 transition">Udaipur</a></li>
                <li><a href="#" className="hover:opacity-100 transition">Jodhpur</a></li>
                <li><a href="#" className="hover:opacity-100 transition">Pushkar</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Help & Support</h4>
              <ul className="space-y-2 text-sm opacity-90">
                <li><a href="#" className="hover:opacity-100 transition">Help Center</a></li>
                <li><a href="#" className="hover:opacity-100 transition">Contact Us</a></li>
                <li><a href="#" className="hover:opacity-100 transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:opacity-100 transition">Terms & Conditions</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8 text-center text-sm opacity-90">
            <p>© 2024 Government of Rajasthan. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
}