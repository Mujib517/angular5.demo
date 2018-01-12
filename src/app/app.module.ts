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
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RoutesRecognized } from "@angular/router/src/events";
import { RoutingModule } from "./routing.module";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { ReviewsComponent } from "./reviews/reviews.component";
import { SpecsComponent } from "./specs/specs.component";

@NgModule({
    imports: [BrowserModule, FormsModule, ReactiveFormsModule, SharedModule, RoutingModule],
    declarations: [AppComponent, HomeComponent, AboutComponent, ProductDetailComponent,
        ProductListComponent, ProductComponent, UsersComponent,
        NewProductComponent, ContactComponent, HeaderComponent, FooterComponent, ReviewsComponent, SpecsComponent],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }