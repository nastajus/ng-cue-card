import { Component, OnInit, ViewChild, ComponentFactoryResolver, Type, ViewContainerRef, ComponentRef, ViewChildren, ElementRef } from '@angular/core';
import { StudyTopicManagerService } from 'src/app/services/study-topic-manager.service';
import { QuizzingCueCard, QuizStatus } from 'src/app/models/cue-card';
import { CueCardComponent } from '../cue-card/cue-card.component';
import sassExport from 'src/app/generated/styles/base';


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
  //TODO: put correct type here, that is compatible with other expressions, so VSCode's F12 can succeed to go to definition on: `components[0].instance.hasRecalled`.
  //components: CueCardComponent[] = [];  //i tried, caused more errors... leaving untyped ... for now...
  //components: ComponentRef<CueCardComponent>[] = []; //well...this succeeded in addComp(), but failed in removeComp()...


  @ViewChild('container', {read: ViewContainerRef}) container: ViewContainerRef;

  //this is supposed to be "cleaner"... yeesh. 
  //@ViewChildren('cc_container') cc_container: QueryList<any>;
  //@ViewChildren('cc_container') cc_container: ElementRef;
  //@ViewChild('cc_container', { read: ElementRef }) cc_container: ElementRef;
  @ViewChild('cc_container') cc_container: ElementRef;
  cueCardHeight = this.getCssObject('$card-height-with-padding-px').compiledValue;

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
    component.instance.isDoneAnim.subscribe(_evt => this.onDoneAnimSlide() );
    component.instance.onBackShown.subscribe(_evt => this.showButtons(_evt) );

    //****************************************************************************************************************************************************************/
    //HERE BE DRAGONS, BEWARE
    //this parent component only needs to apply style="position: absolute" onto the entire `c-c-c` only, but leave `position: relative` as default for other usages.
    //which is further complicated by needing to now specify the height or the following buttons will now collapse under.
    //god, this code spaghetti is horrible. i'd *RATHER* put that style *HERE* than in `quiz.comp.html` !!!
    //but now it's getting worse, I *also* have to keep putting *more* "style" code here with my above justiciation, which I'm increasingly hating.
    //grumble
    //i'm uncertain a best practice in this situation...
    //all options suck, but i'm *trying* to enforce a *good* standard, which still seems I'm failing...
    //yet despite all my reservations, perhaps more important than all my design qualms is the GETTING THINGS DONE MENTALITY.
    //i'd rather *push* myself to GET THIS DONE into a viable MINIMUM VIABLE PRODUCT, instead of spending *excessive* time wrangling with *best* practice here.
    //"it works", "it's fine", just note it as a TODO for now, keep working towards MVP instead.
    //END
    //----------------------------------------------------------------------------------------------------------------------------------------------------------------/

    //TODO: make better design for maintainability (unclear separation of concerns, now breaking more separations, normally styles in templates, and 'logic' in classes)
    //necessary to prevent overlapping second-instantiated `c-c-c`
    component.location.nativeElement.style.position = "absolute";

    //necessary bc of above postiion: absolute, to keep flow relative after this.
    this.cc_container.nativeElement.style.height = this.cueCardHeight;

    //necessary bc of above position: absolute, to center horizontally.
    component.location.nativeElement.style.left = 0;
    component.location.nativeElement.style.right = 0;
    component.location.nativeElement.style.margin = "auto";
    //****************************************************************************************************************************************************************/

    // Push the component so that we can keep track of which components are created
    this.components.push(component);
  }


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
    
    //any quizzing cards left
    if (this.quizzingCards) {
      //trigger animation: slide right off screen
      this.components[0].instance.hasRecalled = true;
      this.addComponent(this.quizzingCards.slice(-1)[0]); //slice(-1)[0] gets last element.
    }
    else {
      //OMG i hate this design, no separation of concerns... UGH. and this is my *compromise* attempt to save that still!!
      //thank god, i don't need to spill out these bad design to other areas, AT LEAST it's contained to ONE area above!!!!
      this.cc_container.nativeElement.style.height = 0;

      //go immediately to normal "onDoneAnimSlide" scenario, since this time we're skipping that anyways.
      this.onDoneAnimSlide();
    }
  }

  //TODO: solve bug with rapid clicking: at some point, enough clicks here somehow stops the "auto-flip" happening.
  nahForgot(qcc: QuizzingCueCard) {
    qcc.recall = QuizStatus.fail;
    qcc.attempted = true;
    this.pickQuizCard(this.quizzableRemains);

    //trigger animation: slide left and back under 'pile'.
    this.components[0].instance.hasRecalled = false;

    //any quizzing cards left
    if (this.quizzingCards) {
      this.addComponent(this.quizzingCards.slice(-1)[0]); //slice(-1)[0] gets last element.
    }
  }

  showButtons($event) {
    this.hasSeenBack = $event;
  }

  onDoneAnimSlide() {
    this.slideAnimDone = true;

    if (this.quizzingCards) {
      this.setSecondCardAsPrimary();
    }

    this.removeFirstComponent();
    this.slideAnimDone = false;
  }

  setSecondCardAsPrimary() {
    this.quizzingCards[0] = this.quizzingCards[1];
    this.quizzingCards.splice(-1, 1);
  }

  //TODO: put in utils class or something
  getCssObject(cssPropertyName: string) : { name: string, value: string, compiledValue: string } {
    var result = sassExport.variables.find(obj => {
      return obj.name === cssPropertyName;
    })
    return result;
  } 
}
