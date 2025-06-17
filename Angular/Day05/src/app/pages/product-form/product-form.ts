import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { StaticProductService } from '../../services/static-product-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './product-form.html',
  styleUrl: './product-form.css',
})
export class ProductForm {
  constructor(
    private productService: StaticProductService,
    private router: Router
  ) {}
  productForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    price: new FormControl('', Validators.required),
    quantity: new FormControl('', Validators.required),
  });

  get getName() {
    return this.productForm.controls['name'];
  }
  get getPrice() {
    return this.productForm.controls['price'];
  }
  get getQuantity() {
    return this.productForm.controls['quantity'];
  }
  addNewProduct() {
    if (this.productForm.status == 'VALID') {
      const id = (this.productService.products.length + 1).toString();
      let product = { id, ...this.productForm.value };
      this.productService.addNewProduct(product);
      this.router.navigate(['/products']);
    } else {
      console.log('Fix Errors');
    }
  }
}
