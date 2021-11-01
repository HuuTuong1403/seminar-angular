import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ROUTE_ANIMATION } from './constants/animation';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ROUTE_ANIMATION],
})
export class AppComponent {
  @ViewChild(RouterOutlet) routerOutlet!: RouterOutlet;
 
  getRouteAnimationState() {
    // if (this.routerOutlet && this.routerOutlet.activatedRouteData) {
    //     return this.routerOutlet.activatedRouteData.animation;
    // }
    return this.routerOutlet?.activatedRouteData?.animation;
  }
}
