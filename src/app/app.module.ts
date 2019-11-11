import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentCarouselModule } from './component-carousel/component-carousel.module';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AngularFontAwesomeModule,
    BrowserAnimationsModule,
    ComponentCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
