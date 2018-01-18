import { NgModule } from "@angular/core";
import { TimePipe } from "./time.pipe";
import { ProductService } from "./product.service";
import { HttpClientModule } from "@angular/common/http";
import { ProductResolver } from "./product.resolver";
import { ConsoleLogger } from "./console.logger.service";
import { FileLogger } from "./file.logger.service";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { ProductInterceptor } from "./product.interceptor";
import { ShowDirective } from "./show.directive";
import { IfDirective } from "./if.directive";

@NgModule({
    imports: [HttpClientModule],
    declarations: [TimePipe, ShowDirective, IfDirective],
    providers: [ProductService, ProductResolver,
        { provide: HTTP_INTERCEPTORS, useClass: ProductInterceptor, multi: true },
        { provide: ConsoleLogger, useClass: FileLogger }],
    exports: [TimePipe, ShowDirective, IfDirective]
})
export class SharedModule { }

