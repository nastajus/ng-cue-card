import { Injectable } from '@angular/core';
import { CueCard } from '../models/cue-card';
import { DbFakeComponent } from '../components/db-fake/db-fake.component';

@Injectable({
  providedIn: 'root'
})
export class CueCardLoaderService {

  private _cueCards: CueCard[] = [];
  public get cueCards() { return this._cueCards; }

  constructor(private fakeDb: DbFakeComponent) { 
    this._cueCards = this.fakeDb.records;
  }

  public add(cueCard: CueCard) {
    if (cueCard !== null) {
      this._cueCards.push(cueCard)
    }
    else {
      throw new Error("invalid CueCard, it was null!");
    }
  }
}
