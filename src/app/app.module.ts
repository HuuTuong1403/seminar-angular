//Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Components
import { ReadTimeComponent } from './components/Directives/read-time/read-time.component';
import { HighlightTextComponent } from './components/Directives/highlight-text/highlight-text.component';
import { CustomDirectiveComponent } from './components/Directives/custom-directive/custom-directive.component';
import { DependencyInjectionPage } from './components/DependencyInjection/dependencyInjectionPage.component';
import { AnimationsPage } from './components/Animations/animationsPage.component';
import { PhotoListComponent } from './components/DependencyInjection/photo-list/photo-list.component';

//Directives
import { HighlightDirective } from './directives/highlight.directive';
import { DirectivesPage } from './components/Directives/directivesPage.component';
import { ReadTimeDirective } from './directives/read-time.directive';
import { ScrollToDirective } from './directives/scroll-to.directive';
import { IfNotDirective } from './directives/if-not.directive';

//Material UI
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    ReadTimeComponent,
    HighlightTextComponent,
    ReadTimeDirective,
    DirectivesPage,
    ScrollToDirective,
    IfNotDirective,
    CustomDirectiveComponent,
    DependencyInjectionPage,
    AnimationsPage,
    PhotoListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    HttpClientModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
