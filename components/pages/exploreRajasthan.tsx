'use client';

import { Clock, Info, MapPin, Star, Ticket } from "lucide-react";
import { useState } from "react";
import RupeeRating from "../widgets/RuppeRating";

interface Attraction {
  name: string;
  type: string;
  location: string;
  duration: string;
  rating: number;
  reviews: number;
  image: string;
  price?: number;
  description?:string;
   priceDetails?: {
    adult?: number;
    child?: number;
    foreigner?: number;
    student?: number;
  };
}

export default function ExploreRajasthan(){

    const [activeTooltip, setActiveTooltip] = useState<string | null>(null);
  
  const [tooltipPos, setTooltipPos] = useState({ top: 0, left: 0 });
  
  
  const showTooltip = (e: React.MouseEvent, key: string) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
  
    setTooltipPos({
      top: rect.top - 10,
      left: rect.left + rect.width / 2
    });
  
    setActiveTooltip(key);
  };
  
    const attractions: Attraction[] = [
      {
        name: "Ranthambore National Park",
        type: "Wildlife",
        location: "Sawai Madhopur",
        duration: "3-4 Hours",
        rating: 4.5,
        reviews: 11000,
        image: "/images/nationalpark.svg",
        price: 1,
        description:"Ranthambore National Park, located in Rajasthan, is a renowned wildlife destination famous for its large population of Bengal tigers. Established as a game sanctuary in 1955 and declared a national park in 1980, it's situated at the junction of the Aravali and Vindhya hill ranges. The park covers approximately 400 sq km and is a major attraction for wildlife safaris, birdwatching, and exploring its historic fort",
         priceDetails: {
          adult: 200,
          child: 100,
          foreigner: 800,
          student: 150
        }
      },
      {
        name: "Hawa Mahal",
        type: "Monument",
        location: "Jaipur City Center",
        duration: "2-3 Hours",
        rating: 4.9,
        reviews: 15000,
        image: "/images/hawamahal.svg",
        price: 2,
        description:"The Hawa Mahal, or Palace of Winds, is a five-story pink sandstone building in Jaipur, India, famous for its unique honeycomb-like facade of 953 windows, called jharokhas. Built in 1799 by Maharaja Sawai Pratap Singh, the structure was designed to allow royal women to observe street festivities and daily life unseen. The intricate latticework and numerous windows are a feat of both aesthetic design and clever engineering, creating excellent ventilation",
        priceDetails: {
          adult: 200,
          child: 100,
          foreigner: 800,
          student: 150
        }
      },
      {
        name: "Government Central Museum",
        type: "Museum",
        location: "Ajmer",
        duration: "2 Hours",
        rating: 4.6,
        reviews: 8000,
        image: "/images/muesuem.svg",
        price: 3,
        description:"Government Central Museum Ajmer",
        priceDetails: {
          adult: 200,
          child: 100,
          foreigner: 800,
          student: 150
        }
  
      },
      {
        name: "Amber Fort",
        type: "Monument",
        location: "Jaipur",
        duration: "3-4 Hours",
        rating: 4.7,
        reviews: 12000,
        image: "/images/hawamahal.svg",
        price: 2,
        description:"Amer Fort is a magnificent palace complex located in Jaipur, India, known for its blend of indigenous and Mughal architectural styles, constructed from red sandstone and white marble. Situated on a hilltop, this UNESCO World Heritage site features elaborate palaces, ramparts, courtyards, and the famous Sheesh Mahal (mirror palace). ",
        priceDetails: {
          adult: 200,
          child: 100,
          foreigner: 800,
          student: 150
        }
      },
      {
        name: "City Palace",
        type: "Palace",
        location: "Jaipur",
        duration: "2-3 Hours",
        rating: 4.8,
        reviews: 10000,
        image: "/images/muesuem.svg",
        price: 4,
        description:"The City Palace in Jaipur is a sprawling complex built by Maharaja Sawai Jai Singh II that showcases a blend of Mughal and Rajput architecture. It houses the City Palace Museum and remains the residence of the royal family, featuring multiple courtyards, gardens, and several buildings, including the official residence of the Maharaja, Chandra Mahal. ",
        priceDetails: {
          adult: 200,
          child: 100,
          foreigner: 800,
          student: 150
        }
      },
    ];
  
  
      const openInMaps = (place: string) => {
      const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place)}`;
      window.open(url, "_blank");
      };
  


    return (
        <section className="py-10 sm:py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Explore Rajasthan
          </h3>
          <p className="text-sm sm:text-base text-black mb-12">
Discover specialized collections of wildlife reserves, historic monuments, and cultural museums          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Wildlife", icon: "🦁" },
              { name: "Monuments", icon: "🏛️" },
              { name: "Museums", icon: "🎨" },
              { name: "Other Sites", icon: "🏞️" },
            ].map((category, idx) => (
              <button
                key={idx}
                className="bg-white border-2 border-border rounded-xl p-4 text-center hover:border-accent hover:bg-red-50 transition"
              >
                <div className="text-4xl mb-2">{category.icon}</div>
                <p className="font-semibold text-primary">{category.name}</p>
              </button>
            ))}
          </div>

          <div className="flex gap-6 overflow-x-auto pb-4 pt-6 scrollbar-hide">
          {attractions.map((attraction, idx) => (
            <div
              key={idx}
              className="min-w-[280px] bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 flex-shrink-0"
            >
              {/* Image Container with Badges */}
              <div className="relative h-56 overflow-hidden bg-gray-200">
                <img
                  src={attraction.image}
                  alt={attraction.name}
                  className="w-full h-full object-cover hover:scale-105 transition duration-300"
                />

                {/* Type Badge - Top Left */}
                <div className="absolute top-2 left-4 bg-green-600 text-white px-2 py-1 rounded-full text-[10px] font-medium">
                  {attraction.type.toUpperCase()}
                </div>

                {/* Rating Badge - Top Right */}
                <div className="absolute top-2 right-4 bg-white text-primary px-2 py-1 rounded-full flex items-center gap-2 shadow-lg">
                  {/* <span className="font-semibold text-[12px]">{attraction.rating}</span> */}
                  <Ticket size={14} className="text-primary" />
                  <span className="text-[12px] text-primary font-semibold">
                    ({(attraction.reviews / 1000).toFixed(0)}K)
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                {/* Title , Info , Google map*/}
                <div className="flex items-start justify-between mb-4 relative">

                {/* Title */}
                <h4 className="text-lg font-bold text-primary line-clamp-2 pr-2">
                  {attraction.name}
                </h4>

              {/* Icons Right */}
              <div className="flex items-center gap-3 flex-shrink-0">

                {/* INFO ICON */}
                <div className="relative">
            <button
              className="p-1 hover:bg-gray-100 rounded-full"
              onMouseEnter={(e) => showTooltip(e, `${idx}-info`)}
              onMouseLeave={() => setActiveTooltip(null)}
              // onClick={(e) => {
              //   if (activeTooltip === idx) setActiveTooltip(null);
              //   else showTooltip(e, idx);
              // }}
            >
              <Info size={18} className="text-primary" />
            </button>

            {activeTooltip === `${idx}-info` && (
              <div
                className="
                  fixed z-50
                  p-3 max-w-xs bg-black text-white text-sm border border-gray-700 
                  rounded-lg shadow-lg animate-fade-in
                  whitespace-normal break-words
                "
                style={{
                  top: tooltipPos.top,
                  left: tooltipPos.left,
                  transform: "translate(-50%, -100%)"
                }}
              >
                {attraction.description}
              </div>
            )}

            </div>


          {/* GOOGLE MAP ICON */}
          <button
            className="p-1 hover:bg-gray-100 rounded-full"
            onClick={() => openInMaps(attraction.name)}
          >
            <MapPin size={18} className="text-primary" />
          </button>

           {/* BOOK NOW ICON */}
          <button
            className="p-1 hover:bg-green-100 rounded-full"
            onClick={() => alert(`Booking soon available for ${attraction.name}!`)}
          >
            <Ticket size={18} className="text-primary" />
          </button>

        </div>
      </div>



                {/* Location, Duration, Price */}
                <div className="flex items-center justify-between text-sm text-muted-foreground mt-3">

                  {/* Location */}
                  <div className="flex items-center gap-1 min-w-0">
                    <MapPin size={16} className="text-primary shrink-0" />
                    <span className="font-medium truncate">{attraction.location}</span>
                  </div>

                  {/* Separator */}
                  <span className="text-gray-300 mx-2">•</span>

                  {/* Duration */}
                  <div className="flex items-center gap-1 min-w-0">
                    <Clock size={16} className="text-primary shrink-0" />
                    <span className="font-medium truncate">{attraction.duration}</span>
                  </div>

                  {/* Separator */}
                  <span className="text-gray-300 mx-2">•</span>

                  {/* Price */}
                  <div className="relative">
                  <div
                    className="flex items-center gap-1 cursor-pointer"
                    onMouseEnter={(e) => showTooltip(e, `${idx}-price`)}
                    onMouseLeave={() => setActiveTooltip(null)}
                    // onClick={(e) => {
                    //   if (activeTooltip === `${idx}-price`) setActiveTooltip(null)
                    //   else showTooltip(e, `${idx}-price`)
                    // }}
                  >
                    <RupeeRating value={attraction.price} />
                  </div>

                  {/* PRICE TOOLTIP */}
                  {activeTooltip === `${idx}-price` && (
                    <div
                      className="
                        fixed z-50
                        p-3 bg-black text-white text-sm border border-gray-700 
                        rounded-lg shadow-lg max-w-xs whitespace-normal break-words
                      "
                      style={{
                        top: tooltipPos.top,
                        left: tooltipPos.left,
                        transform: "translate(-50%, -100%)"
                      }}
                    >
                      <div className="space-y-1">
                        {attraction.priceDetails?.adult && (
                          <p>Adult: ₹{attraction.priceDetails.adult}</p>
                        )}
                        {attraction.priceDetails?.child && (
                          <p>Child: ₹{attraction.priceDetails.child}</p>
                        )}
                        {attraction.priceDetails?.foreigner && (
                          <p>Foreigner: ₹{attraction.priceDetails.foreigner}</p>
                        )}
                        {attraction.priceDetails?.student && (
                          <p>Student: ₹{attraction.priceDetails.student}</p>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                </div>



              </div>
            </div>
          ))}
        </div>
        </div>
      </section>
    );
}
