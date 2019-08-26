import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CueCardTopicComponent } from './cue-card-topic.component';

describe('CueCardTopicComponent', () => {
  let component: CueCardTopicComponent;
  let fixture: ComponentFixture<CueCardTopicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CueCardTopicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CueCardTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
