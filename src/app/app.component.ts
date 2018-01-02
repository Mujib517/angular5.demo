import { Component } from '@angular/core';

//Es 6 module
@Component({
    selector: 'app-root',
    template: `
    
    <h1 [ngClass]="cls">
        {{firstName}}
    </h1>

    <h1 [ngStyle]="styles">
        {{lastName}}
    </h1>

    <table border="1">
        <tr>
            <td>Value</td>
            <td>Index</td>
            <td>Even</td>
            <td>Odd</td>
            <td>First</td>
            <td>Last</td>

        </tr>
        <tr [ngClass]="evn?'fg':'fg2'" *ngFor="let val of arr; let idx=index;let evn=even;let odd=odd;let fst=first;let lst=last">
            <td>{{val}}</td>
            <td>{{idx}}</td>
            <td>{{evn}}</td>
            <td>{{odd}}</td>
            <td>{{fst}}</td>
            <td>{{lst}}</td>
            
        </tr>
    </table>

   
    <input type="text" [(ngModel)]="firstName"/>


    <h1 [style.border]="myProp1?'1px solid black':''" [class.fg]="myProp">{{getName()}}</h1>
    
    <button [hidden]="getValue()">Click</button>
    <button (click)="toggle()">Save</button>

    <select (change)="onChange()">
        <option>C</option>
        <option>Java</option>
        <option>C#</option>
    </select>

    <div [ngSwitch]="priority">
        <h1 *ngSwitchCase="'Low'">Low Priority</h1>
        <h1 *ngSwitchCase="'Medium'">Medium Priority</h1>
        <h1 *ngSwitchCase="'High'">High Priority</h1>
        <h1 *ngSwitchDefault>Very Low Priority</h1>
    </div>
     `
})
export class AppComponent {

    myProp: boolean = true;
    cls = { bg: true, fg: this.myProp };  //falsy truthy
    firstName: string = "abcd";
    lastName: string = "md";
    arr: number[] = [1, 2, 3, 4];
    priority: string = "Very Low";
    styles = { 'background-color': 'yellow','border':"3px solid gray" };

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

    toggle() {
        //var is function scoped
        // if (true) {
        //     let x = 10; //block scoped

        //     if(true){
        //         if(true){
        //            var x='kajdf'
        //         }
        //     }
        // }

        // console.log(x);

        this.myProp = !this.myProp;
        //this.myProp = this.myProp ? false : true;
        // if (this.myProp) this.myProp = false;
        // else this.myProp = true;
    }

    //truthy 
    //falsy  "",false,null,undefined,Nan,0
}
// ngIf, ngSwitch, ngModel, ngFor, ngClass, ngStyle
// Expressions (interpolation), property binding, event binding , class, style and two way