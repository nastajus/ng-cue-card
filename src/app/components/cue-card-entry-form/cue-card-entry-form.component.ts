import { Component, OnInit, ViewChild, ElementRef, OnChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CueCardLoaderService } from 'src/app/services/cue-card-loader.service';
import { CueCard } from 'src/app/models/cue-card';

@Component({
  selector: 'app-cue-card-entry-form',
  templateUrl: './cue-card-entry-form.component.html',
  styleUrls: ['./cue-card-entry-form.component.scss']
})
export class CueCardEntryFormComponent implements OnInit {

  ccEntryForm: FormGroup;
  successfulSubmissionTimer: Timer;

  get question() {
    return this.ccEntryForm.get('question');
  }

  get answer() {
    return this.ccEntryForm.get('answer');
  }

  constructor(private fb: FormBuilder, public ccLoaderService: CueCardLoaderService) { 
    ccLoaderService.cueCardActive$.subscribe( 
      (cueCard: CueCard) => {
        this.cueCardUpdateTo(cueCard);
      }
    );
  }

  ngOnInit() { 
    this.cueCardUpdateTo(this.ccLoaderService.cueCardActive);
  }

  cueCardUpdateTo(cueCardActive: CueCard) {

    //ugly nested ternary operator, as TS doesn't yet support Null-conditional operators
    let q = cueCardActive == null ? '' : (cueCardActive.question == null ? '' : cueCardActive.question);
    let a = cueCardActive == null ? '' : (cueCardActive.answer == null ? '' : cueCardActive.answer);

    this.ccEntryForm = this.fb.group({
      question: [q, Validators.required],
      answer: [a, Validators.required]
    }, {validator: this.customValidationFunction});

    //this captures output when user types in the input field, bc `valueChanges` is an Observable
    this.ccEntryForm.valueChanges.subscribe( console.log );
  }

  //allow either field Q or A to be a valid cue card. 
  customValidationFunction(formGroup: FormGroup): any { 
    // don't understand why question|answer are undefined. =/
    // let question = this.question.value;
    // let answer = this.answer.value;
    let question = formGroup.controls['question'].value;
    let answer = formGroup.controls['answer'].value;

    let result = {};
    //don't understand why ['answer'].value returns empty string "" instead of null. =/    
    //if (question !== null) { result.questionHasContent = true };
    //if (answer !== null) { result.answerHasContent = true };
    if (question !== "") { Object.assign(result, { questionHasContent: true} ) };
    if (answer !== "") { Object.assign(result, { answerHasContent: true} ) };
    return result === {} ? null : result;
  }

  //submit handles both Edit and Add scenarios
  submitHandler(currentFormsCueCard) {
    if (this.ccLoaderService.cueCardActive !== null && currentFormsCueCard !== null) { 
      this.editInService(currentFormsCueCard);
    }
    else {
      this.addToService();
    }
  }

  addToService() {
    const cueCard = new CueCard(this.question.value, this.answer.value);
    var successful = false;

    try {
      this.ccLoaderService.add(cueCard);
      successful = true;
      this.successfulSubmissionTimer = new Timer();
    } catch(err) {
      console.error(err);
    }

    if (successful) {
      this.clearFormValues();
    }
  }

  editInService(newCueCard: CueCard) {
    try {
      this.ccLoaderService.edit(this.ccLoaderService.cueCardActive, newCueCard);
    } catch(err) {
      console.error(err);
    }
  }

  deleteFromService() {
    try {
      this.ccLoaderService.delete(this.ccLoaderService.cueCardActive);
    } catch(err) {
      console.error(err);
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

