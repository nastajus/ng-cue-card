import { TestBed } from '@angular/core/testing';

import { DbFakeService } from './db-fake.service';

describe('DbFakeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DbFakeService = TestBed.get(DbFakeService);
    expect(service).toBeTruthy();
  });
});
