import { TestBed } from '@angular/core/testing';

import { BruteForceServiceService } from './brute-force-service.service';

describe('BruteForceServiceService', () => {
  let service: BruteForceServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BruteForceServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
