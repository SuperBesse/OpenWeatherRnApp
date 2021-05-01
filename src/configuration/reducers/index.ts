import {combineReducers} from 'redux';
import appStatusState, {
  AppStatusState,
} from 'configuration/reducers/appStatusReducer';
import weatherState, {WeatherState} from 'weather/Reducer';
import searchState, {SearchState} from 'src/search/SearchReducer';
import citiesState, {CitiesState} from 'home/CitiesReducer';
export interface AppState {
  appStatusState: AppStatusState;
  weatherState: WeatherState;
  searchState: SearchState;
  citiesState: CitiesState;
}

const state: AppState = combineReducers({
  appStatusState,
  weatherState,
  searchState,
  citiesState,
} as any);

export default state;
