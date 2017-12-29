import { Component } from '@angular/core';

//Es 6 module
@Component({
    selector: 'app-root',
    template: `
    
    <h1>{{firstName}}</h1>

  
    <input type="text" [(ngModel)]="firstName"/>


    <h1 [style.border]="myProp1?'1px solid black':''" [class.fg]="myProp">{{getName()}}</h1>
    
    <button [hidden]="getValue()">Click</button>
    <button (click)="onSave(1)">Save</button>

    <select (change)="onChange()">
        <option>C</option>
        <option>Java</option>
        <option>C#</option>
    </select>

     `
})
export class AppComponent {
    myProp: string = "Angular App";
    firstName: string = "";
    lastName: string = "md";

    getValue(): string {
        //complex
        //side effects
        return "Hello world";
    }

    onChange() {
        console.log("Value changed");
    }

    onSave(param) {
        console.log("Button clicked", param);
    }

    getName() {
        return this.firstName + " " + this.lastName;
    }

    //truthy 
    //falsy  "",false,null,undefined,Nan,0
}

// Expressions (interpolation), property binding, event binding , class, style and two way