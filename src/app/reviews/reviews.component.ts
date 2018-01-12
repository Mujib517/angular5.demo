import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-reviews',
  template: `
    <h1 *ngIf="reviews && reviews.length>0">Reviews</h1> 
    <h3 *ngIf="reviews?.length==0">Be the first one to review</h3>
    <div class="col-md-6">
      <div *ngFor="let review of reviews">

          <h3>{{review.name}}  Rating: {{review.rating}}</h3>
          <b>{{review.subject}}</b>
          <div>
            {{review.message}}
          </div>
          <div>{{review.lastUpdated|time}}</div>
      </div>
    </div>
  `,
  styles: []
})
export class ReviewsComponent {

  reviews: any[];

  constructor(private productSvc: ProductService) {
    this.reviews = productSvc.reviews;
  }
}