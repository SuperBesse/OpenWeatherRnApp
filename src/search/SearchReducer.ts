import {
  SEARCH_CITY_LOADING,
  SEARCH_CITY_SUCCESS,
  SEARCH_CITY_FAILURE,
} from 'search/SearchActions';

import type {SearchCitiesResult} from 'search/Types';
import type {ActionType} from 'configuration/actions/Actions';

export type SearchState = {
  isLoading: boolean;
  input?: string;
  results: SearchCitiesResult;
};

const initialState: SearchState = {
  isLoading: false,
  input: undefined,
  results: [],
};

export default function searchReducer(
  state: SearchState = initialState,
  action: ActionType<any>,
) {
  switch (action.type) {
    case SEARCH_CITY_LOADING:
      const {input} = action.payload;
      return {...state, isLoading: true, results: [], input: input};
    case SEARCH_CITY_SUCCESS: {
      const {citiesResult} = action.payload;
      return {...state, results: citiesResult, isLoading: false};
    }
    case SEARCH_CITY_FAILURE:
      return state;
    default:
      return state;
  }
}
