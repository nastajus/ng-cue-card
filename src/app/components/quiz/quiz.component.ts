import { Component, OnInit, Input, ViewChild, ComponentFactoryResolver, Type, ViewContainerRef } from '@angular/core';
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
  quizzingRemains: QuizzingCueCard[];

  //private _showButtons: boolean = false;
  hasSeenBack: boolean = false; 
  cardsLeft: number;

  slideAnimDone: boolean = false;

  // Keep track of list of generated components for removal purposes
  components = [];
  //components: CueCardComponent[] = [];  //i tried, caused more errors... leaving untyped ... for now...

  // Expose class so that it can be used in the template
  cueCardComponent = CueCardComponent;

  hasRecalled;

  constructor(stm: StudyTopicManagerService, private componentFactoryResolver: ComponentFactoryResolver) {
    this.pickQuizCard(stm.studiableActive.quizCueCards); //test .. well.. expect since 'pass-by-val' then it'll be a copy... as all functions in javascript are...or wait, 
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.addComponent(this.cueCardComponent, this.quizzingCard[0] );

    //this eliminates the issue with `ExpressionChangedAfterItHasBeenCheckedError`... 
    this.components[0].changeDetectorRef.detectChanges();
  }
  
  @ViewChild('container', {read: ViewContainerRef}) container: ViewContainerRef;

  addComponent(componentClass: Type<CueCardComponent>, qcc: QuizzingCueCard) {
    // Create component dynamically inside the ng-template
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentClass);
    let component = this.container.createComponent(componentFactory);

    component.instance.cueCard = qcc;

    // vscode better understands types here, so these event binds stay here, to protect me from me.
    component.instance.isUnderneathOtherCard.subscribe(_evt => this.onSlideUnderDone() );
    component.instance.onBackShown.subscribe(_evt => this.showButtons(_evt) ); //guess.

    // Push the component so that we can keep track of which components are created
    this.components.push(component);
  }


  removeComponent(componentClass: Type<CueCardComponent>) {
    // Find the component
    const component = this.components.find((component) => component.instance instanceof CueCardComponent);
    const componentIndex = this.components.indexOf(component);

    if (componentIndex !== -1) {
      // Remove component from both view and array
      this.container.remove(this.container.indexOf(component));
      this.components.splice(componentIndex, 1);
    }
  }

  
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
    this.components[0].instance.hasRecalled = true;

    //so, in v1, the template reacted automatically to more quizCards... now I have to manually .push another creation onto components[]
    if (this.quizzingCard) {
      this.addComponent(this.cueCardComponent, this.quizzingCard.slice(-1)[0]); //slice(-1)[0] gets last element.
    }
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
    this.slideAnimDone = true; //ok so.. this correclty hides (destroys?) the 0th card... per my logic in .html... 
    if (this.quizzingCard) {
      this.setAsPrimaryCard();
    }
    this.removeComponent(this.components[0])
    this.slideAnimDone = false;
  }

  setAsPrimaryCard() {
    this.quizzingCard[0] = this.quizzingCard[1];
    this.quizzingCard.splice(-1, 1);
  }
}
