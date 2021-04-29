export const WEATHER_SUCCESS = 'WEATHER_SUCCESS';
export const WEATHER_FAILURE = 'WEATHER_FAILURE';
export const WEATHER_LOADING_LOCATION = 'WEATHER_LOADING_LOCATION';
export const WEATHER_LOADING_CITY = 'WEATHER_LOADING_CITY';
export const WEATHER_LOCATION_FAILURE = 'WEATHER_LOCATION_FAILURE';

export function fetchWeatherForCity(cityName: string) {
  return {
    type: WEATHER_LOADING_CITY,
    payload: {cityName},
  };
}

export function fetchWeatherInfoWithLocation(lat: number, lng: number) {
  return {
    type: WEATHER_LOADING_LOCATION,
    payload: {lat, lng},
  };
}
