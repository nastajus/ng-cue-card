import { TestBed } from '@angular/core/testing';

import { LeitnerSystemService } from './leitner-system.service';

describe('LeitnerSystemService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LeitnerSystemService = TestBed.get(LeitnerSystemService);
    expect(service).toBeTruthy();
  });
});
