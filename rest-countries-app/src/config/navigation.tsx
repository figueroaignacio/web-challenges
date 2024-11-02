import {CountryDetails, Home} from "../pages/index.ts"

export const routes = [
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/country-details/:countryName",
    element: <CountryDetails/>
  },
]