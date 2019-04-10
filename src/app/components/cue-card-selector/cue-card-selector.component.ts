import { Component, OnInit } from '@angular/core';
import { CueCardLoaderService } from 'src/app/services/cue-card-loader.service';
import { CueCard } from 'src/app/models/cue-card';

@Component({
  selector: 'app-cue-card-selector',
  templateUrl: './cue-card-selector.component.html',
  styleUrls: ['./cue-card-selector.component.css']
})
export class CueCardSelectorComponent implements OnInit {

  cueCards: CueCard[];
  cueCardActive: CueCard;

  constructor(private ccLoaderService: CueCardLoaderService) { 
    this.cueCards = ccLoaderService.cueCards;
    this.cueCardActive = ccLoaderService.cueCardActive;
  }

  ngOnInit() {
  }

  editHandler(event) {
    console.log(event);
  }

}
