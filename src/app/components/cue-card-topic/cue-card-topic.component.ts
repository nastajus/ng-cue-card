import { Component, OnInit } from '@angular/core';
import { CueCardLoaderService } from 'src/app/services/cue-card-loader.service';
import { StudyTopic } from 'src/app/models/cue-card';

@Component({
  selector: 'app-cue-card-topic',
  templateUrl: './cue-card-topic.component.html',
  styleUrls: ['./cue-card-topic.component.scss']
})
export class CueCardTopicComponent implements OnInit {

  constructor(public ccLoaderService: CueCardLoaderService) { 
    
  }

  get topicActive() { return this.ccLoaderService.topicActive$.subscribe( 
    //t => t.topic
    //    t => JSON.stringify(t.topic)
    t => console.log(t)
    )
    ; 
  } //did this so i can unwrap directly in template... that syntax was too convoluted (read: unknown) to care.


  ngOnInit() {
  }

  sz = (this.ccLoaderService.topics.length <= 10) ? this.ccLoaderService.topics.length : 10;

  setTopic(topic: string) { 
    this.ccLoaderService.changeTopic( new StudyTopic(topic) );
  }

}
