import { Component } from "@angular/core";
import { ProductService } from "../shared/product.service";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.html'
})
export class ProductListComponent {
    products: any[];


    constructor(private productSvc: ProductService, private route: ActivatedRoute) {
        this.products = this.route.snapshot.data.products.data;
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