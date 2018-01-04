import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-users',
  template: `<h1>Users</h1>
  
  <div class="well" *ngFor="let user of users | async">
    <h3>{{user.login}}</h3>
    <img *ngIf="user.avatar_url" width="120" height="120" class="img img-circle" [src]="user.avatar_url"/>
  </div>
  
  
  `
})
export class UsersComponent {

  users;


  constructor(http: HttpClient) {
    var url = "https://api.github.com/users";
    this.users = http.get(url);
    // .subscribe(
    // (res) => this.users = res
    // )
  }
}