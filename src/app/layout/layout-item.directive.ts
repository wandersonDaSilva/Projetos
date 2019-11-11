import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[carouselItem]',
})
export class LayoutItemDirective {
  constructor(public tpl: TemplateRef<any>) {}
}