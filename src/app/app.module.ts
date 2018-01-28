import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from "./shared/shared.module";
import { RoutingModule } from "./routing.module";

import {
    AppComponent, HomeComponent, AboutComponent, ProductDetailComponent,
    ProductListComponent, ProductComponent, UsersComponent,
    NewProductComponent, ContactComponent, HeaderComponent, FooterComponent, ReviewsComponent, SpecsComponent
}
    from './app.barrel';


import { MatButtonModule, MatInputModule, MatCheckboxModule, MatToolbarModule, MatSliderModule, MatProgressSpinnerModule } from '@angular/material';

const MODULES = [BrowserModule, FormsModule, ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatSliderModule, MatProgressSpinnerModule,
    SharedModule, RoutingModule];

const COMPS = [AppComponent, HomeComponent, AboutComponent, ProductDetailComponent,
    ProductListComponent, ProductComponent, UsersComponent,
    NewProductComponent, ContactComponent, HeaderComponent, FooterComponent, ReviewsComponent, SpecsComponent];

@NgModule({
    imports: MODULES,
    declarations: COMPS,
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }