import { strictEqual } from 'assert';

//very simple initial design for rapid prototyping
export class CueCard {

    //private _id: number;

    public question: string;
    public answer: string;

    public topicCurrent: StudyTopic;
    public quizzingHistory: QuizzingMoment[];

    constructor(q?: string, a?: string, t?: StudyTopic) {
        this.question = q;
        this.answer = a;
        this.topicCurrent = t;
    }
}

export class QuizzingCueCard extends CueCard {
    recall: QuizStatus;
    attempted: boolean;
    //visible: boolean;// = true; //doesn't auto initialize when casting 
}

export enum QuizStatus { fail, pass }

//a historic record
export class QuizzingMoment {

    //public topic: string;
    public topic: StudyTopic;
    public history: QuizStatus[];

    //constructor(t: string) {
    constructor(t: StudyTopic) { 
        this.topic = t;
    }
}

//(probably pointless) an abstraction for a string. (probably should get rid of)
export class StudyTopic {
    private _topic: string;
    get topic() { return this._topic; }
    set topic(topic: string) { 
        this._topic = topic;
    }

    constructor(t: string) { 
        this._topic = t;
    }
}

export class Studiable {

    public studyTopic: StudyTopic;
    public quizCueCards: QuizzingCueCard[];

    constructor(st: StudyTopic, cc?: CueCard[]) {
        this.studyTopic = st;
        this.quizCueCards = <QuizzingCueCard[]>cc;
        //this.quizCueCards.map( x => x.visible = true );
    }
}
