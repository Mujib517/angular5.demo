import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-product',
  template: `
    <h3>{{product.brand | uppercase}} {{product.model | titlecase}}</h3>
    <div>{{product.price | currency}}</div>
    <!-- <div>InStock: {{product.inStock ? "Yes":"No"}}</div> -->
    <div>InStock:
        <input [disabled]="true" type="checkbox" [checked]="product.inStock" />
    </div>
    <div>
        {{product.lastUpdated | date:'MM-dd-yyyy hh:ss'}}
    </div>
  `
})
export class ProductComponent {
  @Input()
  product
}
