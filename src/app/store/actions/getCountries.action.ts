import { createAction, props } from '@ngrx/store';
import { ActionTypes } from '../actionTypes';

export const getCountriesAction = createAction(
  ActionTypes.GET_COUNTRIES,
  props<{ region: string }>()
);
export const getCountriesSuccessAction = createAction(
  ActionTypes.GET_COUNTRIES_SUCCESS,
  props<{ countries }>()
);
export const getCountriesFailureAction = createAction(
  ActionTypes.GET_COUNTRIES_FAILURE
);
