import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { StudyTopicManagerService } from 'src/app/services/study-topic-manager.service';
import { QuizzingCueCard, QuizStatus, CueCard } from 'src/app/models/cue-card';
import { CueCardComponent } from '../cue-card/cue-card.component';


// responsible for administering a session's test of this set of cue cards, as it progresses through the leitner-system.
// does not track multiple attempts in a single session, deliberately to mirror website design at `ncase.me/remember`, but also to be forgiving to learners.
  @Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  quizzingCard: QuizzingCueCard[] = [];
  //quizzingCard2: QuizzingCueCard;
  quizzingRemains: QuizzingCueCard[];

  //private _showButtons: boolean = false;
  hasSeenBack: boolean = false; 
  cardsLeft: number;

  slideAnimDone: boolean = false;

  constructor(stm: StudyTopicManagerService) {
    this.pickQuizCard(stm.studiableActive.quizCueCards); //test .. well.. expect since 'pass-by-val' then it'll be a copy... as all functions in javascript are...or wait, 
  }

  ngOnInit() {
  }

  @ViewChild(CueCardComponent)
  private cueCardComp: CueCardComponent;

  hasRecalled;
  
  pickQuizCard(quizCueCards: QuizzingCueCard[]) {
    //filter out cards successfully recalled
    this.quizzingRemains = quizCueCards.filter(qcc => qcc.recall !== QuizStatus.pass);
    
    //serve all non-attempted once in order, then serve any remaining un-passed in random order.
    let nonAttempted = this.quizzingRemains.filter(qcc => !qcc.attempted)
    this.cardsLeft = this.quizzingRemains.length;

    if (nonAttempted.length > 0) {
      this.quizzingCard.push(this.quizzingRemains.find(qcc => !qcc.attempted));
    }
    else if (this.quizzingRemains.length > 0) {
      let index = Math.floor(Math.random() * this.quizzingRemains.length);
      this.quizzingCard.push(this.quizzingRemains[ index ]);
      console.log(index, this.quizzingCard);
    }
    else {
      //no cards left to quiz anymore
      this.quizzingCard = null;

      //this.quizzingCard = new QuizzingCueCard();
      //this.quizzingCard.visible = false;
    }

    //reset
    this.hasSeenBack = false;
  }

  yahRecalled(qcc: QuizzingCueCard) {
    qcc.recall = QuizStatus.pass;
    this.pickQuizCard(this.quizzingRemains);
    //slide out, show to front
    
    this.cueCardComp.hasRecalled = true;
    //if (this.quizzingCard) 
  }

  //at some point, enough clicks here somehow stops the "auto-flip" happening.
  nahForgot(qcc: QuizzingCueCard) {
    qcc.recall = QuizStatus.fail;
    qcc.attempted = true;
    this.pickQuizCard(this.quizzingRemains);
  }

  showButtons($event) {
    this.hasSeenBack = $event;
  }

  onSlideUnderDone() {
    //this.slideAnimDone = true;
    this.setAsPrimaryCard();
  }

  setAsPrimaryCard() {
    this.quizzingCard[0] = this.quizzingCard[1];
    this.quizzingCard.splice(-1, 1);
  }

}

//most advanced stage of visibility progression, hence named "seen" 
//enum SideSeen { /*None,*/ Front, FrontAndBack }
//enum ShowCountButtons { Count, Buttons }
