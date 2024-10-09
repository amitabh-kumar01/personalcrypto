import React from "react";
import { footerlogo } from "@/assets/sharedSection";
import { FaFacebookF, FaGooglePlus, FaTwitter } from "react-icons/fa";
import { IoLogoFlickr } from "react-icons/io";

const Footer: React.FC = () => {
  return (
    <footer className="text-[#757575] py-10 bg-white font-sans">
      <div className="w-[80%] mx-auto">
        <div className="flex flex-wrap justify-between px-5 ">
          <div className="w-full sm:w-1/4 mb-9">
            <h3 className="text-lg font-medium mb-7 text-black">PRODUCTS</h3>
            <ul className="space-y-5">
              <li>
                <a href="#" className="hover:text-[#FEA301]">
                  Zen Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FEA301]">
                  Mahogany Express
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FEA301]">
                  Socialite Versace
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FEA301]">
                  Fast Link
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full sm:w-1/4 mb-6 ">
            <h3 className="text-lg font-medium mb-7 text-black">SUPPORT</h3>
            <ul className="space-y-5">
              <li>
                <a href="#" className="hover:text-[#FEA301]">
                  Support Portal
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FEA301]">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FEA301]">
                  Tutorials
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FEA301]">
                  Documentation
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full sm:w-1/4 mb-6 ">
            <h3 className="text-lg font-medium mb-7 text-black">COMPANY</h3>
            <ul className="space-y-5">
              <li>
                <a href="#" className="hover:text-[#FEA301]">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FEA301]">
                  Press
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FEA301]">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FEA301]">
                  Forum
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full sm:w-1/4 mb-6">
            <h3 className="text-lg font-medium mb-7 text-black">SOCIAL</h3>
            <div className="flex space-x-2">
              <a
                href="#"
                className=" border-2 border-[#FEA301] rounded-full p-2 text-[#FEA301]"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className=" border-2 border-[#FEA301] rounded-full p-2 text-[#FEA301]"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className=" border-2 border-[#FEA301] rounded-full p-2 text-[#FEA301]"
              >
                <FaGooglePlus />
              </a>
              <a
                href="#"
                className=" border-2 border-[#FEA301] rounded-full p-2 text-[#FEA301]"
              >
                <IoLogoFlickr />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-400 opacity-30 my-12" />
        <div className="text-center mt-10 ">
          <div className="mb-4">
            <a href="https://cryptapp.wpengine.com/" >
              <img
                src={footerlogo.src}
                alt="CryptApp WordPress Theme"
                className="w-[180px] mx-auto"
              />
            </a>
          </div>
          <p>
            Copyright © 2018{" "}
            <a href="#" className="hover:text-[#FEA301] text-">
              designthemes
            </a>{" "}
            | All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
