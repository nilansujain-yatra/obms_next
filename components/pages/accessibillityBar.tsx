"use client";

import { useState } from "react";
import { ChevronDown, Moon, Sun } from "lucide-react";

export default function AccessibilityBar() {
  const [fontSize, setFontSize] = useState(100);
  const [highContrast, setHighContrast] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  const handleIncreaseFontSize = () => {
    setFontSize((prev) => Math.min(prev + 20, 150));
    document.documentElement.style.fontSize = `${fontSize + 20}px`;
  };

  const handleDecreaseFontSize = () => {
    setFontSize((prev) => Math.max(prev - 20, 80));
    document.documentElement.style.fontSize = `${fontSize - 20}px`;
  };

  const handleToggleContrast = () => {
    setHighContrast(!highContrast);
    if (!highContrast) {
      document.documentElement.classList.add("high-contrast");
    } else {
      document.documentElement.classList.remove("high-contrast");
    }
  };

  return (
    <div style={{backgroundColor:'bg-primary'}} className="bg-primary text-white py-2 px-4 text-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
 <img
      src="/images/GovermentOfIndia.png"
      alt="Government of India"
      className="w-40 h-auto object-contain"
    />     
         {/* <span className="text-xs font-semibold">🇮🇳 Government of India</span> */}
        </div>

        <a
          href="#main-content"
          className="text-xs hover:underline focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary rounded px-2 py-1"
        >
          Skip to Main Content
        </a>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 border-r border-white/30 pr-3">
            <button
            //   onClick={handleDecreaseFontSize}
              aria-label="Decrease text size"
              className="text-xs hover:opacity-80 transition focus:outline-none focus:ring-2 focus:ring-accent rounded px-1 py-1"
            >
              <span className="text-xs">A</span>
              <span className="text-xs">−</span>
            </button>
            <span className="text-xs">{fontSize}%</span>
            <button
            //   onClick={handleIncreaseFontSize}
              aria-label="Increase text size"
              className="text-xs hover:opacity-80 transition focus:outline-none focus:ring-2 focus:ring-accent rounded px-1 py-1"
            >
              <span className="text-xs">A</span>
              <span className="text-xs">+</span>
            </button>
          </div>

          <button
            onClick={handleToggleContrast}
            aria-label={highContrast ? "Disable high contrast" : "Enable high contrast"}
            className="text-xs hover:opacity-80 transition focus:outline-none focus:ring-2 focus:ring-accent rounded p-1"
          >
            {highContrast ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          <div className="relative">
            <button
              onClick={() => setMoreOpen(!moreOpen)}
              aria-label="More accessibility options"
              className="text-xs hover:opacity-80 transition focus:outline-none focus:ring-2 focus:ring-accent rounded px-2 py-1 flex items-center gap-1"
            >
              More
              <ChevronDown size={14} />
            </button>

            {moreOpen && (
              <div className="absolute right-0 mt-2 bg-white text-primary rounded shadow-lg py-2 z-50 min-w-48">
                <button className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-sm">
                  Text to Speech
                </button>
                <button className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-sm">
                  Reading Guide
                </button>
                <button className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-sm">
                  Font Preferences
                </button>
                <button className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-sm">
                  Reset to Default
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
