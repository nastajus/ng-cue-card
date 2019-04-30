import { Injectable } from '@angular/core';
import { Level } from '../models/level';
import { DbFakeService } from '../services/db-fake.service';

@Injectable({
  providedIn: 'root'
})
export class LeitnerSystemService {

  //responsible for moving individual cue cards between levels. 
  //'depends' on quiz component to iteratively ask user questions of a given day's flash cards

  private _method: LeitnerMethod = LeitnerMethod.Leitner; //TODO: Mock this better
  public get method() { return this._method; }
  public set method(method: LeitnerMethod) { this._method = method; }

  private _levelMax: number = 3; //TODO: Mock this better.
  public get levelMax() { return this._levelMax; }
  public set levelMax(levelMax: number) {
    if (levelMax < 3) {
      throw new RangeError(`Specified level max size ${levelMax} is too small, must be at least 3.`);
    }
    else if (levelMax > 9) {
      throw new RangeError(`Specified level max size ${levelMax} is too large, must be at most 9.`);
    }
    this._levelMax = levelMax;
  }

  private _levels: Level[];

  constructor(dbfake: DbFakeService) {
    //load 
    dbfake.records;

    //initialize
    if (!this._levelMax) { throw new Error("Cannot initialize leitner system, levelMax must be specified first."); }

    for (var i = 0; i < this._levelMax; i++) {
      this._levels.push(new Level(i));
    }
  }

  promote() {

  }

  demote() {

  }

  assignGroup(groupName: string) {
    
  }




}

enum LeitnerMethod { Leitner, LeitnerAlternative, Complex };
