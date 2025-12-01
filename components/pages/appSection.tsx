import { Building2, Calendar, CheckCircle, Map } from "lucide-react";

export default function AppSection(){
    return (
        <section className="py-16 sm:py-10 px-20  text-white ">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-gradient-to-b from-[#6A1815] to-[#AC4440]
  py-20 px-20 rounded-2xl">
            <div>
              <h3 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight ">
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
                  <div className=" rounded-2xl p-4 shadow-xl flex items-center justify-center">
                    <img 
                      src="/images/apps.png" 
                      alt="QR Code" 
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>

                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}
