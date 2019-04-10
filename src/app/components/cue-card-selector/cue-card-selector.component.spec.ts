import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CueCardSelectorComponent } from './cue-card-selector.component';

describe('CueCardSelectorComponent', () => {
  let component: CueCardSelectorComponent;
  let fixture: ComponentFixture<CueCardSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CueCardSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CueCardSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
