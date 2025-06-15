import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails {
  productNumber: number = 0;

  @Output() onAddNewProduct = new EventEmitter<number>();
  addNewProduct() {
    this.productNumber += 1;
    this.onAddNewProduct.emit(this.productNumber);
  }
}
