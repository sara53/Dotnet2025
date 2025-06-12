import { Component } from '@angular/core';
import { TestOneWay } from './components/oneWayBinding/test-one-way';
import { TwoWayBinding } from './components/twoWayBinding/two-way-binding';
import { Login } from './components/login/login';
import { TestStructDirectives } from './components/Directives/Structural Directives/test-struct-directives';
import { Home } from './components/home/home';

@Component({
  selector: 'app-root',
  imports: [TestOneWay, TwoWayBinding, Login, TestStructDirectives, Home],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'Day02';
}
