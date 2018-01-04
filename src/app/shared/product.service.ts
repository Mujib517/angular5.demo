import { Injectable } from "@angular/core";


@Injectable()
export class ProductService{

    constructor(){}

    get(){
        return [
            { id: 1, brand: "Nokia", model: "N8", price: 200, inStock: true, lastUpdated: Date.now() },
            { id: 2, brand: "Apple", model: "Iphone 8", price: 600, inStock: true, lastUpdated: Date.now() },
            { id: 3, brand: "Samsung", model: "S8", price: 700, inStock: false, lastUpdated: Date.now() },
            { id: 4, brand: "Sony", model: "Xperia Z", price: 800, inStock: false, lastUpdated: Date.now() }];
    }
}