import { Download } from "lucide-react";

export default function AppSection(){
    return (
        <section className="py-16 sm:py-24 px-4 bg-primary text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl sm:text-4xl font-bold mb-4">
                Your Rajasthan Trip, One Tap Away
              </h3>
              <p className="text-lg opacity-90 mb-8">
                Discover, explore, and book your unforgettable Rajasthan experience with our mobile app. Download now for exclusive deals and features.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center text-primary flex-shrink-0 mt-1">
                    ✓
                  </div>
                  <div>
                    <p className="font-semibold">Expert recommendations</p>
                    <p className="text-sm opacity-80">
                      Curated travel guides and hidden gems
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center text-primary flex-shrink-0 mt-1">
                    ✓
                  </div>
                  <div>
                    <p className="font-semibold">Seamless bookings</p>
                    <p className="text-sm opacity-80">
                      Hotels, tours, and experiences in one place
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center text-primary flex-shrink-0 mt-1">
                    ✓
                  </div>
                  <div>
                    <p className="font-semibold">Offline access</p>
                    <p className="text-sm opacity-80">
                      Download maps and guides for offline use
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 mt-8">
                <button className="flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition">
                  <Download size={20} />
                  App Store
                </button>
                <button className="flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition">
                  <Download size={20} />
                  Google Play
                </button>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="w-64 h-96 bg-gradient-to-b from-white to-red-50 rounded-3xl shadow-2xl flex items-center justify-center border-8 border-white">
                <div className="text-center">
                  <p className="text-6xl mb-4">📱</p>
                  <p className="text-primary font-bold text-lg">Mobile App</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Available on iOS & Android
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}