import {call, fork, put, take, all, spawn} from 'redux-saga/effects';
import {
  INIT_APP_FAILURE,
  INIT_APP_START,
  INIT_APP_SUCCESS,
} from 'configuration/actions/AppActions';
import {reduxStore as store} from 'configuration/store/ReduxStore';
import weatherSaga from 'weather/Saga';
import searchSaga from 'search/SearchSaga';

function* bootstrap() {
  try {
    const savedState = store.getState().localState;

    yield call(startApp);

    yield put({
      type: INIT_APP_SUCCESS,
      payload: {
        localState: {
          ...savedState,
        },
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
  yield all([spawn(weatherSaga()), spawn(searchSaga())]);
}

export default function* () {
  yield take(INIT_APP_START);
  yield fork(bootstrap);
}
