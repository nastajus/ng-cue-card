import { Component, OnInit, Input } from '@angular/core';
import { CueCard } from 'src/app/models/cue-card';

@Component({
  selector: 'app-cue-card',
  templateUrl: './cue-card.component.html',
  styleUrls: ['./cue-card.component.css']
})
export class CueCardComponent implements OnInit {

  @Input() cueCard: CueCard

  constructor() { }

  ngOnInit() {
  }

}
