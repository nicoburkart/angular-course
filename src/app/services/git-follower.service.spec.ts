import { TestBed } from '@angular/core/testing';

import { GitFollowerService } from './git-follower.service';

describe('GitFollowerService', () => {
  let service: GitFollowerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GitFollowerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
