import { Component, OnInit } from '@angular/core';
import { RegionService } from './region.service';
import { select, Store } from '@ngrx/store';
import { getCountriesAction } from './store/actions/getCountries.action';
import { combineLatest, Observable, Subscription } from 'rxjs';
import { countriesSelector, dataSelector, errorSelector, isLoadingSelector } from './store/selectors';
import { CountryInterface } from './models/country';
import { CountriesStateInterface } from './coutriesState.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  countriesSubscription: Subscription;
  countries$: Observable<CountriesStateInterface>;
  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;
  countries;

  country: CountryInterface;

  constructor(private store: Store, private regionService: RegionService) {
  }

  ngOnInit(): void {

    // this.regionService.getCountries('jjj').subscribe(res => {
    //   console.log(res);
    // });

    this.initializeValues();
    // this.fetchData('europe');
    this.initializeListeners();
  }


  // getRegion(region): void {
  //   this.fetchData(region);
  // }

  initializeValues(): void {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.error$ = this.store.pipe(select(errorSelector));
    this.countries$ = this.store.pipe(select(dataSelector));
  }

  initializeListeners(): void {
    this.countriesSubscription = this.store
      .pipe(select(countriesSelector))
      .subscribe((countries: CountriesStateInterface) => {
        this.countries = countries;
      });
  }

  getRegion(regionSelected): void {
    this.store.dispatch(getCountriesAction({ region: regionSelected }));
  }

  loadTable(country) {
    console.log('load this one', country);
    this.country = country;
  }
}
