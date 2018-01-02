import { Component } from "@angular/core";

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.html'
})
export class ProductListComponent {
    products: any[] = [
        { id: 1, brand: "Nokia", model: "N8", price: 200, inStock: true },
        { id: 2, brand: "Apple", model: "Iphone 8", price: 600, inStock: true },
        { id: 3, brand: "Samsung", model: "S8", price: 700, inStock: false },
        { id: 4, brand: "Sony", model: "Xperia Z", price: 800, inStock: false }];
}