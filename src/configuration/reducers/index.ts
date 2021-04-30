import {combineReducers} from 'redux';
import appStatusState, {
  AppStatusState,
} from 'configuration/reducers/appStatusReducer';
import weatherState, {WeatherState} from 'weather/Reducer';
import searchState, {SearchState} from 'src/search/SearchReducer';
import citiesReducer, {CitiesState} from 'home/CitiesReducer';
export interface AppState {
  appStatusState: AppStatusState;
  weatherState: WeatherState;
  searchState: SearchState;
  citiesReducer: CitiesState;
}

const state: AppState = combineReducers({
  appStatusState,
  weatherState,
  searchState,
  citiesReducer,
} as any);

export default state;
