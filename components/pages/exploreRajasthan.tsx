'use client';

import { Clock, Info, MapPin, Star, Ticket, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
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
  url: string;
  price?: number;
  description?:string;
   priceDetails?:string
}

export default function ExploreRajasthan(){

    const [activeTooltip, setActiveTooltip] = useState<string | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ top: 0, left: 0 });
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogData, setDialogData] = useState({ title: "", description: "" });
  const [activeTab, setActiveTab] = useState("wildlife");
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const scrollContainerRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const [scrollStates, setScrollStates] = useState<{ [key: string]: { canScrollLeft: boolean; canScrollRight: boolean } }>({
    wildlife: { canScrollLeft: false, canScrollRight: true },
    monuments: { canScrollLeft: false, canScrollRight: true },
    museums: { canScrollLeft: false, canScrollRight: true }
  });

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

  const checkScroll = (tab: string) => {
    const container = scrollContainerRefs.current[tab];
    if (container) {
      const { scrollLeft, scrollWidth, clientWidth } = container;
      setScrollStates(prev => ({
        ...prev,
        [tab]: {
          canScrollLeft: scrollLeft > 0,
          canScrollRight: scrollLeft < scrollWidth - clientWidth - 10
        }
      }));
    }
  };

  const scroll = (tab: string, direction: 'left' | 'right') => {
    const container = scrollContainerRefs.current[tab];
    if (container) {
      const scrollAmount = 320;
      const newScrollLeft = direction === 'left'
        ? container.scrollLeft - scrollAmount
        : container.scrollLeft + scrollAmount;

      container.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });

      setTimeout(() => checkScroll(tab), 300);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      checkScroll('wildlife');
      checkScroll('monuments');
      checkScroll('museums');
    }, 100);

    const handleResize = () => {
      checkScroll('wildlife');
      checkScroll('monuments');
      checkScroll('museums');
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
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
      name: "Keoladeo National Park",
      type: "Wildlife",
      location: "Bharatpur",
      duration: "3-4 Hours",
      rating: 4.4,
      reviews: 9500,
      image: "/images/nationalpark.png",
      price: 1,
      description:"Keoladeo National Park, also known as Keoladeo Ghana National Park, is a major birdwatching destination in Bharatpur, Rajasthan. This UNESCO World Heritage Site is home to over 370 bird species and serves as an important wintering ground for migratory birds from Central Asia.",
       priceDetails:"Adult : 200 \n Child: 100 \n Foreigner: 900 \n Student: 150",
      url: "http://10.70.235.180:30201/place-details/Keoladeo-National-Park"
    },
    {
      name: "Desert National Park",
      type: "Wildlife",
      location: "Jaisalmer",
      duration: "4-5 Hours",
      rating: 4.3,
      reviews: 7800,
      image: "/images/nationalpark.png",
      price: 1,
      description:"Desert National Park is a vast expanse of desert landscape in Jaisalmer, home to various wildlife species including blackbucks, Indian wolves, and many bird species.",
       priceDetails:"Adult : 200 \n Child: 100 \n Foreigner: 900 \n Student: 150",
      url: "http://10.70.235.180:30201/place-details/Desert-National-Park"
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
      name: "Mehrangarh Fort",
      type: "Monument",
      location: "Jodhpur",
      duration: "3-4 Hours",
      rating: 4.8,
      reviews: 13000,
      image: "/images/hawamahal.png",
      price: 2,
      description:"Mehrangarh Fort is a colossal fort standing 125 meters above the city of Jodhpur. Built in 1459, it is one of the largest forts in India and features intricate latticed screens, apartments with filigree windows, and panoramic city views.",
             priceDetails:"Adult : 200 \n Child: 100 \n Foreigner: 900 \n Student: 150",
      url: "http://10.70.235.180:30201/place-details/Mehrangarh-Fort"
    },
    {
      name: "Chittorgarh Fort",
      type: "Monument",
      location: "Chittorgarh",
      duration: "4-5 Hours",
      rating: 4.6,
      reviews: 10500,
      image: "/images/hawamahal.png",
      price: 2,
      description:"Chittorgarh Fort is a vast fortified complex representing Rajput bravery and pride. Built in the 8th century, it has witnessed many historic events and contains temples, palaces, and towers showcasing Rajasthani architecture.",
             priceDetails:"Adult : 200 \n Child: 100 \n Foreigner: 900 \n Student: 150",
      url: "http://10.70.235.180:30201/place-details/Chittorgarh-Fort"
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
      description:"Government Central Museum Ajmer houses a collection of sculptures, manuscripts, and artifacts reflecting the rich cultural heritage of Rajasthan.",
             priceDetails:"Adult : 200 \n Child: 100 \n Foreigner: 900 \n Student: 150",
      url: "http://10.70.235.180:30201/place-details/Government-Central-Museum-Albert-Hall-Jaipur"
    },
    {
      name: "Albert Hall Museum",
      type: "Museum",
      location: "Jaipur",
      duration: "2-3 Hours",
      rating: 4.5,
      reviews: 9200,
      image: "/images/muesuem.png",
      price: 3,
      description:"Albert Hall Museum is the oldest museum in Jaipur, showcasing artifacts from ancient times to the modern era, including sculptures, paintings, and decorative arts.",
             priceDetails:"Adult : 200 \n Child: 100 \n Foreigner: 900 \n Student: 150",
      url: "http://10.70.235.180:30201/place-details/Albert-Hall-Museum"
    },
    {
      name: "City Palace Museum",
      type: "Museum",
      location: "Jaipur",
      duration: "2 Hours",
      rating: 4.7,
      reviews: 11000,
      image: "/images/muesuem.png",
      price: 3,
      description:"City Palace Museum displays royal artifacts, textiles, manuscripts, and historical documents belonging to the royal family of Jaipur.",
             priceDetails:"Adult : 200 \n Child: 100 \n Foreigner: 900 \n Student: 150",
      url: "http://10.70.235.180:30201/place-details/City-Palace-Museum"
    },
    {
      name: "City Palace",
      type: "Monument",
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
    {
      name: "Jaisalmer Fort",
      type: "Other Sites",
      location: "Jaisalmer",
      duration: "3-4 Hours",
      rating: 4.7,
      reviews: 12000,
      image: "/images/hawamahal.png",
      price: 2,
      description:"Jaisalmer Fort is a magnificent fort city made of golden sandstone, featuring intricate architecture and stunning views of the desert landscape.",
             priceDetails:"Adult : 200 \n Child: 100 \n Foreigner: 900 \n Student: 150",
      url: "http://10.70.235.180:30201/place-details/Jaisalmer-Fort"
    },
    {
      name: "Udaipur City Palace",
      type: "Other Sites",
      location: "Udaipur",
      duration: "3-4 Hours",
      rating: 4.8,
      reviews: 14000,
      image: "/images/muesuem.png",
      price: 3,
      description:"Udaipur City Palace is a stunning lakeside palace overlooking Lake Pichola, combining Mughal and Rajasthani architecture with magnificent courtyards and gardens.",
             priceDetails:"Adult : 200 \n Child: 100 \n Foreigner: 900 \n Student: 150",
      url: "http://10.70.235.180:30201/place-details/Udaipur-City-Palace"
    },
    {
      name: "Lake Pichola",
      type: "Other Sites",
      location: "Udaipur",
      duration: "2-3 Hours",
      rating: 4.6,
      reviews: 11500,
      image: "/images/nationalpark.png",
      price: 1,
      description:"Lake Pichola is an artificial lake in Udaipur, surrounded by palaces and gardens, offering scenic boat rides and stunning sunset views.",
             priceDetails:"Adult : 200 \n Child: 100 \n Foreigner: 900 \n Student: 150",
      url: "http://10.70.235.180:30201/place-details/Lake-Pichola"
    },
  ];

  
  
  const categoryTabs = [
    { id: "wildlife", name: "Wildlife" },
    { id: "monuments", name: "Monuments" },
    { id: "museums", name: "Museums" },
  ];

  const getAttractionsByType = (type: string) => {
    const typeMap: { [key: string]: string } = {
      wildlife: "Wildlife",
      monuments: "Monument",
      museums: "Museum",
    };
    return attractions.filter(attr => attr.type === typeMap[type]);
  };

  const renderAttractionCard = (attraction: Attraction, idx: number) => (
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
          onClick={() => window.location.href = attraction.url}
        >
          <span className="text-white text-lg font-semibold">View Details</span>
        </div>

        {/* Type Badge - Top Left */}
        <div className="absolute top-2 left-4 bg-green-600 text-white px-2 py-1 rounded-full text-[10px] font-medium">
          {attraction.type.toUpperCase()}
        </div>

        {/* Rating Badge - Top Right */}
        <div className="absolute top-2 right-4 bg-white text-primary px-2 py-1 rounded-full flex items-center gap-2 shadow-lg">
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
            onClick={() => window.location.href = attraction.url}
          >
            <Info size={18} className="text-primary" />
          </button>
        </div>

        {/* GOOGLE MAP ICON */}
        <button
          className="p-1 hover:bg-gray-100 rounded-full"
          onClick={() => {
            const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(attraction.name)}`;
            window.open(url, "_blank");
          }}
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
);

    return (
        <section className="py-10 sm:py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Explore Rajasthan
          </h3>
          <p className="text-sm sm:text-base text-black mb-8">
            Discover specialized collections of wildlife reserves, historic monuments, and cultural museums
          </p>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="flex gap-6 bg-transparent border-b border-gray-300 h-auto p-0 rounded-none w-fit">
              {categoryTabs.map((tab) => (
                <TabsTrigger
                  key={tab.id}
                  value={tab.id}
                  className="px-0 py-2 rounded-none border-b-2 border-transparent text-sm font-medium text-gray-600 data-[state=active]:border-primary data-[state=active]:text-primary data-[state=active]:bg-transparent hover:text-primary transition"
                >
                  {tab.name}
                </TabsTrigger>
              ))}
              <a
                href="#"
                className="px-0 py-2 text-sm font-medium text-gray-600 hover:text-primary transition flex items-center gap-1"
              >
                View more
                <span className="text-xs">→</span>
              </a>
            </TabsList>

            {categoryTabs.map((tab) => (
              <TabsContent key={tab.id} value={tab.id} className="mt-6">
                <div className="relative flex items-center group">
                  {/* Left Arrow */}
                  <button
                    onClick={() => scroll(tab.id, 'left')}
                    disabled={!scrollStates[tab.id]?.canScrollLeft}
                    className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full transition-all ${
                      scrollStates[tab.id]?.canScrollLeft
                        ? 'bg-primary text-white hover:bg-primary/90 cursor-pointer'
                        : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    }`}
                    aria-label="Scroll attractions left"
                  >
                    <ChevronLeft size={24} />
                  </button>

                  {/* Scrollable Container */}
                  <div
                    ref={(el) => { scrollContainerRefs.current[tab.id] = el; }}
                    onScroll={() => checkScroll(tab.id)}
                    className="flex gap-6 overflow-x-auto pb-4 pt-6 scrollbar-hide flex-1 px-12"
                  >
                    {getAttractionsByType(tab.id).map((attraction, idx) => renderAttractionCard(attraction, idx))}
                  </div>

                  {/* Right Arrow */}
                  <button
                    onClick={() => scroll(tab.id, 'right')}
                    disabled={!scrollStates[tab.id]?.canScrollRight}
                    className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full transition-all ${
                      scrollStates[tab.id]?.canScrollRight
                        ? 'bg-primary text-white hover:bg-primary/90 cursor-pointer'
                        : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    }`}
                    aria-label="Scroll attractions right"
                  >
                    <ChevronRight size={24} />
                  </button>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
    );
}
