import {combineReducers} from 'redux';
import appStatusState, {
  AppStatusState,
} from 'configuration/reducers/appStatusReducer';
import localState, {LocalState} from 'configuration/reducers/localStateReducer';
import weatherState, {WeatherState} from 'weather/Reducer';
import searchState, {SearchState} from 'src/search/SearchReducer';

export interface AppState {
  appStatusState: AppStatusState;
  localState: LocalState;
  weatherState: WeatherState;
  searchState: SearchState;
}

const state: AppState = combineReducers({
  appStatusState,
  localState,
  weatherState,
  searchState,
} as any);

export default state;
