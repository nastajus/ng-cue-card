import { Injectable, Output, EventEmitter } from '@angular/core';
import { CueCard } from '../models/cue-card';
import { DbFakeComponent } from '../components/db-fake/db-fake.component';
import { Observable, of, Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CueCardLoaderService {

  private _cueCards: CueCard[] = [];
  public get cueCards() { return this._cueCards; }

  private _cueCardActive: CueCard = null;

  //EventEmitters are implied by documentation to not be used in services, instead to use Obsersables in their place.
  //@Output() cueCardActiveChange: EventEmitter<CueCard> = new EventEmitter<CueCard>();  

  //Observable was not robust enough, needs to be ~~Subject~~, rather, a BehaviorSubject (which *does* accept init param).
  //cueCardActive$: Observable<CueCard> = of(this.cueCardActive);

  cueCardActiveSource: BehaviorSubject<CueCard> = new BehaviorSubject<CueCard>(this._cueCardActive);
  cueCardActive$ = this.cueCardActiveSource.asObservable();

  //debugging side-effect: something breaks when debugging on the first pass, when clicking "Edit" in ccSelector, it doesn't fire the first time. So weird.
  public get cueCardActive() { 
    return this._cueCardActive; 
  }
  public set cueCardActive(cueCard: CueCard) { 
    if (this._cueCards.includes(cueCard) || cueCard === null) { 
      this._cueCardActive = cueCard;

      //nvm event emitters in services
      //this.cueCardActiveChange.emit(cueCard);

      //use rxjs way
      this.cueCardActiveSource.next(cueCard);
    }
    else {
      throw new Error("invalid CueCard, it wasn't included in the existing set! Cannot set active!");
    }
  }



  constructor(private fakeDb: DbFakeComponent) { 
    this._cueCards = this.fakeDb.records;

    // this.cueCardActive$ = new Observable((observer) => {
    //   // observable execution
    //   observer.next(this._cueCardActive);
    // });

    //this.cueCardActive$ = of("bla bla bla");

  }

  public add(cueCard: CueCard) {
    if (cueCard !== null) {
      this._cueCards.push(cueCard)
      // does active cc change now? 
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
      
      // active cc stays active.. well... hmm.... go observe consequences... 

      //nvm event emitters in services
      //this.cueCardActiveChange.emit(ccNew);

      //use rxjs way
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
      this._cueCardActive = null; //this disabled subsequent deletions after first: why? --> "submit in entry" thinks it's adding, which is wrong.

      //nvm event emitters in services
      //this.cueCardActiveChange.emit(null);

      //use rxjs way
      this.cueCardActiveSource.next(null);
    }
    else {
      throw new Error("invalid CueCard, it was null! Cannot add!");
    }
  }

  public getCueCards() : Observable<CueCard[]> {
    return of( this._cueCards );
  }
  // get() : Observable<CueCard> {
  //   return of( new CueCard('test','yo') );
  //   return of( this.fakeDb.records );
  // }

  //here let's say we just return the same item once it's confimed added successfully.
  public postCueCard(val: CueCard) : Observable<CueCard> {
    this.add(val);
    if (this._cueCards.includes(val)) {
      return of(val);
    }
    return of(null); //antipattern ? dunno yet.
  }

}
