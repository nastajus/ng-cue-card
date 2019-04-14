import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CueCardComponent } from './components/cue-card/cue-card.component';
import { CueCardListComponent } from './components/cue-card-list/cue-card-list.component';
import { DbFakeComponent } from './components/db-fake/db-fake.component';
import { CueCardEntryFormComponent } from './components/cue-card-entry-form/cue-card-entry-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CueCardSelectorComponent } from './components/cue-card-selector/cue-card-selector.component';
import { CueCardShoeBoxComponent } from './components/cue-card-shoe-box/cue-card-shoe-box.component';


@NgModule({
  declarations: [
    AppComponent,
    CueCardComponent,
    CueCardListComponent,
    DbFakeComponent,
    CueCardEntryFormComponent,
    CueCardSelectorComponent,
    CueCardShoeBoxComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DbFakeComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
