'use client';

import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header(){

      const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    
      return (
          <header className="sticky top-0 z-50 bg-white/50 backdrop-blur-lg shadow">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img
      src="/images/GvmtObms.png"
      alt="Government Tourism Logo"
      className="w-70 h-auto object-contain"
    /> 
            </div>

            <button
              className="sm:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <nav className="hidden sm:flex items-center gap-8">
              <a href="#" className="hover:opacity-80 transition text-primary font-bold">
                Explore
              </a>
              <a href="#" className="hover:opacity-80 transition text-primary font-bold">
                Packages
              </a>
              <a href="#" className="hover:opacity-80 transition text-primary font-bold">
                Wildlife
              </a>
              <a href="#" className="hover:opacity-80 transition text-primary font-bold">
                Monuments
              </a>
              <a href="#" className="hover:opacity-80 transition text-primary font-bold">
                About
              </a>
              <a href="#" className="hover:opacity-80 transition text-primary font-bold">
                Contact Us
              </a>
            </nav>

             <img
                    src="/images/searchIcon.png"
                    alt="Search"
                    className="w-5 h-5 object-contain"
                    /> 

            <button className="hidden sm:block bg-accent text-white px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition bg-primary">
              Login/Register
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <nav className="mt-4 flex flex-col gap-4 sm:hidden">
              <a href="#" className="hover:opacity-80 transition">
                Explore
              </a>
              <a href="#" className="hover:opacity-80 transition">
                Packages
              </a>
              <a href="#" className="hover:opacity-80 transition">
                Hotels
              </a>
              <a href="#" className="hover:opacity-80 transition">
                About
              </a>
              <a href="#" className="hover:opacity-80 transition">
                Contact Us
              </a>
              <button className="bg-accent text-primary px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition">
                Plan Trip
              </button>
            </nav>
          )}
        </div>
      </header>
      );
  
}
