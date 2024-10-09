import { img1, img2, img3 } from "@/assets/Middle-assests";
import React from "react";
import { FaRegCircleUser } from "react-icons/fa6";
import { TiMessages } from "react-icons/ti";

export const BitcoinNews = () => {
  return (
    <>
      <div className="flex justify-center items-center flex-col mt-24 ">
        <div className="whitespace-break-spaces">
          <span className="text-bitBlack text-40">
            BitCoin &{" "}
            <span className="text-crypOrange text-40 font-semibold">
              Cryptocurrency
            </span>
          </span>
        </div>
        <div>
          <p className="text-13 font-semibold opacity-55">OUR LATEST NEWS</p>
        </div>
      </div>

      <div className="flex items-center justify-center gap-7   mt-20 ">
        <div className="max-w-[370px] h-500 mb-20  ">
          <div>
            <img src={img1.src} className="h-60 w-full cursor-pointer"></img>
          </div>
          <div className="flex border-t gap-4 ">
            <div className="flex border-t border-crypOrange mt-10 border-b h-20 ">
              <p className="flex flex-col items-center">
                <span>18th </span>
                <span>september</span>
                <span> 2015</span>
              </p>
            </div>
            <div className="mt-10 ">
              <p className="hover:text-crypOrange transition-all duration-500 cursor-pointer">
                THE AMAZING SAGA OF<br/> BITCOIN CRYPTOCURRENCY
              </p>
              <p className="text-text leading-8 mt-5 font-opensans  ">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni
                repellendus alias harum provident debitis autem illum
                consequuntur nemo possimus sit ratione ipsam voluptatem
                similique numquam non ipsum, iure amet recusandae...
              </p>
              <div className="flex justify-between">
                <span className="flex gap-4 items-center">
                  <FaRegCircleUser />
                  <p>Ram</p>
                </span>
                <span className="flex gap-5 items-center cursor-pointer">
                  <TiMessages />
                  <p>1</p>
                </span>
                <span className="flex items-center gap-4">
                  <FaRegCircleUser />
                  <p>blockchain</p>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-[370px] h-500 mb-20">
          <div>
            <img src={img2.src} className="h-60 w-full cursor-pointer"></img>
          </div>
          <div className="flex border-t gap-4 ">
            <div className="flex border-t border-crypOrange mt-10 border-b h-20 ">
              <p className="flex flex-col items-center">
                <span>18th </span>
                <span>september</span>
                <span> 2015</span>
              </p>
            </div>
            <div className="mt-10 ">
              <p className="hover:text-crypOrange transition-all duration-500 cursor-pointer">
              BLOCKCHAIN IS PUBLIC<br/> DISTRIBUTED LEDGER
              </p>
              <p className="text-text leading-8 mt-5 font-opensans  ">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni
                repellendus alias harum provident debitis autem illum
                consequuntur nemo possimus sit ratione ipsam voluptatem
                similique numquam non ipsum, iure amet recusandae...
              </p>
              <div className="flex justify-between">
                <span className="flex gap-4 items-center">
                  <FaRegCircleUser />
                  <p>Ram</p>
                </span>
                <span className="flex gap-5 items-center cursor-pointer">
                  <TiMessages />
                  <p>1</p>
                </span>
                <span className="flex items-center gap-4">
                  <FaRegCircleUser />
                  <p>blockchain</p>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-[370px] h-500 mb-20 ">
          <div>
            <img src={img3.src} className="h-60 w-full cursor-pointer"></img>
          </div>
          <div className="flex border-t gap-4 ">
            <div className="flex border-t border-crypOrange mt-10 border-b h-20 ">
              <p className="flex flex-col items-center">
                <span>18th </span>
                <span>september</span>
                <span> 2015</span>
              </p>
            </div>
            <div className="mt-10 ">
              <p className="hover:text-crypOrange transition-all duration-500 cursor-pointer ">
              WHAT IS PUBLIC KEY<br/> CRYPTOGRAPHY SYSTEM?
              </p>
              <p className="text-text leading-8 mt-5 font-opensans h-auto ">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni
                repellendus alias harum provident debitis autem illum
                consequuntur nemo possimus sit ratione ipsam voluptatem
                similique numquam non ipsum, iure amet recusandae Lorem ipsum dolor sit amet consectetur ...
              </p>
              <div className="flex justify-between">
                <span className="flex gap-4 items-center">
                  <FaRegCircleUser />
                  <p>Ram</p>
                </span>
                <span className="flex gap-5 items-center cursor-pointer">
                  <TiMessages />
                  <p>1</p>
                </span>
                <span className="flex items-center gap-4">
                  <FaRegCircleUser />
                  <p>blockchain</p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
