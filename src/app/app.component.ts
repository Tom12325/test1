import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { Connectable, Observable, map } from 'rxjs';
import { Search } from './search.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  choice = {};
  latest = "";
  choiceArrayId = [];
  choiceArrayName = [];
  choiceArrayNew = [];
  selection = [];
  result = [];
  criteria: string;
  outcom: string[];
  age: string[];
  flag: boolean;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('https://data.police.uk/api/forces')
      .pipe(map(responseData => {
        for (const key in responseData) {
            this.choiceArrayId.push(responseData[key].id);
            this.choiceArrayName.push(responseData[key].name);
        }
        return responseData;
      })
      )
      .subscribe(responseData => {
        this.selection = this.choiceArrayId;
      });
  }

  onFetchPosts(dataset: Search) {
    this.fetchPosts(dataset.name, dataset.date, dataset.gender, dataset.outcome, dataset.age);
  }

  onCancelPosts() {

  }

  private fetchPosts(dataset: string, date: string, gender: string, outcome: string[], age: string[]) {
    this.criteria = gender;
    this.outcom = outcome;
    this.age = age;
    let searchParams = new HttpParams();
    searchParams = searchParams.append('force',dataset);
    searchParams = searchParams.append('date',date);
    this.http.get("https://data.police.uk/api/stops-force",{params: searchParams})
      .subscribe(posts => {
        this.result = [posts];
        console.log(posts);
      })
  };


}
