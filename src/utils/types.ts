import { Type } from "../functions/get-portifolio-type";

type Logo = {
  isActive: boolean;
  image: {
    url: string;
  };
};

export type Navigation = {
  href: string;
  label: string;
};

export type PageContent = {
  homePage: {
    backgroundImage: {
      url: string;
    };
    header: {
      websiteTitle: string;
      navigation: Navigation[];
      logos: Logo[];
      backgroundImage: {
        url: string;
      };
    };
  };
};

export type AboutContent = {
  aboutPage: {
    header: string;
    subheader: string;
    profileAvatar: { url: string };
    briefDescription: string;
    photosHeader: string;
    photos: Array<{ url: string }>;
  };
};

export type HeaderContent = {};

export type Portifolio = {
  id: string;
  thumbnail: {
    url: string;
  };
  title: string;
  date: Date;
  type: Type;
  slug: string;
  photos: Array<{ url: string }>;
};

export type PortifolioContent = {
  portifolioPage: {
    backgroundImage: { url: string };
    title: string;
    subtitle: string;
  };
  portifolios: Portifolio[];
};

export type OrcamentoContent = {
  orcamento: {
    file: {
      url: string;
    };
  };
};
