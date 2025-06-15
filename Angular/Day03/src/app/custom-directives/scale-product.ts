import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appScaleProduct]',
})
export class ScaleProduct {
  constructor(private element: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.element.nativeElement.style.transform = 'scale(1.1)';
    this.element.nativeElement.style.transition = 'all 0.5s ease-in-out';
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.element.nativeElement.style.transform = 'scale(1)';
    this.element.nativeElement.style.transition = 'all 0.5s ease-in-out';
  }
}
