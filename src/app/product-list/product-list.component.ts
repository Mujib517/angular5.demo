import { Component } from "@angular/core";
import { ProductService } from "../shared/product.service";

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.html'
})
export class ProductListComponent {
    products: any[];
    product: any = {
        brand: 'Nokia'
    };

    constructor(private productSvc: ProductService) {
        productSvc.get()
            .subscribe(
            res => this.products = res["data"],
            err => console.log(err)
            )
    }

    onSave() {
        this.productSvc.save(this.product)
            .subscribe(
            () => console.log("Successfully saved"),
            () => console.log("failed")
            );

        // this.productSvc.save();
    }
}