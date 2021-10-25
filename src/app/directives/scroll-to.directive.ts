import { Directive, Input, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appScrollTo]',
})
export class ScrollToDirective {
  @Input() target = '';

  constructor(private el: ElementRef) {}

  @HostListener('click')
  onClick() {
    const targetElement = document.querySelector(this.target);
    targetElement?.scrollIntoView({ behavior: 'smooth', inline: 'nearest' });
  }
}
