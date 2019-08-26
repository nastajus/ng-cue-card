import { Injectable } from '@angular/core';
import { CueCard, Studiable, StudyTopic } from '../models/cue-card';

@Injectable({
  providedIn: 'root'
})
export class DbFakeService {

  private _studiables: Studiable[];
  public get studiables() { return this._studiables; }

  //i want to kill this
  //private _topics: StudyTopic[];
  //TODO REMOVE MAYBE
  //i want this to dynamically populate from whatever's inside _studiables.x'th index. map i think.
  // public get topics(): StudyTopic[] { return this._topics; };
  // public get topics(): StudyTopic[] {   };
  public get topics(): StudyTopic[] { return this._studiables.map(studiable => studiable.studyTopic) };

  public topicActive: StudyTopic;
  public studiableActive: Studiable;
  public get records() { return this.studiableActive.quizCueCards };

  //this will be used to fake store in a database for the time being.
  //intend this to be written more generically than just "cue card db".
  constructor() { 
    this._studiables = [];

    let gamelore_studiable : Studiable  = new Studiable(
      new StudyTopic ("game lore"), [
      //the topic is necessarily something i know *VERY* WELL, so I don't 
      //get bogged down in researching unimportant facts I would care about.
      //ideally something I consider so trivial as it takes near-zero effort.
      //yet still factually verifiable externally
      new CueCard("Super Mario Bros is for what platform?", "Nintendo"),
      new CueCard("The first female protagonist in video games is named ____ ?", "Samus"),
      new CueCard("The code to unlock 30 bonus lives in Contra III is?", "up down up down left right left right a b"),
      new CueCard("The Super Famicom was released in what year?") //no idea---deliberately no answer.
    ]);

    let fullstack_studiable: Studiable = new Studiable(
      new StudyTopic("fullstack dev"), [
        //short reply: kinda breaks my system... otherwise i'd have paragraphs here.... maybe it proves my system is good instead... hmm.
        new CueCard("What is a reason that Angular 2 needs Node.js?", "Angular does not need node.js directly. Node js is used for all the build and development tools."),
        // great example that would benefit from rich text support... (i literally need the emphasis to remember...)
        new CueCard("What is DevOps?", "it is software dev practices for both Soft Development and Info Tech Operations (Ops) to shorten the systems development life cycle while delivering features, fixes, and updates frequently in close alignment with business objectives.")
      ]
    );

    let observable_studiable: Studiable = new Studiable(
      new StudyTopic("rxjs"), [
        //todo: keep history of previous Q/A.... build interface to allow previous versions... yeesh... endless scope creep. be more ruthless in cutting out these spurious ideas.
        new CueCard("how does a basic observable subscription operate?", "one side emits 'a stream of data', the other subscribes to said emission and does stuff"),
        new CueCard("what is the syntax for creating an 'observable'?"),
        new CueCard("what is an 'observer'?"),
        //todo: support code backticks rendering ... full markdown... yeesh. stop it.
        new CueCard("how did `pipe` change with rxjs v5.5?"),
        new CueCard("what kind of chainable operations exist?"),
      ]
    );

    let nutrition_studiable: Studiable = new Studiable(
      new StudyTopic("nutrition*"), [
        new CueCard("what benefit does exercise confer to fat loss?", "elevated metabolism burns more calories passively."),
        new CueCard("which is more important to fat loss: exercise or diet?", "diet because it's waaay easier to overeat 100s of calories in mere seconds, whereas it takes much more effort to burn 100s over an hour."),
        new CueCard("how much sugar does WHO recommend in a day?", "WHO recommends a maximum of 5 to 10 teaspoons of free sugars per day."),
        new CueCard("what time and what kind of food is the most dangerous eat, that can cause the most fat gain?", "late night before bed is most susceptible to binge eating, especially carbs have the worst impact."),
        new CueCard("which 2 vitamins commonly need supplementation in a vegetarian / vegan diet?", "Vitamin B12 and Vitamin D"),
      ]
    );

    let exercise_studiable: Studiable = new Studiable(
      new StudyTopic("exercise"), [
        new CueCard()
      ]
    );

    let culinary_indian: Studiable = new Studiable(
      new StudyTopic("culinary indian"), [
        new CueCard("name a dozen essential spices used in Indian cuisine.", "Cardamom, Clove, Cumin, Coriander, Nutmeg, Fenugreek, Turmeric.... and Garam masala, Cinnamon,... and Mustard seeds, and Fennel seeds..."),
        new CueCard("what does 'masala' mean, basically?", "spices."), 
        new CueCard("what does 'masala' mean, more comprehensively?", "'any of the many spice mixes used in South Asian cuisine'"), 
        new CueCard("what does 'tikka' mean?", "simmered in a sauce made of onions, tomatoes, and cream (or yogurt"), 
        new CueCard("what does 'chana' mean?", "chickpeas"),
        new CueCard("what does 'vindaloo' mean?", "always meat, often potatoes, watered down spiciness for whitees, supreme spice in native land though."),
        new CueCard("what is chana masala?", "consists of boiled chickpeas that have been cooked in a tomato-onion gravy. "),
        new CueCard("mega: what are all these: tikka masala, vindaloo, chana masala"),
        new CueCard("the heck is 'Dal makhani'?", "buttered lentils!!"),
        new CueCard("what's 'korma' mean?", "meat, usually chicken or lamb"),
        new CueCard("what's 'biryani'?", "...i'll say: 'specially prepared rice, there is no sauce...'"),
        new CueCard("what's 'tandoori' mean?", "not sure, but it's always used as 't_____i chicken'."),
      ]
    )

    let culinary_japanese: Studiable = new Studiable(
      new StudyTopic("culinary japanese"), [
        //todo: support newlines.
        new CueCard("what do each of these mean: sushi,  sashimi,  maki,  nigiri,  and bonus: 'roll'", "sushi: common misnomer usage. also .... \n sashimi: just the fish. \n nigiri: hand-formed rice ball, w/ fish slice on it. \n maki: type of seaweed wrap. \n roll: 'when rice outside, seaweed inside (california roll, aka normal here)' "),
        //todo: need a flip feature, like google translate, that moves typed content between Q/A fields at a simple click.
        new CueCard("what is the japanese word for vegetarian?", "futo"),
        new CueCard("what word means cooked shrimp?", "ebi"),
        new CueCard("what word means imitation crab?", "kani")
      ]
    );

    this._studiables.push( new Studiable(gamelore_studiable.studyTopic, gamelore_studiable.quizCueCards.slice(1) ));
    this._studiables.push(fullstack_studiable);
    this._studiables.push(observable_studiable);
    this._studiables.push(nutrition_studiable);
    this._studiables.push(exercise_studiable);
    this._studiables.push(culinary_indian);
    this._studiables.push(culinary_japanese);

    this.studiableActive = this._studiables[0];
  }
}
