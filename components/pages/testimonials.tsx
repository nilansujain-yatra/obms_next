'use client';

import { useEffect, useRef, useState } from "react";

interface Testimonial {
  text: string;
  author: string;
  location: string;
}

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      text: "Rajasthan is a magical place filled with vibrant culture and stunning history. The monuments, forts, and palaces tell stories that transport you back in time.",
      author: "Sarah Johnson",
      location: "15/05/2024",
    },
    {
      text: "Rajasthan, a world-class jewel is part of India's diversity and legacy. The forts and palaces possess a beauty that mesmerizes and captivates every visitor.",
      author: "Michael Chen",
      location: "15/05/2024",
    },
    {
      text: "The desert landscape combined with the royal architecture creates an unforgettable experience. Every corner of Rajasthan holds a new story waiting to be discovered.",
      author: "Emma Williams",
      location: "15/05/2024",
    },
    {
      text: "Rajasthan, a world-class jewel is part of India's diversity and legacy. The forts and palaces possess a beauty that mesmerizes and captivates every visitor.",
      author: "Michael Chen",
      location: "15/05/2024",
    },
    {
      text: "Rajasthan is a magical place filled with vibrant culture and stunning history. The monuments, forts, and palaces tell stories that transport you back in time.",
      author: "Sarah Johnson",
      location: "15/05/2024",
    },
  ];

  return (
    <section
      className="px-4 py-16 sm:py-10 bg-transparent"
      style={{
        backgroundImage: "url('/images/hangout.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <h3 className="text-3xl sm:text-4xl font-bold text-primary mb-2 text-center">
          Hear From Others
        </h3>

        <p className="text-sm sm:text-base text-foreground mb-12 text-center max-w-2xl mx-auto">
          Discover heartfelt testimonials from visitors who have experienced the enchanting heritage of Rajasthan.
        </p>

        {/* Infinite Auto-Scrolling List */}
        <div className="overflow-hidden w-full">
          <div className="flex gap-6 animate-marquee hover:animate-pause">
            {[...testimonials, ...testimonials].map((testimonial, idx) => (
              <div
                key={idx}
                className="
                  bg-white p-6 rounded-xl shadow-md hover:shadow-lg 
                  transition-shadow duration-300 flex flex-col justify-between
                  flex-shrink-0 w-[260px] sm:w-[280px] md:w-[300px] lg:w-[320px]
                "
              >
                <p className="text-muted-foreground mb-4 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-3 mt-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-full flex-shrink-0" />
                  <div className="min-w-0">
                    <p className="font-semibold text-primary truncate">
                      {testimonial.author}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
