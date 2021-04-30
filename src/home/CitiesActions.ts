export const WANT_TO_ADD_CITY = 'WANT_TO_ADD_CITY';
export const WANT_TO_REMOVE_CITY = 'WANT_TO_REMOVE_CITY';
export const ADD_CITY = 'ADD_CITY';
export const REMOVE_CITY = 'REMOVE_CITY';

export function addCity(city: string) {
  return {
    type: WANT_TO_ADD_CITY,
    payload: {cityName: city},
  };
}

export function removeCity(city: string) {
  return {
    type: WANT_TO_REMOVE_CITY,
    payload: {cityName: city},
  };
}
