import { Component, OnInit, EventEmitter, Input, Output, DebugElement } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'carousel',
  animations: [
    trigger('thumbState', [
      state('inactive', style({
        opacity: 0, transform: 'scale(0.5)'
      })),
      state('active', style({ 
        opacity: 1, transform: 'scale(1)'
      })),
      // cubic-bezier from http://easings.net/
      transition('inactive => active', animate('500ms cubic-bezier(0.785, 0.135, 0.15, 0.86)')),
      transition('active => inactive', animate('500ms cubic-bezier(0.785, 0.135, 0.15, 0.86)'))
    ])
  ],
  templateUrl: './component-carousel.component.html',
  styleUrls: ['./component-carousel.component.css']
})
export class ComponentCarouselComponent implements OnInit {
  @Input() images: Array<string>;
  @Output() change: EventEmitter<number> = new EventEmitter<number>();
  counter = 0;
  message = 1000;
  intervalSetVariable: any;

  ngAfterContentInit() {
    this.change.emit(0); 
  }

  ngOnInit() {
    this.intervalSetVariable = setInterval(() => this.setIntrvl(), 5000);
  }

  setIntrvl(){
    const total = this.images.length - 1;
    this.counter = this.inc(total);
    this.change.emit(this.counter);
  }
 
  onClickThumb(event) {
    const total = this.images.length - 1;
    this.counter = event.layerX < 150 ? this.dec(total) : this.inc(total);
    this.change.emit(this.counter);
  }

  inc(total) {
    return (this.counter < total ) ? this.counter + 1 : 0 ;
  }

  dec(total) {
    return (this.counter > 0 ) ? this.counter - 1 : total ;
  }

  /***Manipuladores setInterval */

  startTimer() {
    this.ngOnInit();
  }
  
  stopTimer() {
    if (this.intervalSetVariable) {
      clearInterval(this.intervalSetVariable);
    }
  }
}