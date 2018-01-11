import { Component, Input } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-product',
  template: `
    <h3><a [routerLink]="'/products/'+product._id">{{product.brand | uppercase}} {{product.model | titlecase}}</a></h3>
    <div>{{product.price | currency}}</div>
    <!-- <div>InStock: {{product.inStock ? "Yes":"No"}}</div> -->
    <div>InStock:
        <input [disabled]="true" type="checkbox" [checked]="product.inStock" />
    </div>
    <div>
        {{product.lastUpdated | date:'MM-dd-yyyy hh:ss'}}
    </div>
    <div class="pull-right">
      {{ product.lastUpdated | time }}
    </div>
  `
})
export class ProductComponent {
  @Input()
  product
}
