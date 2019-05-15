import { Component, OnInit, Input, ViewChild, ComponentFactoryResolver, Type, ViewContainerRef, ComponentRef } from '@angular/core';
import { StudyTopicManagerService } from 'src/app/services/study-topic-manager.service';
import { QuizzingCueCard, QuizStatus, CueCard } from 'src/app/models/cue-card';
import { CueCardComponent } from '../cue-card/cue-card.component';


// Responsible for administering a session's test of this set of cue cards, as it progresses through the leitner-system.
// does not track multiple attempts in a single session, deliberately to mirror website design at `ncase.me/remember`, but also to be forgiving to learners.
// Additionally, carefully controls the apperance of new cards at specific timings of animation.
  @Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  quizzingCards: QuizzingCueCard[] = [];
  quizzableRemains: QuizzingCueCard[];

  hasSeenBack: boolean = false; 
  hasRecalled: boolean = false;
  slideAnimDone: boolean = false;

  // Keep track of list of generated components for removal purposes
  components = [];
  //components: CueCardComponent[] = [];  //i tried, caused more errors... leaving untyped ... for now...
  //components: ComponentRef<CueCardComponent>[] = []; //well...this succeeded in addComp(), but failed in removeComp()...


  @ViewChild('container', {read: ViewContainerRef}) container: ViewContainerRef;

  constructor(stm: StudyTopicManagerService, private componentFactoryResolver: ComponentFactoryResolver) {
    this.pickQuizCard(stm.studiableActive.quizCueCards); //test .. well.. expect since 'pass-by-val' then it'll be a copy... as all functions in javascript are...or wait, 
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.addComponent(this.quizzingCards[0] );

    //this eliminates the issue with `ExpressionChangedAfterItHasBeenCheckedError`... 
    this.components[0].changeDetectorRef.detectChanges();
  }
  
  addComponent(qcc: QuizzingCueCard) {
    // Create component dynamically inside the ng-template
    const componentClass: Type<CueCardComponent> = CueCardComponent;
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentClass);
    let component = this.container.createComponent(componentFactory);

    component.instance.cueCard = qcc;

    // vscode better understands types here, so these event binds stay here, to protect me from me.
    component.instance.isDoneAnim.subscribe(_evt => this.onSlideUnderDone() );
    component.instance.onBackShown.subscribe(_evt => this.showButtons(_evt) ); //guessed correctly that this param is right.

    // Push the component so that we can keep track of which components are created
    this.components.push(component);
  }


  //omg this is horribly returning the FIRST component.... by accident... and... it's accidentally CORRECT. OMG. BC that's how .find works!
  removeFirstComponent() {
    // Find the first component
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
    this.quizzableRemains = quizCueCards.filter(qcc => qcc.recall !== QuizStatus.pass);
    
    //serve all non-attempted once in order, then serve any remaining un-passed in random order.
    let nonAttempted = this.quizzableRemains.filter(qcc => !qcc.attempted)

    if (nonAttempted.length > 0) {
      this.quizzingCards.push(this.quizzableRemains.find(qcc => !qcc.attempted));
    }
    else if (this.quizzableRemains.length > 0) {
      let index = Math.floor(Math.random() * this.quizzableRemains.length);
      this.quizzingCards.push(this.quizzableRemains[ index ]);
      console.log(index, this.quizzingCards);
    }
    else {
      //no cards left to quiz anymore
      this.quizzingCards = null;

      //this.quizzingCard = new QuizzingCueCard();
      //this.quizzingCard.visible = false;
    }

    //reset
    this.hasSeenBack = false;
  }

  //upon user successful recollection, trigger next card sequence, including animation.
  yahRecalled(qcc: QuizzingCueCard) {
    qcc.recall = QuizStatus.pass;
    this.pickQuizCard(this.quizzableRemains);
    
    //trigger animation: slide out and back under.
    this.components[0].instance.hasRecalled = true;

    //so, in v1, the template reacted automatically to more quizCards... now I have to manually .push another creation onto components[]
    //any quizzing cards left
    if (this.quizzingCards) {
      this.addComponent(this.quizzingCards.slice(-1)[0]); //slice(-1)[0] gets last element.
    }
  }

  //TODO: solve bug with rapid clicking: at some point, enough clicks here somehow stops the "auto-flip" happening.
  nahForgot(qcc: QuizzingCueCard) {
    qcc.recall = QuizStatus.fail;
    qcc.attempted = true;
    this.pickQuizCard(this.quizzableRemains);
  }

  showButtons($event) {
    this.hasSeenBack = $event;
  }

  onSlideUnderDone() {
    this.slideAnimDone = true;

    if (this.quizzingCards) {
      this.setAsPrimaryCard();
    }

    this.removeFirstComponent();
    this.slideAnimDone = false;
  }

  setAsPrimaryCard() {
    this.quizzingCards[0] = this.quizzingCards[1];
    this.quizzingCards.splice(-1, 1);
  }
}
