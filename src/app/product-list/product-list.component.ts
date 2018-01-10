import { Component } from "@angular/core";
import { ProductService } from "../shared/product.service";

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.html'
})
export class ProductListComponent {
    products: any[];
   

    constructor(private productSvc: ProductService) {
        this.get();
    }

    // refactoring
    get() {
        this.productSvc.get()
            .subscribe(
            res => this.products = res["data"],
            err => console.log(err)
            )
    }
}