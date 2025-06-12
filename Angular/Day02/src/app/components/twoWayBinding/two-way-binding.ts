import { Component } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  imports: [],
  templateUrl: './two-way-binding.html',
  styleUrl: './two-way-binding.css',
})
export class TwoWayBinding {
  // viewChild == Search ==
  tempData: string = '';
  execute(element: any) {
    console.log(element.textContent);
  }
  getInputValue(input: any) {
    this.tempData = input.value;
  }
}
