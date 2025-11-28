import { Building2, Calendar, CheckCircle, Map } from "lucide-react";

export default function AppSection(){
    return (
        <section className="py-16 sm:py-24 px-4 bg-primary text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight">
                Your Rajasthan Trip,<br />One Tap Away
              </h3>
              <p className="text-base sm:text-lg opacity-90 mb-8">
                Book forts, palaces, safaris, and forest trails with the official OBMS Tourist & Wildlife App.
              </p>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <Building2 size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-base">
                      Explore Rajasthan's forts, palaces, and museums in seconds.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <Calendar size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-base">
                      Book safaris and wildlife tours with instant access.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-base">
                      Get quick confirmations for all your bookings.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <Map size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-base">
                      Find maps, history, and travel tips in one place.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end items-center">
              <div className="relative w-full max-w-sm">
                <div className="flex flex-col items-center gap-6">
                  {/* QR Code */}
                  <div className="w-48 h-48 bg-white rounded-2xl p-4 shadow-xl flex items-center justify-center">
                    <img 
                      src="https://via.placeholder.com/180?text=QR+Code" 
                      alt="QR Code" 
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>

                  {/* Phone Mockup */}
                  <div className="relative">
                    <div className="w-48 bg-black rounded-3xl shadow-2xl overflow-hidden border-8 border-black">
                      {/* Phone notch */}
                      <div className="h-6 bg-black relative">
                        <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-20 h-4 bg-black rounded-b-2xl"></div>
                      </div>
                      {/* Phone screen */}
                      <div className="bg-white h-96 flex items-center justify-center">
                        <img 
                          src="https://via.placeholder.com/180x360?text=App+Screen" 
                          alt="App Screen" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Download Buttons */}
                  <div className="flex flex-col gap-3 w-full px-4">
                    <a 
                      href="#" 
                      className="flex items-center justify-center gap-2 bg-white text-primary px-4 py-2 rounded-lg font-semibold hover:opacity-90 transition text-sm"
                    >
                      <img src="https://via.placeholder.com/16?text=AS" alt="App Store" className="w-4 h-4" />
                      Download on the App Store
                    </a>
                    <a 
                      href="#" 
                      className="flex items-center justify-center gap-2 bg-white text-primary px-4 py-2 rounded-lg font-semibold hover:opacity-90 transition text-sm"
                    >
                      <img src="https://via.placeholder.com/16?text=GP" alt="Google Play" className="w-4 h-4" />
                      GET IT ON Google Play
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}
