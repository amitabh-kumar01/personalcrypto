'use client';
import React, { useEffect, useState } from 'react';
import { button1, button2 } from '@/assets/sharedSection';

const Button = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const handleButtonClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleScroll = () => {
 
    if (window.scrollY > 100) { 
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    
    window.addEventListener('scroll', handleScroll);
    
   
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='bg-transparent'>
      {isVisible && ( 
        <div
          onClick={handleButtonClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="fixed bottom-5 right-5  z-10 transition duration-300 ease-in-out animate-bounce w-auto h-auto p-3"
          aria-label="Scroll to top"
        >
          <img 
            src={isHovered ? button2.src : button1.src} 
            alt="Scroll to top" 
            className="w-14 h-14 bg-none"
          />
        </div>
      )}
    </div>
  );
};

export default Button;
