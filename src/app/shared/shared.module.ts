import { NgModule } from "@angular/core";
import { TimePipe } from "./time.pipe";
import { ProductService } from "./product.service";
import { HttpClientModule } from "@angular/common/http";
import { ProductResolver } from "./product.resolver";

@NgModule({
    imports: [HttpClientModule],
    declarations: [TimePipe],
    providers: [ProductService, ProductResolver],
    exports: [TimePipe]
})
export class SharedModule { }