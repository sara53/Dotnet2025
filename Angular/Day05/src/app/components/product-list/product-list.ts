import {
  ChangeDetectorRef,
  Component,
  inject,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { StaticProductService } from '../../services/static-product-service';
import { IProduct } from '../../models/iproduct';
import { CurrencyPipe } from '@angular/common';
import { DynamicProductServices } from '../../services/dynamic-product-services';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-list',
  imports: [RouterLink, CurrencyPipe],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList implements OnInit, OnDestroy {
  products: IProduct[] = [];
  mySub1!: Subscription;

  constructor(
    private productService: DynamicProductServices,
    private cdr: ChangeDetectorRef
  ) {}
  ngOnDestroy(): void {
    this.mySub1.unsubscribe();
  }
  ngOnInit(): void {
    this.mySub1 = this.productService.getAllProducts().subscribe({
      next: (response) => {
        this.products = response;
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
  deleteHandler(productId: string) {
    this.productService.deleteProduct(productId).subscribe({
      next: () => {
        this.products = this.products.filter(
          (product) => product.id != productId
        );
        this.cdr.detectChanges();
      },
    });
  }
}
