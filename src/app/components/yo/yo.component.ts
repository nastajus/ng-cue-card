import { Component, OnInit, ElementRef } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { HostBinding, ViewChild } from '@angular/core';
@Component({
  selector: 'app-yo',
  templateUrl: './yo.component.html',
  styleUrls: ['./yo.component.scss'],
  animations: [
    trigger('yo', [
      transition('void => *', [
        style({ transform: 'translateX(-100%)'}),
        animate('1s')
      ]),
      transition('* => void', [
        // style({ transform: 'translateX(-100%)'}),
        // animate('1s')

        animate('1s', style({ transform: 'translateX(-100%)'}))
        //animate(500, style({opacity:0}))
      ])
    ]),
    // trigger('flyInOut', [
    //   transition(':enter', [
    //     style({transform: 'translateX(-100%)'}),
    //     animate(500, style({transform: 'translateX(0)'}))
    //   ]),
    //   transition(':leave', [
    //     style({transform: 'translateX(0)'}),
    //     animate(500, style({transform: 'translateX(100%)'}))
    //   ])
    // ])
  ]
})
export class YoComponent implements OnInit {

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
  }

  destroyMe() {
    //this.elementRef.nativeElement.remove();
    this.vis = !this.vis;
    console.log(this.vis);
  }

  vis = true;

}
