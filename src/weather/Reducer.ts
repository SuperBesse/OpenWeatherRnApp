import {WEATHER_SUCCESS, WEATHER_FAILURE} from 'weather/Actions';

import type {WeatherData} from 'weather/Types';
import type {ActionType} from 'configuration/actions/Actions';
import {REMOVE_CITY} from 'home/CitiesActions';

export type WeatherState = {
  weathers: WeatherData[];
};

const initialState: WeatherState = {
  weathers: [],
};

export default function weatherReducer(
  state: WeatherState = initialState,
  action: ActionType<any>,
) {
  switch (action.type) {
    case WEATHER_SUCCESS: {
      const {weatherResult} = action.payload;
      //search existing weather data
      const existingData = state.weathers.filter(
        d => d.name === weatherResult.name,
      );
      //if city is already in list, just update data
      if (existingData.length > 0) {
        existingData[0] = weatherResult;
        return state;
      } else {
        return {...state, weathers: [...state.weathers, weatherResult]};
      }
    }
    case WEATHER_FAILURE:
      return state;
    case REMOVE_CITY: {
      const {cityName} = action.payload;
      //search existing city
      const otherCities = state.weathers.filter(d => d.name !== cityName);
      return {...state, weathers: otherCities};
    }
    default:
      return state;
  }
}
