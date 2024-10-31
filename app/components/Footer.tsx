function Footer() {
  return (
    <footer id="apropos" className="bg-[#00034A] text-white pt-52 pb-16 px-4 tablet:py-60 tablet:px-8 tablet:pb-20">
      <div className="container mx-auto">
        <div className="flex flex-col tablet:flex-row justify-between items-center tablet:items-start mb-12 space-y-8 tablet:space-y-0">
          <div className="text-center tablet:text-left">
            <img
              src="/icons/Logo-white.svg"
              alt="Général Services & Logistique logo"
              className="w-44 mb-4 mx-auto tablet:mx-0"
            />
            <div className="flex justify-center tablet:justify-start gap-4">
              <img src="/icons/X.svg" alt="X" />
              <img src="/icons/Instagram.svg" alt="Instagram" />
              <img src="/icons/YouTube.svg" alt="YouTube" />
              <img src="/icons/LinkedIn.svg" alt="LinkedIn" />
            </div>
          </div>
          <div className="flex flex-col tablet:flex-row gap-8 tablet:gap-24">
            <div className="text-center tablet:text-left">
              <h3 className="font-bold mb-4">Explore</h3>
              <ul className="space-y-2 font-extralight">
                <li>Accueil</li>
                <li>Partenaires</li>
              </ul>
            </div>
            <div className="text-center tablet:text-left">
              <h3 className="font-bold mb-4">Ressources</h3>
              <ul className="space-y-2 font-extralight">
                <li>Services</li>
                <li>Galeries</li>
                <li>Contactez-nous</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="pt-6 mt-6 ">
          <p className="text-center font-roboto font-normal text-sm tablet:text-base">© Général Services & Logistique. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer