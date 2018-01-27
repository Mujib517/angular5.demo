import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/product.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../shared/models/product.model';

@Component({
  selector: 'app-product-detail',
  template: `
  <mat-spinner *ngIf="loading"></mat-spinner>


  <div class="panel panel-primary" *ngIf="!loading">
    <div class="panel-heading">
        <h1>{{product.brand}} {{product.model}} Rating: {{product.avgRating}}*</h1>
    </div>
    <div class="panel-body">
      Price: {{product.price | currency}}
      <div>{{product.lastUpdated|time}}</div>
    </div>
  </div>

  <div>
    <ul class="nav-tabs nav">
    <li routerLinkActive="active"><a routerLink="specs">Specs</a></li>
    <li routerLinkActive="active"><a routerLink="reviews">Reviews</a></li>
    </ul>
    <router-outlet></router-outlet>
  </div>
    
  `,
  styles: []
})
export class ProductDetailComponent {
  loading: boolean = false;
  product: Product = new Product();


  constructor(private productSvc: ProductService, private route: ActivatedRoute) {
    console.log("constructor");
  }

  ngOnInit() {
    this.loading = true;
    console.log("In init hook");
    let id = this.route.snapshot.params.id;

    this.productSvc.getById(id)
      .subscribe(
      (res) => {
        this.product = res;
        this.productSvc.reviews = res.reviews;
        this.loading = false;
      },
      (err) => {
        console.log(err);
        this.loading = false;
      });
  }


}
