import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import 'rxjs/add/operator/retry';
import { Observable } from "rxjs/Observable";
import { ConsoleLogger } from "./console.logger.service";
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import { Product } from "./models/product.model";
import { environment } from "../../environments/environment";

@Injectable()
export class ProductService {

    reviews: any[];
    url: string = environment.url;

    constructor(private http: HttpClient, private logger: ConsoleLogger) {
        logger.info("Service is instantiated");
    }

    get(): Observable<Product[]> {
        return this.http.get<Product[]>(this.url)
            .map(res => res["data"])
            .catch(err => Observable.throw("Failed"))
            .retry(3);
    }

    save(product): Observable<any> {
        return this.http.post(this.url, product);
    }

    getById(id: string): Observable<Product> {
        return this.http.get<Product>(this.url + id)
        //.catch(err => Observable.throw("Failed"));
    }
}