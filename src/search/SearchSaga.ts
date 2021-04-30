import {
  SEARCH_CITY_LOADING,
  SEARCH_CITY_SUCCESS,
  SEARCH_CITY_FAILURE,
  SEARCH_CITY_START,
} from './SearchActions';

import {ActionType} from 'configuration/actions/Actions';
import {call, put, takeEvery} from 'redux-saga/effects';
import SearchApi from './SearchApi';

interface TownData {
  input: string;
}

export default function () {
  const searchApi = new SearchApi();

  return function* weatherSaga(): Generator<any> {
    yield takeEvery(SEARCH_CITY_START, searchContent);
  };

  function* searchContent(action: ActionType<TownData>) {
    try {
      const {
        payload: {input},
      } = action;
      yield put({
        type: SEARCH_CITY_LOADING,
        payload: {input: input},
      });

      const result = yield call(searchApi.findCities, input);
      yield put({
        type: SEARCH_CITY_SUCCESS,
        payload: {citiesResult: result},
      });
    } catch (err) {
      yield put({
        type: SEARCH_CITY_FAILURE,
      });
    }
  }
}
