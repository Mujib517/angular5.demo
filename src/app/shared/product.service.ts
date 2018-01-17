import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import 'rxjs/add/operator/retry';
import { Observable } from "rxjs/Observable";
import { ConsoleLogger } from "./console.logger.service";
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class ProductService {

    reviews: any[];
    constructor(private http: HttpClient, private logger: ConsoleLogger) {
        logger.info("Service is instantiated");
    }

    get(): Observable<any> {
        return this.http.get("https://exp-rest-api.herokuapp.com/api/products/")
            .catch(err => Observable.throw("Failed"))
            .retry(3);
    }

    save(product): Observable<any> {
        return this.http.post("https://exp-rest-api.herokuapp.com/api/products/", product);
    }

    getById(id: string): Observable<any> {
        return this.http.get("https://exp-rest-api.herokuapp.com/api/products1/" + id)
                .catch(err => Observable.throw("Failed"));
    }
}