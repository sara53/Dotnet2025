import { Component } from '@angular/core';
import { TestDir } from './components/directives/test-dir';
import { Login } from './components/component interactions/login/login';
import { StudentList } from './components/component interactions/student-list/student-list';
import { Content } from './components/component interactions/content/content';
import { createLinkedSignal } from '@angular/core/primitives/signals';
import { Products } from './components/products/products';
import { Navbar } from './components/navbar/navbar';
import { ScaleProduct } from './custom-directives/scale-product';

@Component({
  selector: 'app-root',
  imports: [
    TestDir,
    Login,
    StudentList,
    Content,
    Products,
    Navbar,
    ScaleProduct,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  orgName: string = '';
  protected title = 'Day03';
  trackName: string = 'Dotnet';
  productCount: number = 0;

  getData(data: string) {
    this.orgName = data;
  }
  getProducts(productsCount: number) {
    this.productCount = productsCount;
  }
}
