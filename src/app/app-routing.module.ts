import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DirectivesPage } from './components/Directives/directivesPage.component';
import { DependencyInjectionPage } from './components/DependencyInjection/dependencyInjectionPage.component';
import { PhotoListComponent } from './components/DependencyInjection/photo-list/photo-list.component';
const routes: Routes = [
  {
    path: 'directives',
    component: DirectivesPage,
    data: {
      animation: 'DirectivesPage',
    },
  },
  {
    path: 'dependency-injection',
    component: DependencyInjectionPage,
    data: {
      animation: 'DependencyInjectionPage',
    },
  },
  {
    path: 'dependency-injection/:id',
    component: PhotoListComponent,
  },
  { path: '', pathMatch: 'full', redirectTo: '/directives' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
