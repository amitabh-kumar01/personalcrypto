import React from 'react';
import { FaPaperPlane } from "react-icons/fa";

export const NewsLetter = () => {
  return (
   <>
   <div className='h-450 mt-20 w-full bg-nLetterbg '>
   <div className='flex justify-center items-center flex-col '>
        <div className='whitespace-break-spaces mt-20' >
           <span className='text-white text-40 '>Sign Into Our <span className='text-crypOrange text-40 font-semibold'>Newsletter</span></span>
        </div>
        <div>
           <p className='text-13 font-bold mt-1 text-white '>WHAT DO YOU GET</p>
        </div>
    </div>

    <div className='flex justify-center  items-center mt-20   '>
      <div className='flex gap-5 mb-28  '>
        <input placeholder='Name' className='h-14 w-400 p-5 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:shadow-lg focus:shadow-yellow-500/50'/>
        <input placeholder='Email' className='h-14 w-400 p-5 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:shadow-lg focus:shadow-yellow-500/50'/>
        <button className=' bg-crypOrange h-12 w-52 p-7 flex justify-center items-center gap-5 text-white font-medium tracking-widest'>SUBSCRIBE <span className='text-white'><FaPaperPlane /></span></button>
        </div>
    </div>
   </div>
   </>
  );
}





