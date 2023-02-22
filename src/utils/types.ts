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
  home: {
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
  about: {
    header: string;
    subheader: string;
    profileAvatar: { url: string };
    briefDescription: string;
    photosHeader: string;
    photos: Array<{ url: string }>;
  };
};

export type HeaderContent = {};

type Portifolio = {
  id: string;
  thumbnail: {
    url: string;
  };
  title: string;
  date: Date;
  type: string;
};

export type PortifolioContent = {
  portifolio: {
    backgroundImage: { url: string };
    title: string;
    subtitle: string;
    portifolio: Portifolio[];
  };
};
