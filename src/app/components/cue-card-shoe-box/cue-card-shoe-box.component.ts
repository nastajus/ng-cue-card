import { Component, OnInit, AfterViewInit, ViewChild, QueryList, ViewChildren } from '@angular/core';
import { CueCardLoaderService } from 'src/app/services/cue-card-loader.service';
import sassExport from 'src/app/generated/styles/base';
import * as reduceCSSCalc from 'node_modules/reduce-css-calc';
import { CueCard } from 'src/app/models/cue-card';

@Component({
  selector: 'app-cue-card-shoe-box',
  templateUrl: './cue-card-shoe-box.component.html',
  styleUrls: ['./cue-card-shoe-box.component.scss']
})
export class CueCardShoeBoxComponent implements OnInit, AfterViewInit {

  @ViewChildren('cc') cc: QueryList<any>;

  constructor(public ccLoaderService: CueCardLoaderService) { 
    /*
    ccLoaderService.cueCards$.subscribe(
      //(cueCards: CueCard[]) => {
      //so I actually don't care WHAT the response is YET, BECAUSE my non-observable interface using ~service.get()~ does the job currently.
      //so for the MOMENT, I can ENTIRELY DISCARD this whole array, and simply use THE CHANGE EVENT ITSELF to just INVOKE `rebalanceBoxCardPositions()`
      //HENCE the syntax convention of using simply `_` underscore to indicate DO NOT CARE ABOUT WHATEVER parameter type is incoming, it'll be ignored.
      //(_) => {
      //BUT ACTUALLY I *WILL* keep the typed cards array, cuz I already have a cleaner reference here, and I *INTEND* to *REMOVE* getters.
      //which i see now as problematic. issuing the raw model as the update source, is completely detached from any view-model updates, get errors below.
      //AND SO...UMM... this still triggers an error... and I *DON'T GET WHY*... *BUT* IT WORKS *WITHOUT* THIS... so... time to delete it... 
      //oh right because the equivalent of this IS ALREADY HAPPENING WITH THE PIPE ASYNC I put in the template.
      //so this is literally the 'broken duplicate' way, so, get rid of this.
      (cueCards: CueCard[]) => {
        if (cueCards.length === 0) { return; } 
        this.rebalanceBoxCardPositions(cueCards);
      }
    );
    */
  }

  ngOnInit() { }
  ngAfterViewInit() {
    //this.rebalanceBoxCardPositions(this.ccLoaderService.cueCards);
    //TODO: transform this to unwrap observable version of cueCards$ instead later.
    //this.rebalanceBoxCardPositions(this.ccLoaderService.cueCards$.);

    //first call has *no* changes *yet*, so call directly first time.
    this.rebalanceBoxCardPositions(this.ccLoaderService.cueCards);

    this.cc.changes.subscribe(t => {
      //subsequent calls to capture *changes* to model of cueCards, especially additions and deletions, but also modifications will trigger this.
      this.rebalanceBoxCardPositions(this.ccLoaderService.cueCards);
    })
  }

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
    
    for(var i = 0; i < this.ccLoaderService.cueCards.length; i++) {
      var cardPosition = boxLength / this.ccLoaderService.cueCards.length * (i + 1);
      var boxLerpData = this.lerpCardInBox(boxFront, boxBack, cardPosition);
      //console.log(boxLerpData);
      var elem = document.getElementById("bcc" + i);
      elem.setAttribute("style", `transform: rotateX(-90deg) rotateY(-90deg) translateZ(${cardOffsetToCenterZ + boxLerpData}px) translateX(${cardOffsetToCenterX + magicNumberLeftOffsetX}px)`); //ERROR TypeError: Cannot read property 'setAttribute' of null -- happens cz this triggers when the DOM hasn't updated yet, and this change requires the DOM to do. i'm triggering this rebalance too soon. instead this needs to be triggered from this shoebox comp *listening* to updates, internally here.... well, nuts, i *am* doing *that*... it's just too early in the life-cycle... i need to let the view finish updating first... how? 
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
