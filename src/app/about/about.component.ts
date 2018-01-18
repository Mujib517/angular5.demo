import { Component, DoCheck, SimpleChanges } from '@angular/core';
import { ConsoleLogger } from '../shared/console.logger.service';
import { SimpleChange } from '@angular/core';
import { OnChanges } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `<h1>About Page</h1>
  
  <h1 #x>{{count}}</h1>
  <button (click)="inc()">Inc</button>
 <h1 [dlShow]="show">this heading would be hidden</h1>
 
 <h1 *dlIf="show">If directive demo</h1>
  `,
})
export class AboutComponent implements DoCheck, OnChanges {

  show: boolean = false;

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
  ngDoCheck(): void {
    //svc calls
  }


  count: number = 0;
  obj = {
    count: 0
  };

  constructor(private logger: ConsoleLogger) {
    logger.error("Took an insane amoutn of time to load");
  }

  ngOnInit() {

  }


  inc() {
    this.count++;
  }

}


//ditectives
//component
//attribute ngModel ngSwitch, ngClass
//structural *ngIf,*ngFor