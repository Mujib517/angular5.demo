import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import 'rxjs/add/operator/retry';

@Injectable()
export class ProductService {
    constructor(private http: HttpClient) { }

    get() {
        return this.http.get("https://exp-rest-api.herokuapp.com/api/products/")
                .retry(3);
    }
}