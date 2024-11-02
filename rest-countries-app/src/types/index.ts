export type Currency = {
  name: string;
  symbol: string;
};

export type Languages = {
  [key: string]: string;
};

export type Country = {
  flags: {
    png: string;
  };
  name: {
    common: string;
    official: string;
  };
  region: string;
  subregion: string;
  capital: string;
  population: number;
  maps: {
    googleMaps: string;
  };
  borders?: string[];
  topLevelDomain?: string[];
  currencies?: Record<string, Currency>;
  languages?: Languages;
};
