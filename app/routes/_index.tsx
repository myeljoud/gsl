import type { MetaFunction } from "@remix-run/node";
import { Header } from "~/components/Header";
import Footer from "~/components/Footer";
import InfoOverlay from "~/components/InfoOverlay";
import { useState } from "react";
import { CarouselPlugin } from "~/components/Carousel";
export const meta: MetaFunction = () => {
  return [
    { title: "Général Services & Logistique | GSL" },
    { name: "description", content: "GSL est une entreprise de transport nationale connue qui propose des voitures et des camions de qualité, un personnel qualifié de qualité, le meilleur processus de livraison et les solutions les plus compétitives en Mauritanie. Nous sommes fiers d'agir en tant que partenaires commerciaux de nos clients et d'offrir des solutions intégrées aux entreprises de tous les secteurs. Nous avons des références commerciales qui attestent de notre qualité unique, de notre compétitivité et de notre concentration sur la sûreté et la sécurité." },
  ];
};

export default function Index() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isExpanded2, setIsExpanded2] = useState(false);
  const [isExpanded3, setIsExpanded3] = useState(false);
  const fullText =
    "En parallèle, notre expertise logistique nous permet de proposer des services de transport des engins et des marchandises flexibles et adaptés aux exigences de nos clients, qu'il s'agisse de petites entreprises ou de grandes industries. Grâce à notre réseau étendu et à une équipe de professionnels dédiés, nous assurons une gestion fluide et efficace des opérations de transport.";

  const shortText = fullText.slice(0, 146) + "...";
  return (
    <main className="">
      <Header />
      <section id="home" className="mx-auto w-full max-w-screen-laptop tablet:px-4 py-8 tablet:py-16  relative overflow-hidden tablet:overflow-visible ">
        <img src="/icons/Vector.svg" alt="" className="hidden tablet:block absolute top-5 left-20  z-10" />
        <img src="/icons/Vector.svg" className="absolute aspect-[576/635] top-56 -right-20 tablet:hidden" alt="" />

        <div className="grid grid-cols-1 tablet:grid-cols-2 gap-4 relative z-20">
          <div className="order-2 tablet:order-1 flex flex-col items-start gap-4 py-2 px-4 ">
            <h1 className="font-robotoCondensed text-38 leading-38 tablet:text-6xl font-extrabold text-center tablet:text-start ">Solutions logistiques rapides et fiables</h1>
            <p className="text-[#898989] text-lg font-medium text-center tablet:text-start">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <button className="text-white mx-auto tablet:mx-0 bg-primary px-5 py-4">
              Contactez-nous
            </button>
          </div>
          <img src="/images/photo-3.png" alt="Vehicle" className="order-1 aspect-[416/212] tablet:aspect-[607/310] tablet:order-2 tablet:rounded-lg pl-4 tablet:pl-0" />
          <img src="/images/photo-1.png" alt="Vehicles" className="hidden aspect-[416/212] tablet:aspect-[607/310]  tablet:block tablet:w-full tablet:h-[327px] tablet:rounded-lg tablet:order-3" />
          <img src="/images/photo-2.png" alt="Vehicles" className="aspect-[416/212] tablet:aspect-[607/310] order-4 pr-4 tablet:pr-0 w-full h-full" />
        </div>
      </section>

      <section id="services" className="container flex flex-col gap-8 py-16 px-8">
        <div className="mx-auto flex flex-col gap-1">
          <h1 className="font-sans font-semibold text-center text-primary text-32">Nos partenaires</h1>
          <p className="text-center text-[#898989]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
        </div>
        <div className="mx-auto grid grid-collogoss-2 gap-8 tablet:flex tablet:items-center tablet:justify-center tablet:gap-20">
          <img src="/icons/Frame-1.svg" alt="logos" className="justify-self-center" />
          <img src="/icons/Frame-2.svg" alt="logos" className="justify-self-center" />
          <img src="/icons/Frame.svg" alt="logos" className="justify-self-center" />
          <img src="/icons/logo-43.svg" alt="logos" className="justify-self-center" />
          <img src="/icons/logo-70.svg" alt="logos" className="col-span-2 justify-self-center" />
        </div>
      </section>
      <section className="container py-16 grid gap-8">
        <div className="grid grid-cols-1 tablet:grid-cols-2 gap-8 items-center">
          <img src="images/PHOTO.png" className="rounded-lg w-full" alt="" />
          <div className="flex flex-col items-center tablet:items-start gap-4">
            <h1 className="font-robotoCondensed text-38 leading-38 font-bold text-center tablet:text-left ">Etiam at velit vel magna viverra feugiat</h1>
            <p className="font-roboto text-center text-lg text-[#6D6D6D] tablet:text-left hidden tablet:block">
              {fullText}
            </p>
            <p className="font-roboto text-center text-lg text-[#6D6D6D] tablet:text-left tablet:hidden">
              {isExpanded ? fullText : shortText}
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="font-semibold text-black ml-2"
              >
                {isExpanded ? "Show Less" : "Learn More"}
              </button>
            </p>
            <a href="#contact" className="hidden tablet:block py-4 px-5 border border-black font-semibold">
              Contactez-nous
            </a>
          </div>
        </div>
        <div className="grid grid-cols-1 tablet:grid-cols-2 gap-8 items-center">
          <img src="images/PHOTO-2.png" alt="" className="w-full tablet:order-2" />
          <div className="flex flex-col items-center tablet:items-start gap-4 tablet:order-1">
            <h1 className="font-robotoCondensed  font-bold text-38 leading-38 text-center tablet:text-left">Etiam at velit vel magna viverra feugiat</h1>
            <p className="font-roboto text-center text-lg text-[#6D6D6D] tablet:text-left hidden tablet:block">
              {fullText}
            </p>
            <p className="font-roboto  text-center text-lg font-normal text-[#6D6D6D] tablet:text-left tablet:hidden">
              {isExpanded2 ? fullText : shortText}
              <button
                onClick={() => setIsExpanded2(!isExpanded2)}
                className="font-semibold text-black ml-2"
              >
                {isExpanded2 ? "Show Less" : "Learn More"}
              </button>
            </p>
            <a href="#contact" className=" py-4 px-5 border border-black font-semibold">
              Contactez-nous
            </a>
          </div>
        </div>
        <div className="grid grid-cols-1 tablet:grid-cols-2 gap-8 items-center">
          <img src="images/PHOTO-3.png" alt="" className="w-full" />
          <div className="flex flex-col items-center tablet:items-start gap-4">
            <h1 className="font-robotoCondensed text-38 leading-38
             tablet:text-5xl font-bold text-center tablet:text-left">Etiam at velit vel magna viverra feugiat</h1>
            <p className="font-roboto text-center text-lg text-[#6D6D6D] tablet:text-left hidden tablet:block">
              {fullText}
            </p>
            <p className="font-roboto text-center text-lg text-[#6D6D6D] tablet:text-left tablet:hidden">
              {isExpanded3 ? fullText : shortText}
              <button
                onClick={() => setIsExpanded3(!isExpanded3)}
                className="font-semibold text-black ml-2"
              >
                {isExpanded3 ? "Show Less" : "Learn More"}
              </button>
            </p>
            <a href="#contact" className="py-4 px-5 border border-black font-semibold">
              Contactez-nous
            </a>
          </div>
        </div>
      </section>
      <section id="temoignage" className="bg-[#F7F5F5] pt-12 px-4 pb-20 tablet:pt-20 tablet:px-8 tablet:pb-60">
        <div className="container flex flex-
        
        col tablet:flex-row tablet:justify-between">
          <CarouselPlugin />
        </div>
      </section>
      <InfoOverlay />
      <Footer />
    </main>
  );
}
