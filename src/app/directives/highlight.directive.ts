import {
  Directive,
  Input,
  SimpleChanges,
  OnChanges,
  OnInit,
  OnDestroy,
  ElementRef,
} from '@angular/core';

export enum HighlightColor {
  Yellow = 'yellow',
  LightGreen = 'lightgreen',
  LightCoral = 'lightcoral',
  Red = 'red',
}

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective implements OnChanges {
  @Input() highlightText = '';
  @Input() highlightColor = '';
  originalHTML = '';

  constructor(private el: ElementRef) {}

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    if (changes.highlightText.firstChange) {
      this.originalHTML = this.el.nativeElement.innerHTML;
      return;
    }
    const { currentValue } = changes.highlightText;
    if (currentValue) {
      const regExp = new RegExp(`(${currentValue})`, 'gi');
      this.el.nativeElement.innerHTML = this.originalHTML.replace(
        regExp,
        `<span style="background-color: ${this.highlightColor}">\$1</span>`
      );
    } else {
      this.el.nativeElement.innerHTML = this.originalHTML;
    }
  }
}
