import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from './about/about.component';


@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent, HomeComponent, AboutComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }