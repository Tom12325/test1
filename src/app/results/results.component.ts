import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ConnectableObservable } from 'rxjs';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  constructor() { }

  @Input() data: object;
  @Input() criteria: string;
  @Input() outcome: string[];
  @Input() age: string[];

  exceptions = ["location", "outcome_object"];
  found: boolean;

  ngOnInit(): void {

  }

}
