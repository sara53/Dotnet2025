import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { StaticProductService } from '../../services/static-product-service';
import { Router, ActivatedRoute } from '@angular/router';
import { DynamicProductServices } from '../../services/dynamic-product-services';

@Component({
  selector: 'app-product-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './product-form.html',
  styleUrl: './product-form.css',
})
export class ProductForm implements OnInit {
  productId: any;
  constructor(
    private productService: DynamicProductServices,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    // get Id -- observable
    this.activatedRoute.paramMap.subscribe({
      next: (params) => {
        this.productId = params.get('id');
        this.getName.setValue('');
        this.getPrice.setValue('');
        this.getQuantity.setValue('');
      },
    });
    // this.productId = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.productId != 0) {
      this.productService.getProductById(this.productId).subscribe({
        next: (response) => {
          this.getName.setValue(response.name);
          this.getPrice.setValue(response.price.toString());
          this.getQuantity.setValue(response.quantity.toString());
        },
      });
    }
  }
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
      if (this.productId == 0) {
        this.productService.addNewProduct(this.productForm.value).subscribe({
          next: () => {
            this.router.navigate(['/products']);
          },
        });
      } else {
        this.productService
          .editProduct(this.productId, this.productForm.value)
          .subscribe({
            next: () => {
              this.router.navigate(['/products']);
            },
          });
      }
    } else {
      console.log('Fix Errors');
    }
  }
}
