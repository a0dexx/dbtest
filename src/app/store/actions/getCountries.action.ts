import { createAction, props } from '@ngrx/store';
import { ActionTypes } from '../actionTypes';
// import { GetArticleResponseInterface } from '../../../shared/types/getArticleResponse.interface';
// import { ArticleInterface } from '../../../shared/types/article.interface';

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
