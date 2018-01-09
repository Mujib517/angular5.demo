import { Component } from "@angular/core";
import { ProductService } from "../shared/product.service";

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.html'
})
export class ProductListComponent {
    products: any[];
    failed: boolean;
    success: boolean;
    product: any = {
        brand: 'Nokia'
    };

    constructor(private productSvc: ProductService) {
        this.get();
    }

    // refactoring
    get() {
        this.product = {};
        this.productSvc.get()
            .subscribe(
            res => this.products = res["data"],
            err => console.log(err)
            )
    }

    onSave() {
        this.productSvc.save(this.product)
            .subscribe(
            () => {
            this.success = true;
                this.get()
            },
            () => this.failed = true
            );

        // this.productSvc.save();
    }
}