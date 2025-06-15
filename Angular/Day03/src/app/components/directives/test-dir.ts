import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-test-dir',
  imports: [CommonModule],
  templateUrl: './test-dir.html',
  styleUrl: './test-dir.css',
})
export class TestDir {
  flag: boolean = false;

  color: string = 'red';
  toggle() {
    this.flag = !this.flag;
  }
}
