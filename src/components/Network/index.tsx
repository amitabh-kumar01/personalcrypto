import React from "react";
import { background } from "@/assets/sharedSection";
const NetworkInfo = () => {
  return (
    <div className="bg-[#F9F9FA] ">
   
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 items-center px-4 py-16 ">
         <div className="flex justify-center items-center  ">
         <div
          className="w-2/3 h-60  rounded-lg flex justify-center items-center p-4  border border-gray-200 "
          style={{
            backgroundImage: `url(${background.src})`,
          }}
        >
         
          <div className=" shadow-lg rounded-lg  bg-white p-2 h-auto border border-gray-200">
            <div className="text-center">
              <h2 className="text-[#2C4676] text-xl font-semibold ">
                BTC Prices List
              </h2>
              <p className="text-black font-bold text-[16px] px-2">
                CCCAGG market does not exist for this coin pair (BTC-EGP)
              </p>
            </div>
          </div>
        </div>
         </div>
      
       

        {/* Right Section - Text Content */}
        <div className="w-2/3 text-center lg:text-left font-sans ">
        
        <h3 className="text-40  text-[#222328] leading-tight ">
            Innovative Payment <span className="text-[#FEA301] font-bold ">Network</span>
          </h3>
    
          
          <h2 className="text-gray-600  text-2xl ">
            Simple & secure access to buy, sell and use Bitcoin.
          </h2>
          <p className="text-gray-500 mt-4 font-ubuntu font-light leading-7" >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            sagittis nisl porttitor, eleifend tortor sed, auctor libero.
            Proin quis purus eu mi fermentum blandit. Nam eget nisi ipsum. Nullam
            vitae nunc ac eros laoreet egestas.
          </p>
        
          <button className="bg-[#FEA301] text-white font-bold text-sm py-4 px-8 mt-8">
            READ MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default NetworkInfo;
