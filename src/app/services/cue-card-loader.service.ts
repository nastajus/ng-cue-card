import { Injectable } from '@angular/core';
import { CueCard } from '../models/cue-card';
import { DbFakeComponent } from '../components/db-fake/db-fake.component';
import { Observable, of, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CueCardLoaderService {

  private _cueCards: CueCard[] = [];
  public get cueCards() { return this._cueCards; }

  //EventEmitters are implied by ng documentation to not be used in services, instead to use Obsersables in their place.
  //Observable was not robust enough, needs to be ~~Subject~~, rather, a BehaviorSubject (which *does* accept param for init).

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
    }
    else {
      throw new Error("invalid CueCard, it wasn't included in the existing set! Cannot set active!");
    }
  }

  constructor(private fakeDb: DbFakeComponent) { 
    this._cueCards = this.fakeDb.records;
  }

  public add(cueCard: CueCard) {
    if (cueCard !== null) {
      this._cueCards.push(cueCard)
      //TODO: decide if active cc should change now? currently, nope.
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
    }
    else { 
      throw new Error("invalid CueCard, it as null or not found! Cannot edit!")
    }
  }

  public delete(cueCard: CueCard) {
    if (cueCard !== null) {
      let i = this._cueCards.indexOf(cueCard);
      this._cueCards.splice(i, 1);
      this._cueCardActive = null;
      this.cueCardActiveSource.next(null);
    }
    else {
      throw new Error("invalid CueCard, it was null! Cannot add!");
    }
  }

  public getCueCards() : Observable<CueCard[]> {
    return of( this._cueCards );
  }

}
