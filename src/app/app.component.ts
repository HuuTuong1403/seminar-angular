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
  // @ViewChild(RouterOutlet) routerOutlet: any;
  // this.routerOutlet &&
  //     this.routerOutlet.activatedRouteData &&
  //     this.outlet.activatedRouteData.transitionState
  getRouteAnimationState(outlet: RouterOutlet) {
    return outlet?.activatedRouteData?.animation;
  }
}
