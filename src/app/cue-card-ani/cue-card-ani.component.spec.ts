import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CueCardAniComponent } from './cue-card-ani.component';

describe('CueCardAniComponent', () => {
  let component: CueCardAniComponent;
  let fixture: ComponentFixture<CueCardAniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CueCardAniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CueCardAniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
