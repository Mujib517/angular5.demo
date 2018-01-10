import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from './about/about.component';
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductComponent } from './product/product.component';
import { UsersComponent } from './users/users.component';
import { NewProductComponent } from "./new-product/new-product.component";
import { SharedModule } from "./shared/shared.module";


@NgModule({
    imports: [BrowserModule, FormsModule, ReactiveFormsModule,SharedModule],
    declarations: [AppComponent, HomeComponent, AboutComponent,
        ProductListComponent, ProductComponent, UsersComponent, NewProductComponent],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }