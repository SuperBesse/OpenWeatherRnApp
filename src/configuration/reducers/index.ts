import {combineReducers} from 'redux';
import appStatusState, {
  AppStatusState,
} from 'configuration/reducers/appStatusReducer';
import localState, {LocalState} from 'configuration/reducers/localStateReducer';

export interface AppState {
  appStatusState: AppStatusState;
  localState: LocalState;
}

const state: AppState = combineReducers({
  appStatusState,
  localState,
} as any);

export default state;
