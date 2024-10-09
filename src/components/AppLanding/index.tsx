import Image from "next/image";
import { Applanding, appleStore, googlePlayStore } from "@/assets";

export const AppLanding = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between bg-white py-8 px-4 lg:px-28 max-w-7xl mx-auto">
      {/* Left Section with App Image */}
      <div className="lg:w-1/2 mb-8 lg:mb-0">
        <Image
          src={Applanding}
          alt="Bitcoin Wallet App Interface"
          width={450}
          height={450}
          className="object-contain"
        />
      </div>

      {/* Right Section with Text and Download Buttons */}
      <div className="lg:w-1/2 max-w-lg leading-8">
        <h1 className="text-4xl lg:text-4xl  mb-4 font-ubuntu">
          <span>App For Bitcoin With</span>
          <span className="block text-customYellow font-ubuntu font-bold">
            Functional Wallet
          </span>
        </h1>
        <p className="text-gray-600 mb-8  font-sans ">
          Using the App, you can check the current exchange rate for BTC and LTC
          at any time and keep yourself updated.
        </p>
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Download the App on
        </h2>
        <div className="flex space-x-4">
          <Image
            src={appleStore}
            alt="Download on App Store"
            width={180}
            height={60}
            className="object-contain hover:opacity-85"
          />
          <Image
            src={googlePlayStore}
            alt="Get it on Google Play"
            width={180}
            height={60}
            className="object-contain hover:opacity-85"
          />
        </div>
      </div>
    </div>
  );
};
