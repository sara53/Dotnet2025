import { Component } from '@angular/core';
import { Products } from './components/products/products';
import { SharedCard } from './shared/shared-card/shared-card';
import { ProductDetails } from './components/products/product-details/product-details';

@Component({
  selector: 'app-root',
  imports: [Products, SharedCard, ProductDetails],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'Day04';
}
