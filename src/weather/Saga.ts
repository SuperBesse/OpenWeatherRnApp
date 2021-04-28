import {
  WEATHER_LOADING_INSEE,
  WEATHER_SUCCESS,
  WEATHER_FAILURE,
} from 'weather/Actions';

import {ActionType} from 'configuration/actions/Actions';
import {call, put, takeEvery} from 'redux-saga/effects';
import WeatherApi from 'weather/WeatherApi';

interface TownData {
  inseeCode: string;
  town: string;
}

interface LocationData {
  lat: string;
  lng: string;
}

export default function () {
  const weatherApi = new WeatherApi();

  return function* weatherSaga(): Generator<any> {
    yield takeEvery(WEATHER_LOADING_INSEE, fetchContent);
  };

  function* fetchContent(action: ActionType<TownData>) {
    try {
      const {
        payload: {inseeCode, town},
      } = action;
      const result = yield call(
        weatherApi.fetchWeatherContent,
        inseeCode,
        town,
      );
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
