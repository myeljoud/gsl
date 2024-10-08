"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "../components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel"
import { useCallback } from "react"
import { type CarouselApi } from "../components/ui/carousel"

export function CarouselPlugin() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  const onSelect = useCallback(() => {
    if (!api) return
    setCurrent(api.selectedScrollSnap())
  }, [api])

  React.useEffect(() => {
    if (!api) return
    setCount(api.scrollSnapList().length)
    api.on("select", onSelect)
    api.on("reInit", onSelect)
  }, [api, onSelect])

  return (
    <div className="w-full mx-auto">
      <Carousel
        setApi={setApi}
        plugins={[plugin.current]}
        className="w-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent className="">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem className="rounded-xl" key={index}>
              <Card className="rounded-xl">
                <CardContent className="p-0">
                  <img
                    // src={`/placeholder.svg?height=360&width=640&text=Slide ${index + 1}`}\
                    src="/images/photo-1.png"
                    alt={`Slide ${index + 1}`}
                    width={640}
                    height={360}
                    className="w-full rounded-xl aspect-video object-cover"
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="py-4 text-center">
        {Array.from({ length: count }).map((_, index) => (
          <span
            key={index}
            className={`inline-block size-3 mx-1 rounded-full ${index === current ? 'bg-primary' : 'bg-white'
              }`}
          />
        ))}
      </div>
    </div>
  )
}