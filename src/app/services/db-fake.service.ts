import { Injectable } from '@angular/core';
import { CueCard, Studiable, StudyTopic } from '../models/cue-card';

@Injectable({
  providedIn: 'root'
})
export class DbFakeService {

  private _records: CueCard[];
  public get records() { return this._records; }

  private _topics: StudyTopic[];
  public get topics(): StudyTopic[] { return this._topics; };

  private _studiables: Studiable[];
  public get studiables() { return this._studiables; }

  public topicActive: StudyTopic;
  public studiableActive: Studiable;

  //this will be used to fake store in a database for the time being.
  //intend this to be written more generically than just "cue card db".
  constructor() { 
    this._records = [
      //the topic is necessarily something i know *VERY* WELL, so I don't 
      //get bogged down in researching unimportant facts I would care about.
      //ideally something I consider so trivial as it takes near-zero effort.
      //yet still factually verifiable externally
      new CueCard("Super Mario Bros is for what platform?", "Nintendo"),
      new CueCard("The first female protagonist in video games is named ____ ?", "Samus"),
      new CueCard("The code to unlock 30 bonus lives in Contra III is?", "up down up down left right left right a b"),
      new CueCard("The Super Famicom was released in what year?") //no idea---deliberately no answer.
    ];

    this._topics = [ 
      new StudyTopic("video games")
    ];

    this._studiables = [];
    this._studiables.push(
      new Studiable(this.topics[0], this.records.slice(1) )
    );
    
    this.studiableActive = this._studiables[0];
  }
}
