import {WEATHER_SUCCESS, WEATHER_FAILURE} from 'weather/Actions';

import type {WeatherData} from 'weather/Types';
import type {ActionType} from 'configuration/actions/Actions';

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
      if (existingData.length > 0) {
        existingData[0] = weatherResult;
        return {...state.weathers};
      } else {
        return {...state, weathers: [...state.weathers, weatherResult]};
      }
    }
    case WEATHER_FAILURE:
      return state;
    default:
      return state;
  }
}