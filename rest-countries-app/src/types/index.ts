export type Country = {
  flags: {
    png: string
  }
  name: {
    common: string;
  };
  region: string;
  capital: string;
  population: number
  maps: {
    googleMaps: string;
  }
};