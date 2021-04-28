import {
  INIT_APP_SUCCESS,
  INIT_APP_FAILURE,
  INIT_APP_START,
} from 'configuration/actions/AppActions';

import type {ActionType} from 'configuration/actions/Actions';

export type LocalState = 'init:start' | 'init:success' | 'init:failure';

const initialState: LocalState = 'init:start';

export default function localStatus(
  state: LocalState = initialState,
  action: ActionType<any>,
): LocalState {
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
