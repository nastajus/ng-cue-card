import { Component, OnInit } from '@angular/core';
import { CueCardLoaderService } from 'src/app/services/cue-card-loader.service';
import { CueCard } from 'src/app/models/cue-card';
import * as shoeBoxStylesJson from 'src/app/generated/styles/cue-card-shoe-box.json';


@Component({
  selector: 'app-cue-card-shoe-box',
  templateUrl: './cue-card-shoe-box.component.html',
  styleUrls: ['./cue-card-shoe-box.component.scss']
})
export class CueCardShoeBoxComponent implements OnInit {

  constructor(public ccLoaderService: CueCardLoaderService) { }
  
  ngOnInit() {
    console.log(shoeBoxStylesJson);
  }

}
