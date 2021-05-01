import {
  WANT_TO_ADD_CITY,
  WANT_TO_REMOVE_CITY,
  ADD_CITY,
  REMOVE_CITY,
} from './CitiesActions';

import {ActionType} from 'configuration/actions/Actions';
import {all, put, takeEvery} from 'redux-saga/effects';
import {fetchWeatherForCity} from 'weather/Actions';

interface CityData {
  cityName: string;
}

export default function () {
  return function* weatherSaga(): Generator<any> {
    yield all([
      yield takeEvery(WANT_TO_REMOVE_CITY, removeCity),
      yield takeEvery(WANT_TO_ADD_CITY, addCity),
    ]);
  };

  function* removeCity(action: ActionType<CityData>) {
    const {
      payload: {cityName},
    } = action;

    yield put({
      type: REMOVE_CITY,
      payload: {cityName: cityName},
    });
  }

  function* addCity(action: ActionType<CityData>) {
    const {
      payload: {cityName},
    } = action;

    yield put({
      type: ADD_CITY,
      payload: {cityName: cityName},
    });
    yield put(fetchWeatherForCity(cityName));
  }
}
