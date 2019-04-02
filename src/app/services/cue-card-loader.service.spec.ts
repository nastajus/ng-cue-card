import { TestBed } from '@angular/core/testing';

import { CueCardLoaderService } from './cue-card-loader.service';

describe('CueCardLoaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CueCardLoaderService = TestBed.get(CueCardLoaderService);
    expect(service).toBeTruthy();
  });
});
