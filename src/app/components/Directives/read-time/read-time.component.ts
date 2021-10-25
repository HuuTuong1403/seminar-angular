import { Component } from '@angular/core';

@Component({
  selector: 'app-read-time',
  templateUrl: './read-time.component.html',
  styleUrls: ['./read-time.component.scss'],
})
export class ReadTimeComponent {
  readTime: string = "";
  onReadTimeCalculated(readTimeStr: string) {
    this.readTime = readTimeStr;
  }
}
