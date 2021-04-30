export const SEARCH_CITY_START = 'SEARCH_CITY_BEGIN';
export const SEARCH_CITY_LOADING = 'SEARCH_CITY_LOADING';
export const SEARCH_CITY_SUCCESS = 'SEARCH_CITY_SUCCESS';
export const SEARCH_CITY_FAILURE = 'SEARCH_CITY_FAILURE';

export function searchCity(input: string) {
  return {
    type: SEARCH_CITY_START,
    payload: {input: input},
  };
}
