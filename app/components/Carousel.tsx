'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent } from "../components/ui/card"
import { Carousel, CarouselContent, CarouselItem } from "../components/ui/carousel"
import { cn } from "../lib/utils"
import { ArrowLeft, ArrowRight } from "lucide-react"


// Sample image data - replace with your actual images
const images = [
  { src: "/images/PHOTO-2.png", alt: "Image 1" },
  { src: "/images/PHOTO-3.png", alt: "Image 2" },
  { src: "/images/PHOTO-2.png", alt: "Image 3" },
  { src: "/images/PHOTO-2.png", alt: "Image 4" },
  { src: "/images/PHOTO.png", alt: "Image 5" },

]

export default function CarouselPlugin() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex >= images.length) {
      setCurrentIndex(0)
    }
  }, [currentIndex])

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  return (
    <>
      <Card className="w-full aspect-video tablet:aspect-[4/3] mx-auto">
        <CardContent className="p-0">
          <div className="relative">
            <Carousel className="w-full">
              <CarouselContent>
                {images.map((image, index) => (
                  <CarouselItem key={index} className={index === currentIndex ? '' : 'hidden'}>
                    <div className="relative aspect-video tablet:aspect-[4/3]">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="object-cover size-full rounded-lg"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>


            </Carousel>

            {/* Controls: Arrow Left, Indicators (Puce), Arrow Right */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
              <button
                onClick={handlePrevious}
                className="p-1 rounded-full bg-white text-primary-foreground hover:bg-white/75 transition-colors"
                aria-label="Previous image"
              >
                <ArrowLeft />
              </button>
              <div className="flex space-x-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    className={cn(
                      "w-2 h-2 rounded-full transition-all",
                      index === currentIndex ? "bg-black" : "bg-white"
                    )}
                    onClick={() => setCurrentIndex(index)}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={handleNext}
                className="p-1 rounded-full bg-white text-primary-foreground hover:bg-white/75 transition-colors"
                aria-label="Next image"
              >
                <ArrowRight />
              </button>
            </div>
          </div>

        </CardContent>
      </Card>
      <div className="flex justify-center space-x-2 overflow-x-auto py-4">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={cn(
              "relative w-20 h-20 rounded-md overflow-hidden cursor-pointer transition-all",
              index === currentIndex ? "ring-2 ring-primary" : "opacity-70 hover:opacity-100"
            )}
          >
            <img
              src={image.src}
              alt={`Preview ${index + 1}`}
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </>
  )
}