import { Component } from '@angular/core';
import { ProductDetails } from './product-details/product-details';

@Component({
  selector: 'app-products',
  imports: [ProductDetails],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  trackName: string = '';
  orgName: string = 'ITI';
  product: { id: number; name: string; price: number } = {
    id: 1,
    name: 'Book',
    price: 400,
  };

  getTrackName(data: string) {
    this.trackName = data;
  }
  getOffer() {
    this.product = { ...this.product, price: 200 };
  }
}
