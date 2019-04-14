import { Component, OnInit } from '@angular/core';
import { CueCardLoaderService } from 'src/app/services/cue-card-loader.service';
import { CueCard } from 'src/app/models/cue-card';

@Component({
  selector: 'app-cue-card-shoe-box',
  templateUrl: './cue-card-shoe-box.component.html',
  styleUrls: ['./cue-card-shoe-box.component.scss']
})
export class CueCardShoeBoxComponent implements OnInit {

  constructor(private ccLoaderService: CueCardLoaderService) { }

  dummyCard: CueCard = new CueCard("asdf", "qwer");

  ngOnInit() {
    this.ccLoaderService.cueCards;
  }

}
