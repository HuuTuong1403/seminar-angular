import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-directive',
  templateUrl: './custom-directive.component.html',
  styleUrls: ['./custom-directive.component.scss'],
})
export class CustomDirectiveComponent implements OnInit {
  isShow = true;
  label = 'Hide';

  handleShow() {
    this.isShow = !this.isShow;
    this.label = this.isShow ? 'Hide' : 'Show';
  }

  constructor() {}

  ngOnInit(): void {}
}
