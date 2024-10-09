"use client"
import React, { createContext, useContext, useState } from 'react';
interface SlideContextType {
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
}
const SlideContext = createContext<SlideContextType | undefined>(undefined);

export const SlideProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  return (
    <SlideContext.Provider value={{ currentIndex, setCurrentIndex }}>
      {children}
    </SlideContext.Provider>
  );
};

export const useSlideContext = () => {
  const context = useContext(SlideContext);
  if (context === undefined) {
    throw new Error('useSlideContext must be used within a SlideProvider');
  }
  return context;
};
