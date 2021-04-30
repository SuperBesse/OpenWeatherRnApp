import {
  WEATHER_LOADING_CITY,
  WEATHER_SUCCESS,
  WEATHER_FAILURE,
} from 'weather/Actions';

import {ActionType} from 'configuration/actions/Actions';
import {call, put, takeEvery} from 'redux-saga/effects';
import WeatherApi from 'weather/WeatherApi';
import {WeatherData} from './Types';

interface TownData {
  cityName: string;
}

interface LocationData {
  lat: string;
  lng: string;
}

export default function () {
  const weatherApi = new WeatherApi();

  return function* weatherSaga(): Generator<any> {
    yield takeEvery(WEATHER_LOADING_CITY, fetchContent);
  };

  function* fetchContent(action: ActionType<TownData>) {
    try {
      const {
        payload: {cityName},
      } = action;
      const result = yield call(weatherApi.fetchWeatherContent, cityName) as WeatherData;
      if (!result) {
        yield put({
          type: WEATHER_FAILURE,
        });
      }
      yield put({
        type: WEATHER_SUCCESS,
        payload: {weatherResult: result},
      });
    } catch (err) {
      yield put({
        type: WEATHER_FAILURE,
      });
    }
  }
}
