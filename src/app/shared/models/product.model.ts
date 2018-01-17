import { Review } from "./review.model";

export class Product{
    _id:string;
    brand:string;
    model:string;
    price:number;
    inStock:boolean;
    reviews:Review[]
}
