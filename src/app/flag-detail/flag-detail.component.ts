import { Component, OnInit, Input } from '@angular/core';
import { Flag } from '../flag';

@Component({
  selector: 'app-flag-detail',
  templateUrl: './flag-detail.component.html',
  styleUrls: ['./flag-detail.component.css']
})
export class FlagDetailComponent implements OnInit {
  @Input() flag: Flag | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
