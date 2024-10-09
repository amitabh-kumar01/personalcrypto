import React from "react";
import { pricingPlans } from "../constants"; 
import { FaCheck } from "react-icons/fa";
import { BsDash } from "react-icons/bs";

const Price = () => {
  return (
    <section className="py-28 bg-white">
      <div className="text-center mb-20 font-sans">
        <h2 className="text-[40px] text-[#222328]">
          Comes with <span className="text-crypOrange font-bold">Best Price</span>
        </h2>
        <p className="text-[#757575] font-ubuntu text-[12px] font-bold my-3 ">
          WE WORK FOR YOUR SUCCESS
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-7 max-w-6xl mx-auto ">
        {pricingPlans.map((plan, index) => (
          <div key={index} className="rounded-lg border border-gray-100 ">
            <div className="relative h-1/2 cursor-pointer">
              <div className={` ${index === 1 ? "card fixed1" : "card1 "}`}>
                <div className="card-content p-10">
                  <img
                    src={plan.logo}
                    alt={plan.name}
                    className="h-[100px] mx-auto mb-10"
                  />
                  <h3 className="text-[50px] font-bold text-center">
                    {plan.price}
                  </h3>
                </div>
              </div>
            </div>

            <ul className="mb-6 space-y-3 font-sans p-6 ">
              {plan.features.map((feature, idx) => (
                <li
                  key={idx}
                  className="flex items-center space-x-2 text-[#353535]"
                >
                  {feature.status === "check" ? (
                    <span className="text-green-500">
                      <FaCheck />
                    </span>
                  ) : (
                    <span className="text-red-500 font-extrabold  ">
                      <BsDash />
                    </span>
                  )}
                  <span className="text-[16px] text-[#353535]">
                    {feature.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Price;
