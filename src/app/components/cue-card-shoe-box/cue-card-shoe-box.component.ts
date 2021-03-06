import { Component, OnInit, AfterViewInit, AfterViewChecked, QueryList, ViewChildren } from '@angular/core';
import { CueCardLoaderService } from 'src/app/services/cue-card-loader.service';
import sassExport from 'src/app/generated/styles/base';
import * as reduceCSSCalc from 'node_modules/reduce-css-calc';
import { CueCard } from 'src/app/models/cue-card';

@Component({
  selector: 'app-cue-card-shoe-box',
  templateUrl: './cue-card-shoe-box.component.html',
  styleUrls: ['./cue-card-shoe-box.component.scss']
})
export class CueCardShoeBoxComponent implements OnInit, AfterViewInit, AfterViewChecked {

  @ViewChildren('cc') cc: QueryList<any>;

  constructor(public ccLoaderService: CueCardLoaderService) { }

  ngOnInit() { }
  ngAfterViewInit() {

    this.ccLoaderService.cueCards$.subscribe( 
      (cueCards: CueCard[]) => {
        this.rebalanceBoxCardPositions(cueCards);
      }
    );  

    // //first call has *no* changes *yet*, so call directly first time.
    // this.rebalanceBoxCardPositions(this.ccLoaderService.cueCards$);

    // this.cc.changes.subscribe(t => {
    //   //subsequent calls to capture *changes* to model of cueCards, especially additions and deletions, but also modifications will trigger this.
    //   this.rebalanceBoxCardPositions(this.ccLoaderService.cueCards);
    // })
  }

  ngAfterViewChecked() {
    console.log("yo");
  };

  rebalanceBoxCardPositions(cueCards: CueCard[]) {
    // 1) composing by offsets is fun
    var frontTranslatePixels = this.getCssObject('$box-front-translate-px', sassExport);
    var boxFront : number = parseInt(reduceCSSCalc(frontTranslatePixels.compiledValue), 10);
    var backTranslatePixels = this.getCssObject('$box-back-translate-px', sassExport);
    var boxBack : number = parseInt(reduceCSSCalc(backTranslatePixels.compiledValue), 10);
    var boxLength : number = boxFront + boxBack;

    // 2) centers cards in box -- NOTE: centering only works after a *rebuild* (included in a *restart*). 
    var boxWidthPixels = this.getCssObject('$box-width-px', sassExport);
    var boxWidth: number = parseInt(boxWidthPixels.compiledValue, 10);
    var cardWidthPixels = this.getCssObject('$card-in-box-width-px', sassExport);
    var cardWidth: number = parseInt(cardWidthPixels.compiledValue, 10);
    var cardOffsetToCenterX: number = (boxWidth - cardWidth) / 2;

    var boxHeightPixels = this.getCssObject('$box-height-px', sassExport);
    var boxHeight: number = parseInt(boxHeightPixels.compiledValue, 10);
    var cardHeightPixels = this.getCssObject('$card-in-box-height-px', sassExport);
    var cardHeight: number = parseInt(cardHeightPixels.compiledValue, 10);
    var cardOffsetToCenterZ: number = (boxHeight - cardHeight) / 2; 
    var magicNumberLeftOffsetX: number = parseInt(this.getCssObject('$magic-number-left-offset-px', sassExport).compiledValue, 10);
    
    //this is firing before the view updates... hmm.
    for(var i = 0; i < cueCards.length; i++) {
      var cardPosition = boxLength / cueCards.length * (i + 1);
      var boxLerpData = this.lerpCardInBox(boxFront, boxBack, cardPosition);
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
