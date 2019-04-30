import { Component, OnInit } from '@angular/core';
import { StudyTopicManagerService } from 'src/app/services/study-topic-manager.service';
import { QuizzingCueCard, QuizStatus } from 'src/app/models/cue-card';

// responsible for administering a session's test of this set of cue cards, as it progresses through the leitner-system.
// does not track multiple attempts in a single session, deliberately to mirror website design at `ncase.me/remember`, but also to be forgiving to learners.
  @Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  quizzingCard: QuizzingCueCard;
  quizzingRemains: QuizzingCueCard[];

  showButtons: boolean = false;
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

    if (nonAttempted) {
      this.quizzingCard = this.quizzingRemains.find(qcc => !qcc.attempted);
    }
    else if (this.quizzingRemains) {
      this.quizzingCard = this.quizzingRemains[Math.floor(Math.random() * this.quizzingRemains.length - 1)];
    }
    else {
      this.quizzingCard = null;
    }
  }

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
}

//most advanced stage of visibility progression, hence named "seen" 
//enum SideSeen { /*None,*/ Front, FrontAndBack }
//enum ShowCountButtons { Count, Buttons }
