import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CueCardLoaderService } from 'src/app/services/cue-card-loader.service';
import { CueCard } from 'src/app/models/cue-card';

@Component({
  selector: 'app-cue-card-entry-form',
  templateUrl: './cue-card-entry-form.component.html',
  styleUrls: ['./cue-card-entry-form.component.css']
})
export class CueCardEntryFormComponent implements OnInit {

  cueCardEntryForm: FormGroup;
  successfulSubmissionTimer: Timer;


  constructor(private fb: FormBuilder, private cueCardLoaderService: CueCardLoaderService) { }

  ngOnInit() {
    this.cueCardEntryForm = this.fb.group({
      question: ['',  Validators.required],
      answer: ''
    });

    this.cueCardEntryForm.valueChanges.subscribe(console.log);
  }

  get question() {
    return this.cueCardEntryForm.get('question');
  }

  get answer() {
    return this.cueCardEntryForm.get('answer');
  }

  submitHandler() {
    const cueCard = new CueCard(this.question.value, this.answer.value);
    var successful = false;

    try {
      this.cueCardLoaderService.add(cueCard);
      successful = true;
      this.successfulSubmissionTimer = new Timer();
    } catch(err) {
      console.error(err);
    }

    if (successful) {
      this.clearFormValues();
    }
  }

  clearFormValues() {
    //reset() affects restors to `untouched` state, but also puts `null`. want '' instead.
    this.question.reset();
    this.question.setValue('');
    this.answer.reset();
    this.answer.setValue('');
  }

}

// just for limiting viewing time of "success!" message
class Timer {
  constructor(public counter = 2) {

    let intervalId = setInterval(() => {
        this.counter = this.counter - 1;
        console.log(this.counter)
        if(this.counter === 0) clearInterval(intervalId)
    }, 1000)
  }
}

