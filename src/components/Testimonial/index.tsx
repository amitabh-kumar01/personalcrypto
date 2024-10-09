'use client'
import React from "react";
import Slider from "react-slick"; 
import Image from "next/image";
import testimonials from "../constants"; 
import { quote } from "@/assets/sharedSection";

const TestimonialSection = () => {
  
  const settings = {
    dots: false, 
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,  
    autoplaySpeed: 3000,  
    pauseOnHover: false,  
    arrows: false,  
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-white py-32">
      <div className="mx-auto w-[80%]">
        <Slider {...settings}>
          {testimonials.map((review, index) => (
            <div
              key={index}
              className="testimonial-card flex flex-col justify-between items-center bg-white px-14 rounded-lg border-r border-gray-200   h-auto mx-5" // Adjusted gap using mx-4
            >
              <div className="flex flex-col justify-center items-center text-center gap-5 font-opensans">
             
                <div className=" text-crypOrange"><img src={quote.src} alt="quote" height={24} width={24} /></div>
                <div className="text-gray-500 font-light  overflow-hidden  leading-6">
                  {review.quote}
                </div>
              </div>
              <div className="flex flex-col justify-center items-center ">
                <Image
                  src={review.image}
                  alt={review.name}
                  className="rounded-full my-5"
                  width={88}
                  height={88}
                />
                <h3 className="text-black font-bold pb-2">{review.name}</h3>
                <p className="text-gray-400 text-[10px] font-bold font-serif">{review.position}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TestimonialSection;
