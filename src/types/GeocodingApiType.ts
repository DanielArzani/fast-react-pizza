type AdministrativeInfo = {
  name: string;
  description: string;
  order: number;
  adminLevel: number;
  isoCode?: string;
  wikidataId?: string;
  geonameId?: number;
};

type InformativeInfo = {
  name: string;
  description: string;
  order: number;
  isoCode?: string;
  wikidataId?: string;
  geonameId?: number;
};

type LocalityInfo = {
  administrative: AdministrativeInfo[];
  informative: InformativeInfo[];
};

export type GeocodingApiResponse = {
  latitude: number;
  lookupSource: string;
  longitude: number;
  localityLanguageRequested: string;
  continent: string;
  continentCode: string;
  countryName: string;
  countryCode: string;
  principalSubdivision: string;
  principalSubdivisionCode: string;
  city: string;
  locality: string;
  postcode: string;
  plusCode: string;
  localityInfo: LocalityInfo;
};
