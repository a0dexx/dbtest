import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CountryInterface } from './models/country';
import { map } from 'rxjs/operators';

import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RegionService {

  constructor(private http: HttpClient) {
  }

  getCountries(region): Observable<CountryInterface[]> {

    console.log(region);
    const baseUrl = `https://restcountries.eu/rest/v2/region/` + region;

    return this.http.get(baseUrl).pipe(
      map((countryList: []) => {
        const mod = countryList.map((country: any) => {
          const modifiedCountries: any = {};
          modifiedCountries.name = country.name;
          modifiedCountries.capital = country.capital;
          modifiedCountries.population = country.population;
          modifiedCountries.currencies = country.currencies;
          modifiedCountries.flag = country.flag;
          return modifiedCountries;
        });
        console.log(typeof mod);
        return mod;
      })
    );
  }
}
