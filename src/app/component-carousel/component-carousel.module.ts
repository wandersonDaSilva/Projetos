import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentCarouselComponent } from './component-carousel.component'

@NgModule({
imports:[BrowserAnimationsModule,
        BrowserModule,
        FormsModule
    ],
    declarations: [ComponentCarouselComponent],
    exports: [ComponentCarouselComponent]
})
export class ComponentCarouselModule { }
