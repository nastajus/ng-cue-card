import { Component, OnInit } from '@angular/core';
import { CueCardLoaderService } from 'src/app/services/cue-card-loader.service';
import { saveAs } from 'file-saver';
import { CueCard } from 'src/app/models/cue-card';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-file-saver',
  templateUrl: './file-saver.component.html',
  styleUrls: ['./file-saver.component.scss']
})
export class FileSaverComponent implements OnInit {

  constructor(private ccLoaderService: CueCardLoaderService) { }

  ngOnInit() {
  }

  saveCards() {
    //this.ccLoaderService.cueCards$.first().subscribe(       //old way
    this.ccLoaderService.cueCards$.pipe(first()).subscribe(   //Update from RxJS 5.5+ / 2018
    (cueCards: CueCard[]) => {
        var blob = new Blob( [ JSON.stringify(cueCards, null, 4) ], {type: "application/json;charset=utf-8"});
        saveAs(blob, "cc-cards.txt");
      }
    );
  }

  


}
