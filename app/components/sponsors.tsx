import { useState, useEffect, useMemo } from 'react';

export function getMaxLogoWidth(w: number, h: number, area: number) {
  return Math.round(w * Math.sqrt(area / (w * h)));
}

// Adjust this value based on your design requirements
const TARGET_LOGO_AREA = 10000; // in square pixels

export default function PartnerLogos() {
  const [logoSizes, setLogoSizes] = useState<{ [key: string]: { width: number; height: number } }>({});

  const partners = useMemo(() => [
    { name: "Huawei", logo: "/images/partenaire/huawei.png" },
    { name: "Organisation", logo: "/images/partenaire/organisation.png" },
    { name: "Expertise France", logo: "/images/partenaire/expertise-france.png" },
    { name: "Coopération Allemande", logo: "/images/partenaire/cooperation-allemande.jpg" },
    { name: "USA Army", logo: "/images/partenaire/usa-army.png" },
    { name: "Sinohydro", logo: "/images/partenaire/sinohydro.png" },
    { name: "Sinotec", logo: "/images/partenaire/sinotec.jpg" },
  ], []);

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
        <h2 className="font-sans font-semibold text-center text-primary text-3xl sm:text-4xl mb-4">
          Nos partenaires
        </h2>
        <p className="text-center text-[#898989]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-8 tablet:grid-cols-5 pt-8">
        {partners.map((partner) => (
          <div
            key={partner.name}
            className="flex items-center justify-center p-4 rounded-lg"
          >
            {logoSizes[partner.name] && (
              <img
                // className={`max-w-[${logoSizes[partner.name].width}]`}
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
