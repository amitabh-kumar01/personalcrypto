"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { l1, l2, l3, l4, l5, l6, l7, l8 } from "@/assets";
import { positions } from "../constants";

const images = [l1, l2, l3, l4, l5, l6, l7, l8];

const ScatteredCrypto = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      setMousePosition({
        x: (e.clientX - centerX) / rect.width,
        y: (e.clientY - centerY) / rect.height,
      });
    };

    container.addEventListener("mousemove", handleMouseMove);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-[54vw] min-h-[80vh]">
      {images.map((img, index) => (
        <motion.img
          key={index}
          src={img.src}
          alt={`Crypto ${index + 1}`}
          className="absolute"
          style={{
            top: positions[index].top,
            left: positions[index].left,
            width: positions[index].width,
            transform: `rotate(${positions[index].rotation})`,
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: 1,
            opacity: 1,
            x: mousePosition.x * 80,
            y: mousePosition.y * 80,
          }}
          transition={{
            duration: 0.5,
            delay: index * 0.1,
            x: { type: "spring", stiffness: 50 },
            y: { type: "spring", stiffness: 50 },
          }}
          whileHover={{
            scale: 1.2,
            rotate: 10,
            y: [0, -5, 0],
          }}
        />
      ))}
    </div>
  );
};

export default ScatteredCrypto;
