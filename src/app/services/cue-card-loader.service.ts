import { Injectable } from '@angular/core';
import { CueCard, Studiable, StudyTopic } from '../models/cue-card';
import { DbFakeService } from '../services/db-fake.service';
import { Observable, of, BehaviorSubject } from 'rxjs';

//TODO: consider removing _cueCards local private var, replacing with direct reference to `dbFake's.records()`
//      one counter reason to keep is: bc maybe don't want to write to database every time, keep in memory -- counter-counter, why not just write db immediately.
//      As I keep coding, I keep thinking the state *should* exist here *as it's own copy*, independent of dbFake.
//      Also, rename from "cc. loader service" to "cc. service" --> clearly doing more than just *loading* now.

//TODO: probably should enhance with error handling when retrieving from 'db'.. esp dupe handle???... right now it just assumes works.

@Injectable({
  providedIn: 'root'
})
export class CueCardLoaderService {

  //EventEmitters are implied by ng documentation to not be used in services, instead to use Obsersables in their place.
  //Observable was not robust enough, needs to be ~~Subject~~, rather, a BehaviorSubject (which *does* accept param for init).

  private _cueCards: CueCard[] = [];
  cueCardsSource: BehaviorSubject<CueCard[]> = new BehaviorSubject<CueCard[]>(this._cueCards); //for now, choosing to emit ENTIRE ARRAY... even if that's too much data when get above exists.
  cueCards$ = this.cueCardsSource.asObservable();

  //(essentially the studiable's active set of cue cards, via .records())
  private _cueCardActive: CueCard = null;
  cueCardActiveSource: BehaviorSubject<CueCard> = new BehaviorSubject<CueCard>(this._cueCardActive);
  cueCardActive$ = this.cueCardActiveSource.asObservable();

  //-----------------------------------------------------------------------------------------------------

  //TODO: WARNING: REMOVE / REDO OTHER INTERFACES IN THIS CLASS (DUE TO THIS ONE)
  //by adding "studiables" + "studiablesActive", and permitting setting, I depreciate the above. this annoys me.
  //THIS replaces _cueCards, BECAUSE it has the META info of topic with it.
  private _studiables: Studiable[] = [];
  studiablesSource: BehaviorSubject<Studiable[]> = new BehaviorSubject<Studiable[]>(this._studiables);
  studiables$ = this.studiablesSource.asObservable();

  private _topicActive: StudyTopic = null;
  topicActiveSource: BehaviorSubject<StudyTopic> = new BehaviorSubject<StudyTopic>(this._topicActive);
  topicActive$ = this.topicActiveSource.asObservable();

  //get topicActive() { return this.topicActive$.subscribe(); } //did this so i can unwrap without template syntax... moving into comp that uses it... recall this being "more correct"

  private _studiableActive: Studiable = null;
  studiableActiveSource: BehaviorSubject<Studiable> = new BehaviorSubject<Studiable>(this._studiableActive);
  studiableActive$ = this.studiableActiveSource.asObservable();
  
  //-----------------------------------------------------------------------------------------------------


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

  //"new" way: use service reference directly.
  //currently i only allow getting, i should redo with both set/get... right? yes. 
  //TODO: debate/decide: "should" this service unwrap db service to pure string level?? yes.. 
  public get topics() {
    return this.fakeDb.topics.map( topics => topics.topic );
  }


  constructor(private fakeDb: DbFakeService) { 
    this._cueCards = this.fakeDb.records;
    //i need to emit this right away ... my design is now RELIANT on this reactive pattern, so, since I'm REMOVING get, this MUST happen.
    this.cueCardsSource.next(this._cueCards);

    this._studiableActive = this.fakeDb.studiableActive;
    this._studiables = this.fakeDb.studiables;

    //this is redundant / a convenience / a duplicate of what's in "studiable active". 
    //i want to keep it for the simplicity of "simple reading"
    //i want to delete it for the simplicity of "keeping only one data source, not two"
    //am upset.
    this._topicActive = this.fakeDb.topicActive;
  }

  
  //TODO: rename all below as editCard, deleteCard, addCard.
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
      throw new Error("invalid CueCard, it was null! Cannot delete!");
    }
  }



  public changeTopic(newTopic: StudyTopic) {
    if (newTopic !== null && this.topics.includes(newTopic.topic)) {
      this._topicActive = newTopic;
      this._studiableActive = this._studiables.find( studiable => studiable.studyTopic.topic === newTopic.topic );
      
      this.topicActiveSource.next(this._studiableActive.studyTopic);
      this.studiableActiveSource.next(this._studiableActive);

      //^^ new way
      //---
      // vv old way, currently supporting to test, to get rid of. (also MIXES new and old, so, ya, bad.)

      this.cueCardActiveSource.next( this._studiableActive.quizCueCards[0] );
      this.cueCardsSource.next( this._studiableActive.quizCueCards ); 

    }
  }


  //move this, experimental, possibly delete
  //https://stackoverflow.com/questions/37607257/rxjs-get-value-from-observable
  //To get data from an observable, you need to subscribe:
  //this.singleEvents$.subscribe(event => this.event = event);




}
