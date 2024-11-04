

import { Galerie } from "~/types";
import { Carousel } from "./ui/carousel";
export type ProductGalleryProps = {
  images: any[];
};

export default function CarouselPlugin(props: Galerie) {
  const { images } = props;
  return (
    <div className="aspect-[2/1] mx-auto max-w-xl  tablet:border-none laptop:mx-0 laptop:max-w-none mb-8 tablet:mb-16">
      <div
      >
        <Carousel hasSidebar>
          {images.map((image, index) => {
            return (
              <img
                alt={image.alt}
                key={index}
                className="object-cover size-full"
                // sizes="(max-width: 640px) 100vw, 50vw"
                src={image.asset.url}
              />
            );
          })}
        </Carousel>
        </div>
    </div>
  );
}