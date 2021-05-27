import { CountriesStateInterface } from '../coutriesState.interface';

import { Action, createReducer, on } from '@ngrx/store';
import {
  getCountriesAction,
  getCountriesSuccessAction,
  getCountriesFailureAction,
} from './actions/getCountries.action';
import { routerNavigatedAction, routerNavigationAction } from '@ngrx/router-store';

const initialState: CountriesStateInterface = {
  isLoading: false,
  error: null,
  data: null,
};

const countriesReducer = createReducer(
  initialState,
  on(
    getCountriesAction,
    (state): CountriesStateInterface => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getCountriesSuccessAction,
    (state, action): CountriesStateInterface => ({
      ...state,
      isLoading: false,
      data: action.countries,
    })
  ),
  on(
    getCountriesFailureAction,
    (state): CountriesStateInterface => ({
      ...state,
      isLoading: false,
    })
  ),
  on(routerNavigationAction, (): CountriesStateInterface => initialState),

);

export function reducers(state: CountriesStateInterface, action: Action) {
  return countriesReducer(state, action);
}
