import { Component, OnInit } from '@angular/core';
import { CueCardLoaderService } from 'src/app/services/cue-card-loader.service';

@Component({
  selector: 'app-test-box',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor(public ccLoaderService: CueCardLoaderService) { }
  
  ngOnInit() { }

}
