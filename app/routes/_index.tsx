import type { MetaFunction } from "@remix-run/node";
import { Header } from "~/components/Header";
import Footer from "~/components/Footer";
import InfoOverlay from "~/components/InfoOverlay";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <main className="">
      <Header />
      <section id="home" className="mx-auto w-full max-w-screen-laptop tablet:px-4 py-16 relative">
        <img src="/icons/Vector.svg" alt="" className="hidden tablet:block absolute top-5 left-20  z-10" />
        <img src="/icons/vector-mobile.svg" className="w-96 absolute top-40 left-40  tablet:hidden" alt="" />

        <div className="grid grid-cols-1 tablet:grid-cols-2 gap-4 relative z-20">
          <div className="order-2 tablet:order-1 flex flex-col items-start gap-4 py-2 px-4 ">
            <h1 className="font-robotoCondensed text-4xl tablet:text-6xl font-bold text-center tablet:text-start ">Solutions logistiques rapides et fiables</h1>
            <p className="text-[#898989] text-center tablet:text-start">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <button className="text-white mx-auto tablet:mx-0 bg-primary px-5 py-4">
              Contactez-nous
            </button>
          </div>
          <img src="/images/photo-3.png" alt="Vehicle" className="order-1 tablet:order-2 rounded-lg pl-4 tablet:pl-0" />
          <img src="/images/photo-1.png" alt="Vehicles" className="hidden tablet:block tablet:w-full tablet:h-[327px] tablet:rounded-lg tablet:order-3" />
          <img src="/images/photo-2.png" alt="Vehicles" className="order-4 w-full h-[212px] tablet:h-[327px] rounded-lg pr-4 tablet:pr-0" />
        </div>
      </section>

      <section id="services" className="container flex flex-col gap-8 py-16 px-8">
        <div className="mx-auto flex flex-col gap-1">
          <h1 className="font-sans font-semibold text-center text-primary text-32">Nos partenaires</h1>
          <p className="text-center text-[#898989]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
        </div>
        <div className="mx-auto grid grid-cols-2 gap-8 tablet:flex tablet:items-center tablet:justify-center tablet:gap-20">
          <img src="/icons/Frame-1.svg" alt="" className="justify-self-center" />
          <img src="/icons/Frame-2.svg" alt="" className="justify-self-center" />
          <img src="/icons/Frame.svg" alt="" className="justify-self-center" />
          <img src="/icons/logo-43.svg" alt="" className="justify-self-center" />
          <img src="/icons/logo-70.svg" alt="" className="col-span-2 justify-self-center" />
        </div>
      </section>
      <section className="container py-16 grid gap-8">
        <div className="grid grid-cols-1 tablet:grid-cols-2 gap-8 items-center">
          <img src="images/PHOTO.png" className="rounded-lg w-full" alt="" />
          <div className="flex flex-col items-center tablet:items-start gap-4">
            <h1 className="font-robotoCondensed text-5xl font-bold text-center tablet:text-left">Etiam at velit vel magna viverra feugiat</h1>
            <p className="font-roboto text-center tablet:text-left">En parallèle, notre expertise logistique nous permet de proposer des services de transport des engins et des marchandises flexibles et adaptés aux exigences de nos clients, qu'il s'agisse de petites entreprises ou de grandes industries. Grâce à notre réseau étendu et à une équipe de professionnels dédiés, nous assurons une gestion fluide et efficace des opérations de transport.</p>
            <a href="#contact" className="hidden tablet:block py-4 px-5 border border-black font-semibold">
              Contactez-nous
            </a>
          </div>
        </div>
        <div className="grid grid-cols-1 tablet:grid-cols-2 gap-8 items-center">
          <img src="images/PHOTO-2.png" alt="" className="w-full tablet:order-2" />
          <div className="flex flex-col items-center tablet:items-start gap-4 tablet:order-1">
            <h1 className="font-robotoCondensed text-5xl font-bold text-center tablet:text-left">Etiam at velit vel magna viverra feugiat</h1>
            <p className="font-roboto text-center tablet:text-left">En parallèle, notre expertise logistique nous permet de proposer des services de transport des engins et des marchandises flexibles et adaptés aux exigences de nos clients, qu'il s'agisse de petites entreprises ou de grandes industries. Grâce à notre réseau étendu et à une équipe de professionnels dédiés, nous assurons une gestion fluide et efficace des opérations de transport.</p>
            <a href="#contact" className="hidden tablet:block py-4 px-5 border border-black font-semibold">
              Contactez-nous
            </a>
          </div>
        </div>
        <div className="grid grid-cols-1 tablet:grid-cols-2 gap-8 items-center">
          <img src="images/PHOTO-3.png" alt="" className="w-full" />
          <div className="flex flex-col items-center tablet:items-start gap-4">
            <h1 className="font-robotoCondensed text-5xl font-bold text-center tablet:text-left">Etiam at velit vel magna viverra feugiat</h1>
            <p className="font-roboto text-center tablet:text-left">En parallèle, notre expertise logistique nous permet de proposer des services de transport des engins et des marchandises flexibles et adaptés aux exigences de nos clients, qu'il s'agisse de petites entreprises ou de grandes industries. Grâce à notre réseau étendu et à une équipe de professionnels dédiés, nous assurons une gestion fluide et efficace des opérations de transport.</p>
            <a href="#contact" className="hidden tablet:block py-4 px-5 border border-black font-semibold">
              Contactez-nous
            </a>
          </div>
        </div>
      </section>
      <section id="temoignage" className="bg-[#F7F5F5] pt-12 px-4 pb-20 tablet:pt-20 tablet:px-8 tablet:pb-60">
        <div className="container flex flex-col tablet:flex-row tablet:justify-between">
          <div className="font-sans flex flex-col gap-6 tablet:gap-8 w-full tablet:w-96 mb-8 tablet:mb-0">
            <div>
              <p className="text-primary font-normal text-base">Témoignages</p>
              <h2 className="text-3xl tablet:text-4xl font-semibold">Ce que nos clients disent de nos services</h2>
            </div>
            <div className="flex gap-2">
              <button>
                <img src="/icons/left-arrow.svg" alt="" />
              </button>
              <button>
                <img src="/icons/arrow-right.svg" alt="" />
              </button>
            </div>
          </div>
          <div className="relative">
            <img src="/icons/quote.svg" alt="" className="absolute -top-8 -right-4 tablet:-top-8 tablet:-left-20" />
            <div className="flex flex-col gap-4">
              <p className="w-full tablet:w-[620px] font-normal text-2xl tablet:text-4xl font-roboto">Donec ac neque porttitor, bibendum velit efficitur, laoreet elit. Mauris arcu nunc, posuere ac porta sit amet, fermentum et diam. Duis eu dapibus dui. Suspendisse pretium consectetur elit vel pretium.</p>
              <div className="flex items-center gap-4">
                <img src="images/profil.png" alt="" className="w-12 h-12 tablet:w-auto tablet:h-auto" />
                <div>
                  <h2 className="text-lg tablet:text-xl font-bold">Cameron Williamson</h2>
                  <p className="text-sm tablet:text-base">Marketing Coordinator at Big Kahuna Burger Ltd.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <InfoOverlay />
      <Footer />
    </main>
  );
}
