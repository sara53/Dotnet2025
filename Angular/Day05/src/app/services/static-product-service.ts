import { Injectable } from '@angular/core';
import { IProduct } from '../models/iproduct';

@Injectable({
  providedIn: 'root',
})
export class StaticProductService {
  products: IProduct[] = [];
  constructor() {
    this.products = [
      {
        id: '1',
        name: 'Book',
        price: 200,
        quantity: 20,
      },
      {
        id: '2',
        name: 'Pen',
        price: 100,
        quantity: 60,
      },
      {
        id: '3',
        name: 'watch',
        price: 60,
        quantity: 60,
      },
    ];
  }

  getAllProducts(): IProduct[] {
    return this.products;
  }

  getProductById(productId: string | null): IProduct | undefined {
    return this.products.find((product) => product.id == productId);
  }

  addNewProduct(product: any): IProduct[] {
    this.products.push(product);
    return this.products;
  }
  editProduct() {}
  deleteProduct(productId: string | null) {}
}
