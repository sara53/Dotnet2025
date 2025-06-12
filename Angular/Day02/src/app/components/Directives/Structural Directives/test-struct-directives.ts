import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Login } from '../../login/login';

@Component({
  selector: 'app-test-struct-directives',
  imports: [CommonModule, Login],
  templateUrl: './test-struct-directives.html',
  styleUrl: './test-struct-directives.css',
})
export class TestStructDirectives {
  flag: boolean = false;
  color = 'gf';
  products: { id: number; name: string; price: number }[] = [
    {
      id: 1,
      name: 'Book',
      price: 200,
    },
    {
      id: 2,
      name: 'Pen',
      price: 20,
    },
    {
      id: 3,
      name: 'watch',
      price: 400,
    },
  ];

  toggle() {
    this.flag = !this.flag;
  }
  // products: { id: number; name: string; price: number }[] = [];
}
