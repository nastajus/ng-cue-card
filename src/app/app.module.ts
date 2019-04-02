import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CueCardComponent } from './components/cue-card/cue-card.component';
import { CueCardListComponent } from './components/cue-card-list/cue-card-list.component';
import { DbFakeComponent } from './components/db-fake/db-fake.component';


@NgModule({
  declarations: [
    AppComponent,
    CueCardComponent,
    CueCardListComponent,
    DbFakeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [DbFakeComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
