import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, tap, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { EMPTY } from 'rxjs';

// import { ArticleService as SharedArticleService } from '../../../shared/services/article.service';

import {
  getCountriesAction,
  getCountriesSuccessAction,
  getCountriesFailureAction,
} from '../actions/getCountries.action';

import { RegionService } from '../../region.service';
import { CountriesStateInterface } from '../../coutriesState.interface';
import { CountryInterface } from '../../models/country';

@Injectable()
export class GetCountriesEffect {
  constructor(
    private actions$: Actions,
    private regionService: RegionService
  ) { }

  getCountries$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCountriesAction),
      switchMap(({ region }) => {
        return this.regionService.getCountries(region).pipe(
          map((countries) => {
            return getCountriesSuccessAction({ countries });
          }),
          catchError(() => {
            return of(getCountriesFailureAction());
          })
        );
      })
    )
  );
}

