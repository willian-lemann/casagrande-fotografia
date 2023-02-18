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

export type HeaderContent = {};
