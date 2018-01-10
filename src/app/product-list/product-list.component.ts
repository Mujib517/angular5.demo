import { Component } from "@angular/core";
import { ProductService } from "../shared/product.service";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.html'
})
export class ProductListComponent {
    frm: FormGroup;
    products: any[];
    failed: boolean;
    success: boolean;

    constructor(private productSvc: ProductService, private fb: FormBuilder) {
        //LHS==RHS. Unit testing
        this.frm = fb.group({
            brand: ['Apple', [Validators.required]],
            model: ['', [Validators.required, Validators.minLength(3),Validators.maxLength(10)]],
            price: ['',[Validators.pattern("[0-9]{3}")]],
            inStock: []
        });

        this.get();
    }

    // refactoring
    get() {
        this.productSvc.get()
            .subscribe(
            res => this.products = res["data"],
            err => console.log(err)
            )
    }

    onSave() {
        if (this.frm.valid) {
            this.productSvc.save(this.frm.value)
                .subscribe(
                () => {
                    this.success = true;
                    this.frm.reset();
                    this.get()
                },
                () => this.failed = true
                );
        }
        else {
            console.log("Validations failed");
        }



        // this.productSvc.save();
    }
}