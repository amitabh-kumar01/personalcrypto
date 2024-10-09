import React from "react";
import { mobile } from "@/assets";
import CryptoProgress from "./Coins";

export const Transaction = () => {
  return (
    <div className="">
      <div className="text-center mb-20 mt-20">
        <h2 className="font-normal text-4xl mb-4">
          Transparent{" "}
          <span className="font-bold text-customYellow">Transactions</span>
        </h2>
        <p className="text-xs font-sans font-bold text-gray-500">
          GET CLARITY NOW!
        </p>
        <p className="text-gray-600 mt-4 font-thin font-sans text-base">
          Maecenas posuere ac ex vitae fringilla. Fusce pulvinar luctus elit.
          Fusce cursus lacus vel orci <br />
          malesuada pharetra. Duis vel imperdiet enim. Vestibulum dolor metus.
        </p>
      </div>
      <div className="text-center min-w-full  flex items-start justify-center ">
        <img src={mobile.src} alt="" />
      </div>
      <CryptoProgress />
    </div>
  );
};

