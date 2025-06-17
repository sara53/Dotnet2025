import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { StaticProductService } from '../../services/static-product-service';
import { IProduct } from '../../models/iproduct';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product-list',
  imports: [RouterLink, CurrencyPipe],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList implements OnInit {
  products: IProduct[] = [];
  constructor(private productService: StaticProductService) {}
  ngOnInit(): void {
    this.products = this.productService.getAllProducts();
  }
  deleteHandler(productId: string) {
    // this.productService.deleteProduct(productId);
    //
  }
}
