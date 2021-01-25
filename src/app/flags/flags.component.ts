import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../countries.service';
import { Flag } from '../flag';
import { FLAGS } from '../mock-flags';

@Component({
  selector: 'app-flags',
  templateUrl: './flags.component.html',
  styleUrls: ['./flags.component.css', '../../../node_modules/flag-icon-css/css/flag-icon.css']
})
export class FlagsComponent implements OnInit {
  randomNationName: string | undefined;
  randomNationCode: string | undefined;
  myGuess: string | undefined;
  flags = FLAGS;

  constructor(private CountriesService: CountriesService) { }

  ngOnInit(): void {
  }

  next() {
    let countries = this.CountriesService.getCountries();
    let random = Math.floor(Math.random() * countries.length);

    this.randomNationName = countries[random].name;
    this.randomNationCode = countries[random].code;
  }

}
