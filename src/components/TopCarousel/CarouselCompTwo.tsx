"use client";
import React, { useEffect, useState } from "react";
import { hand ,bgBlack} from "@/assets";
import { IoLogoAndroid } from "react-icons/io";
import { FaApple } from "react-icons/fa";
import { motion } from "framer-motion";
import { EffectBlockBottomToTop, EffectBlockTopToBottom } from "./EffectBlock";

const CarouselCompTwo = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${bgBlack.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
      }}
      className="relative bg-black text-white py-14 md:pb-24 flex items-center justify-stretch min-h-[10rem] md:mt-0 mt-10 md:min-h-[50rem]"
    >
      {/* Left Text Section */}
      <div className="w-full md:w-[45vw]  md:pl-16 lg:pl-24 xl:pl-32 flex flex-col space-y-2 md:space-y-6 pr-8">
        <motion.h2
          className={`md:text-xl text-xs md:mb-2 mb-0 transition-colors duration-500 font-sans font-thin ${
            isVisible ? "text-white" : "text-black"
          }`}
          initial={{ opacity: 0, x: -120 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          CROSS-PLATFORM, SECURE & FLEXIBLE
        </motion.h2>

        <motion.h1
          className={`text-xl md:text-5xl lg:text-6xl font-bold md:mb-4 transition-colors duration-500 ${
            isVisible ? "text-white" : "text-black"
          }`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
        <EffectBlockBottomToTop>

          <span className="whitespace-nowrap">
            One App for all your <br />
          </span>
        </EffectBlockBottomToTop>
        <EffectBlockTopToBottom bgColor="bg-white">

          <span className="text-customYellow whitespace-nowrap">
            Crypto Trading
          </span>
        </EffectBlockTopToBottom>
        </motion.h1>

        <motion.p
          className={`md:text-lg text-[7px] mb-6 font-thin font-sans transition-colors duration-500 ${
            isVisible ? "text-white" : "text-black"
          }`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Get the <span className="font-bold">BEST APP</span> with in-built
          Wallet. Create Crypto <br /> Currency{" "}
          <span className="font-bold">Landing Website</span> with the best
          theme.
        </motion.p>

        <div className="flex space-x-4 translate-y-6">
          <motion.button
            className="bg-customYellow h-fit py-1 px-2 hover:bg-white text-[6px] md:text-sm hover:text-black whitespace-nowrap flex items-center font-bold md:gap-4 text-white md:px-6 md:py-3 "
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            DOWNLOAD APP <IoLogoAndroid />
          </motion.button>

          <motion.button
            className="border-2 border-white text-white hover:bg-white hover:text-black flex items-center text-[6px] md:text-sm gap-2 md:gap-4 font-bold md:px-6 md:py-3 "
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            DOWNLOAD APP <FaApple />
          </motion.button>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="relative  min-w-[70vw] h-full flex justify-end">
        <motion.div
          className="absolute -bottom-16"
          initial={{ y: 600, x: -80, opacity: 0 }}
          animate={{ y: 352, x: -80, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <img
            src={hand.src}
            alt="Crypto App Interface"
            className="md:h-[90vh] lg:h-[40vh]  xl:h-[70vh] 2xl:h-[30vh] h-[100vh] md:ml-0 ml-10 w-auto object-contain"
            // className=" md:ml-0 ml-10 min-h-[10rem] w-auto object-contain"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default CarouselCompTwo;  
