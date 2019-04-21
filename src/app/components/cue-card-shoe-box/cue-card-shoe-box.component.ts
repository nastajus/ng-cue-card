import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CueCardLoaderService } from 'src/app/services/cue-card-loader.service';
import data from 'src/app/generated/styles/cue-card-shoe-box';

//var reduceCSSCalc = require('reduce-css-calc');
//import reduceCSSCalc from 'node_modules/reduce-css-calc';
import * as reduceCSSCalc from 'node_modules/reduce-css-calc';

@Component({
  selector: 'app-cue-card-shoe-box',
  templateUrl: './cue-card-shoe-box.component.html',
  styleUrls: ['./cue-card-shoe-box.component.scss']
})
export class CueCardShoeBoxComponent implements OnInit {

  constructor(public ccLoaderService: CueCardLoaderService) { }

  ngOnInit() { }
  ngAfterViewInit() {

    var frontTranslatePixels = this.getCssObject('$box-front-translate-px');
    var front : number = parseInt(reduceCSSCalc(frontTranslatePixels.compiledValue), 10);

    var backTranslatePixels = this.getCssObject('$box-back-translate-px');
    var back : number = parseInt(reduceCSSCalc(backTranslatePixels.compiledValue), 10);

    var boxLength : number = front + back;
    
    //this.ccLoaderService.cueCards.forEach(function(cueCard, index) {
    var i;
    for(i = 0; i < this.ccLoaderService.cueCards.length; i++) {
      var cardPosition = boxLength / this.ccLoaderService.cueCards.length * (i + 1);
      var boxLerpData = this.boxLerp(front, back, cardPosition);
      console.log(boxLerpData);
      var elem = document.getElementById("bcc" + i);
      elem.setAttribute("style", `transform: rotateX(-90deg) rotateY(-90deg) translateZ(${boxLerpData}px)`);
    }
      
    //})
    

  }

  getCssObject(cssPropertyName: string) : { name: string, value: string, compiledValue: string } {
    var result = data.variables.find(obj => {
      return obj.name === cssPropertyName;
    })
    return result;
  }

  boxLerp(boxFront: number, boxBack: number, cardPlacement: number) : number {
    var result: number;
    if (cardPlacement < 0) {
      result = -boxFront;
    }
    else if (cardPlacement < boxFront) {
      result = -cardPlacement;
    }
    else if (cardPlacement === boxFront) {
      result = 0;
    }
    else if (cardPlacement > boxFront && cardPlacement <= (boxFront + boxBack) ) {
      result = cardPlacement - boxFront;
    }
    else if (cardPlacement > (boxFront + boxBack) ) { 
      result = boxFront + boxBack;
    }
    else {
      result = null; //throw error?
    }
    result -= (boxBack - boxFront); //ugh
    return result; 
  }

  //todo: find a better way to use a union type (veritcal bar?) of type script to correctly define 'oneof' for either front or back must always be returned.
  //todo: optimize and tweak this so it looks nice with margins
  //css perspective is weird. 
  // boxLerp(boxFront: number, boxBack: number, cardPlacement: number) : { frontwards?: number, backwards?: number, none?: null } {
  //   if (cardPlacement < 0) {
  //     return { frontwards: boxFront };
  //   }  else if (cardPlacement < boxFront) {
  //     return { frontwards: cardPlacement };
  //   }
  //   else if (cardPlacement === boxFront) {
  //     return { none: null };
  //   }
  //   else if (cardPlacement > boxFront && cardPlacement <= (boxFront + boxBack) ) {
  //     return { backwards: cardPlacement - boxFront };
  //   }
  //   else if (cardPlacement > (boxFront + boxBack) ) { 
  //     return { backwards: boxFront + boxBack };
  //   }
  //   return null;
  // }

}
