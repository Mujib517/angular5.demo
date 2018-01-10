import { NgModule } from "@angular/core";
import { TimePipe } from "./time.pipe";
import { ProductService } from "./product.service";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
    imports: [HttpClientModule],
    declarations: [TimePipe],
    providers: [ProductService],
    exports: [TimePipe]
})
export class SharedModule { }