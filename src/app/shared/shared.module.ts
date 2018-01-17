import { NgModule } from "@angular/core";
import { TimePipe } from "./time.pipe";
import { ProductService } from "./product.service";
import { HttpClientModule } from "@angular/common/http";
import { ProductResolver } from "./product.resolver";
import { ConsoleLogger } from "./console.logger.service";
import { FileLogger } from "./file.logger.service";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { ProductInterceptor } from "./product.interceptor";

@NgModule({
    imports: [HttpClientModule],
    declarations: [TimePipe],
    providers: [ProductService, ProductResolver,
        { provide: HTTP_INTERCEPTORS, useClass: ProductInterceptor, multi: true },
        { provide: ConsoleLogger, useClass: FileLogger }],
    exports: [TimePipe]
})
export class SharedModule { }

