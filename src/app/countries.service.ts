import { Injectable } from '@angular/core';
import { FLAGS } from './mock-flags';
import { Flag } from './flag';

import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor() { }

  getCountries(): Observable<Flag[]> {
    return of(FLAGS);
  }
}
