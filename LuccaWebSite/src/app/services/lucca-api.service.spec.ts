import { TestBed } from '@angular/core/testing';

import { LuccaApiService } from './lucca-api.service';

describe('LuccaApiService', () => {
  let service: LuccaApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LuccaApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
