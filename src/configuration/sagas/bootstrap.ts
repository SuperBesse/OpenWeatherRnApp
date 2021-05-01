import {call, fork, put, take, all, spawn} from 'redux-saga/effects';
import {
  INIT_APP_FAILURE,
  INIT_APP_START,
  INIT_APP_SUCCESS,
} from 'configuration/actions/AppActions';
import {reduxStore as store} from 'configuration/store/ReduxStore';
import weatherSaga from 'weather/Saga';
import searchSaga from 'src/search/SearchSaga';
import citiesSaga from 'home/CitiesSaga';
import {WEATHERLOADD_ALL_CITIES} from 'weather/Actions';

function* bootstrap() {
  try {
    yield call(startApp);

    yield put({
      type: INIT_APP_SUCCESS,
      payload: {},
    });

    const savedCitiesState = store.getState().citiesState;
    //launch weather data for all saved cities
    yield put({
      type: WEATHERLOADD_ALL_CITIES,
      payload: {
        cities: savedCitiesState.cities,
      },
    });
  } catch (error) {
    __DEV__ && console.error(error);
    yield put({
      type: INIT_APP_FAILURE,
      payload: {error},
    });
  }
}

function* startApp() {
  yield all([spawn(weatherSaga()), spawn(searchSaga()), spawn(citiesSaga())]);
}

export default function* () {
  yield take(INIT_APP_START);
  yield fork(bootstrap);
}
