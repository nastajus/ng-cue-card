import { Component, OnInit } from '@angular/core';
import { StudyTopicManagerService } from 'src/app/services/study-topic-manager.service';
import { QuizzingCueCard, QuizStatus, CueCard } from 'src/app/models/cue-card';
import { trigger, state, style, transition, animate, animateChild, query } from '@angular/animations';


// responsible for administering a session's test of this set of cue cards, as it progresses through the leitner-system.
// does not track multiple attempts in a single session, deliberately to mirror website design at `ncase.me/remember`, but also to be forgiving to learners.
  @Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
  animations: [
    //putting this animation here confuses me a bit, but i think it's necessary.
    //i need it here to correctly scope with the destruction logic, and the destruction logic needs to exist in the quiz component, since *ngIf="blah" must be here to trigger * => void. if i'm correct. I think I'm correct.
    // it's problematic though because the translation distance may need to consider the much larger canvas size i'm using for the entire quiz region... 
    // even though semantically the animation appears to be applying to the child...
    // i may even do the animateChild() implementation i saw online, and move this right back into the child after all. but let's just get a simpler version working first.
    trigger('yo', [
      //transition('void => *', [
      transition(':enter', [
          style({ transform: 'translateX(-100%)'}), 
        animate('1s')
      ]),
      transition('* => void', [
        style({ transform: 'translateX(0)', opacity: 1 }),
        animate('1s', style({ transform: 'translateX(100%)', opacity: 0 })),
        query('@*', [animateChild()], {optional: true}),
        //animate('1s', style({transform: "scaleY(0)", height: "0"}))

      ])
    ]),
    trigger('fadeInOut', [
      transition('void => *', [
        //query('h1', style({ opacity: 0 })),
        style({opacity:0, transform: 'translateX(0)'}), //style only for transition transition (after transiton it removes)
        animate(500, style({opacity:1, transform: 'translateX(100%)'})) // the new state of the transition(after transiton it removes)

        
      ]),
      transition('* => void', [
        animate(500, style({opacity:0})), // the new state of the transition(after transiton it removes)
    
      ])
    ])
  ]
})
export class QuizComponent implements OnInit {

  quizzingCard: QuizzingCueCard;
  quizzingRemains: QuizzingCueCard[];

  //private _showButtons: boolean = false;
  hasSeenBack: boolean = false; 
  cardsLeft: number;

  constructor(stm: StudyTopicManagerService) {
    this.pickQuizCard(stm.studiableActive.quizCueCards); //test .. well.. expect since 'pass-by-val' then it'll be a copy... as all functions in javascript are...or wait, 
  }

  ngOnInit() {
  }
  
  pickQuizCard(quizCueCards: QuizzingCueCard[]) {
    //filter out cards successfully recalled
    this.quizzingRemains = quizCueCards.filter(qcc => qcc.recall !== QuizStatus.pass);
    
    //serve all non-attempted once in order, then serve any remaining un-passed in random order.
    let nonAttempted = this.quizzingRemains.filter(qcc => !qcc.attempted)
    this.cardsLeft = this.quizzingRemains.length;

    if (nonAttempted.length > 0) {
      this.quizzingCard = this.quizzingRemains.find(qcc => !qcc.attempted);
    }
    else if (this.quizzingRemains.length > 0) {
      let index = Math.floor(Math.random() * this.quizzingRemains.length);
      this.quizzingCard = this.quizzingRemains[ index ];
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
}

//most advanced stage of visibility progression, hence named "seen" 
//enum SideSeen { /*None,*/ Front, FrontAndBack }
//enum ShowCountButtons { Count, Buttons }
