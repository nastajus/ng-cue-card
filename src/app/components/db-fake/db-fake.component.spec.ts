import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbFakeComponent } from './db-fake.component';

describe('DbFakeComponent', () => {
  let component: DbFakeComponent;
  let fixture: ComponentFixture<DbFakeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbFakeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbFakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
