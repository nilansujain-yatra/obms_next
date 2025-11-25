'use client';

import { Search, Mic, Filter } from "lucide-react";
import { useState } from "react";

interface SearchBarProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
  onVoiceSearch?: () => void;
  onFilter?: () => void;
}

export default function SearchBar({
  placeholder = "Search for destinations or experiences",
  onSearch,
  onVoiceSearch,
  onFilter,
}: SearchBarProps) {
  const [searchValue, setSearchValue] = useState("");
  const [isListening, setIsListening] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchValue);
    }
  };

  const handleVoiceSearch = () => {
    setIsListening(!isListening);
    if (onVoiceSearch) {
      onVoiceSearch();
    }
  };

  const handleFilter = () => {
    if (onFilter) {
      onFilter();
    }
  };

  return (
    <form
      onSubmit={handleSearch}
      className="w-full max-w-2xl mx-auto"
    >
      <div className="relative flex items-center gap-3 bg-white rounded-full shadow-lg px-5 py-3 border-2 border-transparent hover:border-accent transition-all focus-within:border-accent">
        {/* Search Icon */}
        <Search size={20} className="text-muted-foreground flex-shrink-0" />

        {/* Input */}
        <input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder={placeholder}
          className="flex-1 bg-transparent outline-none text-foreground placeholder-muted-foreground"
          aria-label="Search destinations"
        />

        {/* Filter Button */}
        <button
            type="button"
            onClick={handleFilter}
            aria-label="Filter search results"
            className="p-2 rounded-full hover:bg-gray-100 text-muted-foreground transition-all"
            >
            <img
                src="../../../public/images/ai_icon.png"
                alt="filter"
                className="w-5 h-5 object-contain"
            />
            </button>

        {/* Voice Search Button */}
        <button
          type="button"
          onClick={handleVoiceSearch}
          aria-label="Voice search"
          className={`p-2 rounded-full transition-all ${
            isListening
              ? "bg-accent text-primary"
              : "hover:bg-gray-100 text-muted-foreground"
          }`}
        >
          <Mic size={20} />
        </button>

       
      </div>
    </form>
  );
}
