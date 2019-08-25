import { Component, OnInit } from '@angular/core';
import * as d3 from "d3";
//import {scaleLinear} from "d3-scale";


@Component({
  selector: 'app-cue-card-ani',
  templateUrl: './cue-card-ani.component.html',
  styleUrls: ['./cue-card-ani.component.scss']
})
export class CueCardAniComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    // d3.select("body").append("span").text("Ani says, Hello world!");
    
  }

}
