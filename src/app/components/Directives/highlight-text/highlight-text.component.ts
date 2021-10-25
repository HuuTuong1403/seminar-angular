import { Component } from '@angular/core';
import { HighlightColor } from '../../../directives/highlight.directive';

@Component({
  selector: 'app-highlight-text',
  templateUrl: './highlight-text.component.html',
  styleUrls: ['./highlight-text.component.scss'],
})
export class HighlightTextComponent {
  searchText = '';
  hColor: HighlightColor = HighlightColor.Yellow;
}
