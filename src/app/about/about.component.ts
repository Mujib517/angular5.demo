import { Component } from '@angular/core';
import { ConsoleLogger } from '../shared/console.logger.service';
import { SimpleChange } from '@angular/core';
import { OnChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-about',
  template: `<h1>About Page</h1>
  
  <h1 >{{count}}</h1>
  <button (click)="inc()">Inc</button>

  `,
})
export class AboutComponent {

  count: number = 0;
  obj = {
    count: 0
  };

  //event, web service, setTimeout,setInterval
  constructor(private http: HttpClient) {
    this.http.get("https://exp-rest-api.herokuapp.com/api/products")
      .subscribe(
      (res) => { this.count = 10000 }
      );
  }

  inc() {

    setTimeout(function () {
      this.count = 100;
    }, 2000);

    this.count++;
  }
}
