import type { MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import CarouselPlugin from "~/components/Carousel";
import Footer from "~/components/Footer";
import { Header } from "~/components/Header";
import InfoOverlay from "~/components/InfoOverlay";
import PartnerLogos from "~/components/sponsors";
import { Button } from "~/components/ui/button";

import { sanityClient } from "~/sanity/client.server";
import { homeQuery } from "~/sanity/queries";

import type { PageData } from "~/types";

export const meta: MetaFunction = () => {
  return [
    { title: "Général Services & Logistique | GSL" },
    {
      name: "description",
      content:
        "GSL est une entreprise de transport nationale connue qui propose des voitures et des camions de qualité, un personnel qualifié de qualité, le meilleur processus de livraison et les solutions les plus compétitives en Mauritanie. Nous sommes fiers d'agir en tant que partenaires commerciaux de nos clients et d'offrir des solutions int��grées aux entreprises de tous les secteurs. Nous avons des références commerciales qui attestent de notre qualité unique, de notre compétitivité et de notre concentration sur la sûreté et la sécurité.",
    },
  ];
};

export const loader = async () => {
  try {
    const pageData = await sanityClient.fetch<PageData>(homeQuery);
    return json(pageData);
  } catch (error) {
    console.error("Error fetching homepage data:", error);
    return json({ error: "Failed to fetch data" }, { status: 500 });
  }
};

export default function Index() {
  const { heroSection, contact, services, galerie, partenaire } =
    useLoaderData<PageData>();

  return (
    <main>
      <Header />

      <section
        id="home"
        className="mx-auto w-full max-w-screen-laptop tablet:px-4 py-8 tablet:py-16  relative overflow-hidden tablet:overflow-visible ">
        <img
          src="/icons/Vector.svg"
          alt=""
          className="hidden tablet:block absolute top-5 left-20 z-10"
        />
        <img
          src="/icons/Vector.svg"
          className="absolute aspect-[576/635] top-56 -right-20 tablet:hidden"
          alt=""
        />

        <div className="grid grid-cols-1 tablet:grid-cols-2 gap-4 relative z-20">
          <div className="order-2 tablet:order-1 flex flex-col items-start gap-4 py-2 px-4 tablet:px-0">
            <h1 className="font-robotoCondensed text-38 leading-38 tablet:text-6xl font-extrabold text-center tablet:text-start">
              {heroSection.header}
            </h1>
            <p className="text-[#898989] text-base text-center tablet:text-start">
              {heroSection.paragraph}
            </p>

            <Button asChild className="mx-auto tablet:mx-0">
              <a href="#contact">{heroSection.ctaLabel}</a>
            </Button>
          </div>

          <div className="order-1 aspect-[2/1] tablet:aspect-[16/9] tablet:order-2 rounded-l-lg overflow-hidden ml-4 tablet:ml-0">
            <img
              src={heroSection.images[0].asset.url}
              alt="Vehicle"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="hidden rounded-l-lg aspect-[2/1] tablet:aspect-[5/3]  tablet:block tablet:w-full  tablet:rounded-lg tablet:order-3 mr-4 tablet:mr-0">
            <img
              src={heroSection.images[1].asset.url}
              alt="Vehicles"
              className="hidden  object-cover tablet:block tablet:size-full tablet:rounded-lg tablet:order-3"
            />
          </div>
          <div className="aspect-[2/1] tablet:aspect-[5/3] rounded-r-lg tablet:rounded-lg overflow-hidden order-4 mr-4 tablet:mr-0 ">
            <img
              src={heroSection.images[2].asset.url}
              alt="Vehicles"
              className="size-full object-cover"
            />
          </div>
        </div>
      </section>

      <section
        id="partenaires"
        className="container flex flex-col gap-8 py-8 tablet:py-16 px-8">
        <PartnerLogos {...partenaire} />
      </section>

      <section id="services" className="container py-16 grid gap-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-sans font-semibold text-center text-primary text-3xl sm:text-4xl">
            {services.title}
          </h2>
          {services.description && (
            <p className="text-center text-[#898989]">{services.description}</p>
          )}
        </div>
        {services.items.map((item, i) => {
          const isEven = i % 2 === 1;

          return (
            <div
              key={i}
              className="grid grid-cols-1 tablet:grid-cols-2 gap-8 items-center">
              <img
                src={item.img.asset.url}
                className={`w-full rounded-lg ${
                  isEven ? "tablet:order-2" : ""
                }`}
                alt=""
              />
              <div className="flex flex-col items-center tablet:items-start gap-4">
                <h1 className="font-robotoCondensed text-38 leading-38 font-bold text-center tablet:text-left ">
                  {item.header}
                </h1>
                <p className="font-roboto text-center text-lg text-[#6D6D6D] tablet:text-left  tablet:block">
                  {item.paragraph}
                </p>
                {/* <p className="font-roboto text-center text-lg text-[#6D6D6D] tablet:text-left tablet:hidden">
                  {isExpanded ? item.paragraph : item.paragraph.slice(0, 146) + "..."}
                  <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="font-semibold text-black ml-2"
                  >
                    {isExpanded ? "Show Less" : "Learn More"}
                  </button>
                </p> */}

                <Button asChild variant="secondary">
                  <a href="#contact">{item.ctaLabel}</a>
                </Button>
              </div>
            </div>
          );
        })}
      </section>

      <section
        id="galeries"
        className="bg-[#F7F5F5] pb-48 pt-6 tablet:pt-12 px-4 
        tablet:px-8 tablet:pb-32">
        <div className="mb-8">
          <h1 className="font-sans font-semibold text-center text-primary text-32 ">
            {galerie.title}
          </h1>

          {galerie.description && (
            <p className="text-center text-[#898989]">{galerie.description}</p>
          )}
        </div>

        <div className="tablet:container">
          <CarouselPlugin {...galerie} />
        </div>
      </section>

      <InfoOverlay {...contact} />

      <Footer />
    </main>
  );
}
