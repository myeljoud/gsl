import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-30 border-b border-gray-200 bg-white">
      <div className="container flex items-center justify-between py-4 px-5">
        <a href="#home">
          <img
            src="/icons/logo-gsl.svg"
            alt="Maurisanté logo"
            className="hidden tablet:block"
          />
          <img src="/icons/logo-mobile.svg" className='tablet:hidden' alt="" />
        </a>
        <nav className="hidden tablet:flex items-center space-x-6">
          <a href="#home" className="py-4 hover:border-b-3 hover:border-primary">Accueil</a>
          <a href="#services" className="py-4 hover:border-b-3 hover:border-primary">Services</a>
          <a href="#logistique" className="py-4 hover:border-b-3 hover:border-primary">Logistique</a>
          <a href="#temoignage" className="py-4 hover:border-b-3 hover:border-primary">Témoignage</a>
          <a href="#apropos" className="py-4 hover:border-b-3 hover:border-primary">À propos</a>
        </nav>
        <a href="#contact" className="hidden tablet:block py-4 px-5 border border-black font-semibold">
          Contactez-nous
        </a>
        <button className="tablet:hidden" onClick={toggleMenu}>
          <img src="/icons/burger-icon.svg" alt="Menu" />
        </button>
      </div>
      <div className={`tablet:hidden bg-white overflow-hidden transition-max-height duration-300 ease-in-out ${isMenuOpen ? 'max-h-96' : 'max-h-0'}`}>
        <nav className="flex flex-col items-center space-y-4 p-5">
          <a href="#home" className="py-2 hover:text-primary">Accueil</a>
          <a href="#services" className="py-2 hover:text-primary">Services</a>
          <a href="#logistique" className="py-2 hover:text-primary">Logistique</a>
          <a href="#temoignage" className="py-2 hover:text-primary">Témoignage</a>
          <a href="#apropos" className="py-2 hover:text-primary">À propos</a>
          <a href="#contact" className="py-2 hover:text-primary">Contactez-nous</a>
        </nav>
      </div>
    </header>
  );
}
