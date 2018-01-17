import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';


@Injectable()
export class ProductInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log("Inside Interceptor");

        let newReq = req.clone({ headers: req.headers.set("x-custom", "x-custom-value") });
        return next.handle(newReq)
            .do(res => console.log(res))
            // .catch(err => {
            //     console.log("In error interceptor");
            //     return Observable.throw(err)
            // }); //passing forward
    }

}