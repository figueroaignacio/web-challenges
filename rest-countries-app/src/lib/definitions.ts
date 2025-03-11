export type Country = {
  flags: {
    png: string;
    svg: string;
    alt?: string; 
  };
  name: {
    common: string;
    official: string;
    nativeName: {
      [key: string]: {
        official: string;
        common: string;
      };
    };
  };
  population: number;
  region: string;
  subregion?: string; 
  capital: string[];
  maps: {
    googleMaps: string;
    openStreetMaps: string;
  };
  tld?: string[];
  currencies?: {
    [key: string]: {
      name: string;
      symbol: string;
    };
  };
  languages?: {
    [key: string]: string;
  };
  borders?: string[]; 
  slug: string; 
};
