import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  name: string = '';
  password: string = '';
  //
  login() {
    console.log(this.name);
    console.log(this.password);
  }
}
