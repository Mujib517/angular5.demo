import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
    <h1>Contact Page</h1>
    <mat-toolbar color="primary">
      <button mat-button>Home</button>
      <button mat-button>About</button>
      <button mat-button>Contact</button>
    </mat-toolbar>


    <mat-slider></mat-slider>

    <mat-spinner></mat-spinner>


    <button mat-button color="accent">My Button</button>
    <button mat-raised-button color="primary">My Button</button>
    <button mat-fab color="primary">
      <i class="fa fa-facebook"></i>
    </button>

    <button mat-mini-fab>
      <i class="fa fa-plus"></i>
    </button>

    <div>
    <mat-form-field class="example-full-width">
      <input matInput placeholder="Favorite food" value="Sushi">
    </mat-form-field>
    <mat-checkbox></mat-checkbox>
    </div>
  `,
  styles: []
})
export class ContactComponent {
  count: number = 0;
  count2: number;
}
