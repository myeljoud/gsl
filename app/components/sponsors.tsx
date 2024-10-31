import { useState, useEffect, useMemo } from 'react';
import { Partenaire } from '~/types';
import { clsx } from 'clsx';
export function getMaxLogoWidth(w: number, h: number, area: number) {
  return Math.round(w * Math.sqrt(area / (w * h)));
}

// Adjust this value based on your design requirements
const TARGET_LOGO_AREA = 10000; // in square pixels

export default function PartnerLogos(props: Partenaire) {
  const [logoSizes, setLogoSizes] = useState<{ [key: string]: { width: number; height: number } }>({});


  const partners = useMemo(() => props.images.map((image, index) => ({ name: props.title, logo: image.asset.url })), [props.images, props.title]);

  useEffect(() => {
    const loadImages = async () => {
      const sizes: { [key: string]: { width: number; height: number } } = {};
      for (const partner of partners) {
        const img = new Image();
        img.src = partner.logo;
        await new Promise((resolve) => {
          img.onload = () => {
            const originalWidth = img.naturalWidth;
            const originalHeight = img.naturalHeight;
            const maxWidth = getMaxLogoWidth(originalWidth, originalHeight, TARGET_LOGO_AREA);
            sizes[partner.name] = {
              width: maxWidth,
              height: Math.round((maxWidth / originalWidth) * originalHeight)
            };
            resolve();
          };
        });
      }
      setLogoSizes(sizes);
    };

    loadImages();
  }, [partners]);

  return (
    <section className="container mx-auto px-4">
      <div className="mx-auto max-w-2xl">
        <h2 className="font-sans font-semibold text-center text-primary text-3xl sm:text-4xl mb-2">
          {props.title}
        </h2>
        {props.description && <p className="text-center text-[#898989] mb-4">
          {props.description}
        </p>
        }
      </div>
      <div className="flex flex-wrap justify-center gap-x-8 tablet:ap-x-4 gap-y-6 mt-6">
        {partners.map((partner) => (
          <div
            key={partner.name + partner.logo}
            className="flex-[0_0_calc(50%-16px)] tablet:flex-[0_0_calc(20%-16px)]"
          >
            {logoSizes[partner.name] && (
              <img
                className="mx-auto"
                src={partner.logo}
                alt={`${partner.name} logo`}
                style={{
                  width: `${logoSizes[partner.name].width}px`,
                  height: `${logoSizes[partner.name].height}px`,
                  maxWidth: '100%',
                  objectFit: 'contain'
                }}
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
