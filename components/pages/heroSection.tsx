"use client";

import { Search } from "lucide-react";
import SearchBar from "../widgets/SearchBar";
import ExploreButton from "../widgets/ExploreButton";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-[700px] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/heroFrame.svg')" }}
    >
      {/* Center Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
        <div className="w-full max-w-2xl">
          <SearchBar
            placeholder="Search for destinations or experiences"
            onSearch={(query) => console.log("Search:", query)}
            onVoiceSearch={() => console.log("Voice search activated")}
            onFilter={() => console.log("Filter clicked")}
          />
        </div>
      </div>

      {/* Explore Button at Bottom */}
      <div className="absolute bottom-10 w-full flex justify-center px-4">
  <div className="relative flex justify-center items-center">
    
    {/* Shadow Image Behind Button */}
    <img
      src="/images/shadow.svg"
      alt="button-shadow"
      className="absolute w-[320px] h-auto -z-10 opacity-100"
    />

    {/* The Button */}
    <ExploreButton
      text="Explore Destinations"
      onClick={() => console.log("Clicked")}
      showIcon={true}
      variant="primary"
      size="md"
      className="relative z-20"
    />
  </div>
</div>

    </section>
  );
}
