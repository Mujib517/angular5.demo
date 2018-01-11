import { NgModule } from "@angular/core";
import { RouterModule, Route } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { NewProductComponent } from "./new-product/new-product.component";

const ROUTES: Route[] = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'products', component: ProductListComponent },
    { path: 'products/new', component: NewProductComponent },
    { path: '**', component: HomeComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(ROUTES)],
    declarations: [],
    exports: [RouterModule]
})
export class RoutingModule { }