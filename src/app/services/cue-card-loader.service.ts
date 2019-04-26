import { Injectable } from '@angular/core';
import { CueCard } from '../models/cue-card';
import { DbFakeComponent } from '../components/db-fake/db-fake.component';
import { Observable, of, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CueCardLoaderService {

  //EventEmitters are implied by ng documentation to not be used in services, instead to use Obsersables in their place.
  //Observable was not robust enough, needs to be ~~Subject~~, rather, a BehaviorSubject (which *does* accept param for init).

  private _cueCards: CueCard[] = [];
  cueCardsSource: BehaviorSubject<CueCard[]> = new BehaviorSubject<CueCard[]>(this._cueCards); //for now, choosing to emit ENTIRE ARRAY... even if that's too much data when get above exists.
  cueCards$ = this.cueCardsSource.asObservable(); 

  private _cueCardActive: CueCard = null;
  cueCardActiveSource: BehaviorSubject<CueCard> = new BehaviorSubject<CueCard>(this._cueCardActive);
  cueCardActive$ = this.cueCardActiveSource.asObservable();

  //debugging side-effect: something breaks when debugging on the first pass, when clicking "Edit" in ccSelector, it doesn't fire the first time. So weird.
  public get cueCardActive() { 
    return this._cueCardActive; 
  }
  public set cueCardActive(cueCard: CueCard) { 
    if (this._cueCards.includes(cueCard) || cueCard === null) { 
      this._cueCardActive = cueCard;
      this.cueCardActiveSource.next(cueCard);
      this.cueCardsSource.next(this._cueCards);
    }
    else {
      throw new Error("invalid CueCard, it wasn't included in the existing set! Cannot set active!");
    }
  }

  constructor(private fakeDb: DbFakeComponent) { 
    this._cueCards = this.fakeDb.records;
    //i need to emit this right away ... my design is now RELIANT on this reactive pattern, so, since I'm REMOVING get, this MUST happen.
    this.cueCardsSource.next(this._cueCards);
  }

  //Deliberately *NOT* forcing what is active in the service when adding. That sholud purely be a view-user decision, should be a decoupled responsibility 
  public add(cueCard: CueCard) {
    if (cueCard !== null) {
      this._cueCards.push(cueCard)
      this.cueCardsSource.next(this._cueCards); 
    }
    else {
      throw new Error("invalid CueCard, it was null! Cannot add!");
    }
  }

  public edit(ccOriginal: CueCard, ccNew: CueCard) {
    if (ccNew != null && ccOriginal !== null && this._cueCards.includes(ccOriginal)) {
      //replace with new object
      let i = this._cueCards.indexOf(ccOriginal);
      this._cueCards[i] = ccNew;
      this.cueCardActiveSource.next(ccNew);
      this.cueCardsSource.next(this._cueCards);
    }
    else { 
      throw new Error("invalid CueCard, it is null or not found! Cannot edit!")
    }
  }

  public delete(cueCard: CueCard) {
    if (cueCard !== null) {
      let i = this._cueCards.indexOf(cueCard);
      this._cueCards.splice(i, 1);
      this._cueCardActive = null;
      this.cueCardActiveSource.next(null);
      this.cueCardsSource.next(this._cueCards); 
    }
    else {
      throw new Error("invalid CueCard, it was null! Cannot add!");
    }
  }
}
