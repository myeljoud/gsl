type SanityImage = {
  _type: 'image';
  asset: {
    _ref: string;
    url: string;
  };
  alt?: string;
};

type HeroSection = {
  header: string;
  paragraph: string;
  images: SanityImage[];
  ctaLabel: string;
};

export type Contact = {
  header: string;
  paragraph: string;
  email: string;
  phoneNumber: string;
};

export type Galerie = {
  title: string;
  description: string;
  images: Array<SanityImage & { alt: string }>;
};

type LogistiqueItem = {
  img: SanityImage;
  header: string;
  paragraph: string;
};

type Logistique = {
  title: string;
  description: string;
  items: LogistiqueItem[];
};

export type Partenaire = {
  title: string;
  description: string;
  images: Array<SanityImage & { alt: string }>;
};

export type PageData = {
  heroSection: HeroSection;
  contact: Contact;
  galerie: Galerie;
  logistique: Logistique;
  partenaire: Partenaire;
};