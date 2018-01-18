import { Component, OnInit, OnDestroy } from "@angular/core";
import { ProductService } from "../shared/product.service";
import { ActivatedRoute } from "@angular/router";
import { Product } from "../shared/models/product.model";
import { Observable } from "rxjs/Observable";

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.html'
})
export class ProductListComponent implements OnInit, OnDestroy {
    products: Product[];
    obs: Observable<Product[]>;


    constructor(private productSvc: ProductService, private route: ActivatedRoute) { }

    ngOnInit() {
        //this.products = this.route.snapshot.data.products;

        this.obs = this.productSvc.get();

        this.obs.subscribe(
            res => { this.products = res; },
            err => console.log(err)
        );
    }

    // refactoring
    get() {
        this.productSvc.get()
            .subscribe(
            res => this.products = res,
            err => console.log(err)
            )
    }

    ngOnDestroy() {
        //this.obs.unsubscribe();
        console.log("unsubscribed");
    }
}