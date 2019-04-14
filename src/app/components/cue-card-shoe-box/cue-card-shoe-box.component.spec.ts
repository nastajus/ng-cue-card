import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CueCardShoeBoxComponent } from './cue-card-shoe-box.component';

describe('CueCardShoeBoxComponent', () => {
  let component: CueCardShoeBoxComponent;
  let fixture: ComponentFixture<CueCardShoeBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CueCardShoeBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CueCardShoeBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
