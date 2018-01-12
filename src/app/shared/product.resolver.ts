import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { ProductService } from "./product.service";

@Injectable()
export class ProductResolver implements Resolve<any>{

    constructor(private productSvc: ProductService) { }

    resolve() {
        return this.productSvc.get();
    }
}