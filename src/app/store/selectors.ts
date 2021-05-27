import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppStateInterface } from '../appState.interface';
import { CountriesStateInterface } from '../coutriesState.interface';



export const countriesSelector = createFeatureSelector<
  AppStateInterface,
  CountriesStateInterface
>('countries');

export const isLoadingSelector = createSelector(
  countriesSelector,
  (countryState: CountriesStateInterface) => countryState.isLoading
);

export const errorSelector = createSelector(
  countriesSelector,
  (countryState: CountriesStateInterface) => countryState.error
);

export const dataSelector = createSelector(
  countriesSelector,
  (countryState: CountriesStateInterface) => countryState.data
);
