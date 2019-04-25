import { Component, OnInit } from '@angular/core';
import { CueCard } from 'src/app/models/cue-card';
import { CueCardLoaderService } from 'src/app/services/cue-card-loader.service';

@Component({
  selector: 'app-cue-card-list',
  templateUrl: './cue-card-list.component.html',
  styleUrls: ['./cue-card-list.component.css']
})
export class CueCardListComponent implements OnInit {

  cueCards: CueCard[] = [];

  constructor(public ccLoaderService: CueCardLoaderService) { 
    this.cueCards = this.ccLoaderService.cueCards;
  }

  ngOnInit() {
  }

}
