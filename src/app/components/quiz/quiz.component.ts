import { Component, OnInit } from '@angular/core';
import { StudyTopicManagerService } from 'src/app/services/study-topic-manager.service';
import { CueCard, QuizzingCueCard, QuizStatus, Studiable } from 'src/app/models/cue-card';
//import { faCoffee } from '@fortawesome/free-solid-svg-icons';
//import { faCoffee, faGrinSquint } from '@fortawesome/free-solid-svg-icons';
//import  *  from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  quizzingCard: QuizzingCueCard;
  quizzingRemains: QuizzingCueCard[];
  //studiables: QuizzingCueCard[];
  //studiables: Studiable[];

  //sideSeen: SideSeen;
  showButtons: boolean = false;
  //showButtons: ShowCountButtons = ShowCountButtons.Count;
  cardsLeft: number;

  // responsible for administering a session's test of this set of cue cards, as it progresses through the leitner-system.
  // does not track multiple attempts in a single session, deliberately to mirror website design at `ncase.me/remember`, but also to be forgiving to learners.

  constructor(stm: StudyTopicManagerService) {
    //this.studiables = stm.studiableActive
    //console.log(this.serveQuestion());
    //this.updateQuizzableRemaining(stm.studiableActive.quizCueCards);
    //this.pickQuizCard(this.quizzingRemains);
    //this.showPickedQuizCard(this.quizzingCard);

    //this.quizzingRemains = stm.studiableActive.quizCueCards;
    this.pickQuizCard(stm.studiableActive.quizCueCards); //test .. well.. expect since 'pass-by-val' then it'll be a copy... as all functions in javascript are...or wait, have i misunderstood...? probably. test!

  }
  
  // updateQuizzableRemaining(quizCueCards: QuizzingCueCard[]) {
  //   this.quizzingRemains = quizCueCards.filter(qcc => qcc.recall !== QuizStatus.pass);
  // }

  pickQuizCard(quizCueCards: QuizzingCueCard[]) {
    //filter out cards successfully recalled
    this.quizzingRemains = quizCueCards.filter(qcc => qcc.recall !== QuizStatus.pass);
    
    //serve all non-attempted once in order, then serve any remaining un-passed in random order.
    //let nonAttempted: QuizzingCueCard[] = quizCueCards.filter(qcc => !qcc.attempted); //.find( _ => _.);
    //if (nonAttempted) {
    let nonAttempted = this.quizzingRemains.filter(qcc => !qcc.attempted)
    this.cardsLeft = this.quizzingRemains.length;

    if (nonAttempted) {
      this.quizzingCard = this.quizzingRemains.find(qcc => !qcc.attempted);
    }
    else if (this.quizzingRemains) {
      this.quizzingCard = this.quizzingRemains[Math.floor(Math.random() * this.quizzingRemains.length - 1)];
    }
    else {
      this.quizzingCard = null;
    }

    

    //this.sideSeen = SideSeen.Front;
    
    //[ { x: 22 }, { x: 42 } ].map( el => el.x ).reduce( maxCallback2, -Infinity );
    //let notAttemptedYet = quizCueCards.map( qcc => qcc.attempted ).reduce( attempted => !attempted, -Infinity); //Type 'boolean' is not assignable to type 'number'.ts(2322)
  }

  // showPickedQuizCard(quizCueCard: QuizzingCueCard) {

  // }

  yahRecalled(qcc: QuizzingCueCard) {
    qcc.recall = QuizStatus.pass;
    this.pickQuizCard(this.quizzingRemains);
    this.showButtons = false;
    //slide out, show to front
  }

  nahForgot(qcc: QuizzingCueCard) {
    qcc.recall = QuizStatus.fail;
    qcc.attempted = true;
    this.pickQuizCard(this.quizzingRemains);
    
  }

  //doesn't matter, whatever is emitted, i show this anyways
  //fn($event){
  // fn(){
  //   this.showButtons = true;
  // }


  doQuiz() {
  }


  ngOnInit() {
  }

}

//most advanced stage of visibility progression, hence named "seen" 
//enum SideSeen { /*None,*/ Front, FrontAndBack }
//enum ShowCountButtons { Count, Buttons }