import { Component, OnInit } from '@angular/core';
import { Flag } from '../flag';
import { FLAGS } from '../mock-flags';

import { CountriesService } from '../countries.service';

@Component({
  selector: 'app-flags',
  templateUrl: './flags.component.html',
  styleUrls: ['./flags.component.css', '../../../node_modules/flag-icon-css/css/flag-icon.css']
})
export class FlagsComponent implements OnInit {
  randomNationName: string | undefined;
  randomNationCode: string | undefined;
  myGuess: string | undefined;
  flags: Flag[] | undefined;
  selectedFlag: Flag | undefined;

  constructor(private CountriesService: CountriesService) { }

  ngOnInit(): void {
    this.getCountries();
  }

  getCountries() {
    this.CountriesService.getCountries().subscribe(flags => this.flags = flags);
  }

  next() {
    let countries = this.CountriesService.getCountries();
    //let random = Math.floor(Math.random() * countries.length);

    //this.randomNationName = countries[random].name;
    //this.randomNationCode = countries[random].code;
  }

  onSelect(flag: Flag) {
    this.selectedFlag = flag;
    console.log(this.selectedFlag);

  }

}
