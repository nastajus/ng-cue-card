import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CueCardLoaderService } from 'src/app/services/cue-card-loader.service';
import data from 'src/app/generated/styles/cue-card-shoe-box';
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
    
    var i;
    for(i = 0; i < this.ccLoaderService.cueCards.length; i++) {
      var cardPosition = boxLength / this.ccLoaderService.cueCards.length * (i + 1);
      var boxLerpData = this.boxLerp(front, back, cardPosition);
      console.log(boxLerpData);
      var elem = document.getElementById("bcc" + i);
      elem.setAttribute("style", `transform: rotateX(-90deg) rotateY(-90deg) translateZ(${boxLerpData}px)`);
    }
      
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

}
