import { Component, EventEmitter, Output } from '@angular/core';
import { ProductDetails } from '../product-details/product-details';

@Component({
  selector: 'app-products',
  imports: [ProductDetails],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  count: number = 0;
  @Output() addProductEvent = new EventEmitter<number>();
  getNumberOfProduct(numberOfProducts: number) {
    this.count = numberOfProducts;
    this.addProductEvent.emit(this.count);
  }
}
