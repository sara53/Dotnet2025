import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-content',
  imports: [],
  templateUrl: './content.html',
  styleUrl: './content.css',
})
export class Content {
  orgName: string = 'ITI';

  @Output() myEvent = new EventEmitter<string>();

  sendData() {
    this.myEvent.emit(this.orgName);
  }
}
