"use client"
import React, { useState, useEffect } from 'react';
import { img4, img5, img6 } from '@/assets/Middle-assests';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export const Downloads = () => {
  const [isVisible, setIsVisible] = useState(true);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); 

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible((prev) => !prev);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div ref={ref} className='flex justify-center items-center mb-20'>
        <div className='w-1/2 justify-center ml-32 items-center h-auto relative'>
          <div
            className={`mt-20 h-550 w-550 rounded-full border-50 border-black flex items-center justify-center transition-opacity duration-500 ${isVisible ? 'opacity-5' : 'opacity-0'} transition-all ease-in-out`}
          >
            <div className='h-350 w-350 rounded-full border-50 border-black flex items-center justify-center'>
            </div>
          </div>

         
          <motion.img
            className='absolute h-650 -translate-y-92 translate-x-24'
            src={img4.src}
            initial={{ x: -500, y: -600, opacity: 0 }}
            animate={isInView ? { x: 95, y: -600, opacity: 1 } : {}} 
            transition={{ duration: 1.5, ease: 'easeInOut' }}
          />
        </div>

        <div className='w-1/2 mr-32'>
          <div className='mb-20 text-40'>
            <p className='text-bitBlack'>
              The Superior<span className='text-crypOrange font-bold'> Alternative</span>
            </p>
          </div>

          <div>
            <p className='text-text leading-7 text-base opacity-70'>
              Maecenas posuere ac ex vitae fringilla. Fusce pulvinar luctus elit. Fusce <br /> cursus lacus vel orci malesuada pharetra. Duis vel imperdiet enim. Vestibulum dolor metus. Condimentum vitae vehicula et, facilisis a nunc. Suspendisse potenti. Fusce ullamcorper ullamcorper convallis.
            </p>
          </div>

          <div className='flex mt-12 gap-7'>
            <img className='hover:opacity-80 transition-all duration-500' src={img5.src} />
            <img className='hover:opacity-80 transition-all duration-500' src={img6.src} />
          </div>
        </div>
      </div>
    </>
  );
};
