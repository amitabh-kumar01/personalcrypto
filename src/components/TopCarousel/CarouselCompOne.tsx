"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { verticalScreen, horizontalScreen } from "@/assets"
import { CarouselData } from "../constants"
import ScatteredCrypto from "./ScatteredCrypto"
import { EffectBlock } from "./EffectBlock"

export default function CarouselCompOne() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    handleResize(); 
    window.addEventListener("resize", handleResize); 
    return () => window.removeEventListener("resize", handleResize); 
  }, []);
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768); 
  };
  return (
    <div className="bg-customGray min-h-[10rem] md:mt-0 mt-10 md:min-h-[50rem] text-white p-0 sm:p-8 flex justify-between items-center">
      <div className="flex flex-col md:flex-row w-full md:w-[90%] mt-[5rem] lg:w-[80%] mx-auto">
        {/* Left section with text */}
        <div className="w-full md:w-1/2 md:-mt-20 mb-8 md:mb-0">
          <motion.h2
            className="text-yellow-500 w-fit text-xs sm:text-sm md:text-xl lg:text-2xl md:mb-2 font-opensans"
            initial={{ opacity: 1, x: 0, backgroundColor: "#ffffff" }}
            animate={{ opacity: 1, x: 0, backgroundColor: "#00000000" }}
            transition={{ duration: 1 }}
          >
            <EffectBlock bgColor="bg-white">
              App with Awesome Features
            </EffectBlock>
          </motion.h2>
          <motion.h1 className="text-lg md:text-3xl lg:text-5xl font-bold md:mb-4 mb-0 w-fit">
            <EffectBlock bgColor="bg-customYellow" delay={0.5}>
              CryptoCurrency App
            </EffectBlock>
          </motion.h1>

          <div className="flex gap-2 sm:gap-4 md:gap-6 lg:gap-8 md:mb-4 mb-2 sm:mb-6 mt-2 md:mt-6 sm:mt-10">
            {CarouselData.map((crypto, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <img
                  src={crypto.image.src}
                  alt=""
                  className="w-6 sm:w-8 md:w-10 lg:w-auto"
                />
              </motion.div>
            ))}
          </div>

          <motion.p
            className="md:mb-4 mb-2 sm:mb-6 font-sans font-thin text-[6px] sm:text-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Get to know the live rates of all the{" "}
            <strong className="font-bold">crypto currency</strong> without any{" "}
            <br /> delay. Pay with crypto currency in more than{" "}
            <strong className="font-bold">20000 stores</strong>.
          </motion.p>

          <div className="space-x-2 sm:space-x-4">
            <motion.button
              className="bg-customYellow text-white font-bold px-4 sm:px-6 md:px-8 py-1 sm:py-3 text-[6px] sm:text-sm hover:bg-white hover:text-black"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              GET STARTED
            </motion.button>

            <motion.button
              className="border-2 border-white py-1 sm:py-3 px-4 sm:px-6 md:px-8 hover:bg-white hover:text-black font-bold text-[6px] sm:text-sm"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.8 }}
            >
              HOW IT WORKS
            </motion.button>
          </div>
        </div>
        {/* Right Section  */}
        <div className="relative h-0 md:h-auto   w-full md:w-1/2 mt-0 md:mt-20 ">
          {/* <motion.div
            initial={{ x: -100, opacity: 1 }}
            animate={{ x: -100, y: -359, opacity: 1 }}
            className="z-40 min-h-[180vh] absolute bg-transparent left-10 top-1/2 -translate-y-1/2 min-w-[50vw]"
          >
            <ScatteredCrypto />
          </motion.div> */}
          <motion.div
            initial={{ y: isMobile ? 150 : 0,x:isMobile ? -10 : -100, opacity: 0 }}
            animate={{y: isMobile ? -150 : 0 ,x: isMobile? 185 : -50, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="relative w-full"
          >
            <img
              src={horizontalScreen.src}
              alt="Horizontal Screen"
              className="md:w-full w-[55%] md:min-w-[48vw]"
            />
          </motion.div>
          <motion.div
            initial={{x: isMobile ? 0 : 0, y: isMobile ? -500 : -700, opacity: 0 }} // Mobile vs desktop
            animate={{ x: isMobile ? 85 : 0,y: isMobile ? -340 : -380, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.3 }}
            className="absolute md:top-1/2  right-0 transform md:-translate-y-1/2 w-1/2 md:w-auto"
          >
            <img
              src={verticalScreen.src}
              alt="Vertical Screen"
              className="md:w-full w-[55%]"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
