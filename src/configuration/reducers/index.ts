import {combineReducers} from 'redux';
import appStatusState, {
  AppStatusState,
} from 'configuration/reducers/appStatusReducer';
import localState, {LocalState} from 'configuration/reducers/localStateReducer';
import weatherState, {WeatherState} from 'weather/Reducer';

export interface AppState {
  appStatusState: AppStatusState;
  localState: LocalState;
  weatherState: WeatherState;
}

const state: AppState = combineReducers({
  appStatusState,
  localState,
  weatherState,
} as any);

export default state;
