import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import 'rxjs/add/operator/retry';
import { Observable } from "rxjs/Observable";

@Injectable()
export class ProductService {
    constructor(private http: HttpClient) { }

    get(): Observable<any> {
        return this.http.get("https://exp-rest-api.herokuapp.com/api/products/")
            .retry(3);
    }

    save(product): Observable<any> {
        return this.http.post("https://exp-rest-api.herokuapp.com/api/products/", product);
    }

    getById(id: string): Observable<any> {
        return this.http.get("https://exp-rest-api.herokuapp.com/api/products/" + id);
    }
}