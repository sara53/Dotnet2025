import { CommonModule } from '@angular/common';
import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { SharedCard } from '../../../shared/shared-card/shared-card';
import { TruncatePipe } from '../../../custom/truncate-pipe';

@Component({
  selector: 'app-product-details',
  imports: [CommonModule, SharedCard, TruncatePipe],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails
  implements OnInit, OnChanges, AfterViewInit, AfterContentInit, OnDestroy
{
  currentDate: Date = new Date();
  previousPrice: any;
  @ViewChild('h2') element!: ElementRef;
  constructor() {
    console.log('1- Ctor');
  }
  ngOnDestroy(): void {
    console.log('OnDestroy');
  }
  ngAfterContentInit(): void {
    console.log('After Content Init');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('2-OnChanges');
    if (!changes['product'].firstChange) {
      this.previousPrice = changes['product'].previousValue.price;
    }
  }
  ngOnInit(): void {
    console.log('3-OnInit');
  }

  ngAfterViewInit(): void {
    console.log('After View Init');
    console.log('Element ', this.element);
  }
  // method
  trackName: string = 'Dotnet';

  // fire
  @Output() myEvent = new EventEmitter<string>();
  @Input() orgName: string = '';
  @Input() product!: {
    id: number;
    name: string;
    price: number;
  };
}
