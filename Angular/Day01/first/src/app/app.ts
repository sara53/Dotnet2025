import { Component } from '@angular/core';
import { Header } from './components/header/header';
import { Slider } from './components/slider/slider';
import { Products } from './components/products/products';

@Component({
  selector: 'app-root',
  imports: [Header, Slider, Products],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
