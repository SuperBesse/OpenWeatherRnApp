import {
  INIT_APP_SUCCESS,
  INIT_APP_FAILURE,
  INIT_APP_START,
} from 'configuration/actions/AppActions';

import type {ActionType} from 'configuration/actions/Actions';

export type AppStatusState = 'init:start' | 'init:success' | 'init:failure';

const initialState: AppStatusState = 'init:start';

export default function appStatus(
  state: AppStatusState = initialState,
  action: ActionType<any>,
): AppStatusState {
  switch (action.type) {
    case INIT_APP_START:
      return 'init:start';
    case INIT_APP_SUCCESS:
      return 'init:success';
    case INIT_APP_FAILURE:
      return 'init:failure';
    default:
      return state;
  }
}
