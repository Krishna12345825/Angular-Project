import { TestBed } from '@angular/core/testing';

import { PostDetailService } from './post-detail.service';

describe('PostDetailService', () => {
  let service: PostDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
