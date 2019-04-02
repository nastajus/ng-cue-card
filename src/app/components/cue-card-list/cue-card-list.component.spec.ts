import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CueCardListComponent } from './cue-card-list.component';

describe('CueCardListComponent', () => {
  let component: CueCardListComponent;
  let fixture: ComponentFixture<CueCardListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CueCardListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CueCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
