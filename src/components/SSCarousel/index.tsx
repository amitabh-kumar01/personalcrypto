'use client'

import React, { useState, useEffect, useCallback } from 'react'
import { img01, img02, img03, img04, img05, img06, img07, img08, img09, img10, img11, img12 } from '@/assets/Middle-assests'

export  const SsCarousel =() => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const screenshot = [
    img01.src, img02.src, img03.src, img04.src, img05.src, img06.src,
    img07.src, img08.src, img09.src, img10.src, img11.src, img12.src,
  ]

  const slides = []
  for (let i = 0; i < screenshot.length; i += 4) {
    slides.push(screenshot.slice(i, i + 4))
  }

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }, [slides.length])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }, [slides.length])

  const handleImageClick = (imageIndex: number) => {
    if (imageIndex === 0) {
      prevSlide()
    } else {
      nextSlide()
    }
    setIsAutoPlaying(false)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
    setIsAutoPlaying(false)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      nextSlide()
    }

    if (touchStart - touchEnd < -75) {
      prevSlide()
    }
  }

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        prevSlide()
        setIsAutoPlaying(false)
      } else if (event.key === 'ArrowRight') {
        nextSlide()
        setIsAutoPlaying(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [nextSlide, prevSlide])

  useEffect(() => {
    let intervalId: NodeJS.Timeout | null = null;

    if (isAutoPlaying) {
      intervalId = setInterval(() => {
        nextSlide()
      }, 5000)
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId)
      }
    }
  }, [isAutoPlaying, nextSlide])

  return (
    <div className="mt-20">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-4xl">
          <span>Cryptap</span>{' '}
          <span className="text-crypOrange font-semibold">Live Screenshots</span>
        </h2>
        <p className="text-sm font-semibold opacity-55 mt-2">
          CRYPTAP WORKS FOR YOUR SUCCESS
        </p>
      </div>

      <div className="w-full max-w-6xl h-auto mx-auto overflow-hidden mt-20">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {slides.map((slide, slideIndex) => (
            <div key={slideIndex} className="w-full flex-shrink-0">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6">
                {slide.map((image, imageIndex) => (
                  <div
                    key={imageIndex}
                    className="aspect-square relative cursor-pointer"
                    onClick={() => handleImageClick(imageIndex)}
                  >
                    <img
                      src={image}
                      alt={`Screenshot ${slideIndex * 4 + imageIndex + 1}`}
                      className="rounded-lg object-cover h-[550px] w-[250px]"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 flex justify-center space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentSlide(index)
                setIsAutoPlaying(false)
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ease-in-out ${
                currentSlide === index ? 'bg-crypOrange' : 'bg-gray-300'
              } hover:bg-crypOrange`}
              style={{
                transform: hoveredIndex === index ? 'rotateY(180deg)' : 'rotateY(0deg)',
              }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}