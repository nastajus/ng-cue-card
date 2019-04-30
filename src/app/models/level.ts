import { CueCard } from './cue-card';

export class Level {

    private _level: number;
    public get level() { return this._level; }

    private _cueCards: CueCard[];
    public get cueCards() { return this._cueCards; }
    public set cueCards(cueCards: CueCard[]) { 
        if (!cueCards) { throw new Error(`Cannot set cueCards with value: ${cueCards}`); }
        this._cueCards = cueCards;
    }

    constructor(l: number) {
        this._level = l;
    }
}