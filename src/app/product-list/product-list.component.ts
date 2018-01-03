import { Component } from "@angular/core";
import { ProductService } from "../shared/product.service";

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.html'
})
export class ProductListComponent {
    products: any[];

    constructor() {
        //hard to test
        let productSvc=new ProductService();
        this.products = productSvc.get();
    }
}