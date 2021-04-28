export const WEATHER_SUCCESS = 'WEATHER_SUCCESS';
export const WEATHER_FAILURE = 'WEATHER_FAILURE';
export const WEATHER_LOADING_LOCATION = 'WEATHER_LOADING_LOCATION';
export const WEATHER_LOADING_INSEE = 'WEATHER_LOADING_INSEE';
export const WEATHER_LOCATION_FAILURE = 'WEATHER_LOCATION_FAILURE';

export function fetchWeatherInfoWithInsee(inseeCode: string, town: string) {
  return {
    type: WEATHER_LOADING_INSEE,
    payload: {inseeCode, town},
  };
}

export function fetchWeatherInfoWithLocation(lat: number, lng: number) {
  return {
    type: WEATHER_LOADING_LOCATION,
    payload: {lat, lng},
  };
}

export function loadWeatherTest() {
  return {
    type: WEATHER_LOADING_INSEE,
    payload: {},
  };
}
