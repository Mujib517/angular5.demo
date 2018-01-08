import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from './about/about.component';
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductComponent } from './product/product.component';
import { ProductService } from "./shared/product.service";
import { UsersComponent } from './users/users.component';
import { TimePipe } from './shared/time.pipe';


@NgModule({
    imports: [BrowserModule, FormsModule, HttpClientModule],
    declarations: [AppComponent, HomeComponent, AboutComponent,
        ProductListComponent, ProductComponent, UsersComponent, TimePipe],
    providers: [ProductService],
    bootstrap: [AppComponent]
})
export class AppModule { }