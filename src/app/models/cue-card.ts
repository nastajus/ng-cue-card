//very simple initial design for rapid prototyping
export class CueCard {

    question: string;
    answer: string;

    constructor(q: string, a?: string) {
        this.question = q;
        this.answer = a;
    }
}