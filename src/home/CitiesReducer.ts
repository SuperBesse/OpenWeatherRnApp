import {ADD_CITY, REMOVE_CITY} from 'src/home/CitiesActions';

import type {ActionType} from 'configuration/actions/Actions';

export type CitiesState = {
  cities: string[];
};

const initialState: CitiesState = {
  cities: [],
};

export default function citiesReducer(
  state: CitiesState = initialState,
  action: ActionType<any>,
) {
  switch (action.type) {
    case ADD_CITY: {
      const {cityName} = action.payload;
      if (!state.cities.includes(cityName)) {
        return {...state, cities: [...state.cities, cityName]};
      }
      return state;
    }
    case REMOVE_CITY: {
      const {cityName} = action.payload;
      if (state.cities.includes(cityName)) {
        const index = state.cities.indexOf(cityName);
        //create a copy to update cities with deleting city
        const citiesCopy = [...state.cities];
        citiesCopy.splice(index, 1);
        return {
          ...state,
          cities: citiesCopy,
        };
      }
      return state;
    }
    default:
      return state;
  }
}
