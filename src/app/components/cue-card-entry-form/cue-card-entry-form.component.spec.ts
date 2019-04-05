import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CueCardEntryFormComponent } from './cue-card-entry-form.component';

describe('CueCardEntryFormComponent', () => {
  let component: CueCardEntryFormComponent;
  let fixture: ComponentFixture<CueCardEntryFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CueCardEntryFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CueCardEntryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
