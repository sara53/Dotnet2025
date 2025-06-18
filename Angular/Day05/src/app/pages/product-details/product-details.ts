import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Shared } from '../../shared/shared';
import { StaticProductService } from '../../services/static-product-service';
import { IProduct } from '../../models/iproduct';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DynamicProductServices } from '../../services/dynamic-product-services';

@Component({
  selector: 'app-product-details',
  imports: [Shared, RouterLink],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails implements OnInit {
  product?: IProduct;
  productId!: string | null;

  constructor(
    private productService: DynamicProductServices,
    private activatedRoute: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ) {}
  ngOnInit(): void {
    this.productId = this.activatedRoute.snapshot.paramMap.get('id');
    this.productService.getProductById(this.productId).subscribe({
      next: (response) => {
        this.product = response;
        this.cdr.detectChanges();
      },
    });
  }
}
