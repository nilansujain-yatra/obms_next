'use client';

import { Clock, Info, MapPin, Star, Ticket, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import RupeeRating from "../widgets/RuppeRating";
import InfoDialog from "../widgets/InfoDialog";

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
   priceDetails?:string
}

export default function ExploreRajasthan(){

    const [activeTooltip, setActiveTooltip] = useState<string | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ top: 0, left: 0 });
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogData, setDialogData] = useState({ title: "", description: "" });
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

function openDialog(data) {
  setDialogData(data);
  setDialogOpen(true);
}


  const showTooltip = (e: React.MouseEvent, key: string) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();

    setTooltipPos({
      top: rect.top - 10,
      left: rect.left + rect.width / 2
    });

    setActiveTooltip(key);
  };

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320;
      const newScrollLeft = direction === 'left'
        ? scrollContainerRef.current.scrollLeft - scrollAmount
        : scrollContainerRef.current.scrollLeft + scrollAmount;

      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });

      setTimeout(checkScroll, 300);
    }
  };

  useEffect(() => {
    setTimeout(checkScroll, 100);
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);
  
   const attractions: Attraction[] = [
    {
      name: "Ranthambore National Park",
      type: "Wildlife",
      location: "Sawai Madhopur",
      duration: "3-4 Hours",
      rating: 4.5,
      reviews: 11000,
      image: "/images/nationalpark.png",
      price: 1,
      description:"Ranthambore National Park, located in Rajasthan, is a renowned wildlife destination famous for its large population of Bengal tigers. Established as a game sanctuary in 1955 and declared a national park in 1980, it's situated at the junction of the Aravali and Vindhya hill ranges. The park covers approximately 400 sq km and is a major attraction for wildlife safaris, birdwatching, and exploring its historic fort",
       priceDetails:"Adult : 200 \n Child: 100 \n Foreigner: 900 \n Student: 150",
      url: "http://10.70.235.180:30201/place-details/Rathambore-Tiger-Reserve"
    },
    {
      name: "Hawa Mahal",
      type: "Monument",
      location: "Jaipur City Center",
      duration: "2-3 Hours",
      rating: 4.9,
      reviews: 15000,
      image: "/images/hawamahal.png",
      price: 2,
      description:"The Hawa Mahal, or Palace of Winds, is a five-story pink sandstone building in Jaipur, India, famous for its unique honeycomb-like facade of 953 windows, called jharokhas. Built in 1799 by Maharaja Sawai Pratap Singh, the structure was designed to allow royal women to observe street festivities and daily life unseen. The intricate latticework and numerous windows are a feat of both aesthetic design and clever engineering, creating excellent ventilation",
            priceDetails:"Adult : 200 \n Child: 100 \n Foreigner: 900 \n Student: 150",
      url: "http://10.70.235.180:30201/place-details/Hawa-mahal"

    },
    {
      name: "Government Central Museum",
      type: "Museum",
      location: "Ajmer",
      duration: "2 Hours",
      rating: 4.6,
      reviews: 8000,
      image: "/images/muesuem.png",
      price: 3,
      description:"Government Central Museum Ajmer",
             priceDetails:"Adult : 200 \n Child: 100 \n Foreigner: 900 \n Student: 150",
      url: "http://10.70.235.180:30201/place-details/Government-Central-Museum-Albert-Hall-Jaipur"


    },
    {
      name: "Amber Fort",
      type: "Monument",
      location: "Jaipur",
      duration: "3-4 Hours",
      rating: 4.7,
      reviews: 12000,
      image: "/images/hawamahal.png",
      price: 2,
      description:"Amer Fort is a magnificent palace complex located in Jaipur, India, known for its blend of indigenous and Mughal architectural styles, constructed from red sandstone and white marble. Situated on a hilltop, this UNESCO World Heritage site features elaborate palaces, ramparts, courtyards, and the famous Sheesh Mahal (mirror palace). ",
             priceDetails:"Adult : 200 \n Child: 100 \n Foreigner: 900 \n Student: 150",
      url: "http://10.70.235.180:30201/place-details/Amber-Fort"

    },
    {
      name: "City Palace",
      type: "Palace",
      location: "Jaipur",
      duration: "2-3 Hours",
      rating: 4.8,
      reviews: 10000,
      image: "/images/muesuem.png",
      price: 4,
      description:"The City Palace in Jaipur is a sprawling complex built by Maharaja Sawai Jai Singh II that showcases a blend of Mughal and Rajput architecture. It houses the City Palace Museum and remains the residence of the royal family, featuring multiple courtyards, gardens, and several buildings, including the official residence of the Maharaja, Chandra Mahal. ",
             priceDetails:"Adult : 200 \n Child: 100 \n Foreigner: 900 \n Student: 150",
      url: "http://10.70.235.180:30201/place-details/Government-Central-Museum-Albert-Hall-Jaipur"

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

          <div className="relative flex items-center group">
            {/* Left Arrow */}
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full transition-all ${
                canScrollLeft
                  ? 'bg-primary text-white hover:bg-primary/90 cursor-pointer'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
              aria-label="Scroll attractions left"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Scrollable Container */}
            <div
              ref={scrollContainerRef}
              onScroll={checkScroll}
              className="flex gap-6 overflow-x-auto pb-4 pt-6 scrollbar-hide flex-1 px-12"
            >
          {attractions.map((attraction, idx) => (
                      <div
                        key={idx}
                        className="min-w-[280px] bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 flex-shrink-0"
                      >
                        {/* Image Container with Badges */}
                        <div className="relative h-56 overflow-hidden bg-gray-200 group/image">
                          <img
                            src={attraction.image}
                            alt={attraction.name}
                            className="w-full h-full object-cover group-hover/image:scale-105 transition duration-300"
                          />

                          {/* Hover Overlay */}
                          <div className="absolute inset-0 bg-black/70 opacity-0 group-hover/image:opacity-100 transition duration-300 flex items-center justify-center cursor-pointer"
                            onClick={() => window.open(attraction.url, '_blank')}
                          >
                            <span className="text-white text-lg font-semibold">View Details</span>
                          </div>

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
              onClick={() =>
                openDialog({
                  title: attraction.name,
                  description: attraction.description
                })
              }
            >
              <Info size={18} className="text-primary" />
            </button>
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
          
                            <InfoDialog
                        open={dialogOpen}
                        onClose={() => setDialogOpen(false)}
                        title={dialogData.title}
                        description={dialogData.description}
                      />
          
          
          
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
                             <button
              className="p-1 hover:bg-gray-100 rounded-full"
              onClick={() =>
                openDialog({
                  title: attraction.name,
                  description: attraction.priceDetails
                })
              }
            >
                              <RupeeRating value={attraction.price} />
            </button>
                            
          
                          </div>
          
          
          
                        </div>
                      </div>
                    ))}
            </div>

            {/* Right Arrow */}
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full transition-all ${
                canScrollRight
                  ? 'bg-primary text-white hover:bg-primary/90 cursor-pointer'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
              aria-label="Scroll attractions right"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </section>
    );
}
