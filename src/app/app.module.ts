import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CueCardComponent } from './components/cue-card/cue-card.component';
import { CueCardListComponent } from './components/cue-card-list/cue-card-list.component';
import { DbFakeService } from './services/db-fake.service';
import { CueCardEntryFormComponent } from './components/cue-card-entry-form/cue-card-entry-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CueCardSelectorComponent } from './components/cue-card-selector/cue-card-selector.component';
import { CueCardShoeBoxComponent } from './components/cue-card-shoe-box/cue-card-shoe-box.component';
import { TestComponent } from './components/test/test.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { StudyTopicComponent } from './components/study-topic/study-topic.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

// import entire icon styles. But be careful! Whatever you import may end up bloating your final bundle with icons you're not using.
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { YoComponent } from './components/yo/yo.component';
//import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fas, far);

@NgModule({
  declarations: [
    AppComponent,
    CueCardComponent,
    CueCardListComponent,
    CueCardEntryFormComponent,
    CueCardSelectorComponent,
    CueCardShoeBoxComponent,
    TestComponent,
    QuizComponent,
    StudyTopicComponent,
    YoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  providers: [DbFakeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
