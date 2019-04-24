import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CueCardLoaderService } from 'src/app/services/cue-card-loader.service';
import sassShoeBox from 'src/app/generated/styles/cue-card-shoe-box';
import sassCueCard from 'src/app/generated/styles/cue-card';
import * as reduceCSSCalc from 'node_modules/reduce-css-calc';

@Component({
  selector: 'app-cue-card-shoe-box',
  templateUrl: './cue-card-shoe-box.component.html',
  styleUrls: ['./cue-card-shoe-box.component.scss']
})
export class CueCardShoeBoxComponent implements OnInit, AfterViewInit {

  constructor(public ccLoaderService: CueCardLoaderService) { }

  ngOnInit() { }
  ngAfterViewInit() {

    // 1) composing by offsets is fun
    var frontTranslatePixels = this.getCssObject('$box-front-translate-px', sassShoeBox);
    var boxFront : number = parseInt(reduceCSSCalc(frontTranslatePixels.compiledValue), 10);
    var backTranslatePixels = this.getCssObject('$box-back-translate-px', sassShoeBox);
    var boxBack : number = parseInt(reduceCSSCalc(backTranslatePixels.compiledValue), 10);
    var boxLength : number = boxFront + boxBack;

    // 2) centers cards in box -- NOTE: centering only works after a *rebuild* (included in a *restart*). 
    var boxWidthPixels = this.getCssObject('$box-width-px', sassShoeBox);
    var boxWidth: number = parseInt(boxWidthPixels.compiledValue, 10);
    var cardWidthPixels = this.getCssObject('$card-in-box-width-px', sassCueCard);
    var cardWidth: number = parseInt(cardWidthPixels.compiledValue, 10);
    var cardOffsetToCenterX: number = (boxWidth - cardWidth) / 2;

    var boxHeightPixels = this.getCssObject('$box-height-px', sassShoeBox);
    var boxHeight: number = parseInt(boxHeightPixels.compiledValue, 10);
    var cardHeightPixels = this.getCssObject('$card-in-box-height-px', sassCueCard);
    var cardHeight: number = parseInt(cardHeightPixels.compiledValue, 10);
    var cardOffsetToCenterZ: number = (boxHeight - cardHeight) / 2; 
    var magicNumberLeftOffsetX: number = parseInt(this.getCssObject('$magic-number-left-offset-px', sassCueCard).compiledValue, 10);
    
    for(var i = 0; i < this.ccLoaderService.cueCards.length; i++) {
      var cardPosition = boxLength / this.ccLoaderService.cueCards.length * (i + 1);
      var boxLerpData = this.lerpCardInBox(boxFront, boxBack, cardPosition);
      //console.log(boxLerpData);
      var elem = document.getElementById("bcc" + i);
      elem.setAttribute("style", `transform: rotateX(-90deg) rotateY(-90deg) translateZ(${cardOffsetToCenterZ + boxLerpData}px) translateX(${cardOffsetToCenterX + magicNumberLeftOffsetX}px)`);
    }
      
  }

  //TODO: put in utils class or something
  getCssObject(cssPropertyName: string, searchSassExportObject: { variables: { name: string, value: string, compiledValue: string }[] } ) 
    : { name: string, value: string, compiledValue: string } {
    var result = searchSassExportObject.variables.find(obj => {
      return obj.name === cssPropertyName;
    })
    return result;
  }

  lerpCardInBox(boxFront: number, boxBack: number, cardPlacement: number) : number {
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
