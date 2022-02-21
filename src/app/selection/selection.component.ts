import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ConnectableObservable } from 'rxjs';
import { Search } from '../search.model';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.css']
})
export class SelectionComponent implements OnInit {

  constructor() { }

  @Input() choices: Array<string>;
  @Output() dataset = new EventEmitter<Search>();
  @Output() flag = new EventEmitter<boolean>();

  out = [];
  age = [];
  status = false;

  send(option: string, date: string, gender: string, out: string[], age: string[]) {
    const search = new Search(option, date, gender, out, age);
    this.dataset.emit(search)
    this.status = true;
    this.flag.emit(true)
  }

  reset() {
    this.status = false;
    this.flag.emit(false)
    this.out = [];
    this.age = [];
  }

  selectedOutcome(val: string, check: boolean) {
    if (check == true) {
      this.out.push(val);
      console.log("--list--")
      for (let out of this.out) {
        console.log(out)
      }
    } else{
      var index = this.out.indexOf(val);
      if (index > -1){
        this.out.splice(index,1);
      }
      console.log("--list--")
      console.log(this.out)
    }
  }

  selectedAge(val: string, check: boolean) {
    if (check == true) {
      this.age.push(val);
      console.log("--list--")
      for (let age of this.age) {
        console.log(age)
      }
    } else{
      var index = this.age.indexOf(val);
      if (index > -1){
        this.age.splice(index,1);
      }
      console.log("--list--")
      console.log(this.age)
    }
  }

  ngOnInit(): void {
  }

}
