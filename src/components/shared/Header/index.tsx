'use client';
import React, { useState } from "react";
import { logo } from "@/assets/sharedSection";
import Link from "next/link";
import { useSlideContext } from "@/components/context/SlideContext";

const Navbar: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
const { currentIndex } = useSlideContext();
 
  return (
    <div className={`${currentIndex===0?"bg-customGray":"bg-black"} border-b-[1px] border-gray-700`}>
      <nav className="w-[80%] mx-auto flex justify-between items-center h-[71px]">
        {/* Logo Section */}
        <div className="text-xl font-bold h-auto w-[200px]">
          <Link href="/">
            <img src={logo.src} alt="logo" />
          </Link>
        </div>

        <div className="hidden md:flex space-x-11 text-[16px] font-light">
          {[
            { name: "Home", href: "#home" },
            { name: "Features", href: "#feature" },
            { name: "Blog", href: "#bitcoinNews" },
            { name: "Faq", href: "#downloads" },
            { name: "Gallery", href: "#ssCarousel" },
            { name: "Pricing", href: "#price" },
            { name: "Mail us", href: "#contactForm" },
            { name: "Widgets", href: "#networkInfo" },
          ].map((item, i) => (
            <a
              key={item.name}
              href={item.href}
              className="relative group"
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="h-[28px] flex items-center overflow-hidden relative">
                {/* Hidden title that translates upwards */}
                <span
                  className={`absolute left-0 transition-transform duration-300 transform  text-crypOrange ${
                    hoveredIndex === i ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
                  }`}
                >
                  {item.name}
                </span>

                {/* Visible title that appears below */}
                <span
                  className={`block transition-transform duration-300 transform ${i===0 ?"text-crypOrange":"text-white"} ${
                    hoveredIndex === i ? "-translate-y-7" : ""
                  }`}
                >
                  {item.name}
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden">
          <button className="text-white focus:outline-none">
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
