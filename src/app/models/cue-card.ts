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

//put any kind of string validation into StudyTopic... here i might want to limit being in json ...
//like what though?? and really should *VALIDATION* exist HERE??? ... I'm not seeing the point of upping it to class object instance...
//well, if i allow *ANY* string, I can't really deduce a topic is same or different after a rename... I'D *RATHER* USE
// an OBJECT INSTANCE that is reused many times, that points to one copy of the string literal held in memory, *INSTEAD*
// of searching through every single quizzing moment in all arrays to replace all strings. That's waaaay worse!!
//Except that JavaScript doesn't support references the above way, so it's all pointless.

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

//TODO:
//this one i want to be strictly limited such that a cue card is allowed to *ONLY* be in one topic set at a time!
//hence, the need for immutiability. hence, no public setters. hence, an extra layer of class for interacting with...
//it's not worth enforcing right up front... i'm still prototyping the design................
export class Studiable {

    public studyTopic: StudyTopic;
    public quizCueCards: QuizzingCueCard[];

    constructor(st: StudyTopic, cc?: CueCard[]) {
        this.studyTopic = st;
        this.quizCueCards = <QuizzingCueCard[]>cc;
    }

}

