import { Component, Input, OnInit } from '@angular/core';
import { CountryInterface } from '../models/country';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss']
})
export class CountryDetailsComponent implements OnInit {

  constructor() { }


  @Input() country: CountryInterface;

  ngOnInit(): void {
    console.log(this.country);
  }




}
