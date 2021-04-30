export interface SearchCitiesResult {
  results: CityResult[];
}

export interface CityResult {
  name: string;
  local_names: localNames[];
  lat: number;
  lon: number;
  country: string;
}

export interface localNames {
  [locale: string]: string[];
}
