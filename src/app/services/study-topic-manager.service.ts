import { Injectable } from '@angular/core';
import { StudyTopic, Studiable } from '../models/cue-card';
import { DbFakeService } from '../services/db-fake.service';

@Injectable({
  providedIn: 'root'
})
export class StudyTopicManagerService {

  //TODO: probably change to an observable
  private _topics: StudyTopic[];
  public get topics(): StudyTopic[] { return this._topics; } 

  private _studiables: Studiable[];
  public get studiables(): Studiable[] { return this._studiables; } 

  //needs more work...?
  public topicActive: StudyTopic;
  public studiableActive: Studiable; 

  constructor(db: DbFakeService) { 
    this._topics = db.topics;
    this._studiables = db.studiables;

    this.topicActive = db.topicActive;
    this.studiableActive = db.studiableActive;
  }

  add(topic: StudyTopic) {
    if (!this._topics.includes(topic)) {
      this._topics.push(topic);      
    }
    else {
      throw new Error(`Study Topic cannot be added, ${topic} already exists!`)
    }
  }

  //TODO: consider redesigning this... this might be a silly design, requiring to pass in the original and the new... 
  edit(topicNew: StudyTopic, topicOriginal: StudyTopic) {
    if (topicNew && topicOriginal && this._topics.includes(topicOriginal)) {
      let i = this._topics.indexOf(topicOriginal);
      this._topics[i] = topicNew;      
    }
    else { 
      throw new Error(`Cannot edit topic, either invalid type or ${topicOriginal} doesn't exist!`); 
    }
  }

  delete(topic) {
    if (topic) {
      let i = this._topics.indexOf(topic);
      this._topics.splice(i, 1);
      //this._cueCardActive = null;
      //this.cueCardActiveSource.next(null);
      //this.cueCardsSource.next(this._cueCards); 
    }
    else {
      throw new Error(`Cannot delete topic ${this._topics}, something went wrong!`);
    }
  }

  
}
