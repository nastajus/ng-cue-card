import { TestBed } from '@angular/core/testing';

import { StudyTopicManagerService } from './study-topic-manager.service';

describe('StudyTopicManagerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StudyTopicManagerService = TestBed.get(StudyTopicManagerService);
    expect(service).toBeTruthy();
  });
});
