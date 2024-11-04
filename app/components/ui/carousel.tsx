import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import React, { Children, useCallback, useEffect, useState } from "react";

import { cn } from "~/lib/utils";

type CarouselProps = {
  hasArrows?: boolean;
  hasDots?: boolean;
  hasDrag?: boolean;
  hasSidebar?: boolean;
  hasAutoplay?: boolean;
  className?: string;
  isDotsSmall?: boolean;
  children: React.ReactElement | React.ReactElement[];
};

export function Carousel({
  hasArrows = true,
  hasDots = true,
  hasDrag = true,
  hasSidebar = false,
  hasAutoplay = false,
  className = "",
  children,
}: CarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<never[] | number[]>([]);
  const autoplay = Autoplay({ delay: 4000 });

  const [sliderRef, slider] = useEmblaCarousel(
    { loop: true, watchDrag: hasDrag },
    hasAutoplay ? [autoplay] : undefined
  );

  const scrollPrev = useCallback(() => slider?.scrollPrev(), [slider]);
  const scrollNext = useCallback(() => slider?.scrollNext(), [slider]);
  const scrollTo = useCallback(
    (index: number) => slider?.scrollTo(index),
    [slider]
  );

  const onSelect = useCallback(() => {
    slider && setCurrentSlide(slider.selectedScrollSnap());
  }, [slider]);

  useEffect(() => {
    if (slider) {
      setScrollSnaps(slider.scrollSnapList());
      slider.on("select", onSelect);
      onSelect();
    }
  }, [onSelect, slider]);

  const carouselC = (
    <div className={cn("carousel", { "has-drag": hasDrag }, className)}>
      <div className="carousel--container" ref={sliderRef}>
        <div className="carousel--slides">
          {Children.map(children, child => (
            <div className="carousel--slide" key={child.key}>
              {child}
            </div>
          ))}
        </div>
      </div>

      {slider && scrollSnaps.length > 1 && (hasDots || hasArrows) ? (
        <div className="carousel--hud ">
          <div className="carousel--nav">
            {hasArrows ? (
              <button
                aria-label="Previous slide"
                className="carousel--prev"
                onClick={scrollPrev}
                type="button">
                <ArrowLeftIcon size={24} />
              </button>
            ) : null}
            <div className="carousel--status">
              {hasDots ? (
                <div className="carousel--dots">
                  {scrollSnaps.map((_, index) => (
                    <button
                      aria-label={`Go to slide ${index + 1}`}
                      className={cn("carousel--dot", {
                        "is-active": currentSlide === index,
                      })}
                      // eslint-disable-next-line react/no-array-index-key
                      key={index}
                      onClick={() => scrollTo(index)}
                      type="button"
                    />
                  ))}
                </div>
              ) : null}
            </div>
            {hasArrows ? (
              <button
                aria-label="Next slide"
                className="carousel--next"
                onClick={scrollNext}
                type="button">
                <ArrowRightIcon size={24} />
              </button>
            ) : null}
          </div>
        </div>
      ) : null}
    </div>
  );

  if (!hasSidebar) {
    return carouselC;
  }

  return (
    <div className="flex flex-col items-start space-y-0 tablet:space-y-4 tablet:space-y-reverse  laptop:space-y-0 gap-4 tablet:gap-4 ">
      <div className="aspect-video tablet:aspect-[2/1] w-full grow overflow-hidden bg-gray-100 rounded-lg tablet:rounded-[1.25rem]">
        {carouselC}
      </div>

      <div className="flex flex-row mx-auto gap-1 laptop:gap-2 w-full no-scrollbar overflow-scroll">
        {Children.map(children, (child, index) => (
          <div
            className={cn(
              "relative size-14 tablet:size-16 shrink-0 grow-0 cursor-pointer overflow-hidden rounded-lg transition-all laptop:h-[4.5rem] laptop:w-[4.5rem]",
              {
                "border-2": currentSlide === index,
                "border-gray-900 bg-lime-50": currentSlide === index,
                "border-gray-800 bg-primary-50": currentSlide === index,
                "border border-gray-400 hover:scale-105":
                  currentSlide !== index,
              }
            )}
            key={child.key}
            onClick={() => scrollTo(index)}
            onKeyDown={() => {
              //
            }}
            role="button"
            tabIndex={0}>
            {child}
          </div>
        ))}
      </div>
    </div>
  );
}
